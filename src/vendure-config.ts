import {
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    VendureConfig,
	DefaultAssetNamingStrategy,
	NativeAuthenticationStrategy,
	defaultPromotionConditions,
	LanguageCode,
	defaultShippingEligibilityChecker,
	defaultShippingCalculator
} from '@vendure/core'; 
import { defaultEmailHandlers, EmailPlugin } from '@vendure/email-plugin';
import { AssetServerPlugin,configureS3AssetStorage } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';

import { SalesTrackerPlugin } from './finalized-plugins/vendure-salestracker-plugin';
import { ProductRecommendationsPlugin, ProductRecommendationsInputModule } from "./finalized-plugins/vendure-product-recommendations";

//import { BraintreePlugin } from "./finalized-plugins/vendure-braintree-plugin";
import { ReviewsPlugin } from "./finalized-plugins/vendure-reviews-plugin";

import { SubscriptionPlugin } from "./finalized-plugins/vendure-subscription-plugin";

import { FeedbackPlugin } from "./finalized-plugins/vendure-feedback-plugin";

import { VendorPlugin } from "./finalized-plugins/vendure-vendor-plugin";

import { FavoritesPlugin } from "./finalized-plugins/vendure-favorites-plugin";

import { compileUiExtensions, setBranding } from '@vendure/ui-devkit/compiler';

import { SocialAuthenticationStrategy } from './strategies/social-authentication-strategy';
import { SocialRegisterAuthenticationStrategy } from './strategies/social-register-authentication-strategy';
import { AdminAuthenticationStrategy } from './strategies/admin-authentication-strategy';

import { ProxyPlugin } from './proxy/proxy-plugin';

import { KhaltiMerchantPaymentHandler } from './payment-gateways/khalti-merchant/khalti-merchant-payment-handler';
import { KhaltiCredentialsPlugin } from './payment-gateways/khalti-merchant/khalti-credentials-mutation';

//import { KhaltiPersonalPaymentHandler } from './payment-gateways/khalti-personal/khalti-personal-payment-handler';

import { EsewaMerchantPaymentHandler } from './payment-gateways/esewa-merchant/esewa-merchant-payment-handler';
import { EsewaCredentialsPlugin } from './payment-gateways/esewa-merchant/esewa-credentials-mutation';

//import { EsewaPersonalPaymentHandler } from './payment-gateways/esewa-personal/esewa-personal-payment-handler';

import { CashPaymentHandler } from './payment-gateways/cash/cash-payment-handler';

import { BankDepositPaymentHandler } from './payment-gateways/bank-deposit/bank-deposit-payment-handler';
import { BankDepositPlugin } from './payment-gateways/bank-deposit/bank-deposit-details-mutation';

import { ConnectIPSPaymentHandler } from './payment-gateways/connectips/connectips-payment-handler';
import { ConnectIPSPlugin } from './payment-gateways/connectips/connectips-token-plugin';

//import { OnePerOrder } from './promotion-strategies/one-per-order';

import { ChannelsPlugin } from './plugins/channels/channels-plugin';
import { GlobalSettingsPlugin } from './plugins/globalsettings/globalsettings-plugin';
import { AssetsPlugin } from './plugins/assets/assets-plugin';

import { ShippingDistrictChecker } from './plugins/shipping-logics/shipping-district-checker';
import { ShippingDistrictAmountChecker } from './plugins/shipping-logics/shipping-district-amount-checker';
import { AlwaysShipping } from './plugins/shipping-logics/always-shipping';

import { externalShippingCalculator } from './plugins/shipping-logics/shipping-calculator';

import { ProductExtensionPlugin } from './plugins/channels/product-extension-plugin';
import { ProductVariantExtensionPlugin } from './plugins/channels/product-variant-extension-plugin';

import { NepalPlugin } from './plugins/miscellanous/nepal-plugin';
import { DiscountsPlugin } from './plugins/discounts/discounts-plugin';
import { DiscountsOrderPlugin } from './plugins/discounts/discounts-order-plugin';
import { ProductVariantDiscountPlugin } from './plugins/discounts/productvariant-discount-plugin';

import { ProductUpdatePlugin } from './plugins/products/product-update-module';

