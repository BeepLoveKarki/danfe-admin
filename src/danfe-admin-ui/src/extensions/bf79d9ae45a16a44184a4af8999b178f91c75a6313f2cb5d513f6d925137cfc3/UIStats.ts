import { NgModule } from '@angular/core';
import { registerDashboardWidget } from '@vendure/admin-ui/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    registerDashboardWidget('stats', {
      title: 'Danfe Stats',
      supportedWidths: [4, 6, 8, 12],
      requiresPermissions: ["SuperAdmin"],
      loadComponent: () =>
        import('./statswidgetmodule').then(
          m => m.StatsWidgetComponent,
        ),
    }),
  ],
})
export class UIStatsModule {}