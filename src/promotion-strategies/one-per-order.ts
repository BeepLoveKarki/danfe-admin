import { LanguageCode, PromotionCondition } from '@vendure/core';

export const OnePerOrder = new PromotionCondition({
  code: 'one_per_order',
  
  description: [
    { languageCode: LanguageCode.en, value: 'Allow One Per Order/Checkout' },
  ],
  
  args: {
  },
  
  check(order, args) {
	order.couponCodes = order.couponCodes.slice(0,1);
	return true;
  },
  
});