import path from 'path';


import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, '../.env')});

export const config: VendureConfig = {
 
apiOptions: {
        port: 3000,
        adminApiPath: 'admin-api',
        adminApiPlayground: {
            settings: {
                'request.credentials': 'include',
            } as any,
        },// turn this off for production
        adminApiDebug: true, // turn this off for production
        shopApiPath: 'shop-api',
        shopApiPlayground: { 
            settings: {
                'request.credentials': 'include',
            } as any,
        }, // turn this off for production
        shopApiDebug: true,// turn this off for production
    },
    authOptions: {
        sessionSecret: process.env.SECRET_KEY!,
        superadminCredentials: {
            identifier: process.env.IDENTIFIER!,
            password: process.env.PASSWORD!
        },
        shopAuthenticationStrategy: [
          new NativeAuthenticationStrategy(),
          new SocialAuthenticationStrategy(),
		  new SocialRegisterAuthenticationStrategy()
        ],
		adminAuthenticationStrategy: [
		  new NativeAuthenticationStrategy(),
		  new AdminAuthenticationStrategy()
		]
    },
	/*promotionOptions: {
		promotionConditions: [
		...defaultPromotionConditions,
		OnePerOrder,
	 ],
    },*/
	shippingOptions: {
     shippingEligibilityCheckers: [
       defaultShippingEligibilityChecker,
       ShippingDistrictChecker,
	   ShippingDistrictAmountChecker,
	   AlwaysShipping
      ],
	  shippingCalculators: [
       defaultShippingCalculator,
       externalShippingCalculator
      ],
    },
	assetOptions: <any>{
	  permittedFileTypes:[
	  "image/*",
	  "application/pdf",
	  "application/msword",
	  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	  "application/vnd.ms-excel",
	  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	  "application/vnd.ms-powerpoint",
	  ".csv",
	  "text/plain",
	  "video/*",
	  "audio/*"
	  ]
	},
    dbConnectionOptions: {
        type: 'postgres',
        synchronize: true, // turn this off for production
        logging: false,
        database: process.env.DATABASE!,
        host: process.env.DB_HOST!,
        port: 5432,
        username: process.env.DB_USERNAME!,
        password: process.env.DB_PASSWORD!,
        migrations: [path.join(__dirname, '../migrations/*.ts')],
    },
    paymentOptions: {
        paymentMethodHandlers: [
		 EsewaMerchantPaymentHandler,
		 //EsewaPersonalPaymentHandler,
		 KhaltiMerchantPaymentHandler,
		 //KhaltiPersonalPaymentHandler,
		 ConnectIPSPaymentHandler,
		 BankDepositPaymentHandler,
		 CashPaymentHandler
		],
    },
    customFields: {
		
		Product:[
		 {
		   name: 'visitnumber',
		   type:'int',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Visit Number',
		   }],
           defaultValue:0		   
		  }, 
		],
		
		Collection: [
		  {
			name: 'topcategory',
			type:'boolean',
			label: [{
			  languageCode: LanguageCode.en,
			  value: 'Show in Top Categories?',
		   }],	
		   defaultValue:false
		  }
		],
		ProductVariant: [
		 
		 {
		   name: 'minorder',
		   type:'int',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Minimum Order Allowed',
		   }],	
		   defaultValue:1 
		  },
		  
		  {
		   name: 'maxorder',
		   type:'int',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Maximum Order Allowed',
		   }],
		  },
		  
		  
		  {
		   name: 'globaldiscountinherit',
			type:'boolean',
			label: [{
			  languageCode: LanguageCode.en,
			  value: 'Inherit Global Discount Value?',
		   }],	
		   defaultValue:true
		  },
		  
		  {
		   name: 'discounttype',
		   type: 'string',
		   defaultValue: 'Amount',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Type of Discount',
		   }]
		  },
		  
		  {
		   name: 'discountvalue',
		   type:'float',
		   defaultValue: 0.00,   //this is is rupees for amount. Convert to paisa on backend conversion
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Discount Value',
		   }],
		  },
		  
		  {
		   name: 'discounttag',
		   type: 'string',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Discount Offer Name',
		   }]
		  },
		  
		  
		],
		
		GlobalSettings:[
		  
		  {
		   name: 'globaldiscounttype',
		   type: 'string',
		   defaultValue: 'Amount',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Global Discount Type',
		   }]
		  },
		  
		  {
		   name: 'globaldiscountvalue',
		   type:'float',
		   defaultValue: 0.00,   //this is is rupees for amount. Convert to paisa on backend conversion
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Global Discount Value',
		   }],
		  },
		  
		  {
		   name: 'globaldiscounttag',
		   type: 'string',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Global Discount Offer Name',
		   }]
		  },
		  
		  
		  {
		   name: 'undermaintenance',
		   type:'boolean',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Under Maintenance?',
		   }],	
		   defaultValue:false 
		  },
		  
		 {
		   name: 'ecommercename',
		   type: 'string',
		   defaultValue: 'Danfe Brand House',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Ecommerce Name',
		   }]
		  },
		  
		  {
		   name: 'ecommercedescription',
		   type: 'string',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Ecommerce Description',
		   }]
		  },	  
		  
		  {
		   name: 'companyname',
		   type: 'string',
		   defaultValue: 'Innovatex Multipurpose Pvt. Ltd.',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Holding Company name',
		   }]
		  },
		  
		  {
		   name: 'panvatnumber',
		   type: 'int',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'PAN/VAT Number',
		   }]
		  },
		  
		  {
		   name: 'regnumber',
		   type: 'int',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Registration Number',
		   }]
		  },	
		  
		  {
		   name: 'contactaddress',
		   type: 'string',
		   list: true,
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Address/Addresses',
		   }]
		  },
		  
		  {
		   name: 'contactnumber',
		   type: 'string',
		   list: true,
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Contact Number(s)',
		   }]
		  },
		  
		  {
		   name: 'companyemail',
		   type: 'int',
		   list: true,
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Contact Email(s)',
		   }]
		  },
		  
		  {
		   name: 'contactperson',
		   type: 'int',
		   list: true,
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Contact Person(s) [Separate name, post and number by -. Ex: A-CEO-99]',
		   }]
		  },	  
		  
		
		],
		
		Address: [
		 { 
		   name: 'district', 
		   type: 'string',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'District',
		   }],	 
		 },
		 { 
		   name: 'area', 
		   type: 'string',
           label: [{
			  languageCode: LanguageCode.en,
			  value: 'Area',
		   }],			   
		 },
		 { 
		   name: 'addressNotes',
		   type: 'string',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Address Notes',
		   }],
		 }
		],
		
		ShippingMethod: [
		  {
		   name: 'additionalNotes',
		   type: 'string',
		   label: [{
			  languageCode: LanguageCode.en,
			  value: 'Additional Notes',
		   }]
		  }
		],
	},
    plugins: [
        AssetServerPlugin.init({
            route: 'assets',
            assetUploadDir: path.join(__dirname, '../static/assets'),
            port: 3001,
			/*assetUrlPrefix: 'https://admin.danfe.store/assets/',
			namingStrategy: new DefaultAssetNamingStrategy(),
			storageStrategyFactory: configureS3AssetStorage({
				bucket: process.env.BUCKET_NAME!,
				credentials: {
					accessKeyId: process.env.ACCESS_KEY_ID!,
					secretAccessKey: process.env.SECRET_ACCESS_KEY!,
					},
					nativeS3Configuration: {}
			}),*/
        }),
        DefaultJobQueuePlugin,
		ProxyPlugin,
        DefaultSearchPlugin,
		ConnectIPSPlugin,
		KhaltiCredentialsPlugin,
		EsewaCredentialsPlugin,
		BankDepositPlugin,
		SubscriptionPlugin,
		VendorPlugin,
		FeedbackPlugin,
		ChannelsPlugin,
		AssetsPlugin,
		NepalPlugin,
		DiscountsPlugin,
		GlobalSettingsPlugin,
		DiscountsOrderPlugin,
		ProductUpdatePlugin,
		ProductVariantDiscountPlugin,
		
		ProductExtensionPlugin,
		ProductVariantExtensionPlugin,
		//BraintreePlugin,
		ReviewsPlugin,
		FavoritesPlugin.init({
		    trackHistory: true
		}),
		SalesTrackerPlugin,
		
		ProductRecommendationsPlugin,
		EmailPlugin.init({
            devMode: true,
            outputPath: path.join(__dirname, '../static/email/test-emails'),
            mailboxPort: 3003,
            handlers: defaultEmailHandlers,
            templatePath: path.join(__dirname, '../static/email/templates'),
			
			
			/*handlers: defaultEmailHandlers,
			templatePath: path.join(__dirname, '../static/email/templates'),
			transport: {
				type: 'smtp',
				host: process.env.EMAIL_HOST!,
				port: 587,
				auth: {
					user: process.env.EMAIL_USER!,
					pass: process.env.EMAIL_PASS! ,
				}
             },
            
			globalTemplateVars: {
                fromAddress: process.env.FROM_EMAIL!,
                verifyEmailAddressUrl: process.env.STOREFRONT_URL!+'account/verify',
                passwordResetUrl: process.env.STOREFRONT_URL!+'account/reset-password',
                changeEmailAddressUrl: process.env.STOREFRONT_URL!+'account/change-email-address',
            }*/
			
        }),
        AdminUiPlugin.init({
			port: 3002,
			
			app:{
			  path: path.join(__dirname, 'danfe-admin-ui/dist')
			},
			
			/*adminUiConfig: {
				loginUrl: '/admin/login',
            },*/
          
		  /*app: compileUiExtensions({
			    outputPath: path.join(__dirname, 'danfe-admin-ui'),
				extensions: [
				    
					{	
				    extensionPath: path.join(__dirname,'widgets'),
					ngModules:[
					  {
                       type: 'shared',
                       ngModuleFileName: 'WidgetModule.ts',
	                   ngModuleName: 'WidgetModule',
                      },
					],
				   },
				   
				   {	
				    extensionPath: path.join(__dirname,'plugins/miscellanous'),
					ngModules:[
					  {
                       type: 'shared',
                       ngModuleFileName: 'product-variant-discount-field.ts',
	                   ngModuleName: 'ProductVariantDiscounttypeControlFieldModule',
                      },
					  {
                       type: 'shared',
                       ngModuleFileName: 'global-settings-discount-field.ts',
	                   ngModuleName: 'GlobalSettingsDiscounttypeControlFieldModule',
                      },
					  {
                       type: 'shared',
                       ngModuleFileName: 'ecommerce-description-field.ts',
	                   ngModuleName: 'EcommerceDescriptionControlFieldModule',
                      },
					 ],
				    },
					
					{
                      globalStyles: path.join(__dirname, 'styles/danfe-theme.scss')
                    },		
					
					{	
				    extensionPath: path.join(__dirname,'plugins/miscellanous'),
					ngModules:[
					  {
                       type: 'shared',
                       ngModuleFileName: 'navbar-hiding-module.ts',
	                   ngModuleName: 'NavBarHidingModule',
                      },
					 ],
				    },
					{
					  translations: {
						en: path.join(__dirname, 'translations/en.json'),
                     }
                    },
					
					FavoritesPlugin.uiExtensions,
					SubscriptionPlugin.uiExtensions,
					VendorPlugin.uiExtensions,
					FeedbackPlugin.uiExtensions,
					ReviewsPlugin.uiExtensions,
					{
					  extensionPath: path.join(__dirname,"./finalized-plugins/vendure-product-recommendations/lib/ui-extensions/modules"),
			          ngModules: [ProductRecommendationsInputModule],
		            },
					
					setBranding({
                      // The small logo appears in the top left of the screen  
			          smallLogoPath: path.join(__dirname, 'images/name.png'),
                      // The large logo is used on the login page  
                      largeLogoPath: path.join(__dirname, 'images/danfe-new.png'),
                      faviconPath: path.join(__dirname, 'images/favicon.ico'),
                     }),
				
				]
		
		}),
		
		adminUiConfig:{
           brand: 'Danfe | Admin Panel',
           hideVendureBranding: true,
           hideVersion: true,
		   defaultLanguage: LanguageCode.en,
		   availableLanguages: [LanguageCode.en],
        }*/
		
			
       })    
	], 
 
};
