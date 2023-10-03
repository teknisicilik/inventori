webpackJsonp([25],{DNhh:function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={render:function(){var e=this.$createElement;return(this._self._c||e)("tas-base-crud",{attrs:{config:this.config}})},staticRenderFns:[]},t=i("VU/8")({name:"crud-divisions",data:function(){return{config:{title:"Divisi Perusahaan",model_api:"divisions",getter:"divisions",setter:"divisions",pk_field:"division_name",permission:{create:"create-divisions",read:"view-divisions",update:"update-divisions",delete:"delete-divisions"},fields:[{id:"active",data:"active",label:"Status",placeholder:null,methods:{list:{order:!0,class:{0:"badge badge-danger",1:"badge badge-primary"},transform:"active"},detail:{order:!0,class:{0:"badge badge-danger",1:"badge badge-primary"},transform:"active"},create:{view_data:"active",type:"radio",value:"1",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}},update:{view_data:"active",type:"radio",value:"1",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}},filter:{view_data:"active",type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Aktif",code:"1"},{label:"Non Aktif",code:"0"}]}}}}},{id:"id",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_at",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"updated_by",methods:{list:!1,detail:!1,create:!1,update:!1,filter:!1}},{id:"created_at",label:"Dibuat",methods:{create:!1,update:!1,filter:!1}},{id:"created_by",label:"Dibuat Oleh",methods:{list:!1,create:!1,update:!1,filter:!1}},{id:"division_code",label:"Kode Divisi"},{id:"division_name",label:"Nama Divisi"},{id:"company_group",label:"Tipe Perusahaan",placeholder:null,methods:{list:{transform:"company_group"},detail:{transform:"company_group"},create:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Induk",code:"induk"},{label:"Non Induk",code:"non_induk"}]}}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Induk",code:"induk"},{label:"Non Induk",code:"non_induk"}]}}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Induk",code:"induk"},{label:"Non Induk",code:"non_induk"}]}}}}},{id:"division_type",label:"Tipe Divisi",placeholder:null,methods:{list:{transform:"division_type"},detail:{transform:"division_type"},create:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Operasi",code:"operation",company_group:"induk"},{label:"Kantor Pusat",code:"kantor_pusat",company_group:"induk"},{label:"Anak Perusahaan",code:"ap",company_group:"non_induk"}]},get_param:[{id:"company_group",alias:"company_group"}]}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Operasi",code:"operation",company_group:"induk"},{label:"Kantor Pusat",code:"kantor_pusat",company_group:"induk"},{label:"Anak Perusahaan",code:"ap",company_group:"non_induk"}]},get_param:[{id:"company_group",alias:"company_group"}]}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"Operasi",code:"operation",company_group:"induk"},{label:"Kantor Pusat",code:"kantor_pusat",company_group:"induk"},{label:"Anak Perusahaan",code:"ap",company_group:"non_induk"}]},get_param:[{id:"company_group",alias:"company_group"}]}}}},{id:"division_category",label:"Tipe Divisi",placeholder:null,methods:{list:{transform:"uppercase"},detail:{transform:"uppercase"},create:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"JAKON",code:"jakon",division_type:"operation",company_group:"induk"},{label:"BUJT",code:"bujt",division_type:"operation",company_group:"induk"},{label:"KP",code:"kp",division_type:"kantor_pusat",company_group:"induk"},{label:"AP",code:"ap",division_type:"ap",company_group:"non_induk"}]},get_param:[{id:"division_type",alias:"division_type"},{id:"company_group",alias:"company_group"}]}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"JAKON",code:"jakon",division_type:"operation",company_group:"induk"},{label:"BUJT",code:"bujt",division_type:"operation",company_group:"induk"},{label:"KP",code:"kp",division_type:"kantor_pusat",company_group:"induk"},{label:"AP",code:"ap",division_type:"ap",company_group:"non_induk"}]},get_param:[{id:"division_type",alias:"division_type"},{id:"company_group",alias:"company_group"}]}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"JAKON",code:"jakon",division_type:"operation",company_group:"induk"},{label:"BUJT",code:"bujt",division_type:"operation",company_group:"induk"},{label:"KP",code:"kp",division_type:"kantor_pusat",company_group:"induk"},{label:"AP",code:"ap",division_type:"ap",company_group:"non_induk"}]},get_param:[{id:"division_type",alias:"division_type"},{id:"company_group",alias:"company_group"}]}}}},{id:"bu_type",label:"Beban Usaha",placeholder:null,methods:{list:{transform:"uppercase"},detail:{transform:"uppercase"},create:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"BUJT",code:"bujt"},{label:"NON BUJT",code:"non_bujt"}]}}},update:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"BUJT",code:"bujt"},{label:"NON BUJT",code:"non_bujt"}]}}},filter:{type:"radio",option:{list_pointer:{label:"label",code:"code",list:[{label:"BUJT",code:"bujt"},{label:"NON BUJT",code:"non_bujt"}]}}}}}]}}}},o,!1,null,null,null);a.default=t.exports}});
//# sourceMappingURL=25.14930dca50ad5bbb5a74.js.map