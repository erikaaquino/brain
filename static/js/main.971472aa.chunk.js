(this.webpackJsonpfacereconitionbrain=this.webpackJsonpfacereconitionbrain||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(13),s=n.n(a),c=n(21),i=n.n(c),r=(n(34),n(3)),o=n(4),l=n(18),b=n(11),d=(n(35),n(20),n(6)),u=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(d.jsx)("nav",{className:"flex justify-end",children:Object(d.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(d.jsxs)("nav",{className:"flex justify-end",children:[Object(d.jsx)("p",{onClick:function(){return t("SignIn")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(d.jsx)("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})};n(37);var j=function(e){var t=e.imageUrl,n=e.box;return Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"absolute mt2",children:[Object(d.jsx)("img",{alt:"",id:"inputimage",src:t,width:"500px",height:"auto"}),Object(d.jsx)("div",{className:"bounding-box",style:{left:n.leftCol,top:n.topRow,right:n.rightCol,bottom:n.bottomRow}})]})})},h=n(22),m=n.p+"static/media/brain.b6394610.png",p=(n(38),function(){return Object(d.jsx)("div",{className:"ma4 mt0",children:Object(d.jsx)(h.a,{className:"br2 shadow-2 tilt",style:{height:"150px",width:"150px",backgroundColor:"darkgreen"},children:Object(d.jsx)("div",{className:"pa3",children:Object(d.jsx)("img",{style:{paddingTop:"5px"},src:m,alt:"Logo"})})})})});n(39);var f=function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"f3",children:"This magic Brain will detect faces in yours pictures"}),Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(d.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(d.jsx)("button",{className:"w-30 grow f4 link ph3 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})};var g=function(e){var t=e.name,n=e.entries;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"white f3 ",children:"".concat(t,", your current rank is..")}),Object(d.jsx)("div",{className:"white f1 ",children:"# ".concat(n)})]})},O=n(25),x=n(24);var v=function(e){var t=e.onRouteChange,n=e.loadUser,s=Object(a.useState)(""),c=Object(b.a)(s,2),i=c[0],r=c[1],o=Object(a.useState)(""),l=Object(b.a)(o,2),u=l[0],j=l[1];return Object(d.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("form",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){r(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){j(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:function(e){e.preventDefault(),fetch("https://nameless-island-50939.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:u})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.id&&(t("home"),n(e))}))},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(d.jsx)("div",{className:"lh-copy mt3",children:Object(d.jsx)("p",{onClick:function(){return t("Register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})};var w=function(e){var t=e.onRouteChange,n=e.loadUser,s=Object(a.useState)(""),c=Object(b.a)(s,2),i=c[0],r=c[1],o=Object(a.useState)(""),l=Object(b.a)(o,2),u=l[0],j=l[1],h=Object(a.useState)(""),m=Object(b.a)(h,2),p=m[0],f=m[1];return Object(d.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("form",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:function(e){f(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){r(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){j(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:function(e){e.preventDefault(),fetch("https://nameless-island-50939.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:u,name:p})}).then((function(e){return e.json()})).then((function(e){e.id&&(n(e),t("home"))}))},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})},N={fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{directions:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:6,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0};var k=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(b.a)(c,2),h=i[0],m=i[1],k=Object(a.useState)({}),y=Object(b.a)(k,2),C=y[0],S=y[1],R=Object(a.useState)("SignIn"),I=Object(b.a)(R,2),F=I[0],T=I[1],_=Object(a.useState)(!1),B=Object(b.a)(_,2),J=B[0],U=B[1],E=Object(a.useState)({id:"",name:"",email:"",entries:0,joined:""}),D=Object(b.a)(E,2),L=D[0],P=D[1];Object(a.useEffect)((function(){fetch("https://nameless-island-50939.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]);var z=function(e){P(e)},M=function(e){"signout"===e?(U(!1),m("")):"home"===e&&U(!0),T(e)},q=Object(a.useCallback)(function(){var e=Object(o.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O.a,{className:"particles",id:"tsparticles",init:q,options:N}),Object(d.jsx)(u,{isSignedIn:J,onRouteChange:M}),"home"===F?Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(g,{name:L.name,entries:L.entries}),Object(d.jsx)(f,{onInputChange:function(e){s(e.target.value)},onButtonSubmit:function(){m(n),fetch("https://nameless-island-50939.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:n})}).then((function(e){return e.json()})).then((function(e){e&&fetch("https://nameless-island-50939.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:L.id})}).then((function(e){return e.json()})).then((function(e){return P(Object(l.a)(Object(l.a)({},L),{},{entries:e}))})).catch(console.log),function(e){S(e)}(function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}}(e))})).catch((function(e){return console.log("me kero murir",e)}))}}),Object(d.jsx)(j,{box:C,imageUrl:h})]}):"SignIn"===F?Object(d.jsx)(v,{onRouteChange:M,loadUser:z}):Object(d.jsx)(w,{onRouteChange:M,loadUser:z})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})})),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.971472aa.chunk.js.map