webpackJsonp([27],{gFAW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"crud-mapping-salary-accounts",data:function(){return{config:{title:"Mapping Akun Penggajian",model_api:null,getter:"custom/mapping-salary-accounts/list-job-position-categories",setter:"custom/mapping-salary-accounts/list-job-position-categories",custom_api:{list:"custom/mapping-salary-accounts/list-job-position-categories",read:"custom/mapping-salary-accounts/show-job-position-categories"},pk_field:"name",permission:{create:"create-mapping-salary-accounts",read:"view-mapping-salary-accounts",update:"update-mapping-salary-accounts",delete:"delete-mapping-salary-accounts"},slave:[],fields:[{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"updated_at",label:"Diperbarui",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"name",label:"Nama Kategori Jabatan",methods:{list:!0,detail:!0,create:!0,update:!0,filter:!1}},{id:"employment_level_id",label:"Level Ketenagakerjaan",methods:{list:{view_data:"rel_employment_level_id"},detail:{view_data:"rel_employment_level_id"},create:{setter:"master-employment-levels",getter:"master-employment-levels",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},update:{setter:"master-employment-levels",getter:"master-employment-levels",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}},filter:{setter:"master-employment-levels",getter:"master-employment-levels",type:"lookup-radio",option:{list_pointer:{label:"name",code:"id",display:["name"]}}}}}]}}},methods:{getSlaveList:function(e){var t=this,a=[],i={name:"Mapping Akun Penggajian",module:"payroll/mapping-salary-accounts",as_param:"job_position_category_id",key_field:"id",overwrite:{fields:[{rule:"1.methods.list",value:!1},{rule:"1.methods.filter",value:!1},{rule:"1.methods.create",value:!1},{rule:"1.methods.update",value:!1},{rule:"1.methods.detail",value:!1}]}};this.$_api.get("custom/mapping-salary-accounts/show-job-position-categories",{id:e.id}).then(function(l){var o=l.data.data_status_employments;if(o.length)for(var s=0;s<o.length;s++){var n=o[s];a.push({name:n.name,module:"payroll/mapping-salary-accounts",as_param:"job_position_category_id",key_field:"id",overwrite:{filter_api:{status_employment_id:n.id},custom_api:{read:"custom/mapping-salary-accounts/show?status_employment_id="+n.id+"&job_position_category_id="+e.id},fields:[{rule:"1.methods.list",value:!1},{rule:"1.methods.filter",value:!1},{rule:"1.methods.create",value:!1},{rule:"1.methods.update",value:!1},{rule:"1.methods.detail",value:!1}]}})}else a.push(i);t.$set(t.config,"slave",a),t.$nextTick().then(function(a){t.$children[0].getEvent("detail",e)})}).catch(function(e){console.log(e),t.$_alert.error(e)})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tas-base-crud",{attrs:{config:e.config,"hide-create":"","hide-update":"","hide-delete":"","hide-filter":"","hide-detail":""},scopedSlots:e._u([{key:"list-table-action",fn:function(t){return[a("a",{staticClass:"btn btn-info btn-sm",on:{click:function(a){return e.getSlaveList(t.rowData)}}},[e._v("Lihat Daftar Komponen")])]}}])})},staticRenderFns:[]},o=a("VU/8")(i,l,!1,null,null,null);t.default=o.exports}});
//# sourceMappingURL=27.6e38f194bb4fb26c4a24.js.map