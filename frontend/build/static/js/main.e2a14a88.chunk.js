(this.webpackJsonpfronteend=this.webpackJsonpfronteend||[]).push([[0],{165:function(e,t){},188:function(e,t,a){e.exports=a(373)},193:function(e,t,a){},194:function(e,t,a){},201:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(193),a(60)),l=(a(194),a(36)),i=a(64),u=a(165),m=a.n(u),d=a(18),b=a(16),f="USER_LOGON_REQUEST",h="USER_LOGIN_SUCCESS",E="USER_LOGIN_FAILURE",p="USER_LOGOUT",O="STAT_NEW",v="STAT_DELETE",j="STAT_INCREMENT",g="STAT_DECREMENT",y="STAT_SELECT",w="POST_SELECT",C="POST_NEW",N="PWD_CHANGE",S="ICON_CHANGE",k="NEW_HUGO_ENTRY",H="HUGO_ENTRY_DELETE",I="CHANGE_CALENDAR_VIEW",U="SET_HUGO_VALUE",D="SET_HUGO_COLOR",x=[{title:"Jazz",userId:"admin",time:"26/13/56",checked:!1,value:1e3},{title:"Fucks Given",userId:"admin",time:"34/64/11",checked:!1,value:0},{title:"joints smoked",userId:"daniel",time:"12/53/77",checked:!1,value:420}],G=[{title:"Hugo is unacceptable",userId:"Daniel",time:"12/3/19",body:[{children:[{text:"By default, pasting content into a Slate editor will use the clipboard's "},{text:"'text/plain'",code:!0},{text:" data. That's okay for some use cases, but sometimes you want users to be able to paste in content and have it maintaing its formatting. To do this, your editor needs to handle "},{text:"'text/html'",code:!0},{text:" data. "}]},{children:[{text:"This is an example of doing exactly that!"}]},{children:[{text:"Try it out for yourself! Copy and paste some rendered HTML rich text content (not the source code) from another site into this editor and it's formatting should be preserved."}]}]},{title:"Hugo will be hung",userId:"admin",time:"24/8/17",body:[{type:"title",children:[{text:"Enforce Your Layout!"}]},{type:"paragraph",children:[{text:"This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and at least one paragraph in the body. Try deleting them and see what happens!"}]}]},{title:"Hugo is a bastard",userId:"admin",time:"12/3/99",body:[{children:[{text:"This is editable plain text, just like a <textarea>!"}]}]}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(b.a)({},e,{loggingIn:!0});case h:return Object(b.a)({},e,{loggedIn:!0});case E:case p:return Object(b.a)({},e);default:return e}},P={username:"adminerino",userId:"admin",password:"",icon:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uR3KgRq-sJayRblSz7i40QHaLF%26pid%3DApi&f=1"},T=a(47),B=a.n(T),_=[{id:"119",personID:"HUGO",date:new Date(2020,4,1),events:[{start:15,end:21}]},{id:"120",personID:"HUGO",date:new Date(2020,4,2),events:[{start:19,end:23,overflow:10}]},{id:"121",personID:"HUGO",date:new Date(2020,4,3),events:[{start:0,end:4,overflow:10}]},{id:"118",personID:"HUGO",date:new Date(2020,4,12),events:[{start:14,end:16}]},{id:"111",personID:"HUGO",date:new Date(2020,4,17),events:[{start:5,end:12}]},{id:"112",personID:"HUGO",date:new Date(2020,4,18),events:[{start:12,end:15}]},{id:"113",personID:"HUGO",date:new Date(2020,4,19),events:[{start:19,end:23,overflow:8}]},{id:"114",personID:"HUGO",date:new Date(2020,4,20),events:[{start:0,end:2,overflow:8},{start:12,end:23}]},{id:"115",personID:"HUGO",date:new Date(2020,4,21),events:[{start:18,end:23,overflow:10}]},{id:"116",personID:"HUGO",date:new Date(2020,4,22),events:[{start:0,end:3,overflow:10},{start:19,end:23,overflow:8}]},{id:"117",personID:"HUGO",date:new Date(2020,4,23),events:[{start:0,end:2,overflow:8},{start:20,end:23}]}],R={type:"year",interval:{start:new Date(2020,1,1),end:new Date(2020,1,1)}},A={colorMax:B()("#3366ff"),colorMin:B()("#ff0000"),valueMax:Math.max.apply(Math,_.map((function(e){return e.events.map((function(e){return e.end-e.start})).reduce((function(e,t){return e+t}),0)}))),valueMin:Math.min.apply(Math,_.map((function(e){return Math,e.events.map((function(e){return e.end-e.start})).reduce((function(e,t){return e+t}),0)})))},L=Object(i.c)({HUGOEntries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{HUGOItems:_,HUGOFilter:R,HUGOColor:A},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(b.a)({},e,{HUGOItems:[].concat(Object(d.a)(e.HUGOItems),[{id:t.id,year:t.year,day:t.day,length:t.length}])});case H:return Object(b.a)({},e,{HUGOItems:e.HUGOItems.filter((function(e){return!e.id===t.id}))});case I:return Object(b.a)({},e,{HUGOFilter:{type:t.filterType,interval:t.interval}});case D:return Object(b.a)({},e,{HUGOColor:Object(b.a)({},e.HUGOColor,{colorMax:t.colorMax,colorMin:t.colorMin})});case U:return Object(b.a)({},e,{HUGOColor:Object(b.a)({},e.HUGOColor,{valueMin:t.valueMin,valueMax:t.valueMax})});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:P},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)({},e,{user:Object(b.a)({},e.user,{password:t.newPassword})});case S:return Object(b.a)({},e,{user:Object(b.a)({},e.user,{icon:t.newIcon})});default:return e}},builds:m.a,stats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stats:x},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)({},e,{stats:[].concat(Object(d.a)(e.stats),[{title:t.title,userId:t.userId,time:t.time,value:parseInt(t.value),checked:!1}])});case v:return Object(b.a)({},e,{stats:e.stats.filter((function(e){return!e.checked}))});case y:return Object(b.a)({},e,{stats:e.stats.map((function(e,a){return e.title===t.statName?Object(b.a)({},e,{checked:t.checked}):e}))});case j:return Object(b.a)({},e,{stats:e.stats.map((function(e,t){return e.checked?Object(b.a)({},e,{value:e.value+1}):e}))});case g:return Object(b.a)({},e,{stats:e.stats.map((function(e,t){return e.checked?Object(b.a)({},e,{value:e.value-1}):e}))});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{posts:G},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(b.a)({},e,{posts:[].concat(Object(d.a)(e.posts),[{sender:t.sender,time:t.postDate,title:t.postTitle,body:t.postBody}])});case w:return Object(b.a)({},e);default:return e}},loginReducer:M}),V=a(168),F=a(169),W=a(170),Y=Object(l.a)(),J=Object(F.createLogger)(),q=Object(W.routerMiddleware)(Y),z=Object(i.d)(L,Object(i.a)(V.a,J,q)),K=a(23),Q=a(19),$=a(25),X=a(26),Z=a(28),ee=a(27),te=a(79),ae=(a(201),a(2)),ne=a(407),re=a(408),ce=a(432),oe=a(411),se=a(50),le=a(3),ie=a(71),ue=a.n(ie),me=a(179),de=a(78),be=a(4),fe=a(52);function he(){var e=Object(de.a)(["\n          position: relative;\n          padding: 1px 18px 17px;\n          margin: 0 -20px;\n          border-bottom: 2px solid #eee;\n          margin-bottom: 20px;\n        "]);return he=function(){return e},e}function Ee(){var e=Object(de.a)(["\n          & > * {\n            display: inline-block;\n          }\n          & > * + * {\n            margin-left: 15px;\n          }\n        "]);return Ee=function(){return e},e}function pe(){var e=Object(de.a)(["\n          font-size: 18px;\n          vertical-align: text-bottom;\n        "]);return pe=function(){return e},e}function Oe(){var e=Object(de.a)(["\n            cursor: pointer;\n            color: ",";\n          "]);return Oe=function(){return e},e}var ve=r.a.forwardRef((function(e,t){var a=e.className,n=e.active,c=e.reversed,o=Object(be.a)(e,["className","active","reversed"]);return r.a.createElement("span",Object.assign({},o,{ref:t,className:Object(fe.b)(a,Object(fe.a)(Oe(),c?n?"white":"#aaa":n?"black":"#ccc"))}))})),je=r.a.forwardRef((function(e,t){var a=e.className,n=Object(be.a)(e,["className"]);return r.a.createElement("span",Object.assign({},n,{ref:t,className:Object(fe.b)("material-icons",a,Object(fe.a)(pe()))}))})),ge=r.a.forwardRef((function(e,t){var a=e.className,n=Object(be.a)(e,["className"]);return r.a.createElement("div",Object.assign({},n,{ref:t,className:Object(fe.b)(a,Object(fe.a)(Ee()))}))})),ye=r.a.forwardRef((function(e,t){var a=e.className,n=Object(be.a)(e,["className"]);return r.a.createElement(ge,Object.assign({},n,{ref:t,className:Object(fe.b)(a,Object(fe.a)(he()))}))})),we={"mod+b":"bold","mod+i":"italic","mod+u":"underline","mod+`":"code"},Ce=["numbered-list","bulleted-list"],Ne=function(e,t){ke(e,t)?le.a.removeMark(e,t):le.a.addMark(e,t,!0)},Se=function(e,t){var a=le.a.nodes(e,{match:function(e){return e.type===t}});return!!Object(ae.a)(a,1)[0]},ke=function(e,t){var a=le.a.marks(e);return!!a&&!0===a[t]},He=function(e){var t=e.attributes,a=e.children;switch(e.element.type){case"block-quote":return r.a.createElement("blockquote",t,a);case"bulleted-list":return r.a.createElement("ul",t,a);case"heading-one":return r.a.createElement("h1",t,a);case"heading-two":return r.a.createElement("h2",t,a);case"list-item":return r.a.createElement("li",t,a);case"numbered-list":return r.a.createElement("ol",t,a);default:return r.a.createElement("p",t,a)}},Ie=function(e){var t=e.attributes,a=e.children,n=e.leaf;return n.bold&&(a=r.a.createElement("strong",null,a)),n.code&&(a=r.a.createElement("code",null,a)),n.italic&&(a=r.a.createElement("em",null,a)),n.underline&&(a=r.a.createElement("u",null,a)),r.a.createElement("span",t,a)},Ue=function(e){var t=e.format,a=e.icon,n=Object(se.c)();return r.a.createElement(ve,{active:Se(n,t),onMouseDown:function(e){e.preventDefault(),function(e,t){var a=Se(e,t),n=Ce.includes(t);if(le.h.unwrapNodes(e,{match:function(e){return Ce.includes(e.type)},split:!0}),le.h.setNodes(e,{type:a?"paragraph":n?"list-item":t}),!a&&n){var r={type:t,children:[]};le.h.wrapNodes(e,r)}}(n,t)}},r.a.createElement(je,null,a))},De=function(e){var t=e.format,a=e.icon,n=Object(se.c)();return r.a.createElement(ve,{active:ke(n,t),onMouseDown:function(e){e.preventDefault(),Ne(n,t)}},r.a.createElement(je,null,a))},xe=function(e){var t=e.value,a=e.setValue,c=Object(n.useCallback)((function(e){return r.a.createElement(He,e)}),[]),o=Object(n.useCallback)((function(e){return r.a.createElement(Ie,e)}),[]),s=Object(n.useMemo)((function(){return Object(me.a)(Object(se.d)(Object(le.i)()))}),[]);return r.a.createElement(se.b,{editor:s,value:t,onChange:function(e){return a(e)}},r.a.createElement(ye,null,r.a.createElement(De,{format:"bold",icon:"format_bold"}),r.a.createElement(De,{format:"italic",icon:"format_italic"}),r.a.createElement(De,{format:"underline",icon:"format_underlined"}),r.a.createElement(De,{format:"code",icon:"code"}),r.a.createElement(Ue,{format:"heading-one",icon:"looks_one"}),r.a.createElement(Ue,{format:"heading-two",icon:"looks_two"}),r.a.createElement(Ue,{format:"block-quote",icon:"format_quote"}),r.a.createElement(Ue,{format:"numbered-list",icon:"format_list_numbered"}),r.a.createElement(Ue,{format:"bulleted-list",icon:"format_list_bulleted"})),r.a.createElement(se.a,{renderElement:c,renderLeaf:o,placeholder:"Enter some rich text\u2026",spellCheck:!0,autoFocus:!0,onKeyDown:function(e){for(var t in we){if(ue()(t,e))e.preventDefault(),Ne(s,we[t])}}}))},Ge=[{type:"paragraph",children:[{text:"This is editable!"}]}],Me=function(e){var t=Object(n.useState)(!1),a=Object(ae.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(Ge),l=Object(ae.a)(s,2),i=l[0],u=l[1],m=Object(n.useState)(""),d=Object(ae.a)(m,2),b=d[0],f=d[1],h=Object(n.useState)([]),E=Object(ae.a)(h,2),p=E[0],O=E[1],v=Object(n.useMemo)((function(){return Object(se.d)(Object(le.i)())}),[]);function j(t){t.stopPropagation(),e.posts.posts.forEach((function(e){t.target.title===e.time&&(o(!0),g(e.body))}))}function g(e){O(e)}return r.a.createElement("div",{className:"messageBoardBody"},r.a.createElement("div",{className:"postList"},r.a.createElement(te.a,null,"Posts"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.newPost("Daniel",Date.now().toString(),b,i)}},r.a.createElement("div",null,r.a.createElement(ne.a,null,e.posts.posts.map((function(e,t){return console.log(e.title),r.a.createElement(re.a,{key:e.time,className:"postListItem"},r.a.createElement("div",{title:e.time,onClick:j},e.userId+": :"+e.time+": :"+e.title))})))),r.a.createElement("div",null,r.a.createElement(te.a,null,"Post Title"),r.a.createElement(ce.a,{id:"standard-basic",label:"Post Title",name:"newStatName",onChange:function(e){f(e.target.value)}}),r.a.createElement(oe.a,{type:"submit"},"Create Post")))),r.a.createElement("div",{className:"viewPost"},r.a.createElement(te.a,null,"View Post"),r.a.createElement("div",null,c?r.a.createElement(se.b,{editor:v,value:p,onChange:g},r.a.createElement(se.a,{readOnly:!0})):r.a.createElement("div",null,"you have not selected a post"))),r.a.createElement("div",{className:"newPost"},r.a.createElement(te.a,null,"New Post"),r.a.createElement("div",null,r.a.createElement(xe,{value:i,setValue:u}))))},Pe=a(412),Te=a(413),Be=a(434),_e=function(e){var t=Object(n.useState)(""),a=Object(ae.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(ae.a)(s,2),i=l[0],u=l[1];function m(e){"newStatName"===e.target.name?o(e.target.value):u(e.target.value)}return r.a.createElement("div",{className:"statsChangeBox"},r.a.createElement("div",{className:"incrementBox"},r.a.createElement("div",null,r.a.createElement(te.a,null,"Create New Stat"),r.a.createElement("form",{className:"createNewStat",onSubmit:function(t){t.preventDefault(),e.newStat(c,e.user.userId,new Date,i)}},r.a.createElement("div",{className:"statValues"},r.a.createElement(ce.a,{id:"standard-basic",label:"Name of Stat",name:"newStatName",onChange:m}),r.a.createElement(ce.a,{id:"standard-number",label:"Initial Value",name:"newStatValue",type:"number",onChange:m})),r.a.createElement(oe.a,{type:"submit"},"Create"))),r.a.createElement("div",{className:"increaseExistingStat"},r.a.createElement(te.a,null,"Manage Stats"),r.a.createElement(te.a,null,"Number of Stats: ",0),r.a.createElement("div",{className:"increaseButtons"},r.a.createElement(oe.a,{onClick:function(){e.increaseStats()}},"Increase"),r.a.createElement(oe.a,{onClick:function(){e.decreaseStats()}},"Decrease"),r.a.createElement(oe.a,{onClick:function(){e.deleteStats()}},"Delete")))),r.a.createElement(Pe.a,{className:"statsBox"},e.stats.stats.map((function(t,a){return r.a.createElement("div",{className:"stat",key:t.time},r.a.createElement(te.a,null,t.value),r.a.createElement(Te.a,{control:r.a.createElement(Be.a,{checked:t.checked,onChange:function(t){e.selectStat(t.target.name,t.target.checked)},name:t.title}),label:t.title}))}))))},Re={newStat:function(e,t,a,n){return{type:O,title:e,userId:t,time:a,value:n}},selectStat:function(e,t){return{type:y,statName:e,checked:t}},deleteStats:function(){return{type:v}},incrementStats:function(){return{type:j}},decrementStats:function(){return{type:g}},newPost:function(e,t,a,n){return{type:C,sender:e,postDate:t,postTitle:a,postBody:n}}};var Ae=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"homeBody"},r.a.createElement(te.a,{variant:"h1"},"HOME"),r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"Stats"),r.a.createElement("div",{className:"statsBody"},r.a.createElement(_e,{stats:this.props.stats,increaseStats:this.props.increaseStats,decreaseStats:this.props.decreaseStats,deleteStats:this.props.deleteStats,selectStat:this.props.selectStats,newStat:this.props.newStats,user:this.props.user})),r.a.createElement(te.a,{variant:"h3"},"Message Board"),r.a.createElement("div",{className:"messageBody"},r.a.createElement(Me,{posts:this.props.posts,newPost:this.props.newPost}))))}}]),t}(r.a.Component),Le=Object(ee.b)((function(e){return{posts:e.posts,stats:e.stats,user:e.user}}),(function(e){return{increaseStats:function(){e(Re.incrementStats())},decreaseStats:function(){e(Re.decrementStats())},deleteStats:function(){e(Re.deleteStats())},selectStats:function(t,a){e(Re.selectStat(t,a))},newStats:function(t,a,n,r){e(Re.newStat(t,a,n,r))},newPost:function(t,a,n,r){e(Re.newPost(t,a,n,r))}}}))(Ae),Ve=a(14),Fe=a(31),We=(a(208),{login:function(e,t){return"admin"===e&&"pass"===t?(Y.push("/home"),sessionStorage.setItem("user",JSON.stringify("prestent")),{type:h}):{type:E}},logout:function(){return{type:p}},register:function(e,t){return{}}});var Ye=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={userName:"",password:""},a.submitLogin=a.submitLogin.bind(Object(Fe.a)(a)),a.loginChange=a.loginChange.bind(Object(Fe.a)(a)),a.formRef=r.a.createRef(),a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"loginChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(Ve.a)({},a,n))}},{key:"submitLogin",value:function(e){e.preventDefault();var t=this.state,a=t.userName,n=t.password;a&&n&&this.props.login(a,n)}},{key:"render",value:function(){return r.a.createElement("form",{className:"loginForm",onSubmit:this.submitLogin,submit:"this.submitLogin"},r.a.createElement("h2",{className:"title"},"Login to Home"),r.a.createElement(ce.a,{className:"upField",id:"standard-basic",label:"Username",name:"userName",onChange:this.loginChange}),r.a.createElement(ce.a,{className:"upField",id:"standard-basic",label:"Password",name:"password",onChange:this.loginChange}),r.a.createElement(oe.a,{className:"loginButton",color:"primary",type:"submit"},"Login"),r.a.createElement("p",{className:"createAccount"},"New to the House?",r.a.createElement("span",{className:"createAccountBtn",onClick:this.createAccount}," Create Account!")))}}]),t}(r.a.Component),Je=Object(ee.b)((function(e){return{userName:e.userName,password:e.password}}),(function(e){return{login:function(t,a){e(We.login(t,a))}}}))(Ye),qe=(a(209),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"buildBody",gutterButtom:!0},r.a.createElement(te.a,{variant:"h1"},"BUILDS"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"All Builds"),r.a.createElement("div",{className:"allBuildBox"},"info goes here")),r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"My Builds"),r.a.createElement("div",{className:"myBuildBox"},"info goes here"))))}}]),t}(r.a.Component)),ze=Object(ee.b)((function(e){return{}}))(qe),Ke=a(437),Qe=a(438),$e=(a(210),a(211),function(e){return r.a.createElement("div",{className:"contribBody"},r.a.createElement("div",{className:"contribTitle"},r.a.createElement(te.a,{className:""},"Your "),"stats"===e.type?r.a.createElement(te.a,null,"Stats"):"posts"===e.type?r.a.createElement(te.a,null,"Posts"):null),e.contribs.map((function(t,a){return r.a.createElement("div",{className:"contribEntry",key:t.time.toString()},r.a.createElement(te.a,null,t.title,": ","stats"===e.type?t.value:null),r.a.createElement(te.a,null,"Posted At: ",t.time))})))}),Xe=a(77),Ze=function(e){return e.user.user},et=Object(Xe.a)((function(e){return e.posts.posts}),Ze,(function(e,t){return e.filter((function(e){if(e.userId===t.userId)return e}))})),tt=Object(Xe.a)((function(e){return e.stats.stats}),Ze,(function(e,t){return e.filter((function(e){if(e.userId===t.userId)return e}))})),at={changePassword:function(e,t){return{type:N,newPassword:e,oldPassword:t}},changeIcon:function(e){return{type:S,newIcon:e}}};var nt=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={oldPassword:"",newPassword:"",newPasswordRepeat:"",newIcon:"",passwordErrorMessage:""},a.changeIcon=a.changeIcon.bind(Object(Fe.a)(a)),a.changePassword=a.changePassword.bind(Object(Fe.a)(a)),a.updatePassword=a.updatePassword.bind(Object(Fe.a)(a)),a.updateIcon=a.updateIcon.bind(Object(Fe.a)(a)),a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"changePassword",value:function(e){e.preventDefault(),this.state.newPassword===this.state.newPasswordRepeat?(this.props.changePassword(this.state.newPassword),this.setState({passwordErrorMessage:"Your password has been changed"})):this.setState({passwordErrorMessage:"Your passwords do not match"})}},{key:"updatePassword",value:function(e){switch(e.target.name){case"oldPwd":return void this.setState({oldPassword:e.target.value});case"newPwd":return void this.setState({newPassword:e.target.value});case"newPwdRepeat":return void this.setState({newPasswordRepeat:e.target.value});default:return}}},{key:"changeIcon",value:function(e){e.preventDefault(),this.props.changeIcon(this.state.newIcon)}},{key:"updateIcon",value:function(e){this.setState({newIcon:e.target.value})}},{key:"render",value:function(){return r.a.createElement("main",{className:"accountBody"},r.a.createElement(te.a,{variant:"h1"},"Account"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"Account Info"),r.a.createElement("div",{className:"infoBox"},r.a.createElement("div",null,r.a.createElement(Ke.a,{title:"Change Avatar"},r.a.createElement(Qe.a,{alt:"Remy Sharp",className:"profileIcon",src:this.props.user.icon})),r.a.createElement(te.a,null,this.props.user.username)),r.a.createElement("div",{className:"changeIconBox"},r.a.createElement(te.a,null,"Change Icon"),r.a.createElement("form",{onSubmit:this.changeIcon},r.a.createElement(ce.a,{label:"Link to New Image",onChange:this.updateIcon}),r.a.createElement(oe.a,{type:"submit"},"Change"))),r.a.createElement("div",{className:"changePasswordBox"},r.a.createElement(te.a,null,"Change Password"),r.a.createElement(te.a,{className:"pwdErrorMessage"},this.state.passwordErrorMessage),r.a.createElement("form",{onSubmit:this.changePassword},r.a.createElement(ce.a,{label:"Old Password",name:"oldPwd",onChange:this.updatePassword}),r.a.createElement(ce.a,{label:"New Password",name:"newPwd",onChange:this.updatePassword}),r.a.createElement(ce.a,{label:"Repeat",name:"newPwdRepeat",onChange:this.updatePassword}),r.a.createElement(oe.a,{type:"submit"},"Change"))))),r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"My Contributions"),r.a.createElement("div",{className:"contribBox"},r.a.createElement($e,{type:"stats",contribs:this.props.stats}),r.a.createElement($e,{type:"posts",contribs:this.props.posts})))))}}]),t}(r.a.Component),rt=Object(ee.b)((function(e){return{user:e.user.user,posts:et(e),stats:tt(e)}}),(function(e){return{changeIcon:function(t){e(at.changeIcon(t))},changePassword:function(t,a){e(at.changePassword(t,a))}}}))(nt),ct=function(e){function t(){return Object(K.a)(this,t),Object($.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.component,n=Object(be.a)(t,["component"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(t){return e.props.authenticated.loggedIn?r.a.createElement(a,t):r.a.createElement(s.a,{to:"/login"})}}))}}]),t}(r.a.Component),ot=Object(ee.b)((function(e){return{authenticated:e.loginReducer}}))(ct),st=(a(213),function(e){function t(){return Object(K.a)(this,t),Object($.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"notText"},"This page does not exist!")}}]),t}(r.a.Component)),lt=a(59),it=a(435),ut=a(414),mt=a(415),dt=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={currentTab:"home"},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"setCurrentTab",value:function(e){this.setState({currentTab:e})}},{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(it.a,{open:!0,variant:"permanent",anchor:"left"},r.a.createElement(ut.a,null),r.a.createElement(ne.a,null,r.a.createElement(re.a,{button:!0,component:lt.a,to:"/home/account"},r.a.createElement(mt.a,{primary:"Account"})),r.a.createElement(re.a,{button:!0,component:lt.a,to:"/home"},r.a.createElement(mt.a,{primary:"Home"})),r.a.createElement(re.a,{button:!0,component:lt.a,to:"/home/HUGO"},r.a.createElement(mt.a,{primary:"HUGO"})),r.a.createElement(re.a,{button:!0,component:lt.a,to:"/home/builds"},r.a.createElement(mt.a,{primary:"Builds"})),r.a.createElement(re.a,{button:!0,component:lt.a,to:"/home/net"},r.a.createElement(mt.a,{primary:"Networking"})))))}}]),t}(r.a.Component),bt=Object(ee.b)((function(e){return{currentTab:e.currentTab}}))(dt),ft=(a(214),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"networkBody"},r.a.createElement(te.a,{variant:"h1"},"Account"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"Network Info"),r.a.createElement("div",{className:"netInfoBox"},"info goes here")),r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"DNS stats"),r.a.createElement("div",{className:"DNSBox"},"info goes here"))))}}]),t}(r.a.Component)),ht=Object(ee.b)((function(e){return{}}),(function(e){return{}}))(ft),Et=a(428),pt=a(433),Ot=a(429),vt=a(416),jt=a(422),gt=a(421),yt=a(423),wt=a(417),Ct=a(418),Nt=a(98),St=a(420),kt=a(424),Ht=a(177),It=a(100),Ut=a(178),Dt=a(425),xt=a(426),Gt=a(427),Mt=a(431),Pt=a(123),Tt=(a(372),a(419)),Bt=function(e){var t=Object(n.useState)([]),a=Object(ae.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){o(s())}),[e]);var s=function(){for(var t=[],a=Object(vt.a)(e.currentDate);!Object(wt.a)(a);)a=Object(Ct.a)(a,1);for(var n=function(n){var r=!1;e.HUGOEntries.forEach((function(e){Object(Tt.a)(e.date,Object(Nt.a)(a,n))&&(t.push({entry:e,day:Object(Nt.a)(a,n)}),r=!0)})),r||t.push({entry:null,day:Object(Nt.a)(a,n)})},r=0;r<35;r++)n(r);return t};return r.a.createElement("div",{className:"monthCalBody"},r.a.createElement("div",{className:"monthCalBody"},r.a.createElement("div",{className:"weekDayHeader"},Array(7).fill().map((function(e,t){return r.a.createElement("span",{key:"monthHeader"+t.toString()},Object(Mt.a)(Object(Nt.a)(new Date,t),"EEEE"))}))),r.a.createElement("div",{className:"monthBody"},c.map((function(t,a){return r.a.createElement("div",{className:"monthCell",style:e.setCellColor(t),key:"month"+t.toString()+a.toString()},r.a.createElement("span",{className:"monthCellLabel"},Object(Mt.a)(t.day,"d")))})))))},_t=a(439),Rt=function(e){var t=Object(n.useState)([]),a=Object(ae.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){o(s())}),[e]);var s=function(){for(var t=[],a=Object(St.a)(e.currentDate),n=Object(St.a)(e.currentDate);!Object(wt.a)(n);)n=Object(Ct.a)(n,1),t.push({entry:null,day:"empty"});for(var r=function(n){var r=!1;e.HUGOEntries.forEach((function(e,c){Object(Tt.a)(e.date,Object(Nt.a)(a,n))&&(t.push({entry:e,day:Object(Nt.a)(a,n)}),r=!0)})),r||t.push({entry:null,day:Object(Nt.a)(a,n)})},c=0;c<Object(_t.a)(a);c++)r(c);return t};return r.a.createElement("div",{className:"yearBody"},r.a.createElement("div",{className:"yearHeaders"},Array(12).fill().map((function(t,a){return r.a.createElement("span",{key:"yearHeader"+a.toString()},Object(Mt.a)(Object(It.a)(Object(St.a)(e.currentDate),a),"MMMM"))}))),r.a.createElement("div",{className:"yearContent"},c.map((function(t,a){return"string"===typeof t.day?r.a.createElement("div",{className:"emptyCell",key:t.toString()+a.toString()+"yearCont"}):r.a.createElement("div",{key:t.toString()+a.toString()+"yearCont",className:"yearCell "+a,style:e.setCellColor(t),name:t.day.toString()})}))),r.a.createElement("div",null))},At=function(e){var t=Object(n.useState)([]),a=Object(ae.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){o(s())}),[e]);var s=function(){for(var t=[],a=Object(gt.a)(e.currentDate,{weekStartsOn:1}),n=function(n){var r=!1;e.HUGOEntries.forEach((function(e,c){Object(Tt.a)(e.date,Object(Nt.a)(a,n))&&(t.push({entry:e,day:Object(Nt.a)(a,n)}),r=!0)})),r||t.push({entry:"empty",day:Object(Nt.a)(a,n)})},r=0;r<7;r++)n(r);return t};return r.a.createElement("div",{className:"weekBox"},r.a.createElement("div",{className:"weekHeaders"},Array(6).fill().map((function(t,a){return r.a.createElement("span",{key:"weekHeadKey"+a.toString()},Object(Mt.a)(Object(Nt.a)(Object(gt.a)(e.currentDate,{weekStartsOn:1}),a),"EEEE"))}))),r.a.createElement("div",{className:"weekContent"},c.map((function(t,a){return r.a.createElement("div",{className:"weekDayCell",key:"weekCell"+t.toString()+a.toString()},r.a.createElement("div",null,Object(Mt.a)(t.day,"dd")),function(t,a){for(var n=[],c=0;c<24;)n.push(r.a.createElement("div",{key:(Math.random()+1).toString(36).substring(7),className:"hourCell",style:{backgroundColor:e.HUGOColor.colorMin}},"hour: ",c)),c++;return"empty"===t?n:(t.events.forEach((function(t,a){for(var c=t.end-t.start,o=0;o<c+1;o++)n[t.start+o]=r.a.createElement("div",{key:(Math.random()+1).toString(36).substring(7),className:"hourCell",style:e.setHourCellColor(t)},"HUGO IS HERE")})),n)}(t.entry))}))))},Lt=function(e){var t=Object(n.useState)("month"),a=Object(ae.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(e.currentDate),l=Object(ae.a)(s,2),i=l[0],u=l[1],m=Object(n.useState)(Object(vt.a)(e.currentDate)),d=Object(ae.a)(m,2),b=d[0],f=d[1],h=Object(n.useState)(Object(jt.a)(e.currentDate)),E=Object(ae.a)(h,2),p=E[0],O=E[1],v=Object(n.useState)(!0),j=Object(ae.a)(v,2),g=j[0],y=j[1],w=Object(n.useState)(!0),C=Object(ae.a)(w,2),N=C[0],S=C[1],k=e.HUGOColor.colorMax,H=e.HUGOColor.colorMin,I=e.HUGOColor.valueMax;Object(n.useEffect)((function(){D()}),[c,i]),Object(n.useEffect)((function(){e.changeView(c,{start:b,end:p})}),[b,p]);var U=function(e){"valueMaxColor"===e.target.className?S(!N):"valueMinColor"===e.target.className&&y(!g)},D=function(){var e,t;if("week"===c)e=Object(gt.a)(i,{weekStartsOn:1}),t=Object(yt.a)(e,{weekStartsOn:1});else if("month"===c){for(e=Object(vt.a)(i);!Object(wt.a)(e);)e=Object(Ct.a)(e,1);t=Object(Nt.a)(e,34)}else"year"===c&&(e=Object(St.a)(i),t=Object(kt.a)(e));f(e),O(t)},x=function(e){if(null===e.entry)return{backgroundColor:H};var t=0;return e.entry.events.forEach((function(e){var a=e.end-e.start;t+=a})),{backgroundColor:B.a.mix(H,k,t/I*100)}};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te.a,null,"Current Date: ",(new Date).toString()),r.a.createElement("div",null,r.a.createElement("div",{className:"monthPaginate"},r.a.createElement(oe.a,{onClick:function(e){var t;"week"===c?t=Object(Ht.a)(i,1):"month"===c?t=Object(It.a)(i,1):"year"===c&&(t=Object(Ut.a)(i,1)),u(t)}},"Next"),r.a.createElement(te.a,null,"Current Month: ",Object(Mt.a)(i,"MMMM")," ",Object(Mt.a)(i,"y")),r.a.createElement(oe.a,{onClick:function(e){var t;"week"===c?t=Object(Dt.a)(i,1):"month"===c?t=Object(xt.a)(i,1):"year"===c&&(t=Object(Gt.a)(i,1)),u(t)}},"Previous")),r.a.createElement("div",{className:"sampleBody"},r.a.createElement("div",{hidden:g},r.a.createElement(Pt.MaterialPicker,{color:H,onChangeComplete:function(t){e.changeColor(k,B()(t.hex))}})),r.a.createElement("div",{className:"valueMinColor",onClick:U,style:{background:H}}),r.a.createElement(te.a,null,"0"),r.a.createElement("div",{className:"colorSampleCellBody"},Array(10).fill().map((function(e,t){return r.a.createElement("div",{key:"colorKey"+t.toString(),className:"colorSampleCell",style:{backgroundColor:B.a.mix(H,k,10*t)}})}))),r.a.createElement(te.a,null,I),r.a.createElement("div",{className:"valueMaxColor",onClick:U,style:{background:k}}),r.a.createElement("div",{hidden:N},r.a.createElement(Pt.MaterialPicker,{color:k,onChangeComplete:function(t){e.changeColor(B()(t.hex),H)}})))),r.a.createElement("div",null,r.a.createElement(Et.a,{position:"static"},r.a.createElement(pt.a,{value:c,onChange:function(e,t){o(t)}},r.a.createElement(Ot.a,{label:"Week",value:"week"}),r.a.createElement(Ot.a,{label:"Month",value:"month"}),r.a.createElement(Ot.a,{label:"Year",value:"year"}))),r.a.createElement("div",{hidden:"week"!==c},r.a.createElement(At,{currentDate:i,setHourCellColor:function(e){return"undefined"===typeof e.overflow?{backgroundColor:B.a.mix(H,k,(e.end-e.start)/I*100)}:{backgroundColor:B.a.mix(H,k,e.overflow/I*100)}},HUGOEntries:e.HUGOEntries,HUGOColor:e.HUGOColor})),r.a.createElement("div",{hidden:"month"!==c},r.a.createElement(Bt,{currentDate:i,setCellColor:x,HUGOEntries:e.HUGOEntries,HUGOColor:e.HUGOColor})),r.a.createElement("div",{hidden:"year"!==c},r.a.createElement(Rt,{currentDate:i,setCellColor:x,HUGOEntries:e.HUGOEntries,HUGOColor:e.HUGOColor})))))},Vt=a(430),Ft=Object(Xe.a)([function(e){return e.HUGOEntries.HUGOFilter},function(e){return e.HUGOEntries.HUGOItems}],(function(e,t){switch(e.type){case"year":return t;case"month":case"week":return t.filter((function(t,a){if(Object(Vt.a)(t.date,e.interval))return t}));default:return}})),Wt={newHugoEntry:function(){return{type:k}},deleteHugoEntry:function(e){return{type:H,id:e}},changeHugoView:function(e,t){return{type:I,filterType:e,interval:t}},setHugoColor:function(e,t){return{type:D,colorMax:e,colorMin:t}},setHugoValue:function(e,t){return{type:U,valueMax:e,valueMin:t}}};var Yt=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).state={currentDate:new Date(2020,4,1)},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"buildBody"},r.a.createElement(te.a,{variant:"h1"},"HUGO Predictor"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te.a,{variant:"h3"},"Overview"),r.a.createElement("div",{className:"allBuildBox"},r.a.createElement(Lt,{currentDate:this.state.currentDate,HUGOEntries:this.props.HUGOEntries,changeView:this.props.changeCalendarView,changeColor:this.props.changeColor,HUGOColor:this.props.HUGOColor})))))}}]),t}(r.a.Component),Jt=Object(ee.b)((function(e){return{HUGOEntries:Ft(e),HUGOColor:e.HUGOEntries.HUGOColor}}),(function(e){return{changeCalendarView:function(t,a){return e(Wt.changeHugoView(t,a))},changeColor:function(t,a){return e(Wt.setHugoColor(t,a))}}}))(Yt);var qt=function(){return r.a.createElement(s.c,{history:Y},r.a.createElement(s.b,{path:"/home",component:bt}),r.a.createElement(s.d,null,r.a.createElement(s.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(s.b,{path:"/login",component:Je}),r.a.createElement(ot,{exact:!0,path:"/home",component:Le}),r.a.createElement(ot,{exact:!0,path:"/home/builds",component:ze}),r.a.createElement(ot,{exact:!0,path:"/home/account",component:rt}),r.a.createElement(ot,{exact:!0,path:"/home/net",component:ht}),r.a.createElement(ot,{exact:!0,path:"/home/HUGO",component:Jt}),r.a.createElement(ot,{component:st})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));JSON.parse(sessionStorage.getItem("user"))&&z.dispatch({type:h}),o.a.render(r.a.createElement(ee.a,{store:z},r.a.createElement(qt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.e2a14a88.chunk.js.map