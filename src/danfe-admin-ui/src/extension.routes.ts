export const extensionRoutes = [  {
    path: 'extensions/subscribedmails',
    loadChildren: () => import('./extensions/6238c1d037144377bad80515f98dd7ee464176b0c1a8dcd56038bea394ef450b/mailsubscription-ui-lazy.module').then(m => m.MailSubscriptionUIModule),
  },
  {
    path: 'extensions/subscribedphones',
    loadChildren: () => import('./extensions/6238c1d037144377bad80515f98dd7ee464176b0c1a8dcd56038bea394ef450b/phonesubscription-ui-lazy.module').then(m => m.PhoneSubscriptionUIModule),
  },
  {
    path: 'extensions/vendors',
    loadChildren: () => import('./extensions/b20298563d7f0082af4f022b5cb6565205a6b799890da1f10637a87a945bd945/vendor-ui-lazy.module').then(m => m.VendorUIModule),
  },
  {
    path: 'extensions/feedbacks',
    loadChildren: () => import('./extensions/c2fc3167a7637e3e6047f9aa1c5029be8eb7d391e740b899c390029a2b24b36d/feedback-ui-lazy.module').then(m => m.FeedbackUIModule),
  },
  {
    path: 'extensions/product-reviews',
    loadChildren: () => import('./extensions/ffb0af830fea2fe89b88721fb90200f0aad96b92cfb92d649e95f7ef7f6f41dc/reviews-ui-lazy.module').then(m => m.ReviewsUiLazyModule),
  }];
