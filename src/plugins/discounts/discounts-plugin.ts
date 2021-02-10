import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, ProductVariant, ProductVariantService, GlobalSettingsService, Channel, PluginCommonModule, VendurePlugin, TransactionalConnection, InternalServerError  } from '@vendure/core';
import gql from 'graphql-tag';
import {getConnection, In} from 'typeorm';

const schemaExtension = gql`
	
	type Discount{
	      discounttag: String
	      discounttype: String
		  discountvalue: String
		  discountamount: Int
		  discountedamount: Int
	}
	
    extend type ProductVariant {
		discount: Discount!
    }
`;

@Resolver('ProductVariant')
export class DiscountEntityResolver {
	
  constructor(private connection: TransactionalConnection, private variantservice: ProductVariantService, private globalsettingservice: GlobalSettingsService) {}
  
  @ResolveField()
  async discount(@Ctx() ctx: RequestContext, @Parent() variant: ProductVariant) {
	 let Discount = <any>{};
	 let productvariant = await this.variantservice.findOne(ctx,variant.id);
	 
	 if(productvariant){
	   
	   let proddata = JSON.parse(JSON.stringify(productvariant));
	   let pdata = JSON.parse(JSON.stringify(productvariant.customFields));	   
	   
	   if(pdata.discountvalue!=0){
		   
	   Discount["discounttag"] = pdata.discounttag; 
	   Discount["discounttype"] = pdata.discounttype;   
	   
	   if(pdata.discounttype=="Amount"){
	     Discount["discountvalue"] = proddata.currencyCode+" "+String(pdata.discountvalue);
		 Discount["discountamount"]=Math.floor(pdata.discountvalue*100); //fix amount discount 
	   }
	   
	   if(pdata.discounttype=="Percentage"){
		 Discount["discountvalue"] = String(pdata.discountvalue)+"%";
		 Discount["discountamount"]=Math.floor((pdata.discountvalue/100)*proddata.priceWithTax); //fix percent discount 
	   }
	   
	   if(pdata.discounttype=="New Price"){
		 Discount["discountvalue"] = proddata.currencyCode+" "+String(pdata.discountvalue);
	     Discount["discountamount"] = Math.floor(proddata.priceWithTax-pdata.discountvalue*100); //fix new price
	   }
	   
	   if(Discount["discountamount"]<0){
	      Discount["discountamount"]=0;
	   }
	   
	   
	   Discount["discountedamount"] = proddata.priceWithTax-Discount["discountamount"]; 
	   
	  }else{
		 if(pdata.discounttype=="New Price"){
		  
		  Discount["discounttag"] = pdata.discounttag; 
	      Discount["discounttype"] = pdata.discounttype; 
		  Discount["discountvalue"] = proddata.currencyCode+" "+String(pdata.discountvalue);
	      Discount["discountamount"] = Math.floor(proddata.priceWithTax-pdata.discountvalue*100); //fix new price
		  Discount["discountedamount"] = proddata.priceWithTax-Discount["discountamount"]; 
		   
		 }else{
		  
		  if(pdata.globaldiscountinherit){
	        Discount = this.checkglobal(ctx,proddata);
			return Discount;
		  }else{
		   Discount["discounttag"] = pdata.discounttag; 
		   Discount["discounttype"] = pdata.discounttype;  
		   Discount["discountvalue"] = 0;
		   Discount["discountamount"]= 0;
		   Discount["discountedamount"] = proddata.priceWithTax; 
		  }
		 
		 }
	  }
	   
	  return Discount;
	 
	 }else{
	  throw new InternalServerError("The product variant doesn't exist");
	 }
  }
  
  async checkglobal(@Ctx() ctx: RequestContext,proddata:any){
     
	 let Discount = <any>{};
	 
	 let settings = await this.globalsettingservice.getSettings(ctx);
	 let gdiscounts = JSON.parse(JSON.stringify(settings.customFields));
	 
	 if(gdiscounts.globaldiscountvalue!=0){
	   Discount["discounttag"] = gdiscounts.globaldiscounttag; 
	   Discount["discounttype"] = gdiscounts.globaldiscounttype;
	   Discount["discountvalue"] = gdiscounts.globaldiscountvalue;
	   
	   if(gdiscounts.globaldiscounttype=="Amount"){
	     Discount["discountvalue"] = proddata.currencyCode+" "+String(gdiscounts.globaldiscountvalue);
		 Discount["discountamount"]=Math.floor(gdiscounts.globaldiscountvalue*100); //fix amount discount 
	   }
	   
	   if(gdiscounts.globaldiscounttype=="Percentage"){
		 Discount["discountvalue"] = String(gdiscounts.globaldiscountvalue)+"%";
		 Discount["discountamount"]=Math.floor((gdiscounts.globaldiscountvalue/100)*proddata.priceWithTax); //fix percent discount 
	   }
	   
	   if(Discount["discountamount"]<0){
	      Discount["discountamount"]=0;
	   }
	   
	   Discount["discountedamount"] = proddata.priceWithTax-Discount["discountamount"]; 
	   
	 }else{
	   Discount["discounttag"] = gdiscounts.globaldiscounttag; 
	   Discount["discounttype"] = gdiscounts.globaldiscounttype;  
	   Discount["discountvalue"] = 0;
	   Discount["discountamount"]= 0;
	   Discount["discountedamount"] = proddata.priceWithTax; 
	 }
	 
	 return Discount;
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