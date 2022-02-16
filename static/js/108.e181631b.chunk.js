"use strict";(self.webpackChunkgithub_battle=self.webpackChunkgithub_battle||[]).push([[108],{945:function(e,r,t){var n=t(184),o=t(329);r.Z=function(e){var r=e.header,t=e.subheader,s=e.avatar,c=e.href,i=e.name,a=e.children;return(0,o.jsx)(n.Z.Consumer,{children:function(e){var n=e.theme;return(0,o.jsxs)("div",{className:"card bg-".concat(n),children:[(0,o.jsx)("h4",{className:"header-lg center-text",children:r}),(0,o.jsx)("img",{className:"avatar",src:s,alt:"Avatar for ".concat(i)}),t&&(0,o.jsx)("h4",{className:"center-text",children:t}),(0,o.jsx)("h2",{className:"center-text",children:(0,o.jsx)("a",{className:"link",href:c,children:i})}),a]})}})}},108:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.r(r),t.d(r,{default:function(){return b}});var c=t(152),i=t(791),a=t(7),u=t.n(a),l=t(86),f=t(945),h=t(804),d=t(605),g=t(135),p=t(329),x=function(e){var r=e.selectedLanguage,t=e.setSelectedLanguage;return(0,p.jsx)("ul",{className:"flex-center",children:["All","JavaScript","Ruby","Java","CSS","Python"].map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)("button",{onClick:function(){return t(e)},style:e===r?{color:"rgb(187, 46, 31)"}:null,className:"btn-clear nav-link",children:e})},e)}))})};x.propType={selectedLanguage:u().string.isRequired,setSelectedLanguage:u().string.isRequired};var j=function(e){var r=e.repos;return(0,p.jsx)("ul",{className:"grid space-around",children:r.map((function(e,r){e.name;var t=e.owner,n=e.html_url,o=e.stargazers_count,s=e.forks,c=e.open_issues,i=t.login,a=t.avatar_url;return(0,p.jsx)("li",{children:(0,p.jsx)(f.Z,{header:"#".concat(r+1),avatar:a,href:n,name:i,children:(0,p.jsxs)("ul",{className:"card-list",children:[" ",(0,p.jsx)("li",{children:(0,p.jsxs)(d.Z,{text:"Github Username",children:[(0,p.jsx)(g.Xws,{color:"rgb(255,191,116)",size:22}),(0,p.jsx)("a",{href:"https://github.com/".concat(i),children:i})]})}),(0,p.jsxs)("li",{children:[(0,p.jsx)(g.QJe,{color:"rgb(255, 215, 0)",size:22}),o.toLocaleString()," stars"]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(g.FEF,{color:"rgb(129, 195, 245)",size:22}),s.toLocaleString()," forks"]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(g.gJy,{color:"rgb(241, 138, 147)",size:22}),c.toLocaleString()," open issues"]})]})})},n)}))})},b=function(){var e=(0,i.useState)("All"),r=(0,c.Z)(e,2),t=r[0],o=r[1],a=(0,i.useState)({}),u=(0,c.Z)(a,2),f=u[0],d=u[1],g=(0,i.useState)(null),b=(0,c.Z)(g,2),m=b[0],v=b[1];(0,i.useEffect)((function(){f[t]||(0,l.Q)(t).then((function(e){d(s(s({},f),{},n({},t,e)))})).catch((function(){console.warn("Error Fetching",m),v("there was an error fetching the repos"),console.log(m)}))}),[t]);return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)(x,{selectedLanguage:t,setSelectedLanguage:o}),!f[t]&&null===m&&(0,p.jsx)(h.Z,{text:"Fetching Repos"}),m&&(0,p.jsx)("p",{className:"center-text error",children:m}),f[t]&&(0,p.jsx)(j,{repos:f[t]})]})}},605:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(152),o=t(791),s=t(329),c=function(e){var r=e.children,t=(0,o.useState)(!1),c=(0,n.Z)(t,2),i=c[0],a=c[1];return(0,s.jsx)("div",{onMouseOver:function(){a(!0)},onMouseOut:function(){a(!1)},children:r(i)})},i={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}},a=function(e){var r=e.text,t=e.children;return(0,s.jsx)(c,{children:function(e){return(0,s.jsxs)("div",{style:i.container,children:[!0===e&&(0,s.jsx)("div",{style:i.tooltip,children:r}),t]})}})}},86:function(e,r,t){t.d(r,{Q:function(){return u},N:function(){return a}});var n=t(152),o=function(e,r){return"Not Found"===e?"".concat(r," doesn't exist"):e},s=function(e){return fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(r){if(r.message)throw new Error(o(r.message,e));return r}))},c=function(e,r){return 3*e+function(e){return e.reduce((function(e,r){return e+r.stargazers_count}),0)}(r)},i=function(e){return Promise.all([(r=e,fetch("https://api.github.com/users/".concat(r)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(o(e.message,r));return e}))),s(e)]).then((function(e){var r=(0,n.Z)(e,2),t=r[0],o=r[1];return{profile:t,score:c(t.followers,o)}}));var r},a=function(e){return Promise.all([i(e[0]),i(e[1])]).then((function(e){return function(e){return e.sort((function(e,r){return r.score-e.score}))}(e)}))},u=function(e){var r=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(r).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}}}]);
//# sourceMappingURL=108.e181631b.chunk.js.map