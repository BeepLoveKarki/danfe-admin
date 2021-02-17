import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const InStorePaymentHandler = new PaymentMethodHandler({
    code: 'In Store Pick Up',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Visit In Store for Payment',
    }],
	
	args: {
		
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
