import{
  AuthenticationStrategy,
  Injector,
  RequestContext,
  User,
  CustomerService,
  GlobalSettingsService,
  UserService,
  UserInputError,
  IllegalOperationError
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import referralCodeGenerator from 'referral-code-generator';

export type SocialRegisterAuthData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  ofsocial: string;
  customFields: any;
  referralcode: string;
};

export class SocialRegisterAuthenticationStrategy implements AuthenticationStrategy<SocialRegisterAuthData> {
  readonly name = 'socialregister';
  private customerService: CustomerService;
  private globalsettingsService: GlobalSettingsService;
  private userService: UserService;

  constructor() {
    
  }

  init(injector: Injector) {
	this.customerService = injector.get(CustomerService);
	this.userService = injector.get(UserService);
	this.globalsettingsService = injector.get(GlobalSettingsService);
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
			referralcode: String
        }
    `;
  }

  async authenticate(ctx: RequestContext, data: SocialRegisterAuthData): Promise<User | false> {
    
	let customer:any;
	let a=0;
	let referredcode;
	
	if(data["referralcode"] && data["referralcode"].length!=0){
	 referredcode = data["referralcode"];
	 delete data["referralcode"];
	}
	
	data["customFields"] = <any>{};
	data["customFields"]["referralcode"] = referralCodeGenerator.alphaNumeric('uppercase', 2, 3);
	
	if(data.ofsocial){
		delete data.ofsocial;
		a=1;
		customer = await this.customerService.create(ctx,data,data.password);
	}else{
		customer = await this.customerService.registerCustomerAccount(ctx,data); 
	}
	
	if(customer){
	   
	   const user = await this.userService.getUserByEmailAddress(ctx,data.emailAddress);
	   if(user){
		
		
        if(referredcode){
         let globalSettings = JSON.parse(JSON.stringify(await this.globalsettingsService.getSettings(ctx)));			
		 
		 let rfilter = <any>{};
		 rfilter["filter"] =<any>{};
		 rfilter["filter"]["referralcode"]=<any>{};
		 rfilter["filter"]["referralcode"]["eq"] = referredcode;
		 
		 let referrer = await this.customerService.findAll(ctx,rfilter);
		 if(referrer){
		   let referrercustomer = JSON.parse(JSON.stringify(referrer.items[0]));
		   let rnew = referrercustomer.customFields.balance+globalSettings.customFields.referrerbalance;
		   
		   let customer = JSON.parse(JSON.stringify(await this.customerService.findOneByUserId(ctx,user.id)));
		   let cnew = customer.customFields.balance+globalSettings.customFields.refereebalance;
		   
		   if(customer.customFields.balance==0){

		     await this.updatecustomerbalance(ctx,referrercustomer.id,rnew);
		     await this.updatecustomerbalance(ctx,customer.id,cnew);
		   
		   }
		   
		 }else{
		   throw new UserInputError("Referral Code doesn't exist");
		 }
		 
		}
		 
		   return user;
		 
	   }else{
	     return false;
	   }
	}else{
	   return false;
	}
  
  }
  
  
  async updatecustomerbalance(ctx: RequestContext,id:any,balance:any){
    let input = <any>{};
	input["id"] = id;
	input["customFields"] = <any>{};
	input["customFields"]["balance"] = balance;
	return this.customerService.update(ctx,input);
  }
  
}