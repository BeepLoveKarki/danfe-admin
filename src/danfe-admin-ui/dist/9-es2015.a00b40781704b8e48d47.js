(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3+oc":function(t,s,e){"use strict";e.r(s),e.d(s,"StatsWidgetComponent",(function(){return a})),e.d(s,"StatsWidgetModule",(function(){return u}));var o=e("ixhn"),n=e("H5qd"),c=e.n(n),r=e("EM62"),i=e("2kYt");class a{constructor(t){this.dataService=t}ngOnInit(){this.sellerscount(),this.admincount(),this.customercount(),this.ordercount()}sellerscount(){this.getSellersCount$=this.dataService.query(c.a`
	 query GetAllChannels{
        channels{
          id
        }
      }
	  `).mapStream(t=>t.channels.length-1)}admincount(){this.getAdministratorsCount$=this.dataService.query(c.a`
	 query GetAllAdministrators($options: AdministratorListOptions) {
        administrators(options: $options) {
          totalItems
        }
      }
	  `,{options:{}}).mapStream(t=>t.administrators.totalItems)}customercount(){this.getCustomersCount$=this.dataService.query(c.a`
	 query GetAllCustomers($options: CustomerListOptions) {
        customers(options: $options) {
          totalItems
        }
      }
	  `,{options:{}}).mapStream(t=>t.customers.totalItems)}ordercount(){this.getOrdersCount$=this.dataService.query(c.a`
	 query GetAllOrders($options: OrderListOptions) {
        orders(options: $options) {
          totalItems
        }
      }
	  `,{options:{}}).mapStream(t=>t.orders.totalItems)}}a.\u0275fac=function(t){return new(t||a)(r.cc(o.L))},a.\u0275cmp=r.Wb({type:a,selectors:[["stats-widget"]],decls:20,vars:12,template:function(t,s){1&t&&(r.ic(0,"h1"),r.Xc(1),r.sc(2,"async"),r.hc(),r.dc(3,"br"),r.Xc(4," SELLERS "),r.ic(5,"h1"),r.Xc(6),r.sc(7,"async"),r.hc(),r.dc(8,"br"),r.Xc(9," ADMINISTRATORS "),r.ic(10,"h1"),r.Xc(11),r.sc(12,"async"),r.hc(),r.dc(13,"br"),r.Xc(14," CUSTOMERS "),r.ic(15,"h1"),r.Xc(16),r.sc(17,"async"),r.hc(),r.dc(18,"br"),r.Xc(19," ORDERS ")),2&t&&(r.Rb(1),r.Zc(" ",r.tc(2,4,s.getSellersCount$)," "),r.Rb(5),r.Zc(" ",r.tc(7,6,s.getAdministratorsCount$)," "),r.Rb(5),r.Zc(" ",r.tc(12,8,s.getCustomersCount$)," "),r.Rb(5),r.Zc(" ",r.tc(17,10,s.getOrdersCount$)," "))},pipes:[i.b],encapsulation:2});class u{}u.\u0275mod=r.ac({type:u}),u.\u0275inj=r.Zb({factory:function(t){return new(t||u)},imports:[[o.Nb]]})}}]);
//# sourceMappingURL=9-es2015.a00b40781704b8e48d47.js.map