!function(){function t(){var e=h(["\n  query GetPhone($id: ID!) {\n    SubscriptionPhone(id: $id) {\n      ...SubscribedPhones\n    }\n  }\n  ","\n"]);return t=function(){return e},e}function e(){var t=h(["\n    mutation CreatePhone($input: [PhoneAddInput!]!) {\n        addSubscriptionPhone(input: $input) {\n            ...SubscribedPhones\n        }\n    }\n    ","\n"]);return e=function(){return t},t}function n(){var t=h(["\n    mutation UpdatePhone($input: [PhoneUpdateInput!]!) {\n        updateSubscriptionPhone(input: $input) {\n            ...SubscribedPhones\n        }\n    }\n    ","\n"]);return n=function(){return t},t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var c=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(c){var r=Object.getOwnPropertyDescriptor(c,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(){var t=h(["\n   mutation DeletePhone($input:[ID!]!){\n      deleteSubscriptionPhone(id:$input){\n\t     ...SubscribedPhones \n\t  }\n   }\n   ","\n"]);return b=function(){return t},t}function f(){var t=h(["\n    query GetAllPhones($options: PhoneListOptions){\n\t\tSubscriptionPhones(options: $options){\n\t\t\titems{\n\t\t\t...SubscribedPhones\n\t\t\t}\n\t\t\ttotalItems\n       }\n    }\n\t","\n"]);return f=function(){return t},t}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"hr/e":function(r,a,u){"use strict";u.r(a),u.d(a,"PhoneSubscriptionUIModule",(function(){return tt})),u.d(a,"phoneDetailBreadcrumb",(function(){return et}));var h=u("sEIs"),m=u("ixhn"),v=u("nIj0"),y=u("OxKu"),g=u("FOa3"),P=u("6Oco"),k=u("mWib"),O=u("kuMc"),w=u("TLy2"),S=u("7RXT"),j=u("H5qd"),R=u.n(j),I=u("JReq"),C=R.a(f(),I.b),D=R.a(b(),I.b),F=u("EM62"),x=u("DEd4"),$=u("Kej3"),M=u("s2Ay"),T=u("2kYt");function X(t,e){if(1&t){var n=F.jc();F.ic(0,"a",5),F.pc("click",(function(){return F.Mc(n),F.rc().downloadcsv()})),F.dc(1,"clr-icon",6),F.Xc(2),F.sc(3,"translate"),F.hc()}2&t&&(F.Rb(2),F.Zc(" ",F.tc(3,1,"vdr-subscription-plugin.download-csv")," "))}var V=function(){return["./create"]};function _(t,e){1&t&&(F.ic(0,"a",7),F.dc(1,"clr-icon",8),F.Xc(2),F.sc(3,"translate"),F.hc()),2&t&&(F.yc("routerLink",F.Cc(4,V)),F.Rb(2),F.Zc(" ",F.tc(3,2,"vdr-subscription-plugin.create-new-phone")," "))}var A=function(t){return["/extensions","subscribedphones",t]};function Y(t,e){if(1&t&&(F.ic(0,"td",11),F.dc(1,"vdr-table-row-action",12),F.sc(2,"translate"),F.hc()),2&t){var n=F.rc().item;F.Rb(1),F.yc("label",F.tc(2,2,"common.edit"))("linkTo",F.Dc(4,A,n.id))}}function q(t,e){if(1&t){var n=F.jc();F.ic(0,"td",11),F.ic(1,"vdr-dropdown"),F.ic(2,"button",13),F.Xc(3),F.sc(4,"translate"),F.dc(5,"clr-icon",14),F.hc(),F.ic(6,"vdr-dropdown-menu",15),F.ic(7,"button",16),F.pc("click",(function(){F.Mc(n);var t=F.rc().item;return F.rc().deletePhone(t.id)})),F.dc(8,"clr-icon",17),F.Xc(9),F.sc(10,"translate"),F.hc(),F.hc(),F.hc(),F.hc()}2&t&&(F.Rb(3),F.Zc(" ",F.tc(4,2,"common.actions")," "),F.Rb(6),F.Zc(" ",F.tc(10,4,"common.delete")," "))}function E(t,e){if(1&t&&(F.ic(0,"td",9),F.Xc(1),F.hc(),F.ic(2,"td",9),F.Xc(3),F.sc(4,"date"),F.hc(),F.ic(5,"td",9),F.Xc(6),F.sc(7,"date"),F.hc(),F.Vc(8,Y,3,6,"td",10),F.Vc(9,q,11,6,"td",10)),2&t){var n=e.item;F.Rb(1),F.Yc(n.phone),F.Rb(2),F.Yc(F.uc(4,5,n.createdAt,"longDate")),F.Rb(3),F.Yc(F.uc(7,8,n.updatedAt,"longDate")),F.Rb(2),F.yc("vdrIfPermissions","UpdateSettings"),F.Rb(1),F.yc("vdrIfPermissions","DeleteSettings")}}var L=function(t){o(n,t);var e=s(n);function n(t,r,i,o,a,s){var u,b;return c(this,n),(b=e.call(this,a,s)).dataService=t,b.modalService=r,b.notificationService=i,b.apollo=o,b.searchTerm=new v.f(""),d((u=l(b),p(n.prototype)),"setQueryFn",u).call(u,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return b.dataService.query(C,e)}),(function(t){return t.SubscriptionPhones}),(function(t,e){return{options:{skip:t,take:e,filter:{phone:{contains:b.getfilter()}},sort:{updatedAt:g.a.Desc}}}})),b}return i(n,[{key:"getfilter",value:function(){return this.searchTerm.value?this.searchTerm.value.toString():""}},{key:"ngOnInit",value:function(){var t=this;d(p(n.prototype),"ngOnInit",this).call(this),this.searchTerm.valueChanges.pipe(Object(k.a)(250),Object(O.a)(this.destroy$)).subscribe((function(){t.refresh()}))}},{key:"downloadcsv",value:function(){this.apollo.watchQuery({query:C,variables:[]}).valueChanges.subscribe((function(t){S.a.exportToCsv("danfe-subscribed-phones.csv",t.data.SubscriptionPhones.items)}))}},{key:"deletePhone",value:function(t){var e=this,n=[t];this.modalService.dialog({title:Object(y.a)("vdr-subscription-plugin.confirm-delete-phone"),buttons:[{type:"secondary",label:Object(y.a)("common.cancel")},{type:"danger",label:Object(y.a)("common.delete"),returnValue:!0}]}).pipe(Object(w.a)((function(t){return t?e.dataService.mutate(D,{input:n}):P.a}))).subscribe((function(){e.notificationService.success(Object(y.a)("common.notify-delete-success"),{entity:"Phone"}),e.refresh()}),(function(t){e.notificationService.error(Object(y.a)("common.notify-delete-error"),{entity:"Phone"})}))}}]),n}(m.x);L.\u0275fac=function(t){return new(t||L)(F.cc(m.M),F.cc(m.Cb),F.cc(m.Db),F.cc(x.b),F.cc(h.e),F.cc(h.a))},L.\u0275cmp=F.Wb({type:L,selectors:[["vdr-all-phones-list"]],features:[F.Ob],decls:25,vars:27,consts:[["type","number","name","searchTerm",1,"clr-input","search-input",3,"formControl","placeholder"],["locationId","phone-list"],["href","javascript:void(0)","class","btn btn-primary","id","downloadbtn",3,"click",4,"vdrIfPermissions"],["class","btn btn-primary","id","createbtn",3,"routerLink",4,"vdrIfPermissions"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],["href","javascript:void(0)","id","downloadbtn",1,"btn","btn-primary",3,"click"],["shape","download-cloud"],["id","createbtn",1,"btn","btn-primary",3,"routerLink"],["shape","plus"],[1,"left","align-middle"],["class","right align-middle",4,"vdrIfPermissions"],[1,"right","align-middle"],["iconShape","edit",3,"label","linkTo"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"click"],["shape","trash",1,"is-danger"]],template:function(t,e){1&t&&(F.ic(0,"vdr-action-bar"),F.ic(1,"vdr-ab-left"),F.dc(2,"input",0),F.sc(3,"translate"),F.hc(),F.ic(4,"vdr-ab-right"),F.dc(5,"vdr-action-bar-items",1),F.Vc(6,X,4,3,"a",2),F.Vc(7,_,4,5,"a",3),F.hc(),F.hc(),F.ic(8,"vdr-data-table",4),F.pc("pageChange",(function(t){return e.setPageNumber(t)}))("itemsPerPageChange",(function(t){return e.setItemsPerPage(t)})),F.sc(9,"async"),F.sc(10,"async"),F.sc(11,"async"),F.sc(12,"async"),F.ic(13,"vdr-dt-column"),F.Xc(14),F.sc(15,"translate"),F.hc(),F.ic(16,"vdr-dt-column"),F.Xc(17),F.sc(18,"translate"),F.hc(),F.ic(19,"vdr-dt-column"),F.Xc(20),F.sc(21,"translate"),F.hc(),F.dc(22,"vdr-dt-column"),F.dc(23,"vdr-dt-column"),F.Vc(24,E,10,11,"ng-template"),F.hc()),2&t&&(F.Rb(2),F.yc("formControl",e.searchTerm)("placeholder",F.tc(3,11,"vdr-subscription-plugin.search-by-phone")),F.Rb(4),F.yc("vdrIfPermissions","CreateSettings"),F.Rb(1),F.yc("vdrIfPermissions","CreateSettings"),F.Rb(1),F.yc("items",F.tc(9,13,e.items$))("itemsPerPage",F.tc(10,15,e.itemsPerPage$))("totalItems",F.tc(11,17,e.totalItems$))("currentPage",F.tc(12,19,e.currentPage$)),F.Rb(6),F.Yc(F.tc(15,21,"vdr-subscription-plugin.phone")),F.Rb(3),F.Yc(F.tc(18,23,"vdr-subscription-plugin.created")),F.Rb(3),F.Yc(F.tc(21,25,"vdr-subscription-plugin.updated")))},directives:[m.c,m.e,m.gb,v.v,v.b,v.p,v.g,m.f,m.d,m.tb,m.O,m.N,$.o,h.h,m.Rb,m.U,m.X,m.W,m.V],pipes:[M.d,T.b,T.f],styles:[".search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"],changeDetection:0});var Z=u("ROBh"),B=u("xVbo"),N=u("7SLS"),U=R.a(n(),I.b),W=R.a(e(),I.b);function G(t,e){if(1&t){var n=F.jc();F.ic(0,"button",5),F.pc("click",(function(){return F.Mc(n),F.rc().create()})),F.Xc(1),F.sc(2,"translate"),F.hc()}if(2&t){var c=F.rc();F.yc("disabled",!(c.detailForm.valid&&c.detailForm.dirty)),F.Rb(1),F.Zc(" ",F.tc(2,2,"common.create")," ")}}function J(t,e){if(1&t){var n=F.jc();F.ic(0,"button",6),F.pc("click",(function(){return F.Mc(n),F.rc().save()})),F.Xc(1),F.sc(2,"translate"),F.hc()}if(2&t){var c=F.rc();F.yc("disabled",!(c.detailForm.valid&&c.detailForm.dirty)),F.Rb(1),F.Zc(" ",F.tc(2,2,"common.update")," ")}}var z=function(t){o(n,t);var e=s(n);function n(t,r,i,o,a,s,u){var l;return c(this,n),(l=e.call(this,t,r,i,a)).formBuilder=o,l.dataService=a,l.changeDetector=s,l.notificationService=u,l.which=!1,l.detailForm=l.formBuilder.group({phone:["",v.C.required]}),l}return i(n,[{key:"ngOnInit",value:function(){"/extensions/subscribedphones/create"!=this.router.url?(this.which=!1,this.init()):this.which=!0}},{key:"ngOnDestroy",value:function(){this.destroy()}},{key:"create",value:function(){var t=this;this.addNew().pipe(Object(B.a)((function(t){return!!t}))).subscribe((function(){t.detailForm.markAsPristine(),t.changeDetector.markForCheck(),t.notificationService.success("common.notify-create-success",{entity:"Phone"})}),(function(){t.notificationService.error("common.notify-create-error",{entity:"Phone"})}))}},{key:"save",value:function(){var t=this;this.saveChanges().pipe(Object(B.a)((function(t){return!!t}))).subscribe((function(){t.detailForm.markAsPristine(),t.changeDetector.markForCheck(),t.notificationService.success("common.notify-update-success",{entity:"Phone"})}),(function(){t.notificationService.error("common.notify-update-error",{entity:"Phone"})}))}},{key:"addNew",value:function(){if(this.detailForm.dirty){var t=[{phone:this.detailForm.value.phone.toString()}];return this.dataService.mutate(W,{input:t}).pipe(Object(N.a)(!0))}return Object(Z.a)(!1)}},{key:"saveChanges",value:function(){if(this.detailForm.dirty){var t=this.detailForm.value.phone.toString(),e=[{id:this.id,phone:t}];return this.dataService.mutate(U,{input:e}).pipe(Object(N.a)(!0))}return Object(Z.a)(!1)}},{key:"setFormValues",value:function(t){this.detailForm.patchValue({phone:parseInt(t.phone)})}}]),n}(m.v);z.\u0275fac=function(t){return new(t||z)(F.cc(h.a),F.cc(h.e),F.cc(m.Lb),F.cc(v.e),F.cc(m.M),F.cc(F.k),F.cc(m.Db))},z.\u0275cmp=F.Wb({type:z,selectors:[["vdr-subscription-phone-detail"]],features:[F.Ob],decls:9,vars:7,consts:[["class","btn btn-primary","id","custbtn",3,"disabled","click",4,"ngIf","ngIfElse"],["updateButton",""],[1,"form",3,"formGroup"],["for","phone",3,"label"],["id","phone","type","number","formControlName","phone",3,"readonly"],["id","custbtn",1,"btn","btn-primary",3,"disabled","click"],["id","editbtn",1,"btn","btn-primary",3,"disabled","click"]],template:function(t,e){if(1&t&&(F.ic(0,"vdr-action-bar"),F.ic(1,"vdr-ab-right"),F.Vc(2,G,3,4,"button",0),F.Vc(3,J,3,4,"ng-template",null,1,F.Wc),F.hc(),F.hc(),F.ic(5,"form",2),F.ic(6,"vdr-form-field",3),F.sc(7,"translate"),F.dc(8,"input",4),F.hc(),F.hc()),2&t){var n=F.Jc(4);F.Rb(2),F.yc("ngIf",e.which)("ngIfElse",n),F.Rb(3),F.yc("formGroup",e.detailForm),F.Rb(1),F.yc("label",F.tc(7,5,"vdr-subscription-plugin.phone-label")),F.Rb(2),F.yc("readonly",!1)}},directives:[m.c,m.f,T.p,v.E,v.q,v.j,m.fb,m.gb,v.v,v.b,v.p,v.h],pipes:[M.d],styles:[".search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"]});var K=R.a(t(),I.b),Q=function(t){o(n,t);var e=s(n);function n(t,r){return c(this,n),e.call(this,t,{__typename:"Phone",id:"",phone:"",createdAt:"",updatedAt:""},(function(t){return r.query(K,{id:t}).mapStream((function(t){return t.SubscriptionPhone}))}))}return n}(m.w);Q.\u0275fac=function(t){return new(t||Q)(F.mc(h.e),F.mc(m.M))},Q.\u0275prov=F.Yb({token:Q,factory:Q.\u0275fac});var H=u("YtkY"),tt=function t(){c(this,t)};function et(t){return t.entity.pipe(Object(H.a)((function(t){return[{label:"Subscribed Phones",link:["/extensions","subscribedphones"]},{label:""+t.phone,link:[]}]})))}tt.\u0275mod=F.ac({type:tt}),tt.\u0275inj=F.Zb({factory:function(t){return new(t||tt)},providers:[Q],imports:[[m.Mb,h.i.forChild([{path:"",pathMatch:"full",component:L,data:{breadcrumb:"Subscribed Phones"}},{path:"create",component:z,data:{breadcrumb:[{label:"Subscribed Phones",link:["/extensions","subscribedphones"]},{label:"Create Phone",link:[]}]}},{path:":id",component:z,resolve:Object(m.Yb)(Q),data:{breadcrumb:et}}])]]})}}])}();