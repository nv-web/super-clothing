"use strict";(self.webpackChunksuper_clothing=self.webpackChunksuper_clothing||[]).push([[244],{3464:(n,e,t)=>{t.d(e,{a:()=>c,c:()=>o});var r=t(2976),i=t(2496);let c=function(n){return n.base="base",n.google="google-sign-in",n.inverted="inverted",n}({});const o=n=>{let{children:e,buttonType:t,isLoading:o,...a}=n;const s=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.base;return{[c.base]:r.gh,[c.google]:r.mU,[c.inverted]:r.UZ}[n]}(t);return(0,i.jsx)(s,{disabled:o,...a,children:o?(0,i.jsx)(r.If,{}):e})}},2976:(n,e,t)=>{t.d(e,{If:()=>h,UZ:()=>p,gh:()=>u,mU:()=>d});var r,i,c,o,a=t(4312),s=t(3840),l=t(68);const u=s.cp.button(r||(r=(0,a.c)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: "Encode Sans Condensed";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n']))),d=(0,s.cp)(u)(i||(i=(0,a.c)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),p=(0,s.cp)(u)(c||(c=(0,a.c)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),h=(0,s.cp)(l.G)(o||(o=(0,a.c)(["\n  width: 30px;\n  height: 30px;\n"])))},8244:(n,e,t)=>{t.r(e),t.d(e,{default:()=>J});var r,i,c,o,a,s,l,u=t(3280),d=t(9336),p=t(8096),h=t(4312),f=t(3840);const x=f.cp.div(r||(r=(0,h.c)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]))),g=f.cp.div(i||(i=(0,h.c)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),m=f.cp.span(c||(c=(0,h.c)(["\n  width: 23%;\n"]))),v=(0,f.cp)(m)(o||(o=(0,h.c)(["\n  display: flex;\n"]))),y=f.cp.div(a||(a=(0,h.c)(["\n  cursor: pointer;\n"]))),b=f.cp.span(s||(s=(0,h.c)(["\n  margin: 0 10px;\n"]))),j=f.cp.div(l||(l=(0,h.c)(["\n  padding-left: 12px;\n  cursor: pointer;\n"])));var w=t(2496);const k=n=>{let{cartItem:e}=n;const{name:t,imageUrl:r,price:i,quantity:c}=e,o=(0,u.w1)(d._e),a=(0,u.OY)();return(0,w.jsxs)(x,{children:[(0,w.jsx)(g,{children:(0,w.jsx)("img",{src:r,alt:"".concat(t)})}),(0,w.jsxs)(m,{children:[" ",t," "]}),(0,w.jsxs)(v,{children:[(0,w.jsx)(y,{onClick:()=>a((0,p.Ar)(o,e)),children:"\u276e"}),(0,w.jsx)(b,{children:c}),(0,w.jsx)(y,{onClick:()=>a((0,p.Yb)(o,e)),children:"\u276f"})]}),(0,w.jsxs)(m,{children:[" ",i]}),(0,w.jsx)(j,{onClick:()=>a((0,p.IV)(o,e)),children:"\u2715"})]})};var C,E,I,S=t(9060),_=t(6108),z=t(1716),O=t(3464);const A=f.cp.div(C||(C=(0,h.c)(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),U=f.cp.form(E||(E=(0,h.c)(["\n  height: 100px;\n  min-width: 500px;\n"]))),q=(0,f.cp)(O.c)(I||(I=(0,h.c)(["\n  margin-left: auto;\n  margin-top: 30px;\n"]))),M=()=>{const n=(0,_.useStripe)(),e=(0,_.useElements)(),t=(0,u.w1)(d.sh),r=(0,u.w1)(z.c),[i,c]=(0,S.useState)(!1);return(0,w.jsx)(A,{children:(0,w.jsxs)(U,{onSubmit:async i=>{if(i.preventDefault(),!n||!e)return;c(!0);const o=await fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*t})}).then((n=>n.json())),{paymentIntent:{client_secret:a}}=o,s=e.getElement(_.CardElement);if(null===s)return;const l=await n.confirmCardPayment(a,{payment_method:{card:s,billing_details:{name:r?r.displayName:"Guest"}}});c(!1),l.error?alert(l.error):"succeeded"===l.paymentIntent.status&&alert("Payment Successful")},children:[(0,w.jsx)("h2",{children:"Credit Card Payment: "}),(0,w.jsx)(_.CardElement,{}),(0,w.jsx)(q,{isLoading:i,buttonType:O.a.inverted,children:"Pay now"})]})})};var P,T,N,R;const D=f.cp.div(P||(P=(0,h.c)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n"]))),F=f.cp.div(T||(T=(0,h.c)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),Y=f.cp.div(N||(N=(0,h.c)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n"]))),G=f.cp.span(R||(R=(0,h.c)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),J=()=>{const n=(0,u.w1)(d._e),e=(0,u.w1)(d.sh);return(0,w.jsxs)(D,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(Y,{children:(0,w.jsx)("span",{children:"Product"})}),(0,w.jsx)(Y,{children:(0,w.jsx)("span",{children:"Description"})}),(0,w.jsx)(Y,{children:(0,w.jsx)("span",{children:"Quantity"})}),(0,w.jsx)(Y,{children:(0,w.jsx)("span",{children:"Price"})}),(0,w.jsx)(Y,{children:(0,w.jsx)("span",{children:"Remove"})})]}),n.map((n=>(0,w.jsx)(k,{cartItem:n},n.id))),(0,w.jsxs)(G,{children:["Total: $",e]}),(0,w.jsx)(M,{})]})}},9336:(n,e,t)=>{t.d(e,{Yc:()=>o,_e:()=>c,sJ:()=>a,sh:()=>s});var r=t(368);const i=n=>n.cart,c=(0,r.M3)([i],(n=>n.cartItems)),o=(0,r.M3)([i],(n=>n.isCartOpen)),a=(0,r.M3)([c],(n=>n.reduce(((n,e)=>n+e.quantity),0))),s=(0,r.M3)([c],(n=>n.reduce(((n,e)=>n+e.quantity*e.price),0)))},1716:(n,e,t)=>{t.d(e,{c:()=>r});const r=(0,t(368).M3)((n=>n.user),(n=>n.currentUser))},368:(n,e,t)=>{t.d(e,{M3:()=>a});var r="NOT_FOUND";var i=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},c=t.equalityCheck,o=void 0===c?i:c,a=t.maxSize,s=void 0===a?1:a,l=t.resultEqualityCheck,u=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(o),d=1===s?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var t=[];function i(n){var i=t.findIndex((function(t){return e(n,t.key)}));if(i>-1){var c=t[i];return i>0&&(t.splice(i,1),t.unshift(c)),c.value}return r}return{get:i,put:function(e,c){i(e)===r&&(t.unshift({key:e,value:c}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(s,u);function p(){var e=d.get(arguments);if(e===r){if(e=n.apply(null,arguments),l){var t=d.getEntries().find((function(n){return l(n.value,e)}));t&&(e=t.value)}d.put(arguments,e)}return e}return p.clearCache=function(){return d.clear()},p}function o(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var c,o=0,a={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(a=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=a.memoizeOptions,u=void 0===l?t:l,d=Array.isArray(u)?u:[u],p=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}(r),h=n.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(d)),f=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return c=h.apply(null,n)}));return Object.assign(f,{resultFunc:s,memoizedResultFunc:h,dependencies:p,lastResult:function(){return c},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),f}}var a=o(c)}}]);
//# sourceMappingURL=244.e2b0990c.chunk.js.map