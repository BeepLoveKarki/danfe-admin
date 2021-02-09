import { GlobalSettingsService, LanguageCode } from '@vendure/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';


const schemaExtension = gql`
	
	type GlobalSettings{
	  id: ID!
	  createdAt: DateTime!
	  updatedAt: DateTime!
	  availableLanguages: [LanguageCode!]!
	}
	
    extend type Query {
        globalSettings: GlobalSettings!
    }
`;


@Resolver()
export class GlobalSettingsResolver {
  constructor(private globalsettingsservice:GlobalSettingsService) {}

  @Query()
  globalSettings(@Ctx() ctx: RequestContext, @Args() args: any) {
	return this.globalsettingsservice.getSettings(ctx);
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [GlobalSettingsResolver],
  }
})


export class GlobalSettingsPlugin {}