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
		 
		 console.log(resp);
		 
		 if(resp["state"]["name"]=="Completed"){
		    
			return {
                amount: resp.amount,
                state: 'Settled' as 'Settled',
                transactionId: resp.idx,
                metadata: {
					message:"Success"
				},
           };
		 
		 }else{
		   
		  return {
                amount: Math.ceil(order.total),
                state: 'Declined' as 'Declined',
                metadata: {
                    errorMessage: "Error Payment"
                },
          };
		 
		}
		 
		 
	     
	   } catch (err) {
	       return {
                amount: Math.ceil(order.total),
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