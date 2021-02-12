import { SessionService, OrderService, ProductVariantService, ProductVariant, GlobalSettingsService, InternalServerError, NegativeQuantityError } from '@vendure/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
    extend type Mutation {
        addItemToOrderAdvanced(productVariantId: ID!, quantity: Int!): UpdateOrderItemsResult
    }
`;


@Resolver()
export class DiscountsOrderResolver {
  constructor(private orderService: OrderService, private sessionService: SessionService, private variantService: ProductVariantService, private globalsettingservice: GlobalSettingsService) {}

  @Mutation()
  async addItemToOrderAdvanced(@Ctx() ctx: RequestContext, @Args() args: any) {
	
	const productvariant = await this.variantService.findOne(ctx,args.productVariantId);
	
	if(productvariant){
	 
	 let discountedamount = await this.checkdiscount(ctx,productvariant);
	 let proddata = JSON.parse(JSON.stringify(productvariant));
	 
	 let realprice; //real price of item
	 let addablenum; //add able items to cart after price update with discount
	 
	 if(proddata.listPriceIncludesTax){
	    realprice = proddata.priceWithTax;
	 }else{
        realprice = proddata.price;
	 }	 
	 
	 const order = await this.getOrderFromContext(ctx, true);
	 
	 if(order!=undefined){
	  
	  if(discountedamount!=realprice){ //change price to price with discount
	    let input = <any>{};
	    input["id"]=args.productVariantId;
	    input["price"]=discountedamount;
	    let vinput = new Array(input);
	    await this.variantService.update(ctx,vinput);
	 }
	  
	  let result;
	  if(args.quantity>0){
	     result = await this.orderService.addItemToOrder(ctx, order.id, args.productVariantId, args.quantity, args.customFields);
	  }else{
		let lflag = 0;
	    for(let i=0; i<order.lines.length; i++){
		   let line = order.lines[i];
		   if(line.productVariant.id==args.productVariantId){
			  lflag = 1;
		      let removalid = line.id;
			  addablenum = line.quantity+args.quantity;
			  
			  if(addablenum>=0){
			       
				let removedItem = await this.orderService.removeItemFromOrder(ctx,order.id,removalid);
			    
				if(removedItem){
				  
				  if(addablenum!=0){	
				    result = await this.orderService.addItemToOrder(ctx, order.id, args.productVariantId, addablenum, args.customFields);
				  }
				  
				}else{
			      return new InternalServerError("Some unexpected server error occurred.");
			    }
			  
			  }
			  
			  break;
		   }
		}
	   if(lflag==0){
	       return new NegativeQuantityError();
	   }
	  }
	  
	  if(discountedamount!=realprice){  //change price to price without discount
	     let ninput = <any>{};
	     ninput["id"]=args.productVariantId;
	     ninput["price"]=realprice;
	     let nvinput = new Array(ninput);
	     await this.variantService.update(ctx,nvinput);
	  }
	  
	  if(addablenum != undefined){
	    
		if(addablenum==0){
	      return null;
	    }
	  
	    if(addablenum<0){
	      return new InternalServerError("Cannot add negative quantity order to cart for this item");
	    }
		
	  }
	  
	  return result;
	 
	 }
	
	}else{
	  return new InternalServerError("The product variant doesn't exist");
	}
	
  }
  
  
  async checkdiscount(@Ctx() ctx: RequestContext, productvariant: any) {
	 let Discount = <any>{};
	 
	 if(productvariant){
	   
	   let proddata = JSON.parse(JSON.stringify(productvariant));
	   let pdata = JSON.parse(JSON.stringify(productvariant.customFields));	   
	   
	   let realprice;
	   
	   if(proddata.listPriceIncludesTax){
	     realprice=proddata.priceWithTax;
	   }else{
	     realprice=proddata.price;
	   }
	   
	   if(pdata.discountvalue!=0){
	   
	   if(pdata.discounttype=="Amount"){
		 Discount["discountamount"]=Math.floor(pdata.discountvalue*100); //fix amount discount 
	   }
	   
	   if(pdata.discounttype=="Percentage"){
		 Discount["discountamount"]=Math.floor((pdata.discountvalue/100)*realprice); //fix percent discount 
	   }
	   
	   if(pdata.discounttype=="New Price"){
		 Discount["discountvalue"] = proddata.currencyCode+" "+String(pdata.discountvalue);
	     Discount["discountamount"] = Math.floor(realprice-pdata.discountvalue*100); //fix new price
	   }
	   
	   if(Discount["discountamount"]<0){
	      Discount["discountamount"]=0;
	   }
	   
	   
	   Discount["discountedamount"] = realprice-Discount["discountamount"]; 
	   
	  }else{
		 if(pdata.discounttype=="New Price"){
			 
	      Discount["discountamount"] = Math.floor(realprice-pdata.discountvalue*100); //fix new price
		  Discount["discountedamount"] = realprice-Discount["discountamount"]; 
		   
		 }else{
		  
		  if(pdata.globaldiscountinherit){
	        Discount = await this.checkglobal(ctx,realprice);
			return Discount;
		  }else{
		   
		   Discount["discountamount"]= 0;
		   Discount["discountedamount"] = realprice; 
		  }
		 
		 }
	  }
	   
	  return Discount["discountedamount"];
	 
	 }else{
	  return new InternalServerError("The product variant doesn't exist");
	 }
  }
  
  
  async checkglobal(@Ctx() ctx: RequestContext,realprice:any){
     
	 let Discount = <any>{};
	 
	 let settings = await this.globalsettingservice.getSettings(ctx);
	 let gdiscounts = JSON.parse(JSON.stringify(settings.customFields));
	 
	 if(gdiscounts.globaldiscountvalue!=0){
	   Discount["discountvalue"] = gdiscounts.globaldiscountvalue;
	   
	   if(gdiscounts.globaldiscounttype=="Amount"){
		 Discount["discountamount"]=Math.floor(gdiscounts.globaldiscountvalue*100); //fix amount discount 
	   }
	   
	   if(gdiscounts.globaldiscounttype=="Percentage"){
		 Discount["discountamount"]=Math.floor((gdiscounts.globaldiscountvalue/100)*realprice); //fix percent discount 
	   }
	   
	   if(Discount["discountamount"]<0){
	      Discount["discountamount"]=0;
	   }
	   
	   Discount["discountedamount"] = realprice-Discount["discountamount"]; 
	   
	 }else{ 
	   Discount["discountamount"]= 0;
	   Discount["discountedamount"] = realprice; 
	 }
	 
	 return Discount["discountedamount"];
  }
  
  
  async getOrderFromContext(@Ctx() ctx: RequestContext, createIfNotExists = false) {
        if (!ctx.session) {
            throw new InternalServerError(`error.no-active-session`);
        }
        
		let order = ctx.session.activeOrderId
            ? await this.orderService.findOne(ctx, ctx.session.activeOrderId)
            : undefined;
        if (order && order.active === false) {
            // edge case where an inactive order may not have been
            // removed from the session, i.e. the regular process was interrupted
            await this.sessionService.unsetActiveOrder(ctx, ctx.session);
            order = undefined;
        }
		
        if (!order) {
            if (ctx.activeUserId) {
                order = await this.orderService.getActiveOrderForUser(ctx, ctx.activeUserId);
            }
            if (!order && createIfNotExists) {
                order = await this.orderService.create(ctx, ctx.activeUserId);
            }
            if (order) {
                await this.sessionService.setActiveOrder(ctx, ctx.session, order);
            }
        }
        return order || undefined;
    }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [DiscountsOrderResolver],
  }
})



export class DiscountsOrderPlugin {}