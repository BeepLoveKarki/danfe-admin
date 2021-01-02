export const extensionRoutes = [  {
    path: 'extensions/subscribedmails',
    loadChildren: () => import('./extensions/a9af16c80b8350127fca1c5ca0d099380624f452297f6cb10aeadc83972207c1/mailsubscription-ui-lazy.module').then(m => m.MailSubscriptionUIModule),
  },
  {
    path: 'extensions/subscribedphones',
    loadChildren: () => import('./extensions/a9af16c80b8350127fca1c5ca0d099380624f452297f6cb10aeadc83972207c1/phonesubscription-ui-lazy.module').then(m => m.PhoneSubscriptionUIModule),
  },
  {
    path: 'extensions/vendors',
    loadChildren: () => import('./extensions/a54db48cd17500f6e960d4a4c0a05fb8c04c9626ba390705252a6b732b37a892/vendor-ui-lazy.module').then(m => m.VendorUIModule),
  },
  {
    path: 'extensions/feedbacks',
    loadChildren: () => import('./extensions/4bd412b956d4c1baedfedaa6aa36beabe17096aeaddd966cdb15d5b0044cbcd1/feedback-ui-lazy.module').then(m => m.FeedbackUIModule),
  },
  {
    path: 'extensions/product-reviews',
    loadChildren: () => import('./extensions/840972a46552899ed7afef3fc466fbca27d3b45c6bb2d306017d7ba2f255b732/reviews-ui-lazy.module').then(m => m.ReviewsUiLazyModule),
  }];
