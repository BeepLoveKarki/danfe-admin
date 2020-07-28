import { PaymentMethodHandler, SettlePaymentResult, LanguageCode, CreatePaymentFn } from '@vendure/core';
//import gripeSDK from 'gripe'; //mock test

export const KhaltiPaymentHandler = new PaymentMethodHandler({
    code: 'khalti-payment-provider',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Khalti Payment Provider',
    }],
    
	args: {
        apiKey: { type: 'string' },
    },
    
	async createPayment(order, args, metadata) {
	   try {
		 /*const result = await gripeSDK.charges.create({
                apiKey: args.apiKey,
                amount: order.total,
                source: metadata.authToken,
         });*/
	     return {
                amount: order.total,
                state: 'Settled' as 'Settled',
                transactionId: '59089',
                metadata: {
					message:"Success"
				},
           };
	   } catch (err) {
	       return {
                amount: order.total,
                state: 'Declined' as 'Declined',
                metadata: {
                    errorMessage: err.message
                },
            };
	   }
	},
	
	async settlePayment(){
	  return {
            success: true,
      };
	}	
});



/*mutation {
    addPaymentToOrder(input: { 
        method: "khalti-payment-provider", //match with code of the method
        metadata: { id: "<some id from the payment provider>" }) {
        ...Order
    }
}*/