(this.webpackJsonptopicdisc=this.webpackJsonptopicdisc||[]).push([[0],{10:function(e,t,a){e.exports=a(25)},15:function(e,t,a){},16:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t),a.d(t,"loadList",(function(){return h}));var n=a(0),c=a.n(n),r=a(2),o=a.n(r),s=a(3),m=a(1),l=function(e,t,a){var n=t.val,c=Object(m.a)({},e);return c.add[a]=n,c},u=function(e,t){switch(t.type){case"SET_AUTHOR_VALUE":return l(e,t,"author");case"SET_TEXT_VALUE":return l(e,t,"text");case"ADD_NEW_COMMENT":return function(e,t){var a=t.author,n=t.text,c=t.date,r=Object(m.a)({},e),o=localStorage.getItem("commentsList")?JSON.parse(localStorage.getItem("commentsList")):[];return o.push({name:a,text:n,date:c,btn:!1}),localStorage.removeItem("commentsList"),localStorage.setItem("commentsList",JSON.stringify(o)),r.add.author="",r.add.text="",r.list=h(),r}(e,t);case"DEL_COMMENT":return function(e,t){var a=t.idx,n=Object(m.a)({},e),c=[];return n.list.forEach((function(e,t){t!==a&&c.push(e)})),localStorage.removeItem("commentsList"),localStorage.setItem("commentsList",JSON.stringify(c)),n.list=h(),n}(e,t);case"TOGGLE_BTN":return function(e,t){var a=t.idx,n=t.val,c=Object(m.a)({},e);return c.list[a].btn=n,c}(e,t);default:return e}},i=(a(15),a(16),function(e){return e?c.a.createElement("article",{className:"topic"},c.a.createElement("h2",{className:"topic__title"},e.title),e.content.map((function(e,t){return c.a.createElement("p",{key:t,className:"topic__p"},e)})),c.a.createElement("address",{className:"topic__author"},c.a.createElement("span",{className:"topic__name"},e.details.name),c.a.createElement("span",{className:"topic__date"},e.details.date))):c.a.createElement("div",{className:"topic"},c.a.createElement("div",{className:"error-wrapper"},c.a.createElement("p",{className:"error"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")))}),d=a(9),_=(a(23),a(24),function(){var e=new Date,t="0".concat(e.getDate()).slice(-2),a="0".concat(e.getMonth()).slice(-2),n=e.getFullYear(),c="0".concat(e.getHours()).slice(-2),r="0".concat(e.getMinutes()).slice(-2);return"".concat(n,"-").concat(a,"-").concat(t," ").concat(c,":").concat(r)}),f=function(e){var t=e.store,a=e.addNewComment,n=e.setAuthorValue,r=e.setTextValue;return c.a.createElement("form",{action:"#",className:"comments__form",onSubmit:function(e){return e.preventDefault(),a(t.add.author,t.add.text,_())}},c.a.createElement("label",{htmlFor:"author",className:"visually-hidden"},"\u0418\u043c\u044f:"),c.a.createElement("input",{type:"text",id:"author",required:!0,className:"comments__author",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:t.add.author,onChange:function(){return n(document.querySelector(".comments__author").value)}}),c.a.createElement("label",{htmlFor:"text",className:"visually-hidden"},"\u0422\u0435\u043a\u0441\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f:"),c.a.createElement("textarea",{id:"text",required:!0,className:"comments__textarea",placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:t.add.text,onChange:function(){return r(document.querySelector(".comments__textarea").value)}}),c.a.createElement("input",{type:"submit",className:"comments__submit",value:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}))},E=function(e){var t=e.store,a=e.delComment,n=e.toggleBtn;return c.a.createElement("ul",{className:"comments__list"},t.list.map((function(e,t){return"object"===typeof e?c.a.createElement("li",{key:t,className:"comments__item",onMouseOver:function(){return n(t,!0)},onMouseOut:function(){return n(t,!1)}},c.a.createElement("div",{className:"comments__user"},c.a.createElement("h3",{className:"comments__name"},e.name),c.a.createElement("span",{className:"comments__date"},e.date)),c.a.createElement("p",{className:"comments__text"},e.text),c.a.createElement("div",{className:"comments__actions"},c.a.createElement("button",{key:t,className:e.btn?"comments__del comments__del--active":"comments__del",onClick:function(){if(window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439?"))return a(t)}},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"))):c.a.createElement("li",{key:t,className:"comments__nothing"},e)})))},p=function(e){var t=e.store,a=e.setAuthorValue,n=e.setTextValue,r=e.addNewComment,o=e.delComment,s=e.toggleBtn;return c.a.createElement("div",{className:"comments"},c.a.createElement("h2",{className:"comments__title"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),c.a.createElement(E,{store:t,delComment:o,toggleBtn:s}),c.a.createElement(f,{store:t,addNewComment:r,setAuthorValue:a,setTextValue:n}))},N=p=Object(d.a)((function(e){return{store:e}}),(function(e){return{setAuthorValue:function(t){return e(function(e){return{type:"SET_AUTHOR_VALUE",val:e}}(t))},delComment:function(t){return e(function(e){return{type:"DEL_COMMENT",idx:e}}(t))},addNewComment:function(t,a,n){return e(function(e,t,a){return{type:"ADD_NEW_COMMENT",author:e,text:t,date:a}}(t,a,n))},setTextValue:function(t){return e(function(e){return{type:"SET_TEXT_VALUE",val:e}}(t))},toggleBtn:function(t,a){return e(function(e,t){return{type:"TOGGLE_BTN",idx:e,val:t}}(t,a))}}}))(p),h=function(){var e=JSON.parse(localStorage.getItem("commentsList")),t=["\u041d\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432."];return e&&e.length?e:t},v={list:h(),add:{author:"",text:""}},g=Object(s.b)(u,v),x=function(e){o.a.render(c.a.createElement("div",{className:"wrapper"},e,c.a.createElement(N,{store:g})),document.querySelector(".main"))};fetch("https://maxkiner.github.io/server/topic.json").then((function(e){e.ok?e.json().then((function(e){return x(i(e))})):x(i(null))}))}},[[10,1,2]]]);
//# sourceMappingURL=main.37d04c7b.chunk.js.map