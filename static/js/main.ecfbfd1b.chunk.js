(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/resume.8cc5ae4b.pdf"},,,function(e,t,a){e.exports=a.p+"static/media/profile_pic.2d2efa22.jpg"},function(e,t,a){e.exports=a.p+"static/media/loginGif.9a140565.gif"},function(e,t,a){e.exports=a.p+"static/media/personal_website.8f9757eb.png"},function(e,t,a){e.exports=a.p+"static/media/twitter_spread.07a145c4.png"},function(e,t,a){e.exports=a.p+"static/media/Image_not_logged.9b6a26bd.png"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),i=(a(31),a(32),a(33),a(13)),o=a(6),s=a(17);a(39);function m(e){var t=Object(n.useState)("quentin.vilchez@gmail.com"),a=Object(i.a)(t,2),l=a[0],c=(a[1],Object(n.useState)("snackbar")),m=Object(i.a)(c,2),p=m[0],u=m[1];return Object(n.useEffect)((function(){console.log(p),p.includes("show")&&setTimeout((function(){u("snackbar")}),3e3)}),[p]),r.a.createElement("div",{id:"email-input"},r.a.createElement("div",{id:"email"},r.a.createElement("div",{id:"address"},l),navigator.clipboard?r.a.createElement("div",{id:"copy-icon"},r.a.createElement(o.a,{icon:s.a,onClick:function(e){navigator.clipboard.writeText(l).then((function(){console.log("email has been copied to clipboard"),u("snackbar show")}),(function(){console.log("email not copied")}))}}),r.a.createElement("span",{id:"copy-text"},"Copy to Clipboard"),r.a.createElement("div",{className:p},"Copied!")):r.a.createElement("div",null)))}var p=a(18),u=a.n(p),h=a(5);function d(e){return r.a.createElement("div",{id:"nav-container"},r.a.createElement("nav",null,r.a.createElement(h.b,{to:"/",id:"home"},"Home"),r.a.createElement(h.b,{id:"projects",to:"/projects"},"Projects"),r.a.createElement(h.b,{id:"interests",to:"/interests"},"Interests")),r.a.createElement(m,null),r.a.createElement("div",{className:"resume"},r.a.createElement("a",{href:u.a,className:"resume-button",target:"_blank",rel:"noopener noreferrer"},"Resume")))}a(42);var E=function(e){return r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"Hello, I'm ",r.a.createElement("span",{id:"first-name"},"Quentin")," "),r.a.createElement("p",{className:"description-text"},"I am a coder and a problem solver. I am mostly interested in full stack web development technologies."),r.a.createElement("p",{className:"description-text"},"I graduated from the department of Mathematics at the University of Toronto in 2019."),r.a.createElement("p",{className:"description-text"},"Check out some of my projects in the"," ",r.a.createElement(h.b,{className:"highlight",style:{backgroundColor:"#579d1f"},to:"/projects"},"Projects")," ","section ",r.a.createElement("span",null,"\ud83d\ude0e"),"."))},f=(a(43),a(44),a(21)),v=a.n(f);var g=function(e){return r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:v.a,alt:"Profile",id:"profile-image"}))};function b(e){return r.a.createElement("div",{className:"home-grid"},r.a.createElement(g,null),r.a.createElement(E,null))}var y=a(4),w=a(12);a(45);var N=function(e){return r.a.createElement("div",{id:"profile-links"},r.a.createElement("a",{href:"https://github.com/quentinv72",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:w.a})),r.a.createElement("a",{href:"https://www.linkedin.com/in/quentin-vilchez-0b2a2a163/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:w.b})))};a(46),a(47);var k=function(e){return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"project-box"},r.a.createElement("img",{src:e.src,alt:e.alt,className:"project-pic"}),r.a.createElement("a",{className:"slider",href:e.href,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"description"}," ",e.children))))},j=a(22),S=a.n(j),I=a(23),x=a.n(I),P=a(24),C=a.n(P),T=a(25),_=a.n(T);a(48);function L(e){if(e.stack){var t=e.stack.map((function(e){return r.a.createElement("li",{key:e.toLowerCase(),className:"technology"},e)}));return r.a.createElement("ul",{className:"stacks"},t)}}var M=function(e){return r.a.createElement("div",{className:"all-projects"},r.a.createElement(k,{src:S.a,alt:"color therapy gif",href:"https://github.com/kabirvirji/colortherapy"},r.a.createElement("h2",{className:"project-title"},"Color Therapy"),r.a.createElement("p",{className:"project-description"},"Color Therapy is a web app that lets you generate Spotify playlists based on your 'color mood'. Go ahead and test it out"," ",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(L,{stack:["React","JavaScript","HTML","CSS","Git"]})),r.a.createElement(k,{src:_.a,alt:"url shortener",href:"https://github.com/quentinv72/URL-shortener"},r.a.createElement("h2",{className:"project-title"},"URL Shortener"),r.a.createElement("p",{className:"project-description"},"URL shortener web app with login and URL management",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(L,{stack:["JavaScript","React","Node","SQLite","Express","Auth0"]})),r.a.createElement(k,{src:C.a,alt:"graph",href:"https://drive.google.com/file/d/1CH-kEWi3VG3v6ZkBc8sCXcOW4_V1T1iH/view"},r.a.createElement("h2",{className:"project-title"},"Twitter Information Spread"),r.a.createElement("p",{className:"project-description"},"Mathematical model to describe spread of information on Twitter.",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(L,{stack:["Python","MatLab","ODEs"]})),r.a.createElement(k,{alt:"Neural Style Transfer",href:"https://github.com/quentinv72/NeuralStyleTransfer"},r.a.createElement("h2",{className:"project-title"},"Neural Style Transfer Web App"),r.a.createElement("p",{className:"project-description"},"Click to find out more.",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(L,{stack:["Python","Pytorch","JavaScript","React","FastAPI","Git"]})),r.a.createElement(k,{src:x.a,alt:"personal web",href:"https://github.com/quentinv72/quentinv72.github.io"},r.a.createElement("h2",{className:"project-title"},"Personal Website"),r.a.createElement("p",{className:"project-description"},"My personal website",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(L,{stack:["React","JavaScript","HTML","CSS","Git"]})))};a(49);function R(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"text"},r.a.createElement("h2",null,"I spend most of my time"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"coding"),", reading about"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"Mathematics"),", listening to"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"music")," ","and watching"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"series"),". I also really enjoy playing"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"squash"),", I started playing when I was at university and have continued ever since.")),r.a.createElement("div",{className:"text list"},r.a.createElement("h3",null,"Cantor's Theorem:"),r.a.createElement("p",null,"This is one of my ",r.a.createElement("span",{style:{fontWeight:"bold"}},"favorite")," ","results in Mathematics. It's a beautiful result from Set Theory that gives us a relationship between the size of a set and it's power set. I find this result very deep, yet it is easy to fomulate and prove."," "),r.a.createElement("p",null,"It is as follows: ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"If X is any set and P(X) is its power set, then |X|","<","|P(X)|, where |.| is the cardinality of the set."),r.a.createElement("p",null,"Click"," ",r.a.createElement("a",{href:"https://proofwiki.org/wiki/Cardinality_of_Set_less_than_Cardinality_of_Power_Set",target:"_blank",rel:"noopener noreferrer",style:{color:"#e54120"}},"here")," ","for a proof.")),r.a.createElement("div",{className:"text list"},r.a.createElement("h3",null,"Paul Institute"),r.a.createElement("p",null,"Lately I've really been into the work of the Paul brothers, Jai Paul and A.K. Paul. The Paul Institute was founded in 2016 by the two siblings, and has been releasing music ever since. Check out the Paul Institute playlist on Spotify."),r.a.createElement("div",{className:"spotify-player"},r.a.createElement("iframe",{title:"Spotify Playlist",src:"https://open.spotify.com/embed/playlist/48zee8uSp4H7oKdWan7uDy",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))),r.a.createElement("div",{className:"text list"},r.a.createElement("h3",null,"Television"),r.a.createElement("p",null,"My favorite shows of the 2019-2020 year are:",r.a.createElement("ol",null,r.a.createElement("li",null,"The New Pope"),r.a.createElement("li",null,"Platane Saison tree"),r.a.createElement("li",null,"Barry"),r.a.createElement("li",null,"Westworld, season 3")),"Let me know what you think.")))}var W=function(){return r.a.createElement(h.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",exact:!0},r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(N,null)),r.a.createElement(y.a,{path:"/projects"},r.a.createElement(d,null),r.a.createElement(M,null),r.a.createElement(N,null)),r.a.createElement(y.a,{path:"/interests"},r.a.createElement(d,null),r.a.createElement(R,null),r.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[26,1,2]]]);
//# sourceMappingURL=main.ecfbfd1b.chunk.js.map