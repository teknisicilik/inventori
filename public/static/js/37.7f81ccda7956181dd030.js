webpackJsonp([37],{"0V3K":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this.$createElement;return(this._self._c||e)("tas-base-crud",{attrs:{config:this.config}})},staticRenderFns:[]},i=a("VU/8")({name:"crud-koperasi-members",data:function(){return{config:{title:"Anggota Koperasi",model_api:"koperasi-members",getter:"koperasi-members",setter:"koperasi-members",pk_field:null,permission:{create:"create-koperasi-members",read:"view-koperasi-members",update:"update-koperasi-members",delete:"delete-koperasi-members"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"description",label:"Deskripsi",methods:{create:{type:"textarea"},update:{type:"textarea"}}},{id:"employee_id",label:"Nama Tenaga Kerja",methods:{create:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}},update:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}},filter:{setter:"employees",getter:"employees",type:"lookup-radio",option:{list_pointer:{label:"fullname",code:"id",display:["nip","fullname"]}}}}},{id:"active",data:"active",label:"Status Keanggotaan",placeholder:null,methods:{list:{order:!0,class:{0:"badge badge-danger",1:"badge badge-primary"},transforms:"active-member"},detail:{order:!0,class:{0:"badge badge-danger",1:"badge badge-primary"},transforms:"active-member"},create:{view_data:"active",type:"radio",value:"1",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}},update:{view_data:"active",type:"radio",value:"1",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}},filter:{view_data:"active",type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}}}}]}}}},l,!1,null,null,null);t.default=i.exports}});
//# sourceMappingURL=37.7f81ccda7956181dd030.js.map