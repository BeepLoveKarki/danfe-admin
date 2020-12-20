import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const KhaltiPersonalPaymentHandler = new PaymentMethodHandler({
    code: 'Khalti Personal',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay to Personal Khalti of Seller. Khalti restrictions may arise in this case. Please refer to https://khalti.com/info/transaction-limits/ for details. Do contact seller in case of any confusion.',
    }],
	
	args: {
	    'Khalti Wallet Mobile Number(s)': {
			type:'int',
			list:true
		}
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
