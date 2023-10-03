webpackJsonp([63],{UmRd:function(t,a){},b6Ah:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("Xxa5"),s=e.n(l),i=e("woOf"),n=e.n(i),r=e("exGp"),d=e.n(r),o={name:"crud-bpjs-kes-bill-details",data:function(){return{mainKey:1,modalData:{},config:{title:"Rincian Iuran BPJS Kesehatan",model_api:null,getter:"bpjs-kes-bill-details",setter:"bpjs-kes-bill-details",pk_field:"employee_id",permission:{create:"create-bpjs-kes-bill-details",read:"view-bpjs-kes-bill-details",update:"update-bpjs-kes-bill-details",delete:"delete-bpjs-kes-bill-details"},custom_api:{list:"custom/bpjs-kes-bill-details/list",create:"custom/bpjs-kes-bill-details"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"bpjs_kes_bill_id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"koperasi_simpan_pinjam_id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"rel_job_position_id",label:"Jabatan",methods:{list:!0,detail:!1,create:!1,update:!1,filter:!1}},{id:"rel_status_employment_id",label:"Status Ketenagakerjaan",methods:{list:!0,detail:!1,create:!1,update:!1,filter:!1}},{id:"status_code",data:"status_code",label:"Status",placeholder:null,methods:{list:{order:!0,class:{not_calculated_yet:"badge badge-danger",calculated:"badge badge-primary"},transform:"calculated"},detail:{order:!0,class:{not_calculated_yet:"badge badge-danger",calculated:"badge badge-primary"},transform:"calculated"},create:!1,update:{view_data:"status_code",type:"radio",value:"calculated",option:{list_pointer:{label:"label",code:"code",list:[{label:"Sudah dihitung",code:"calculated"},{label:"Belum dihitung",code:"not_calculated_yet"}]}}},filter:{view_data:"status_code",type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Sudah dihitung",code:"calculated"},{label:"Belum dihitung",code:"not_calculated_yet"}]}}}}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:{type:"textarea"}}},{id:"upah_value",label:"Upah Tenaga Kerja",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"iuran_company_value",label:"Total Iuran Perusahaan",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"iuran_employee_value",label:"Total Iuran Tenaga Kerja",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"iuran_tambahan_value",label:"Total Iuran Tambahan",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"total_iuran_value",label:"Total",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"employee_id",label:"Nama Tenaga Kerja",methods:{list:{view_data:"rel_employee_id"},create:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}},update:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}},filter:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}}}}]}}},watch:{mainKey:{immediate:!1,deep:!1,handler:function(t){this.$refs["sub-module"].$children[2].getData()}}},methods:{openModal:function(t,a){var e=this;return d()(s.a.mark(function l(){var i;return s.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.getDetail("custom/bpjs-kes-bill-details/show",{id:a.rowData.id});case 2:l.t0=l.sent,i={detail:l.t0},e.modalData=n()({},i,a.rowData),e.$nextTick().then(function(a){e.$bvModal.show(t)});case 6:case"end":return l.stop()}},l,e)}))()},getDetail:function(t,a){var e=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.$_api.get(t,a).then(function(t){return l&&t.data[l]||t.data}).catch(function(t){e.$_alert.error(t)})},submitData:function(t){var a=this;this.$_api.post("custom/bpjs-kes-bill-details/calculate",this.modalData.detail).then(function(t){a.mainKey++,a.$_alert.success(null,"Detail Rincian berhasil diperbarui"),a.$set(a.modalData,"detail",t.data)}).catch(function(t){a.$_alert.error(t)})}}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tas-base-crud",{ref:"sub-module",attrs:{config:t.config,"hide-update":"","hide-detail":""},scopedSlots:t._u([{key:"list-table-action",fn:function(a){return[e("a",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.openModal("modal-rincian-bills",a)}}},[t._v("Detail Rincian ")])]}},{key:"list-header",fn:function(){return[t.modalData?e("b-modal",{attrs:{"header-class":"pb-1",id:"modal-rincian-bills","hide-footer":"",size:"xl"},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between flex-fill"},[e("div",{staticClass:"d-flex flex-column flex-fill"},[e("div",{staticClass:"text-center mb-5"},[e("h5",{staticClass:"mb-1 font-weight-bold"},[t._v("Detail Rincian Iuran BPJS Kesehatan")]),t._v(" "),e("span",{staticClass:"font-weight-bolder"},[t._v("Periode "+t._s(t._f("parse")(t.modalData.detail.periode_month,"period")))])]),t._v(" "),e("table",{staticClass:"table no-border mb-0"},[e("tr",[e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Tenaga Kerja")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t.modalData.rel_employee_id))]),t._v(" "),e("td",{}),t._v(" "),e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Upah Tenaga Kerja")]),t._v(" "),e("th",{staticClass:"pt-0 pr-0 nowrap-table"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"mr-4"},[t._v(": Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(t.modalData.detail.upah_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Jabatan")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t.modalData.detail.rel_job_position_id))]),t._v(" "),e("td",{}),t._v(" "),e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Total Iuran Tambahan")]),t._v(" "),e("th",{staticClass:"pt-0 pr-0 nowrap-table"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"mr-4"},[t._v(": Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(t.modalData.detail.iuran_tambahan_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Status Ketenagakerjaan")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t.modalData.detail.rel_status_employment_id))]),t._v(" "),e("td",{}),t._v(" "),e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Total Iuran Perusahaan")]),t._v(" "),e("th",{staticClass:"pt-0 pr-0 nowrap-table"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"mr-4"},[t._v(": Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(t.modalData.detail.iuran_company_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"3"}}),t._v(" "),e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Total Iuran Tenaga Kerja")]),t._v(" "),e("th",{staticClass:"pt-0 pr-0 nowrap-table"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"mr-4"},[t._v(": Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(t.modalData.detail.iuran_employee_value||0,"number")))])])])])])])])]},proxy:!0}],null,!1,1633987882)},[t._v(" "),e("div",{staticClass:"row"},[t.modalData.detail?e("div",{staticClass:"col-12"},[e("h5",{staticClass:"mb-4"},[t._v("Detail Rincian Iuran BPJS Kesehatan")]),t._v(" "),e("table",{staticClass:"table table-custom-header v-center table-bordered"},[e("tbody",[e("tr",[e("td",{staticClass:"font-weight-bolder bg-light-primary text-uppercase",attrs:{colspan:"4"}},[t._v("Upah Tenaga Kerja")])]),t._v(" "),e("tr",[e("th",[t._v("Nama Komponen")]),t._v(" "),e("th",{staticClass:"nowrap-table"},[t._v("Koefisien")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Dasar")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Komponen")])]),t._v(" "),t._l(t.modalData.detail.child_data_bpjs_kes_bill_detail_upah_components,function(a,l){return e("tr",{key:l+"-komponen-iuran"},[e("td",[t._v(t._s(a.rel_salary_component_id))]),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:null,groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:0}}},model:{value:a.koefisien,callback:function(e){t.$set(a,"koefisien",e)},expression:"k.koefisien"}})],1),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:"Rp. ",groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:2}}},model:{value:a.default_value,callback:function(e){t.$set(a,"default_value",e)},expression:"k.default_value"}})],1),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.koefisien*a.default_value||0,"number")))])])])])}),t._v(" "),e("tr",[e("th",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("Upah Tenaga Kerja")]),t._v(" "),e("th",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(t.modalData.detail.child_data_bpjs_kes_bill_detail_upah_components.map(function(t){return t.koefisien*t.default_value}).reduce(function(t,a){return t+a},0)||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"font-weight-bolder bg-light-primary text-uppercase",attrs:{colspan:"4"}},[t._v("Iuran Tambahan")])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Nama Anggota Keluarga")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Iuran")])]),t._v(" "),t.modalData.detail.child_data_bpjs_kes_bill_detail_tambahan.length?t._l(t.modalData.detail.child_data_bpjs_kes_bill_detail_tambahan,function(a,l){return e("tr",{key:l+"-komponen-tambahan"},[e("td",{attrs:{colspan:"3"}},[t._v(t._s(a.rel_employee_family_id))]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(Number(a.iuran_value)||0,"number")))])])])])}):[e("td",{staticClass:"text-center bg-light-danger",attrs:{colspan:"4"}},[t._v(" Data Keluarga tidak ditemukan. "),e("span",{staticClass:"text-info font-weight-bold pointer",on:{click:function(a){t.$router.push({name:"tenaga-kerja",query:{view:"detail",id:t.modalData.employee_id}}).catch(function(t){return t})}}},[t._v("Klik disini")]),t._v(" untuk menambahkan anggota keluarga ")])],t._v(" "),e("tr",[e("th",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("Total Iuran Tambahan")]),t._v(" "),e("th",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(t.modalData.detail.child_data_bpjs_kes_bill_detail_tambahan.map(function(t){return Number(t.iuran_value)}).reduce(function(t,a){return t+a},0)||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"font-weight-bolder bg-light-primary text-uppercase",attrs:{colspan:"4"}},[t._v("Premi BPJS Kesehatan - "+t._s(t._f("parse")(t.modalData.detail.periode_month,"period"))+" ")])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Premi Perusahaan (%)")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t._f("parse")(t.modalData.detail.data_premi.prosen_premi_company,"prosen")))])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Premi Tenaga Kerja (%)")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t._f("parse")(t.modalData.detail.data_premi.prosen_premi_employee,"prosen")))])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Upah Minimal")]),t._v(" "),e("th",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(Number(t.modalData.detail.data_premi.upah_min_value)||0,"number")))])])])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Upah Maksimal")]),t._v(" "),e("th",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bolder"},[t._v(t._s(t._f("parse")(Number(t.modalData.detail.data_premi.upah_max_value)||0,"number")))])])])])],2)]),t._v(" "),e("div",{staticClass:"form-group mb-3 mt-0"},[e("label",[t._v("Deskripsi Rincian Iuran BPJS Kesehatan")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.modalData.detail.description,expression:"modalData.detail.description"}],staticClass:"form-control",attrs:{rows:"4",placeholder:"Deskripsi / note Rincian iuran simpan pinjam"},domProps:{value:t.modalData.detail.description},on:{input:function(a){a.target.composing||t.$set(t.modalData.detail,"description",a.target.value)}}})])]):t._e()]),t._v(" "),e("div",{staticClass:"mt-5"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block font-size-md",on:{click:function(a){return t.submitData("modal-rincian-bills")}}},[t._v("Perbarui & Simpan")])])]):t._e()]},proxy:!0}])})},staticRenderFns:[]};var _=e("VU/8")(o,p,!1,function(t){e("UmRd")},"data-v-21b16d21",null);a.default=_.exports}});
//# sourceMappingURL=63.451135c3b5866f63ee22.js.map