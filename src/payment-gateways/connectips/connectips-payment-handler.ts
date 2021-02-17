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
    code: 'Connect IPS',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Pay Via Connect IPS',
    }],
    
	args: {
		'Merchant Id': {type: 'int', value:''},
		'App Id': {type: 'string'},
		'App Name': {type: 'string'},
		'App Password': {
			type: 'string',
			ui: { component: 'password-form-input' }
		},
		'Currency': {type: 'string', defaultValue:'NPR'},
		'Production Mode':{
		   type:'boolean',
		   defaultValue:false
		}
    },
    
	async createPayment(ctx, order, amount, args, metadata) {
	   try {
		 postdata["merchantId"] = args["Merchant Id"];
		 postdata["appId"] = args["App Id"];
		 postdata["referenceId"] = metadata["txnid"]; 
		 postdata["txnAmt"] = Math.ceil(amount);
		 postdata["token"] = gettoken();
		 
		 let data =JSON.stringify(postdata);
		 let username = args["App Id"];
		 let password = args["App Password"];
		
		 let token = Buffer.from(`${username}:${password}`,'utf8').toString('base64');
		 
		 let url;
		 if(String(args["Production Mode"])=="true"){
		    url = 'https://www.connectips.com/connectipswebws/api/creditor/validatetxn';
		 }else{
		    url = 'https://uat.connectips.com/connectipswebws/api/creditor/validatetxn';
		 }
		
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
