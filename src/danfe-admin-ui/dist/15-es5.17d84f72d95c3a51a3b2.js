!function(){function t(e,n,o){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(e,n,o||e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Spgw:function(n,i,a){"use strict";a.r(i),a.d(i,"MarketingModule",(function(){return Z})),a.d(i,"PromotionDetailComponent",(function(){return B})),a.d(i,"PromotionListComponent",(function(){return E})),a.d(i,"PromotionResolver",(function(){return x})),a.d(i,"marketingRoutes",(function(){return _})),a.d(i,"promotionBreadcrumb",(function(){return K})),a.d(i,"\u02750",(function(){return Y})),a.d(i,"\u02751",(function(){return M}));var u=a("EM62"),l=a("nIj0"),m=a("sEIs"),f=a("OxKu"),p=a("ixhn"),b=a("J+dc"),v=a("cJ9h"),h=a("TLy2"),y=a("6Oco"),g=a("2kYt"),P=a("Kej3"),k=a("s2Ay"),O=function(){return["enabled"]};function C(t,e){if(1&t&&(u.ic(0,"clr-toggle-wrapper"),u.dc(1,"input",23),u.ic(2,"label"),u.Xc(3),u.sc(4,"translate"),u.hc(),u.hc()),2&t){var n=u.rc();u.Rb(1),u.yc("formControl",n.detailForm.get(u.Cc(4,O))),u.Rb(2),u.Yc(u.tc(4,2,"common.enabled"))}}function A(t,e){if(1&t){var n=u.jc();u.ic(0,"button",24),u.pc("click",(function(){return u.Mc(n),u.rc().create()})),u.Xc(1),u.sc(2,"translate"),u.hc()}if(2&t){var o=u.rc();u.yc("disabled",!o.saveButtonEnabled()),u.Rb(1),u.Zc(" ",u.tc(2,2,"common.create")," ")}}function R(t,e){if(1&t){var n=u.jc();u.ic(0,"button",24),u.pc("click",(function(){return u.Mc(n),u.rc(2).save()})),u.Xc(1),u.sc(2,"translate"),u.hc()}if(2&t){var o=u.rc(2);u.yc("disabled",!o.saveButtonEnabled()),u.Rb(1),u.Zc(" ",u.tc(2,2,"common.update")," ")}}function w(t,e){1&t&&u.Vc(0,R,3,4,"button",25),2&t&&u.yc("vdrIfPermissions","UpdatePromotion")}function j(t,e){if(1&t){var n=u.jc();u.gc(0),u.ic(1,"vdr-configurable-input",26),u.pc("remove",(function(t){return u.Mc(n),u.rc().removeCondition(t)})),u.sc(2,"hasPermission"),u.hc(),u.fc()}if(2&t){var o=e.$implicit,r=e.index,i=u.rc();u.Rb(1),u.yc("readonly",!u.tc(2,4,"UpdatePromotion"))("operation",o)("operationDefinition",i.getConditionDefinition(o))("formControlName",r)}}function D(t,e){if(1&t){var n=u.jc();u.ic(0,"button",31),u.pc("click",(function(){u.Mc(n);var t=e.$implicit;return u.rc(2).addCondition(t)})),u.Xc(1),u.hc()}if(2&t){var o=e.$implicit;u.Rb(1),u.Zc(" ",o.description," ")}}function I(t,e){if(1&t&&(u.ic(0,"vdr-dropdown"),u.ic(1,"button",27),u.dc(2,"clr-icon",28),u.Xc(3),u.sc(4,"translate"),u.hc(),u.ic(5,"vdr-dropdown-menu",29),u.Vc(6,D,2,1,"button",30),u.hc(),u.hc()),2&t){var n=u.rc();u.Rb(3),u.Zc(" ",u.tc(4,2,"marketing.add-condition")," "),u.Rb(3),u.yc("ngForOf",n.getAvailableConditions())}}function F(t,e){if(1&t){var n=u.jc();u.ic(0,"vdr-configurable-input",32),u.pc("remove",(function(t){return u.Mc(n),u.rc().removeAction(t)})),u.sc(1,"hasPermission"),u.hc()}if(2&t){var o=e.$implicit,r=e.index,i=u.rc();u.yc("operation",o)("readonly",!u.tc(1,4,"UpdatePromotion"))("operationDefinition",i.getActionDefinition(o))("formControlName",r)}}function S(t,e){if(1&t){var n=u.jc();u.ic(0,"button",31),u.pc("click",(function(){u.Mc(n);var t=e.$implicit;return u.rc(2).addAction(t)})),u.Xc(1),u.hc()}if(2&t){var o=e.$implicit;u.Rb(1),u.Zc(" ",o.description," ")}}function V(t,e){if(1&t&&(u.ic(0,"vdr-dropdown"),u.ic(1,"button",27),u.dc(2,"clr-icon",28),u.Xc(3),u.sc(4,"translate"),u.hc(),u.ic(5,"vdr-dropdown-menu",29),u.Vc(6,S,2,1,"button",30),u.hc(),u.hc()),2&t){var n=u.rc();u.Rb(3),u.Zc(" ",u.tc(4,2,"marketing.add-action")," "),u.Rb(3),u.yc("ngForOf",n.getAvailableActions())}}var X=function(){return["./create"]};function U(t,e){1&t&&(u.ic(0,"a",3),u.dc(1,"clr-icon",4),u.Xc(2),u.sc(3,"translate"),u.hc()),2&t&&(u.yc("routerLink",u.Cc(4,X)),u.Rb(2),u.Zc(" ",u.tc(3,2,"marketing.create-new-promotion")," "))}function N(t,e){if(1&t&&(u.ic(0,"vdr-chip"),u.Xc(1),u.hc()),2&t){var n=u.rc().item;u.Rb(1),u.Zc(" ",n.couponCode," ")}}function L(t,e){1&t&&(u.ic(0,"vdr-chip"),u.Xc(1),u.sc(2,"translate"),u.hc()),2&t&&(u.Rb(1),u.Yc(u.tc(2,1,"common.disabled")))}var T=function(t){return["./",t]};function $(t,e){if(1&t){var n=u.jc();u.ic(0,"td",5),u.Xc(1),u.hc(),u.ic(2,"td",5),u.Vc(3,N,2,1,"vdr-chip",6),u.hc(),u.ic(4,"td",5),u.Xc(5),u.sc(6,"date"),u.hc(),u.ic(7,"td",5),u.Xc(8),u.sc(9,"date"),u.hc(),u.ic(10,"td",7),u.Vc(11,L,3,3,"vdr-chip",6),u.hc(),u.ic(12,"td",8),u.dc(13,"vdr-table-row-action",9),u.sc(14,"translate"),u.hc(),u.ic(15,"td",8),u.ic(16,"vdr-dropdown"),u.ic(17,"button",10),u.Xc(18),u.sc(19,"translate"),u.dc(20,"clr-icon",11),u.hc(),u.ic(21,"vdr-dropdown-menu",12),u.ic(22,"button",13),u.pc("click",(function(){u.Mc(n);var t=e.item;return u.rc().deletePromotion(t.id)})),u.sc(23,"hasPermission"),u.dc(24,"clr-icon",14),u.Xc(25),u.sc(26,"translate"),u.hc(),u.hc(),u.hc(),u.hc()}if(2&t){var o=e.item;u.Rb(1),u.Yc(o.name),u.Rb(2),u.yc("ngIf",o.couponCode),u.Rb(2),u.Yc(u.uc(6,10,o.startsAt,"longDate")),u.Rb(3),u.Yc(u.uc(9,13,o.endsAt,"longDate")),u.Rb(3),u.yc("ngIf",!o.enabled),u.Rb(2),u.yc("label",u.tc(14,16,"common.edit"))("linkTo",u.Dc(24,T,o.id)),u.Rb(5),u.Zc(" ",u.tc(19,18,"common.actions")," "),u.Rb(4),u.yc("disabled",!u.tc(23,20,"DeletePromotion")),u.Rb(3),u.Zc(" ",u.tc(26,22,"common.delete")," ")}}var B=function(t){r(i,t);var n=c(i);function i(t,o,r,c,a,s,d){var u;return e(this,i),(u=n.call(this,o,t,r,a)).changeDetector=c,u.dataService=a,u.formBuilder=s,u.notificationService=d,u.conditions=[],u.actions=[],u.allConditions=[],u.allActions=[],u.detailForm=u.formBuilder.group({name:["",l.C.required],enabled:!0,couponCode:null,perCustomerUsageLimit:null,startsAt:null,endsAt:null,conditions:u.formBuilder.array([]),actions:u.formBuilder.array([])}),u}return o(i,[{key:"ngOnInit",value:function(){var t=this;this.init(),this.promotion$=this.entity$,this.dataService.promotion.getPromotionActionsAndConditions().single$.subscribe((function(e){t.allActions=e.promotionActions,t.allConditions=e.promotionConditions,t.changeDetector.markForCheck()}))}},{key:"ngOnDestroy",value:function(){this.destroy()}},{key:"getAvailableConditions",value:function(){var t=this;return this.allConditions.filter((function(e){return!t.conditions.find((function(t){return t.code===e.code}))}))}},{key:"getConditionDefinition",value:function(t){return this.allConditions.find((function(e){return e.code===t.code}))}},{key:"getAvailableActions",value:function(){var t=this;return this.allActions.filter((function(e){return!t.actions.find((function(t){return t.code===e.code}))}))}},{key:"getActionDefinition",value:function(t){return this.allActions.find((function(e){return e.code===t.code}))}},{key:"saveButtonEnabled",value:function(){return this.detailForm.dirty&&this.detailForm.valid&&(0!==this.conditions.length||this.detailForm.value.couponCode)&&0!==this.actions.length}},{key:"addCondition",value:function(t){this.addOperation("conditions",t),this.detailForm.markAsDirty()}},{key:"addAction",value:function(t){this.addOperation("actions",t),this.detailForm.markAsDirty()}},{key:"removeCondition",value:function(t){this.removeOperation("conditions",t),this.detailForm.markAsDirty()}},{key:"removeAction",value:function(t){this.removeOperation("actions",t),this.detailForm.markAsDirty()}},{key:"formArrayOf",value:function(t){return this.detailForm.get(t)}},{key:"create",value:function(){var t=this;if(this.detailForm.dirty){var e=this.detailForm.value,n={name:e.name,enabled:!0,couponCode:e.couponCode,perCustomerUsageLimit:e.perCustomerUsageLimit,startsAt:e.startsAt,endsAt:e.endsAt,conditions:this.mapOperationsToInputs(this.conditions,e.conditions),actions:this.mapOperationsToInputs(this.actions,e.actions)};this.dataService.promotion.createPromotion(n).subscribe((function(e){var n=e.createPromotion;switch(n.__typename){case"Promotion":t.notificationService.success(Object(f.a)("common.notify-create-success"),{entity:"Promotion"}),t.detailForm.markAsPristine(),t.changeDetector.markForCheck(),t.router.navigate(["../",n.id],{relativeTo:t.route});break;case"MissingConditionsError":t.notificationService.error(n.message)}}),(function(e){t.notificationService.error(Object(f.a)("common.notify-create-error"),{entity:"Promotion"})}))}}},{key:"save",value:function(){var t=this;if(this.detailForm.dirty){var e=this.detailForm.value;this.promotion$.pipe(Object(b.a)(1),Object(v.a)((function(n){var o={id:n.id,name:e.name,enabled:e.enabled,couponCode:e.couponCode,perCustomerUsageLimit:e.perCustomerUsageLimit,startsAt:e.startsAt,endsAt:e.endsAt,conditions:t.mapOperationsToInputs(t.conditions,e.conditions),actions:t.mapOperationsToInputs(t.actions,e.actions)};return t.dataService.promotion.updatePromotion(o)}))).subscribe((function(e){t.notificationService.success(Object(f.a)("common.notify-update-success"),{entity:"Promotion"}),t.detailForm.markAsPristine(),t.changeDetector.markForCheck()}),(function(e){t.notificationService.error(Object(f.a)("common.notify-update-error"),{entity:"Promotion"})}))}}},{key:"setFormValues",value:function(t,e){var n=this;this.detailForm.patchValue({name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt}),t.conditions.forEach((function(t){n.addOperation("conditions",t)})),t.actions.forEach((function(t){return n.addOperation("actions",t)}))}},{key:"mapOperationsToInputs",value:function(t,e){return t.map((function(t,n){return{code:t.code,arguments:Object.values(e[n].args).map((function(e,n){return{name:t.args[n].name,value:Object(p.Yb)(e)}}))}}))}},{key:"addOperation",value:function(t,e){var n=this,o=this.formArrayOf(t),r="conditions"===t?this.conditions:this.actions;if(-1===o.value.findIndex((function(t){return t.code===e.code}))){var i=e.args.reduce((function(o,r){var i;return Object.assign(Object.assign({},o),function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},r.name,null!==(i=Object(p.ac)(r.value))&&void 0!==i?i:n.getDefaultArgValue(t,e,r.name)))}),{});o.push(this.formBuilder.control({code:e.code,args:i})),r.push({code:e.code,args:e.args.map((function(t){return{name:t.name,value:Object(p.ac)(t.value)}}))})}}},{key:"getDefaultArgValue",value:function(t,e,n){var o="conditions"===t?this.allConditions.find((function(t){return t.code===e.code})):this.allActions.find((function(t){return t.code===e.code}));if(o){var r=o.args.find((function(t){return t.name===n}));if(r)return Object(p.bc)(r)}throw new Error('Could not determine default value for "argName"')}},{key:"removeOperation",value:function(t,e){var n=this.formArrayOf(t),o="conditions"===t?this.conditions:this.actions,r=n.value.findIndex((function(t){return t.code===e.code}));-1!==r&&(n.removeAt(r),o.splice(r,1))}}]),i}(p.u);B.\u0275fac=function(t){return new(t||B)(u.cc(m.e),u.cc(m.a),u.cc(p.Jb),u.cc(u.k),u.cc(p.K),u.cc(l.e),u.cc(p.Bb))},B.\u0275cmp=u.Wb({type:B,selectors:[["vdr-promotion-detail"]],features:[u.Ob],decls:46,vars:43,consts:[[1,"flex","clr-align-items-center"],[3,"entity"],[4,"vdrIfPermissions"],["locationId","promotion-detail"],["class","btn btn-primary",3,"disabled","click",4,"ngIf","ngIfElse"],["updateButton",""],[1,"form",3,"formGroup"],["for","name",3,"label"],["id","name","type","text","formControlName","name",3,"readonly"],["for","startsAt",3,"label"],["formControlName","startsAt"],["for","endsAt",3,"label"],["formControlName","endsAt"],["for","couponCode",3,"label"],["id","couponCode","type","text","formControlName","couponCode",3,"readonly"],["for","perCustomerUsageLimit",3,"label"],["id","perCustomerUsageLimit","type","number","min","1","max","999","formControlName","perCustomerUsageLimit",3,"readonly"],[1,"clr-row"],["formArrayName","conditions",1,"clr-col"],[1,"clr-control-label"],[4,"ngFor","ngForOf"],["formArrayName","actions",1,"clr-col"],[3,"operation","readonly","operationDefinition","formControlName","remove",4,"ngFor","ngForOf"],["type","checkbox","clrToggle","","name","enabled",3,"formControl"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-primary",3,"disabled","click",4,"vdrIfPermissions"],[3,"readonly","operation","operationDefinition","formControlName","remove"],["vdrDropdownTrigger","",1,"btn","btn-outline"],["shape","plus"],["vdrPosition","bottom-left"],["type","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button","vdrDropdownItem","",3,"click"],[3,"operation","readonly","operationDefinition","formControlName","remove"]],template:function(t,e){if(1&t&&(u.ic(0,"vdr-action-bar"),u.ic(1,"vdr-ab-left"),u.ic(2,"div",0),u.dc(3,"vdr-entity-info",1),u.sc(4,"async"),u.Vc(5,C,5,5,"clr-toggle-wrapper",2),u.hc(),u.hc(),u.ic(6,"vdr-ab-right"),u.dc(7,"vdr-action-bar-items",3),u.Vc(8,A,3,4,"button",4),u.sc(9,"async"),u.Vc(10,w,1,1,"ng-template",null,5,u.Wc),u.hc(),u.hc(),u.ic(12,"form",6),u.ic(13,"vdr-form-field",7),u.sc(14,"translate"),u.dc(15,"input",8),u.sc(16,"hasPermission"),u.hc(),u.ic(17,"vdr-form-field",9),u.sc(18,"translate"),u.dc(19,"vdr-datetime-picker",10),u.hc(),u.ic(20,"vdr-form-field",11),u.sc(21,"translate"),u.dc(22,"vdr-datetime-picker",12),u.hc(),u.ic(23,"vdr-form-field",13),u.sc(24,"translate"),u.dc(25,"input",14),u.sc(26,"hasPermission"),u.hc(),u.ic(27,"vdr-form-field",15),u.sc(28,"translate"),u.dc(29,"input",16),u.sc(30,"hasPermission"),u.hc(),u.ic(31,"div",17),u.ic(32,"div",18),u.ic(33,"label",19),u.Xc(34),u.sc(35,"translate"),u.hc(),u.Vc(36,j,3,6,"ng-container",20),u.ic(37,"div"),u.Vc(38,I,7,4,"vdr-dropdown",2),u.hc(),u.hc(),u.ic(39,"div",21),u.ic(40,"label",19),u.Xc(41),u.sc(42,"translate"),u.hc(),u.Vc(43,F,2,6,"vdr-configurable-input",22),u.ic(44,"div"),u.Vc(45,V,7,4,"vdr-dropdown",2),u.hc(),u.hc(),u.hc(),u.hc()),2&t){var n=u.Jc(11);u.Rb(3),u.yc("entity",u.tc(4,19,e.entity$)),u.Rb(2),u.yc("vdrIfPermissions","UpdatePromotion"),u.Rb(3),u.yc("ngIf",u.tc(9,21,e.isNew$))("ngIfElse",n),u.Rb(4),u.yc("formGroup",e.detailForm),u.Rb(1),u.yc("label",u.tc(14,23,"common.name")),u.Rb(2),u.yc("readonly",!u.tc(16,25,"UpdatePromotion")),u.Rb(2),u.yc("label",u.tc(18,27,"marketing.starts-at")),u.Rb(3),u.yc("label",u.tc(21,29,"marketing.ends-at")),u.Rb(3),u.yc("label",u.tc(24,31,"marketing.coupon-code")),u.Rb(2),u.yc("readonly",!u.tc(26,33,"UpdatePromotion")),u.Rb(2),u.yc("label",u.tc(28,35,"marketing.per-customer-limit")),u.Rb(2),u.yc("readonly",!u.tc(30,37,"UpdatePromotion")),u.Rb(5),u.Yc(u.tc(35,39,"marketing.conditions")),u.Rb(2),u.yc("ngForOf",e.conditions),u.Rb(2),u.yc("vdrIfPermissions","UpdatePromotion"),u.Rb(3),u.Yc(u.tc(42,41,"marketing.actions")),u.Rb(2),u.yc("ngForOf",e.actions),u.Rb(2),u.yc("vdrIfPermissions","UpdatePromotion")}},directives:[p.c,p.e,p.ab,p.rb,p.f,p.d,g.p,l.E,l.q,l.j,p.db,p.eb,l.b,l.p,l.h,p.N,l.v,l.d,P.u,g.o,P.k,l.a,P.i,l.g,p.C,p.S,p.V,P.o,p.U,p.T],pipes:[g.b,k.d,p.ib],styles:[""],changeDetection:0}),B.ctorParameters=function(){return[{type:m.e},{type:m.a},{type:p.Jb},{type:u.k},{type:p.K},{type:l.e},{type:p.Bb}]};var E=function(n){r(a,n);var i=c(a);function a(n,o,r,c,u){var l,m;return e(this,a),(m=i.call(this,o,r)).dataService=n,m.notificationService=c,m.modalService=u,t((l=s(m),d(a.prototype)),"setQueryFn",l).call(l,(function(){var t;return(t=m.dataService.promotion).getPromotions.apply(t,arguments)}),(function(t){return t.promotions})),m}return o(a,[{key:"deletePromotion",value:function(t){var e=this;this.modalService.dialog({title:Object(f.a)("catalog.confirm-delete-promotion"),buttons:[{type:"secondary",label:Object(f.a)("common.cancel")},{type:"danger",label:Object(f.a)("common.delete"),returnValue:!0}]}).pipe(Object(h.a)((function(n){return n?e.dataService.promotion.deletePromotion(t):y.a}))).subscribe((function(){e.notificationService.success(Object(f.a)("common.notify-delete-success"),{entity:"Promotion"}),e.refresh()}),(function(t){e.notificationService.error(Object(f.a)("common.notify-delete-error"),{entity:"Promotion"})}))}}]),a}(p.w);E.\u0275fac=function(t){return new(t||E)(u.cc(p.K),u.cc(m.e),u.cc(m.a),u.cc(p.Bb),u.cc(p.Ab))},E.\u0275cmp=u.Wb({type:E,selectors:[["vdr-promotion-list"]],features:[u.Ob],decls:25,vars:25,consts:[["locationId","promotion-list"],["class","btn btn-primary",3,"routerLink",4,"vdrIfPermissions"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],[1,"btn","btn-primary",3,"routerLink"],["shape","plus"],[1,"left","align-middle"],[4,"ngIf"],[1,"align-middle"],[1,"right","align-middle"],["iconShape","edit",3,"label","linkTo"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"disabled","click"],["shape","trash",1,"is-danger"]],template:function(t,e){1&t&&(u.ic(0,"vdr-action-bar"),u.ic(1,"vdr-ab-right"),u.dc(2,"vdr-action-bar-items",0),u.Vc(3,U,4,5,"a",1),u.hc(),u.hc(),u.ic(4,"vdr-data-table",2),u.pc("pageChange",(function(t){return e.setPageNumber(t)}))("itemsPerPageChange",(function(t){return e.setItemsPerPage(t)})),u.sc(5,"async"),u.sc(6,"async"),u.sc(7,"async"),u.sc(8,"async"),u.ic(9,"vdr-dt-column"),u.Xc(10),u.sc(11,"translate"),u.hc(),u.ic(12,"vdr-dt-column"),u.Xc(13),u.sc(14,"translate"),u.hc(),u.ic(15,"vdr-dt-column"),u.Xc(16),u.sc(17,"translate"),u.hc(),u.ic(18,"vdr-dt-column"),u.Xc(19),u.sc(20,"translate"),u.hc(),u.dc(21,"vdr-dt-column"),u.dc(22,"vdr-dt-column"),u.dc(23,"vdr-dt-column"),u.Vc(24,$,27,26,"ng-template"),u.hc()),2&t&&(u.Rb(3),u.yc("vdrIfPermissions","CreatePromotion"),u.Rb(1),u.yc("items",u.tc(5,9,e.items$))("itemsPerPage",u.tc(6,11,e.itemsPerPage$))("totalItems",u.tc(7,13,e.totalItems$))("currentPage",u.tc(8,15,e.currentPage$)),u.Rb(6),u.Yc(u.tc(11,17,"common.name")),u.Rb(3),u.Yc(u.tc(14,19,"marketing.coupon-code")),u.Rb(3),u.Yc(u.tc(17,21,"marketing.starts-at")),u.Rb(3),u.Yc(u.tc(20,23,"marketing.ends-at")))},directives:[p.c,p.f,p.d,p.rb,p.M,p.L,m.h,P.o,g.p,p.Pb,p.S,p.V,p.U,p.T,p.B],pipes:[g.b,k.d,g.f,p.ib],styles:[""],changeDetection:0}),E.ctorParameters=function(){return[{type:p.K},{type:m.e},{type:m.a},{type:p.Bb},{type:p.Ab}]};var x=function(t){r(o,t);var n=c(o);function o(t,r){return e(this,o),n.call(this,t,{__typename:"Promotion",id:"",createdAt:"",updatedAt:"",name:"",enabled:!1,conditions:[],actions:[]},(function(t){return r.promotion.getPromotion(t).mapStream((function(t){return t.promotion}))}))}return o}(p.v);x.\u0275fac=function(t){return new(t||x)(u.mc(m.e),u.mc(p.K))},x.\u0275prov=Object(u.Yb)({factory:function(){return new x(Object(u.mc)(m.e),Object(u.mc)(p.K))},token:x,providedIn:"root"}),x.ctorParameters=function(){return[{type:m.e},{type:p.K}]};var Y={breadcrumb:Object(f.a)("breadcrumb.promotions")},M={breadcrumb:K},_=[{path:"promotions",component:E,data:Y},{path:"promotions/:id",component:B,resolve:Object(p.Vb)(x),canDeactivate:[p.x],data:M}];function K(t,e){return Object(p.Xb)({entity:t.entity,id:e.id,breadcrumbKey:"breadcrumb.promotions",getName:function(t){return t.name},route:"promotions"})}var Z=function t(){e(this,t)};Z.\u0275mod=u.ac({type:Z}),Z.\u0275inj=u.Zb({factory:function(t){return new(t||Z)},imports:[[p.Kb,m.i.forChild(_)]]})}}])}();