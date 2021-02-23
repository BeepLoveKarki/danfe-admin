import { AssetService, Asset, ListQueryBuilder } from '@vendure/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { gql } from 'apollo-server-core';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';
import { ListQueryOptions } from '@vendure/core/dist/common/types/common-types';


const schemaExtension = gql`
	
    extend type Query {
        assets(options: AssetListOptions):  AssetList!
		headassets: AssetList!
		brandassets: AssetList!
    }
	
	input AssetListOptions
	
`;


@Resolver()
export class AssetsResolver {
  constructor(private assetservice:AssetService,
              private listQueryBuilder: ListQueryBuilder) {}

  @Query()
  assets(@Ctx() ctx: RequestContext, @Args() args: any) {
	return this.listQueryBuilder
		.build(Asset, args.options)
		.getManyAndCount()
		.then(([assets, totalItems]) => {
			return {
				items: assets,
				totalItems
			 };
		 });
  }
  
  @Query()
  headassets(@Ctx() ctx: RequestContext,  @Args() args: any) {
	
	const options = {
      filter:{
        name: {
        contains: "danfeheader"
       }
      }
	 };
	
	return this.listQueryBuilder
		.build(Asset, options)
		.getManyAndCount()
		.then(([assets, totalItems]) => {
			return {
				items: assets,
				totalItems
			 };
		 });
  }
  
  @Query()
  brandassets(@Ctx() ctx: RequestContext,  @Args() args: any) {
	
	const options = {
      filter:{
        name: {
        contains: "danfebrand"
       }
      }
	 };
	
	return this.listQueryBuilder
		.build(Asset, options)
		.getManyAndCount()
		.then(([assets, totalItems]) => {
			return {
				items: assets,
				totalItems
			 };
		 });
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [AssetsResolver],
  }
})



export class AssetsPlugin {}