(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"9wAk":function(e,t,r){"use strict";var o={data:function(){return{ready:!1,fieldtype:{}}},props:{form:{type:Object,required:!0},resource:{type:Object,required:!1,default:function(){}}},watch:{"form.collect_email_addresses":function(e){this.ready&&(!1===e?(this.form.response_receipt=!1,this.removeIdentifiableEmailField()):this.addIdentifiableEmailField())}},methods:{addIdentifiableEmailField:function(){bus().$emit("add-field-".concat(this.form.sections[0].handle),{type:this.fieldtype,settings:{type:"email",identifiable:!0}})},removeIdentifiableEmailField:function(){bus().$emit("remove-field-".concat(this.form.sections[0].handle),"settings.identifiable",!0)}},created:function(){var e=this;axios.all([axios.get("/api/fieldtypes/input")]).then(axios.spread((function(t){e.fieldtype=t.data,e.ready=!0})))}},s=r("KHd+"),a=Object(s.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("p-slug",{attrs:{name:"handle",label:"Handle",autocomplete:"off",monospaced:"",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),r("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),e.resource?r("p-definition-list",[r("p-definition",{attrs:{name:"Status"}},[r("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.resource.status,"text-danger-500":!e.resource.status},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.resource.status?"Enabled":"Disabled")+"\n            ")],1),e._v(" "),r("p-definition",{attrs:{name:"Created At"}},[e._v("\n                "+e._s(e.$moment(e.resource.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),e._v(" "),r("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                "+e._s(e.$moment(e.resource.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):e._e()]},proxy:!0}])},[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("router-link",{staticClass:"button",attrs:{to:{name:"forms"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),r("section-card",{attrs:{title:"General Information",description:"General information about this form and what it collects."}},[r("p-input",{attrs:{name:"name",label:"Name",help:"What should this form be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-textarea",{attrs:{name:"description",label:"Description",help:"Give a short description of what this form will collect.",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("section-card",{attrs:{title:"Privacy",description:"Configure this forms privacy settings."}},[r("p-checkbox-group",{staticClass:"mb-0",attrs:{inline:""}},[r("p-checkbox",{attrs:{name:"collect_email_addresses",id:"collect_email_addresses"},model:{value:e.form.collect_email_addresses,callback:function(t){e.$set(e.form,"collect_email_addresses",t)},expression:"form.collect_email_addresses"}},[e._v("Collect email addresses")]),e._v(" "),r("p-checkbox",{attrs:{name:"collect_ip_addresses",id:"collect_ip_addresses"},model:{value:e.form.collect_ip_addresses,callback:function(t){e.$set(e.form,"collect_ip_addresses",t)},expression:"form.collect_ip_addresses"}},[e._v("Collect IP addresses")])],1),e._v(" "),r("p-checkbox-group",{staticClass:"-mt-3",attrs:{inline:"",help:"Respondents will receive a copy of their submission."}},[r("p-checkbox",{attrs:{name:"response_receipt",id:"response_receipt",disabled:!e.form.collect_email_addresses},model:{value:e.form.response_receipt,callback:function(t){e.$set(e.form,"response_receipt",t)},expression:"form.response_receipt"}},[e._v("Response receipts")])],1)],1),e._v(" "),r("section-card",{attrs:{title:"Spam",description:"Configure this forms spam protection settings."}},[r("p-checkbox-group",{attrs:{help:"Be sure to enter your site key and secret key in settings."}},[r("p-checkbox",{attrs:{name:"enable_recaptcha",id:"enable_recaptcha"},model:{value:e.form.enable_recaptcha,callback:function(t){e.$set(e.form,"enable_recaptcha",t)},expression:"form.enable_recaptcha"}},[e._v("Enable Google reCAPTCHA")])],1),e._v(" "),r("p-checkbox-group",{attrs:{help:"A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time."}},[r("p-checkbox",{attrs:{name:"enable_honeypot",id:"enable_honeypot"},model:{value:e.form.enable_honeypot,callback:function(t){e.$set(e.form,"enable_honeypot",t)},expression:"form.enable_honeypot"}},[e._v("Enable Honeypot")])],1)],1),e._v(" "),r("section-card",{attrs:{title:"Notifications",description:"Configure who should receive notifications when submissions are made."}},[r("p-textarea",{attrs:{name:"send_to",label:"Send notifications to...",help:"List emails as a comma separated list.",placeholder:"marie.c@example.com, nikola.t@example.com","has-error":e.form.errors.has("send_to"),"error-message":e.form.errors.get("send_to")},model:{value:e.form.send_to,callback:function(t){e.$set(e.form,"send_to",t)},expression:"form.send_to"}}),e._v(" "),r("p-input",{attrs:{name:"reply_to",label:"Reply to...",help:"Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings.",autocomplete:"off","has-error":e.form.errors.has("reply_to"),"error-message":e.form.errors.get("reply_to")},model:{value:e.form.reply_to,callback:function(t){e.$set(e.form,"reply_to",t)},expression:"form.reply_to"}})],1),e._v(" "),r("section-card",{attrs:{title:"Confirmations",description:"Configure confirmation settings when submissions are made."}},[r("p-radio-group",{attrs:{inline:"",label:"After submitting the form...","has-error":e.form.errors.has("redirect_on_submission"),"error-message":e.form.errors.get("redirect_on_submission")}},[r("p-radio",{attrs:{id:"redirect_on_submission_false",name:"redirect_on_submission","native-value":!1},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to default confirmation page...")]),e._v(" "),r("p-radio",{attrs:{id:"redirect_on_submission_true",name:"redirect_on_submission","native-value":!0},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to custom page...")])],1),e._v(" "),!1===e.form.redirect_on_submission?r("p-input",{attrs:{name:"confirmation_message",label:"Message",help:"This message will be displayed on the confirmation page.",autocomplete:"off","has-error":e.form.errors.has("confirmation_message"),"error-message":e.form.errors.get("confirmation_message"),placeholder:"Thank you! We'll be in touch soon."},model:{value:e.form.confirmation_message,callback:function(t){e.$set(e.form,"confirmation_message",t)},expression:"form.confirmation_message"}}):e._e(),e._v(" "),!0===e.form.redirect_on_submission?r("p-input",{attrs:{name:"redirect_url",label:"URL",help:"The URL to redirect users to after submitting the form.",autocomplete:"off","has-error":e.form.errors.has("redirect_url"),"error-message":e.form.errors.get("redirect_url")},model:{value:e.form.redirect_url,callback:function(t){e.$set(e.form,"redirect_url",t)},expression:"form.redirect_url"}}):e._e()],1),e._v(" "),r("section-card",{attrs:{title:"Templates",description:"Configure this forms template settings."}},[r("p-input",{attrs:{name:"form_template",label:"Form Template",help:"What template is responsible for rendering this form?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("form_template"),"error-message":e.form.errors.get("form_template")},model:{value:e.form.form_template,callback:function(t){e.$set(e.form,"form_template",t)},expression:"form.form_template"}}),e._v(" "),r("p-input",{attrs:{name:"thankyou_template",label:"Thank You Template",help:"What template is reponsible for thanking respondents?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("thankyou_template"),"error-message":e.form.errors.get("thankyou_template")},model:{value:e.form.thankyou_template,callback:function(t){e.$set(e.form,"thankyou_template",t)},expression:"form.thankyou_template"}})],1),e._v(" "),r("section-card",{attrs:{title:"Blueprint",description:"Configure this forms blueprint."}},[r("section-builder",{model:{value:e.form.sections,callback:function(t){e.$set(e.form,"sections",t)},expression:"form.sections"}})],1)],1)}),[],!1,null,null,null);t.a=a.exports},ltnn:function(e,t,r){"use strict";r.r(t),r.d(t,"getForm",(function(){return s}));var o=r("nUVr");function s(e,t){axios.get("/api/forms/"+e).then((function(e){t(null,e.data.data)})).catch((function(e){t(new Error("The requested form could not be found"))}))}var a={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,resource:null,form:null}},components:{"shared-form":r("9wAk").a},methods:{submit:function(){var e=this;this.form.patch("/api/forms/".concat(this.id)).then((function(){axios.post("/api/blueprints/".concat(e.resource.blueprint.id,"/sections"),{sections:e.form.sections}).then((function(){toast("Form successfully saved","success")}))})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,r){s(e.params.form,(function(e,t){r(e?function(t){t.$router.push("/forms"),toast(e.toString(),"danger")}:function(e){e.id=t.id,e.resource=t,e.form=new o.a({name:t.name,handle:t.handle,description:t.description,sections:t.blueprint.sections,collect_email_addresses:t.collect_email_addresses,collect_ip_addresses:t.collect_ip_addresses,response_receipt:t.response_receipt,confirmation_message:t.confirmation_message,redirect_on_submission:t.redirect_on_submission,redirect_url:t.redirect_url,enable_recaptcha:t.enable_recaptcha,enable_honeypot:t.enable_honeypot,send_to:t.send_to,reply_to:t.reply_to,form_template:t.form_template,thankyou_template:t.thankyou_template,status:t.status},!0),e.$nextTick((function(){e.$emit("updateHead")}))})}))}},i=r("KHd+"),n=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"paper-plane"}},[this._v("Edit Form")])],1),this._v(" "),this.form?t("shared-form",{attrs:{form:this.form,resource:this.resource}}):this._e()],1)}),[],!1,null,null,null);t.default=n.exports}}]);