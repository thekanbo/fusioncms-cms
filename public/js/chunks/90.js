(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"06b7":function(e,t,i){"use strict";i.r(t);var n={name:"country-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:null}},computed:{countries:function(){return Object.values(this.field.type.data)}},created:function(){var e=_.findIndex(this.countries,(function(e){return 1==e.checked}));-1===e||this.countries||this.$emit("input",this.countries[e].value),console.log(this.field)}},l=i("KHd+"),u=Object(l.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ui-select-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,value:e.value,options:e.countries,placeholder:"Select a country...",filterable:e.field.settings.filterable||!1,multiple:e.field.settings.multiple},on:{input:function(t){return e.$emit("input",t)}}})],1)}),[],!1,null,null,null);t.default=u.exports}}]);