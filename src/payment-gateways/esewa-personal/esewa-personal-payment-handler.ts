import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const EsewaPersonalPaymentHandler = new PaymentMethodHandler({
    code: 'Esewa Personal',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay to Personal Esewa of Seller. Esewa restrictions may arise in this case. Please refer to https://blog.esewa.com.np/revision-in-transaction-limits/ for details. Do contact seller in case of any confusion.',
    }],
	
	args: {
	    'Esewa Wallet Mobile Number(s)': {
			type:'int',
			list:true
		}
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
