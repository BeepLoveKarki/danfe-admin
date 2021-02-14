import { ProductService} from '@vendure/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
	
	extend type Mutation {
       updateProductVisitCount(id: ID!, count:Int!): Product!
	   increaseProductVisitCount(id: ID!): Product!
    }
`;


@Resolver()
export class ProductUpdateResolver {
  constructor(private productService: ProductService) {}

  @Mutation()
  async updateProductVisitCount(@Ctx() ctx: RequestContext, @Args() args: any) {
	let input = <any>{};
	input["id"] = args.id;
	input["customFields"] = <any>{};
	input["customFields"]["visitnumber"] = args.count;
	return this.productService.update(ctx,input);
  }
  
  @Mutation()
  async increaseProductVisitCount(@Ctx() ctx: RequestContext, @Args() args: any) {
	let input = <any>{};
	input["id"] = args.id;
	input["customFields"] = <any>{};
	let productget = await this.productService.findOne(ctx,args.id);
	let product = JSON.parse(JSON.stringify(productget));
	let newnum = 0;
	if(product){
	   newnum = product.customFields.visitnumber+1;
	}
	input["customFields"]["visitnumber"] = newnum;
	return this.productService.update(ctx,input);
  }
  
  
}
  

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [ProductUpdateResolver],
  }
})


export class ProductUpdatePlugin {}