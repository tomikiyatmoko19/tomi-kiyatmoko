(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,s,t){},43:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(16),n=t.n(c),i=(t(23),t(2)),r=t(3),l=t(5),j=t(4),o=t(17),d=t.n(o),h=t(0),m=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,a=this.props.data.address.city,c=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(h.jsxs)("h3",{children:["I'm from ",a," based ",Object(h.jsx)("span",{children:s}),". ",t,"."]}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{className:"social",children:c})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),b=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"Perjalanan masih jauh dalam dunia pembelajaran"})}),Object(h.jsx)("ul",{className:"copyright",children:Object(h.jsx)("li",{children:"Hak cipta"})})]}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(h.jsxs)("section",{id:"about",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s,alt:""})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns",children:[Object(h.jsx)("h2",{children:"About Meh"}),Object(h.jsx)("p",{children:t})]}),Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Details Contact"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[a," ",Object(h.jsx)("br",{}),c," ",n," , ",i]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:l})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:j,className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})})]})}}]),t}(a.Component),u=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:e.level},className:s}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),t}(a.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s="images/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:e.url,title:e.title,children:[Object(h.jsx)("img",{alt:e.title,src:s}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsx)("p",{children:e.category})]})}),Object(h.jsx)("div",{className:"link-icon",children:Object(h.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(a.Component),x=t(18),f=t.n(x),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){var s=this;e.preventDefault();var t=document.getElementById("name").value,a=document.getElementById("email").value,c=document.getElementById("message").value;f()({method:"POST",url:"http://localhost:3002/send",data:{name:t,email:a,message:c}}).then((function(e){"success"===e.data.msg?(alert("Message Sent."),s.resetForm()):"fail"===e.data.msg&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){document.getElementById("Contact").reset()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"",children:Object(h.jsx)("h1",{children:"Contact Me"})}),Object(h.jsxs)("form",{className:"",id:"Contact",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{for:"name",children:"Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"name"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{for:"message",children:"Message"}),Object(h.jsx)("textarea",{className:"form-control",rows:"5",cols:"200",id:"message"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}}]),t}(a.Component),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(r.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{data:this.state.resumeData.main}),Object(h.jsx)(O,{data:this.state.resumeData.main}),Object(h.jsx)(u,{data:this.state.resumeData.resume}),Object(h.jsx)(p,{data:this.state.resumeData.portfolio}),Object(h.jsx)(v,{data:this.state.resumeData.main}),Object(h.jsx)(b,{data:this.state.resumeData.main})]})}}]),t}(a.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(h.jsx)(N,{}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.1ae6f876.chunk.js.map