webpackJsonp([30],{FRkJ:function(e,t){},rRMA:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Gu7T"),n=i.n(a),l=i("pFYg"),s=i.n(l),d=i("woOf"),r=i.n(d),c={name:"crud-auction-plans",data:function(){return{config:{title:"Rencana Lelang Diikuti",permission:{create:"create-auction-plans",read:"view-auction-plans",update:"do-verification-request-auction-plans",delete:"delete-auction-plans"}},fullFilter:{},searchFilter:"",usedFilter:{search:"",page:1,limit:10},selectedAgenda:{label:"RKAP Kuantitatif",code:null},agendaList:[],isLoading:!1,dataList:{total:0,totalPage:1,data:[]}}},computed:{isValidFilter:function(){return!(!this.usedFilter.periode_year||!this.usedFilter.division_id)}},watch:{searchFilter:{deep:!1,immediate:!1,handler:function(e){this.usedFilter=r()({},this.usedFilter,{search:e,page:1,limit:10})}},selectedAgenda:{deep:!0,immediate:!1,handler:function(e){var t="object"===(void 0===e?"undefined":s()(e))?e.code:e;this.usedFilter=r()({},this.usedFilter,{agenda_id:t,page:1,limit:10})}},usedFilter:{deep:!0,immediate:!1,handler:function(e){this.getListData(e)}}},methods:{globalFilterChange:function(e){this.fullFilter=r()({},e),this.getAgenda(e,null,!0)},getAgenda:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=r()({},{periode_year:a?e.year:e.periode_year,agenda_id:i||null});this.$_api.dataset("m-quantitatif-agendas",l).then(function(e){var a=e.data.map(function(e){return{label:e.name,code:e.id}});t.agendaList=[{label:"RKAP Kualitatif",code:null}].concat(n()(a)),t.selectedAgenda=i?t.agendaList.filter(function(e){return e.code===i})[0]:t.agendaList[0],t.usedFilter=r()({},l,{search:"",page:1,limit:10,id:t.$route.query.id||null})})},getListData:function(e){var t=this;this.isLoading=!0,this.$_api.get("custom/auction-plans/list",e).then(function(e){t.isLoading=!1,t.dataList=e},function(e){t.isLoading=!1,t.$_alert.error(e)})}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"card card-custom mb-3"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title mb-0 font-weight-bolder mb-3"},[e._v(e._s(e.config.title))]),e._v(" "),i("global-filter",{attrs:{query:"",inline:""},on:{change:function(t){return e.globalFilterChange(t)}}}),e._v(" "),i("hr",{staticStyle:{"border-style":"dashed"}}),e._v(" "),i("div",{staticClass:"d-flex align-items-center flex-fill"},[i("span",{staticClass:"font-weight-bold font-size-lg pr-3",staticStyle:{"min-width":"110px"},attrs:{for:""}},[e._v("Pilih Agenda :")]),e._v(" "),i("v-select",{staticClass:"vs-style custom flex-fill",attrs:{clearable:!1,appendToBody:!0,options:e.agendaList,placeholder:"Pilih salah satu Agenda"},model:{value:e.selectedAgenda,callback:function(t){e.selectedAgenda=t},expression:"selectedAgenda"}},[e._t("no-options",function(){return[e._v(e._s(e.$t("error.no_data")))]})],2)],1)],1)]),e._v(" "),e.isValidFilter?i("div",{staticClass:"card card-custom mb-3"},[i("div",{staticClass:"card-body"})]):e._e()])},staticRenderFns:[]};var u=i("VU/8")(c,o,!1,function(e){i("FRkJ")},null,null);t.default=u.exports}});
//# sourceMappingURL=30.12589cd9bd20253770bb.js.map