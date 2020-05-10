(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/profile_pic.7eb41bc4.jpg"},,function(e,t,a){e.exports=a.p+"static/media/resume.ea9f86ba.pdf"},function(e,t,a){e.exports=a.p+"static/media/loginGif.9a140565.gif"},function(e,t,a){e.exports=a.p+"static/media/personal_website.42cc8a8f.png"},function(e,t,a){e.exports=a.p+"static/media/kirchner_dancer.1937a44f.jpeg"},function(e,t,a){e.exports=a.p+"static/media/twitter_spread.07a145c4.png"},function(e,t,a){e.exports=a.p+"static/media/url_shortener.9500d0b3.gif"},,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),i=(a(32),a(33),a(34),a(5));var o=function(e){return r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"Hello, I'm ",r.a.createElement("span",{id:"first-name"},"Quentin")," "),r.a.createElement("p",{className:"description-text"},"I am a coder and a problem solver. I am mostly interested in full stack web development technologies."),r.a.createElement("p",{className:"description-text"},"I graduated from the department of Mathematics at the University of Toronto in 2019."),r.a.createElement("p",{className:"description-text"},"Check out some of my projects in the"," ",r.a.createElement(i.b,{className:"highlight",style:{backgroundColor:"#579d1f"},to:"/projects"},"Projects")," ","section ",r.a.createElement("span",null,"\ud83d\ude0e"),"."))},s=(a(39),a(40),a(18)),m=a.n(s);var p=function(e){return r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:m.a,alt:"Profile",id:"profile-image"}))};function u(e){return r.a.createElement("div",{className:"home-grid"},r.a.createElement(p,null),r.a.createElement(o,null))}var h=a(4),d=(a(41),a(26)),f=a(6),E=a(19);a(45);function v(e){var t="quentin.vilchez@gmail.com",a=Object(n.useState)("snackbar"),l=Object(d.a)(a,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){console.log(c),c.includes("show")&&setTimeout((function(){i("snackbar")}),3e3)}),[c]),r.a.createElement("div",{id:"email-input"},r.a.createElement("div",{id:"email"},r.a.createElement("div",{id:"address"},r.a.createElement("a",{href:"mailto:".concat(t)},t)),navigator.clipboard?r.a.createElement("div",{id:"copy-icon"},r.a.createElement(f.a,{icon:E.a,onClick:function(e){navigator.clipboard.writeText(t).then((function(){console.log("email has been copied to clipboard"),i("snackbar show")}),(function(){console.log("email not copied")}))}}),r.a.createElement("span",{id:"copy-text"},"Copy to Clipboard"),r.a.createElement("div",{className:c},"Copied!")):r.a.createElement("div",null)))}var y=a(20),g=a.n(y);function b(e){return r.a.createElement("div",{id:"nav-container"},r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/",id:"home"},"Home"),r.a.createElement(i.b,{id:"projects",to:"/projects"},"Projects"),r.a.createElement(i.b,{id:"interests",to:"/interests"},"Interests")),r.a.createElement(v,null),r.a.createElement("div",{className:"resume"},r.a.createElement("a",{href:g.a,className:"resume-button",target:"_blank",rel:"noopener noreferrer"},"Resume")))}var w=a(12);a(46);var N=function(e){return r.a.createElement("div",{id:"profile-links"},r.a.createElement("a",{href:"https://github.com/quentinv72",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:w.a})),r.a.createElement("a",{href:"https://www.linkedin.com/in/quentin-vilchez-0b2a2a163/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:w.b})))};a(47),a(48);var k=function(e){return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"project-box"},r.a.createElement("img",{src:e.src,alt:e.alt,className:"project-pic"}),r.a.createElement("a",{className:"slider",href:e.href,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"description"}," ",e.children))))},j=a(21),S=a.n(j),x=a(22),I=a.n(x),P=a(23),C=a.n(P),T=a(24),_=a.n(T),L=a(25),M=a.n(L);a(49);function R(e){if(e.stack){var t=e.stack.map((function(e){return r.a.createElement("li",{key:e.toLowerCase(),className:"technology"},e)}));return r.a.createElement("ul",{className:"stacks"},t)}}var W=function(e){return r.a.createElement("div",{className:"all-projects"},r.a.createElement(k,{src:S.a,alt:"color therapy gif",href:"https://www.colortherapy.io"},r.a.createElement("h2",{className:"project-title"},"Color Therapy"),r.a.createElement("p",{className:"project-description"},"Color Therapy is a web app that lets you generate Spotify playlists based on your 'color mood'. Go ahead and test it out"," ",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(R,{stack:["React","JavaScript","HTML","CSS","Git"]})),r.a.createElement(k,{alt:"Neural Style Transfer",src:C.a,href:"https://github.com/quentinv72/NeuralStyleTransfer"},r.a.createElement("h2",{className:"project-title"},"Neural Style Transfer Web App"),r.a.createElement("p",{className:"project-description"},"Click to find out more.",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(R,{stack:["Python","Pytorch","JavaScript","React","FastAPI","Git"]})),r.a.createElement(k,{src:M.a,alt:"url shortener",href:"https://github.com/quentinv72/URL-shortener"},r.a.createElement("h2",{className:"project-title"},"URL Shortener"),r.a.createElement("p",{className:"project-description"},"URL shortener web app with login and URL management",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(R,{stack:["JavaScript","React","Node","SQLite","Express","Auth0"]})),r.a.createElement(k,{src:_.a,alt:"graph",href:"https://drive.google.com/file/d/1CH-kEWi3VG3v6ZkBc8sCXcOW4_V1T1iH/view"},r.a.createElement("h2",{className:"project-title"},"Twitter Information Spread"),r.a.createElement("p",{className:"project-description"},"Mathematical model to describe spread of information on Twitter.",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(R,{stack:["Python","MatLab","ODEs"]})),r.a.createElement(k,{src:I.a,alt:"personal web",href:"https://github.com/quentinv72/quentinv72.github.io"},r.a.createElement("h2",{className:"project-title"},"Personal Website"),r.a.createElement("p",{className:"project-description"},"My personal website",r.a.createElement("span",null,"\ud83d\ude0e"),"."),r.a.createElement(R,{stack:["React","JavaScript","HTML","CSS","Git"]})))};a(50);function q(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"text"},r.a.createElement("h2",null,"I spend most of my time"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"coding"),", reading about"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"Mathematics"),", listening to"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"music")," ","and watching"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"series"),". I also really enjoy playing"," ",r.a.createElement("span",{className:"highlight",style:{color:"#faa200"}},"squash"),". I started playing when I was at university and have continued ever since.")),r.a.createElement("div",{className:"text list"},r.a.createElement("h3",null,"Cantor's Theorem:"),r.a.createElement("p",null,"This is one of my ",r.a.createElement("span",{style:{fontWeight:"bold"}},"favorite")," ","results in Mathematics. It's a beautiful result from Set Theory that gives us a relationship between the size of a set and it's power set. I find this result very deep, yet it is easy to fomulate and prove."," "),r.a.createElement("p",null,"It is as follows: ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"If X is any set and P(X) is its power set, then |X|","<","|P(X)|, where |.| is the cardinality of the set."),r.a.createElement("p",null,"Click"," ",r.a.createElement("a",{href:"https://proofwiki.org/wiki/Cardinality_of_Set_less_than_Cardinality_of_Power_Set",target:"_blank",rel:"noopener noreferrer",style:{color:"#e54120"}},"here")," ","for a proof.")),r.a.createElement("div",{className:"text list"},r.a.createElement("h3",null,"Paul Institute"),r.a.createElement("p",null,"Lately I've really been into the work of the Paul brothers, Jai Paul and A.K. Paul. The Paul Institute was founded in 2016 by the two siblings, and has been releasing music ever since. Check out the Paul Institute playlist on Spotify."),r.a.createElement("div",{className:"spotify-player"},r.a.createElement("iframe",{title:"Spotify Playlist",src:"https://open.spotify.com/embed/playlist/48zee8uSp4H7oKdWan7uDy",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))),r.a.createElement("div",{className:"text list"},r.a.createElement("h3",null,"Television"),r.a.createElement("p",null,"My favorite shows of the 2019-2020 year are:",r.a.createElement("ol",null,r.a.createElement("li",null,"The New Pope"),r.a.createElement("li",null,"Platane Saison tree"),r.a.createElement("li",null,"Barry"),r.a.createElement("li",null,"Westworld, season 3")),"Let me know what you think.")))}var H=function(){return r.a.createElement(i.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0},r.a.createElement(b,null),r.a.createElement(u,null),r.a.createElement(N,null)),r.a.createElement(h.a,{path:"/projects"},r.a.createElement(b,null),r.a.createElement(W,null),r.a.createElement(N,null)),r.a.createElement(h.a,{path:"/interests"},r.a.createElement(b,null),r.a.createElement(q,null),r.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[27,1,2]]]);
//# sourceMappingURL=main.10fca409.chunk.js.map