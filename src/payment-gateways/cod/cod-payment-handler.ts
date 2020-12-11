import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const CoDPaymentHandler = new PaymentMethodHandler({
    code: 'cod-payment-provider',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Cash on Delivery Payment Provider',
    }],
	
	args: {
		
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
