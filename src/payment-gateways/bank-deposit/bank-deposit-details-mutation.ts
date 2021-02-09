import { PaymentMethodService } from '@vendure/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';
import { Ctx, PluginCommonModule, RequestContext, VendureConfig, VendurePlugin } from '@vendure/core';

let postdata = <any>{};

const schemaExtension = gql`
    type BankDeposit {
		BankName: String!
		OwnerName: String!
		AccountNo: String!
    }
	
    extend type Mutation {
        getBankDepositDetails: BankDeposit
    }
`;


@Resolver()
export class BankDepositResolver {
  constructor(private paymentmethodservice:PaymentMethodService) {}

  @Mutation()
  getBankDepositDetails(@Ctx() ctx: RequestContext, @Args() args: any) {
	  
	return this.paymentmethodservice.findAll(ctx,{}).then((data:any)=>{
	   for(let i=0;i<data.items.length;i++){
	      if(data.items[i]["code"]=="Bank Deposit"){
		     for(let j=0;j<data.items[i]["configArgs"].length;j++){
			
			    if(data.items[i]["configArgs"][j]["name"]=="Bank Name"){
				    postdata["BankName"] = data.items[i]["configArgs"][j]["value"];
				}
				
				if(data.items[i]["configArgs"][j]["name"]=="Bank Account Owner's Name"){
				    postdata["OwnerName"] = data.items[i]["configArgs"][j]["value"];
				}
				
				if(data.items[i]["configArgs"][j]["name"]=="Bank Account No."){
				    postdata["AccountNo"] = String(data.items[i]["configArgs"][j]["value"]);
				}
				
			 }
			 
			 break;
		  }
	   }
	   
	   return postdata;
	});
  }

}

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: schemaExtension,
    resolvers: [BankDepositResolver],
  }
})



export class BankDepositPlugin {}