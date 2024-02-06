"use strict";(self.webpackChunksuper_clothing=self.webpackChunksuper_clothing||[]).push([[248],{3464:(n,e,t)=>{t.d(e,{a:()=>o,c:()=>c});var r=t(2976),i=t(2496);let o=function(n){return n.base="base",n.google="google-sign-in",n.inverted="inverted",n}({});const c=n=>{let{children:e,buttonType:t,isLoading:c,...a}=n;const u=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.base;return{[o.base]:r.gh,[o.google]:r.mU,[o.inverted]:r.UZ}[n]}(t);return(0,i.jsx)(u,{disabled:c,...a,children:c?(0,i.jsx)(r.If,{}):e})}},2976:(n,e,t)=>{t.d(e,{If:()=>f,UZ:()=>d,gh:()=>l,mU:()=>p});var r,i,o,c,a=t(4312),u=t(3840),s=t(68);const l=u.cp.button(r||(r=(0,a.c)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: "Encode Sans Condensed";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n']))),p=(0,u.cp)(l)(i||(i=(0,a.c)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),d=(0,u.cp)(l)(o||(o=(0,a.c)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),f=(0,u.cp)(s.G)(c||(c=(0,a.c)(["\n  width: 30px;\n  height: 30px;\n"])))},2248:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Z});var r=t(9060),i=t(1560),o=t(3280),c=t(368);const a=n=>n.categories,u=(0,c.M3)([a],(n=>n.categories)),s=(0,c.M3)([u],(n=>n.reduce(((n,e)=>{const{title:t,items:r}=e;return n[t.toLowerCase()]=r,n}),{}))),l=(0,c.M3)([a],(n=>n.isLoading));var p,d,f,h,g=t(9336),x=t(8096),m=t(3464),v=t(4312),y=t(3840);const b=y.cp.div(p||(p=(0,v.c)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  img {\n    width: 100%;\n    height: 95%;\n    object-fit: cover;\n    margin-bottom: 5px;\n  }\n\n  button {\n    width: 80%;\n    opacity: 0.7;\n    position: absolute;\n    top: 255px;\n    display: none;\n  }\n\n  &:hover {\n    img {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    button {\n      display: block;\n      opacity: 0.9;\n      min-width: unset;\n      padding: 0 10px;\n\n      &:hover {\n        img {\n          opacity: unset;\n        }\n\n        button {\n          opacity: unset;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 400px) {\n    width: 80vw;\n  }\n"]))),w=y.cp.div(d||(d=(0,v.c)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),j=y.cp.span(f||(f=(0,v.c)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),k=y.cp.span(h||(h=(0,v.c)(["\n  width: 10%;\n"])));var C=t(2496);const E=n=>{let{product:e}=n;const{name:t,price:r,imageUrl:i}=e,c=(0,o.OY)(),a=(0,o.w1)(g._e);return(0,C.jsxs)(b,{children:[(0,C.jsx)("img",{src:i,alt:"".concat(t)}),(0,C.jsxs)(w,{children:[(0,C.jsx)(j,{children:t}),(0,C.jsx)(k,{children:r})]}),(0,C.jsx)(m.c,{buttonType:m.a.inverted,onClick:()=>c((0,x.Yb)(a,e)),children:"Add to card"})]})};var O,z,M,U=t(12);const A=y.cp.div(O||(O=(0,v.c)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),q=(0,y.cp)(U.cH)(z||(z=(0,v.c)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n"]))),F=y.cp.div(M||(M=(0,v.c)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 20px;\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 15px;\n    grid-row-gap: 25px;\n  }\n\n  @media screen and (max-width: 400px) {\n    grid-template-columns: 1fr;\n    grid-row-gap: 25px;\n  }\n"]))),S=n=>{let{title:e,products:t}=n;return(0,C.jsxs)(A,{children:[(0,C.jsx)("h2",{children:(0,C.jsx)(q,{to:e,children:e.toUpperCase()})}),(0,C.jsx)(F,{children:t.filter(((n,e)=>e<4)).map((n=>(0,C.jsx)(E,{product:n},n.id)))})]})};var _=t(148);const I=()=>{const n=(0,o.w1)(s),e=(0,o.w1)(l);return(0,C.jsx)(r.Fragment,{children:e?(0,C.jsx)(_.c,{}):Object.keys(n).map((e=>{const t=n[e];return(0,C.jsx)(S,{title:e,products:t},e)}))})};var Y,L;const R=y.cp.div(Y||(Y=(0,v.c)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 20px;\n  row-gap: 50px;\n"]))),T=y.cp.h2(L||(L=(0,v.c)(["\n  font-size: 38px;\n  margin-bottom: 25px;\n  text-align: center;\n"]))),N=()=>{const{category:n}=(0,i.W4)(),e=(0,o.w1)(s),t=(0,o.w1)(l),[c,a]=(0,r.useState)(e[n]);return(0,r.useEffect)((()=>{a(e[n])}),[n,e]),(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)(T,{children:n.toUpperCase()}),t?(0,C.jsx)(_.c,{}):(0,C.jsx)(R,{children:c&&c.map((n=>(0,C.jsx)(E,{product:n},n.id)))})]})};var X=t(916);const Z=()=>{const n=(0,o.OY)();return(0,r.useEffect)((()=>{n((0,X.eQ)())}),[]),(0,C.jsxs)(i.c5,{children:[(0,C.jsx)(i.kX,{index:!0,element:(0,C.jsx)(I,{})}),(0,C.jsx)(i.kX,{path:":category",element:(0,C.jsx)(N,{})})]})}},9336:(n,e,t)=>{t.d(e,{Yc:()=>c,_e:()=>o,sJ:()=>a,sh:()=>u});var r=t(368);const i=n=>n.cart,o=(0,r.M3)([i],(n=>n.cartItems)),c=(0,r.M3)([i],(n=>n.isCartOpen)),a=(0,r.M3)([o],(n=>n.reduce(((n,e)=>n+e.quantity),0))),u=(0,r.M3)([o],(n=>n.reduce(((n,e)=>n+e.quantity*e.price),0)))},368:(n,e,t)=>{t.d(e,{M3:()=>a});var r="NOT_FOUND";var i=function(n,e){return n===e};function o(n,e){var t="object"===typeof e?e:{equalityCheck:e},o=t.equalityCheck,c=void 0===o?i:o,a=t.maxSize,u=void 0===a?1:a,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(c),p=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function i(n){var i=t.findIndex((function(t){return e(n,t.key)}));if(i>-1){var o=t[i];return i>0&&(t.splice(i,1),t.unshift(o)),o.value}return r}return{get:i,put:function(e,o){i(e)===r&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,l);function d(){var e=p.get(arguments);if(e===r){if(e=n.apply(null,arguments),s){var t=p.getEntries().find((function(n){return s(n.value,e)}));t&&(e=t.value)}p.put(arguments,e)}return e}return d.clearCache=function(){return p.clear()},d}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,c=0,a={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(a=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var s=a.memoizeOptions,l=void 0===s?t:s,p=Array.isArray(l)?l:[l],d=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}(r),f=n.apply(void 0,[function(){return c++,u.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return o=f.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:f,dependencies:d,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h}}var a=c(o)}}]);
//# sourceMappingURL=248.282f4197.chunk.js.map