import { NgModule } from '@angular/core';
import { SharedModule, addNavMenuItem } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addNavMenuItem(
        {
          id: 'channels',
          label: 'Channels',
          routerLink: ['/admin/settings/channels'],
          icon: 'layers',
          requiresPermission: 'SuperAdmin',
        },
        'settings',
     ),
	 addNavMenuItem(
        {
          id: 'job-queue',
          label: 'Job queue',
          routerLink: ['/admin/system/jobs'],
          icon: 'tick-chart',
          requiresPermission: 'SuperAdmin',
        },
        'system',
     ),
  ]
})
export class NavBarHidingModule {}