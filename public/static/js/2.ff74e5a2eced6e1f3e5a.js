webpackJsonp([2],{"4McB":function(t,a){},D4zh:function(t,a){},JyS5:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("mvHQ"),n=e.n(i),s=e("fZjL"),o=e.n(s),l=e("Xxa5"),r=e.n(l),c=e("exGp"),p=e.n(c),d=e("Dd8w"),u=e.n(d),m=e("woOf"),_=e.n(m),b=e("PJh5"),f=e.n(b);f.a.locale("id");var v={name:"input-pemasaran",data:function(){return{isLoading:!1,fullscreen:!1,config:{title:"Input Pemasaran",permission:{read:"template-allow-all"}},momentFormat:{stringify:function(t){return t?f()(t).format("YYYY"):""},parse:function(t){return t?f()(t,"YYYY").toDate():null}},searchFilter:"",globalFilter:{},mainData:[],mainForm:{},moduleList:[{id:"AP",label:"Lelang Diikuti",export:"export-excel/template-auction-plans",import:"custom/auction-plans/import-template",queue:"import-auction-plans",permission:"import-auction-plans",dataset:[{id:"li",endpoint:"custom/auction-plans",label:"",type:"component",pk:"rel_project_id",fields:[{data:"rel_project_id",label:"Uraian",isMoney:!1,class:"nowrap-table sl",action:!0},{data:"operation_type",label:"JO/NJO",isMoney:!1,pipe:"uppercase",class:"nowrap-table text-center"},{data:"assignor_institution",label:"Pemberi Tugas",isMoney:!1,class:"nowrap-table"},{data:"owner_category",label:"Kategori Owner",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_income",label:"Perolehan",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_fund",label:"Sumber Dana",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"payment_method",label:"Pembayaran",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"jtts_type",label:"Non JTTS / JTTS",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"auction_type",label:"Sifat Lelang",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"contract_value_exc_ppn",label:"Nilai Kontrak\n(Excld PPN)",isMoney:!0,class:"nowrap-table text-center min-w-150px",pipe:"number"}],monthly:{data:"data_series_months",header:"periode_month",parse:"longMonth",pipe:"number",isMoney:!0,isPercent:!1},total:!0,subtotal:!0}]},{id:"AW",label:"Lelang Menang",export:"export-excel/template-auction-wins",import:"custom/auction-wins/import-template",queue:"import-auction-wins",permission:"import-auction-wins",dataset:[{id:"li",endpoint:"custom/auction-wins",label:"",type:"component",pk:"rel_project_id",fields:[{data:"rel_project_id",label:"Uraian",isMoney:!1,class:"nowrap-table sl",action:!0},{data:"operation_type",label:"JO/NJO",isMoney:!1,pipe:"uppercase",class:"nowrap-table text-center"},{data:"assignor_institution",label:"Pemberi Tugas",isMoney:!1,class:"nowrap-table"},{data:"owner_category",label:"Kategori Owner",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_income",label:"Perolehan",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_fund",label:"Sumber Dana",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"payment_method",label:"Pembayaran",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"jtts_type",label:"Non JTTS / JTTS",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"auction_type",label:"Sifat Lelang",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"contract_value_exc_ppn",label:"Nilai Kontrak\n(Excld PPN)",isMoney:!0,class:"nowrap-table text-center min-w-150px",pipe:"number"}],monthly:{data:"data_series_months",header:"periode_month",parse:"longMonth",pipe:"number",isMoney:!0,isPercent:!1},total:!0,subtotal:!0}]},{id:"RC",label:"Kontrak Baru",export:"export-excel/template-recent-contracts",import:"custom/recent-contracts/import-template",queue:"import-recent-contracts",permission:"import-recent-contracts",dataset:[{id:"li",endpoint:"custom/recent-contracts",label:"",type:"component",pk:"rel_project_id",fields:[{data:"rel_project_id",label:"Uraian",isMoney:!1,class:"nowrap-table sl",action:!0},{data:"operation_type",label:"JO/NJO",isMoney:!1,pipe:"uppercase",class:"nowrap-table text-center"},{data:"assignor_institution",label:"Pemberi Tugas",isMoney:!1,class:"nowrap-table"},{data:"owner_category",label:"Kategori Owner",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_income",label:"Perolehan",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_fund",label:"Sumber Dana",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"payment_method",label:"Pembayaran",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"jtts_type",label:"Non JTTS / JTTS",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"auction_type",label:"Sifat Lelang",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"contract_value_exc_ppn",label:"Nilai Kontrak\n(Excld PPN)",isMoney:!0,class:"nowrap-table text-center min-w-150px",pipe:"number"},{data:"total_pendapatan_on_year",label:"Pendapatan Tahun Ini",isMoney:!0,class:"nowrap-table",pipe:"number"},{data:"prosentase_hpp_on_year",label:"% HPP Tahun Ini",isMoney:!1,class:"nowrap-table",pipe:"suffix|%"},{data:"harga_borongan",label:"Harga Borongan",isMoney:!0,class:"nowrap-table",pipe:"number"}],monthly:{data:"data_series_months",header:"periode_month",parse:"longMonth",pipe:"number",isMoney:!0,isPercent:!1},total:!0,subtotal:!0}]},{id:"PC",label:"Lelang Menang",export:"export-excel/template-previous-contracts",import:"custom/previous-contracts/import-template",queue:"import-previous-contracts",permission:"import-previous-contracts",dataset:[{id:"li",endpoint:"custom/previous-contracts",label:"",type:"component",pk:"rel_project_id",fields:[{data:"rel_project_id",label:"Uraian",isMoney:!1,class:"nowrap-table sl",action:!0},{data:"operation_type",label:"JO/NJO",isMoney:!1,pipe:"uppercase",class:"nowrap-table text-center"},{data:"assignor_institution",label:"Pemberi Tugas",isMoney:!1,class:"nowrap-table"},{data:"owner_category",label:"Kategori Owner",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_income",label:"Perolehan",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"source_of_fund",label:"Sumber Dana",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"payment_method",label:"Pembayaran",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"jtts_type",label:"Non JTTS / JTTS",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"auction_type",label:"Sifat Lelang",isMoney:!1,class:"nowrap-table text-center",pipe:"uppercase"},{data:"contract_value_exc_ppn",label:"Nilai Kontrak\n(Excld PPN)",isMoney:!0,class:"nowrap-table text-center min-w-150px",pipe:"number"},{data:"total_pendapatan_on_year",label:"Pendapatan Tahun Ini",isMoney:!0,class:"nowrap-table",pipe:"number"},{data:"prosentase_hpp_on_year",label:"% HPP Tahun Ini",isMoney:!1,class:"nowrap-table",pipe:"suffix|%"},{data:"harga_borongan",label:"Harga Borongan",isMoney:!0,class:"nowrap-table",pipe:"number"},{data:"pendapatan_year_before",label:"Pendapatan Awal",isMoney:!0,class:"nowrap-table",pipe:"number"},{data:"pendapatan_current_year",label:"Total<br>Kontrak Lama",isMoney:!0,class:"nowrap-table",pipe:"number"}],monthly:{data:"data_series_months",header:"periode_month",parse:"longMonth",pipe:"number",isMoney:!0,isPercent:!1},total:!0,subtotal:!0}]}],moduleDataset:{AP:{division:{disabled:!1,api:"divisions"}},RC:{division:{disabled:!1,api:"divisions"}},PC:{division:{disabled:!1,api:"divisions"}},AW:{division:{disabled:!1,api:"divisions"}}},activeModule:null,datasetList:{division:{disabled:!0,api:null,param:{sort:"ASC",sort_by:"division_id"},option:{label:"division_name",code:"id"},data:[],target:"division_id"},agenda:{disabled:!1,api:null,param:null,option:null,data:[],target:null},scenario:{disabled:!1,api:null,param:null,option:null,data:[{code:"pesimist",label:"Skenario Pesimis"},{code:"moderate",label:"Skenario Moderat"},{code:"optimist",label:"Skenario Optimis"}],target:null}},isUploading:!1,uploadMax:1,uploadLimitExceed:!1,uploadError:null,uploadPercentage:0,tableConfig:[],queueKey:0}},watch:{mainForm:{deep:!0,immediate:!1,handler:function(t){if(t){var a=_()({},this.globalFilter,{agenda_id:t.agenda_id.code,division_id:t.division_id.code,periode_year:f()(f()(t.periode_year,"YYYY").toDate()).format("YYYY-MM-DD"),scenario_input:t.scenario_input.code});this.datasetList.division.disabled&&delete a.division_id,this.globalFilter=_()({},a)}}},activeModule:{deep:!1,immediate:!0,handler:function(t){this.moduleDataset[t]&&(this.$set(this.datasetList,"division",u()({},this.datasetList.division,this.moduleDataset[t].division)),this.getDataset(),this.queueKey++)}}},mounted:function(){var t=this;return p()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.$_sys.togleClass("kt_body","aside-minimize",!0),t.$store.commit("set",["sideNavSecondary",!1]),a.next=4,t.getDataset("AP");case 4:case"end":return a.stop()}},a,t)}))()},methods:{staticDataset:function(){for(var t=[],a=0;a<13;a++){var e=-Math.abs(a);t.push({label:0===a?"RKAP":"Stress Test "+f()().set("date",1).set("month",a-1).format("MMMM"),code:0===a?a:e})}this.$set(this.datasetList.agenda,"data",t),this.$set(this.mainForm,"agenda_id",t[0]),this.$set(this.mainForm,"scenario_input",this.datasetList.scenario.data[1])},getDataset:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return p()(r.a.mark(function e(){var i,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t.mainForm=_()({},{division_id:{label:null,code:null},periode_year:f()().set("date",1).set("month",0).format("YYYY"),agenda_id:{label:null,code:null},scenario_input:{label:null,code:null}}),i=function(a){var e=o()(t.datasetList)[a];t.datasetList[e].api?t.$_api.dataset(t.datasetList[e].api,t.datasetList[e].param).then(function(a){var i=a.data.map(function(a){return{label:a[t.datasetList[e].option.label],code:a[t.datasetList[e].option.code],data:a}});t.$set(t.datasetList[e],"data",i),t.datasetList[e].target&&i.length&&t.$set(t.mainForm,t.datasetList[e].target,i[0])},function(a){t.$_alert.error(a)}):t.$set(t.mainForm,t.datasetList[e].target,{label:null,code:null})},n=0;n<o()(t.datasetList).length;n++)i(n);return e.next=5,t.staticDataset();case 5:a&&(t.activeModule=a);case 6:case"end":return e.stop()}},e,t)}))()},downloadImport:function(){var t=this;this.isLoading=!0;var a=this.moduleList.filter(function(a){return a.id===t.activeModule})[0],e=this.mainForm.division_id.data.division_code;e+="_"+a.id,e+=0===this.globalFilter.agenda_id?"_RKAP":"_ST-"+f()().set("date",1).set("month",Math.abs(this.globalFilter.agenda_id)-1).format("MMM")+"_"+this.mainForm.scenario_input.code,e+="_"+f()(this.globalFilter.periode_year).format("YYYY"),this.$_api.downloadFile(a.export,this.globalFilter,e+".xlsx").then(function(a){t.isLoading=!1},function(a){t.isLoading=!1,t.$_alert.error(a)})},uploadImport:function(t){var a=this;this.uploadPercentage=0,this.uploadError=null;var e=this.moduleList.filter(function(t){return t.id===a.activeModule})[0].import;if((t.target.files[0].size/1e6).toFixed(2)<this.uploadMax){this.isLoading=!0,this.uploadLimitExceed=!1;var i=t.target.files[0],s=new FormData,l=JSON.parse(n()(this.globalFilter));l.scenario_input=0===l.agenda_id?"rkap":l.scenario_input;for(var r=0;r<o()(l).length;r++){var c=o()(l)[r];s.append(c,l[c])}s.append("file",i),this.$_api.uploadFile(e,s,function(t){a.uploadPercentage=Math.round(100*t.loaded/t.total)}).then(function(e){a.isLoading=!1,t.target.value=null,a.$refs["queue-import"].refreshData()}).catch(function(e){a.isLoading=!1,a.uploadError=e.data?e.data.message:e.message,t.target.value=null})}else this.uploadLimitExceed=!0},formatDate:function(t){var a=void 0;switch(t){case"date":case"date-range":a="YYYY-MM-DD";break;case"datetime":case"datetime-range":a="YYYY-MM-DD HH:mm:ss";break;case"year":case"year-range":a="YYYY";break;case"month":case"month-range":a="YYYY-MM-DD";break;case"time":case"time-range":a="HH:mm:ss";break;case"week":case"week-range":a="DD"}return a},getMainData:function(t){var a=this;return p()(r.a.mark(function e(){var i,n,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.mainData=[],a.isLoading=!0,(i=_()({},t)).scenario_input=0===i.agenda_id?"rkap":i.scenario_input,!((n=a.moduleList.filter(function(t){return t.id===a.activeModule})[0]).dataset.length>1)){e.next=16;break}s=r.a.mark(function t(e){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.dataset[e],t.next=3,a.$_api.dataset(s.endpoint,i).then(function(t){t.label=s.label,t.config=s,a.mainData.push(t)},function(t){a.$_alert.error(t)});case 3:case"end":return t.stop()}},t,a)}),o=0;case 8:if(!(o<n.dataset.length)){e.next=13;break}return e.delegateYield(s(o),"t0",10);case 10:o++,e.next=8;break;case 13:a.isLoading=!1,e.next=17;break;case 16:a.$_api.dataset(n.dataset[0].endpoint,i).then(function(t){t.label=n.dataset[0].label,t.config=n.dataset[0],a.mainData.push(t),a.isLoading=!1},function(t){a.isLoading=!1,a.$_alert.error(t)});case 17:case"end":return e.stop()}},e,a)}))()}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container position-relative"},[e("b-overlay",{attrs:{"no-wrap":"",show:t.isLoading,rounded:"sm"}}),t._v(" "),t.moduleList.length>1?e("div",{staticClass:"mb-3"},[t._l(t.moduleList,function(a,i){return[e("button",{key:i+"-modules",staticClass:"btn font-weight-bold font-size-md mr-3 py-4 min-w-150px",class:t.activeModule===a.id?"btn-primary":"btn-link-primary",on:{click:function(e){t.activeModule=a.id}}},[t._v(t._s(a.label))])]})],2):t._e(),t._v(" "),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-4 pr-md-0"},[e("div",{staticClass:"card card-custom card-stretch"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group position-relative col-12 mb-5"},[e("span",{staticClass:"d-block mb-2 font-weight-bolder",attrs:{for:""}},[t._v("Pilih Divisi / AP")]),t._v(" "),e("v-select",{staticClass:"vs-style custom",attrs:{disabled:t.datasetList.division.disabled,clearable:!1,appendToBody:!0,options:t.datasetList.division.data,placeholder:"Pilih salah satu Divisi"},model:{value:t.mainForm.division_id,callback:function(a){t.$set(t.mainForm,"division_id",a)},expression:"mainForm.division_id"}},[t._t("no-options",function(){return[t._v(t._s(t.$t("error.no_data")))]})],2),t._v(" "),e("b-overlay",{attrs:{"no-wrap":"",show:t.activeModule&&t.datasetList.division.disabled,"z-index":9,rounded:"sm",opacity:.95},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"d-flex flex-fill align-items-center justify-content-center font-weight-bold min-w-350px"},[e("i",{staticClass:"ri-lock-line ri-2x font-weight-bold text-danger"}),t._v(" "),e("span",{staticClass:"flex-fill pl-2"},[t._v("Tidak ada Divisi / AP di "+t._s(t.moduleList.filter(function(a){return a.id===t.activeModule})[0].label)+" ")])])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"form-group col-12 mb-0"},[e("span",{staticClass:"d-block mb-2 font-weight-bolder",attrs:{for:""}},[t._v("Tahun")]),t._v(" "),e("date-picker",{attrs:{clearable:!1,"input-attr":{autocomplete:"off"},type:"year","input-class":"form-control custom-dateyears","value-type":t.formatDate("year"),formatter:t.momentFormat},model:{value:t.mainForm.periode_year,callback:function(a){t.$set(t.mainForm,"periode_year",a)},expression:"mainForm.periode_year"}})],1)])])])]),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"card card-custom card-stretch"},[e("div",{staticClass:"card-body py-5 pr-5"},[e("div",{staticClass:"row no-gutters align-items-center"},[e("div",{staticClass:"col p-0"},[e("div",{staticClass:"form-group mb-5"},[e("span",{staticClass:"d-block mb-2 font-weight-bolder",attrs:{for:""}},[t._v("Pilih Agenda Input")]),t._v(" "),e("v-select",{staticClass:"vs-style custom",attrs:{disabled:!1,clearable:!1,appendToBody:!0,options:t.datasetList.agenda.data,placeholder:"Pilih salah satu Agenda"},model:{value:t.mainForm.agenda_id,callback:function(a){t.$set(t.mainForm,"agenda_id",a)},expression:"mainForm.agenda_id"}},[t._t("no-options",function(){return[t._v(t._s(t.$t("error.no_data")))]})],2)],1),t._v(" "),e("div",{staticClass:"form-group position-relative mb-0"},[e("span",{staticClass:"d-block mb-1 font-weight-bolder",attrs:{for:""}},[t._v("Pilih Skenario Input")]),t._v(" "),e("div",{staticClass:"checkbox-inline py-2"},t._l(t.datasetList.scenario.data,function(a,i){return e("label",{key:i+"-form-a",staticClass:"checkbox checkbox-lg checkbox-outline mb-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainForm.scenario_input,expression:"mainForm.scenario_input"}],attrs:{disabled:0===t.globalFilter.agenda_id,type:"radio"},domProps:{value:a,checked:t._q(t.mainForm.scenario_input,a)},on:{change:function(e){return t.$set(t.mainForm,"scenario_input",a)}}}),t._v(" "),e("span"),t._v(t._s(a.label))])}),0),t._v(" "),e("b-overlay",{attrs:{"no-wrap":"",show:0===t.globalFilter.agenda_id,"z-index":9,rounded:"sm",opacity:.95},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"d-flex flex-fill align-items-center justify-content-center font-weight-bold min-w-350px"},[e("i",{staticClass:"ri-lock-line ri-2x font-weight-bold text-danger"}),t._v(" "),e("span",{staticClass:"flex-fill pl-2"},[t._v("Tidak ada Skenario Input di RKAP")])])]},proxy:!0}])})],1)]),t._v(" "),e("div",{staticClass:"download-div ml-5 p-5 position-relative"},[e("span",{staticClass:"d-block mb-2 font-weight-bolder text-primary",attrs:{for:""}},[t._v("Download File Template")]),t._v(" "),e("p",{staticClass:"font-size-sm"},[t._v("File ini memiliki kolom heading sesuai dengan data yang diperlukan untuk mengimport data dengan benar")]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary btn-sm font-weight-bold",on:{click:function(a){return t.downloadImport()}}},[e("i",{staticClass:"ri-download-2-line"}),t._v(" Download Template ")])])])])])])]),t._v(" "),t.activeModule&&t.moduleList.filter(function(a){return a.id===t.activeModule})[0].queue?[e("queue-import",{key:t.queueKey,attrs:{filters:t.globalFilter,API:t.moduleList.filter(function(a){return a.id===t.activeModule})[0].queue},on:{done:function(a){return t.getMainData(t.globalFilter)}}})]:t._e(),t._v(" "),e("div",{staticClass:"position-relative",class:t.fullscreen?"fullscreen-component":"mt-3"},[e("div",{staticClass:"card card-custom"},[e("div",{staticClass:"card-header border-0 p-5",staticStyle:{"min-height":"50px"}},[e("div",{staticClass:"d-flex flex-fill flex-wrap align-items-center justify-content-between"},[e("div",{staticClass:"flex-fill"},[e("h3",{staticClass:"card-title font-weight-bolder text-dark "},[t._v(t._s(t.config.title)+" "),t.moduleList.length>1&&t.activeModule?[t._v(" - "+t._s(t.moduleList.filter(function(a){return a.id===t.activeModule})[0].label))]:t._e()],2)]),t._v(" "),e("div",{staticClass:"d-flex flex-wrap align-items-center"},[e("a",{staticClass:"btn btn-link text-primary mr-1",on:{click:function(a){t.fullscreen=!t.fullscreen}}},[e("i",{staticClass:"text-primary",class:t.fullscreen?"ri-fullscreen-exit-line":"ri-fullscreen-line"}),t._v(" "),e("span",[t._v("Fullscreen")])]),t._v(" "),e("button",{staticClass:"btn btn-primary font-size-sm font-weight-bolder",on:{click:function(a){return t.$refs.inputFile.click()}}},[e("i",{staticClass:"ri-upload-2-line"}),t._v(" Upload File ")]),t._v(" "),e("input",{ref:"inputFile",attrs:{type:"file",hidden:"",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},on:{change:function(a){return t.uploadImport(a)}}})])])]),t._v(" "),e("div",{staticClass:"card-body px-5 pt-0 pb-0"},[e("b-tabs",{attrs:{"content-class":t.mainData.length>1?"mt-3":"mt-0","nav-wrapper-class":t.mainData.length>1?"":"d-none","active-nav-item-class":"active-nav-title font-weight-bolder text-primary"}},t._l(t.mainData,function(a,i){return e("b-tab",{key:i+"-table-data",attrs:{title:a.label,active:""}},[a.data.length?e("div",{staticClass:"table-responsive sticky-table"},[e("table",{staticClass:"table table-head-custom table-bordered table-vertical-cente table-input"},[e("thead",[e("tr",{staticClass:"bg-light-info"},[e("th",{staticClass:"nowrap-table text-center",staticStyle:{color:"#000 !important","vertical-align":"middle !important"}},[t._v("No.")]),t._v(" "),t._l(a.config.fields,function(a,i){return[e("th",{key:i+"-th-data",class:[a.class,"min-w-100px"],staticStyle:{color:"#000 !important","vertical-align":"middle !important"}},[e("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(a.label))])])]}),t._v(" "),a.config.total?e("th",{staticClass:"nowrap-table min-w-150px text-center",staticStyle:{color:"#000 !important","vertical-align":"middle !important"},attrs:{colspan:a.config.monthly.isPercent?2:1}},[e("span",[t._v("Total")])]):t._e(),t._v(" "),t._l(a.data[0][a.config.monthly.data],function(i,n){return e("th",{key:n+"-th-monthly",staticClass:"nowrap-table min-w-150px text-center",class:t.globalFilter.agenda_id===-Math.abs(n+1)?"bg-primary-primary":"",staticStyle:{color:"#000 !important","vertical-align":"middle !important"},attrs:{colspan:a.config.monthly.isPercent?2:1}},[e("span",[t._v(t._s(t._f("parse")(i[a.config.monthly.header],a.config.monthly.parse)))]),t._v(" "),0!==t.globalFilter.agenda_id?e("span",{staticClass:"font-size-xs d-block text-info"},[t._v(" "+t._s(Math.abs(t.globalFilter.agenda_id)>=n+1?"Actual":"Forecast")+" ")]):t._e()])})],2)]),t._v(" "),e("tbody",[t._l(a.data,function(i,n){return[e("tr",{key:"-mock"+n+"-data"},[e("td",{staticClass:"nowrap-table text-center"},[t._v(t._s(n+1))]),t._v(" "),t._l(a.config.fields,function(s,o){return[s.wrap?[0===n||i[s.data]!==a.data[n-1][s.data]||i[a.config.pk]!==a.data[n-1][a.config.pk]?e("td",{key:o+"-th-td-data",class:s.class,attrs:{rowspan:a.data.filter(function(t){return t[a.config.pk]===i[a.config.pk]}).length}},[s.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(i[s.data],s.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(i[s.data],s.pipe)))])]):t._e()]:e("td",{key:o+"-th-td-data",class:s.class},[s.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(i[s.data],s.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(i[s.data],s.pipe)))])])]}),t._v(" "),a.config.total?[a.config.total.wrap?[0===n||i.total!==a.data[n-1].total||i[a.config.pk]!==a.data[n-1][a.config.pk]?e("td",{staticClass:"nowrap-table min-w-150px text-center",attrs:{rowspan:a.data.filter(function(t){return t[a.config.pk]===i[a.config.pk]}).length}},[a.config.monthly.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(i.total,a.config.monthly.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(i.total,a.config.monthly.pipe)))])]):t._e(),t._v(" "),a.config.monthly.isPercent&&0===n||i.total!==a.data[n-1].total||i[a.config.pk]!==a.data[n-1][a.config.pk]?e("td",{staticClass:"nowrap-table text-center",attrs:{rowspan:a.data.filter(function(t){return t[a.config.pk]===i[a.config.pk]}).length}},[e("div",[t._v(t._s(i.total_prosentase)+" %")])]):t._e()]:[e("td",{staticClass:"nowrap-table min-w-150px text-center"},[a.config.monthly.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(i.total,a.config.monthly.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(i.total,a.config.monthly.pipe)))])]),t._v(" "),a.config.monthly.isPercent?e("td",{staticClass:"nowrap-table text-center"},[e("div",[t._v(t._s(i.total_prosentase)+" %")])]):t._e()]]:t._e(),t._v(" "),t._l(a.data[0][a.config.monthly.data],function(n,s){return[e("td",{key:s+"-th-td-monthly-value",staticClass:"nowrap-table min-w-150px text-center",class:t.globalFilter.agenda_id===-Math.abs(s+1)?"bg-primary-primary":""},[a.config.monthly.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(i[a.config.monthly.data][s].value,a.config.monthly.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(i[a.config.monthly.data][s].value,a.config.monthly.pipe)))])]),t._v(" "),a.config.monthly.isPercent?e("td",{key:s+"-th-td-monthly-percent",staticClass:"nowrap-table text-center",class:t.globalFilter.agenda_id===-Math.abs(s+1)?"bg-primary-primary":""},[e("div",[t._v(t._s(i[a.config.monthly.data][s].prosentase)+" %")])]):t._e()]})],2)]})],2),t._v(" "),a.config.subtotal&&a.data_summary?e("tfoot",[e("tr",{staticClass:"bg-light-info"},[e("th",{}),t._v(" "),t._l(a.config.fields,function(a,i){return[e("th",{key:i+"-subtotal-footer",class:[a.class,"min-w-100px text-right"]},[a.class.search("sl")>=0?e("span",{},[t._v("Subtotal")]):t._e()])]}),t._v(" "),a.config.total?e("th",{staticClass:"nowrap-table min-w-150px text-center",attrs:{colspan:a.config.monthly.isPercent?2:1}},[a.config.monthly.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(a.data_summary.total,a.config.monthly.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(a.data_summary.total,a.config.monthly.pipe)))])]):t._e(),t._v(" "),t._l(a.data[0][a.config.monthly.data],function(i,n){return e("th",{key:n+"-tfoot-monthly",staticClass:"nowrap-table min-w-150px text-center",class:t.globalFilter.agenda_id===-Math.abs(n+1)?"bg-primary-primary":"",staticStyle:{color:"#000 !important","vertical-align":"middle !important"},attrs:{colspan:a.config.monthly.isPercent?2:1}},[a.config.monthly.isMoney?e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"pr-3"},[t._v("Rp.")]),t._v(" "),e("span",[t._v(t._s(t._f("parse")(a.data_summary[t.$_sys.numberMonth(t.mainForm.periode_year,n+1)],a.config.monthly.pipe)))])]):e("div",[t._v(t._s(t._f("parse")(a.data_summary[t.$_sys.numberMonth(t.mainForm.periode_year,n+1)],a.config.monthly.pipe)))])])})],2)]):t._e()])]):t._e()])}),1)],1)])])],2)},staticRenderFns:[]};var y=e("VU/8")(v,g,!1,function(t){e("4McB"),e("D4zh")},"data-v-7ed3906e",null);a.default=y.exports}});
//# sourceMappingURL=2.ff74e5a2eced6e1f3e5a.js.map