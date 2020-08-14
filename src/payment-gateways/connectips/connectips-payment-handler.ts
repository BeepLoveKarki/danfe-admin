import {PaymentMethodHandler,LanguageCode} from '@vendure/core';
import crypto from 'crypto';
import * as fs from 'fs';
import axios from 'axios';

let postdata = <any>{};

function getdate(){
   let d = new Date();
   let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear();
   return datestring;
}

function gettoken(){
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
		currency: {type: 'string'},
    },
    
	async createPayment(order, args, metadata) {
	   try {
		 postdata["MERCHANTID"] = args.merchantid;
		 postdata["APPID"] = args.appid;
		 postdata["APPNAME"] = args.appname;
	     postdata["TXNID"] = "DANFEIPS-"+Math.floor(Math.random()*100000001).toString();
		 postdata["TXNDATE"] = getdate();
		 postdata["TXNCRNCY"] = args.currency;
		 postdata["TXNAMT"] = Math.ceil(order.total);
		 
		 postdata["REFERENCEID"] = "DANFE-REF-001"; 
		 postdata["REMARKS"] = "DANFE-ORDER-PAYMENT";
		 postdata["PARTICULARS"] = "PAID FOR ORDER BY CUSTOMER";
		 postdata["TOKEN"] = gettoken();
		 
		 //console.log(postdata);
		 
		 /*let res = await axios.post('https://uat.connectips.com:7443/connectipswebgw/loginpage',postdata);
		 let data = res;
		 console.log(data);*/
		 
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