import { PaymentMethodHandler, SettlePaymentResult, LanguageCode, CreatePaymentFn } from '@vendure/core';
//import gripeSDK from 'gripe'; //mock test
import crypto from 'crypto';
import * as fs from 'fs';
import * as pem from 'pem';
//import * as path from 'path';

let postdata = <any>{};

function getdate(){
   let d = new Date();
   let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear();
   return datestring;
}

async function gettoken(){
   let message = 
   "MERCHANTID="+postdata["MERCHANTID"]+",\
   APPID="+postdata["APPID"]+",\
   APPNAME="+postdata["APPNAME"]+",\
   TXNID="+postdata["TXNID"]+",\
   TXNDATE="+postdata["TXNDATE"]+",\
   TXNCRNCY="+postdata["TXNCRNCY"]+",\
   TXNAMT="+postdata["TXNAMT"]+",\
   REFERENCEID="+postdata["REFERENCEID"]+",\
   REMARKS="+postdata["REMARKS"]+",\
   PARTICULARS="+postdata["PARTICULARS"]+",\
   TOKEN=TOKEN";
   
   let enc = "a";
   
   let path = __dirname + "/connectips-signature/CREDITOR.pfx";
   let pfx = fs.readFileSync(path);
   
   let func = await pem.readPkcs12(pfx, { p12Password: "123" }, (err, cert) => {
      if(err){
	    return null;
	  }else{
		 let sign = crypto.createSign('SHA256');
		 sign.update(message);
		 sign.end();
		 let signature = sign.sign(cert["key"]);
		 return signature.toString('base64');
	  }
   });
   
   func.then((value:any)=>{
      console.log(value);
   });

   
   //return enc;
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
		currency: {type: 'string'},
    },
    
	async createPayment(order, args, metadata) {
	   try {
		 /*const result = await gripeSDK.charges.create({
                apiKey: args.apiKey,
                amount: order.total,
                source: metadata.authToken,
         });*/
		 
		 //console.log(metadata);
		 
		 postdata["MERCHANTID"] = args.merchantid;
		 postdata["APPID"] = args.appid;
		 postdata["APPNAME"] = args.appname;
	     postdata["TXNID"] = "DANFEIPS-"+Math.floor(Math.random()*100000001).toString();
		 postdata["TXNDATE"] = getdate();
		 postdata["TXNCRNCY"] = args.currency;
		 postdata["TXNAMT"] = Math.ceil(order.total);
		 
		 postdata["REFERENCEID"] = "DANFE-REF-001"; 
		 postdata["REMARKS"] = "DANFE-RMKS-001";
		 postdata["PARTICULARS"] = "DANFE-PART-001";
		 postdata["TOKEN"] = await gettoken();
		 //console.log(postdata);
		 
	     /*return {
                amount: postdata["TXNAMT"],
                state: 'Settled' as 'Settled',
                transactionId: postdata["TXNID"],
                metadata: {
					message:"Success"
				},
           };*/
		   
		   return {
                amount: order.total,
                state: 'Declined' as 'Declined',
                metadata: {
                    errorMessage: "testing"
                },
            };
		   
	   } catch (err) {
	       return {
                amount: order.total,
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
        method: "connectips-payment-provider", //match with code of the method
        metadata: { id: "<some id from the payment provider>" }) {
        ...Order
    }
}*/