import {PaymentMethodHandler,LanguageCode} from '@vendure/core';
import fetch from 'node-fetch';

let postdata = <any>{};

export const KhaltiMerchantPaymentHandler = new PaymentMethodHandler({
    code: 'Khalti Merchant',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay to Khalti Merchant Account of Seller',
    }],
    
	args: {
        'Secret Key': { 
		   type:'string',
           ui: { component: 'password-form-input' }		   
		},
		
		'Public Key': { 
		   type:'string',		   
		}
    },
    
	async createPayment(ctx,order, amount, args, metadata) {
	   
	   try {
		   
		postdata["token"] = metadata["token"];
		postdata["amount"] = Math.ceil(amount);
		 
		let data =JSON.stringify(postdata);
		let url = 'https://khalti.com/api/v2/payment/verify/';
		let config;
		
	     config = {
			method: 'post',
			body : data,
			headers: { 
			  'Content-Type': 'application/json',
			  'Authorization': `Key ${process.env.khalti_default_secret_key}`
			}
         };
		 
		 let response = await fetch(url,config);
		 let resp = await response.json();
		 
		 if(resp["state"]["name"]=="Completed"){
		    
			return {
                amount: resp.amount,
                state: 'Settled' as 'Settled',
                transactionId: resp.idx,
                metadata: {
				   public:{
					 message:"Success"
				   }
				},
           };
		 
		 }else{
		   
		  return {
                amount: amount,
                state: 'Declined' as 'Declined',
                metadata: {
					public:{
                      errorMessage: "Error Payment"
					}
                },
          };
		 
		}
		 
		 
	     
	   } catch (err) {
	       return {
                amount: amount,
                state: 'Declined' as 'Declined',
                metadata: {
				  public:{
                    errorMessage: err.message
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