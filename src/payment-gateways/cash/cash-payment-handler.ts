import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const CashPaymentHandler = new PaymentMethodHandler({
    code: 'Cash Payment',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay via Cash on Delivery or In Cash while good(s) picked from store',
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
