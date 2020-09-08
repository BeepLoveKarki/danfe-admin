import {PaymentMethodHandler,LanguageCode} from '@vendure/core';
import crypto from 'crypto';
import * as fs from 'fs';
import fetch from 'node-fetch';

let postdata = <any>{};

function gettoken(){
   let message = "MERCHANTID="+postdata["merchantId"]+",APPID="+postdata["appId"]+",REFERENCEID="+postdata["referenceId"]+",TXNAMT="+postdata["txnAmt"];

   let path = __dirname + "/connectips-signature/key.pem";
   let key = fs.readFileSync(path);
   let sign = crypto.createSign('SHA256');
   sign.update(message);
   sign.end();
   let signature = sign.sign(key).toString('base64');

   return signature;
}

export const ConnectIPSPaymentHandler = new PaymentMethodHandler({
    code: 'connectips-payment-provider',
    description: [{
        languageCode: LanguageCode.en,
        value: 'ConnectIPS Payment Provider',
    }],
    
	args: {
		merchantid: {type: 'int'},
		appid: {type: 'string'},
		appname: {type: 'string'},
		apppassword: {
			type: 'string',
			ui: { component: 'password-form-input' }
		},
		currency: {type: 'string'},
    },
    
	async createPayment(order, args, metadata) {
	   try {
		 postdata["merchantId"] = args.merchantid;
		 postdata["appId"] = args.appid;
		 postdata["referenceId"] = metadata["txnid"]; 
		 postdata["txnAmt"] = Math.ceil(order.total);
		 postdata["token"] = gettoken();
		 
		let data =JSON.stringify(postdata);
		let username = args.appid;
		let password = args.apppassword;
		let token = Buffer.from(`${username}:${password}`,'utf8').toString('base64');
		let url = 'https://uat.connectips.com:7443/connectipswebws/api/creditor/validatetxn';
		
		let config = {
			method: 'post',
			body : data,
			headers: { 
			  'Content-Type': 'application/json',
			  'Authorization': `Basic ${token}`
			}
        };
		 
		 let response = await fetch(url,config);
		 let resp = await response.json();
		 
		 if(resp.status=='SUCCESS'){
		    
			return {
                amount: postdata["txnAmt"],
                state: 'Settled' as 'Settled',
                transactionId: postdata["referenceId"],
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
