import { LanguageCode, ShippingEligibilityChecker } from '@vendure/core';
import { getDistricts }  from "./get-districts";

export const AlwaysShipping = new ShippingEligibilityChecker({
  code: 'always-shipping',
  description: [
    { languageCode: LanguageCode.en, value: 'Always Shipping' }
  ],
  args: {
	  
  },
  check: (ctx, order, args) => {
     return true;
  },
});