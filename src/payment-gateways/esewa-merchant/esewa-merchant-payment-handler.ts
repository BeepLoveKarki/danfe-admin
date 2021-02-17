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
	   
	   try {
		   
		postdata["amt"] = metadata.amt;
		postdata["scd"] = args["Merchant Id"];
		postdata["pid"] = metadata.pid;
        postdata["rid"] = metadata.rid;
		
		/*let data = "";
		Object.keys(postdata).forEach((val,index)=>{
		  let mdata = val+"="+postdata[val]+"&";
		  console.log(mdata);
		  data+=mdata;
		});
		let ndata = data.substring(0,data.length-1);
		console.log(ndata);*/
		
		let url;
		
		if(String(args["Production Mode"]) == "false"){
		  url = 'https://uat.esewa.com.np/epay/transrec';
		}else{
		  url = 'https://esewa.com.np/epay/transrec';
		}
		
		console.log(url);
		
		let config = {
			method: 'post',
			body : postdata,
        };
		
		/*let config = {
			method: 'post',
			body : postdata,
			headers: { 
			  'Content-Type': 'application/json',
			}
        };*/
		
		 
		 let response = await fetch(url,config);
		 
		 let resp = String(await response.text());
		 
		 console.log(resp);
		 
		 if(resp.includes("Success")){
		   return {
                amount: amount,
                state: 'Settled' as 'Settled',
                metadata: {
				   public:{
					message:"Success"
				   }
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
