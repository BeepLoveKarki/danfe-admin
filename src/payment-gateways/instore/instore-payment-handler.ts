import {PaymentMethodHandler,LanguageCode} from '@vendure/core';

export const InStorePaymentHandler = new PaymentMethodHandler({
    code: 'In Store Pick Up',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Visit In Store for Payment',
    }],
	
	args: {
		'Street Address': {type: 'string'},
		'District': {
		    type: 'string',
			ui: {
			  component: 'select-form-input',
			  options:[
			   {value:"Kathmandu"},
			   {value:"Bhaktapur"},
			  ],
			},
		},
		'Working Days':{
		  type: 'string',
		  list: true,
		  ui: {
			  component: 'select-form-input',
			  options:[
			   {value:"Sunday"},
			   {value:"Monday"},
			   {value:"Tuesday"},
			   {value:"Wednesday"},
			   {value:"Thursday"},
			   {value:"Friday"},
			   {value:"Saturday"},
			  ],
			},
		},
		'Opening Time':{
		  type: 'datetime'
		},
		'Closing Time':{
		  type: 'datetime'
		},
		'Contact No.': {
			type:'int',
			list:true
		}
    },
	
	async createPayment(ctx, order, amount, args, metadata) {
		   return {
                amount: amount,
                state: 'Authorized' as 'Authorized',
                metadata: {
				  public:{
                    message:"Success"
				  }
                },
            };
	},
	
	async settlePayment(){
	  return {
            success: true,
      };
	}
    	
});
