(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{X4nO:function(t,e,s){"use strict";s.r(e),s.d(e,"getUserAndRoles",(function(){return r}));function r(t,e){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+t)]).then(axios.spread((function(t,s){s=s.data.data,t=t.data.data,e(null,s,t,{name:s.name,email:s.email,status:s.status,role:s.role.name,password:"",password_confirmation:""})})))}var i={auth:function(){return{permission:"users.view"}},computed:{endpoint:function(){if(this.user.id)return"/datatable/users/"+this.user.id+"/activities"},verified:function(){return!(!this.user.email_verified_at||"0000-00-00 00:00:00"==this.user.email_verified_at)},canEdit:function(){return this.$user.id==this.user.id||!!this.user.role&&this.$can("users.update",this.user.role?this.user.role.level:0)}},head:{title:function(){return{inner:this.user.name||"Loading..."}}},data:function(){return{user:{},roles:[]}},beforeRouteEnter:function(t,e,s){r(t.params.user,(function(t,e,r,i){s(t?function(e){e.$router.push("/users"),toast(t.toString(),"danger")}:function(t){t.user=e,t.roles=r,t.$emit("updateHead")})}))},methods:{destroy:function(t){var e=this;axios.delete("/api/users/"+t).then((function(t){toast("User successfully deleted.","success"),e.$router.push("/users")}))}}},a=s("KHd+"),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"users"}},[t._v("User Profile - "+t._s(t.user.name))])],1),t._v(" "),s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},["sm"!=t.$mq?s("ui-button",{key:"go-back-btn",attrs:{to:{name:"users"},variant:"secondary"}},[t._v("Go Back")]):t._e(),t._v(" "),t.canEdit?s("ui-button",{key:"edit-user-btn",attrs:{to:{name:"users.edit",params:{user:t.user.id}},variant:"primary"}},[t._v("Edit User")]):t._e()],1)]),t._v(" "),s("portal",{attrs:{to:"sidebar-right"}},[s("sidebar",[t.user?s("status-card",{attrs:{id:"user_panel_status_card",entry:t.user,user:!0,tabindex:"-1"}}):t._e()],1)],1),t._v(" "),s("section-card",{attrs:{id:"user_panel_info",title:"User Information",description:"General information about this user."}},[s("dl",{staticClass:"detail-list"},[s("dt",[t._v("Name")]),t._v(" "),s("dd",[t._v(t._s(t.user.name))]),t._v(" "),s("dt",[t._v("Email")]),t._v(" "),s("dd",[t._v(t._s(t.user.email))]),t._v(" "),s("dt",[t._v("Role")]),t._v(" "),s("dd",[t._v(t._s(t.user.role?t.user.role.name:"Loading..."))])])]),t._v(" "),s("section-card",{attrs:{id:"user_panel_activity",title:"User Activity",description:"See what this user has been doing around the site.",tabindex:"-1"}},[t.user.id?s("ui-table",{key:"activities-"+t.user.id,staticClass:"activities-table",attrs:{id:"activities",endpoint:t.endpoint,"sort-by":"created_at","sort-in":"desc","per-page":10},scopedSlots:t._u([{key:"description",fn:function(e){return[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"mr-4 w-3"},[e.record.properties.icon?s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas",e.record.properties.icon]}}):s("fa-icon",{staticClass:"fa-xs fa-fw",attrs:{icon:["fas","circle"]}})],1),t._v("\n\n                    "+t._s(e.record.description)+"\n\n                    "),e.record.properties.link?s("router-link",{staticClass:"ml-2",attrs:{to:"/"+e.record.properties.link}},[s("fa-icon",{staticClass:"fa-fw fa-sm",attrs:{icon:["fas","link"]}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Link to related property")])],1):t._e()],1)]}},{key:"created_at",fn:function(t){return[s("ui-datetime",{attrs:{timestamp:t.record.created_at}})]}}],null,!1,3801163566)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);