function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var c,n=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _get(e,t,c){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,c){var n=_superPropBase(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(c):r.value}})(e,t,c||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{tB2i:function(e,t,c){"use strict";c.r(t),c.d(t,"HealthCheckComponent",(function(){return S})),c.d(t,"JobListComponent",(function(){return T})),c.d(t,"JobStateLabelComponent",(function(){return x})),c.d(t,"SystemModule",(function(){return D})),c.d(t,"systemRoutes",(function(){return N})),c.d(t,"\u02750",(function(){return R})),c.d(t,"\u02751",(function(){return E}));var n=c("D57K"),r=c("EM62"),o=c("ixhn"),a=c("nIj0"),s=c("sEIs"),i=c("8lHc"),l=c("kuMc"),u=c("xVbo"),d=c("YtkY"),b=c("OxKu"),f=c("2kYt"),p=c("Kej3"),h=c("s2Ay"),m=c("jY47");function y(e,t){1&e&&(r.mc(0),r.cd(1),r.zc(2,"translate"),r.lc()),2&e&&(r.Wb(1),r.ed(" ",r.Ac(2,1,"system.health-all-systems-up")," "))}function g(e,t){1&e&&(r.cd(0),r.zc(1,"translate")),2&e&&r.ed(" ",r.Ac(1,1,"system.health-error")," ")}var v=function(e,t){return{"is-success":e,"is-danger":t}};function j(e,t){if(1&e&&(r.oc(0,"div",7),r.oc(1,"div",8),r.jc(2,"clr-icon",9),r.nc(),r.oc(3,"div",10),r.ad(4,y,3,3,"ng-container",11),r.ad(5,g,2,3,"ng-template",null,12,r.bd),r.oc(7,"div",13),r.cd(8),r.zc(9,"translate"),r.zc(10,"date"),r.zc(11,"async"),r.nc(),r.nc(),r.nc()),2&e){var c=t.ngIf,n=r.Qc(6),o=r.yc();r.Wb(2),r.Fc("ngClass",r.Lc(13,v,"ok"===c,"ok"!==c)),r.Xb("shape","ok"===c?"check-circle":"exclamation-circle"),r.Wb(2),r.Fc("ngIf","ok"===c)("ngIfElse",n),r.Wb(4),r.fd(" ",r.Ac(9,6,"system.health-last-checked"),": ",r.Bc(10,8,r.Ac(11,11,o.healthCheckService.lastCheck$),"mediumTime")," ")}}function _(e,t){1&e&&(r.mc(0),r.jc(1,"clr-icon",17),r.cd(2),r.zc(3,"translate"),r.lc()),2&e&&(r.Wb(2),r.ed(" ",r.Ac(3,1,"system.health-status-up")," "))}function O(e,t){1&e&&(r.jc(0,"clr-icon",18),r.cd(1),r.zc(2,"translate")),2&e&&(r.Wb(1),r.ed(" ",r.Ac(2,1,"system.health-status-down")," "))}function C(e,t){if(1&e&&(r.oc(0,"tr"),r.oc(1,"td",14),r.cd(2),r.nc(),r.oc(3,"td",14),r.oc(4,"vdr-chip",15),r.ad(5,_,4,3,"ng-container",11),r.ad(6,O,3,3,"ng-template",null,16,r.bd),r.nc(),r.nc(),r.oc(8,"td",14),r.cd(9),r.nc(),r.nc()),2&e){var c=t.$implicit,n=r.Qc(7);r.Wb(2),r.dd(c.key),r.Wb(2),r.Fc("colorType","up"===c.result.status?"success":"error"),r.Wb(1),r.Fc("ngIf","up"===c.result.status)("ngIfElse",n),r.Wb(4),r.dd(c.result.message)}}function A(e,t){1&e&&(r.mc(0),r.cd(1),r.zc(2,"translate"),r.lc()),2&e&&(r.Wb(1),r.ed(" ",r.Ac(2,1,"system.all-job-queues")," "))}function k(e,t){if(1&e&&(r.oc(0,"vdr-chip",8),r.cd(1),r.nc()),2&e){var c=r.yc().item;r.Fc("colorFrom",c.name),r.Wb(1),r.dd(c.name)}}function w(e,t){if(1&e&&(r.ad(0,A,3,3,"ng-container",6),r.ad(1,k,2,2,"ng-template",null,7,r.bd)),2&e){var c=t.item,n=r.Qc(2);r.Fc("ngIf","all"===c.name)("ngIfElse",n)}}function P(e,t){if(1&e&&(r.oc(0,"vdr-dropdown"),r.oc(1,"button",13),r.zc(2,"translate"),r.jc(3,"clr-icon",14),r.nc(),r.oc(4,"vdr-dropdown-menu"),r.oc(5,"div",15),r.jc(6,"vdr-object-tree",16),r.nc(),r.nc(),r.nc()),2&e){var c=r.yc().item;r.Wb(1),r.Fc("title",r.Ac(2,2,"system.job-data")),r.Wb(5),r.Fc("value",c.data)}}function W(e,t){if(1&e&&(r.oc(0,"vdr-dropdown"),r.oc(1,"button",17),r.jc(2,"clr-icon",14),r.cd(3),r.zc(4,"translate"),r.nc(),r.oc(5,"vdr-dropdown-menu"),r.oc(6,"div",15),r.jc(7,"vdr-object-tree",16),r.nc(),r.nc(),r.nc()),2&e){var c=r.yc().item;r.Wb(3),r.ed(" ",r.Ac(4,2,"system.job-result")," "),r.Wb(4),r.Fc("value",c.result)}}function I(e,t){if(1&e&&(r.oc(0,"vdr-dropdown"),r.oc(1,"button",17),r.jc(2,"clr-icon",18),r.cd(3),r.zc(4,"translate"),r.nc(),r.oc(5,"vdr-dropdown-menu"),r.oc(6,"div",15),r.cd(7),r.nc(),r.nc(),r.nc()),2&e){var c=r.yc().item;r.Wb(3),r.ed(" ",r.Ac(4,2,"system.job-error")," "),r.Wb(4),r.ed(" ",c.error," ")}}function z(e,t){if(1&e&&(r.oc(0,"td",9),r.jc(1,"vdr-entity-info",10),r.nc(),r.oc(2,"td",9),r.ad(3,P,7,4,"vdr-dropdown",11),r.oc(4,"vdr-chip",8),r.cd(5),r.nc(),r.nc(),r.oc(6,"td",9),r.cd(7),r.zc(8,"timeAgo"),r.nc(),r.oc(9,"td",9),r.jc(10,"vdr-job-state-label",12),r.nc(),r.oc(11,"td",9),r.cd(12),r.zc(13,"duration"),r.nc(),r.oc(14,"td",9),r.ad(15,W,8,4,"vdr-dropdown",11),r.ad(16,I,8,4,"vdr-dropdown",11),r.nc()),2&e){var c=t.item,n=r.yc();r.Wb(1),r.Fc("entity",c),r.Wb(2),r.Fc("ngIf",c.data),r.Wb(1),r.Fc("colorFrom",c.queueName),r.Wb(1),r.dd(c.queueName),r.Wb(2),r.dd(r.Ac(8,9,c.createdAt)),r.Wb(3),r.Fc("job",c),r.Wb(2),r.dd(r.Ac(13,11,c.duration)),r.Wb(3),r.Fc("ngIf",n.hasResult(c)),r.Wb(1),r.Fc("ngIf",c.error)}}function F(e,t){if(1&e&&(r.oc(0,"span",2),r.cd(1),r.zc(2,"percent"),r.nc()),2&e){var c=r.yc();r.Wb(1),r.ed(" ",r.Ac(2,1,c.job.progress/100)," ")}}var S=function e(t){_classCallCheck(this,e),this.healthCheckService=t};S.\u0275fac=function(e){return new(e||S)(r.ic(o.hb))},S.\u0275cmp=r.cc({type:S,selectors:[["vdr-health-check"]],decls:25,vars:18,consts:[["class","system-status-header",4,"ngIf"],["locationId","system-status"],[1,"btn","btn-secondary",3,"click"],["shape","refresh"],[1,"table"],[1,"left"],[4,"ngFor","ngForOf"],[1,"system-status-header"],[1,"status-icon"],["size","48",3,"ngClass"],[1,"status-detail"],[4,"ngIf","ngIfElse"],["error",""],[1,"last-checked"],[1,"align-middle","left"],[3,"colorType"],["down",""],["shape","check-circle"],["shape","exclamation-circle"]],template:function(e,t){1&e&&(r.oc(0,"vdr-action-bar"),r.oc(1,"vdr-ab-left"),r.ad(2,j,12,16,"div",0),r.zc(3,"async"),r.nc(),r.oc(4,"vdr-ab-right"),r.jc(5,"vdr-action-bar-items",1),r.oc(6,"button",2),r.wc("click",(function(){return t.healthCheckService.refresh()})),r.jc(7,"clr-icon",3),r.cd(8),r.zc(9,"translate"),r.nc(),r.nc(),r.nc(),r.oc(10,"table",4),r.oc(11,"thead"),r.oc(12,"tr"),r.oc(13,"th",5),r.cd(14),r.zc(15,"translate"),r.nc(),r.oc(16,"th",5),r.cd(17),r.zc(18,"translate"),r.nc(),r.oc(19,"th",5),r.cd(20),r.zc(21,"translate"),r.nc(),r.nc(),r.nc(),r.oc(22,"tbody"),r.ad(23,C,10,5,"tr",6),r.zc(24,"async"),r.nc(),r.nc()),2&e&&(r.Wb(2),r.Fc("ngIf",r.Ac(3,6,t.healthCheckService.status$)),r.Wb(6),r.ed(" ",r.Ac(9,8,"system.health-refresh")," "),r.Wb(6),r.ed(" ",r.Ac(15,10,"common.name")," "),r.Wb(3),r.ed(" ",r.Ac(18,12,"system.health-status")," "),r.Wb(3),r.ed(" ",r.Ac(21,14,"system.health-message")," "),r.Wb(3),r.Fc("ngForOf",r.Ac(24,16,t.healthCheckService.details$)))},directives:[o.c,o.e,f.p,o.f,o.d,p.o,f.o,f.n,o.B],pipes:[f.b,h.d,f.f],styles:[".system-status-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.system-status-header[_ngcontent-%COMP%]   .status-detail[_ngcontent-%COMP%]{font-weight:700}.system-status-header[_ngcontent-%COMP%]   .last-checked[_ngcontent-%COMP%]{font-weight:400;color:#525456}"],changeDetection:0}),S.ctorParameters=function(){return[{type:o.hb}]},S=Object(n.c)([Object(n.f)("design:paramtypes",[o.hb])],S);var T=function(e){_inherits(c,e);var t=_createSuper(c);function c(e,n,r,s,i){var l,u;return _classCallCheck(this,c),(u=t.call(this,s,i)).dataService=e,u.modalService=n,u.notificationService=r,u.liveUpdate=new a.f(!0),u.hideSettled=new a.f(!0),u.queueFilter=new a.f("all"),_get((l=_assertThisInitialized(u),_getPrototypeOf(c.prototype)),"setQueryFn",l).call(l,(function(){var e;return(e=u.dataService.settings).getAllJobs.apply(e,arguments)}),(function(e){return e.jobs}),(function(e,t){var c="all"===u.queueFilter.value?null:{queueName:{eq:u.queueFilter.value}},n=u.hideSettled.value;return{options:{skip:e,take:t,filter:Object.assign(Object.assign({},c),n?{isSettled:{eq:!1}}:{}),sort:{createdAt:o.Ib.DESC}}}})),u}return _createClass(c,[{key:"ngOnInit",value:function(){var e=this;_get(_getPrototypeOf(c.prototype),"ngOnInit",this).call(this),Object(i.a)(5e3,2e3).pipe(Object(l.a)(this.destroy$),Object(u.a)((function(){return e.liveUpdate.value}))).subscribe((function(){e.refresh()})),this.queues$=this.dataService.settings.getJobQueues().mapStream((function(e){return e.jobQueues})).pipe(Object(d.a)((function(e){return[{name:"all",running:!0}].concat(_toConsumableArray(e))})))}},{key:"hasResult",value:function(e){var t=e.result;return null!=t&&("object"!=typeof t||Object.keys(t).length>0)}}]),c}(o.w);T.\u0275fac=function(e){return new(e||T)(r.ic(o.K),r.ic(o.xb),r.ic(o.yb),r.ic(s.e),r.ic(s.a))},T.\u0275cmp=r.cc({type:T,selectors:[["vdr-job-list"]],features:[r.Tb],decls:40,vars:45,consts:[["type","checkbox","clrCheckbox","","name","live-update",3,"formControl"],["type","checkbox","clrCheckbox","","name","hide-settled",3,"formControl","change"],["bindValue","name",3,"addTag","items","hideSelected","multiple","markFirst","clearable","searchable","formControl","change"],["ng-label-tmp","","ng-option-tmp",""],["locationId","job-list"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],[4,"ngIf","ngIfElse"],["others",""],[3,"colorFrom"],[1,"left","align-middle"],[3,"entity"],[4,"ngIf"],[3,"job"],["vdrDropdownTrigger","",1,"btn","btn-link","btn-icon",3,"title"],["shape","details"],[1,"result-detail"],[3,"value"],["vdrDropdownTrigger","",1,"btn","btn-link","btn-sm","details-button"],["shape","exclamation-circle"]],template:function(e,t){1&e&&(r.oc(0,"vdr-action-bar"),r.oc(1,"vdr-ab-left"),r.oc(2,"clr-checkbox-container"),r.oc(3,"clr-checkbox-wrapper"),r.jc(4,"input",0),r.oc(5,"label"),r.cd(6),r.zc(7,"translate"),r.nc(),r.nc(),r.oc(8,"clr-checkbox-wrapper"),r.oc(9,"input",1),r.wc("change",(function(){return t.refresh()})),r.nc(),r.oc(10,"label"),r.cd(11),r.zc(12,"translate"),r.nc(),r.nc(),r.nc(),r.nc(),r.oc(13,"vdr-ab-right"),r.oc(14,"ng-select",2),r.wc("change",(function(){return t.refresh()})),r.zc(15,"async"),r.ad(16,w,3,2,"ng-template",3),r.nc(),r.jc(17,"vdr-action-bar-items",4),r.nc(),r.nc(),r.oc(18,"vdr-data-table",5),r.wc("pageChange",(function(e){return t.setPageNumber(e)}))("itemsPerPageChange",(function(e){return t.setItemsPerPage(e)})),r.zc(19,"async"),r.zc(20,"async"),r.zc(21,"async"),r.zc(22,"async"),r.jc(23,"vdr-dt-column"),r.oc(24,"vdr-dt-column"),r.cd(25),r.zc(26,"translate"),r.nc(),r.oc(27,"vdr-dt-column"),r.cd(28),r.zc(29,"translate"),r.nc(),r.oc(30,"vdr-dt-column"),r.cd(31),r.zc(32,"translate"),r.nc(),r.oc(33,"vdr-dt-column"),r.cd(34),r.zc(35,"translate"),r.nc(),r.oc(36,"vdr-dt-column"),r.cd(37),r.zc(38,"translate"),r.nc(),r.ad(39,z,17,13,"ng-template"),r.nc()),2&e&&(r.Wb(4),r.Fc("formControl",t.liveUpdate),r.Wb(2),r.dd(r.Ac(7,21,"common.live-update")),r.Wb(3),r.Fc("formControl",t.hideSettled),r.Wb(2),r.dd(r.Ac(12,23,"system.hide-settled-jobs")),r.Wb(3),r.Fc("addTag",!1)("items",r.Ac(15,25,t.queues$))("hideSelected",!0)("multiple",!1)("markFirst",!1)("clearable",!1)("searchable",!1)("formControl",t.queueFilter),r.Wb(4),r.Fc("items",r.Ac(19,27,t.items$))("itemsPerPage",r.Ac(20,29,t.itemsPerPage$))("totalItems",r.Ac(21,31,t.totalItems$))("currentPage",r.Ac(22,33,t.currentPage$)),r.Wb(7),r.dd(r.Ac(26,35,"system.job-queue-name")),r.Wb(3),r.dd(r.Ac(29,37,"common.created-at")),r.Wb(3),r.dd(r.Ac(32,39,"system.job-state")),r.Wb(3),r.dd(r.Ac(35,41,"system.job-duration")),r.Wb(3),r.dd(r.Ac(38,43,"system.job-result")))},directives:function(){return[o.c,o.e,p.j,p.k,o.db,a.a,p.i,a.p,a.g,p.t,o.f,m.a,m.e,m.d,o.d,o.M,o.L,f.p,o.B,o.Z,x,o.S,o.V,p.o,o.U,o.zb]},pipes:function(){return[h.d,f.b,o.Mb,o.W]},styles:[".result-detail[_ngcontent-%COMP%]{margin:0 12px}"],changeDetection:0}),T.ctorParameters=function(){return[{type:o.K},{type:o.xb},{type:o.yb},{type:s.e},{type:s.a}]},T=Object(n.c)([Object(n.f)("design:paramtypes",[o.K,o.xb,o.yb,s.e,s.a])],T);var x=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"iconShape",get:function(){switch(this.job.state){case o.rb.COMPLETED:return"check-circle";case o.rb.FAILED:return"exclamation-circle";case o.rb.PENDING:case o.rb.RETRYING:return"hourglass";case o.rb.RUNNING:return"sync"}}},{key:"colorType",get:function(){switch(this.job.state){case o.rb.COMPLETED:return"success";case o.rb.FAILED:return"error";case o.rb.PENDING:case o.rb.RETRYING:return"";case o.rb.RUNNING:return"warning"}}}]),e}();x.\u0275fac=function(e){return new(e||x)},x.\u0275cmp=r.cc({type:x,selectors:[["vdr-job-state-label"]],inputs:{job:"job"},decls:5,vars:6,consts:[[3,"colorType"],["class","progress",4,"ngIf"],[1,"progress"]],template:function(e,t){1&e&&(r.oc(0,"vdr-chip",0),r.jc(1,"clr-icon"),r.cd(2),r.zc(3,"titlecase"),r.ad(4,F,3,3,"span",1),r.nc()),2&e&&(r.Fc("colorType",t.colorType),r.Wb(1),r.Xb("shape",t.iconShape),r.Wb(1),r.ed(" ",r.Ac(3,4,t.job.state)," "),r.Wb(2),r.Fc("ngIf","RUNNING"===t.job.state))},directives:[o.B,p.o,f.p],pipes:[f.z,f.w],styles:[".progress[_ngcontent-%COMP%]{margin-left:3px}clr-icon[_ngcontent-%COMP%]{min-width:12px}"],changeDetection:0}),Object(n.c)([Object(r.D)(),Object(n.f)("design:type",Object)],x.prototype,"job",void 0);var R={breadcrumb:Object(b.a)("breadcrumb.job-queue")},E={breadcrumb:Object(b.a)("breadcrumb.system-status")},N=[{path:"jobs",component:T,data:R},{path:"system-status",component:S,data:E}],D=function e(){_classCallCheck(this,e)};D.\u0275mod=r.gc({type:D}),D.\u0275inj=r.fc({factory:function(e){return new(e||D)},imports:[[o.Hb,s.i.forChild(N)]]})}}]);