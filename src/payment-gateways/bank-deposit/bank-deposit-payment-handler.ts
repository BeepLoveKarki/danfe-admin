import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const BankDepositPaymentHandler = new PaymentMethodHandler({
    code: 'Bank Deposit',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay Via Bank Deposit',
    }],
	
	args: {
	    'Bank Name': {
			type: 'string',
			ui: {
			  component: 'select-form-input',
			  options:[
			   {value:"Agriculture Development Bank Ltd."},
			   {value:"Bank of Kathmandu Ltd."},
			  ],
			},
		 },
		'Bank Account Owner\'s Name': {type: 'string'},
		'Bank Account No.': {type: 'int'},
    },
	
	async createPayment(ctx, order, args, metadata) {
		   return {
                amount: order.total,
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
