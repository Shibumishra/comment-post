(this.webpackJsonpcomment=this.webpackJsonpcomment||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),l=n.n(r),i=(n(13),n(7)),o=n(4),m=n(2),s=function(e){var t=e.items,n=e.removeItem,a=e.editItem;return c.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,r=e.title;return c.a.createElement("article",{className:"grocery-item",key:t},c.a.createElement("p",{className:"title"},r),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return a(t)}},"Edit"),c.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return n(t)}},"Delete")))})))};var u=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(function(){var e=localStorage.getItem("list");return e?JSON.parse(localStorage.getItem("list")):[]}()),u=Object(m.a)(l,2),f=u[0],b=u[1],d=Object(a.useState)(!1),E=Object(m.a)(d,2),g=E[0],p=E[1],v=Object(a.useState)(null),N=Object(m.a)(v,2),O=N[0],j=N[1];return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(f))}),[f]),c.a.createElement("section",{className:"section-center"},c.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),n)if(n&&g)b(f.map((function(e){return e.id===O?Object(o.a)(Object(o.a)({},e),{},{title:n}):e}))),r(""),j(null),p(!1);else{var t={id:(new Date).getTime().toString(),title:n};b([].concat(Object(i.a)(f),[t])),r("")}else;}},c.a.createElement("h3",null,"Comment Post"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"comment...",value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{type:"Post",className:"submit-btn"},g?"edit":"Post"))),f.length>0&&c.a.createElement("div",{className:"grocery-container"},c.a.createElement(s,{items:f,removeItem:function(e){b(f.filter((function(t){return t.id!==e})))},editItem:function(e){var t=f.find((function(t){return t.id===e}));p(!0),j(e),r(t.title)}}),c.a.createElement("button",{className:"clear-btn",onClick:function(){b([])}},"clear items")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.256874c8.chunk.js.map