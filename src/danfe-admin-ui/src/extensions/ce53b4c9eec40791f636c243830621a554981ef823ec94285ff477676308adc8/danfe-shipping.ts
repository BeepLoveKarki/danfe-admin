import { NgModule } from '@angular/core';
import { SharedModule, addActionBarItem } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addActionBarItem({
       id: 'danfe-shipping',
       label: 'Add Danfe Shipping',
       locationId: 'shipping-method-list',
       buttonStyle: 'outline',
       //routerLink: ['/'],
	   onClick: (event,context)=>{
	     console.log(context.dataService.shippingMethod);
	   },
       //requiresPermission: 'SuperAdmin'
    }),
  ],
})
export class DanfeShippingModule {}