import { CustomerService } from '@vendure/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin, InternalServerError } from '@vendure/core';


const schemaExtension = gql`
	
	extend type Mutation {
	   increaseCustomerBalanceAll(balance:Int!): Boolean!
    }
`;


@Resolver()
export class BalanceResolver {
  constructor(private customerService: CustomerService) {}
  
  @Mutation()
  async increaseCustomerBalanceAll(@Ctx() ctx: RequestContext, @Args() args: any) {
    let allcustomers = await this.customerService.findAll(ctx,{});
	let ended = false;
	if(allcustomers.items.length!=0){
	 for(let i=0;i<allcustomers.items.length;i++){
       let customer = JSON.parse(JSON.stringify(allcustomers.items[i]));
	   let newbalance = customer.customFields.balance+args.balance;
	   let input = <any>{};
	   input["id"] = customer.id;
	   input["customFields"] = <any>{};
	   input["customFields"]["balance"] = newbalance;
	   await this.customerService.update(ctx,input);
 	 }
	 ended = true;
	}
	return ended;
  }
}
  

@VendurePlugin({
  imports: [PluginCommonModule],
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [BalanceResolver],
  }
})


export class BalanceAdminPlugin {}