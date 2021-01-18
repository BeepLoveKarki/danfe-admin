import { Component, NgModule, OnInit } from '@angular/core';
import { DataService, SharedModule } from '@vendure/admin-ui/core';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Component({
  selector: 'stats-widget',
  template: `
    5 Sellers
	{{ admincount }} Administrators
	100 Customers
	500 Orders
  `,
})
export class StatsWidgetComponent implements OnInit {

  getAdministratorsCount$: Observable<GetAllAdministrators.TotalItems>;
  admincount: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
	
	this.admincount = 100;
	
	this.getAdministratorsCount$ = this.dataService.query(gql`
	 query GetAllAdministrators($options: AdministratorListOptions) {
        administrators(options: $options) {
          totalItems
        }
      }
	  `,{
		 options: {
		 }
	  }).mapStream(data=>data.administrators.totalItems);
     
	 console.log(this.getAdministratorsCount$); 
  
  }

}

@NgModule({
    imports: [SharedModule],
    declarations: [StatsWidgetComponent],
})

export class StatsWidgetModule {}