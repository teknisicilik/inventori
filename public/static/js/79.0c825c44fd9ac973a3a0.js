webpackJsonp([79],{"kFD+":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var e=this.$createElement;return(this._self._c||e)("tas-base-crud",{attrs:{config:this.config}})},staticRenderFns:[]},i=t("VU/8")({name:"crud-lowongan-pelamar",data:function(){return{config:{title:"Pelamar Lowongan",model_api:"lowongan-pelamar",getter:"lowongan-pelamar",setter:"lowongan-pelamar",pk_field:null,permission:{create:"create-lowongan-pelamar",read:"view-lowongan-pelamar",update:"update-lowongan-pelamar",delete:"delete-lowongan-pelamar"},slave:[],fields:[{id:"lowongan_id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"address",label:"Alamat",methods:{create:{type:"textarea"},update:{type:"textarea"}}},{id:"fullname",label:"Nama Tenaga Kerja"},{id:"nik",label:"NIK"},{id:"place_of_birth",label:"Tempat Lahir"},{id:"telephone",label:"No. Telp"},{id:"email",label:"Email"},{id:"program_study",label:"Program Studi"},{id:"institution_name",label:"Nama Institusi"},{id:"date_of_birth",label:"Tanggal Lahir",methods:{list:{transform:"longDate"},detail:{transform:"longDate"},create:{type:"date",validation:["required"]},update:{type:"date",validation:["required"]},filter:!1}},{id:"gender",label:"Jenis Kelamin",methods:{list:{transform:"kelamin"},detail:{transform:"kelamin"},create:{type:"radio",value:"male",option:{list_pointer:{label:"label",code:"code",list:[{label:"Laki - Laki",code:"male"},{label:"Perempuan",code:"female"}]}}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Laki - Laki",code:"male"},{label:"Perempuan",code:"female"}]}}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Laki - Laki",code:"male"},{label:"Perempuan",code:"female"}]}}}}},{id:"marital_status",label:"Status Kawin",methods:{list:{transform:"kawin"},detail:{transform:"kawin"},create:{type:"radio",value:"single",option:{list_pointer:{label:"label",code:"code",list:[{label:"Belum Menikah",code:"single"},{label:"Menikah",code:"married"},{label:"Janda/Duda",code:"widow"}]}}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Belum Menikah",code:"single"},{label:"Menikah",code:"married"},{label:"Janda/Duda",code:"widow"}]}}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Belum Menikah",code:"single"},{label:"Menikah",code:"married"},{label:"Janda/Duda",code:"widow"}]}}}}},{id:"religion_id",label:"Agama",methods:{create:{setter:"master-religions",getter:"master-religions",type:"radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},update:{setter:"master-religions",getter:"master-religions",type:"radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},filter:{setter:"master-religions",getter:"master-religions",type:"radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}}}},{id:"img_photo",label:"Foto Pelamar",methods:{list:!1,detail:{type:"file",view_data:"img_photo.url"},create:{type:"file",attr:[{accept:"image/*"},{limit:5}]},update:{type:"file",attr:[{accept:"image/*"},{limit:5}],view_data:"img_photo"}}},{id:"education_id",label:"Pendidikan Terakhir",methods:{create:{setter:"master-educations",getter:"master-educations",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},update:{setter:"master-educations",getter:"master-educations",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},filter:{setter:"master-educations",getter:"master-educations",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}}}},{id:"nationality",label:"Kewarganagaraan",methods:{list:{transform:"uppercase"},detail:{transform:"uppercase"},create:{type:"radio",value:"wni",option:{list_pointer:{label:"label",code:"code",list:[{label:"WNI",code:"wni"},{label:"WNA",code:"wna"}]}}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"WNI",code:"wni"},{label:"WNA",code:"wna"}]}}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"WNI",code:"wni"},{label:"WNA",code:"wna"}]}}}}}]}}}},l,!1,null,null,null);a.default=i.exports}});
//# sourceMappingURL=79.0c825c44fd9ac973a3a0.js.map