(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{oxcM:function(e,t,a){"use strict";a.r(t);var s={name:"address-fieldtype",data:function(){var e={},t=this.value;return e=this.value?{address1:t.address1||"",address2:t.address2||"",city:t.city||"",state:t.state||"",zip:t.zip||"",country:t.country||"",lat:t.lat||"",lng:t.lng||"",formatted_address:this.addressLookup||""}:{address1:"",address2:"",city:"",state:"",zip:"",country:"",lat:"",lng:"",formatted_address:""},{marker:null,data:e,mapError:"",help:'<p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address.</p><p>Once you have obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>'}},props:{field:{type:Object,required:!0},value:{default:null}},computed:{apiKey:function(){return this.setting("maps_api_key")},hasAPIKey:function(){return this.apiKey&&""!=this.apiKey},mapID:function(){return this.field.handle+"_map"},addressLookup:function(){var e=this.data.address1+" "+this.data.address2;return this.data.city&&(e=e+", "+this.data.city),(this.data.state||this.data.zip)&&(e=e+", "+this.data.state+" "+this.data.zip),this.data.country&&(e=e+", "+this.data.country),e.replace(/ +/g," ")}},watch:{addressLookup:function(){this.locateAddress()},apiKey:function(e){var t=this;e&&""!=e&&this.$nextTick((function(){t.initializeMap()}))}},methods:{updateValue:function(e,t){this.data[t]=e,this.$emit("input",this.data)},initializeMap:function(){if(_.isUndefined(window.google)){var e=this,t=document.createElement("script");window.mapInit=function(){e.createMap()},t.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=".concat(this.apiKey,"&callback=mapInit")),document.head.appendChild(t)}else this.createMap()},createMap:function(){_.isUndefined(window.google)||(this.map=new google.maps.Map(document.getElementById(this.mapID)),this.locateAddress())},locateAddress:_.debounce((function(){if(!_.isUndefined(window.google)){google.maps.event.trigger(this.map,"resize");var e=new google.maps.Geocoder,t=this,a=this.addressLookup;if(""==a||" "==a)return null!==this.marker&&this.marker.setMap(null),this.map.setCenter(new google.maps.LatLng(0,0)),this.map.setZoom(1),this.data.formatted_address="",this.data.lat="",void(this.data.lng="");e.geocode({address:a},(function(e,s){s===google.maps.GeocoderStatus.OK&&(t.map.setCenter(e[0].geometry.location),t.map.setZoom(16),t.data.formatted_address=e[0].formatted_address,t.data.lat=e[0].geometry.location.lat(),t.data.lng=e[0].geometry.location.lng(),""===a&&" "===a||(null!==t.marker&&t.marker.setMap(null),t.marker=new google.maps.Marker({map:t.map,position:e[0].geometry.location})))}))}}),500)}},i=a("KHd+"),d=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-fieldset",{attrs:{label:e.field.name,help:e.field.help}},[a("div",{staticClass:"row"},[a("ui-input-group",{staticClass:"col md:w-1/2",attrs:{label:"Address 1","hide-label":"",name:e.field.handle+"_address1",placeholder:"Address 1",value:e.data.address1,required:e.field.required},on:{input:function(t){return e.updateValue(t,"address1")}}}),e._v(" "),a("ui-input-group",{staticClass:"col md:w-1/2",attrs:{label:"Address 2","hide-label":"",name:e.field.handle+"_address2",placeholder:"Address 2",value:e.data.address2},on:{input:function(t){return e.updateValue(t,"address2")}}}),e._v(" "),a("ui-input-group",{staticClass:"col md:w-1/3",attrs:{label:"City","hide-label":"",name:e.field.handle+"_city",placeholder:"City",value:e.data.city,required:e.field.required},on:{input:function(t){return e.updateValue(t,"city")}}}),e._v(" "),a("ui-input-group",{staticClass:"col md:w-1/3",attrs:{label:"State","hide-label":"",name:e.field.handle+"_state",placeholder:"State",value:e.data.state,required:e.field.required},on:{input:function(t){return e.updateValue(t,"state")}}}),e._v(" "),a("ui-input-group",{staticClass:"col md:w-1/3",attrs:{label:"Zip Code","hide-label":"",name:e.field.handle+"_zip",placeholder:"Zip Code",value:e.data.zip,required:e.field.required},on:{input:function(t){return e.updateValue(t,"zip")}}}),e._v(" "),a("ui-input-group",{staticClass:"col",attrs:{label:"Country","hide-label":"",name:e.field.handle+"_country",placeholder:"Country",value:e.data.country},on:{input:function(t){return e.updateValue(t,"country")}}})],1),e._v(" "),a("div",{staticClass:"h-full rounded",attrs:{id:e.mapID}},[e.mapError?a("div",{staticClass:"bg-gray-100 rounded shadow p-3",domProps:{innerHTML:e._s(e.mapError)}}):e._e()]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.hasAPIKey,expression:"hasAPIKey == false"}],staticClass:"help"},[a("p",[e._v("A "),a("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank"}},[e._v("Google Maps API key")]),e._v(" is required in order to view the map component and retrieve latitude and longitude coordinates for your address. \n            Once you've obtained one, please visit the "),a("router-link",{attrs:{to:"/settings/google_maps"}},[e._v("Google Maps settings page")]),e._v(" to enter your API key.")],1)])])}),[],!1,null,null,null);t.default=d.exports}}]);