// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/html","dijit/form/ComboBox","dojox/validate/regexp"],function(c,d,e,f){return c([e],{required:!0,invalidMessage:"Invalid url.",trim:!0,rest:!0,allowNamed:!1,allowLocal:!1,declaredClass:"jimu.dijit.URLComboBox",postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.urlInput;this.invalidMessage=this.nls.invalidUrl},postCreate:function(){this.inherited(arguments);d.addClass(this.domNode,"jimu-url-combobox")},validator:function(a){if(isFinite(a))return!1;
var b="^"+f.url({allowNamed:this.allowNamed,allowLocal:this.allowLocal}),b=(new RegExp(b,"g")).test(a);return this.rest?(a=/\/rest\/services/gi.test(a),b&&a):b}})});