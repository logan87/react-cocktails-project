/*! For license information please see main.cff0280e.chunk.js.LICENSE.txt */
(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(t,e,r){t.exports=r(16)},15:function(t,e,r){},16:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(8),i=r.n(o),c=(r(15),r(4)),l=r(1),s=function(t){var e=t.image,r=t.name,n=t.id,o=t.info,i=t.glass;return a.a.createElement("article",{className:"cocktail"},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{src:e,alt:r})),a.a.createElement("div",{className:"cocktail-footer"},a.a.createElement("h3",null,r),a.a.createElement("h4",null,i),a.a.createElement("p",null,o),a.a.createElement(c.c,{to:"/cocktail/".concat(n),className:"btn btn-primary btn-details"},"details")))},u=function(){return a.a.createElement("div",{className:"loader"})},h=r(5),f=r(3);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var u={};function h(){}function f(){}function p(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(d=y);var g=p.prototype=h.prototype=Object.create(d);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var p=a.a.createContext(),d=function(t){var e=t.children,r=Object(n.useState)(!0),o=Object(f.a)(r,2),i=o[0],c=o[1],l=Object(n.useState)("a"),s=Object(f.a)(l,2),u=s[0],d=s[1],v=Object(n.useState)([]),y=Object(f.a)(v,2),g=y[0],E=y[1],w=Object(n.useCallback)(Object(h.a)(m().mark((function t(){var e,r,n,a;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(u));case 4:return e=t.sent,t.next=7,e.json();case 7:r=t.sent,(n=r.drinks)?(a=n.map((function(t){return{id:t.idDrink,name:t.strDrink,image:t.strDrinkThumb,info:t.strAlcoholic,glass:t.strGlass}})),E(a)):E([]),c(!1),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0),c(!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])}))),[u]);return Object(n.useEffect)((function(){w()}),[u,w]),a.a.createElement(p.Provider,{value:{loading:i,cocktails:g,setSearchTerm:d}},e)},v=function(){return Object(n.useContext)(p)},y=function(){var t=v(),e=t.loading,r=t.cocktails;return e?a.a.createElement(u,null):r.length<1?a.a.createElement("h2",{className:"section-title"},"No cocktails matched your search criteria"):a.a.createElement("section",{className:"section"},a.a.createElement("h2",{className:"section-title"},"cocktails"),a.a.createElement("div",{className:"cocktails-center"},r.map((function(t){return a.a.createElement(s,Object.assign({key:t.id},t))}))))},g=function(){var t=v().setSearchTerm,e=a.a.useRef("");a.a.useEffect((function(){e.current.focus()}),[]);return a.a.createElement("section",{className:"section search"},a.a.createElement("form",{className:"search-form",onSubmit:function(t){t.preventDefault()}},a.a.createElement("div",{className:"form-control"},a.a.createElement("label",{htmlFor:"name"},"search your favorite cocktail"),a.a.createElement("input",{type:"text",id:"name",ref:e,onChange:function(){t(e.current.value)}}))))},E=function(){return a.a.createElement("main",null,a.a.createElement(g,null),a.a.createElement(y,null))},w=function(){return a.a.createElement("section",{className:"section about-section"},a.a.createElement("h1",{className:"section-title"},"About Us"),a.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam deleniti quia dolore qui consequuntur enim architecto reiciendis officiis iusto temporibus voluptates in ab laboriosam, exercitationem iste esse non velit inventore. Eos voluptatum quidem excepturi autem provident natus eius culpa accusantium."))};function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var u={};function h(){}function f(){}function m(){}var p={};c(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(N([])));v&&v!==e&&r.call(v,a)&&(p=v);var y=m.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=m,c(y,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var x=function(){var t=Object(l.g)().id,e=Object(n.useState)(!1),r=Object(f.a)(e,2),o=r[0],i=r[1],s=Object(n.useState)(null),m=Object(f.a)(s,2),p=m[0],d=m[1];if(Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b().mark((function e(){var r,n,a,o,c,l,s,u,h,f,m,p,v,y;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:(n=e.sent).drinks?(a=n.drinks[0],o=a.strDrink,c=a.strDrinkThumb,l=a.strAlcoholic,s=a.strCategory,u=a.strGlass,h=a.strInstructions,f=a.strIngredient1,m=a.strIngredient2,p=a.strIngredient3,v=a.strIngredient4,y=a.strIngredient5,d({name:o,image:c,info:l,category:s,glass:u,instructions:h,ingredients:[f,m,p,v,y]})):d(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:i(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}i(!0),function(){e.apply(this,arguments)}()}),[t]),o)return a.a.createElement(u,null);if(p){var v=p.name,y=p.image,g=p.category,E=p.info,w=p.glass,x=p.instructions,k=p.ingredients;return a.a.createElement("section",{className:"section cocktail-section"},a.a.createElement(c.b,{to:"/",className:"btn btn-primary"},"back home"),a.a.createElement("h2",{className:"section-title"},v),a.a.createElement("div",{className:"drink"},a.a.createElement("img",{src:y,alt:v}),a.a.createElement("div",{className:"drink-info"},a.a.createElement("p",null,a.a.createElement("span",{className:"drink-data"},"name :")," ",v),a.a.createElement("p",null,a.a.createElement("span",{className:"drink-data"},"category :")," ",g),a.a.createElement("p",null,a.a.createElement("span",{className:"drink-data"},"info :")," ",E),a.a.createElement("p",null,a.a.createElement("span",{className:"drink-data"},"glass :")," ",w),a.a.createElement("p",null,a.a.createElement("span",{className:"drink-data"},"instructions :")," ",x),a.a.createElement("p",null,a.a.createElement("span",{className:"drink-data"},"ingredients :"),k.map((function(t,e){return t?a.a.createElement("span",{key:e}," ",t):null}))))))}return a.a.createElement("h2",{className:"section-title"},"no cocktail to display")},k=function(){return a.a.createElement("section",{className:"error-page section"},a.a.createElement("div",{className:"error-container"},a.a.createElement("h1",null,"Oops! It's a dead end"),a.a.createElement(c.c,{to:"/",className:"btn btn-primary"},"back home")))},L=r(9),N=r.n(L),j=function(){return a.a.createElement("nav",{className:"navbar"},a.a.createElement("div",{className:"nav-center"},a.a.createElement(c.c,{to:"/"},a.a.createElement("img",{src:N.a,alt:"coctail db logo",className:"logo"})),a.a.createElement("ul",{className:"nav-links"},a.a.createElement("li",null,a.a.createElement(c.c,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(c.c,{to:"/about"},"About")))))};var O=function(){return a.a.createElement(c.a,null,a.a.createElement(j,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",element:a.a.createElement(E,null)}),a.a.createElement(l.a,{path:"/about",element:a.a.createElement(w,null)}),a.a.createElement(l.a,{path:"/cocktail/:id",element:a.a.createElement(x,null)}),a.a.createElement(l.a,{path:"*",element:a.a.createElement(k,null)})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null,a.a.createElement(O,null))),document.getElementById("root"))},9:function(t,e,r){t.exports=r.p+"static/media/logo.9a3d2645.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.cff0280e.chunk.js.map