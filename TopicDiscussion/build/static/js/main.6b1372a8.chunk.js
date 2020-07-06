(this.webpackJsonptopicdisc=this.webpackJsonptopicdisc||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(6),o=a.n(s),r=(a(12),a(13),function(e){return e?c.a.createElement("article",{className:"topic"},c.a.createElement("h2",{className:"topic__title"},e.title),e.content.map((function(e,t){return c.a.createElement("p",{key:t,className:"topic__p"},e)})),c.a.createElement("address",{className:"topic__author"},c.a.createElement("span",{className:"topic__name"},e.details.name),c.a.createElement("span",{className:"topic__date"},e.details.date))):c.a.createElement("div",{className:"topic"},c.a.createElement("div",{className:"error-wrapper"},c.a.createElement("p",{className:"error"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")))}),l=a(1),m=a(2),i=a(4),u=a(3),h=(a(14),a(15),function(){var e=new Date,t="0".concat(e.getDate()).slice(-2),a="0".concat(e.getMonth()).slice(-2),n=e.getFullYear(),c="0".concat(e.getHours()).slice(-2),s="0".concat(e.getMinutes()).slice(-2);return"".concat(n,"-").concat(a,"-").concat(t," ").concat(c,":").concat(s)}),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={author:"",text:""},e}return Object(m.a)(a,[{key:"submitComment",value:function(e){e.preventDefault();var t=document.querySelector(".comments__form"),a=t.querySelector("#author").value,n=t.querySelector("#text").value,c=h(),s=localStorage.getItem("commentsList")?JSON.parse(localStorage.getItem("commentsList")):[];s.push({name:a,text:n,date:c,btn:!1}),localStorage.removeItem("commentsList"),localStorage.setItem("commentsList",JSON.stringify(s)),this.setState({author:"",text:""})}},{key:"changeValue",value:function(e){var t=e.target,a=t.id,n=t.value;switch(a){case"author":this.setState({author:n});break;case"text":this.setState({text:n})}}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{action:"#",className:"comments__form",onSubmit:function(t){return e.submitComment(t)}},c.a.createElement("label",{htmlFor:"author",className:"visually-hidden"},"\u0418\u043c\u044f:"),c.a.createElement("input",{type:"text",id:"author",required:!0,className:"comments__author",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:this.state.author,onChange:function(t){return e.changeValue(t)}}),c.a.createElement("label",{htmlFor:"text",className:"visually-hidden"},"\u0422\u0435\u043a\u0441\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f:"),c.a.createElement("textarea",{id:"text",required:!0,className:"comments__textarea",placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:this.state.text,onChange:function(t){return e.changeValue(t)}}),c.a.createElement("input",{type:"submit",className:"comments__submit",value:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}))}}]),a}(c.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={list:e.loadList()},document.addEventListener("submit",(function(t){"FORM"===t.target.tagName&&e.setState({list:e.loadList()})})),e}return Object(m.a)(a,[{key:"loadList",value:function(){var e=JSON.parse(localStorage.getItem("commentsList")),t=["\u041d\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432."];return e&&e.length?e:t}},{key:"toggleBtn",value:function(e,t){var a=this.state.list;a.forEach((function(a,n){n===e&&(a.btn=t)})),this.setState({list:a})}},{key:"delItem",value:function(e){if(window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439?")){var t=[];this.state.list.forEach((function(a,n){n!==e&&t.push(a)})),localStorage.removeItem("commentsList"),localStorage.setItem("commentsList",JSON.stringify(t)),this.setState({list:this.loadList()})}}},{key:"render",value:function(){var e=this;return c.a.createElement("ul",{className:"comments__list"},this.state.list.map((function(t,a){return"object"===typeof t?c.a.createElement("li",{key:a,className:"comments__item",onMouseOver:function(){return e.toggleBtn(a,!0)},onMouseOut:function(){return e.toggleBtn(a,!1)}},c.a.createElement("div",{className:"comments__user"},c.a.createElement("h3",{className:"comments__name"},t.name),c.a.createElement("span",{className:"comments__date"},t.date)),c.a.createElement("p",{className:"comments__text"},t.text),c.a.createElement("div",{className:"comments__actions"},c.a.createElement("button",{key:a,className:t.btn?"comments__del comments__del--active":"comments__del",onClick:function(){return e.delItem(a)}},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"))):c.a.createElement("li",{key:a,className:"comments__nothing"},t)})))}}]),a}(c.a.Component),p=function(){return c.a.createElement("div",{className:"comments"},c.a.createElement("h2",{className:"comments__title"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),c.a.createElement(f,null),c.a.createElement(d,null))},_=function(e){o.a.render(c.a.createElement("div",{className:"wrapper"},e,c.a.createElement(p,null)),document.querySelector(".main"))};fetch("http://superclaw.github.io/TopicDiscussion/server/topic.json").then((function(e){e.ok?e.json().then((function(e){return _(r(e))})):_(r(null))}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6b1372a8.chunk.js.map