(this.webpackJsonp185=this.webpackJsonp185||[]).push([[0],{195:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(84),a(4)),o=a(5),s=a(7),m=a(6),u=(a(85),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h2",null,"This is Chi. I'm current in UCSB cs major ",r.a.createElement("br",null),r.a.createElement("br",null),"Welcome to my main page ",r.a.createElement("br",null),r.a.createElement("br",null),"Here demonstrate my personal island on Animal Crossing"))}}]),a}(n.Component)),h=(a(86),a(87),a(107),a(32)),p=a(68),b=a.n(p),E=a(69),d=a.n(E),v=a(70),g=a.n(v),f=a(71),y=a.n(f),j=a(72),O=a.n(j),A=a(73),C=a.n(A),T=a(74),w=a.n(T),Q=a(75),k=a.n(Q);var M=function(){return r.a.createElement("div",{className:"MyComponent"},r.a.createElement(h.a,null,r.a.createElement("center",null," ",r.a.createElement("img",{src:b.a,alt:"185"}),r.a.createElement("img",{src:d.a,alt:"185"})),r.a.createElement("center",null,r.a.createElement("img",{src:g.a,alt:"185"}),r.a.createElement("img",{src:y.a,alt:"185"})),r.a.createElement("center",null,r.a.createElement("img",{src:O.a,alt:"185"}),r.a.createElement("img",{src:C.a,alt:"185"})),r.a.createElement("center",null,r.a.createElement("img",{src:w.a,alt:"185"}),r.a.createElement("img",{src:k.a,alt:"185"}))))},x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"gallary"},r.a.createElement(h.b,null,r.a.createElement(M,null)))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LMhOTPe3Aqk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("center",null,r.a.createElement("h3",null," ","Official Intro"," ")))}}]),a}(n.Component),N=a(76),U=a.n(N),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"project"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/chi.xu.562114"},r.a.createElement("img",{src:U.a,alt:"button",width:"50",height:"50"})),"my facebook",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),a}(n.Component),L=a(77),S={apiKey:"AIzaSyAkNyiAQQfarBQIfz4h5PQ9XTbX6pNop-0",authDomain:"chi-xu-cs185.firebaseapp.com",databaseURL:"https://chi-xu-cs185.firebaseio.com"},D=(a(195),a(196)),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).helper=function(e){if(e.preventDefault(),""===n.state.name)alert("Missing name");else if(""===n.state.say)alert("Missing mmessage");else{var t={name:n.state.name,description:n.state.description,say:n.state.say,visibility:n.state.visibility,email:n.state.email,date:D.database.ServerValue.TIMESTAMP};D.database().ref("data").push().set(t),n.setState({shouldUpdate:!0}),alert("received your message")}},n.do_change=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(L.a)({},t,a))},n.state={data:[],name:"",description:"",say:"",visibility:"private",email:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.apps.length||D.initializeApp(S),D.database().ref("data").on("value",(function(t){var a=t.val(),n=[],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];for(var l in a){var c=new Date(a[l].date),i=r[c.getMonth()]+" "+c.getDate()+", "+c.getFullYear()+",   "+c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();n.push({date:i,name:a[l].name,description:a[l].description,say:a[l].say,visibility:a[l].visibility,email:a[l].email})}e.setState({data:n})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"left_right"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.helper},r.a.createElement("h3",null,"Comment Submission Form"),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("dot",null,"*")," What's your name?",r.a.createElement("br",null),r.a.createElement("input",{name:"name",type:"text",minLength:"6",maxLength:"19",onChange:this.do_change})),r.a.createElement("h4",null,"Introduce yourself (optional)",r.a.createElement("br",null),r.a.createElement("input",{name:"description",type:"text",maxLength:"99",onChange:this.do_change})),r.a.createElement("h4",null,r.a.createElement("dot",null,"*")," Leaving Message",r.a.createElement("br",null),r.a.createElement("textarea",{name:"say",minLength:"16",maxLength:"499",onChange:this.do_change})),r.a.createElement("h4",null,r.a.createElement("dot",null,"*"),"What's your email?",r.a.createElement("input",{name:"email",type:"text",onChange:this.do_change})),r.a.createElement("h4",null,r.a.createElement("dot",null,"*")," Want your message to be __?",r.a.createElement("br",null),r.a.createElement("select",{id:"visibility",name:"visibility",onChange:this.do_change},r.a.createElement("option",{value:"private"},"private"),r.a.createElement("option",{value:"public"},"public"))),r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Submit"})))))),r.a.createElement("div",{className:"out_put"},r.a.createElement("h3",null,"Comment"),this.state.data.map((function(e){if("private"!==e.visibility)return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("span",{className:"date"},e.date)," ",r.a.createElement("br",null),r.a.createElement("span",{className:"date"},"from: ",e.name)," ",r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("h4",null,e.description)),r.a.createElement("span",null,r.a.createElement("h4",null,e.say)),r.a.createElement("h4",{style:{color:"darkgreen"}},"\u2504\u2505\u2504\u2505\u2504\u2505\u2504\u2505\u2504\u2504\u2505\u2504\u2505\u2504\u2505\u2504\u2505\u2504\u2504\u2505\u2504\u2505\u2504\u2505\u2504\u2505\u2504"),r.a.createElement("br",null))})))))}}]),a}(n.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).displayContent=function(){var t=e.props.activeTab;return 1===t?r.a.createElement(u,null):2==t?r.a.createElement(x,null):3==t?r.a.createElement(R,null):4==t?r.a.createElement(F,null):r.a.createElement(P,null)},e}return Object(o.a)(a,[{key:"render",value:function(){return this.displayContent()}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addStyling=function(){return e.props.tab.id==e.props.activeTab?{backgroundColor:"#4CAF50"}:{backgroundColor:"darkgreen"}},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},r.a.createElement("h2",null,this.props.tab.title))}}]),a}(n.Component),Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return r.a.createElement(I,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),a}(n.Component),H=a(78),X=a.n(H),z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:X.a,height:"170",width:"170",align:"left"}),r.a.createElement("h4",null,"Chi Xu's main page"," ")),r.a.createElement("div",{className:"nav-bar"},r.a.createElement(Y,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Videos"},{id:4,title:"AboutMe"},{id:5,title:"Form"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),r.a.createElement("div",{className:"main-body"},r.a.createElement(B,{activeTab:this.state.activeTab})))}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={is_visible:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(t){e.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state.is_visible;return r.a.createElement("div",{className:"scroll-to-top"},t&&r.a.createElement("div",{onClick:function(){return e.scrollToTop()}},r.a.createElement("svg",{xmlns:"top",height:"38.735",width:"33.749"},r.a.createElement("g",{transform:"translate(-18.121 -3.364)"},r.a.createElement("rect",{ry:"5",y:"4",x:"20",height:"40",width:"40",fill:"#4caf50"}),r.a.createElement("g",{transform:"translate(-.48 2.134)"},r.a.createElement("rect",{ry:"5",y:"4",x:"20",height:"40",width:"40",fill:"url(#b)"}),r.a.createElement("g",{fill:"#ececec"},r.a.createElement("path",{d:"M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z"}),r.a.createElement("path",{d:"M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z"})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(){return r.a.createElement("div",{className:"bar"},r.a.createElement(z,null),r.a.createElement(J,null))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/p01.9342c259.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/p02.5ec067b3.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/p03.60fce56c.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/p04.95230ecf.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/p05.7c413de1.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/p06.182a3c65.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/p07.8b5efe40.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/p08.6593f240.jpg"},76:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg=="},78:function(e,t,a){e.exports=a.p+"static/media/pika1.4bd836d1.jpg"},79:function(e,t,a){e.exports=a(208)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.3918dac9.chunk.js.map