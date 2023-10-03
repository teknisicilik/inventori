webpackJsonp([20],{mVlC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("PJh5"),n=a.n(i);n.a.locale("id");var r={name:"crud-pinjaman-bank",data:function(){return{mainKey:1,isAlertShow:!1,firstForm:{periode_month:null},momentFormat:{stringify:function(t){return t?n()(t).format("MMMM YYYY"):""},parse:function(t){return t?n()(t,"MMMM YYYY").toDate():null}},config:{title:"Pinjaman Bank",model_api:"pinjaman-bank",getter:"pinjaman-bank",setter:"pinjaman-bank",pk_field:null,permission:{create:"create-pinjaman-bank",read:"view-pinjaman-bank",update:"update-pinjaman-bank",delete:"delete-pinjaman-bank"},slave:[{name:"Daftar Pinjaman Bank",permission:"pinjaman-bank-details",module:"payroll/pinjaman-bank-details",as_param:"pinjaman_bank_id",key_field:"id"}],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:{type:"textarea"}}},{id:"total_pinjaman_value",label:"Total Pinjaman",methods:{create:!1,update:!1,list:{transform:"money"},detail:{transform:"money"}}},{id:"periode_month",label:"Periode",methods:{create:!1,update:!1,list:{transform:"period"},detail:{transform:"period"}}}]}}},mounted:function(){this.getThisMonth()},methods:{getThisMonth:function(){var t=this,e={periode_month:n()(new Date).set("date",1).format("YYYY-MM-DD")};this.$_api.list(this.config.setter,e).then(function(e){t.isAlertShow=!e.data.length}).catch(function(e){t.$_alert.error(e)})},generateMonth:function(){var t=this,e={periode_month:n()(n()(this.firstForm.periode_month,"MMMM YYYY").toDate()).format("YYYY-MM-DD")};this.$_api.create("custom/pinjaman-bank",e).then(function(e){t.$children[0].getEvent("detail",e.data),t.isAlertShow=!1,t.$set(t.firstForm,"periode_month",null),t.$_alert.success(null,t.config.title+" berhasil dibuat")}).catch(function(e){t.$_alert.error(e)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tas-base-crud",{key:t.mainKey,attrs:{config:t.config,"hide-create":"","hide-update":"","hide-detail":""},scopedSlots:t._u([{key:"list-action",fn:function(){return[t.$_sys.isAllowed(t.config.permission.create)?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-create-simpan-pinjam",modifiers:{"modal-create-simpan-pinjam":!0}}],staticClass:"btn btn-primary btn-icon btn-circle ml-3"},[a("i",{staticClass:"ri-add-line p-0"})]):t._e(),t._v(" "),a("b-modal",{attrs:{id:"modal-create-simpan-pinjam","hide-footer":"",centered:"",size:"md",title:t.config.title}},[a("span",[t._v("Periode Iuran")]),t._v(" "),a("s-input",{attrs:{item:{type:"month",validation:[],placeholder:"Pilih Periode Iuran Simpan / Pinjam",api:"",formatter:t.momentFormat,ic:"w-100 mt-2"}},model:{value:t.firstForm.periode_month,callback:function(e){t.$set(t.firstForm,"periode_month",e)},expression:"firstForm.periode_month"}}),t._v(" "),a("div",{staticClass:"text-right"},[t.$_sys.isAllowed(t.config.permission.create)?a("a",{staticClass:"btn btn-primary",on:{click:function(e){return t.generateMonth()}}},[a("i",{staticClass:"ri-add-line p-0"}),t._v(" Buat & Simpan ")]):t._e()])],1)]},proxy:!0},{key:"list-table-action",fn:function(e){return[a("a",{staticClass:"btn btn-info btn-sm",on:{click:function(a){return t.$children[0].getEvent("detail",e.rowData)}}},[t._v(" Lihat Detail Pinjaman ")])]}},{key:"header-table",fn:function(){return[a("div",{staticClass:"card-body py-0"},[t.isAlertShow?a("div",{staticClass:"alert alert-custom alert-light-danger p-2 mb-0",attrs:{role:"alert"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-danger svg-icon-xl"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("rect",{attrs:{x:"0",y:"0",width:"24",height:"24"}}),t._v(" "),a("path",{attrs:{d:"M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z",fill:"#000000",opacity:"0.3"}}),t._v(" "),a("rect",{attrs:{fill:"#000000",x:"11",y:"9",width:"2",height:"7",rx:"1"}}),t._v(" "),a("rect",{attrs:{fill:"#000000",x:"11",y:"17",width:"2",height:"2",rx:"1"}})])])])]),t._v(" "),a("div",{staticClass:"alert-text"},[t._v("Data "+t._s(t.config.title)+" pada bulan ini belum dibuat!")])]):t._e()])]},proxy:!0}])})},staticRenderFns:[]},l=a("VU/8")(r,s,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=20.676037c2f1c98bafdf35.js.map