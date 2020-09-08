import {PaymentMethodHandler,LanguageCode} from '@vendure/core';
import fetch from 'node-fetch';

let postdata = <any>{};

export const EsewaPaymentHandler = new PaymentMethodHandler({
    code: 'esewa-payment-provider',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Esewa Payment Provider',
    }],
    
	args: {
        merchantid: { 
		   type:'string'	   
		}
    },
    
	async createPayment(order, args, metadata) {
	   
	   try {
		   
		postdata["amt"] = Math.ceil(order.total);
		postdata["scd"] = args.merchantid;
        postdata["pid"] = metadata.pid;
        postdata["rid"] = metadata.rid;
		 
		let data =JSON.stringify(postdata);
		let url = 'https://uat.esewa.com.np/epay/transrec';
		
		let config = {
			method: 'post',
			body : data,
			/*headers: { 
			  'Content-Type': 'application/json',
			  'Authorization': `Key ${args.secretKey}`
			}*/
        };
		 
		 let response = await fetch(url,config);
		 let resp = await response.json();
		 
		 console.log(resp);
		 
		 /*if(resp["state"]["name"]=="Completed"){
		    
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
		 
		}*/
		 
		return {
                amount: Math.ceil(order.total),
                state: 'Declined' as 'Declined',
                metadata: {
                    errorMessage: "Error Payment"
                },
          };
		 
	     
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
