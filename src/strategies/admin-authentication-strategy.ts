import{
  AuthenticationStrategy,
  Injector,
  RequestContext,
  User,
  AuthService
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { HttpService } from '@nestjs/common';

export type AdminAuthData = {
  username: string;
  password: string;
  answer: string;
  nodisplay: string;
  token: string;
};

export class AdminAuthenticationStrategy implements AuthenticationStrategy<AdminAuthData> {
  readonly name = 'admin';
  private authService: AuthService;
  private httpService: HttpService;

  constructor() {
    
  }

  init(injector: Injector) {
	this.authService = injector.get(AuthService);
	this.httpService = injector.get(HttpService);
  }

  defineInputType(): DocumentNode {
    return gql`
        input AdminAuthInput {
            username: String!
			password: String!
			answer: String!
			nodisplay: String
			token: String!
        }
    `;
  }

  async authenticate(ctx: RequestContext, data: AdminAuthData): Promise<User | false> {
    
	if(data.nodisplay.length!=0 || data.answer!="Sanitize Nepal"){
	  return false;
	}else{
	   let res = await this.httpService.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECPATCHA_SECRET_KEY}&response=${data.token}`, 
	   {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
       }).toPromise();
	   console.log(res);
	   if(res.data.success){
	     if(res.data.score>0.5){
		    let adata = <any>{};
			adata["username"] = data.username;
			adata["password"] = data.password;
			let session = await this.authService.authenticate(ctx,"admin","native",adata);
			return session.user;
            //return false;			
		 }else{
		   return false;
		 }
	   }else{
	     return false;
	   }
	   
	  return false;
	}
  
  }
}