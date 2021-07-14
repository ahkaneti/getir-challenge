/*! For license information please see main.bb9afcd4.chunk.js.LICENSE.txt */
(this["webpackJsonpgetir-challenge"]=this["webpackJsonpgetir-challenge"]||[]).push([[0],{24:function(e,t,n){e.exports=n(52)},33:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),l=n.n(c),o=n(2),r=n(4),s=(n(33),n(34),n(1)),p="#E5E5E5",d="#fff",m="#1EA4CE",u="#147594",f="#F2F0FD",h="#525252",x="#fff",g="#6f6f6f",b="#1EA4CE",y="#F2F0FD",E=s.a.div.withConfig({displayName:"styles__TopbarHolder",componentId:"sc-88rk0q-0"})(["display:flex;flex-direction:row;width:100vw;height:76.64px;background:",";align-items:center;justify-content:center;color:",";position:relative;"],m,x),_=s.a.div.withConfig({displayName:"styles__BagHolder",componentId:"sc-88rk0q-1"})(["position:absolute;background:",";left:84%;width:130px;height:76.64px;align-items:center;display:flex;justify-content:space-evenly;"],u),w=n(5),j=Object(w.b)({name:"cart",initialState:{items:[]},reducers:{add:function(e,t){console.log("adding ".concat(t.payload.name)),e.items.push(t.payload)},remove:function(e,t){e.items.splice(e.items.findIndex((function(e){return e===t.payload})))}}}),k=j.actions,v=k.add,O=(k.remove,function(e){return e.cart.items}),C=j.reducer,N=function(e){e.shoppingList;var t=Object(a.useState)(0),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(o.c)(O);return Object(a.useEffect)((function(){var e=0;s.map((function(t){return e+=t.price})),e=Math.ceil(100*e)/100,l(e)}),[s]),i.a.createElement(E,null,i.a.createElement("h1",null,"market"),i.a.createElement(_,null,i.a.createElement("i",{className:"ri-shopping-bag-line"}),i.a.createElement("p",null,"\u20ba",c)))},I=s.a.div.withConfig({displayName:"styles__SortWrapper",componentId:"sc-1cv3ty9-0"})(["height:214px;width:inherit;p{margin-bottom:12px;color:",";font-size:13px;}"],g),S=s.a.form.withConfig({displayName:"styles__SortList",componentId:"sc-1cv3ty9-1"})(["display:flex;flex-direction:column;background:",";justify-content:center;height:184px;box-shadow:0px 6px 24px rgba(93,62,188,0.04);border-radius:2px;"],d),z=s.a.div.withConfig({displayName:"styles__SortValue",componentId:"sc-1cv3ty9-2"})(["display:flex;flex-direction:row;justify-content:flex-start;margin-top:24px;margin-left:24px;:last-child{margin-bottom:26px;}label{color:",";margin-left:12px;}i{color:",";font-size:20px;cursor:pointer;}"],h,m),F="New to old",P="Old to new",W="Price low to high",B="Price high to low",T={value:W},A=Object(w.b)({name:"sort",initialState:T,reducers:{edit:function(e,t){console.log("Changing sort to ".concat(t.payload)),e.value=t.payload}}}),L=A.actions.edit,M=function(e){return e.sort.value},V=A.reducer,q=function(){var e=Object(o.b)(),t=Object(o.c)(M),n=function(t){e(L(t))};return i.a.createElement(I,null,i.a.createElement("p",null,"Sorting"),i.a.createElement(S,null,i.a.createElement(z,null,i.a.createElement("i",{className:t===W?"ri-checkbox-circle-line":"ri-checkbox-blank-circle-line",onClick:function(){return n(W)}}),i.a.createElement("label",null,W)),i.a.createElement(z,null,i.a.createElement("i",{className:t===B?"ri-checkbox-circle-line":"ri-checkbox-blank-circle-line",onClick:function(){return n(B)}}),i.a.createElement("label",null,B)),i.a.createElement(z,null,i.a.createElement("i",{className:t===F?"ri-checkbox-circle-line":"ri-checkbox-blank-circle-line",onClick:function(){return n(F)}}),i.a.createElement("label",null,F)),i.a.createElement(z,null,i.a.createElement("i",{className:t===P?"ri-checkbox-circle-line":"ri-checkbox-blank-circle-line",onClick:function(){return n(P)}}),i.a.createElement("label",null,P))))},D=n(9),H=n.n(D),J=Object(w.b)({name:"companyFilter",initialState:{items:[]},reducers:{add:function(e,t){e.items.push(t.payload)},remove:function(e,t){e.items.splice(e.items.findIndex((function(e){return e===t.payload})))}}}),G=J.actions,K=G.add,Q=G.remove,R=function(e){return e.companyFilters.items},U=J.reducer,X=s.a.div.withConfig({displayName:"styles__FilterWrapper",componentId:"sc-1j9905j-0"})(["height:274px;width:","px;p{margin-bottom:12px;color:",";font-size:13px;}margin-top:24px;"],296,g),Y=s.a.div.withConfig({displayName:"styles__FilterBox",componentId:"sc-1j9905j-1"})(["height:200px;overflow-x:hidden;background:",";box-shadow:0px 6px 24px rgba(93,62,188,0.04);border-radius:2px;display:flex;flex-direction:column;input{width:248px;height:48px !important;margin:24px;border:2px solid #e0e0e0;box-sizing:border-box;border-radius:2px;padding-left:16px;font-family:'inter';}padding-bottom:24px;"],d),Z=s.a.div.withConfig({displayName:"styles__CompanyList",componentId:"sc-1j9905j-2"})(["height:142px;overflow-y:scroll;"]),$=s.a.div.withConfig({displayName:"styles__Company",componentId:"sc-1j9905j-3"})(["display:flex;margin-bottom:18px;margin-left:24px;margin-top:1px;i{color:",";font-size:22px;height:22px;margin-right:8px;box-shadow:0px 1px 7px rgba(93,56,192,0.4);border-radius:2px;","}"],d,(function(e){return e.selected&&"\n    color: ".concat(m,";\n    box-shadow: 0px 0px 0px;\n    ")})),ee=function(e){var t=e.filterName,n=Object(a.useState)(""),c=Object(r.a)(n,2),l=c[0],s=c[1],p=Object(a.useState)([]),d=Object(r.a)(p,2),m=d[0],u=d[1],f=Object(o.b)(),h=Object(o.c)(R);Object(a.useEffect)((function(){H.a.get("http://localhost:3000/companies").then((function(e){u(e.data)}))}),[]);return i.a.createElement(X,null,i.a.createElement("p",null,t),i.a.createElement(Y,null,i.a.createElement("input",{value:l,placeholder:"Search ".concat(t),onChange:function(e){return s(e.target.value)}}),i.a.createElement(Z,null,"Brands"===t&&m.map((function(e){return i.a.createElement($,{key:e.slug,selected:-1!==h.indexOf(e.slug)},i.a.createElement("i",{className:-1!==h.indexOf(e.slug)?"ri-checkbox-fill":"ri-checkbox-blank-fill",onClick:function(){!function(e){-1!==h.indexOf(e)?f(Q(e)):f(K(e))}(e.slug)}}),i.a.createElement("label",null,e.name),i.a.createElement("br",null))})))))},te=s.a.div.withConfig({displayName:"styles__ProductsWrapper",componentId:"sc-1u2fz1t-0"})(["display:flex;flex-direction:column;h2{color:",";font-size:20px;}border-radius:2px;margin-left:16px;"],g),ne=s.a.div.withConfig({displayName:"styles__ItemTypeFilter",componentId:"sc-1u2fz1t-1"})(["margin-top:16px;width:129px;height:30px;"]),ae=s.a.button.withConfig({displayName:"styles__ItemTypeFilterButton",componentId:"sc-1u2fz1t-2"})(["background:",";padding:6px 16px;width:60px;height:30px;color:",";:first-child{margin-right:8px;}border:0;",""],f,b,(function(e){return e.selected&&"background: ".concat(m,";\n  \n  color: ").concat(y,";")})),ie=s.a.div.withConfig({displayName:"styles__ProductGrid",componentId:"sc-1u2fz1t-3"})(["margin-top:16px;display:flex;flex-wrap:wrap;background:",";width:588px;height:1008px;gap:22px 24px;padding-left:20px;padding-top:20px;"],d),ce=s.a.div.withConfig({displayName:"styles__ProductItemWrapper",componentId:"sc-1ujzbri-0"})(["button{background:",";border-radius:2px;font-size:12px;}width:124px;height:225px;display:flex;flex-direction:column;p{color:",";}justify-content:space-between;"],m,b),le=s.a.div.withConfig({displayName:"styles__ProductImageWrapper",componentId:"sc-1ujzbri-1"})(["height:124px;top:223px;width:124px;border:1.17666px solid #f3f0fe;display:flex;justify-content:center;align-items:center;border-radius:12px;"]),oe=s.a.div.withConfig({displayName:"styles__ProductImage",componentId:"sc-1ujzbri-2"})(["width:92px;height:92px;background:#c4c4c4;"]),re=s.a.p.withConfig({displayName:"styles__ProductName",componentId:"sc-1ujzbri-3"})(["font-size:14px;color:black !important;"]),se=function(e){var t=e.item,n=Object(o.b)();return i.a.createElement(ce,null,i.a.createElement(le,null,i.a.createElement(oe,null)),i.a.createElement("p",null,"\u20ba",t.price),i.a.createElement(re,null,t.name),i.a.createElement("button",{onClick:function(){n(v(t))}},"Add"))},pe=function(){var e=Object(a.useState)("mug"),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(1),s=Object(r.a)(l,2),p=s[0],d=s[1],m=Object(a.useState)(0),u=Object(r.a)(m,2),f=(u[0],u[1]),h=Object(a.useState)([]),x=Object(r.a)(h,2),g=x[0],b=x[1],y=Object(o.c)(R),E=Object(a.useState)("http://localhost:3000/items?_sort=price&_order=desc&_page=".concat(p,"&_limit=16")),_=Object(r.a)(E,2),w=_[0],j=_[1],k=Object(o.c)(M);return Object(a.useEffect)((function(){var e="";switch(k){case W:e="http://localhost:3000/items?_sort=price&_order=asc&_page=".concat(p,"&_limit=16");break;case B:e="http://localhost:3000/items?_sort=price&_order=desc&_page=".concat(p,"&_limit=16");break;case F:e="http://localhost:3000/items?_sort=added&_order=desc&_page=".concat(p,"&_limit=16");break;case P:e="http://localhost:3000/items?_sort=added&_order=asc&_page=".concat(p,"&_limit=16");break;default:console.log("Not supposed to come here, sort: ".concat(k))}e+="mug"===n?"&itemType=mug":"&itemType=shirt",y.map((function(t){return e+="&manufacturer=".concat(t)})),console.log(e),j(e)}),[k,p,n,y]),Object(a.useEffect)((function(){H.a.get(w).then((function(e){f(Math.ceil(e.headers["x-total-count"]/16)),e.data.length>0&&b(e.data)}))}),[w,p,y]),i.a.createElement(te,null,i.a.createElement("h2",null,"Products"),i.a.createElement(ne,null,i.a.createElement(ae,{selected:"mug"===n,onClick:function(){return c("mug")}},"mug"),i.a.createElement(ae,{selected:"shirt"===n,onClick:function(){return c("shirt")}},"shirt")),i.a.createElement(ie,null,g.map((function(e){return i.a.createElement(se,{item:e,key:e.name+e.added})}))),i.a.createElement("button",{onClick:function(){d((function(e){return e+1}))}},"+"))},de=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-17ni8m5-0"})(["background-color:",";height:fit-content;width:100vw;font-family:",";"],p,"Open Sans"),me=s.a.div.withConfig({displayName:"styles__MarketWrapper",componentId:"sc-17ni8m5-1"})(["display:flex;flex-direction:row;margin-top:38.36px;height:fit-content;width:fit-content;"]),ue=s.a.div.withConfig({displayName:"styles__SidePanel",componentId:"sc-17ni8m5-2"})(["display:flex;flex-direction:column;margin-left:104px;margin-right:8px;width:","px;"],296),fe=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1];return i.a.createElement(de,null,i.a.createElement(N,null),i.a.createElement(me,null,i.a.createElement(ue,null,i.a.createElement(q,{setSortVal:c}),i.a.createElement(ee,{info:[],filterName:"Brands"}),i.a.createElement(ee,{info:[],filterName:"Tags"})),i.a.createElement(pe,{sortVal:n})))},he=Object(w.b)({name:"tagFilter",initialState:{items:[]},reducers:{add:function(e,t){e.items.push(t.payload)},remove:function(e,t){e.items.splice(e.items.findIndex((function(e){return e===t.payload})))}}}),xe=he.actions,ge=(xe.add,xe.remove,he.reducer),be=Object(w.a)({reducer:{cart:C,companyFilters:U,tagFilters:ge,sort:V}});l.a.render(i.a.createElement(o.a,{store:be},i.a.createElement(fe,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bb9afcd4.chunk.js.map