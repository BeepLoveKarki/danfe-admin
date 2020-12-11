import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesUiExtensionModule } from './extensions/17fb80b0773083839f6b3b938818de94c40152dbc25d6cda91ee7fdf0b8fe156/favorites-ui-extension.module';
import { SubscriptionExtensionModule } from './extensions/a9af16c80b8350127fca1c5ca0d099380624f452297f6cb10aeadc83972207c1/subscription-ui-extension.module';
import { VendorExtensionModule } from './extensions/a54db48cd17500f6e960d4a4c0a05fb8c04c9626ba390705252a6b732b37a892/vendor-ui-extension.module';
import { FeedbackExtensionModule } from './extensions/4bd412b956d4c1baedfedaa6aa36beabe17096aeaddd966cdb15d5b0044cbcd1/feedback-ui-extension.module';
import { ReviewsUiExtensionModule } from './extensions/840972a46552899ed7afef3fc466fbca27d3b45c6bb2d306017d7ba2f255b732/reviews-ui-extension.module';
import { BulkDiscountInputModule } from './extensions/2f704dcc10110d3a9eadf07d8fac454e94d06972d944f634134ee7820e99a10d/bulk-discount-input.module';
import { ProductRecommendationsInputModule } from './extensions/f3425a08dceae1897982be32924bf5d1df5d89bbe0ca1b42944b472ce02d1646/product-recommendations-input.module';


@NgModule({
    imports: [CommonModule, FavoritesUiExtensionModule, SubscriptionExtensionModule, VendorExtensionModule, FeedbackExtensionModule, ReviewsUiExtensionModule, BulkDiscountInputModule, ProductRecommendationsInputModule, ],
})
export class SharedExtensionsModule {}
