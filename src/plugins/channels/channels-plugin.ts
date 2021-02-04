import { ChannelService, Channel } from '@vendure/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
	
    extend type Query {
        channels: [Channel!]!
		channel(id: ID): Channel!
    }
`;


@Resolver()
export class ChannelsResolver {
  constructor(private channelservice:ChannelService) {}

  @Query()
  channels(@Ctx() ctx: RequestContext, @Args() args: any) {
	  
	return this.channelservice.findAll(ctx);
  }
  
  
  @Query()
  channel(@Ctx() ctx: RequestContext, @Args() args: any) {
	  
	return this.channelservice.findOne(ctx,args.id);
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [ChannelsResolver],
  }
})



export class ChannelsPlugin {}