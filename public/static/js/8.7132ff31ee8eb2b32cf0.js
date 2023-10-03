webpackJsonp([8],{nInu:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("fZjL"),n=i.n(a),r=i("gRE1"),s=i.n(r),o=i("PJh5"),l=i.n(o);l.a.locale("id");var d={name:"crud-tunjangan-beasiswa",data:function(){return{mainKey:1,isAlertShow:!1,firstFormCheck:{period:{api:"payroll-periodes",loading:!1,available:!1}},firstForm:{periode_month:null,start_date:null,end_date:null,description:null},dateFormat:{stringify:function(t){return t?l()(t).format("DD MMMM YYYY"):null},parse:function(t){return t?l()(t,"DD MMMM YYYY").toDate():null}},momentFormat:{stringify:function(t){return t?l()(t).format("MMMM YYYY"):""},parse:function(t){return t?l()(t,"MMMM YYYY").toDate():null}},config:{title:"Tunjangan Beasiswa Anak",model_api:"tunjangan-beasiswa",getter:"tunjangan-beasiswa",setter:"tunjangan-beasiswa",pk_field:null,permission:{create:"create-tunjangan-beasiswa",read:"view-tunjangan-beasiswa",update:"update-tunjangan-beasiswa",delete:"delete-tunjangan-beasiswa"},custom_api:{create:"custom/tunjangan-beasiswa"},slave:[{name:"Rincian Beasiswa",permission:"view-tunjangan-beasiswa-details",module:"payroll/tunjangan-beasiswa-details",as_param:"tunjangan_beasiswa_id",key_field:"id"}],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:{type:"textarea"}}},{id:"periode_month",label:"Periode",methods:{create:!1,update:!1,list:{transform:"period"},detail:{transform:"period"}}},{id:"total_penerimaan_value",label:"Total Penerimaan",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}}]}}},computed:{canCreate:function(){var t=Boolean(this.firstForm.periode_month),e=s()(this.firstFormCheck).filter(function(t){return t.available}).length;return!(!t||!e)}},mounted:function(){this.getThisMonth()},methods:{redirect:function(t){this.$router.push({name:t,query:{view:"list"}}).catch(function(t){return t})},checkThisMonth:function(){var t=this;this.firstForm.periode_month&&n()(this.firstFormCheck).forEach(function(e){t.getCheckData(e)})},getThisMonth:function(){var t=this,e={periode_month:l()(new Date).set("date",1).format("YYYY-MM-DD")};this.$_api.list(this.config.getter,e).then(function(e){t.isAlertShow=!e.data.length}).catch(function(e){t.$_alert.error(e)})},getCheckData:function(t){var e=this;this.$set(this.firstFormCheck[t],"loading",!0);var i={periode_month:l()(l()(this.firstForm.periode_month,"MMMM YYYY").toDate()).format("YYYY-MM-DD")};this.$_api.list(this.firstFormCheck[t].api,i).then(function(i){e.$set(e.firstFormCheck,t,{api:e.firstFormCheck[t].api,loading:!1,available:!!i.data.length})}).catch(function(i){e.$set(e.firstFormCheck[t],"loading",!1),e.$_alert.error(i)})},generateMonth:function(){var t=this,e={periode_month:l()(l()(this.firstForm.periode_month,"MMMM YYYY").toDate()).format("YYYY-MM-DD"),description:this.firstForm.description};this.$_api.create(this.config.custom_api.create,e).then(function(e){t.$children[0].getEvent("detail",e.data),t.isAlertShow=!1,t.$set(t.firstForm,"periode_month",null),t.$_alert.success(null,t.config.title+" berhasil dibuat")}).catch(function(e){t.$_alert.error(e)})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tas-base-crud",{key:t.mainKey,attrs:{config:t.config,"hide-create":"","hide-update":"","hide-detail":""},scopedSlots:t._u([{key:"list-action",fn:function(){return[t.$_sys.isAllowed(t.config.permission.create)?i("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-create-simpan-pinjam",modifiers:{"modal-create-simpan-pinjam":!0}}],staticClass:"btn btn-primary btn-icon btn-circle ml-3"},[i("i",{staticClass:"ri-add-line p-0"})]):t._e(),t._v(" "),i("b-modal",{attrs:{id:"modal-create-simpan-pinjam","hide-footer":"",centered:"",size:"md",title:"Buat "+t.config.title}},[i("div",{},[i("div",{staticClass:"form-group mb-2"},[i("span",[t._v("Periode "),i("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),i("s-input",{attrs:{item:{type:"month",validation:[],placeholder:"Pilih Periode "+t.config.title,api:"",formatter:t.momentFormat,ic:"w-100 mt-0"}},on:{input:function(e){return t.checkThisMonth()}},model:{value:t.firstForm.periode_month,callback:function(e){t.$set(t.firstForm,"periode_month",e)},expression:"firstForm.periode_month"}})],1),t._v(" "),i("div",{staticClass:"form-group mb-2"},[i("span",[t._v("Deskripsi")]),t._v(" "),i("s-input",{attrs:{item:{type:"textarea",rows:3,validation:[],placeholder:"Tuliskan keterangan / deskripsi "+t.config.title,api:"",formatter:t.dateFormat,ic:"w-100 mt-0"}},model:{value:t.firstForm.description,callback:function(e){t.$set(t.firstForm,"description",e)},expression:"firstForm.description"}})],1),t._v(" "),i("p",{staticClass:"mb-1"},[t._v(" Sebelum membuat "),i("b",[t._v(t._s(t.config.title))]),t._v(", pastikan konfigurasi modul di bawah ini sudah sesuai dengan periode yang dipilih :")]),t._v(" "),i("ul",{staticClass:"pl-0 mt-0 mb-7 list-unstyled"},[i("li",{staticClass:"d-flex align-items-center pointer arrow-info-inside",on:{click:function(e){return t.redirect("periode-penggajian")}}},[t.firstFormCheck.period.available?i("i",{staticClass:"ri-checkbox-line text-success mr-2"}):i("i",{staticClass:"ri-checkbox-blank-line text-danger mr-2"}),t._v("Periode Penggajian "),t.firstFormCheck.period.loading?i("b-spinner",{staticClass:"ml-2",attrs:{small:""}}):i("i",{staticClass:"ri-arrow-right-line icon-arrow"})],1),t._v(" "),!t.firstForm.periode_month||t.firstFormCheck.period.loading||t.firstFormCheck.period.available?t._e():i("li",{staticClass:"font-size-sm text-danger"},[t._v("Periode Penggajian "+t._s(t._f("parse")(t.firstForm.periode_month,"period"))+" belum dibuat !")])])]),t._v(" "),i("div",{staticClass:"text-right"},[i("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.canCreate},on:{click:function(e){return t.generateMonth()}}},[t._v(" Buat "+t._s(t.config.title)+" ")])])])]},proxy:!0},{key:"list-table-action",fn:function(e){return[i("a",{staticClass:"btn btn-info btn-sm",on:{click:function(i){return t.$children[0].getEvent("detail",e.rowData)}}},[t._v(" Lihat Detail Tunjangan ")])]}},{key:"header-table",fn:function(){return[i("div",{staticClass:"card-body py-0"},[t.isAlertShow?i("div",{staticClass:"alert alert-custom alert-light-danger p-2 mb-0",attrs:{role:"alert"}},[i("div",{staticClass:"alert-icon"},[i("span",{staticClass:"svg-icon svg-icon-danger svg-icon-xl"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"}},[i("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("rect",{attrs:{x:"0",y:"0",width:"24",height:"24"}}),t._v(" "),i("path",{attrs:{d:"M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z",fill:"#000000",opacity:"0.3"}}),t._v(" "),i("rect",{attrs:{fill:"#000000",x:"11",y:"9",width:"2",height:"7",rx:"1"}}),t._v(" "),i("rect",{attrs:{fill:"#000000",x:"11",y:"17",width:"2",height:"2",rx:"1"}})])])])]),t._v(" "),i("div",{staticClass:"alert-text"},[t._v("Data "+t._s(t.config.title)+" pada bulan ini belum dibuat!")])]):t._e()])]},proxy:!0}])})},staticRenderFns:[]};var m=i("VU/8")(d,c,!1,function(t){i("tZ1c")},"data-v-61c92220",null);e.default=m.exports},tZ1c:function(t,e){}});
//# sourceMappingURL=8.7132ff31ee8eb2b32cf0.js.map