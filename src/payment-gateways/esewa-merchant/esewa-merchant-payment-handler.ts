import {PaymentMethodHandler,LanguageCode} from '@vendure/core';
import fetch from 'node-fetch';

let postdata = <any>{};

export const EsewaMerchantPaymentHandler = new PaymentMethodHandler({
    code: 'Esewa Merchant',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Payment to Esewa Merchant Account of Seller',
    }],
    
	args: {
        'Merchant Id': { 
		   type:'string'	   
		},
		'Production Mode':{
		   type:'boolean',
		   defaultValue:false
		}
		
    },
    
	async createPayment(ctx, order, amount, args, metadata) {
		 
		 try{
		 
		 if(metadata.message=="Success"){
		   
		   return {
                amount: amount,
                state: 'Authorized' as 'Authorized',
                metadata: {
				   public:{
				     message: "Authorized, Settlement Needed"
				   },
				   "State":"Success via Frontend. Need Verification via verification url",
				   "Verification Url": metadata.url
				},
           };
		 }
		 
		return {
                amount: Math.ceil(order.total),
                state: 'Declined' as 'Declined',
                metadata: {
				  public:{
                    errorMessage: "Error during payment"
				  }
                },
          };

		 }catch(err){
		   
		   return {
                amount: Math.ceil(order.total),
                state: 'Declined' as 'Declined',
                metadata: {
				  public:{
                    errorMessage: "Error during payment"
				  }
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
