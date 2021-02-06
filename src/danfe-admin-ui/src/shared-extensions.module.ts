import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetModule } from './extensions/b56fb9cdcdc63b969b2316b16e91948a34b2d6d2d536505a0f555e1737c5e94a/WidgetModule';
import { NavBarHidingModule } from './extensions/c79fc65b54ffa482dd21b40692181bc3bc33c31190e13c0da1d23110296c3b3e/navbar-hiding-module';
import { FavoritesUiExtensionModule } from './extensions/fe945b4f371b1fc2016698fc3d196d73bc96de26a697ebd7a4d81d5acd224f78/favorites-ui-extension.module';
import { SubscriptionExtensionModule } from './extensions/6238c1d037144377bad80515f98dd7ee464176b0c1a8dcd56038bea394ef450b/subscription-ui-extension.module';
import { VendorExtensionModule } from './extensions/b20298563d7f0082af4f022b5cb6565205a6b799890da1f10637a87a945bd945/vendor-ui-extension.module';
import { FeedbackExtensionModule } from './extensions/c2fc3167a7637e3e6047f9aa1c5029be8eb7d391e740b899c390029a2b24b36d/feedback-ui-extension.module';
import { ReviewsUiExtensionModule } from './extensions/ffb0af830fea2fe89b88721fb90200f0aad96b92cfb92d649e95f7ef7f6f41dc/reviews-ui-extension.module';
import { ProductRecommendationsInputModule } from './extensions/9b1b52c8548552ec5e4aa8ab88c49536b839c8a35529b0fe69fb30c23a127210/product-recommendations-input.module';


@NgModule({
    imports: [CommonModule, WidgetModule, NavBarHidingModule, FavoritesUiExtensionModule, SubscriptionExtensionModule, VendorExtensionModule, FeedbackExtensionModule, ReviewsUiExtensionModule, ProductRecommendationsInputModule],
})
export class SharedExtensionsModule {}
