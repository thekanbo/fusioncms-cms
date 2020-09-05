(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{ukH2:function(t,e,n){"use strict";n.r(e),n.d(e,"getEntry",(function(){return r}));var o=n("nUVr");function r(t,e,n){axios.get("/api/collections/"+t+"/"+e).then((function(t){var e=t.data.data.matrix,o=t.data.data.entry,r={name:o.name,slug:o.slug,status:o.status};_.forEach(e.blueprint.sections,(function(t){_.forEach(t.fields,(function(t){r[t.handle]=o[t.handle]}))})),n(null,o,e,r)})).catch((function(t){n(new Error("The requested entry could not be found"))}))}var a={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{collection:{},entry:{},form:null}},components:{"shared-form":n("ummp").a},methods:{submit:function(){var t=this;this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(e){toast("Entry saved successfully","success"),t.$router.push("/collection/"+t.collection.slug)})).catch((function(t){toast(t.message,"failed")}))}},beforeRouteEnter:function(t,e,n){r(t.params.collection,t.params.id,(function(t,e,r,a){n(t?function(e){e.$router.push("/collection/"+e.$router.currentRoute.params.collection),toast(t.toString(),"danger")}:function(t){t.collection=r,t.entry=e,t.form=new o.a(a,!0),t.$emit("updateHead")})}))},beforeRouteUpdate:function(t,e,n){var a=this;r(t.params.collection,t.params.id,(function(t,e,n,r){t?(a.$router.push("/collection/"+a.$router.currentRoute.params.collection),toast(t.toString(),"danger")):(a.collection=n,a.entry=e,a.form=new o.a(r,!0),a.$emit("updateHead"))})),n()}},s=n("KHd+"),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("portal",{attrs:{to:"title"}},[n("page-title",{attrs:{icon:t.collection.icon||"pencil-alt"}},[t._v("Edit "+t._s(t.collection.reference_singular))])],1),t._v(" "),n("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.collection.description))]),t._v(" "),t.form?n("shared-form",{attrs:{form:t.form,entry:t.entry,collection:t.collection}}):t._e()],1)}),[],!1,null,null,null);e.default=l.exports},ummp:function(t,e,n){"use strict";var o={props:{entry:{required:!1},collection:{required:!0},form:{type:Object,required:!0}},computed:{sections:function(){return{body:_.filter(this.collection.blueprint.sections,(function(t){return"body"==t.placement})),sidebar:_.filter(this.collection.blueprint.sections,(function(t){return"sidebar"==t.placement}))}}}},r=n("KHd+"),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[t.collection.show_name_field||t.entry.id?n("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",help:t.collection.show_name_field?"":"This field is auto-generated based on pattern specified.",watch:t.form.name,readonly:!t.collection.show_name_field,"has-error":t.form.errors.has("slug"),"error-message":t.form.errors.get("slug")},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}}):t._e(),t._v(" "),n("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),t._v(" "),t._l(t.sections.sidebar,(function(e){return n("div",{key:e.handle,staticClass:"card"},[n("div",{staticClass:"card__header"},[n("h3",{staticClass:"card__title"},[t._v(t._s(e.name))]),t._v(" "),e.description?n("p",{staticClass:"card__subtitle"},[t._v(t._s(e.description))]):t._e()]),t._v(" "),n("div",{staticClass:"card__body"},t._l(e.fields,(function(o){return n("div",t._l(e.fields,(function(e){return n(e.type.id+"-fieldtype",{key:e.handle,tag:"component",attrs:{field:e,"has-error":t.form.errors.has(e.handle),"error-message":t.form.errors.get(e.handle)},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})})),1)})),0)])})),t._v(" "),t.entry?n("p-definition-list",[n("p-definition",{attrs:{name:"Status"}},[n("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":t.entry.status,"text-danger-500":!t.entry.status},attrs:{icon:["fas","circle"]}}),t._v(" "+t._s(t.entry.status?"Enabled":"Disabled")+"\n            ")],1),t._v(" "),n("p-definition",{attrs:{name:"Created At"}},[t._v("\n                "+t._s(t.$moment(t.entry.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),t._v(" "),n("p-definition",{attrs:{name:"Updated At"}},[t._v("\n                "+t._s(t.$moment(t.entry.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):t._e()]},proxy:!0}])},[n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[t.collection.slug?n("router-link",{staticClass:"button button--secondary",attrs:{to:{name:"collection.index",params:{collection:t.collection.slug}}}},[t._v("Go Back")]):t._e(),t._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),t.collection.show_name_field?n("p-card",[n("p-card-body",[n("p-title",{attrs:{name:"name",label:t.collection.name_label||"Name",autocomplete:"off",autofocus:"",required:"",placeholder:t.collection.name_label||"Name","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1):t._e(),t._v(" "),t._l(t.sections.body,(function(e){return n("section-card",{key:e.handle,attrs:{title:e.name,description:e.description}},t._l(e.fields,(function(e){return n(e.type.id+"-fieldtype",{key:e.handle,tag:"component",staticClass:"form__group",attrs:{field:e,errors:t.form.errors},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})})),1)}))],2)}),[],!1,null,null,null);e.a=a.exports}}]);