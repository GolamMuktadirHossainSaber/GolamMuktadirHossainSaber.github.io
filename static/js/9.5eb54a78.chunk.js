(this["webpackJsonpbike-repair-client"]=this["webpackJsonpbike-repair-client"]||[]).push([[9],{156:function(e,t,s){"use strict";t.a=s.p+"static/media/info-emoji.91ce4204.svg"},215:function(e,t,s){},231:function(e,t,s){"use strict";s.r(t);var c=s(19),n=s(0),a=s(217),i=s(54),j=s(92),r=s(207),b=s.n(r),l=s(226),o=s(65),d=s(152),O=s(30),u=s(9),m=s(25),h=s(37),p=(s(215),s(3)),x=["pathname"],f=function(){var e=Object(n.useContext)(m.a).setLoggedInUser,t=Object(n.useState)(!1),s=Object(c.a)(t,2),a=s[0],r=s[1],f=Object(n.useState)(!1),g=Object(c.a)(f,2),N=g[0],v=g[1],w=Object(d.a)(),y=w.register,S=w.handleSubmit,I=Object(d.a)(),k=I.register,C=I.handleSubmit,_=Object(u.g)(),q=Object(u.h)(),P=q.pathname,U=(Object(j.a)(q,x).state||{from:{pathname:"/"}}).from;Object(n.useEffect)((function(){return"/login"===P&&r(!0)}),[P]);var B=function(){Object(h.e)();var e=O.b.loading("Please wait...");Object(h.c)().then((function(t){O.b.dismiss(e),H(t)})).catch((function(t){O.b.dismiss(e),O.b.error(t.message)}))},E=function(e){Object(h.e)();var t=O.b.loading("Please wait..."),s=e.name,c=e.email,n=e.password;N&&s&&c&&n&&Object(h.a)(s,c,n).then((function(e){e.name=s,O.b.dismiss(t),H(e)})).catch((function(e){O.b.dismiss(t),O.b.error(e.message)})),!N&&c&&n&&Object(h.g)(c,n).then((function(e){O.b.dismiss(t),H(e)})).catch((function(e){O.b.dismiss(t),O.b.error(e.message)}))},H=function(t){e(t),Object(h.f)(),r(!1),_.replace(U),O.b.success("Successfully Logged In!"),"admin@admin.com"===t.email&&b()({title:"Warning!",content:Object(p.jsxs)("p",{children:["You have entered the admin panel for testing.",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Please do not abuse this facility!"})]}),icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t||Object(h.d)().then((function(t){e(t),O.b.error("Logged Out!")}))}))};return Object(p.jsxs)(l.a,{show:a,onHide:function(){r(!1),_.replace({pathname:"/"})},size:"lg",centered:!0,children:[Object(p.jsx)(l.a.Header,{closeButton:!0}),Object(p.jsx)(l.a.Body,{children:Object(p.jsxs)("div",{className:N?"cont s--signup":"cont",children:[Object(p.jsxs)("div",{className:"form sign-in",children:[Object(p.jsx)("h2",{children:"Sign in"}),Object(p.jsxs)("form",{onSubmit:S(E),children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Email"}),Object(p.jsx)("input",Object(i.a)(Object(i.a)({defaultValue:"admin@admin.com"},y("email",{required:!0})),{},{type:"email"}))]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Password"}),Object(p.jsx)("input",Object(i.a)(Object(i.a)({defaultValue:"123456"},y("password",{required:!0})),{},{type:"password"}))]}),Object(p.jsx)("p",{className:"forgot-pass",children:"Forgot password?"}),Object(p.jsx)(o.a,{type:"submit",variant:"info",className:"submit",children:"Sign In"}),Object(p.jsxs)("button",{type:"button",onClick:B,className:"fb-btn",children:["Connect with ",Object(p.jsx)("span",{children:"Google"})]})]})]}),Object(p.jsxs)("div",{className:"sub-cont",children:[Object(p.jsxs)("div",{className:"img",children:[Object(p.jsxs)("div",{className:"img__text m--up",children:[Object(p.jsx)("h2",{children:"New here?"}),Object(p.jsx)("p",{children:"Sign up and discover great amount of new opportunities!"})]}),Object(p.jsxs)("div",{className:"img__text m--in",children:[Object(p.jsx)("h2",{children:"One of us?"}),Object(p.jsx)("p",{children:"If you already has an account, just sign in. We've missed you!"})]}),Object(p.jsxs)("div",{onClick:function(){return v(!N)},className:"img__btn",children:[Object(p.jsx)("span",{className:"m--up",children:"Sign Up"}),Object(p.jsx)("span",{className:"m--in",children:"Sign In"})]})]}),Object(p.jsxs)("div",{className:"form sign-up",children:[Object(p.jsx)("h2",{children:"Create Account"}),Object(p.jsxs)("form",{onSubmit:C(E),children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Name"}),Object(p.jsx)("input",Object(i.a)(Object(i.a)({},k("name",{required:!0})),{},{type:"text"}))]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Email"}),Object(p.jsx)("input",Object(i.a)(Object(i.a)({},k("email",{required:!0})),{},{type:"email"}))]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Password"}),Object(p.jsx)("input",Object(i.a)(Object(i.a)({},k("password",{required:!0})),{},{type:"password"}))]}),Object(p.jsx)(o.a,{type:"submit",variant:"info",className:"mt-5",children:"Sign Up"}),Object(p.jsxs)("button",{type:"button",onClick:B,className:"fb-btn mt-3",children:["Join with ",Object(p.jsx)("span",{children:"Google"})]})]})]})]})]})})]})},g=s(156);t.default=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),s=t[0],i=t[1];return Object(p.jsxs)("section",{children:[Object(p.jsxs)(a.a,{className:"toast-left",onClose:function(){return i(!1)},show:s,delay:1e4,autohide:!0,children:[Object(p.jsxs)(a.a.Header,{children:[Object(p.jsx)("img",{src:g.a,className:"rounded mr-2",alt:"Info"}),Object(p.jsx)("strong",{className:"mr-auto",children:"Important Info"})]}),Object(p.jsxs)(a.a.Body,{className:"text-center",children:["Use this account to ",Object(p.jsx)("br",{})," Sign in as an admin to test the admin panel ",Object(p.jsx)("br",{})," Or login with a different account as a user."]})]}),Object(p.jsx)(f,{})]})}}}]);
//# sourceMappingURL=9.5eb54a78.chunk.js.map