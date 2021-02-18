import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';
import Nepal from 'nepal-js';
import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

const schemaExtension = gql`
	
    extend type Query {
        zonesnepal: [String!]!
		districtsnepal(zone: String): [String!]!
		citiesnepal: [String!]!
		areas(district:String!): [String!]!
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
  
  @Query()
  async areas(@Ctx() ctx: RequestContext, @Args() args: any) {
	//return Object.keys(Nepal.getCitiesByDistrict(args.district));
	
	let fpath = path.join(__dirname,'../../shipping-rates/'+args.district+'.csv');
	
	let areas = new Array();
	
	try{
	 
	 if (fs.existsSync(fpath)) {
	  
	  const array = await csv().fromFile(fpath);
	  array.forEach((val,index)=>{
	     areas.push(val["PLACE"]);
	  });
	  
	 }
	   
	 return areas;
	
	}catch(err){
	  return areas;
	}
	
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