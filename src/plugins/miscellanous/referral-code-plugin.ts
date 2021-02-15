import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin, CustomerService } from '@vendure/core';
import referralCodeGenerator from 'referral-code-generator';

const schemaExtension = gql`
	
	type CustomerwithCode{
	  id: ID!
	  code: String!
	}
	
    extend type Query {
        referralCode: String!
		usedReferralCodes: [String!]!
		usedReferralCodeswithCustomer: [CustomerwithCode!]!
    }
`;


@Resolver()
export class ReferralCodeResolver {
  constructor(private customerService: CustomerService) {}

  @Query()
  referralCode(@Ctx() ctx: RequestContext, @Args() args: any) {
	return referralCodeGenerator.alphaNumeric('uppercase', 2, 3);
  }
  
  @Query()
  async usedReferralCodes(@Ctx() ctx: RequestContext, @Args() args: any) {
    let customers = await this.customerService.findAll(ctx,{});
	let codes = new Array();
	customers.items.forEach((val,index)=>{
	  let cust = JSON.parse(JSON.stringify(val));
	  if(cust.customFields.referralcode){
	    codes.push(cust.customFields.referralcode);
	  }
	});
    return codes;	
  }
  
  @Query()
  async usedReferralCodeswithCustomer(@Ctx() ctx: RequestContext, @Args() args: any) {
    let customers = await this.customerService.findAll(ctx,{});
    let codes = new Array();
	customers.items.forEach((val,index)=>{
	  let cust = JSON.parse(JSON.stringify(val));
	  if(cust.customFields.referralcode){
	    let data = <any>{};
	    data["id"] = cust.id;
	    data["code"] = cust.customFields.referralcode
	    codes.push(data);
	  }
	});
    return codes;	
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  adminApiExtensions:{
    schema: schemaExtension,
    resolvers: [ReferralCodeResolver],
  }
})


export class ReferralCodePlugin {}