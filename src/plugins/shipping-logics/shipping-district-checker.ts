import { LanguageCode, ShippingEligibilityChecker } from '@vendure/core';
import { getDistricts }  from "./get-districts";

export const ShippingDistrictChecker = new ShippingEligibilityChecker({
  code: 'shipping-district-checker',
  description: [
    { languageCode: LanguageCode.en, value: 'Shipping District Checker' }
  ],
  args: {
    district: {
      type: 'string',
	  defaultValue: 'Kathmandu',
      ui: { component: 'select-form-input', 
	        options: getDistricts()
		  },
      label: [{ languageCode: LanguageCode.en, value: 'Shipping District' }],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Order is eligible only if the shipping address contains selected district',
        },
      ],
    },
  },
  check: (ctx, order, args) => {
     return order.shippingAddress.customFields.district == args.district;
  },
});