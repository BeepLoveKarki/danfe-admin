import { VendurePlugin, createProxyHandler } from '@vendure/core';

@VendurePlugin({
  configuration: (config) => {
      
	  config.apiOptions.middleware.push({
          handler: createProxyHandler({
              label: 'Danfe Admin UI',
              route: 'admin/login',
              port: 80,
			  hostname: 'd3j7ndklsm90do.cloudfront.net'
          }),
          route: 'admin/login',
      });
	  
	  /*config.apiOptions.middleware.push({
          handler: createProxyHandler({
              label: 'Admin UI',
              route: 'danfe-login',
              port: 8080,
			  hostname: 'localhost',
			  basePath: '/admin/login'
			  
          }),
          route: 'danfe-login',
      });*/
	  
      return config;
  }
})
export class ProxyPlugin {}