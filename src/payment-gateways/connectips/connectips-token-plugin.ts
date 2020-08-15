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
    }
`;

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
	postdata["TOKEN"] = gettoken();
	return this.paymentmethodservice.findAll({}).then((data:any)=>{
	   for(let i=0;i<data.items.length;i++){
	      if(data.items[i]["code"]=="connectips-payment-provider"){
		     for(let j=0;j<data.items[i]["configArgs"].length;j++){
			
			    if(data.items[i]["configArgs"][j]["name"]=="merchantid"){
				    postdata["MERCHANTID"] = Number(data.items[i]["configArgs"][j]["value"]);
				}
				if(data.items[i]["configArgs"][j]["name"]=="appid"){
				    postdata["APPID"] = data.items[i]["configArgs"][j]["value"];
				}
				if(data.items[i]["configArgs"][j]["name"]=="appname"){
				    postdata["APPNAME"] = data.items[i]["configArgs"][j]["value"];
				}
				if(data.items[i]["configArgs"][j]["name"]=="currency"){
				    postdata["TXNCRNCY"] = data.items[i]["configArgs"][j]["value"];
				}
			 }
			 
			 break;
		  }
	   }
	   return postdata;
	});
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