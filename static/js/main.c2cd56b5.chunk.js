(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{1539:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(38),b=a(2),j=(a(41),a(35)),i=a.n(j),s=a(36),o=a.n(s),u=a(37),O=a.n(u),d=a(5);var y=function(){return Object(d.jsxs)(n.a,{children:[Object(d.jsx)(i.a,{}),Object(d.jsx)("div",{children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/",element:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.a,{})})}),Object(d.jsx)(b.a,{path:"/cart",element:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O.a,{})})})]})})]})},l=a(3),p=a(7),R=a(9),h=a.n(R),m=a(6),f=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(m.a)(Object(m.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),[Object(m.a)(Object(m.a)({},t.payload),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_CART_QTY":return Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.filter((function(e){return e.id===t.payload.id?e.qty=t.payload.qty:e.qty}))});default:return e}},_=function(e,t){switch(t.type){case"SORT_BY_PRICE":return Object(m.a)(Object(m.a)({},e),{},{sort:t.payload});case"FILTER_BY_STOCK":return Object(m.a)(Object(m.a)({},e),{},{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(m.a)(Object(m.a)({},e),{},{byFastDelivery:!e.byFastDelivery});case"FILTER_BY_RATING":return Object(m.a)(Object(m.a)({},e),{},{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(m.a)(Object(m.a)({},e),{},{searchQuery:t.payload});case"CLEAR_FILTERS":return{byStock:!1,byFastDelivery:!1,byRating:0};default:return e}},E=Object(c.createContext)();h.a.seed(99);var x=function(e){var t=e.children,a=Object(p.a)(Array(20)).map((function(){return{id:h.a.datatype.uuid(),name:h.a.commerce.productName(),price:h.a.commerce.price(),image:h.a.random.image(),inStock:h.a.random.arrayElement([0,3,5,6,7]),fastDelivery:h.a.datatype.boolean(),ratings:h.a.random.arrayElement([1,2,3,4,5])}})),r=Object(c.useReducer)(f,{products:a,cart:[]}),n=Object(l.a)(r,2),b=n[0],j=n[1],i=Object(c.useReducer)(_,{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:""}),s=Object(l.a)(i,2),o=s[0],u=s[1];return console.log(o),Object(d.jsx)(E.Provider,{value:{state:b,dispatch:j,productState:o,productDispatch:u},children:t})},T=(a(1531),a(39)),v=document.getElementById("root");Object(T.createRoot)(v).render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(y,{})})}))},35:function(e,t){},36:function(e,t){},37:function(e,t){},41:function(e,t,a){}},[[1539,1,2]]]);
//# sourceMappingURL=main.c2cd56b5.chunk.js.map