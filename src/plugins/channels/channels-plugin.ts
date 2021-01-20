import { ChannelService, Channel } from '@vendure/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';

let postdata = <any>{};

const schemaExtension = gql`
	
    extend type Query {
        Channels: [Channel!]!
    }
`;


@Resolver()
export class ChannelsResolver {
  constructor(private channelservice:ChannelService) {}

  @Query()
  Channels(@Ctx() ctx: RequestContext, @Args() args: any) {
	  
	return this.channelservice.findAll(ctx);
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