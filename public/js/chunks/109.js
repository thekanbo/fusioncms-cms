(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"09P9":function(e,t,r){"use strict";r.r(t),r.d(t,"getRole",(function(){return s}));function s(e,t){axios.get("/api/roles/"+e).then((function(e){var r=e.data.data;t(null,r)})).catch((function(e){t(new Error("The requested role could not be found"))}))}var n={auth:function(){return{permission:"roles.view"}},head:{title:function(){return{inner:this.role.name||"Loading..."}}},data:function(){return{role:{}}},beforeRouteEnter:function(e,t,r){s(e.params.role,(function(e,t){r(e?function(t){t.$router.push("/roles"),toast(e.toString(),"danger")}:function(e){e.role=t,e.$emit("updateHead")})}))},computed:{endpoint:function(){return this.role?"/datatable/users/"+this.role.name:"/datatable/users"},isOwner:function(){return this.role.id&&1===this.role.id},isGuest:function(){return this.role.id&&2===this.role.id},canEdit:function(){return this.$can("roles.update",this.role.level?this.role.level:0)}}},a=r("KHd+"),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles-page"},[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"user-shield",subtitle:e.role.description}},[e._v("Role - "+e._s(e.role.name))])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},["sm"!=e.$mq?r("ui-button",{key:"go-back-btn",attrs:{to:{name:"roles"},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),e.canEdit?r("ui-button",{key:"edit-role-btn",attrs:{to:{name:"roles.edit",params:{role:e.role.id}},variant:"primary"}},[e._v("Edit Role")]):e._e()],1)]),e._v(" "),r("portal",{attrs:{to:"sidebar-right"}},[r("sidebar",[r("status-card",{attrs:{id:"role_panel_status_card",entry:e.role,tabindex:"-1"}})],1)],1),e._v(" "),r("section-card",{attrs:{id:"roles_panel_permissions",title:e.role.name+" Permissions",description:"Current permissions assigned to this role.",tabindex:"-1"}},[r("p",[e._v("Permissions list coming soon...")])]),e._v(" "),r("section-card",{attrs:{id:"roles_panel_users",grid:!1,title:"Assigned Users",description:"Users currently assigned to this role.",tabindex:"-1"}},[r("ui-table",{key:"role-"+e.role.name+"-table",staticClass:"user-table",attrs:{id:"users",endpoint:e.endpoint,"sort-by":"name","no-search":e.isOwner,"no-actions":"","show-page-status":"","show-page-numbers":"","show-page-nav":"","show-page-ends":""},scopedSlots:e._u([{key:"name",fn:function(t){return[r("div",{staticClass:"flex items-center"},[r("ui-status",{staticClass:"mr-2",attrs:{value:t.record.status}}),e._v(" "),r("router-link",{attrs:{to:{name:"users.show",params:{user:t.record.id}}}},[e._v(e._s(t.record.name))])],1)]}},{key:"email",fn:function(t){return[e._v("\n                "+e._s(t.record.email)+"\n            ")]}},{key:"role",fn:function(t){return[r("ui-badge",[e._v(e._s(t.record.role.name))])]}},{key:"created_at",fn:function(e){return[r("ui-date",{attrs:{timestamp:e.record.created_at}})]}},{key:"email_verified_at",fn:function(t){return[t.record.email_verified_at?r("ui-badge",{attrs:{variant:"success"}},[e._v("Yes")]):r("ui-badge",{attrs:{variant:"danger"}},[e._v("No")])]}}])})],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);