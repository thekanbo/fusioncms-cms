(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{tEhs:function(t,e,o){"use strict";o.r(e),o.d(e,"getCollection",(function(){return a}));var n=o("nUVr");function a(t,e){axios.get("/api/matrices/slug/"+t).then((function(t){var o=t.data.data,n={name:"",slug:"",status:1};o.fieldset&&_.forEach(o.fieldset.sections,(function(t){_.forEach(t.fields,(function(t){n[t.handle]=t.default}))})),e(null,o,n)})).catch((function(t){e(new Error("The requested collection could not be found"))}))}var r={head:{title:function(){return{inner:this.collection.reference_singular||"Loading..."}}},data:function(){return{collection:{},form:null}},components:{"shared-form":o("ummp").a},methods:{submit:function(){var t=this;this.form.post("/api/collections/"+this.collection.slug).then((function(e){toast("Entry saved successfully","success"),t.$router.push("/collection/"+t.collection.slug)})).catch((function(t){toast(t.message,"failed")}))}},beforeRouteEnter:function(t,e,o){a(t.params.collection,(function(t,e,a){o(t?function(e){e.$router.push("/collection/"+e.$router.currentRoute.params.collection),toast(t.toString(),"danger")}:function(t){t.collection=e,t.form=new n.a(a,!0),t.$emit("updateHead")})}))},beforeRouteUpdate:function(t,e,o){var r=this;a(t.params.collection,(function(t,e,o){t?(r.$router.push("/collection/"+r.$router.currentRoute.params.collection),toast(t.toString(),"danger")):(r.collection=e,r.form=new n.a(o,!0),r.$emit("updateHead"))})),o()}},s=o("KHd+"),l=Object(s.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("portal",{attrs:{to:"title"}},[o("page-title",{attrs:{icon:t.collection.icon}},[t._v("Create "+t._s(t.collection.reference_singular))])],1),t._v(" "),o("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.collection.description))]),t._v(" "),t.form?o("shared-form",{attrs:{form:t.form,collection:t.collection}}):t._e()],1)}),[],!1,null,null,null);e.default=l.exports},ummp:function(t,e,o){"use strict";var n={props:{entry:{required:!1},collection:{required:!0},form:{type:Object,required:!0}},computed:{sections:function(){var t=[],e=[];return this.collection.fieldset&&(t=_.filter(this.collection.fieldset.sections,(function(t){return"body"==t.placement})),e=_.filter(this.collection.fieldset.sections,(function(t){return"sidebar"==t.placement}))),{body:t,sidebar:e}}}},a=o("KHd+"),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[o("div",{staticClass:"card"},[o("div",{staticClass:"card__body"},[o("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",watch:t.form.name,"has-error":t.form.errors.has("slug"),"error-message":t.form.errors.get("slug")},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}}),t._v(" "),o("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),t._v(" "),t._l(t.sections.sidebar,(function(e){return o("div",{key:e.handle,staticClass:"card"},[o("div",{staticClass:"card__header"},[o("h3",{staticClass:"card__title"},[t._v(t._s(e.name))]),t._v(" "),e.description?o("p",{staticClass:"card__subtitle"},[t._v(t._s(e.description))]):t._e()]),t._v(" "),o("div",{staticClass:"card__body"},t._l(e.fields,(function(n){return o("div",t._l(e.fields,(function(e){return o(e.type.id+"-fieldtype",{key:e.handle,tag:"component",attrs:{field:e,"has-error":t.form.errors.has(e.handle),"error-message":t.form.errors.get(e.handle)},model:{value:t.form[e.handle],callback:function(o){t.$set(t.form,e.handle,o)},expression:"form[field.handle]"}})})),1)})),0)])})),t._v(" "),t.entry?o("p-definition-list",[o("p-definition",{attrs:{name:"Status"}},[o("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":t.entry.status,"text-danger-500":!t.entry.status},attrs:{icon:["fas","circle"]}}),t._v(" "+t._s(t.entry.status?"Enabled":"Disabled")+"\n            ")],1),t._v(" "),o("p-definition",{attrs:{name:"Created At"}},[t._v("\n                "+t._s(t.$moment(t.entry.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),t._v(" "),o("p-definition",{attrs:{name:"Updated At"}},[t._v("\n                "+t._s(t.$moment(t.entry.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):t._e()]},proxy:!0}])},[o("portal",{attrs:{to:"actions"}},[o("div",{staticClass:"buttons"},[t.collection.slug?o("router-link",{staticClass:"button button--secondary",attrs:{to:{name:"collection.index",params:{collection:t.collection.slug}}}},[t._v("Go Back")]):t._e(),t._v(" "),o("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card__body"},[t.collection.show_name_field?o("p-title",{attrs:{name:"name",label:t.collection.name_label||"Name",autocomplete:"off",autofocus:"",required:"",placeholder:t.collection.name_label||"Name","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}):t._e(),t._v(" "),t.sections.body.length>0?o("p-tabs",t._l(t.sections.body,(function(e){return o("p-tab",{key:e.handle,attrs:{name:e.name}},t._l(e.fields,(function(e){return o(e.type.id+"-fieldtype",{key:e.handle,tag:"component",staticClass:"form__group",attrs:{field:e,errors:t.form.errors},model:{value:t.form[e.handle],callback:function(o){t.$set(t.form,e.handle,o)},expression:"form[field.handle]"}})})),1)})),1):o("div",{staticClass:"text-center"},[o("p",[t._v("Things are looking a little empty here!")]),t._v(" "),o("router-link",{staticClass:"button",attrs:{to:"/matrices/"+t.collection.id+"/edit"}},[t._v("Configure your collection")])],1)],1)])],1)}),[],!1,null,null,null);e.a=r.exports}}]);