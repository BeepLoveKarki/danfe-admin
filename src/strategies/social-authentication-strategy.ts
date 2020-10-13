import{
  AuthenticationStrategy,
  Injector,
  RequestContext,
  User,
  UserInputError,
  UserService
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export type SocialAuthData = {
  email: string;
};

export class SocialAuthenticationStrategy implements AuthenticationStrategy<SocialAuthData> {
  readonly name = 'social';
  private userService: UserService;

  constructor() {
    
  }

  init(injector: Injector) {
	this.userService = injector.get(UserService);
  }

  defineInputType(): DocumentNode {
    return gql`
        input SocialAuthInput {
            email: String!
        }
    `;
  }

  async authenticate(ctx: RequestContext, data: SocialAuthData): Promise<User | false> {
    
	const user = await this.userService.getUserByEmailAddress(ctx,data.email);
	if(user){
	   return user;
	}else{
	   throw new UserInputError("Please complete one time social media authentication");
	}
  
  }
}