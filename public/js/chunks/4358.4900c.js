(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[4358],{4358:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,getSingle:()=>u});var a=s(6072);const n={props:{entry:{required:!0},single:{required:!0},form:{type:Object,required:!0}},data:function(){return{editSlug:!1,slugValue:""}},computed:{sections:function(){return{body:_.filter(this.single.blueprint.sections,(function(e){return"body"==e.placement})),sidebar:_.filter(this.single.blueprint.sections,(function(e){return"sidebar"==e.placement}))}}},methods:{openEdit:function(){this.slugValue=this.form.slug,this.editSlug=!0,this.slugFocus()},closeEdit:function(){this.slugValue="",this.editSlug=!1,this.editBtnFocus()},saveSlug:function(){""===this.slugValue?this.slugValue=this.form.slug:this.form.slug=this.slugValue,this.closeEdit()},slugFocus:function(){var e=this;this.$nextTick((function(){e.$refs.slug.$el.focus()}))},editBtnFocus:function(){var e=this;this.$nextTick((function(){e.$refs.edit.$el.focus()}))}}};var r=s(1900);const i=(0,r.Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},["sm"!=e.$mq?s("ui-button",{attrs:{to:{name:"dashboard"},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),s("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),s("portal",{attrs:{to:"sidebar-right"}},[e.single?s("sidebar",{attrs:{id:"single-sidebar"}},[s("sidebar-section",{attrs:{id:"single_panel_status",tabindex:"-1"}},[s("ui-toggle",{attrs:{name:"status",label:"Status",help:e.form.status?"Toggle to disable this entry.":"Toggle to enable this entry.","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),s("ui-flatpickr-group",{attrs:{name:"publish_at",id:"publish_at",label:"Publish Date","with-time":!0,"has-error":e.form.errors.has("publish_at"),"error-message":e.form.errors.get("publish_at")},model:{value:e.form.publish_at,callback:function(t){e.$set(e.form,"publish_at",t)},expression:"form.publish_at"}}),e._v(" "),s("ui-flatpickr-group",{attrs:{name:"expire_at",id:"expire_at",label:"Expiry Date","with-time":!0,"has-error":e.form.errors.has("expire_at"),"error-message":e.form.errors.get("expire_at")},model:{value:e.form.expire_at,callback:function(t){e.$set(e.form,"expire_at",t)},expression:"form.expire_at"}})],1),e._v(" "),e._l(e.sections.sidebar,(function(t){return s("sidebar-section",{key:t.handle,attrs:{id:"single_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return s(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,"has-error":e.form.errors.has(t.handle),"error-message":e.form.errors.get(t.handle)},model:{value:e.form[t.handle],callback:function(s){e.$set(e.form,t.handle,s)},expression:"form[field.handle]"}})})),1)})),e._v(" "),e.entry?s("status-card",{attrs:{entry:e.entry,id:"single_panel_status_card",tabindex:"-1"}}):e._e()],2):e._e()],1),e._v(" "),e.single.show_name_field?s("ui-card",{attrs:{id:"single_panel_"+e.single.handle,tabindex:"-1"}},[s("ui-card-body",[s("ui-title-group",{staticClass:"mb-0",attrs:{name:"name",label:e.single.name_label||"Name",autocomplete:"off",autofocus:"",required:"",readonly:e.editSlug,placeholder:e.single.name_label||"Name","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),e.form.slug?s("div",{staticClass:"entry-slug"},[e.editSlug?e._e():s("div",{staticClass:"entry-slug__current"},[s("span",{staticClass:"entry-slug__label"},[e._v("Slug:")]),e._v(" "),s("span",{staticClass:"entry-slug__value"},[e._v(e._s(e.form.slug))]),e._v(" "),s("ui-button",{ref:"edit",staticClass:"entry-slug__action",attrs:{size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.openEdit()}}},[e._v("Edit")])],1),e._v(" "),e.editSlug?s("div",{staticClass:"entry-slug__edit"},[e.editSlug?s("label",{staticClass:"entry-slug__label",attrs:{for:"edit-slug"}},[e._v("Slug:")]):e._e(),e._v(" "),s("ui-slug",{ref:"slug",staticClass:"field--xs",attrs:{id:"edit-slug",name:"edit_slug",monospaced:"",autocomplete:"off"},model:{value:e.slugValue,callback:function(t){e.slugValue=t},expression:"slugValue"}}),e._v(" "),s("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"primary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.saveSlug()}}},[e._v("Apply")]),e._v(" "),s("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"secondary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.closeEdit()}}},[e._v("Cancel")])],1):e._e()]):e._e(),e._v(" "),e.entry.id?s("ui-slug",{attrs:{type:"hidden",name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",help:e.single.show_name_field?"":"This field is auto-generated based on pattern specified.",watch:e.form.name,readonly:!e.single.show_name_field,"has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug")},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}):e._e()],1)],1):e._e(),e._v(" "),e._l(e.sections.body,(function(t){return s("section-card",{key:t.handle,attrs:{id:"single_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return s(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,errors:e.form.errors},model:{value:e.form[t.handle],callback:function(s){e.$set(e.form,t.handle,s)},expression:"form[field.handle]"}})})),1)}))],2)}),[],!1,null,null,null).exports;var l=s(6486),o=s.n(l);function u(e,t){axios.get("/api/singles/"+e).then((function(e){var s={},a={};o().has(e,"data.data.single")?(a=e.data.data.matrix,s=e.data.data.single):(a=e.data.data,s={name:a.name,slug:a.slug,publish_at:null,expire_at:null,status:1});var n={name:s.name,slug:s.slug,publish_at:s.publish_at,expire_at:s.expire_at,status:s.status};o().forEach(a.blueprint.sections,(function(e){o().forEach(e.fields,(function(e){n[e.handle]=s[e.handle]}))})),t(null,s,a,n)})).catch((function(e){t(new Error("The requested entry could not be found"))}))}const c={head:{title:function(){return{inner:o().has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{single:{},entry:{},form:null}},components:{"shared-form":i},computed:{sections:function(){return{body:o().filter(this.single.blueprint.sections,(function(e){return"body"==e.placement})),sidebar:o().filter(this.single.blueprint.sections,(function(e){return"sidebar"==e.placement}))}}},methods:{submit:function(){var e=this;this.form.patch("/api/singles/"+this.single.id).then((function(t){toast("Single saved successfully","success"),e.$router.go()})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,t,s){u(e.params.single,(function(e,t,n,r){s((function(e){e.single=n,e.entry=t,e.form=new a.Z(r,!0),e.$emit("updateHead")}))}))},beforeRouteUpdate:function(e,t,s){var n=this;u(e.params.single,(function(e,t,s,r){n.single=s,n.entry=t,n.form=new a.Z(r,!0),n.$emit("updateHead")})),s()}};const d=(0,r.Z)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"single-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:e.single.icon||"pencil-alt",subtitle:e.single.description}},[e._v("Edit "+e._s(e.single.reference_singular))])],1),e._v(" "),e.form?s("shared-form",{attrs:{form:e.form,entry:e.entry,single:e.single}}):e._e()],1)}),[],!1,null,null,null).exports}}]);