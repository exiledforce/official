!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,o=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},i=t=>"function"==typeof t&&r.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,u=(t,e,n=null,r=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,r),e=n}},a=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},l={},c={},d=`{{lit-${String(Math.random()).slice(2)}}}`,f=`\x3c!--${d}--\x3e`,h=new RegExp(`${d}|${f}`),p="$lit$";class m{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],o=document.createTreeWalker(e.content,133,null,!1);let i=0,s=-1,u=0;const{strings:a,values:{length:l}}=t;for(;u<l;){const t=o.nextNode();if(null!==t){if(s++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)_(e[t].name,p)&&r++;for(;r-- >0;){const e=a[u],n=y.exec(e)[2],r=n.toLowerCase()+p,o=t.getAttribute(r);t.removeAttribute(r);const i=o.split(h);this.parts.push({type:"attribute",index:s,name:n,strings:i}),u+=i.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const r=t.parentNode,o=e.split(h),i=o.length-1;for(let e=0;e<i;e++){let n,i=o[e];if(""===i)n=g();else{const t=y.exec(i);null!==t&&_(t[2],p)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),n=document.createTextNode(i)}r.insertBefore(n,t),this.parts.push({type:"node",index:++s})}""===o[i]?(r.insertBefore(g(),t),n.push(t)):t.data=o[i],u+=i}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&s!==i||(s++,e.insertBefore(g(),t)),i=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(n.push(t),s--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const _=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},v=t=>-1!==t.index,g=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,i=0,u=0,a=r.nextNode();for(;i<n.length;)if(o=n[i],v(o)){for(;u<o.index;)u++,"TEMPLATE"===a.nodeName&&(e.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=e.pop(),a=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${d} `;class w{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const i=y.exec(t);e+=null===i?t+(n?x:f):t.substr(0,i.index)+i[1]+i[2]+p+i[3]+d}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class N extends w{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),u(e,n.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const P=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class T{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new V(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(P(t)||!S(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class V{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===l||P(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=l,t(this)}this.value!==l&&this.committer.commit()}}class O{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}const t=this.__pendingValue;t!==l&&(P(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const n=new b(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const o of t)void 0===(n=e[r])&&(n=new O(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(o),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}if(this.__pendingValue===l)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=l}}class A extends T{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends V{}let M=!1;try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class C{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}if(this.__pendingValue===l)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=l}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class I{handleAttributeExpressions(t,e,n,r){const o=e[0];if("."===o){return new A(t,e.slice(1),n).parts}return"@"===o?[new C(t,e.slice(1),r.eventContext)]:"?"===o?[new E(t,e.slice(1),n)]:new T(t,e,n).parts}handleTextExpression(t){return new O(t)}}const R=new I;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function L(t){let e=H.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},H.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(d);return void 0===(n=e.keyString.get(r))&&(n=new m(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const H=new Map,$=new WeakMap,F=(t,e,n)=>{let r=$.get(e);void 0===r&&(a(e,e.firstChild),$.set(e,r=new O(Object.assign({templateFactory:L},n))),r.appendInto(e)),r.setValue(t),r.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */n.d(e,"html",(function(){return B})),n.d(e,"svg",(function(){return W})),n.d(e,"DefaultTemplateProcessor",(function(){return I})),n.d(e,"defaultTemplateProcessor",(function(){return R})),n.d(e,"directive",(function(){return o})),n.d(e,"isDirective",(function(){return i})),n.d(e,"removeNodes",(function(){return a})),n.d(e,"reparentNodes",(function(){return u})),n.d(e,"noChange",(function(){return l})),n.d(e,"nothing",(function(){return c})),n.d(e,"AttributeCommitter",(function(){return T})),n.d(e,"AttributePart",(function(){return V})),n.d(e,"BooleanAttributePart",(function(){return E})),n.d(e,"EventPart",(function(){return C})),n.d(e,"isIterable",(function(){return S})),n.d(e,"isPrimitive",(function(){return P})),n.d(e,"NodePart",(function(){return O})),n.d(e,"PropertyCommitter",(function(){return A})),n.d(e,"PropertyPart",(function(){return j})),n.d(e,"parts",(function(){return $})),n.d(e,"render",(function(){return F})),n.d(e,"templateCaches",(function(){return H})),n.d(e,"templateFactory",(function(){return L})),n.d(e,"TemplateInstance",(function(){return b})),n.d(e,"SVGTemplateResult",(function(){return N})),n.d(e,"TemplateResult",(function(){return w})),n.d(e,"createMarker",(function(){return g})),n.d(e,"isTemplatePartActive",(function(){return v})),n.d(e,"Template",(function(){return m})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const B=(t,...e)=>new w(t,e,"html",R),W=(t,...e)=>new N(t,e,"svg",R)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(2),o=n(0);n(3),n(4);const i=r.__importDefault(n(5));o.render(i.default,document.body)},function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return s})),n.d(e,"__decorate",(function(){return u})),n.d(e,"__param",(function(){return a})),n.d(e,"__metadata",(function(){return l})),n.d(e,"__awaiter",(function(){return c})),n.d(e,"__generator",(function(){return d})),n.d(e,"__exportStar",(function(){return f})),n.d(e,"__values",(function(){return h})),n.d(e,"__read",(function(){return p})),n.d(e,"__spread",(function(){return m})),n.d(e,"__spreadArrays",(function(){return _})),n.d(e,"__await",(function(){return v})),n.d(e,"__asyncGenerator",(function(){return g})),n.d(e,"__asyncDelegator",(function(){return y})),n.d(e,"__asyncValues",(function(){return b})),n.d(e,"__makeTemplateObject",(function(){return x})),n.d(e,"__importStar",(function(){return w})),n.d(e,"__importDefault",(function(){return N}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function a(t,e){return function(n,r){e(n,r,t)}}function l(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function c(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,u)}a((r=r.apply(t,e||[])).next())}))}function d(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function f(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function h(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function p(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function m(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t}function _(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,u=i.length;s<u;s++,o++)r[o]=i[s];return r}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof v?Promise.resolve(n.value.v).then(a,l):c(i[0][2],n)}catch(t){c(i[0][3],t)}var n}function a(t){u("next",t)}function l(t){u("throw",t)}function c(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function y(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=h(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function x(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function w(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function N(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(0).html`
  <div id="root" class="text-center">
    <h1 class="title title-font">Exiled Force</h1>
    <h2 class="subtitle sub-font inline-block">A Modern Webgame</h2>
  </div>
  <p class="desc sub-font text-center">
    <span class="comingsoon">Coming Soon...</span
    ><a class="link sub-font" href="https://forms.gle/Vn2a1nUyg78aNRVv6" target="_blank"
      >Receive News</a
    >
  </p>
`;e.default=r}]);
//# sourceMappingURL=app.9393ec647e257725e283.js.map