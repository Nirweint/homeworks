(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={affairs:"Affairs_affairs__3TB4e",affairs__btn:"Affairs_affairs__btn__1norQ",affairs__buttons:"Affairs_affairs__buttons__3Nmuo",affair:"Affairs_affair__17fv6",affair__name:"Affairs_affair__name__10uOC",affair__priority:"Affairs_affair__priority__3yIRq",affair__btn:"Affairs_affair__btn__1k542",high:"Affairs_high__1xYid",middle:"Affairs_middle__2QtP_",low:"Affairs_low__2HSi4",active:"Affairs_active__3dERN"}},,function(e,a,t){e.exports={message:"Message_message__Y9J2-",avatar:"Message_avatar__1nDYR",cloud:"Message_cloud__1VyqD",name:"Message_name__w4-oS",messageText:"Message_messageText__2tpnF",time:"Message_time__2ZkQX"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3YbcT",input:"SuperInputText_input__2Sd22",errorInput:"SuperInputText_errorInput__V35Fh",error:"SuperInputText_error__1yUoC"}},function(e,a,t){e.exports={selectWrapper:"SuperSelect_selectWrapper__PL6U2",select:"SuperSelect_select__3eXpG"}},function(e,a,t){e.exports={radioWrapper:"SuperRadio_radioWrapper__1Tduh",label:"SuperRadio_label__3F_EB",radio:"SuperRadio_radio__gHzOT"}},function(e,a,t){e.exports={people:"HW8_people__1I778",item:"HW8_item__3Xl_g",btn:"HW8_btn__mFM2I"}},,function(e,a,t){e.exports={error:"Error404_error__1GGqp",num:"Error404_num__2IHpx",title:"Error404_title__3OJaZ",kitty:"Error404_kitty__3UjjY"}},,function(e,a,t){e.exports={btn:"SuperButton_btn__hHHjo",default:"SuperButton_default__1yBjW",red:"SuperButton_red__3k6ia"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__3lw2Q",checkbox:"SuperCheckbox_checkbox__3o5nu",spanClassName:"SuperCheckbox_spanClassName__2aTIb"}},function(e,a,t){e.exports={nav:"Header_nav__25ksc",arrow:"Header_arrow__1yPWd",active:"Header_active__1k2So"}},,function(e,a,t){e.exports={inputWrapper:"Greeting_inputWrapper__BuEiS",btn:"Greeting_btn__1r1wU"}},function(e,a,t){e.exports={blue:"HW4_blue__raXbL",column:"HW4_column__UFHL6",testSpanError:"HW4_testSpanError__3mIPq"}},,function(e,a,t){e.exports={App:"App_App__1U2Gx"}},function(e,a,t){e.exports={editSpan:"SuperEditableSpan_editSpan__2eURR"}},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(24),s=t.n(c),i=(t(31),t(25)),o=t.n(i),l=t(8),j=t(2),u=t(9),b=t.n(u),d=t(0);var h=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("div",{className:b.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(d.jsxs)("div",{className:b.a.cloud,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.messageText,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Alex",p="Hello my friend. Thanks for everything.",f="22:00";var x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(h,{avatar:_,name:O,message:p,time:f}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},m=t(3),v=t(7),g=t.n(v),N=t(4),k=t(6),C=t(18),y=t.n(C),S=function(e){var a=e.red,t=e.className,n=Object(k.a)(e,["red","className"]),r="".concat(t," ").concat(y.a.btn," ").concat(a?y.a.red:y.a.default);return Object(d.jsx)("button",Object(N.a)({className:r},n))};var w=function(e){var a=g.a.affair__priority+" "+g.a[e.affair.priority];return Object(d.jsxs)("div",{className:g.a.affair,children:[Object(d.jsx)("span",{className:g.a.affair__name,children:e.affair.name}),Object(d.jsx)("span",{className:a,children:e.affair.priority}),Object(d.jsx)(S,{className:g.a.affair__btn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var A=function(e){var a=e.data.map((function(a){return Object(d.jsx)(w,{affair:a,deleteAffairCallback:e.deleteAffairCallback},a._id)})),t=function(a){e.setFilter(a)},n=function(a){return e.filter===a?"".concat(g.a.active," ").concat(g.a.affairs__btn):"".concat(g.a.affairs__btn)};return Object(d.jsxs)("div",{className:g.a.affairs,children:[a,Object(d.jsxs)("div",{className:g.a.affairs__buttons,children:[Object(d.jsx)(S,{className:n("all"),onClick:function(){t("all")},children:"All"}),Object(d.jsx)(S,{className:n("high"),onClick:function(){t("high")},children:"High"}),Object(d.jsx)(S,{className:n("middle"),onClick:function(){t("middle")},children:"Middle"}),Object(d.jsx)(S,{className:n("low"),onClick:function(){t("low")},children:"Low"})]})]})},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(n.useState)(T),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("all"),s=Object(m.a)(c,2),i=s[0],o=s[1],l=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(A,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},W=t(17),I=t(11),H=t.n(I),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(H.a.error," ").concat(s||""),l="".concat(H.a.superInput," ").concat(c?H.a.errorInput:""," ").concat(H.a.input);return Object(d.jsxs)("div",{className:H.a.superInput,children:[Object(d.jsx)("input",Object(N.a)({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:l},i)),c&&Object(d.jsx)("span",{className:o,children:c})]})},U=t(22),B=t.n(U),J=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,r=e.addUserOnEnter,c=e.error,s=e.totalUsers,i=!!c;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:B.a.inputWrapper,children:[Object(d.jsx)(P,{error:c,value:a,onChange:t,onKeyPress:r}),Object(d.jsx)(S,{className:B.a.btn,onClick:n,disabled:i,children:"add"}),Object(d.jsx)("span",{children:s})]})})},F=function(e){var a=e.users,t=e.addUserCallback,r=Object(n.useState)(""),c=Object(m.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),j=l[0],u=l[1],b=function(){s?(alert("Hello ".concat(s,"!")),t(s),i("")):u("name is require")},h=a.length;return Object(d.jsx)(J,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(i(a),u("")):(u("name is require"),i(""))},addUser:b,error:j,totalUsers:h,addUserOnEnter:function(e){"Enter"===e.key&&s?b():u("name is require")}})},R=t(35);var M=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(F,{users:t,addUserCallback:function(e){var a={_id:Object(R.a)(),name:e};r([].concat(Object(W.a)(t),[a]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},q=t(23),G=t.n(q),Y=t(19),D=t.n(Y),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{className:D.a.label,children:[Object(d.jsx)("input",Object(N.a)({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:D.a.spanClassName,children:r})]})};var K=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),o=Object(m.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(P,{value:t,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(P,{className:G.a.blue}),Object(d.jsx)(S,{children:"default"}),Object(d.jsx)(S,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(S,{disabled:!0,children:"disabled"}),Object(d.jsx)(X,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(X,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},L=t(26),Q=t.n(L),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,r=e.spanProps,c=Object(k.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(m.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,b=j.onDoubleClick,h=j.className,_=Object(k.a)(j,["children","onDoubleClick","className"]),O="".concat(Q.a.editSpan," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(P,Object(N.a)({autoFocus:!0,onBlur:function(e){l(!1),a&&a(e)},onEnter:function(){l(!1),t&&t()}},c)):Object(d.jsx)("span",Object(N.a)(Object(N.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:O},_),{},{children:u||c.value}))})};function z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function V(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}z("test",{x:"A",y:1});V("test",{x:"",y:0});var $=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Z,{value:t,onChangeText:r,spanProps:{children:t?void 0:"enter text..."}})}),Object(d.jsx)(S,{onClick:function(){z("editable-span-value",t)},children:"save"}),Object(d.jsx)(S,{onClick:function(){r(V("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function ee(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"PreJunior page"}),Object(d.jsx)(x,{}),Object(d.jsx)(E,{}),Object(d.jsx)(M,{}),Object(d.jsx)(K,{}),Object(d.jsx)($,{})]})}var ae=t(12),te=t.n(ae),ne=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,r=Object(k.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return Object(d.jsx)("option",{value:e,className:te.a.option,children:e},e+"-"+a)})):[],s="".concat(te.a.select," ").concat(te.a.className?te.a.className:"");return Object(d.jsx)("div",{className:te.a.selectWrapper,children:Object(d.jsx)("select",Object(N.a)(Object(N.a)({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},r),{},{className:s,children:c}))})},re=t(13),ce=t.n(re),se=function(e){e.type;var a=e.name,t=e.options,n=e.value,r=e.onChange,c=e.onChangeOption,s=Object(k.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),c&&c(e.currentTarget.value)},o="".concat(ce.a.radio," ").concat(ce.a.className?ce.a.className:""),l=t?t.map((function(e,t){return Object(d.jsxs)("label",{className:ce.a.label,children:[Object(d.jsx)("input",Object(N.a)({type:"radio",name:a,checked:n===e,value:e,onChange:i,className:o},s)),e]},a+"-"+t)})):[];return Object(d.jsx)("div",{className:ce.a.radioWrapper,children:l})},ie=["x","y","z"];var oe=function(){var e=Object(n.useState)(ie[1]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ne,{options:ie,value:t,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(se,{name:"radio",options:ie,value:t,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},le=function(e,a){switch(a.type){case"sort":var t=Object(W.a)(e);return"up"===a.payload?t.sort((function(e,a){return e.name<=a.name?-1:1})):"down"===a.payload?t.sort((function(e,a){return e.name<=a.name?1:-1})):e;case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},je=function(e){return{type:"sort",payload:e}},ue=t(14),be=t.n(ue),de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(de),a=Object(m.a)(e,2),t=a[0],r=a[1],c=t.map((function(e){return Object(d.jsxs)("div",{className:be.a.item,children:[Object(d.jsx)("span",{style:{marginRight:10},children:e.name}),Object(d.jsx)("span",{children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",Object(d.jsxs)("div",{className:be.a.people,children:[c,Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{className:be.a.btn,onClick:function(){return r(le(de,je("up")))},children:"sort up"}),Object(d.jsx)(S,{className:be.a.btn,onClick:function(){return r(le(de,je("down")))},children:"sort down"}),Object(d.jsx)(S,{className:be.a.btn,onClick:function(){return r(le(de,{type:"check",payload:18}))},children:"check 18"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function _e(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Junior page"}),Object(d.jsx)(oe,{}),Object(d.jsx)(he,{})]})}function Oe(){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"JuniorPlus page"})})}var pe=t(16),fe=t.n(pe);function xe(){return Object(d.jsxs)("div",{className:fe.a.error,children:[Object(d.jsx)("div",{className:fe.a.num,children:"404"}),Object(d.jsx)("div",{className:fe.a.title,children:"Page not found!"}),Object(d.jsx)("div",{className:fe.a.kitty,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(d.jsx)(l.b,{to:"/",children:"Return to pre-junior"})]})}var me="/pre-junior",ve="/junior",ge="/junior-plus";function Ne(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{index:!0,element:Object(d.jsx)(j.a,{replace:!0,to:me})}),Object(d.jsx)(j.b,{path:me,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(j.b,{path:ve,element:Object(d.jsx)(_e,{})}),Object(d.jsx)(j.b,{path:ge,element:Object(d.jsx)(Oe,{})}),Object(d.jsx)(j.b,{path:"*",element:Object(d.jsx)(xe,{})})]})})}var ke=t(20),Ce=t.n(ke);function ye(){var e=function(e){return e.isActive?Ce.a.active:""};return Object(d.jsxs)("div",{className:Ce.a.nav,children:[Object(d.jsx)(l.b,{to:me,className:e,children:"PreJunior"}),Object(d.jsx)(l.b,{to:ve,className:e,children:"Junior"}),Object(d.jsx)(l.b,{to:ge,className:e,children:"JuniorPlus"}),Object(d.jsx)("div",{className:Ce.a.arrow})]})}var Se=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(ye,{}),Object(d.jsx)(Ne,{})]})})};var we=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(we,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.57b0ef2f.chunk.js.map