(this["webpackJsonpcommon-divisors"]=this["webpackJsonpcommon-divisors"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(8),s=n.n(r),u=(n(14),n(15),n(3)),i=n(7),l=n(2),o=n(18),j=function(e){for(var t=[],n=[],c=0;c<e.length;c++)for(var a=function(a){e[c].value%a===0&&(n.push(a),0===t.filter((function(e){return e.value===a})).length&&t.push({value:a,common:[]}))},r=1;r<=e[c].value;r++)a(r);for(var s=0,u=[],i=function(c){var a=t[c].value,r=n.filter((function(e){return e===a})).length===e.length;u.push(r),r&&a>s&&(s=a)},l=0;l<t.length;l++)i(l);for(var o=0;o<t.length;o++)for(var j=0;j<e.length;j++)e[j].value%t[o].value===0?u[o]?t[o].value===s?t[o].common.push({id:e[j].id,type:3}):t[o].common.push({id:e[j].id,type:2}):t[o].common.push({id:e[j].id,type:1}):t[o].common.push({id:e[j].id,type:0});return t=t.sort((function(e,t){return e.value-t.value}))},d=function(e,t){switch(t.type){case"UPDATE_DIVISORS":return Object(l.a)(Object(l.a)({},e),{},{divisors:Object(i.a)(j(e.numbers))});case"ADD_NUMBER":return Object(l.a)(Object(l.a)({},e),{},{numbers:[{id:Object(o.a)(),value:t.payload}].concat(Object(i.a)(e.numbers))});case"DELETE_NUMBER":return Object(l.a)(Object(l.a)({},e),{},{numbers:e.numbers.filter((function(e){return e.id!==t.payload}))});case"UPDATE_NUMBER":return Object(l.a)(Object(l.a)({},e),{},{numbers:e.numbers.map((function(e){return e.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{value:t.payload.value}):e}))});default:return e}},b={numbers:[],divisors:[]},m=Object(a.createContext)(b),v=function(e){var t=e.children,n=Object(a.useReducer)(d,b),r=Object(u.a)(n,2),s=r[0],i=r[1],l=function(){i({type:"UPDATE_DIVISORS",payload:{}})};return Object(c.jsx)(m.Provider,{value:{numbers:s.numbers,divisors:s.divisors,addNumber:function(e){i({type:"ADD_NUMBER",payload:e}),l()},deleteNumber:function(e){i({type:"DELETE_NUMBER",payload:e}),l()},updateNumber:function(e){i({type:"UPDATE_NUMBER",payload:{id:e.id,value:e.value}}),l()}},children:t})},O=function(e){var t=e.legend,n=e.value,a=e.type;return Object(c.jsxs)("li",{className:"".concat(t?"":"animate__animated animate__flipInY ","divisor-").concat(a),children:[Object(c.jsxs)("div",{className:"stars",children:[Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"}),Object(c.jsx)("div",{className:"star"})]}),Object(c.jsx)("div",{className:"divisor",children:Object(c.jsx)("p",{children:n.toLocaleString()})})]})},p=function(){return Object(c.jsx)("section",{className:"legend",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("p",{children:"Common For"})}),Object(c.jsx)(O,{legend:!0,value:"Not This",type:"0"}),Object(c.jsx)(O,{legend:!0,value:"This",type:"1"}),Object(c.jsx)(O,{legend:!0,value:"All",type:"2"}),Object(c.jsx)(O,{legend:!0,value:"All + Greatest",type:"3"})]})})},f=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useContext)(m).addNumber;return Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"menu",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("div",{className:"logo-app"}),Object(c.jsx)("div",{className:"form-container",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{className:"number-input",type:"number",name:"number",value:n,onChange:function(e){return function(e){(+e.target.value<1||+e.target.value>=1e8)&&""!==e.target.value?r(""):r(+e.target.value)}(e)},onClick:function(e){return e.target.select()},placeholder:"Add Number"}),Object(c.jsx)("button",{className:"btn-add",type:"submit",onClick:function(e){return function(e){e.preventDefault(),+n>0&&+n<1e8&&(s(+n),r(""))}(e)}})]})})]})}),Object(c.jsx)(p,{})]})},h=function(e){var t=e.number,n=Object(a.useState)(t.value),r=Object(u.a)(n,2),s=r[0],i=r[1],l=Object(a.useRef)(t.value),o=Object(a.useContext)(m),j=o.divisors,d=o.updateNumber,b=o.deleteNumber;return Object(c.jsxs)("div",{className:"number animate__animated animate__fadeIn",children:[Object(c.jsx)("div",{className:"top",children:Object(c.jsx)("div",{className:"form-container",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("button",{className:"btn-update",type:"submit",onClick:function(e){return function(e){e.preventDefault(),s>0&&s<1e8&&(l.current=s,d({id:t.id,value:s}))}(e)},disabled:s===l.current}),Object(c.jsx)("input",{className:"number-input",type:"number",name:"number",value:s,onChange:function(e){return function(e){+e.target.value<1||+e.target.value>=1e8?i(l.current):i(+e.target.value)}(e)},onClick:function(e){return e.target.select()}}),Object(c.jsx)("button",{className:"btn-delete",onClick:function(e){return function(e){e.preventDefault(),b(t.id)}(e)}})]})})}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("ul",{children:j.map((function(e){return Object(c.jsx)(O,{value:e.value,type:e.common.filter((function(e){return t.id===e.id}))[0].type},e.value)}))})})]})},x=function(){var e=Object(a.useContext)(m).numbers;return Object(c.jsx)("main",{children:Object(c.jsx)("div",{className:"container",children:e.map((function(e){return Object(c.jsx)(h,{number:e},e.id)}))})})},N=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("div",{className:"logo-author"}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 2021 Dawid Polatowski"})]})},y=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(v,{children:[Object(c.jsx)(f,{}),Object(c.jsx)(x,{}),Object(c.jsx)(N,{})]})})};s.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7a673e02.chunk.js.map