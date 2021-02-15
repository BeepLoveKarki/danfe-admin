import { CustomerService } from '@vendure/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin, InternalServerError } from '@vendure/core';


const schemaExtension = gql`
	
	extend type Mutation {
       updateCustomerBalance(id: ID!, balance:Int!): Customer!
	   increaseCustomerBalance(id: ID!, balance:Int!): Customer!
	   decreaseCustomerBalance(id: ID!, balance:Int!): Customer!
    }
`;


@Resolver()
export class BalanceResolver {
  constructor(private customerService: CustomerService) {}

  @Mutation()
  async updateCustomerBalance(@Ctx() ctx: RequestContext, @Args() args: any) {
	let input = <any>{};
	input["id"] = args.id;
	input["customFields"] = <any>{};
	input["customFields"]["balance"] = args.balance;
	return this.customerService.update(ctx,input);
  }
  
  @Mutation()
  async increaseCustomerBalance(@Ctx() ctx: RequestContext, @Args() args: any) {
	let input = <any>{};
	input["id"] = args.id;
	input["customFields"] = <any>{};
	let customerget = await this.customerService.findOne(ctx,args.id);
	let customer = JSON.parse(JSON.stringify(customerget));
	let newnum = 0;
	if(customer){
	   newnum = customer.customFields.balance+args.balance;
	}
	input["customFields"]["balance"] = newnum;
	return this.customerService.update(ctx,input);
  }
  
  @Mutation()
  async decreaseCustomerBalance(@Ctx() ctx: RequestContext, @Args() args: any) {
	let input = <any>{};
	input["id"] = args.id;
	input["customFields"] = <any>{};
	let customerget = await this.customerService.findOne(ctx,args.id);
	let customer = JSON.parse(JSON.stringify(customerget));
	let newnum = 0;
	if(customer){
	   newnum = customer.customFields.balance-args.balance;
	}
	if(newnum<0){
	  newnum = 0;
	}
	input["customFields"]["balance"] = newnum;
	return this.customerService.update(ctx,input);
  }

}
  

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [BalanceResolver],
  }
})


export class BalancePlugin {}