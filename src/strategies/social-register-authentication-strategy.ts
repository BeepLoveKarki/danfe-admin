import{
  AuthenticationStrategy,
  ExternalAuthenticationService,
  Injector,
  RequestContext,
  User,
  CustomerService,
  UserService,
  UserInputError,
  IllegalOperationError
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export type SocialRegisterAuthData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  ofsocial: string
};

export class SocialRegisterAuthenticationStrategy implements AuthenticationStrategy<SocialRegisterAuthData> {
  readonly name = 'socialregister';
  private externalAuthenticationService: ExternalAuthenticationService;
  private customerService: CustomerService;
  private userService: UserService;

  constructor() {
    
  }

  init(injector: Injector) {
    this.externalAuthenticationService = injector.get(ExternalAuthenticationService);
	this.customerService = injector.get(CustomerService);
	this.userService = injector.get(UserService);
  }

  defineInputType(): DocumentNode {
    return gql`
        input SocialRegisterAuthInput {
			firstName: String!
            lastName: String!
			phoneNumber: String
            emailAddress: String!
			password: String!
			ofsocial: String
        }
    `;
  }

  async authenticate(ctx: RequestContext, data: SocialRegisterAuthData): Promise<User | false> {
    
	let customer:any;
	let a=0;
	
	if(data.ofsocial){
		delete data.ofsocial;
		a=1;
		customer = await this.customerService.create(ctx,data,data.password);
	}else{
	    const user = await this.userService.getUserByEmailAddress(data.emailAddress);
		if(user){ //email pre registered
		  throw new UserInputError(`error.email-address-must-be-unique`);
		}else{
		 customer = await this.customerService.registerCustomerAccount(ctx,data); 
		}
	}
	
	if(customer){
	   const user = await this.userService.getUserByEmailAddress(data.emailAddress);
	   if(user){
	     if(a==1){
		   return user;
		 }else{
		   throw new IllegalOperationError("Please Check You Email for verification.");
		 }
	   }else{
	     return false;
	   }
	}else{
	   return false;
	}
  
  }
}