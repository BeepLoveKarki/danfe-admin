import { PaymentMethodService } from '@vendure/core';
import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';

let postdata = <any>{};

const schemaExtension = gql`
    type Esewa {
		MERCHANTID: String!
    }
	
    extend type Mutation {
        getEsewaMerchantId: Esewa!
		getDefaultEsewaMerchantId: Esewa!
    }
`;


@Resolver()
export class EsewaCredentialsResolver {
  constructor(private paymentmethodservice:PaymentMethodService) {}

  @Mutation()
  getEsewaMerchantId(@Ctx() ctx: RequestContext, @Args() args: any) {
	  
	return this.paymentmethodservice.findAll(ctx,{}).then((data:any)=>{
	   for(let i=0;i<data.items.length;i++){
	      if(data.items[i]["code"]=="Esewa Merchant"){
		     for(let j=0;j<data.items[i]["configArgs"].length;j++){
			
			    if(data.items[i]["configArgs"][j]["name"]=="Merchant Id"){
				    postdata["MERCHANTID"] = data.items[i]["configArgs"][j]["value"];
				}
			 }
			 
			 break;
		  }
	   }
	   
	   return postdata;
	});
  }

  @Mutation()
  getDefaultEsewaMerchantId(@Ctx() ctx: RequestContext, @Args() args: any) { //if error is occurred, use our payment gateway
	postdata["MERCHANTID"] = process.env.esewa_default_merchant_id;
	return postdata;
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [EsewaCredentialsResolver],
  }
})



export class EsewaCredentialsPlugin {}