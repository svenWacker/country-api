(this["webpackJsonpcountry-api"]=this["webpackJsonpcountry-api"]||[]).push([[0],{19:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(13),s=n.n(a),o=(n(19),n(3)),i=n(14),u=n.n(i),j=n(0),l=function(){return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)("h4",{children:"\ud83d\udd78"}),Object(j.jsx)("h6",{children:"It is loading..."})]})},b=function(t){var e=t.results.map((function(t,e){console.log(t);var n=t.name,c=t.flag,r=t.capital,a=t.population;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsxs)("h6",{children:["Capital: ",r]}),Object(j.jsxs)("h5",{children:["Population: ",a]}),Object(j.jsx)("img",{src:c,alt:n})]},e)}));return Object(j.jsx)(r.a.Fragment,{children:e})},h=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),h=i[0],O=i[1],d=Object(c.useState)(!0),p=Object(o.a)(d,2),x=p[0],f=p[1];return Object(c.useEffect)((function(){setTimeout((function(){f(!1)}),1e3)}),[]),x?Object(j.jsx)(l,{}):Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=encodeURIComponent(n);console.log(e);var c="https://restcountries.eu/rest/v2/name/".concat(e);u()(c).then((function(t){var e=t.data;return O(e)})).catch((function(t){return console.log("You had an ${err}")}))},children:[Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){a(t.target.value)},placeholder:"Write a country name"}),Object(j.jsx)("button",{type:"submit",children:"Search"})]}),Object(j.jsx)(b,{results:h})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.90eb6722.chunk.js.map