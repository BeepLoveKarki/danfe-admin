import { Component, NgModule, OnInit } from '@angular/core';
import { DataService, SharedModule } from '@vendure/admin-ui/core';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Component({
  selector: 'stats-widget',
  template: ` 
	<h1> {{ getSellersCount$ | async }} </h1> <br/> SELLERS
	<h1> {{ getAdministratorsCount$ | async }} </h1> <br/> ADMINISTRATORS
	<h1> {{ getCustomersCount$ | async }} </h1> <br/> CUSTOMERS
	<h1> {{ getOrdersCount$ | async }} </h1> <br/> ORDERS 
  `,
})
export class StatsWidgetComponent implements OnInit {

  getSellersCount$: Observable<any>;
  getAdministratorsCount$: Observable<any>;
  getCustomersCount$: Observable<any>;
  getOrdersCount$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
	  this.sellerscount();
	  this.admincount();
	  this.customercount();
	  this.ordercount();
  }
  
  sellerscount(){ //count channels
     this.getSellersCount$ = this.dataService.query(gql`
	 query GetAllChannels{
        channels{
          id
        }
      }
	  `
	  ).mapStream((data:any)=>data.channels.length-1); //1 is default channel so
  }
  
  admincount(){
    this.getAdministratorsCount$ = this.dataService.query(gql`
	 query GetAllAdministrators($options: AdministratorListOptions) {
        administrators(options: $options) {
          totalItems
        }
      }
	  `,{
		 options: {
		 }
	  }).mapStream((data:any)=>data.administrators.totalItems);
  }
  
  customercount(){
    this.getCustomersCount$ = this.dataService.query(gql`
	 query GetAllCustomers($options: CustomerListOptions) {
        customers(options: $options) {
          totalItems
        }
      }
	  `,{
		 options: {
		 }
	  }).mapStream((data:any)=>data.customers.totalItems);
  }
  
  ordercount(){
     
	 this.getOrdersCount$ = this.dataService.query(gql`
	 query GetAllOrders($options: OrderListOptions) {
        orders(options: $options) {
          totalItems
        }
      }
	  `,{
		 options: {
		 }
	  }).mapStream((data:any)=>data.orders.totalItems);
  }


}

@NgModule({
    imports: [SharedModule],
    declarations: [StatsWidgetComponent],
})

export class StatsWidgetModule {}