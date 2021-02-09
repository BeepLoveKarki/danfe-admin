import { SessionService, OrderService, ProductVariantService, InternalServerError } from '@vendure/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
    extend type Mutation {
        addItemToOrderAdvanced(productVariantId: ID!, quantity: Int!, discountedamount: Int!): UpdateOrderItemsResult!
    }
`;


@Resolver()
export class DiscountsOrderResolver {
  constructor(private orderService: OrderService, private sessionService: SessionService, private variantService: ProductVariantService) {}

  @Mutation()
  async addItemToOrderAdvanced(@Ctx() ctx: RequestContext, @Args() args: any) {
	const productvariant = await this.variantService.findOne(ctx,args.productVariantId);
	if(productvariant){
	 
	 let proddata = JSON.parse(JSON.stringify(productvariant));
	 let realprice = proddata.price;
	 
	 const order = await this.getOrderFromContext(ctx, true);
	 
	 if(order!=undefined){
	
	  order.lines.forEach((val,index)=>{
	    console.log(val.productVariant.id);
		console.log(val.productVariant.price);
	  });
	  
	  if(args.discountedamount!=realprice){
	    let input = <any>{};
	    input["id"]=args.productVariantId;
	    input["price"]=args.discountedamount;
	    let vinput = new Array(input);
	    const updatedvariant = await this.variantService.update(ctx,vinput); //create new
		console.log(updatedvariant);
	 }
	  
	  const result = await this.orderService.addItemToOrder(ctx, order.id, args.productVariantId, args.quantity, args.customFields);
	  
	  if(args.discountedamount!=realprice){
	     let ninput = <any>{};
	     ninput["id"]=args.productVariantId;
	     ninput["price"]=realprice;
	     let nvinput = new Array(ninput);
	     await this.variantService.update(ctx,nvinput); //delete new
	  }
	  
	  return result;
	 
	 }
	
	}else{
	  throw new InternalServerError("The product variant doesn't exist");
	}
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