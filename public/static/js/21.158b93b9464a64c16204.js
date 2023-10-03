webpackJsonp([21],{"2epO":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Gu7T"),s=a.n(i),o=a("woOf"),n=a.n(o),l=a("mvHQ"),r=a.n(l),d=a("Xxa5"),p=a.n(d),m=a("exGp"),c=a.n(m),_=a("PJh5"),u=a.n(_);u.a.locale("id");var h={name:"crud-payroll-periodes",data:function(){return{mainKey:1,isAlertShow:!1,isCheckedAll:!1,activeEmployee:!1,isLoadingEmployee:!1,datasets:{job_position_id:[],status_employment_id:[]},firstForm:{periode_month:null,start_date:null,end_date:null,child_data_employee_on_periodes:[]},employeeList:{page:1,search:"",limit:10,total:0,totalPage:0,data:[]},dateFormat:{stringify:function(e){return e?u()(e).format("DD MMMM YYYY"):null},parse:function(e){return e?u()(e,"DD MMMM YYYY").toDate():null}},momentFormat:{stringify:function(e){return e?u()(e).format("MMMM YYYY"):null},parse:function(e){return e?u()(e,"MMMM YYYY").toDate():null}},config:{title:"Periode Penggajian",model_api:"payroll-periodes",getter:"payroll-periodes",setter:"payroll-periodes",pk_field:null,permission:{create:"create-payroll-periodes",read:"view-payroll-periodes",update:"update-payroll-periodes",delete:"delete-payroll-periodes"},slave:[{name:"Rincian",permission:"view-employee-on-periodes",module:"payroll/payroll-periodes-details",as_param:"periode_month",key_field:"periode_month"}],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:!1,detail:!1,list:!1}},{id:"periode_month",label:"Periode",methods:{create:!1,update:!1,list:{transform:"period"},detail:{transform:"period"}}},{id:"start_date",label:"Tanggal Awal Pencatatan",methods:{create:!1,update:{type:"date"},list:{transform:"longDate"},detail:{transform:"longDate"}}},{id:"end_date",label:"Tanggal Akhir Pencatatan",methods:{create:!1,update:{type:"date"},list:{transform:"longDate"},detail:{transform:"longDate"}}},{id:"count_day_of_work",label:"Jumlah Hari Kerja",methods:{create:!1,update:!1,list:{transform:"number"},detail:{transform:"number"}}}]}}},watch:{"employeeList.page":{deep:!1,immediate:!1,handler:function(e){this.getEmployeeList(e)}},activeEmployee:{deep:!1,immediate:!1,handler:function(e){this.$set(this.firstForm,"child_data_employee_on_periodes",[]),this.getEmployeeList(1)}},"employeeList.search":{deep:!1,immediate:!1,handler:function(e){this.getEmployeeList(1)}}},computed:{canGenerate:function(){return this.firstForm.periode_month&&this.firstForm.start_date&&this.firstForm.end_date&&this.firstForm.child_data_employee_on_periodes.length}},mounted:function(){var e=this;return c()(p.a.mark(function t(){var a,i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.getThisMonth(),t.next=3,e.getDatasets("job-positions",null,null);case 3:return a=t.sent,t.next=6,e.getDatasets("custom/master-status-employments",null,null);case 6:i=t.sent,e.$set(e.datasets,"job_position_id",a.map(function(e){return{label:e.job_position_name,code:e.id}})),e.$set(e.datasets,"status_employment_id",i.map(function(e){return{label:e.name,code:e.id}})),e.getEmployeeList();case 10:case"end":return t.stop()}},t,e)}))()},methods:{checkAllEmployee:function(){var e=JSON.parse(r()(this.employeeList.data)),t=this.firstForm.child_data_employee_on_periodes.map(function(e){return Number(e.employee_id)}),a=(e=e.filter(function(e){return!t.includes(Number(e.id))})).map(function(e){return{employee_id:e.id,job_position_id:e.job_position_id,status_employment_id:e.status_employment_id,is_mpp:e.is_mpp,is_plt:e.is_plt}}),i=this.firstForm.child_data_employee_on_periodes.concat(a);this.$set(this.firstForm,"child_data_employee_on_periodes",i)},redirect:function(e){this.$router.push({name:e,query:{view:"list"}}).catch(function(e){return e})},getThisMonth:function(){var e=this,t={periode_month:u()(new Date).set("date",1).format("YYYY-MM-DD")};this.$_api.list(this.config.setter,t).then(function(t){e.isAlertShow=!t.data.length}).catch(function(t){e.$_alert.error(t)})},getEmployeeList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoadingEmployee=!0;var a={page:t,search:this.employeeList.search||null,limit:this.employeeList.limit};this.activeEmployee&&(a.status_code="active"),this.$_api.list("employees",a).then(function(t){var i={page:a.page,search:a.search,total:t.total,limit:e.employeeList.limit,totalPage:t.totalPage,data:t.data};e.employeeList=n()({},i),e.isLoadingEmployee=!1}).catch(function(t){e.isLoadingEmployee=!1,e.$_alert.error(t)})},getDatasets:function(e,t){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.$_api.dataset(e,t).then(function(e){return i&&e.data[i]||e.data}).catch(function(e){a.$_alert.error(e)})},changeTempEmployee:function(e){var t=this.employeeList.data.map(function(e){return{employee_id:e.id,job_position_id:e.job_position_id,status_employment_id:e.status_employment_id,is_mpp:e.is_mpp,is_plt:e.is_plt}}),a=this.firstForm.child_data_employee_on_periodes;e?this.$set(this.firstForm,"child_data_employee_on_periodes",[].concat(s()(a),s()(t))):this.$set(this.firstForm,"child_data_employee_on_periodes",a.filter(function(e){return!t.map(function(e){return e.employee_id}).includes(e.employee_id)}))},changeValueEmployee:function(e){var t=this.firstForm.child_data_employee_on_periodes.findIndex(function(t){return t.employee_id===e.id});if(t>-1){var a={employee_id:e.id,job_position_id:e.job_position_id,status_employment_id:e.status_employment_id,is_mpp:e.is_mpp,is_plt:e.is_plt};this.$set(this.firstForm.child_data_employee_on_periodes,t,a)}},generateMonth:function(){var e=this,t=this.firstForm;t.periode_month=u()(u()(this.firstForm.periode_month,"MMMM YYYY").toDate()).format("YYYY-MM-DD"),t.start_date=u()(u()(this.firstForm.start_date,"DD MMMM YYYY").toDate()).format("YYYY-MM-DD"),t.end_date=u()(u()(this.firstForm.end_date,"DD MMMM YYYY").toDate()).format("YYYY-MM-DD"),this.$_api.post("custom/payroll-periodes/create-with-employee-on-periodes",t).then(function(t){e.$children[0].getEvent("detail",t.data),e.isAlertShow=!1,e.$set(e.firstForm,"periode_month",null),e.$_alert.success(null,e.config.title+" berhasil dibuat")}).catch(function(t){e.$_alert.error(t)})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tas-base-crud",{key:e.mainKey,attrs:{config:e.config,"hide-create":"","hide-detail":""},scopedSlots:e._u([{key:"list-action",fn:function(){return[e.$_sys.isAllowed(e.config.permission.create)?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-create-simpan-pinjam",modifiers:{"modal-create-simpan-pinjam":!0}}],staticClass:"btn btn-primary btn-icon btn-circle ml-3"},[a("i",{staticClass:"ri-add-line p-0"})]):e._e(),e._v(" "),a("b-modal",{attrs:{id:"modal-create-simpan-pinjam","hide-footer":"","no-close-on-backdrop":"",centered:"",size:"xl",title:"Tambah Periode Penggajian"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-group col-4 mb-0"},[a("span",[e._v("Periode "),a("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),a("s-input",{attrs:{item:{type:"month",validation:[],placeholder:"Pilih Periode Penggajian",api:"",nm:!0,formatter:e.momentFormat,ic:"w-100 mt-2"}},model:{value:e.firstForm.periode_month,callback:function(t){e.$set(e.firstForm,"periode_month",t)},expression:"firstForm.periode_month"}})],1),e._v(" "),a("div",{staticClass:"form-group col-4 mb-0"},[a("span",[e._v("Tanggal Awal Pencatatan "),a("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),a("s-input",{attrs:{item:{type:"date",validation:[],placeholder:"Pilih Tanggal Awal Pencatatan",api:"",nm:!0,formatter:e.dateFormat,ic:"w-100 mt-2"}},model:{value:e.firstForm.start_date,callback:function(t){e.$set(e.firstForm,"start_date",t)},expression:"firstForm.start_date"}})],1),e._v(" "),a("div",{staticClass:"form-group col-4 mb-0"},[a("span",[e._v("Tanggal Akhir Pencatatan "),a("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),a("s-input",{attrs:{item:{type:"date",validation:[],placeholder:"Pilih Tanggal Akhir Pencatatan",api:"",nm:!0,formatter:e.dateFormat,ic:"w-100 mt-2"}},model:{value:e.firstForm.end_date,callback:function(t){e.$set(e.firstForm,"end_date",t)},expression:"firstForm.end_date"}})],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"mb-5"},[a("div",{staticClass:"mb-5"},[a("h5",{staticClass:"mb-0"},[e._v("Tenaga Kerja")]),e._v(" "),a("span",{staticClass:"text-muted font-size-sm"},[e._v("Sesuaikan Tenaga Kerja yang terdaftar pada periode terpilih")])]),e._v(" "),a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.employeeList.search,expression:"employeeList.search",modifiers:{lazy:!0}}],staticClass:"form-control max-w-350px mr-5",attrs:{type:"text",name:"search",placeholder:"Cari Nama / NIP (Nomor Induk Pegawai) Tenaga Kerja"},domProps:{value:e.employeeList.search},on:{change:function(t){return e.$set(e.employeeList,"search",t.target.value)}}}),e._v(" "),a("label",{staticClass:"radio justify-content-start"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeEmployee,expression:"activeEmployee"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.activeEmployee,!1)},on:{change:function(t){e.activeEmployee=!1}}}),e._v(" "),a("span",{staticClass:"mr-1"}),e._v(" Tampilkan Semua ")]),e._v(" "),a("label",{staticClass:"radio justify-content-start ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeEmployee,expression:"activeEmployee"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.activeEmployee,!0)},on:{change:function(t){e.activeEmployee=!0}}}),e._v(" "),a("span",{staticClass:"mr-1"}),e._v(" Hanya Tampilkan yang Aktif ")])])]),e._v(" "),e.employeeList.data.length?[a("b-overlay",{attrs:{show:e.isLoadingEmployee,opacity:.9}},[a("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg"},[a("thead",[a("tr",[a("th",[a("a",{staticClass:"btn btn-sm btn-primary mr-5",on:{click:function(t){return e.checkAllEmployee()}}},[e._v("Pilih semua di Halaman ini")])]),e._v(" "),a("th",[e._v("Jabatan")]),e._v(" "),a("th",[e._v("Status Ketenagakerjaan")]),e._v(" "),a("th",{staticClass:"text-center"},[e._v("MPP")]),e._v(" "),a("th",{staticClass:"text-center"},[e._v("PLT")])])]),e._v(" "),a("tbody",e._l(e.employeeList.data,function(t,i){return a("tr",{key:i+"-data-employee"},[a("td",[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstForm.child_data_employee_on_periodes,expression:"firstForm.child_data_employee_on_periodes"}],attrs:{type:"checkbox"},domProps:{value:{employee_id:t.id,job_position_id:t.job_position_id,status_employment_id:t.status_employment_id,is_mpp:t.is_mpp,is_plt:t.is_plt},checked:Array.isArray(e.firstForm.child_data_employee_on_periodes)?e._i(e.firstForm.child_data_employee_on_periodes,{employee_id:t.id,job_position_id:t.job_position_id,status_employment_id:t.status_employment_id,is_mpp:t.is_mpp,is_plt:t.is_plt})>-1:e.firstForm.child_data_employee_on_periodes},on:{change:function(a){var i=e.firstForm.child_data_employee_on_periodes,s=a.target,o=!!s.checked;if(Array.isArray(i)){var n={employee_id:t.id,job_position_id:t.job_position_id,status_employment_id:t.status_employment_id,is_mpp:t.is_mpp,is_plt:t.is_plt},l=e._i(i,n);s.checked?l<0&&e.$set(e.firstForm,"child_data_employee_on_periodes",i.concat([n])):l>-1&&e.$set(e.firstForm,"child_data_employee_on_periodes",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.firstForm,"child_data_employee_on_periodes",o)}}}),e._v(" "),a("span",{staticClass:"mr-3"}),e._v(" "),a("div",{staticClass:" d-flex justify-content-between align-items-center flex-fill"},[a("div",{staticClass:"text-line-2 max-w-200px"},[e._v(" "+e._s(t.fullname)+" "),a("span",{staticClass:"d-block font-size-sm"},[e._v("NIP (Nomor Induk Pegawai): "+e._s(t.nip))])]),e._v(" "),e.activeEmployee?e._e():a("span",{staticClass:"label label-inline font-weight-bold mr-2",class:"active"===t.status_code?"label-success":"label-danger"},[e._v(e._s(e._f("parse")(t.status_code,"status_code")))])])])]),e._v(" "),a("td",[e.datasets.job_position_id.length?a("s-input",{attrs:{item:{attr:[{clearable:!1}],type:"select",validation:[],placeholder:"Pilih Jabatan",api:"",nm:!0,notAppendToBody:!0,optionList:e.datasets.job_position_id,ic:"w-100 mt-2"}},on:{input:function(a){return e.changeValueEmployee(t)}},model:{value:t.job_position_id,callback:function(a){e.$set(t,"job_position_id",a)},expression:"e.job_position_id"}}):e._e()],1),e._v(" "),a("td",[e.datasets.status_employment_id.length?a("s-input",{attrs:{item:{attr:[{clearable:!1}],type:"select",validation:[],placeholder:"Pilih Status Ketenagakerjaan",api:"",nm:!0,notAppendToBody:!0,optionList:e.datasets.status_employment_id,ic:"w-100 mt-2"}},on:{input:function(a){return e.changeValueEmployee(t)}},model:{value:t.status_employment_id,callback:function(a){e.$set(t,"status_employment_id",a)},expression:"e.status_employment_id"}}):e._e()],1),e._v(" "),a("td",[a("label",{staticClass:"checkbox justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.is_mpp,expression:"e.is_mpp"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_mpp)?e._i(t.is_mpp,null)>-1:t.is_mpp},on:{change:[function(a){var i=t.is_mpp,s=a.target,o=!!s.checked;if(Array.isArray(i)){var n=e._i(i,null);s.checked?n<0&&e.$set(t,"is_mpp",i.concat([null])):n>-1&&e.$set(t,"is_mpp",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(t,"is_mpp",o)},function(a){return e.changeValueEmployee(t)}]}}),e._v(" "),a("span")])]),e._v(" "),a("td",[a("label",{staticClass:"checkbox justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.is_plt,expression:"e.is_plt"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_plt)?e._i(t.is_plt,null)>-1:t.is_plt},on:{change:[function(a){var i=t.is_plt,s=a.target,o=!!s.checked;if(Array.isArray(i)){var n=e._i(i,null);s.checked?n<0&&e.$set(t,"is_plt",i.concat([null])):n>-1&&e.$set(t,"is_plt",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(t,"is_plt",o)},function(a){return e.changeValueEmployee(t)}]}}),e._v(" "),a("span")])])])}),0)]),e._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("b-pagination",{staticClass:"mb-0",attrs:{size:"md","prev-text":"Sebelumnya","next-text":"Selanjutnya","hide-goto-end-buttons":"","total-rows":e.employeeList.total,"per-page":e.employeeList.limit},model:{value:e.employeeList.page,callback:function(t){e.$set(e.employeeList,"page",t)},expression:"employeeList.page"}}),e._v(" "),a("span",[e._v(" "+e._s(e.firstForm.child_data_employee_on_periodes.length)+" dari "+e._s(e._f("parse")(e.employeeList.total||0,"number"))+" Tenaga Kerja Terpilih ")])],1)])]:e._e(),e._v(" "),a("div",{staticClass:"text-right mt-5"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.canGenerate},on:{click:function(t){return e.generateMonth()}}},[e._v(" Buat "+e._s(e.config.title)+" ")])])],2)]},proxy:!0},{key:"list-table-action",fn:function(t){return[a("a",{staticClass:"btn btn-info btn-sm",on:{click:function(a){return e.$children[0].getEvent("detail",t.rowData)}}},[e._v(" Lihat Detail Simpan Pinjam ")])]}},{key:"header-table",fn:function(){return[a("div",{staticClass:"card-body py-0"},[e.isAlertShow?a("div",{staticClass:"alert alert-custom alert-light-danger p-2 mb-0",attrs:{role:"alert"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-danger svg-icon-xl"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("rect",{attrs:{x:"0",y:"0",width:"24",height:"24"}}),e._v(" "),a("path",{attrs:{d:"M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z",fill:"#000000",opacity:"0.3"}}),e._v(" "),a("rect",{attrs:{fill:"#000000",x:"11",y:"9",width:"2",height:"7",rx:"1"}}),e._v(" "),a("rect",{attrs:{fill:"#000000",x:"11",y:"17",width:"2",height:"2",rx:"1"}})])])])]),e._v(" "),a("div",{staticClass:"alert-text"},[e._v("Data "+e._s(e.config.title)+" pada bulan ini belum dibuat!")])]):e._e()])]},proxy:!0}])})},staticRenderFns:[]},f=a("VU/8")(h,y,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=21.158b93b9464a64c16204.js.map