(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(6),o=n(8),r=n(4),a=n.n(r),l=n(1),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d="alphabetically",h="length";var j=function(){var t=Object(l.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(l.useState)(!1),r=Object(i.a)(c,2),j=r[0],p=r[1],f=function(t,e){var n=e.sortField,s=e.reverseField,c=Object(o.a)(t);return n&&c.sort((function(t,e){switch(n){case d:return t.localeCompare(e);case h:return t[n]-e[n];default:return 0}})),s&&c.reverse(),c}(b,{sortField:n,reverseField:j});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return s(d)},type:"button",className:a()("button is-info",{"button is-info is-light":n!==d}),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return s(h)},type:"button",className:a()("button is-success",{"button is-success is-light":n!==h}),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return p(!j)},type:"button",className:a()("button is-warning",{"button is-warning is-light":!j}),children:"Reverse"}),(n||j)&&Object(u.jsx)("button",{onClick:function(){s(""),p(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:f.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f20ba4d6.chunk.js.map