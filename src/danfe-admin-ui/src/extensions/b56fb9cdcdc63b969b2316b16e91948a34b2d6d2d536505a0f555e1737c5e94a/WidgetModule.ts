import { NgModule } from '@angular/core';
import { registerDashboardWidget, setDashboardWidgetLayout } from '@vendure/admin-ui/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    registerDashboardWidget('stats', {
      title: 'Danfe Stats',
      supportedWidths: [12],
      requiresPermissions: ["SuperAdmin"],
      loadComponent: () =>
        import('./statswidget/statswidgetmodule.component').then(
          m => m.StatsWidgetComponent,
        ),
    }),
	setDashboardWidgetLayout([
	  { id: 'welcome', width: 12 },
	  { id: 'stats', width: 12 },
	  { id: 'orderSummary', width: 6 },
      { id: 'latestOrders', width: 6 },
	]),
  ],
})
export class WidgetModule {}