(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__1hZL1",item:"Statistics_item__3knq6",text:"Statistics_text__3z9mF"}},10:function(e,t,a){e.exports={text:"Notification_text__1SWf2"}},11:function(e,t,a){e.exports={container:"App_container__rZ87I"}},20:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(6),i=a.n(s),r=a(7),o=a(8),l=a(9),j=a(13),d=a(12),b=a(4),u=a.n(b),x=a(0);function h(e){var t=e.title,a=e.children;return Object(x.jsxs)("div",{className:u.a.container,children:[Object(x.jsx)("h2",{className:u.a.title,children:t}),a]})}var m=a(5),O=a.n(m);function p(e){var t=e.options,a=e.onLeaveFeedback;return Object(x.jsx)("div",{className:O.a.container,children:t.map((function(e){return Object(x.jsx)("button",{type:"button",className:O.a.btn,onClick:a(e),children:e},e)}))})}var _=a(1),f=a.n(_);function v(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(x.jsx)("div",{className:f.a.container,children:Object(x.jsxs)("ul",{className:f.a.list,children:[Object(x.jsxs)("li",{className:f.a.item,children:[Object(x.jsx)("span",{className:f.a.text,children:"Good:"}),t]}),Object(x.jsxs)("li",{className:f.a.item,children:[Object(x.jsx)("span",{className:f.a.text,children:"Neutral:"}),a]}),Object(x.jsxs)("li",{className:f.a.item,children:[Object(x.jsx)("span",{className:f.a.text,children:"Bad:"}),n]}),Object(x.jsxs)("li",{className:f.a.item,children:[Object(x.jsx)("span",{className:f.a.text,children:"Total:"}),c]}),Object(x.jsxs)("li",{className:f.a.item,children:[Object(x.jsx)("span",{className:f.a.text,children:"Positive feedback:"}),s,"%"]})]})})}var N=a(10),k=a.n(N);function g(e){var t=e.message;return Object(x.jsx)("p",{className:k.a.text,children:t})}var S=a(11),y=a.n(S),w=(a(19),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.increment=function(t){return function(){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=t+a+n,s=Math.round(t/c*100),i=Object.keys(this.state);return Object(x.jsxs)("div",{className:y.a.container,children:[Object(x.jsx)(h,{title:"Please leave feedback",children:Object(x.jsx)(p,{options:i,onLeaveFeedback:this.increment})}),c>0?Object(x.jsx)(h,{title:"Statistics",children:Object(x.jsx)(v,{good:t,neutral:a,bad:n,total:c,positivePercentage:s})}):Object(x.jsx)(g,{message:"No feedback given"})]})}}]),a}(n.Component));i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={container:"Section_container__cZS7d",title:"Section_title__MoSln"}},5:function(e,t,a){e.exports={container:"FeedbackOptions_container__2oe3V",btn:"FeedbackOptions_btn__2Geii"}}},[[20,1,2]]]);
//# sourceMappingURL=main.62d7d9fb.chunk.js.map