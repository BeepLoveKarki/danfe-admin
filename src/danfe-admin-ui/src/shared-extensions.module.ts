import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesUiExtensionModule } from './extensions/17fb80b0773083839f6b3b938818de94c40152dbc25d6cda91ee7fdf0b8fe156/favorites-ui-extension.module';
import { SubscriptionExtensionModule } from './extensions/a9af16c80b8350127fca1c5ca0d099380624f452297f6cb10aeadc83972207c1/subscription-ui-extension.module';
import { VendorExtensionModule } from './extensions/a54db48cd17500f6e960d4a4c0a05fb8c04c9626ba390705252a6b732b37a892/vendor-ui-extension.module';
import { FeedbackExtensionModule } from './extensions/4bd412b956d4c1baedfedaa6aa36beabe17096aeaddd966cdb15d5b0044cbcd1/feedback-ui-extension.module';
import { ReviewsUiExtensionModule } from './extensions/840972a46552899ed7afef3fc466fbca27d3b45c6bb2d306017d7ba2f255b732/reviews-ui-extension.module';
import { BulkDiscountInputModule } from './extensions/19f1a5ae4a5d385feebe9034e639c50e7212ce7bea220e04da7565a514484be0/bulk-discount-input.module';
import { ProductRecommendationsInputModule } from './extensions/bd527912b2da621799dc2267badd8f413da89b90574b74328586f8538ba7a898/product-recommendations-input.module';


@NgModule({
    imports: [CommonModule, FavoritesUiExtensionModule, SubscriptionExtensionModule, VendorExtensionModule, FeedbackExtensionModule, ReviewsUiExtensionModule, BulkDiscountInputModule, ProductRecommendationsInputModule, ],
})
export class SharedExtensionsModule {}
