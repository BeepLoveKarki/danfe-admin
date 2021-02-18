import { LanguageCode, ShippingCalculator } from '@vendure/core';
import { getDistricts }  from "./get-districts";

export const externalShippingCalculator = new ShippingCalculator({
  code: 'danfe-shipping-calculator',
  description: [{ languageCode: LanguageCode.en, value: 'Danfe Shipping Calculator' }],
  args: {
    
  },
  
  calculate: async (ctx, order, args) => {
	
	const rate = 1000;
	
    return { 
      price: rate
      // metadata is optional but can be used to pass arbitrary
      // data about the shipping estimate to the storefront.
      //metadata: { courier, deliveryDate },
    };
  },
});