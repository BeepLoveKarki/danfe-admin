import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const CoDPaymentHandler = new PaymentMethodHandler({
    code: 'Cash on Delivery',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay via Cash on Delivery',
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
