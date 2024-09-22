!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{metadata:function(){return u},name:function(){return s},settings:function(){return y}});var n={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.r(n),e.d(n,{name:function(){return w},settings:function(){return h}});var i=window.wp.blocks,a=window.wp.plugins,p=window.wp.i18n,c=window.wp.element,l=window.wp.blockEditor,u=JSON.parse('{"name":"wp-typography/typography","title":"Typography","category":"common","icon":"format-quote","attributes":{}}'),s=u.name,y={title:(0,p.__)("Typography","wp-typography"),supports:{align:!1,html:!1},edit:function(e){var t=e.className;return(0,c.createElement)("div",{className:t},(0,c.createElement)("span",{className:"wp-typography-block-help"},(0,p.__)("Any blocks added as children will have wp-Typography fixes applied.","wp-typography")),(0,c.createElement)(l.InnerBlocks,null))},save:function(){return(0,c.createElement)("div",null,(0,c.createElement)(l.InnerBlocks.Content,null))}},f=window.wp.editPost,m=window.wp.data,d=window.wp.compose,g=window.wp.components,b=(0,d.compose)([(0,m.withSelect)((function(e){return{typographyEnabled:!e("core/editor").getEditedPostAttribute("meta").wp_typography_post_enhancements_disabled}})),(0,m.withDispatch)((function(e){return{setTypographyEnabled:function(t){e("core/editor").editPost({meta:{wp_typography_post_enhancements_disabled:!t}})}}}))])((function(e){return(0,c.createElement)(g.ToggleControl,{label:(0,p.__)("Enable enhancements.","wp-typography"),help:(0,p.__)("wp-Typography is enabled for all posts unless you disable processing via this switch.","wp-typography"),checked:e.typographyEnabled,onChange:function(t){e.setTypographyEnabled(t)}})})),w="wp-typography-sidebar",h={icon:"format-quote",render:function(){return(0,m.select)("core/editor").getEditedPostAttribute("meta")?(0,c.createElement)(f.PluginDocumentSettingPanel,{name:"wp-typography-settings-panel",title:"wp-Typography"},(0,c.createElement)(b,null)):(0,c.createElement)(c.Fragment,null)}};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}[t].forEach((function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;(0,i.registerBlockType)(r,O(O({},t),n))}})),[n].forEach((function(e){if(e){var t=e.name,n=e.settings;(0,a.registerPlugin)(t,n)}}))}();