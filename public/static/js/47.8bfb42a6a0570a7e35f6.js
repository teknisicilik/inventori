webpackJsonp([47],{zM3R:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tas-base-crud",{attrs:{config:t.config,"list-card":""},scopedSlots:t._u([{key:"card-view",fn:function(e){return[a("div",{staticClass:"card-body p-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"d-flex align-items-center"},[a("img",{directives:[{name:"img-fb",rawName:"v-img-fb",value:e.rowData.img_photo_created_by.tumbnail_url,expression:"data.rowData.img_photo_created_by.tumbnail_url"}],staticClass:"symbol symbol-45 symbol-light mr-5 pointer",attrs:{height:"45px",alt:""},on:{click:function(a){return t.$children[0].$children[1].$emit("zoom",e.rowData.img_photo_created_by.tumbnail_url)}}}),t._v(" "),a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("a",{staticClass:"font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1 text-capitalize"},[t._v(t._s(e.rowData.rel_created_by))]),t._v(" "),a("span",{staticClass:"text-muted font-weight-bold"},[t._v(t._s(t._f("parse")(e.rowData.created_at,"longDateTime")))])])])]),t._v(" "),a("div",{staticClass:"col-auto"},[t.$_sys.isAllowed(t.config.permission.delete)?a("button",{staticClass:"btn btn-sm btn-icon btn-hover-danger",on:{click:function(a){return t.$children[0].$children[1].deleteData(e.rowData)}}},[a("i",{staticClass:"ri-delete-bin-7-line text-danger"})]):t._e()])]),t._v(" "),a("img",{directives:[{name:"img-fb",rawName:"v-img-fb",value:e.rowData.img_photo_cover?e.rowData.img_photo_cover.url:"/static/img/file/jpg.svg",expression:"data.rowData.img_photo_cover? data.rowData.img_photo_cover.url : '/static/img/file/jpg.svg'"}],staticClass:"card-cover-img",attrs:{alt:""}}),t._v(" "),a("h5",{staticClass:"card-title font-weight-bolder text-dark mb-1"},[t._v(t._s(e.rowData.title))]),t._v(" "),a("p",{staticClass:"text-line-3"},[t._v(t._s(e.rowData.description))]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-info btn-block",on:{click:function(a){return t.$children[0].$children[1].$emit("detail",e.rowData)}}},[t._v("Lihat Detail")]),t._v(" "),t.$_sys.isAllowed(t.config.permission.update)?a("button",{staticClass:"btn btn-outline-danger btn-block",on:{click:function(a){return t.$children[0].$children[1].$emit("update",e.rowData)}}},[t._v("Update")]):t._e()])]}}])})},staticRenderFns:[]},n=a("VU/8")({name:"crud-announcements",data:function(){return{config:{title:"Announcements",model_api:"announcements",getter:"announcements",setter:"announcements",custom_api:{list:"custom/announcements"},pk_field:null,permission:{create:"create-announcements",read:"view-announcements",update:"update-announcements",delete:"delete-announcements"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea",attr:[{rows:10}]},update:{type:"textarea",attr:[{rows:10}]}}},{id:"title",label:"Judul Announcement"},{id:"child_data_announcement_files",label:"File Dokumen",methods:{list:!1,detail:{type:"file",view_data:"child_data_announcement_files.file_filename.url"},create:{type:"file-multiple",attr:[{accept:"image/*, .pdf"},{limit:5},{max:5}]},update:{type:"file-multiple",attr:[{accept:"image/*, .pdf"},{limit:5},{max:5}],view_data:"child_data_announcement_files"}}}]}}}},i,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=47.8bfb42a6a0570a7e35f6.js.map