webpackJsonp([66],{ppC3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement;return(this._self._c||e)("tas-base-crud",{attrs:{config:this.config}})},staticRenderFns:[]},d=a("VU/8")({name:"crud-company-general-documents",data:function(){return{config:{title:"Dokumen Perusahaan",model_api:"company-general-documents",getter:"company-general-documents",setter:"company-general-documents",pk_field:null,permission:{create:"create-company-general-documents",read:"view-company-general-documents",update:"update-company-general-documents",delete:"delete-company-general-documents"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:{type:"textarea"}}},{id:"document_type_id",label:"Tipe Dokumen",methods:{create:{setter:"master-document-types",getter:"master-document-types",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},update:{setter:"master-document-types",getter:"master-document-types",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},filter:{setter:"master-document-types",getter:"master-document-types",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}}}},{id:"file_filename",label:"File Dokumen",methods:{list:!1,detail:{type:"file",view_data:"file_filename.url"},create:{type:"file",attr:[{accept:"image/*, .pdf"},{limit:5}]},update:{type:"file",attr:[{accept:"image/*, .pdf"},{limit:5}],view_data:"file_filename"}}}]}}}},i,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=66.d91e17197361257e20a9.js.map