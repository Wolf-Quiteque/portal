(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{5117:function(e,a,s){"use strict";function n(){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*",s=0;s<8;s++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}s.d(a,{Z:function(){return n}})},5066:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return h}});var n=s(29),t=s(7794),r=s.n(t),i=s(9008),l=s(7294),c=s(782),o=s(1163),d=s(6304),u=(s(4213),s(5117)),m=s(5893);function h(){var e,a=(0,l.useState)(),s=a[0],t=a[1],h=(0,l.useState)(),p=h[0],x=h[1],f=(0,l.useState)(1),j=f[0],N=f[1],b=(0,l.useState)(),g=b[0],v=b[1],y=(0,l.useState)(),C=y[0],k=y[1],w=(0,l.useState)(!1),S=w[0],O=w[1],_=(0,l.useState)(),A=_[0],T=_[1],E=(0,l.useState)(),P=(E[0],E[1],(0,l.useState)()),D=P[0],L=P[1],Z=(0,l.useState)(),M=Z[0],J=Z[1],I=(0,l.useState)(),q=I[0],F=I[1],G=(0,l.useState)(),X=G[0],z=G[1],Q=(0,l.useState)({}),R=Q[0],B=(Q[1],[]),H=(0,o.useRouter)(),K=function(){var e=(0,n.Z)(r().mark((function e(){var a,s,n,i,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=R).tipo="administrador",e.next=4,fetch("/api/noticias/allnoticias",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j,info:a})});case 4:return s=e.sent,e.next=7,s.json();case 7:for(n=e.sent,t(n.usuarios),k(n.pages),i=0;i<n.pages;i++)l=Number(i)+1,B.push({page:l});v(B);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,n.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.QN)("authsesh");case 2:(a=e.sent)&&"administrador"==a.tipo?x(a):H.replace("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){t(null),K()}),[j,R,q]),(0,l.useEffect)((function(){p||U()}),[]);var V=function(){var a=(0,n.Z)(r().mark((function a(){var s,n,t;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=c.Am.loading("aguarde...",{closeOnClick:!0}),a.next=4,fetch("/api/usuarios/eliminate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p._id})});case 4:return s=a.sent,a.next=7,s.json();case 7:n=a.sent,K(),c.Am.update(e,{render:n.message,type:"success",isLoading:!1,closeOnClick:!0,autoClose:1300}),a.next=18;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,res.json();case 16:t=a.sent,c.Am.update(e,{render:t.message,type:"error",isLoading:!1,closeOnClick:!0,autoClose:1300});case 18:O(!1),$("#eliminar").modal("hide");case 20:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(){return a.apply(this,arguments)}}(),W=function(){var a=(0,n.Z)(r().mark((function a(){var s,n,t,i,l,o;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=c.Am.loading("aguarde...",{closeOnClick:!0}),O(!0),s=new FormData,n=Date.now()+X.name,s.append("file",X),s.append("name",n),s.append("upload_preset","rvtitoz5"),a.next=9,fetch("https://api.cloudinary.com/v1_1/dup24qnij/image/upload",{method:"Post",body:s}).then((function(e){return e.json()}));case 9:return t=a.sent,a.prev=10,a.next=13,fetch("/api/noticias/novo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({titulo:A,data:D,descricao:M,imgurl:t.secure_url})});case 13:return i=a.sent,a.next=16,i.json();case 16:l=a.sent,K(),O(!1),c.Am.update(e,{render:l.message,type:"success",isLoading:!1,closeOnClick:!0,autoClose:1300}),a.next=27;break;case 22:a.prev=22,a.t0=a.catch(10),c.Am.update(e,{render:a.t0,type:"error",isLoading:!1,closeOnClick:!0,autoClose:1300}),O(!1),$("#novo").modal("hide");case 27:return a.next=29,res.json();case 29:o=a.sent,c.Am.update(e,{render:o.message,type:"success",isLoading:!1,closeOnClick:!0,autoClose:1300}),F((0,u.Z)()),O(!1);case 33:case"end":return a.stop()}}),a,null,[[10,22]])})));return function(){return a.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)(i.default,{children:[(0,m.jsx)("title",{children:"ANJE - Gest\xe3o do Noti\xe7ias"}),(0,m.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,m.jsxs)("main",{children:[(0,m.jsx)(c.Ix,{}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("h3",{className:"mt-3 mb-3",children:"Gest\xe3o de Noti\xe7ias"}),(0,m.jsxs)("button",{className:"btn btn-success btn-sm float-right","data-toggle":"modal","data-target":"#novo",children:["Novo ",(0,m.jsx)("i",{className:"fas fa-plus"})]})]}),(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsxs)("div",{className:"card mt-3",children:[(0,m.jsx)("div",{className:"card-title mb-3",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-4",children:(0,m.jsxs)("div",{className:"input-group mb-3",children:[(0,m.jsx)("div",{className:"input-group-prepend",children:(0,m.jsx)("span",{className:"input-group-text",children:(0,m.jsx)("i",{className:"fas fa-search"})})}),(0,m.jsx)("input",{type:"text",className:"form-control",placeholder:"Pesquisar"})]})})})}),(0,m.jsx)("div",{className:"card-body table-responsive p-0",children:(0,m.jsxs)("table",{className:"table table-hover text-nowrap",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Titulo"}),(0,m.jsx)("th",{children:"Data"})]})}),(0,m.jsx)("tbody",{children:s?s.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e.titulo}),(0,m.jsx)("td",{children:e.data}),(0,m.jsxs)("td",{children:[" ",(0,m.jsx)("button",{type:"button",className:"close","aria-label":"Close","data-toggle":"modal","data-target":"#eliminar",onClick:function(){x(e)},children:(0,m.jsxs)("span",{"aria-hidden":"true",children:[" ",(0,m.jsx)("i",{className:"fas fa-trash text-danger"})," "]})})]})]})})):(0,m.jsx)("div",{className:"overlay mb-5 mt-5 text-center",children:(0,m.jsx)("i",{className:"fas fa-2x fa-sync-alt fa-spin"})})})]})}),(0,m.jsx)("div",{className:"card-footer clearfix",children:(0,m.jsxs)("ul",{className:"pagination pagination-sm m-0 float-right",children:[(0,m.jsx)("li",{className:"page-item  ".concat(1==j?"disabled":""),children:(0,m.jsx)("a",{href:"#",className:"page-link",onClick:function(){!function(){if(1==j)return!1;N(Number(j)-1)}()},children:"Anterior"})}),g&&g.map((function(e){return(0,m.jsx)("li",{className:"page-item  ".concat(j==e.page?"active":""),children:(0,m.jsx)("a",{className:"page-link",onClick:function(){N(e.page)},href:"#",children:e.page})})})),(0,m.jsx)("li",{className:"page-item  ".concat(j==C?"disabled":""),children:(0,m.jsx)("a",{href:"#",className:"page-link",onClick:function(){!function(){if(j==g)return!1;N(Number(j)+1)}()},children:"Proximo"})})]})})]})})]}),(0,m.jsx)("div",{className:"modal fade",id:"eliminar",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:(0,m.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",children:(0,m.jsx)("i",{className:"fas fa-trash text-danger fa-2x"})}),(0,m.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsx)("h3",{children:(0,m.jsxs)("p",{children:[" Eliminar ",p&&p.nome," ?"]})})}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cancela"}),S?(0,m.jsx)("button",{type:"button",className:"btn btn-danger",children:(0,m.jsx)("div",{className:"spinner-border",role:"status",children:(0,m.jsx)("span",{className:"sr-only",children:"Aguarde..."})})}):(0,m.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){V()},children:"Elimina"})]})]})})}),(0,m.jsx)("div",{className:"modal fade",id:"novo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,m.jsx)("div",{className:"modal-dialog modal-dialog-centered ",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Criar Nova Noti\xe7ias"}),(0,m.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)("form",{children:[(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{for:"nome",children:"T\xedtulo"}),(0,m.jsx)("input",{type:"text",className:"form-control",id:"nome",onChange:function(e){T(e.target.value)},placeholder:"T\xedtulo da Noti\xe7ias"})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{for:"eamil",children:"Data"}),(0,m.jsx)("input",{type:"date",className:"form-control",placeholder:"Data",onChange:function(e){L(e.target.value)}})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{for:"cargo",children:"Descri\xe7\xe3o"}),(0,m.jsx)("textarea",{placeholder:"Descri\xe7\xe3o do evento...",onChange:function(e){J(e.target.value)},class:"form-control",rows:5})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{for:"cargo",children:"Imagem"}),(0,m.jsx)("input",{type:"file",id:"exampleInputFile",accept:".jpg,.png,.jpeg",onChange:function(e){return z(e.target.files[0])}})]})]})}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancelar"}),S?(0,m.jsx)("button",{type:"button",className:"btn btn-primary",children:(0,m.jsx)("div",{className:"spinner-border",role:"status",children:(0,m.jsx)("span",{className:"sr-only",children:"Aguarde..."})})}):A&&M&&X?(0,m.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){W()},children:"Cadastrar"}):(0,m.jsx)("button",{type:"button",className:"btn btn-primary",disabled:!0,children:"Cadastrar"})]})]})})})]})]})}},3099:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/noticias",function(){return s(5066)}])}},function(e){e.O(0,[324,774,888,179],(function(){return a=3099,e(e.s=a);var a}));var a=e.O();_N_E=a}]);