(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{e8pm:function(e,t,s){"use strict";s.r(t);var r=s("LvDl"),a=s.n(r),i=s("g6NE"),n=s("L2JU");function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var f={name:"response-list",computed:l(l({},Object(n.c)({totalPages:"inbox/getTotalPages",responses:"inbox/getResponses",response:"inbox/getResponse",loading:"inbox/getLoading"})),{},{page:{set:function(e){this.$store.commit("inbox/setPage",e)},get:function(){return this.$store.getters["inbox/getPage"]}},pageOptions:function(){for(var e=[],t=1;t<=this.totalPages;t++)e.push({label:t.toString(),value:t});return e}}),watch:{page:function(){this.fetchResponses()}},methods:l(l({},Object(n.b)({prevPage:"inbox/prevPage",nextPage:"inbox/nextPage",firstPage:"inbox/firstPage",lastPage:"inbox/lastPage",jumpPage:"inbox/jumpPage"})),{},{fetchResponses:function(){this.$store.dispatch("inbox/fetchResponses")},select:function(e){this.$store.dispatch("inbox/selectResponse",e)},isSelected:function(e){return!!this.response&&this.response.id==e.id}})},p=s("KHd+"),d=Object(p.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inbox__response-list"},[s("div",{staticClass:"inbox__response-list__pagination"},[s("a",{staticClass:"text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.firstPage(t)}}},[s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","angle-double-left"]}})],1),e._v(" "),s("a",{staticClass:"text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.prevPage(t)}}},[s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","angle-left"]}})],1),e._v(" "),s("p-select",{staticClass:"m-0 w-full px-4",attrs:{name:"page",filterable:"",options:e.pageOptions},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),e._v(" "),s("a",{staticClass:"text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.nextPage(t)}}},[s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","angle-right"]}})],1),e._v(" "),s("a",{staticClass:"text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.lastPage(t)}}},[s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","angle-double-right"]}})],1)],1),e._v(" "),e.loading?s("div",{staticClass:"absolute w-full pin-t p-2 text-sm flex justify-center items-center bg-gray-900 text-gray-100 rounded-b"},[s("fa-icon",{staticClass:"fa-spin mr-3",attrs:{icon:["fas","circle-notch"]}}),e._v(" Loading responses...\n    ")],1):e._e(),e._v(" "),e._l(e.responses,(function(t){return s("a",{key:t.id,staticClass:"lg:border-r-4 block hover:bg-gray-100 text-gray-700 hover:text-gray-900",class:{"border-primary-400":e.isSelected(t),"border-gray-200":!e.isSelected(t)},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.select(t)}}},[s("div",{staticClass:"px-4 py-6 border-b border-gray-200"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"mr-3 flex flex-col"},[s("fa-icon",{staticClass:"mb-2",attrs:{icon:["far","star"],"fixed-width":""}}),e._v(" "),s("fa-icon",{attrs:{icon:["far","check-circle"],"fixed-width":""}})],1),e._v(" "),s("div",{staticClass:"w-full"},[s("div",{staticClass:"flex justify-between items-center mb-2"},[s("b",[e._v(e._s(t.identifiable_email_address))]),e._v(" "),s("span",{staticClass:"block text-gray-600 text-sm"},[e._v(e._s(e.$moment(t.created_at).format("L")))])]),e._v(" "),s("div",{staticClass:"text-gray-800"},[e._v("\n                        Re: "+e._s(t.form.name)+"\n                    ")])])])])])})),e._v(" "),0!=e.responses.length||e.loading?e._e():s("div",{staticClass:"text-center p-6 leading-relaxed text-gray-600"},[e._m(0)])],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            This form's inbox is empty."),t("br"),this._v(" "),t("b",[this._v("Try checking back at a later time.")])])}],!1,null,null,null).exports;function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){v(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function v(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var g={name:"response-view",mixins:[s("Huo5").default],computed:b({},Object(n.c)({response:"inbox/getResponse",fields:"inbox/getFields"})),methods:b({},Object(n.b)({}))},m=Object(p.a)(g,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"leading-none flex-1 flex"},[e.response.id?s("div",{staticClass:"w-full"},[s("div",{staticClass:"flex flex-row-reverse border-b py-4 px-6 justify-between items-center",staticStyle:{height:"52px"}},[s("div"),e._v(" "),s("div",{staticClass:"text-gray-500 flex items-center"},[s("fa-icon",{attrs:{icon:["fas","server"],"fixed-width":""}}),e._v(" "),s("span",{staticClass:"text-xs font-mono ml-2"},[e._v(e._s(e.response.identifiable_ip_address))])],1)]),e._v(" "),s("mq-layout",{attrs:{mq:"sm"}},[s("div",{staticClass:"border-b p-6 tracking-wide"},[s("div",{staticClass:"text-lg font-bold"},[e._v("\n                    "+e._s(e.response.identifiable_email_address)+"\n                ")]),e._v(" "),s("div",{staticClass:"mt-3 text-sm"},[s("div",{staticClass:"flex mb-1"},[s("div",{staticClass:"text-gray-700",staticStyle:{width:"75px"}},[e._v("Regarding")]),e._v(" "),s("div",{staticClass:"flex-grow"},[e._v(e._s(e.response.form.name))])]),e._v(" "),s("div",{staticClass:"flex"},[s("div",{staticClass:"text-gray-700",staticStyle:{width:"75px"}},[e._v("Date")]),e._v(" "),s("div",{staticClass:"flex-grow"},[e._v(e._s(e.$moment(e.response.created_at).format("LLL")))])])])])]),e._v(" "),s("mq-layout",{attrs:{mq:"md+"}},[s("div",{staticClass:"flex border-b p-6 tracking-wide justify-between items-center"},[s("div",{staticClass:"flex flex-col text-lg"},[s("b",{staticClass:"mb-2"},[e._v(e._s(e.response.identifiable_email_address))]),e._v(" "),s("span",[e._v("Re: "+e._s(e.response.form.name))])]),e._v(" "),s("div",{staticClass:"text-sm"},[e._v("\n                    "+e._s(e.$moment(e.response.created_at).format("LLL"))+"\n                ")])])]),e._v(" "),s("div",{staticClass:"p-6 leading-loose"},e._l(e.fields,(function(t){return s("div",{key:t.handle,staticClass:"form__group"},[s("label",{staticClass:"form__label",attrs:{for:t.handle}},[e._v(e._s(t.name))]),e._v(" "),s("div",{attrs:{id:t.handle}},["file"==t.type.id?s("div",{staticClass:"bg-white shadow rounded-md mt-2"},[s("ul",e._l(e.response[t.handle],(function(t,r){return s("li",{key:"file."+r},[s("div",{staticClass:"p-2 sm:px-4"},[s("div",{staticClass:"flex items-center justify-between"},[s("router-link",{attrs:{to:"/files/"+t.uuid}},["image"==t.type?s("img",{staticClass:"upload__file--preview max-w-12",attrs:{src:t.url,alt:t.name}}):s("img",{staticClass:"upload__file--preview max-w-12",attrs:{src:"/vendor/fusion/img/"+t.type+"-large.svg",alt:t.name}})]),e._v(" "),s("div",{staticClass:"upload__file--name",domProps:{textContent:e._s(t.name)}}),e._v(" "),s("div",{staticClass:"upload__file--size",domProps:{textContent:e._s(e.filesize(t.bytes))}})],1)])])})),0)]):s("p",[e._v(e._s(e.response[t.handle]))])])])})),0)],1):s("div",{staticClass:"h-full flex flex-1 justify-center items-center text-5xl text-gray-300"},[s("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["far","envelope"]}})],1)])}),[],!1,null,null,null).exports;function _(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function x(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?_(Object(s),!0).forEach((function(t){y(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):_(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function y(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var h={name:"filter-sidebar",computed:x({},Object(n.c)({forms:"inbox/getForms",form:"inbox/getForm"})),methods:x(x({},Object(n.b)({select:"inbox/selectForm"})),{},{isSelected:function(e){return!!this.form&&this.form.id==e.id}})};function O(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?O(Object(s),!0).forEach((function(t){w(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):O(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function w(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var j={head:{title:function(){return{inner:"Inbox"}}},components:{"response-list":d,"response-view":m,"filter-sidebar":Object(p.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inbox__filter-sidebar"},[s("div",{staticClass:"card h-full"},[s("div",{staticClass:"card__body"},[s("div",{staticClass:"list"},[0==e.forms.length?s("div",{staticClass:"list"},[s("span",{staticClass:"list--separator pt-0"},[e._v("Inboxes")]),e._v(" "),s("span",{staticClass:"px-2 text-gray-600 leading-loose"},[e._v("No forms available.")])]):s("div",{staticClass:"list"},[s("span",{staticClass:"list--separator pt-0"},[e._v("Forms")]),e._v(" "),e._l(e.forms,(function(t){return s("a",{key:t.handle,staticClass:"list--item leading-loose",class:{"router-link-active":e.isSelected(t)},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.select(t)}}},[s("fa-icon",{staticClass:"mr-2",attrs:{icon:["fas","inbox"],"fixed-width":""}}),e._v(" "+e._s(t.name))],1)}))],2)])])])])}),[],!1,null,null,null).exports},computed:C({},Object(n.c)({response:"inbox/getResponse"})),methods:C({},Object(n.b)({clear:"inbox/clearResponse"})),beforeRouteEnter:function(e,t,s){i.a.dispatch("inbox/fetchForms").then((function(e){i.a.getters["inbox/getForms"].length&&i.a.dispatch("inbox/selectForm",a.a.head(i.a.getters["inbox/getForms"])),s()}))}},P=Object(p.a)(j,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full max-h-full"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"inbox"}},[e._v("Inbox")])],1),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button",attrs:{to:{name:"forms"}}},[e._v("Manage Forms")])],1),e._v(" "),"sm"==e.$mq&&e.response.id?s("div",{staticClass:"row mb-6"},[s("div",{staticClass:"col w-full"},[s("p-card",{staticClass:"flex items-center justify-between"},[s("a",{staticClass:"rounded p-2 hover:bg-gray-100 text-gray-900 border border-gray-300",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clear(t)}}},[s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","arrow-left"]}})],1)])],1)]):e._e(),e._v(" "),s("div",{staticClass:"row md:h-full"},["sm"==e.$mq&&!e.response.id||"sm"!=e.$mq?s("filter-sidebar"):e._e(),e._v(" "),s("div",{staticClass:"content-container",staticStyle:{"margin-bottom":"0 !important"}},[s("div",{staticClass:"card md:h-full flex flex-1"},["sm"==e.$mq&&!e.response.id||"sm"!=e.$mq?s("response-list"):e._e(),e._v(" "),"sm"==e.$mq&&e.response.id||"sm"!=e.$mq?s("response-view"):e._e()],1)])],1)],1)}),[],!1,null,null,null);t.default=P.exports}}]);