(this.webpackJsonprest3=this.webpackJsonprest3||[]).push([[0],{22:function(t,n,e){},24:function(t,n,e){},45:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e.n(c),r=e(15),i=e.n(r),a=(e(22),e(5)),s=e.n(a),u=e(16),l=e(6),d=(e.p,e(24),e(17)),j=e.n(d),f=e(0);var p=function(){var t=Object(c.useState)([]),n=Object(l.a)(t,2),e=n[0],o=n[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),a=i[0],d=i[1],p="https://restcountries.com/v3.1/name/".concat(a),v=function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get(p);case 2:n=t.sent,console.log(n.data),o(n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),console.log(e),Object(f.jsxs)("div",{className:"App",children:["Data of Countries",Object(f.jsxs)("form",{style:{margin:"4rem"},onSubmit:function(t){t.preventDefault(),v()},children:["Enter Country Name :",Object(f.jsx)("input",{type:"text",name:"country",onChange:function(t){d(t.target.value),console.log(a)}}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]}),null===e||void 0===e?void 0:e.map((function(t,n){var e,c,o;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[" ",Object(f.jsx)("img",{style:{margin:"2rem"},src:null===t||void 0===t||null===(e=t.flags)||void 0===e?void 0:e.png,alt:"flag"})]}),"Capital of ",null===t||void 0===t||null===(c=t.name)||void 0===c?void 0:c.common,": ",null===t||void 0===t?void 0:t.capital,Object(f.jsxs)("p",{children:[" ","Borders of ",null===t||void 0===t||null===(o=t.name)||void 0===o?void 0:o.common,":",t.borders.map((function(t,n){return Object(f.jsxs)("p",{children:[" ",n+1,"-",t]})}))]})]})}))]})},v=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,46)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.5163b1ba.chunk.js.map