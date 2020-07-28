import{
  AuthenticationStrategy,
  ExternalAuthenticationService,
  Injector,
  RequestContext,
  User,
  AuthService
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export type AdminAuthData = {
  username: string;
  password: string;
  answer: string;
  nodisplay: string;
  score: string;
};

export class AdminAuthenticationStrategy implements AuthenticationStrategy<AdminAuthData> {
  readonly name = 'admin';
  private authService: AuthService;

  constructor() {
    
  }

  init(injector: Injector) {
	this.authService = injector.get(AuthService);
  }

  defineInputType(): DocumentNode {
    return gql`
        input AdminAuthInput {
            username: String!
			password: String!
			answer: String!
			nodisplay: String
			score: String!
        }
    `;
  }

  async authenticate(ctx: RequestContext, data: AdminAuthData): Promise<User | false> {
    
	if(data.nodisplay || data.answer!="Sanitize Nepal" || Number(data.score)<0.5){
	  return false;
	}else{
	  let adata = <any>{};
	  adata["username"] = data.username;
	  adata["password"] = data.password;
	  let session = await this.authService.authenticate(ctx,"admin","native",adata);
	  return session.user;
	}
	
	return false;
  
  }
}