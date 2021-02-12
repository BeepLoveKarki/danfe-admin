import { LanguageCode, ShippingCalculator } from '@vendure/core';
import { getDistricts }  from "./get-districts";

export const externalShippingCalculator = new ShippingCalculator({
  code: 'shipping-calculator',
  description: [{ languageCode: LanguageCode.en, value: 'Calculate shipping based on location' }],
  args: {
    
	district: {
      type: 'string',
	  defaultValue: 'Kathmandu',
      ui: { component: 'select-form-input', 
	        options: getDistricts()
		  },
      label: [{ languageCode: LanguageCode.en, value: 'Shipping District' }],
    },
	
	taxRate: {
      type: 'int',
      ui: { component: 'number-form-input', suffix: '%' },
      label: [{ languageCode: LanguageCode.en, value: 'Tax rate' }],
    },
  },
  
  calculate: async (ctx, order, args) => {
    // `shippingDataSource` is assumed to fetch the data from some
    // external data source.
    /*const { rate, deliveryDate, courier } = await shippingDataSource.getRate({
      destination: order.shippingAddress,
      contents: order.lines,
    });*/
	
	const rate = 1000;
	
    return { 
      price: rate, 
      priceIncludesTax: ctx.channel.pricesIncludeTax,
      taxRate: args.taxRate,
      // metadata is optional but can be used to pass arbitrary
      // data about the shipping estimate to the storefront.
      //metadata: { courier, deliveryDate },
    };
  },
});