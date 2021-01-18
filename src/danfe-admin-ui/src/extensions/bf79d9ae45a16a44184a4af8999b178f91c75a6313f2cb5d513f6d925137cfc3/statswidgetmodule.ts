import { Component, NgModule, OnInit } from '@angular/core';
import { DataService, SharedModule } from '@vendure/admin-ui/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'stats-widget',
  template: `
    5 Users
  `,
})
export class StatsWidgetComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {
    
  }

}

@NgModule({
    imports: [SharedModule],
    declarations: [StatsWidgetComponent],
})

export class StatsWidgetModule {}