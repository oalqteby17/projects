/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={704:(t,e,o)=>{t.exports=o(79)("./src/core.js")},492:(t,e,o)=>{t.exports=o(79)("./src/engine.js")},273:(t,e,o)=>{t.exports=o(79)("./src/ui.js")},209:(t,e,o)=>{t.exports=o(79)("./src/utils.js")},434:(t,e,o)=>{t.exports=o(79)("./src/watchdog.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";o.r(r),o.d(r,{DecoupledEditor:()=>F});var t=o(704),e=o(209),i=o(434),n=o(273),s=o(492);class c extends n.EditorUI{constructor(t,e){super(t),this.view=e}init(){const t=this.editor,e=this.view,o=t.editing.view,r=e.editable,i=o.document.getRoot();r.name=i.rootName,e.render();const n=r.element;this.setEditableElement(r.name,n),e.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(n),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const t=this.view;this.editor.editing.view.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.editor,e=this.view;e.toolbar.fillFromConfig(t.config.get("toolbar"),this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,o=e.document.getRoot(),r=(t.sourceElement,t.config.get("placeholder"));if(r){const t="string"==typeof r?r:r[o.rootName];t&&(0,s.enablePlaceholder)({view:e,element:o,text:t,isDirectHost:!1,keepOnFocus:!0})}}}class l extends n.EditorUIView{constructor(t,e,o={}){super(t);const r=t.t;this.toolbar=new n.ToolbarView(t,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new n.InlineEditableUIView(t,e,o.editableElement,{label:t=>r("Rich Text Editor. Editing area: %0",t.name)}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:t.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.toolbar,this.editable])}}const a=function(t){return null!=t&&"object"==typeof t};const d="object"==typeof global&&global&&global.Object===Object&&global;var u="object"==typeof self&&self&&self.Object===Object&&self;const h=(d||u||Function("return this")()).Symbol;var b=Object.prototype,p=b.hasOwnProperty,g=b.toString,f=h?h.toStringTag:void 0;const m=function(t){var e=p.call(t,f),o=t[f];try{t[f]=void 0;var r=!0}catch(t){}var i=g.call(t);return r&&(e?t[f]=o:delete t[f]),i};var v=Object.prototype.toString;const y=function(t){return v.call(t)};var w=h?h.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?m(t):y(t)};const j=function(t,e){return function(o){return t(e(o))}}(Object.getPrototypeOf,Object);var x=Function.prototype,O=Object.prototype,T=x.toString,D=O.hasOwnProperty,S=T.call(Object);const P=function(t){if(!a(t)||"[object Object]"!=E(t))return!1;var e=j(t);if(null===e)return!0;var o=D.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&T.call(o)==S};const C=function(t){return a(t)&&1===t.nodeType&&!P(t)};class F extends((0,t.DataApiMixin)((0,t.ElementApiMixin)(t.Editor))){constructor(o,r={}){if(!W(o)&&void 0!==r.initialData)throw new e.CKEditorError("editor-create-initial-data",null);super(r),void 0===this.config.get("initialData")&&this.config.set("initialData",function(t){return W(t)?(0,e.getDataFromElement)(t):t}(o)),W(o)&&(this.sourceElement=o,(0,t.secureSourceElement)(this,o)),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new l(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:i});this.ui=new c(this,n)}destroy(){const t=this.getData();return this.ui.destroy(),super.destroy().then((()=>{this.sourceElement&&this.updateSourceElement(t)}))}static create(t,o={}){return new Promise((r=>{if(W(t)&&"TEXTAREA"===t.tagName)throw new e.CKEditorError("editor-wrong-element",null);const i=new this(t,o);r(i.initPlugins().then((()=>i.ui.init())).then((()=>i.data.init(i.config.get("initialData")))).then((()=>i.fire("ready"))).then((()=>i)))}))}}function W(t){return C(t)}F.Context=t.Context,F.EditorWatchdog=i.EditorWatchdog,F.ContextWatchdog=i.ContextWatchdog})(),(window.CKEditor5=window.CKEditor5||{}).editorDecoupled=r})();