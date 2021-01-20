import { PaymentMethodService } from '@vendure/core';
import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';
import crypto from 'crypto';
import * as fs from 'fs';

let postdata = <any>{};

const schemaExtension = gql`
    type ConnectIPS {
		MERCHANTID: Int!
		APPID: String!
		APPNAME: String!
	    TXNID: String!
		TXNDATE: String!
		TXNCRNCY: String!
		TXNAMT: Int!
		REFERENCEID: String!
		REMARKS: String!
		PARTICULARS: String!
		TOKEN: String!
    }
	
	input ConnectIPSInput{
	  total: Float!
	}
	
    extend type Mutation {
        createConnectIPSToken(input:ConnectIPSInput!): ConnectIPS!
		createDefaultConnectIPSToken(input:ConnectIPSInput!): ConnectIPS!
    }
`;

function getdate(){
   let d = new Date();
   let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear();
   return datestring;
}

function gettoken(){
   let message = "MERCHANTID="+postdata["MERCHANTID"]+",APPID="+postdata["APPID"]+",APPNAME="+postdata["APPNAME"]+",TXNID="+postdata["TXNID"]+",TXNDATE="+postdata["TXNDATE"]+",TXNCRNCY="+postdata["TXNCRNCY"]+",TXNAMT="+postdata["TXNAMT"]+",REFERENCEID="+postdata["REFERENCEID"]+",REMARKS="+postdata["REMARKS"]+",PARTICULARS="+postdata["PARTICULARS"]+",TOKEN=TOKEN";
   
   let path = __dirname + "/connectips-signature/key.pem";
   let key = fs.readFileSync(path);
   let sign = crypto.createSign('SHA256');
   sign.update(message);
   sign.end();
   let signature = sign.sign(key).toString('base64');

   return signature;
}

@Resolver()
export class ConnectIPSTokenResolver {
  constructor(private paymentmethodservice:PaymentMethodService) {}

  @Mutation()
  createConnectIPSToken(@Ctx() ctx: RequestContext, @Args() args: any) {
	let num = Math.floor(Math.random()*100000001).toString();
	postdata["TXNID"] = "DANFEIPS-"+num;
	postdata["TXNDATE"] = getdate();
	postdata["TXNAMT"] = Math.ceil(args.input.total);
	postdata["REFERENCEID"] = "DANFE-REF-"+num; 
	postdata["REMARKS"] = "DANFE-ORDER-PAYMENT";
	postdata["PARTICULARS"] = "PAID FOR ORDER BY CUSTOMER";
	return this.paymentmethodservice.findAll(ctx,{}).then((data:any)=>{
	   for(let i=0;i<data.items.length;i++){
	      if(data.items[i]["code"]=="Connect IPS"){
		     for(let j=0;j<data.items[i]["configArgs"].length;j++){
			
			    if(data.items[i]["configArgs"][j]["name"]=="Merchant Id"){
				    postdata["MERCHANTID"] = Number(data.items[i]["configArgs"][j]["value"]);
				}
				if(data.items[i]["configArgs"][j]["name"]=="App Id"){
				    postdata["APPID"] = data.items[i]["configArgs"][j]["value"];
				}
				if(data.items[i]["configArgs"][j]["name"]=="App Name"){
				    postdata["APPNAME"] = data.items[i]["configArgs"][j]["value"];
				}
				/*if(data.items[i]["configArgs"][j]["name"]=="Currency"){
				    postdata["TXNCRNCY"] = data.items[i]["configArgs"][j]["value"];
				}*/
			 }
			 
			 break;
		  }
	   }
	   postdata["TXNCRNCY"] = process.env.ips_default_txn_currency;
	   postdata["TOKEN"] = gettoken();
	   return postdata;
	});
  }

  @Mutation()
  createDefaultConnectIPSToken(@Ctx() ctx: RequestContext, @Args() args: any) { //if error is occurred, use our payment gateway
	let num = Math.floor(Math.random()*100000001).toString();
	postdata["TXNID"] = "DANFEIPS-"+num;
	postdata["TXNDATE"] = getdate();
	postdata["TXNAMT"] = Math.ceil(args.input.total);
	postdata["REFERENCEID"] = "DANFE-REF-"+num; 
	postdata["REMARKS"] = "DANFE-ORDER-PAYMENT";
	postdata["PARTICULARS"] = "PAID FOR ORDER BY CUSTOMER";
	postdata["MERCHANTID"] = Number(process.env.ips_default_merchant_id);
	postdata["APPID"] = process.env.ips_default_app_id;
	postdata["APPNAME"] = process.env.ips_default_app_name;
	postdata["TXNCRNCY"] = process.env.ips_default_txn_currency;
	
	postdata["TOKEN"] = gettoken();
	return postdata;
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [ConnectIPSTokenResolver],
  }
})



export class ConnectIPSPlugin {}