"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[535],{6535:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r,a,s,c=t(2791),i=t(9434),o=t(4270),l=t(208),u=t(4190),d=t(5777),m=t(184),h=function(e){var n=e.contact,t=n.name,r=n.number,a=n.id,s=(0,i.I0)();return(0,m.jsxs)("div",{children:[(0,m.jsxs)(u.xv,{as:"samp",children:[t," ",r]}),(0,m.jsx)(d.zx,{ml:"2",colorScheme:"teal",size:"xs",type:"button",onClick:function(){return s((0,l.GK)(a))},children:"Delete"})]})},x=t(6916),f=function(e){return e.contacts},p=function(e){return e.contacts.isLoading},j=(0,x.P1)([f,function(e){return e.filter}],(function(e,n){return e.contacts.filter((function(e){var t,r;return null===e||void 0===e||null===(t=e.name)||void 0===t||null===(r=t.toLowerCase())||void 0===r?void 0:r.includes(n)}))})),v=function(){var e=(0,i.I0)(),n=(0,i.v9)(j);return(0,c.useEffect)((function(){e((0,l.yF)())}),[e]),(0,m.jsx)(u.QI,{p:"4",children:n.map((function(e){return(0,m.jsxs)(u.HC,{children:[" ",(0,m.jsx)(h,{contact:e})]},e.id)}))})},b=t(168),y=t(7691),C=(y.ZP.label(r||(r=(0,b.Z)(["\n  display: block;\n"]))),y.ZP.input(a||(a=(0,b.Z)(["\n  margin: 10px;\n"]))),y.ZP.form(s||(s=(0,b.Z)(["\n  padding: 30px;\n  border: 1px solid black;\n"])))),I=t(5562),g=t.n(I),w=t(5863),k=t(824),Z=function(){var e=(0,i.I0)(),n=(0,i.v9)(f);return(0,m.jsxs)(C,{onSubmit:function(t){t.preventDefault();var r=t.target;n.contacts.filter((function(e){return e.name.toLowerCase()===r.elements.name.value.toLowerCase()})).length>0?g().Notify.failure("".concat(r.elements.name.value," is already in phonebook")):e((0,l.uK)({name:r.elements.name.value,number:r.elements.number.value}))&&r.reset()},children:[(0,m.jsxs)(w.lX,{children:["Name",(0,m.jsx)(k.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)(w.lX,{children:["Phone",(0,m.jsx)(k.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)(d.zx,{colorScheme:"teal",type:"submit",children:"Add contact"})]})},P=t(9194),z=t(6895),A=function(){var e=(0,i.I0)();return(0,m.jsxs)(w.lX,{children:["Find",(0,m.jsx)(k.II,{type:"text",onChange:function(n){var t=n.target.value.toLowerCase();e((0,z.T)(t))}})]})};function F(){var e=(0,i.I0)(),n=(0,i.v9)(p);return(0,c.useEffect)((function(){e((0,l.yF)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsxs)(u.rj,{templateColumns:"repeat(2, 2fr)",gap:6,children:[(0,m.jsxs)(u.P4,{w:"100%",children:[(0,m.jsx)(Z,{})," ",(0,m.jsx)("div",{children:n&&(0,m.jsx)(P.$,{mt:"4",color:"teal"})})]}),(0,m.jsxs)(u.P4,{w:"100%",children:[(0,m.jsx)(A,{}),(0,m.jsx)(v,{})]})]})]})}}}]);
//# sourceMappingURL=535.d741392a.chunk.js.map