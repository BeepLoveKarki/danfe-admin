import { PaymentMethodHandler, SettlePaymentResult, LanguageCode, CreatePaymentFn } from '@vendure/core';
//import gripeSDK from 'gripe'; //mock test

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
   
   return message;
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
		 
		 console.log(order.total);
		 //console.log(metadata);
		 
		 postdata["MERCHANTID"] = args.merchantid;
		 postdata["APPID"] = args.appid;
		 postdata["APPNAME"] = args.appname;
	     postdata["TXNID"] = "DANFEIPS-"+Math.floor(Math.random()*100000001);
		 postdata["TXNDATE"] = getdate();
		 postdata["TXNCRNCY"] = args.currency;
		 postdata["TXNAMT"] = Math.ceil(order.total);
		 
		 postdata["REFERENCEID"] = "DANFE-REF-001"; 
		 postdata["REMARKS"] = "DANFE-RMKS-001";
		 postdata["PARTICULARS"] = "DANFE-PART-001";
		 postdata["TOKEN"] = gettoken();
		 
		 console.log(postdata);
		 
	     /*return {
                amount: order.total,
                state: 'Settled' as 'Settled',
                transactionId: '59089',
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