import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const BankDepositPaymentHandler = new PaymentMethodHandler({
    code: 'Bank Deposit',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay Via Bank Deposit',
    }],
	
	args: {
	    'Bank Name': {type: 'string'},
		'Bank Account Owner\'s Name': {type: 'string'},
		'Bank Account No.': {type: 'int'},
    },
	
	async createPayment(ctx, order, amount, args, metadata) {
		   return {
                amount: amount,
                state: 'Authorized' as 'Authorized',
                metadata: {
				  public:{
                    message:"Success"
				  }
                },
            };
	},
	
	async settlePayment(){
	  return {
            success: true,
      };
	}
    	
});
