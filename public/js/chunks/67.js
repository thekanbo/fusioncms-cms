(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"c+eB":function(e,r,t){"use strict";t.r(r);var s={name:"range-fieldtype",mixins:[t("n7tU").a]},n=t("KHd+"),i=Object(n.a)(s,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("ui-range-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,value:e.value,steps:e.field.settings.steps,decimals:e.field.settings.decimals,min:Number(e.field.settings.min),max:Number(e.field.settings.max),"has-error":e.hasError,"error-message":e.errorMessage},on:{input:function(r){return e.$emit("input",r)}}})}),[],!1,null,null,null);r.default=i.exports},n7tU:function(e,r,t){"use strict";r.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{hasError:function(){return this.errors&&this.errors.has(this.field.handle)},errorMessage:function(){return this.errors?this.errors.get(this.field.handle):""}}}}}]);