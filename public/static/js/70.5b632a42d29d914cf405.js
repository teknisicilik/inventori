webpackJsonp([70],{xeJH:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),l=e("Xxa5"),n=e.n(l),r=e("woOf"),o=e.n(r),d=e("exGp"),p=e.n(d),_={name:"crud-tunjangan-lembur-details",data:function(){return{detailTabs:[{name:"Komponen Perhitungan",point:"child_data_tunjangan_lembur_upah_components"},{name:"Data Lembur Hari Kerja",point:"child_data_tunjangan_lembur_hari_kerja"},{name:"Data Lembur Hari Libur",point:"child_data_tunjangan_lembur_hari_libur"},{name:"Uang Makan & Transport",point:"child_data_tunjangan_lembur_subsidiary"}],modalData:{},mainKey:0,config:{title:"Data Tunjangan Lembur",model_api:null,getter:"custom/tunjangan-lembur-details",setter:"tunjangan-lembur-details",pk_field:"name",filter_api:{},custom_api:{create:"custom/tunjangan-lembur-details"},permission:{create:"create-tunjangan-lembur-details",read:"view-tunjangan-lembur-details",update:"update-tunjangan-lembur-details",delete:"delete-tunjangan-lembur-details"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"status_code",label:"Status",methods:{list:{order:!0,class:{not_calculated_yet:"badge badge-danger",calculated:"badge badge-primary"},transform:"calculated"},detail:{order:!0,class:{not_calculated_yet:"badge badge-danger",calculated:"badge badge-primary"},transform:"calculated"},create:!1,update:{view_data:"status_code",type:"radio",value:"calculated",option:{list_pointer:{label:"label",code:"code",list:[{label:"Sudah dihitung",code:"calculated"},{label:"Belum dihitung",code:"not_calculated_yet"}]}}},filter:{view_data:"status_code",type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Sudah dihitung",code:"calculated"},{label:"Belum dihitung",code:"not_calculated_yet"}]}}}}},{id:"employee_id",label:"Nama Tenaga Kerja",methods:{list:{view_data:"rel_employee_id"},create:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}},update:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}},filter:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}}}},{id:"job_position_id",label:"Jabatan",methods:{list:{view_data:"rel_job_position_id"},create:!1,update:{setter:"job-positions",getter:"job-positions",type:"lookup-radio",option:{list_pointer:{label:"job_position_name",code:"id",display:["job_position_name"]}}},filter:{setter:"job-positions",getter:"job-positions",type:"lookup-radio",option:{list_pointer:{label:"job_position_name",code:"id",display:["job_position_name"]}}}}},{id:"status_employment_id",label:"Status Ketenagakerjaan",methods:{list:{view_data:"rel_status_employment_id",show:!1},create:!1,update:{setter:"custom/master-status-employments",getter:"custom/master-status-employments",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]},get_param:[{id:"job_position_id"}]}},filter:{setter:"custom/master-status-employments",getter:"custom/master-status-employments",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]},get_param:[{id:"job_position_id"}]}}}},{id:"penerimaan_value",label:"Penerimaan",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"upah_lembur_perjam_value",label:"Upah Lembur/Jam",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:{type:"textarea"}}}]}}},watch:{mainKey:{immediate:!1,deep:!1,handler:function(t){try{this.$refs["sub-module"].$children[1].getData()}catch(t){this.$refs["sub-module"].$children[2].getData()}}}},methods:{openModal:function(t,a){var e=this;return p()(n.a.mark(function s(){var i;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.getDetail("get","custom/tunjangan-lembur-details/show",{id:a.rowData.id});case 2:s.t0=s.sent,i={detail:s.t0},e.modalData=o()({},i,a.rowData),e.$nextTick().then(function(a){e.$bvModal.show(t)});case 6:case"end":return s.stop()}},s,e)}))()},getDetail:function(t,a,e){var s=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return this.$_api[t](a,e).then(function(t){return i&&t.data[i]||t.data}).catch(function(t){s.$_alert.error(t)})},copyValue:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.$set(this.modalData,"detail",i()({},this.modalData.detail,this.modalData.sync.data_recaps))},submitData:function(){var t=this,a=this.config.getter+"/calculate";this.$_api.post(a,this.modalData.detail).then(function(a){t.$_alert.success(null,"Detail Rincian berhasil diperbarui"),t.$set(t.modalData,"detail",a.data),t.mainKey++}).catch(function(a){t.$_alert.error(a)})}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tas-base-crud",{ref:"sub-module",attrs:{config:t.config,"hide-update":"","hide-filter":"","hide-detail":""},scopedSlots:t._u([{key:"list-table-action",fn:function(a){return[e("a",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.openModal("modal-rincian-lembur",a)}}},[t._v("Lihat Detail")])]}},{key:"list-header",fn:function(){return[t.modalData.detail?e("b-modal",{attrs:{"header-class":"pb-1",id:"modal-rincian-lembur","hide-footer":"",size:"xl"},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between flex-fill"},[e("div",{staticClass:"d-flex flex-column flex-fill"},[e("div",{staticClass:"text-center mb-5"},[e("h5",{staticClass:"mb-1 font-weight-bold"},[t._v("Detail "+t._s(t.config.title))]),t._v(" "),e("span",{staticClass:"font-weight-bolder"},[t._v("Periode "+t._s(t._f("parse")(t.modalData.detail.periode_month,"period")))])]),t._v(" "),e("table",{staticClass:"table no-border mb-0"},[e("tr",[e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Tenaga Kerja")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t.modalData.rel_employee_id))]),t._v(" "),e("td",{}),t._v(" "),e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Jabatan")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t.modalData.detail.rel_job_position_id))])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("MPP")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t._f("parse")(t.modalData.detail.is_mpp,"ynBool")))]),t._v(" "),e("td",{}),t._v(" "),e("td",{staticClass:"pt-0 pl-0 nowrap-table"},[t._v("Status Ketenagakerjaan")]),t._v(" "),e("td",{staticClass:"pt-0 pr-0 nowrap-table"},[t._v(": "+t._s(t.modalData.detail.rel_status_employment_id))])])])])])]},proxy:!0}],null,!1,3986434827)},[t._v(" "),t.modalData.detail?[e("b-tabs",[e("b-tab",{attrs:{title:"Penerimaan Tunjangan",active:""}},[e("div",{staticClass:"row py-5"},[e("div",{staticClass:"col-md-6 d-flex justify-content-between flex-column"},[e("table",{staticClass:"table no-border"},[e("tr",[e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v("Uang Makan & Transport")]),t._v(" "),e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{staticClass:"pt-1 "},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail[t.detailTabs[3].point].map(function(t){return t.component_value}).reduce(function(t,a){return t+a},0),"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v("Uang Lembur Hari Kerja ("+t._s(t._f("parse")(t.modalData.detail[t.detailTabs[1].point].map(function(t){return t.jam_lembur_count}).reduce(function(t,a){return t+a},0),"number"))+" Jam)")]),t._v(" "),e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{staticClass:"pt-1 "},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail[t.detailTabs[1].point].map(function(t){return t.penerimaan_value}).reduce(function(t,a){return t+a},0),"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v("Uang Lembur Hari Libur ("+t._s(t._f("parse")(t.modalData.detail[t.detailTabs[2].point].map(function(t){return t.jam_lembur_count}).reduce(function(t,a){return t+a},0),"number"))+" Jam)")]),t._v(" "),e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{staticClass:"pt-1 "},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail[t.detailTabs[2].point].map(function(t){return t.penerimaan_value}).reduce(function(t,a){return t+a},0),"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pl-0 nowrap-table",staticStyle:{"border-top":"2px solid #000"}},[t._v("Penerimaan Tunjangan Lembur")]),t._v(" "),e("td",{staticClass:"pl-0 nowrap-table",staticStyle:{"border-top":"2px solid #000"}},[t._v(":")]),t._v(" "),e("th",{staticStyle:{"border-top":"2px solid #000"}},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail.penerimaan_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pl-0 nowrap-table"},[t._v("Pembulatan")]),t._v(" "),e("td",{staticClass:"pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail.pembulatan_penerimaan_value||0,"number")))])])])])]),t._v(" "),e("div",{staticClass:"mt-5"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block font-size-md",on:{click:function(a){return t.submitData("modal-rincian-lembur")}}},[t._v("Perbarui & Simpan")])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"alert alert-custom alert-default mb-0",attrs:{role:"alert"}},[e("div",{staticClass:"alert-text"},[e("h5",{staticClass:"alert-heading"},[t._v("Dasar perhitungan uang lembur")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Keputusan Mentri Tenaga Kerja dan Transmigrasi Republik Indonesia nomor KEP.102/MEN/VI/2004 tentang waktu kerja lembur dan upah lembur")]),t._v(" "),e("ul",{staticClass:"pl-5 mb-0"},[e("li",[t._v("Dalam hal upah terdiri dari upah pokok dan tunjangan tetap, maka dasar perhitungan upah lembur adalah "),e("b",[t._v("100%")]),t._v(" dari upah")]),t._v(" "),e("li",[t._v("Dalam hal upah terdiri dari upah pokok, tunjangan tetap, dan tunjangan tidak tetap. Apabila upah pokok ditambah tunjangan tetap lebih kecil dari 75% keseluruhan upah, maka dasar perhitungan upah lembur 75% dari keseluruhan upah")])])])])])])]),t._v(" "),e("b-tab",{attrs:{title:"Upah Lembur Perjam"}},[e("div",{staticClass:"py-5"},[e("table",{staticClass:"table table-custom-header v-center table-bordered"},[e("thead",[e("tr",[e("th",[t._v("Nama Komponen")]),t._v(" "),e("th",[t._v("Jenis Komponen")]),t._v(" "),e("th",{staticClass:"nowrap-table"},[t._v("Koefisien")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Dasar")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Komponen")])])]),t._v(" "),e("tbody",[t._l(t.modalData.detail[t.detailTabs[0].point],function(a,s){return[e("tr",{key:s+"-body-komp"},[e("td",{staticClass:"nowrap-table"},[t._v(t._s(a.rel_salary_component_id))]),t._v(" "),e("td",{staticClass:"nowrap-table"},[t._v(t._s(t._f("parse")(a.type,"status_code")))]),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:null,groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:0}}},model:{value:a.koefisien,callback:function(e){t.$set(a,"koefisien",e)},expression:"komp.koefisien"}})],1),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:"Rp. ",groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:2}}},model:{value:a.default_value,callback:function(e){t.$set(a,"default_value",e)},expression:"komp.default_value"}})],1),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.koefisien*a.default_value||0,"number")))])])])])]})],2)]),t._v(" "),e("p",[e("span",{staticClass:"label label-inline label-pill label-danger label-rounded mr-2"},[t._v("NOTE")]),t._v("Kembali ke tab "),e("span",{staticClass:"text-dark-75 font-weight-bolder"},[t._v("Penerimaan Tunjangan")]),t._v(" untuk memperbarui perhitungan\n              ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("table",{staticClass:"table no-border mt-5"},[e("tr",[e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v("Nilai Upah (THP)")]),t._v(" "),e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{staticClass:"pt-1 "},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail.upah_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v("Nilai Pokok + Tunjangan Tetap")]),t._v(" "),e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{staticClass:"pt-1 "},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail.pokok_tunjangan_tetap_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v("Nilai 75% THP")]),t._v(" "),e("td",{staticClass:"pt-1 pl-0 nowrap-table"},[t._v(":")]),t._v(" "),e("th",{staticClass:"pt-1 "},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail.three_quarter_upah_value||0,"number")))])])])]),t._v(" "),e("tr",[e("td",{staticClass:"pl-0 nowrap-table",staticStyle:{"border-top":"2px solid #000"}},[t._v("Nilai Uang Lembur Perjam")]),t._v(" "),e("td",{staticClass:"pl-0 nowrap-table",staticStyle:{"border-top":"2px solid #000"}},[t._v(":")]),t._v(" "),e("th",{staticStyle:{"border-top":"2px solid #000"}},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp. ")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail.upah_lembur_perjam_value||0,"number")))])])])])])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"py-3 px-5 border-primary mt-2 bg-light-primary",staticStyle:{border:"2px solid","border-radius":"8px"}},[e("h5",{staticClass:"font-weight-bolder text-primary"},[t._v("Informasi Perhitungan")]),t._v(" "),e("ul",{staticClass:"font-size-sm pl-5"},[e("li",[t._v("Koefisien upah lembur perjam : "),e("code",[t._v("1/173")])]),t._v(" "),e("li",[t._v("Rumus uang lembur perjam: "),e("br"),t._v(" Jika Nilai Tunjangan Tetap + Pokok < Nilai 75% THP :"),e("code",[t._v("75% * Nilai Upah (THP) * 1/173")]),e("br"),t._v(" Jika Nilai Tunjangan Tetap + Pokok ≥ Nilai 75% THP :"),e("code",[t._v("Nilai Upah (THP) x 1/173")])])])])])])])]),t._v(" "),e("b-tab",{attrs:{title:"Subsidi Lembur"}},[e("div",{staticClass:"pt-5"},[e("table",{staticClass:"table table-custom-header v-center table-bordered"},[e("thead",[e("tr",[e("th",[t._v("Nama Komponen")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Jumlah hari Lembur")]),t._v(" "),e("th",{staticClass:"nowrap-table"},[t._v("Koefisien")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Dasar")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Nilai Komponen")])])]),t._v(" "),e("tbody",[t._l(t.modalData.detail[t.detailTabs[3].point],function(a,s){return[e("tr",{key:s+"-body-komp"},[e("td",{staticClass:"nowrap-table"},[t._v(t._s(a.rel_salary_component_id))]),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:null,groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:1}}},model:{value:a.jumlah_hari,callback:function(e){t.$set(a,"jumlah_hari",e)},expression:"komp.jumlah_hari"}})],1),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:null,groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:1}}},model:{value:a.koefisien,callback:function(e){t.$set(a,"koefisien",e)},expression:"komp.koefisien"}})],1),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("s-input",{attrs:{item:{type:"number",validation:[],label:null,prefix:"Rp. ",groupClass:"mb-0",ic:"mr-4",api:"",attr:{precision:2}}},model:{value:a.default_value,callback:function(e){t.$set(a,"default_value",e)},expression:"komp.default_value"}})],1),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.jumlah_hari*a.koefisien*a.default_value||0,"number")))])])])])]}),t._v(" "),e("tr",[e("th",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("Total Penerimaan")]),t._v(" "),e("td",{},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail[t.detailTabs[3].point].map(function(t){return t.component_value}).reduce(function(t,a){return t+a},0),"number")))])])])])],2)])]),t._v(" "),e("p",[e("span",{staticClass:"label label-inline label-pill label-danger label-rounded mr-2"},[t._v("NOTE")]),t._v("Kembali ke tab "),e("span",{staticClass:"text-dark-75 font-weight-bolder"},[t._v("Penerimaan Tunjangan")]),t._v(" untuk memperbarui perhitungan\n            ")]),t._v(" "),e("div",{staticClass:"py-3 px-5 border-primary mt-2 bg-light-primary",staticStyle:{border:"2px solid","border-radius":"8px"}},[e("h5",{staticClass:"font-weight-bolder text-primary"},[t._v("Informasi Perhitungan")]),t._v(" "),e("ul",{staticClass:"font-size-sm pl-5"},[e("li",[t._v("Koefisien didapat dari aturan berikut: "),e("code",[t._v("Pegawai Tetap ")]),t._v(" yang melaksanakan kerja lembur selain diberikan upah lembur diberikan uang makan dan uang transport sebagai berikut: Apabila ditugaskan "),e("code",[t._v(" lembur melebihi 4 Jam terus menerus di luar hari kerja normal ")]),t._v(" atau "),e("code",[t._v("melebihi 2,5 jam terus menerus pada hari kerja normal ")]),t._v(" diberikan "),e("code",[t._v("1,5")]),t._v(" Kali tunjangan makan")]),t._v(" "),e("li",[t._v("Jumlah Hari Lembur: "),e("code",[t._v("Jumlah Lembur Hari Kerja + Jumlah Lembur Hari Libur")])]),t._v(" "),e("li",[t._v("Nilai Komponen: "),e("code",[t._v("Koefisien x Jumlah Hari Lembur x Nilai Dasar Tunjangan")])])])])]),t._v(" "),e("b-tab",{attrs:{title:"Lembur Hari Kerja"}},[e("div",{staticClass:"table-responsive pt-5"},[e("table",{staticClass:"table table-custom-header v-center table-bordered"},[e("thead",[e("tr",[e("th",{attrs:{rowspan:"2"}},[t._v("Tanggal Lembur")]),t._v(" "),e("th",{staticClass:"nowrap-table text-center",attrs:{rowspan:"2"}},[t._v("Durasi")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("Nilai Uang Lembur")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("Jumlah")])]),t._v(" "),e("tr",[e("th",{staticClass:"text-center"},[t._v("Jam Pertama")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Jam Berikutnya")])])]),t._v(" "),e("tbody",[t._l(t.modalData.detail[t.detailTabs[1].point],function(a,s){return[e("tr",{key:s+"-body-komp"},[e("td",{staticClass:"nowrap-table"},[t._v(t._s(t._f("parse")(a.date,"longDate")))]),t._v(" "),e("td",{staticClass:"nowrap-table"},[t._v(t._s(t._f("parse")(a.jam_lembur_count,"number"))+" Jam")]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.lembur_jam_pertama_value,"number")))])])]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.lembur_jam_selanjutnya_value,"number")))])])]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.penerimaan_value,"number")))])])])])]}),t._v(" "),e("tr",[e("th",{staticClass:"text-right bg-light-primary",attrs:{colspan:"4"}},[t._v("Total Penerimaan")]),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail[t.detailTabs[1].point].map(function(t){return t.penerimaan_value}).reduce(function(t,a){return t+a},0),"number")))])])])])],2)])]),t._v(" "),e("div",{staticClass:"py-3 px-5 border-primary mt-2 bg-light-primary",staticStyle:{border:"2px solid","border-radius":"8px"}},[e("h5",{staticClass:"font-weight-bolder text-primary"},[t._v("Informasi Perhitungan")]),t._v(" "),e("ul",{staticClass:"font-size-sm pl-5"},[e("li",[t._v("Koefisien upah lembur Jam Pertama : "),e("code",[t._v("1,5")])]),t._v(" "),e("li",[t._v("Rumus Uang lembur Jam Pertama: "),e("code",[t._v("Uang Lembur Perjam x Koefisien")])]),t._v(" "),e("li",[t._v("Rumus Uang lembur Jam Selanjutnya: "),e("code",[t._v("(Jam Lembur - 1) x Uang Lembur Perjam x 2")])])])])]),t._v(" "),e("b-tab",{attrs:{title:"Lembur Hari Libur"}},[e("div",{staticClass:"table-responsive pt-5"},[e("table",{staticClass:"table table-custom-header v-center table-bordered"},[e("thead",[e("tr",[e("th",{attrs:{rowspan:"2"}},[t._v("Tanggal Lembur")]),t._v(" "),e("th",{staticClass:"nowrap-table text-center",attrs:{rowspan:"2"}},[t._v("Durasi")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("Nilai Uang Lembur")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("Jumlah")])]),t._v(" "),e("tr",[e("th",{staticClass:"text-center"},[t._v("8 Jam Pertama")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Jam ke-9")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Jam selanjutnya")])])]),t._v(" "),e("tbody",[t._l(t.modalData.detail[t.detailTabs[2].point],function(a,s){return[e("tr",{key:s+"-body-komp"},[e("td",{staticClass:"nowrap-table"},[t._v(t._s(t._f("parse")(a.date,"longDate")))]),t._v(" "),e("td",{staticClass:"nowrap-table"},[t._v(t._s(t._f("parse")(a.jam_lembur_count,"number"))+" Jam")]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.lembur_jam_kedelapan_value,"number")))])])]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.lembur_jam_kesembilan_value,"number")))])])]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.lembur_jam_selanjutnya_value,"number")))])])]),t._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(a.penerimaan_value,"number")))])])])])]}),t._v(" "),e("tr",[e("th",{staticClass:"text-right bg-light-primary",attrs:{colspan:"5"}},[t._v("Total Penerimaan")]),t._v(" "),e("td",{staticClass:"bg-light-primary"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{},[t._v("Rp.")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t._f("parse")(t.modalData.detail[t.detailTabs[2].point].map(function(t){return t.penerimaan_value}).reduce(function(t,a){return t+a},0),"number")))])])])])],2)])]),t._v(" "),e("div",{staticClass:"py-3 px-5 border-primary mt-2 bg-light-primary",staticStyle:{border:"2px solid","border-radius":"8px"}},[e("h5",{staticClass:"font-weight-bolder text-primary"},[t._v("Informasi Perhitungan")]),t._v(" "),e("ul",{staticClass:"font-size-sm pl-5"},[e("li",[t._v("Rumus Uang lembur 8 Jam Pertama: "),e("code",[t._v("Uang Lembur Perjam x Jam Lembur x 2")])]),t._v(" "),e("li",[t._v("Rumus Uang lembur Jam ke 9: "),e("code",[t._v("Uang Lembur Perjam x 1 Jam x 3")])]),t._v(" "),e("li",[t._v("Rumus Uang lembur Jam Selanjutnya: "),e("code",[t._v("Uang Lembur Perjam x (Jam Lembur - 9) x 4")])])])])])],1)]:t._e()],2):t._e()]},proxy:!0}])})},staticRenderFns:[]},m=e("VU/8")(_,u,!1,null,null,null);a.default=m.exports}});
//# sourceMappingURL=70.5b632a42d29d914cf405.js.map