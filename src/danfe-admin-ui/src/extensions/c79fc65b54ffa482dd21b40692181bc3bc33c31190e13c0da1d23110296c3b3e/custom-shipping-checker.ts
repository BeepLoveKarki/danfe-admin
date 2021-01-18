import { LanguageCode, ShippingEligibilityChecker } from '@vendure/core';

export const maxWeightChecker = new ShippingEligibilityChecker({
  code: 'max-weight-checker',
  description: [
    { languageCode: LanguageCode.en, value: 'Max Weight Checker' }
  ],
  args: {
    maxWeight: {
      type: 'int',
      ui: { component: 'number-form-input', suffix: 'grams' },
      label: [{ languageCode: LanguageCode.en, value: 'Maximum order weight' }],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Order is eligible only if its total weight is less than the specified value',
        },
      ],
    },
  },
  /**
   * Must resolve to a boolean value, where `true` means that the order is
   * eligible for this ShippingMethod.
   *
   * (This example assumes a custom field "weight" is defined on the
   * ProductVariant entity)
   */
  check: (ctx, order, args) => {
    const totalWeight = order.lines
      .map((l) => (l.productVariant.customFields as any).weight * l.quantity)
      .reduce((total, lineWeight) => total + lineWeight, 0);
    
    return totalWeight <= args.maxWeight;
  },
});