import { VendurePlugin, createProxyHandler } from '@vendure/core';

@VendurePlugin({
  configuration: (config) => {
      
	  config.apiOptions.middleware.push({
          handler: createProxyHandler({
              label: 'Danfe Admin UI',
              route: 'admin/login',
              port: 8080,
			  hostname: 'localhost'
          }),
          route: 'admin/login',
      });
	  
      return config;
  }
})
export class ProxyPlugin {}