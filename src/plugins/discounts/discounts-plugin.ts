import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, ProductVariant, ProductVariantService, Channel, PluginCommonModule, VendurePlugin, TransactionalConnection } from '@vendure/core';
import gql from 'graphql-tag';
import {getConnection, In} from 'typeorm';

const schemaExtension = gql`
	
    extend type ProductVariant {
		discountamount:Int
    }
`;

@Resolver('ProductVariant')
export class DiscountEntityResolver {
	
  constructor(private connection: TransactionalConnection, private variantservice: ProductVariantService) {}
  
  @ResolveField()
  async discountamount(@Ctx() ctx: RequestContext, @Parent() variant: ProductVariant) {
	 let discountamount=0;
	 let productvariant = await this.variantservice.findOne(ctx,variant.id);
	 if(productvariant){
	   let proddata = JSON.parse(JSON.stringify(productvariant));
	   console.log(proddata.price);
	   let pdata = JSON.parse(JSON.stringify(productvariant.customFields));	   
	   if(pdata.discounttype=="amount"){
		 discountamount=pdata.discountby*100;
	   }else{
	     discountamount=(pdata.discountby/100)*proddata.priceWithTax;  
	   }
	   proddata.listprice = proddata.listprice-discountamount;
	   proddata.price = proddata.price-discountamount;
	   proddata.priceWithTax = proddata.priceWithTax-discountamount;
	   proddata.customFields.originalprice = proddata.priceWithTax;
	   await this.variantservice.update(ctx,proddata);
	   return discountamount;
	 }else{
	  return null;
	 }
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [DiscountEntityResolver],
  },
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [DiscountEntityResolver],
  }
})


export class DiscountsPlugin {}