(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a427b"],{"04de":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-package"},[a("table-page-package",{attrs:{"temp-loading":t.loading,"form-data":t.formData,"extra-params":t.extraParams,"column-data":t.columnData,"table-row-key":"id","request-api":"getTestData"},scopedSlots:t._u([{key:"left-operation",fn:function(){return[a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onLeftText}},[t._v("左边测试按钮")])]},proxy:!0},{key:"right-operation",fn:function(){return[a("a-button",{attrs:{type:"primary",loading:t.loading}},[t._v("右边测试按钮")])]},proxy:!0}])})],1)},l=[],o=function(t,e,a,n){var l=t.findIndex((function(t){return t.field===e}));-1!==l&&(t[l][a]=n)},r={name:"ComponetPackageFormPackage",data:function(){var t=this;return{loading:!1,formData:[{field:"testInput",label:"测试文本",type:"input"},{field:"testInputNumber",label:"测试数字",type:"input-number"},{field:"testSelect",label:"测试选择",type:"select",options:[]},{field:"testSearchSelect",label:"测试远程搜索选择",type:"search-select",onHandleSearch:function(e){return t.onHandleTextSearch(e)},options:[]},{field:"testWeek",label:"测试周数",type:"week"},{field:"testMonth",label:"测试月份",type:"month"},{field:"testYear",label:"测试年份",type:"year"},{field:"testDate",label:"测试日期",type:"date"},{field:"testRangeDate",label:"测试日期范围",type:"range-date",trigger:["testStartDate","testEndDate"]}],columnData:[{title:"名称",dataIndex:"name"},{title:"联系电话",dataIndex:"mobile"},{title:"地区",dataIndex:"area",isNeedTooltip:!0,toolLength:10},{title:"头像",dataIndex:"avatar",image:!0},{title:"身份",dataIndex:"identity",formatter:function(t){return 1===t.identity?"管理员":"子账号"}},{title:"注册时间",dataIndex:"registerDate",formatter:function(t){return t.registerDate.substr(0,10)}},{title:"状态",dataIndex:"status",tags:[{label:"正常",color:"green",onShow:function(t){return"normal"===t.status}},{label:"一般",color:"orange",onShow:function(t){return"general"===t.status}},{label:"异常",color:"red",onShow:function(t){return"error"===t.status}}]},{title:"操作",width:180,operations:[{label:"测试按钮1",onClick:function(){return alert("阿巴阿巴")}},{label:"测试按钮2",onClick:function(){return alert("阿勒阿勒")}}]}],extraParams:{},testOptions:[{value:1,label:"测试选择数据1"},{value:2,label:"测试选择数据2"},{value:3,label:"测试选择数据3"}]}},created:function(){o(this.formData,"testSelect","options",this.testOptions)},methods:{onHandleTextSearch:function(t){console.log(t)},onLeftText:function(){this.loading=!0}}},i=r,s=a("2877"),u=Object(s["a"])(i,n,l,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0a427b.1f85ddaa.js.map