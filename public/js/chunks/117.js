(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{upN0:function(e,t,a){"use strict";a.r(t);var n=a("nUVr"),o={auth:function(){return{permission:"nodes.viewAny"}},head:{title:function(){return{inner:this.navigation.name||"Loading..."}}},data:function(){return{navigation:{},nodes:[],saving:!1,before:null,after:null,form:new n.a({name:"",url:"",new_window:0})}},computed:{options:function(){return _.map(this.nodes,(function(e){return{label:e.name,value:e.id}}))}},methods:{add:function(e){var t=this;this.saving=!0,this.form.post("/api/navigation/"+this.navigation.id+"/nodes").then((function(e){t.fetchNodes().then((function(e){t.reset(),t.saving=!1,toast("Navigation node successfully added","success")}))})).catch((function(e){toast(e.message,"failed")}))},save:function(){var e=this;this.saving=!0;var t={};_.each(this.nodes,(function(e,a){t[e.id]={order:a+1}})),axios.post("/api/navigation/"+this.navigation.id+"/reorder",{nodes:t}).then((function(t){e.saving=!1,toast("Navigation nodes successfully reordered.","success")}))},fetchNodes:function(){var e=this;return axios.get("/api/navigation/"+this.navigation.id).then((function(t){e.nodes=t.data.data.nodes}))},reset:function(){this.form.name="",this.form.url="",this.form.new_window=0},destroy:function(e){var t=this;axios.delete("/api/navigation/"+this.navigation.id+"/nodes/"+e).then((function(e){t.fetchNodes().then((function(){toast("Navigation node successfully deleted.","success")}))}))},moveBefore:function(e){var t=this;axios.post("/api/navigation/"+this.navigation.id+"/nodes/move/before",{move:e,before:this.before}).then((function(e){t.fetchNodes().then((function(){t.before=null,toast("Navigation node successfully moved.","success")}))}))},moveAfter:function(e){var t=this;axios.post("/api/navigation/"+this.navigation.id+"/nodes/move/after",{move:e,after:this.after}).then((function(e){t.fetchNodes().then((function(){t.after=null,toast("Navigation node successfully moved.","success")}))}))}},beforeRouteEnter:function(e,t,a){axios.get("/api/navigation/"+e.params.navigation).then((function(e){a((function(t){t.navigation=e.data.data,t.nodes=e.data.data.nodes,t.$emit("updateHead")}))}))},beforeRouteUpdate:function(e,t,a){var n=this;axios.get("/api/navigation/"+e.params.navigation).then((function(e){n.navigation=e.data.data,n.nodes=e.data.data.nodes,n.$emit("updateHead")})),a()}},i=a("KHd+"),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[a("div",{staticClass:"card"},[a("div",{staticClass:"card__header"},[a("h3",{staticClass:"card__title"},[e._v("Custom URL")])]),e._v(" "),a("div",{staticClass:"card__body"},[a("ui-input-group",{attrs:{name:"name",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("ui-input-group",{attrs:{name:"url",label:"URL"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}}),e._v(" "),a("ui-select-group",{attrs:{name:"new_window",label:"Open link where",help:"Determine where the link should open.",options:[{label:"New Window",value:1},{label:"Same Window",value:0}]},model:{value:e.form.new_window,callback:function(t){e.$set(e.form,"new_window",t)},expression:"form.new_window"}}),e._v(" "),a("ui-button",{attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.add("custom")}}},[e._v("Add")])],1)])]},proxy:!0}])},[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:"anchor"}},[e._v(e._s(e.navigation.name))])],1),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[a("ui-button",{attrs:{to:{name:"navigation"}}},[e._v("Go Back")]),e._v(" "),a("ui-button",{attrs:{variant:"primary",disabled:e.saving},on:{click:function(t){return t.preventDefault(),e.save(t)}}},[e._v("Save")])],1)]),e._v(" "),0==e.nodes.length?a("div",{staticClass:"card"},[a("div",{staticClass:"card__body text-center"},[a("p",[e._v("Add your first node to get started.")])])]):a("div",{staticClass:"table__wrapper"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticClass:"w-20"}),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("URL")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",{staticClass:"w-20"})])]),e._v(" "),a("ui-sortable-list",{staticClass:"sortable-list",model:{value:e.nodes,callback:function(t){e.nodes=t},expression:"nodes"}},[a("tbody",e._l(e.nodes,(function(t){return a("ui-sortable-item",{key:t.id},[a("tr",[a("td",{staticClass:"w-8"},[a("ui-sortable-handle",{staticClass:"mr-6 text-gray-400"},[a("div",{staticClass:"w-6 h-6 flex items-center justify-center"},[a("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","grip-vertical"]}})],1)])],1),e._v(" "),a("td",[a("ui-status",{staticClass:"mr-2",attrs:{value:t.status}}),e._v(" "),a("router-link",{attrs:{to:{name:"navigation.nodes.edit",params:{navigation:e.navigation.id,node:t.id}}}},[e._v(e._s(t.name))]),e._v(" "),t.new_window?a("fa-icon",{staticClass:"fa-fw text-gray-500 text-xs",attrs:{icon:["fas","external-link-alt"]}}):e._e()],1),e._v(" "),a("td",[a("span",{staticClass:"text-sm text-gray-600"},[e._v("\n                                    "+e._s(t.url)+"\n                                ")])]),e._v(" "),a("td",[a("span",{staticClass:"text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none"},[e._v("custom")])]),e._v(" "),a("td",{staticClass:"actions"},[a("div",{staticClass:"draggable__actions"},[a("ui-table-actions",{key:"node_"+t.id+"_actions",attrs:{right:"",id:"node_"+t.id+"_actions"}},[a("ui-dropdown-link",{attrs:{to:{name:"navigation.nodes.edit",params:{navigation:e.navigation.id,node:t.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),e.nodes.length>1?a("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:move-before",value:t,expression:"node",arg:"move-before"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                            Move before...\n                                        ")]):e._e(),e._v(" "),e.nodes.length>1?a("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:move-after",value:t,expression:"node",arg:"move-after"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                            Move after...\n                                        ")]):e._e(),e._v(" "),a("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-node",value:t,expression:"node",arg:"delete-node"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                                            Delete\n                                        ")])],1)],1)])])])})),1)])],1)]),e._v(" "),e._v(" "),a("portal",{attrs:{to:"modals"}},[a("ui-modal",{key:"delete_node",attrs:{name:"delete-node",title:"Delete Node"},scopedSlots:e._u([{key:"footer",fn:function(t){return[a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-node",arg:"delete-node"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(a){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-node",arg:"delete-node"}]},[e._v("Cancel")])]}}])},[a("p",[e._v("Are you sure you want to permenantly delete this node?")])]),e._v(" "),a("ui-modal",{key:"move_before",attrs:{name:"move-before",title:"Move before..."},scopedSlots:e._u([{key:"footer",fn:function(t){return[a("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-before",arg:"move-before"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(a){return e.moveBefore(t.data.id)}}},[e._v("Move")]),e._v(" "),a("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],on:{click:function(t){e.before=null}}},[e._v("Cancel")])]}}])},[[a("p",[e._v("Which node would you like to move before?")]),e._v(" "),a("ui-select-group",{attrs:{name:"before",label:"Node","hide-label":"",options:e.options},model:{value:e.before,callback:function(t){e.before=t},expression:"before"}})]],2),e._v(" "),a("ui-modal",{key:"move_after",attrs:{name:"move-after",title:"Move after..."},scopedSlots:e._u([{key:"footer",fn:function(t){return[a("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(a){return e.moveAfter(t.data.id)}}},[e._v("Move")]),e._v(" "),a("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],on:{click:function(t){e.after=null}}},[e._v("Cancel")])]}}])},[[a("p",[e._v("Which node would you like to move after?")]),e._v(" "),a("ui-select-group",{attrs:{name:"after",label:"Node","hide-label":"",options:e.options},model:{value:e.after,callback:function(t){e.after=t},expression:"after"}})]],2)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);