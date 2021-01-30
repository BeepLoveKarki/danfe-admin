import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, Product, Channel, PluginCommonModule, VendurePlugin, TransactionalConnection } from '@vendure/core';
import gql from 'graphql-tag';
import {getConnection, In} from 'typeorm';

const schemaExtension = gql`
	
    extend type Product {
        channels: [Channel!]!
    }
`;

@Resolver('Product')
export class ProductEntityResolver {
	
  constructor(private connection: TransactionalConnection) {}
  
  @ResolveField()
  async channels(@Ctx() ctx: RequestContext, @Parent() product: Product) {
	let channelids = await getConnection().query( `SELECT * FROM "product_channels_channel" WHERE "productId"=${product.id}`);
	let mychannels = new Array();
	channelids.forEach((val:any,index:any)=>{
	   mychannels.push(val["channelId"]);
	});
	return this.connection
            .getRepository(ctx,Channel)
            .find({
			    where: { 
				   id: In(mychannels)
				},
				relations: ['defaultShippingZone', 'defaultTaxZone']
			});
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [ProductEntityResolver],
  }
})



export class ProductExtensionPlugin {}