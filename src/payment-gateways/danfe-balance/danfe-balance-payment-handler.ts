import {PaymentMethodHandler, LanguageCode, CustomerService, Injector, ForbiddenError, InternalServerError} from '@vendure/core';

let customerService: CustomerService;

export const DanfeBalancePaymentHandler = new PaymentMethodHandler({
    code: 'Danfe Balance',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Payment via Danfe Balance',
    }],
	
	init(injector: Injector) {
		customerService = injector.get(CustomerService);
	},
    
	args: {
		
    },
    
	async createPayment(ctx, order, amount, args, metadata) {
		const userId = ctx.activeUserId;
		if (!userId) {
           throw new ForbiddenError();
        }
		
		let dbcustomer = await customerService.findOneByUserId(ctx,userId);
		if (!dbcustomer) {
           throw new InternalServerError(`error.no-customer-found-for-current-user`);
        }
		
		let customer = JSON.parse(JSON.stringify(await customerService.findOneByUserId(ctx,userId)));
		if(customer.customFields.balance>=amount){
		  let newnum = customer.customFields.balance-amount;
		  let input = <any>{};
		  input["id"] = customer.id;
		  input["customFields"] = <any>{};
		  input["customFields"]["balance"] = newnum;
		  await customerService.update(ctx,input);
		  return {
                amount: amount,
                state: 'Authorized' as 'Authorized',
                metadata: {
				  public:{
                    message:"Success"
				  }
                },
            };
		}else{
		  return {
                amount: amount,
                state: 'Declined' as 'Declined',
                metadata: {
					public:{
                      errorMessage: "Insufficient Danfe Balance"
					}
                },
          };
		}
		
	},
	
	async settlePayment(){
	  return {
            success: true,
      };
	}	
});
