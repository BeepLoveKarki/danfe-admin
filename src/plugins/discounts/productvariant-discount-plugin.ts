import { ProductVariantService, ProductVariant } from '@vendure/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
	
    extend type Query {
		productvariants(options: ProductVariantListOptions):  ProductVariantList!
		productvariant(id: ID!): ProductVariant!
		productvariantmaxmin(productid: ID!): [ProductVariant!]
		productvariantminmax(productid: ID!): [ProductVariant!]
    }
`;


@Resolver()
export class VariantDiscountResolver {
  constructor(private productVariantService: ProductVariantService) {}
  
  @Query()
  productvariants(@Ctx() ctx: RequestContext, @Args() args: any) {
	return this.productVariantService.findAll(ctx,args.options);
  }
  
  @Query()
  productvariant(@Ctx() ctx: RequestContext, @Args() args: any) {
	return this.productVariantService.findOne(ctx,args.id);
  }
  
  @Query()
  async productvariantmaxmin(@Ctx() ctx: RequestContext, @Args() args: any) {
     let variants = await this.productVariantService.getVariantsByProductId(ctx,args.productid);
	 if(variants){
	   let pricearray = new Array();
	   
	   variants.forEach((variant,index)=>{
	     pricearray.push(variant.priceWithTax);
	   });
	   
	   let maxprice = Math.max(...pricearray);
	   let minprice = Math.min(...pricearray);
	   
	   let variantsarray = new Array();
	   
	   variants.forEach((variant,index)=>{
	     if(variant.priceWithTax==maxprice || variant.priceWithTax==minprice){
	        variantsarray.push(variant);
		 }
	   });
	   
	   variantsarray.sort(function(a,b){
	     return b.priceWithTax-a.priceWithTax;
	   });
	   
	   return variantsarray;
	  
	 }
  }
  
  @Query()
  async productvariantminmax(@Ctx() ctx: RequestContext, @Args() args: any) {
     let variants = await this.productVariantService.getVariantsByProductId(ctx,args.productid);
	 if(variants){
	   let pricearray = new Array();
	   
	   variants.forEach((variant,index)=>{
	     pricearray.push(variant.priceWithTax);
	   });
	   
	   let maxprice = Math.max(...pricearray);
	   let minprice = Math.min(...pricearray);
	   
	   let variantsarray = new Array();
	   
	   variants.forEach((variant,index)=>{
	     if(variant.priceWithTax==maxprice || variant.priceWithTax==minprice){
	        variantsarray.push(variant);
		 }
	   });
	   
	   variantsarray.sort(function(a,b){
	     return a.priceWithTax-b.priceWithTax;
	   });
	   
	   return variantsarray;
	  
	 }
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [VariantDiscountResolver],
  }
})



export class ProductVariantDiscountPlugin {}