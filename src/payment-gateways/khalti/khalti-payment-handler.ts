import {PaymentMethodHandler,LanguageCode} from '@vendure/core';
import fetch from 'node-fetch';

let postdata = <any>{};

export const KhaltiPaymentHandler = new PaymentMethodHandler({
    code: 'khalti-payment-provider',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Khalti Payment Provider',
    }],
    
	args: {
        secretKey: { 
		   type:'string',
           ui: { component: 'password-form-input' }		   
		}
    },
    
	async createPayment(order, args, metadata) {
	   
	   try {
		   
		postdata["token"] = metadata["token"];
		postdata["amount"] = Math.ceil(order.total);
		 
		let data =JSON.stringify(postdata);
		let url = 'https://khalti.com/api/v2/payment/verify/';
		
		let config = {
			method: 'post',
			body : data,
			headers: { 
			  'Content-Type': 'application/json',
			  'Authorization': `Key ${args.secretKey}`
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
                amount: Math.ceil(order.total),
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
                amount: Math.ceil(order.total),
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