import { LanguageCode, ShippingEligibilityChecker } from '@vendure/core';
import { getDistricts }  from "./get-districts";

export const ShippingDistrictAmountChecker = new ShippingEligibilityChecker({
  code: 'shipping-district-checker',
  description: [
    { languageCode: LanguageCode.en, value: 'Shipping District & Minimum Amount Checker' }
  ],
  args: {
	orderMinimum: {
	 type: 'int',
	 defaultValue: 0,
	 ui: {
		 component:'currency-form-input'
	 },
	 label: [{ languageCode: LanguageCode.en, value: 'Minimum order value' }],
	 description: [
        {
          languageCode: LanguageCode.en,
          value: 'Order is eligible only if its total is greater or equal to this value',
        },
      ],
	},
    district: {
      type: 'string',
	  defaultValue: 'Kathmandu',
      ui: { component: 'select-form-input', 
	        options:getDistricts()
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
     return order.shippingAddress.customFields.district == args.district && order.total>=args.orderMinimum;
  },
});