import { PaymentMethodService } from '@vendure/core';
import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';
import crypto from 'crypto';
import * as fs from 'fs';

let postdata = <any>{};

const schemaExtension = gql`
    type Khalti {
		PUBLICKEY: String!
    }
	
    extend type Mutation {
        getKhaltiPublicKey: Khalti!
		getDefaultKhaltiPublicKey: Khalti!
    }
`;


@Resolver()
export class KhaltiCredentialsResolver {
  constructor(private paymentmethodservice:PaymentMethodService) {}

  @Mutation()
  getKhaltiPublicKey(@Ctx() ctx: RequestContext, @Args() args: any) {
	  
	return this.paymentmethodservice.findAll(ctx,{}).then((data:any)=>{
	   for(let i=0;i<data.items.length;i++){
	      if(data.items[i]["code"]=="Khalti Merchant"){
		     for(let j=0;j<data.items[i]["configArgs"].length;j++){
			
			    if(data.items[i]["configArgs"][j]["name"]=="Public Key"){
				    postdata["PUBLICKEY"] = data.items[i]["configArgs"][j]["value"];
				}
			 }
			 
			 break;
		  }
	   }
	   
	   return postdata;
	});
  }

  @Mutation()
  getDefaultKhaltiPublicKey(@Ctx() ctx: RequestContext, @Args() args: any) { //if error is occurred, use our payment gateway
	postdata["PUBLICKEY"] = process.env.khalti_default_public_key;
	return postdata;
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [KhaltiCredentialsResolver],
  }
})



export class KhaltiCredentialsPlugin {}