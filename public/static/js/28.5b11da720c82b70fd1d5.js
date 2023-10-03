webpackJsonp([28],{"/n7D":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("woOf"),n=e.n(i),s={name:"crud-fina-salary-accounts",data:function(){return{config:{title:"Akun Penggajian Fina",model_api:"fina-salary-accounts",getter:"fina-salary-accounts",setter:"fina-salary-accounts",pk_field:null,permission:{create:"create-fina-salary-accounts",read:"view-fina-salary-accounts",update:"update-fina-salary-accounts",delete:"delete-fina-salary-accounts"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"active",data:"active",label:"Status",placeholder:null,methods:{list:{order:!0,class:{0:"badge badge-danger",1:"badge badge-primary"},transform:"active"},detail:{order:!0,class:{0:"badge badge-danger",1:"badge badge-primary"},transform:"active"},create:{view_data:"active",type:"radio",value:"1",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}},update:{view_data:"active",type:"radio",value:"1",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}},filter:{view_data:"active",type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}}}}]},isLoadingSync:!1,lastSync:{}}},mounted:function(){this.getLastSync()},methods:{syncData:function(){var t=this;this.isLoadingSync=!0,this.$_api.post("custom/fina-salary-accounts/sync-data").then(function(a){t.isLoadingSync=!1,t.lastSync=n()({},a.data),t.$refs["sync-module"].$children[1].getData()}).catch(function(a){t.isLoadingSync=!1,t.$_alert.error(a)})},getLastSync:function(){var t=this;this.$_api.get("custom/log-sync-fina-salary-accounts/last-sync-data").then(function(a){t.lastSync=n()({},a.data)}).catch(function(a){t.$_alert.error(a)})}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tas-base-crud",{ref:"sync-module",attrs:{config:t.config,"hide-create":"","hide-update":"","hide-delete":""},scopedSlots:t._u([{key:"list-action",fn:function(){return[t.$_sys.isAllowed(t.config.permission.create)?e("button",{staticClass:"btn btn-primary btn-circle ml-3",attrs:{disabled:t.isLoadingSync},on:{click:function(a){return t.syncData()}}},[e("i",{staticClass:"ri-refresh-line p-0"}),t._v(" Sync Data ")]):t._e(),t._v(" "),e("b-toast",{attrs:{id:"export-toast",variant:"info",solid:"","no-auto-hide":"","no-close-button":"",visible:t.isLoadingSync},scopedSlots:t._u([{key:"toast-title",fn:function(){return[e("div",{staticClass:"d-flex flex-grow-1 align-items-center pt-2"},[e("b-spinner",{attrs:{label:"Spinning",small:""}}),t._v(" "),e("strong",{staticClass:"mr-auto pl-3"},[t._v(" Sync data with FINA ...")]),t._v(" "),e("small",{staticClass:"text-muted mr-2"},[e("time-ago",{attrs:{locale:"id"}})],1)],1)]},proxy:!0}])},[t._v(" Sedang menyinkronkan data "+t._s(t.config.title)+" dengan aplikasi FINA-KIW. Harap tunggu sebentar.\n    ")])]},proxy:!0},{key:"header-table",fn:function(){return[e("div",{staticClass:"card-body py-0"},[e("div",{staticClass:"alert alert-custom alert-light-primary p-2 mb-0",attrs:{role:"alert"}},[e("div",{staticClass:"alert-icon"},[e("span",{staticClass:"svg-icon svg-icon-primary svg-icon-xl"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"}},[e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("rect",{attrs:{x:"0",y:"0",width:"24",height:"24"}}),t._v(" "),e("path",{attrs:{d:"M5,2 L19,2 C20.1045695,2 21,2.8954305 21,4 L21,6 C21,7.1045695 20.1045695,8 19,8 L5,8 C3.8954305,8 3,7.1045695 3,6 L3,4 C3,2.8954305 3.8954305,2 5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L16,6 C16.5522847,6 17,5.55228475 17,5 C17,4.44771525 16.5522847,4 16,4 L11,4 Z M7,6 C7.55228475,6 8,5.55228475 8,5 C8,4.44771525 7.55228475,4 7,4 C6.44771525,4 6,4.44771525 6,5 C6,5.55228475 6.44771525,6 7,6 Z",fill:"#000000",opacity:"0.3"}}),t._v(" "),e("path",{attrs:{d:"M5,9 L19,9 C20.1045695,9 21,9.8954305 21,11 L21,13 C21,14.1045695 20.1045695,15 19,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,11 C3,9.8954305 3.8954305,9 5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L16,13 C16.5522847,13 17,12.5522847 17,12 C17,11.4477153 16.5522847,11 16,11 L11,11 Z M7,13 C7.55228475,13 8,12.5522847 8,12 C8,11.4477153 7.55228475,11 7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 Z",fill:"#000000"}}),t._v(" "),e("path",{attrs:{d:"M5,16 L19,16 C20.1045695,16 21,16.8954305 21,18 L21,20 C21,21.1045695 20.1045695,22 19,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,18 C3,16.8954305 3.8954305,16 5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L16,20 C16.5522847,20 17,19.5522847 17,19 C17,18.4477153 16.5522847,18 16,18 L11,18 Z M7,20 C7.55228475,20 8,19.5522847 8,19 C8,18.4477153 7.55228475,18 7,18 C6.44771525,18 6,18.4477153 6,19 C6,19.5522847 6.44771525,20 7,20 Z",fill:"#000000"}})])])])]),t._v(" "),e("div",{staticClass:"alert-text"},[t._v("Terakhir disinkronkan - "),e("time-ago",{attrs:{datetime:t.lastSync.sync_at||new Date,locale:"id"}}),t._v(", oleh "+t._s(t.lastSync.rel_sync_by||"System"))],1)])])]},proxy:!0}])})},staticRenderFns:[]},r=e("VU/8")(s,l,!1,null,null,null);a.default=r.exports}});
//# sourceMappingURL=28.5b11da720c82b70fd1d5.js.map