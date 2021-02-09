import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';
import Nepal from 'nepal-js';

const schemaExtension = gql`
	
    extend type Query {
        zonesnepal: [String!]!
		districtsnepal(zone: String): [String!]!
		citiesnepal: [String!]!
    }
`;


@Resolver()
export class NepalResolver {
  constructor() {}

  @Query()
  zonesnepal(@Ctx() ctx: RequestContext, @Args() args: any) {
	return Object.keys(Nepal.Zones);
  }
  
  
  @Query()
  districtsnepal(@Ctx() ctx: RequestContext, @Args() args: any) {
	 if(args.zone){
	    return Object.keys(Nepal.getDistrictsByZone(args.zone));
	 }else{
	   return Object.keys(Nepal.Districts);
	 }
  }
 
  
  @Query()
  citiesnepal(@Ctx() ctx: RequestContext, @Args() args: any) {
	return Object.keys(Nepal.Cities);
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [NepalResolver],
  },
  adminApiExtensions:{
    schema: schemaExtension,
    resolvers: [NepalResolver],
  }
})



export class NepalPlugin {}