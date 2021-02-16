import { PaymentMethodService, PaymentMethod } from '@vendure/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
	
	type PaymentMethod{
	  id: ID!
	  createdAt: DateTime!
	  updatedAt: DateTime!
	  code: String!
	  enabled: Boolean!
	}
	
	type PaymentMethodList{
	  items: [PaymentMethod!]!
	  totalItems: Int!
	}
	
    extend type Query {
        paymentMethods: PaymentMethodList!
    }
`;


@Resolver()
export class PaymentMethodsResolver {
  constructor(private paymentMethodService: PaymentMethodService) {}

  @Query()
  paymentMethods(@Ctx() ctx: RequestContext, @Args() args: any) {
	return this.paymentMethodService.findAll(ctx,{});
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [PaymentMethodsResolver],
  }
})


export class PaymentMethodsPlugin {}