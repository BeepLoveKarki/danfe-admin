import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, ProductVariant, Channel, PluginCommonModule, VendurePlugin, TransactionalConnection } from '@vendure/core';
import gql from 'graphql-tag';
import {getConnection, In} from 'typeorm';

const schemaExtension = gql`
	
    extend type ProductVariant {
        channels: [Channel!]!
    }
`;

@Resolver('ProductVariant')
export class ProductVariantEntityResolver {
	
  constructor(private connection: TransactionalConnection) {}
  
  @ResolveField()
  async channels(@Ctx() ctx: RequestContext, @Parent() variant: ProductVariant) {
	let channelids = await getConnection().query( `SELECT * FROM "product_variant_channels_channel" WHERE "productVariantId"=${variant.id}`);
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
    resolvers: [ProductVariantEntityResolver],
  }
})



export class ProductVariantExtensionPlugin {}