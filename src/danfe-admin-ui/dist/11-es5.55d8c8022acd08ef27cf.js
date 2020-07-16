function _templateObject5(){var e=_taggedTemplateLiteral(["\n  query GetPhone($id: ID!) {\n    SubscriptionPhone(id: $id) {\n      ...SubscribedPhones\n    }\n  }\n  ","\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n    mutation CreatePhone($input: [PhoneAddInput!]!) {\n        addSubscriptionPhone(input: $input) {\n            ...SubscribedPhones\n        }\n    }\n    ","\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n    mutation UpdatePhone($input: [PhoneUpdateInput!]!) {\n        updateSubscriptionPhone(input: $input) {\n            ...SubscribedPhones\n        }\n    }\n    ","\n"]);return _templateObject3=function(){return e},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var c=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var c=Object.getOwnPropertyDescriptor(r,t);return c.get?c.get.call(n):c.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _templateObject2(){var e=_taggedTemplateLiteral(["\n   mutation DeletePhone($input:[ID!]!){\n      deleteSubscriptionPhone(id:$input){\n\t     ...SubscribedPhones \n\t  }\n   }\n   ","\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n    query GetAllPhones($options: PhoneListOptions){\n\t\tSubscriptionPhones(options: $options){\n\t\t\titems{\n\t\t\t...SubscribedPhones\n\t\t\t}\n\t\t\ttotalItems\n       }\n    }\n\t","\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"hr/e":function(e,t,n){"use strict";n.r(t);var r=n("sEIs"),c=n("ixhn"),i=n("nIj0"),o=n("OxKu"),a=n("FOa3"),s=n("6Oco"),u=n("mWib"),l=n("kuMc"),d=n("TLy2"),p=n("7RXT"),b=n("H5qd"),f=n.n(b),h=n("JReq"),m=f.a(_templateObject(),h.b),v=f.a(_templateObject2(),h.b),y=n("EM62"),g=n("DEd4"),P=n("Kej3"),_=n("s2Ay"),O=n("2kYt");function w(e,t){if(1&e){var n=y.nc();y.mc(0,"a",5),y.uc("click",(function(){return y.Rc(n),y.wc().downloadcsv()})),y.hc(1,"clr-icon",6),y.ad(2),y.xc(3,"translate"),y.lc()}2&e&&(y.Ub(2),y.cd(" ",y.yc(3,1,"vdr-subscription-plugin.download-csv")," "))}var k=function(){return["./create"]};function S(e,t){1&e&&(y.mc(0,"a",7),y.hc(1,"clr-icon",8),y.ad(2),y.xc(3,"translate"),y.lc()),2&e&&(y.Dc("routerLink",y.Hc(4,k)),y.Ub(2),y.cd(" ",y.yc(3,2,"vdr-subscription-plugin.create-new-phone")," "))}var j=function(e){return["/extensions","subscribedphones",e]};function C(e,t){if(1&e&&(y.mc(0,"td",11),y.hc(1,"vdr-table-row-action",12),y.xc(2,"translate"),y.lc()),2&e){var n=y.wc().item;y.Ub(1),y.Dc("label",y.yc(2,2,"common.edit"))("linkTo",y.Ic(4,j,n.id))}}function x(e,t){if(1&e){var n=y.nc();y.mc(0,"td",11),y.mc(1,"vdr-dropdown"),y.mc(2,"button",13),y.ad(3),y.xc(4,"translate"),y.hc(5,"clr-icon",14),y.lc(),y.mc(6,"vdr-dropdown-menu",15),y.mc(7,"button",16),y.uc("click",(function(){y.Rc(n);var e=y.wc().item;return y.wc().deletePhone(e.id)})),y.hc(8,"clr-icon",17),y.ad(9),y.xc(10,"translate"),y.lc(),y.lc(),y.lc(),y.lc()}2&e&&(y.Ub(3),y.cd(" ",y.yc(4,2,"common.actions")," "),y.Ub(6),y.cd(" ",y.yc(10,4,"common.delete")," "))}function D(e,t){if(1&e&&(y.mc(0,"td",9),y.ad(1),y.lc(),y.mc(2,"td",9),y.ad(3),y.xc(4,"date"),y.lc(),y.mc(5,"td",9),y.ad(6),y.xc(7,"date"),y.lc(),y.Yc(8,C,3,6,"td",10),y.Yc(9,x,11,6,"td",10)),2&e){var n=t.item;y.Ub(1),y.bd(n.phone),y.Ub(2),y.bd(y.zc(4,5,n.createdAt,"longDate")),y.Ub(3),y.bd(y.zc(7,8,n.updatedAt,"longDate")),y.Ub(2),y.Dc("vdrIfPermissions","UpdateSettings"),y.Ub(1),y.Dc("vdrIfPermissions","DeleteSettings")}}var I=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,c,o,s,u){var l,d;return _classCallCheck(this,n),(d=t.call(this,s,u)).dataService=e,d.modalService=r,d.notificationService=c,d.apollo=o,d.searchTerm=new i.f(""),_get((l=_assertThisInitialized(d),_getPrototypeOf(n.prototype)),"setQueryFn",l).call(l,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d.dataService.query(m,t)}),(function(e){return e.SubscriptionPhones}),(function(e,t){return{options:{skip:e,take:t,filter:{phone:{contains:d.getfilter()}},sort:{updatedAt:a.a.Desc}}}})),d}return _createClass(n,[{key:"getfilter",value:function(){return this.searchTerm.value?this.searchTerm.value.toString():""}},{key:"ngOnInit",value:function(){var e=this;_get(_getPrototypeOf(n.prototype),"ngOnInit",this).call(this),this.searchTerm.valueChanges.pipe(Object(u.a)(250),Object(l.a)(this.destroy$)).subscribe((function(){e.refresh()}))}},{key:"downloadcsv",value:function(){this.apollo.watchQuery({query:m,variables:[]}).valueChanges.subscribe((function(e){p.a.exportToCsv("danfe-subscribed-phones.csv",e.data.SubscriptionPhones.items)}))}},{key:"deletePhone",value:function(e){var t=this,n=[e];this.modalService.dialog({title:Object(o.a)("vdr-subscription-plugin.confirm-delete-phone"),buttons:[{type:"secondary",label:Object(o.a)("common.cancel")},{type:"danger",label:Object(o.a)("common.delete"),returnValue:!0}]}).pipe(Object(d.a)((function(e){return e?t.dataService.mutate(v,{input:n}):s.a}))).subscribe((function(){t.notificationService.success(Object(o.a)("common.notify-delete-success"),{entity:"Phone"}),t.refresh()}),(function(e){t.notificationService.error(Object(o.a)("common.notify-delete-error"),{entity:"Phone"})}))}}]),n}(c.w);I.\u0275fac=function(e){return new(e||I)(y.gc(c.K),y.gc(c.xb),y.gc(c.yb),y.gc(g.b),y.gc(r.e),y.gc(r.a))},I.\u0275cmp=y.ac({type:I,selectors:[["vdr-all-phones-list"]],features:[y.Rb],decls:25,vars:27,consts:[["type","number","name","searchTerm",1,"clr-input","search-input",3,"formControl","placeholder"],["locationId","phone-list"],["href","javascript:void(0)","class","btn btn-primary","id","downloadbtn",3,"click",4,"vdrIfPermissions"],["class","btn btn-primary","id","createbtn",3,"routerLink",4,"vdrIfPermissions"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],["href","javascript:void(0)","id","downloadbtn",1,"btn","btn-primary",3,"click"],["shape","download-cloud"],["id","createbtn",1,"btn","btn-primary",3,"routerLink"],["shape","plus"],[1,"left","align-middle"],["class","right align-middle",4,"vdrIfPermissions"],[1,"right","align-middle"],["iconShape","edit",3,"label","linkTo"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"click"],["shape","trash",1,"is-danger"]],template:function(e,t){1&e&&(y.mc(0,"vdr-action-bar"),y.mc(1,"vdr-ab-left"),y.hc(2,"input",0),y.xc(3,"translate"),y.lc(),y.mc(4,"vdr-ab-right"),y.hc(5,"vdr-action-bar-items",1),y.Yc(6,w,4,3,"a",2),y.Yc(7,S,4,5,"a",3),y.lc(),y.lc(),y.mc(8,"vdr-data-table",4),y.uc("pageChange",(function(e){return t.setPageNumber(e)}))("itemsPerPageChange",(function(e){return t.setItemsPerPage(e)})),y.xc(9,"async"),y.xc(10,"async"),y.xc(11,"async"),y.xc(12,"async"),y.mc(13,"vdr-dt-column"),y.ad(14),y.xc(15,"translate"),y.lc(),y.mc(16,"vdr-dt-column"),y.ad(17),y.xc(18,"translate"),y.lc(),y.mc(19,"vdr-dt-column"),y.ad(20),y.xc(21,"translate"),y.lc(),y.hc(22,"vdr-dt-column"),y.hc(23,"vdr-dt-column"),y.Yc(24,D,10,11,"ng-template"),y.lc()),2&e&&(y.Ub(2),y.Dc("formControl",t.searchTerm)("placeholder",y.yc(3,11,"vdr-subscription-plugin.search-by-phone")),y.Ub(4),y.Dc("vdrIfPermissions","CreateSettings"),y.Ub(1),y.Dc("vdrIfPermissions","CreateSettings"),y.Ub(1),y.Dc("items",y.yc(9,13,t.items$))("itemsPerPage",y.yc(10,15,t.itemsPerPage$))("totalItems",y.yc(11,17,t.totalItems$))("currentPage",y.yc(12,19,t.currentPage$)),y.Ub(6),y.bd(y.yc(15,21,"vdr-subscription-plugin.phone")),y.Ub(3),y.bd(y.yc(18,23,"vdr-subscription-plugin.created")),y.Ub(3),y.bd(y.yc(21,25,"vdr-subscription-plugin.updated")))},directives:[c.c,c.e,c.db,i.v,i.b,i.p,i.g,c.f,c.d,c.ob,c.M,c.L,P.o,r.h,c.Kb,c.S,c.V,c.U,c.T],pipes:[_.d,O.b,O.f],styles:[".search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"],changeDetection:0});var U=n("ROBh"),T=n("xVbo"),R=n("7SLS"),F=f.a(_templateObject3(),h.b),$=f.a(_templateObject4(),h.b);function L(e,t){if(1&e){var n=y.nc();y.mc(0,"button",5),y.uc("click",(function(){return y.Rc(n),y.wc().create()})),y.ad(1),y.xc(2,"translate"),y.lc()}if(2&e){var r=y.wc();y.Dc("disabled",!(r.detailForm.valid&&r.detailForm.dirty)),y.Ub(1),y.cd(" ",y.yc(2,2,"common.create")," ")}}function q(e,t){if(1&e){var n=y.nc();y.mc(0,"button",6),y.uc("click",(function(){return y.Rc(n),y.wc().save()})),y.ad(1),y.xc(2,"translate"),y.lc()}if(2&e){var r=y.wc();y.Dc("disabled",!(r.detailForm.valid&&r.detailForm.dirty)),y.Ub(1),y.cd(" ",y.yc(2,2,"common.update")," ")}}var A=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,c,o,a,s,u){var l;return _classCallCheck(this,n),(l=t.call(this,e,r,c,a)).formBuilder=o,l.dataService=a,l.changeDetector=s,l.notificationService=u,l.which=!1,l.detailForm=l.formBuilder.group({phone:["",i.C.required]}),l}return _createClass(n,[{key:"ngOnInit",value:function(){"/extensions/subscribedphones/create"!=this.router.url?(this.which=!1,this.init()):this.which=!0}},{key:"ngOnDestroy",value:function(){this.destroy()}},{key:"create",value:function(){var e=this;this.addNew().pipe(Object(T.a)((function(e){return!!e}))).subscribe((function(){e.detailForm.markAsPristine(),e.changeDetector.markForCheck(),e.notificationService.success("common.notify-create-success",{entity:"Phone"})}),(function(){e.notificationService.error("common.notify-create-error",{entity:"Phone"})}))}},{key:"save",value:function(){var e=this;this.saveChanges().pipe(Object(T.a)((function(e){return!!e}))).subscribe((function(){e.detailForm.markAsPristine(),e.changeDetector.markForCheck(),e.notificationService.success("common.notify-update-success",{entity:"Phone"})}),(function(){e.notificationService.error("common.notify-update-error",{entity:"Phone"})}))}},{key:"addNew",value:function(){if(this.detailForm.dirty){var e=[{phone:this.detailForm.value.phone.toString()}];return this.dataService.mutate($,{input:e}).pipe(Object(R.a)(!0))}return Object(U.a)(!1)}},{key:"saveChanges",value:function(){if(this.detailForm.dirty){var e=this.detailForm.value.phone.toString(),t=[{id:this.id,phone:e}];return this.dataService.mutate(F,{input:t}).pipe(Object(R.a)(!0))}return Object(U.a)(!1)}},{key:"setFormValues",value:function(e){this.detailForm.patchValue({phone:parseInt(e.phone)})}}]),n}(c.u);A.\u0275fac=function(e){return new(e||A)(y.gc(r.a),y.gc(r.e),y.gc(c.Fb),y.gc(i.e),y.gc(c.K),y.gc(y.k),y.gc(c.yb))},A.\u0275cmp=y.ac({type:A,selectors:[["vdr-subscription-phone-detail"]],features:[y.Rb],decls:9,vars:7,consts:[["class","btn btn-primary","id","custbtn",3,"disabled","click",4,"ngIf","ngIfElse"],["updateButton",""],[1,"form",3,"formGroup"],["for","phone",3,"label"],["id","phone","type","number","formControlName","phone",3,"readonly"],["id","custbtn",1,"btn","btn-primary",3,"disabled","click"],["id","editbtn",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){if(1&e&&(y.mc(0,"vdr-action-bar"),y.mc(1,"vdr-ab-right"),y.Yc(2,L,3,4,"button",0),y.Yc(3,q,3,4,"ng-template",null,1,y.Zc),y.lc(),y.lc(),y.mc(5,"form",2),y.mc(6,"vdr-form-field",3),y.xc(7,"translate"),y.hc(8,"input",4),y.lc(),y.lc()),2&e){var n=y.Oc(4);y.Ub(2),y.Dc("ngIf",t.which)("ngIfElse",n),y.Ub(3),y.Dc("formGroup",t.detailForm),y.Ub(1),y.Dc("label",y.yc(7,5,"vdr-subscription-plugin.phone-label")),y.Ub(2),y.Dc("readonly",!1)}},directives:[c.c,c.f,O.p,i.E,i.q,i.j,c.cb,c.db,i.v,i.b,i.p,i.h],pipes:[_.d],styles:[".search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"]});var Y=f.a(_templateObject5(),h.b),E=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){return _classCallCheck(this,n),t.call(this,e,{__typename:"Phone",id:"",phone:"",createdAt:"",updatedAt:""},(function(e){return r.query(Y,{id:e}).mapStream((function(e){return e.SubscriptionPhone}))}))}return n}(c.v);E.\u0275fac=function(e){return new(e||E)(y.qc(r.e),y.qc(c.K))},E.\u0275prov=y.cc({token:E,factory:E.\u0275fac});var z=n("YtkY");n.d(t,"PhoneSubscriptionUIModule",(function(){return B})),n.d(t,"phoneDetailBreadcrumb",(function(){return M}));var B=function e(){_classCallCheck(this,e)};function M(e){return e.entity.pipe(Object(z.a)((function(e){return[{label:"Subscribed Phones",link:["/extensions","subscribedphones"]},{label:"".concat(e.phone),link:[]}]})))}B.\u0275mod=y.ec({type:B}),B.\u0275inj=y.dc({factory:function(e){return new(e||B)},providers:[E],imports:[[c.Gb,r.i.forChild([{path:"",pathMatch:"full",component:I,data:{breadcrumb:"Subscribed Phones"}},{path:"create",component:A,data:{breadcrumb:[{label:"Subscribed Phones",link:["/extensions","subscribedphones"]},{label:"Create Phone",link:[]}]}},{path:":id",component:A,resolve:Object(c.Qb)(E),data:{breadcrumb:M}}])]]})}}]);
//# sourceMappingURL=11-es5.55d8c8022acd08ef27cf.js.map