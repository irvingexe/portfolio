(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1:function(a,t,e){"use strict";var i=e(0),n=Object(i.createContext)({});t.a=n},14:function(a,t,e){a.exports=e(20)},19:function(a,t,e){},2:function(a,t,e){"use strict";e.d(t,"a",(function(){return k}));var i=e(6),n=e(7),r=e(10),o=e(9),s=e(11),c=e(0),l=e.n(c),m=e(13),x=e.n(m),k=function(a){function t(a){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(o.a)(t).call(this,a))).state={},e}return Object(s.a)(t,a),Object(n.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.options={wrapper:this.el,renderer:"svg",loop:!1,autoplay:!1,prerender:!0,animationData:this.props.animationData},this.setState((function(t,e){return{anim:x.a.loadAnimation(a.options),prevFrame:0}}))}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{ref:function(t){a.el=t}})}}],[{key:"getDerivedStateFromProps",value:function(a,t){if(a.speed&&t.anim&&t.anim.setSpeed(a.speed),"boolean"===typeof a.playFromCurrent&&t.anim){var e=a.playFromCurrent?t.anim.currentFrame:t.anim.currentFrame+t.prevFrame,i=a.playFromCurrent?t.anim.animationData.op:0;t.prevFrame=t.anim.currentFrame,e!==i&&t.anim.playSegments([e,i],!0)}return!0===a.play&&t.anim&&(t.anim.currentFrame!==t.anim.totalFrames-1&&0!==t.anim.currentFrame||t.anim.goToAndPlay(0,!0)),!0===a.playReverse&&t.anim&&t.anim.currentFrame===t.anim.totalFrames-1&&t.anim.playSegments([t.anim.totalFrames-1,0],!0),null}}]),t}(c.Component)},20:function(a,t,e){"use strict";e.r(t);var i=e(0),n=e.n(i),r=e(12),o=e.n(r);e(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=e(3),c=function(){var a=Object(i.useState)({cursor:{type:"default"},project:{isOpened:!1,id:0},section:"cover",scroll:{y:0,transform:0}}),t=Object(s.a)(a,2),e=t[0],n=t[1];return{state:e,actions:function(a){var t=a.type,i=a.payload;switch(t){case"setState":return n(i);default:return e}}}},l=e(1),m=e(2),x=e(4),k=Object(i.lazy)((function(){return Promise.all([e.e(9),e.e(5)]).then(e.bind(null,59))}));function p(){return n.a.createElement(i.Suspense,{fallback:n.a.createElement("div",{style:{backgroundColor:"#c8baa5",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("div",{style:{width:"calc(min(25vh, 25vw))",height:"calc(min(25vh, 25vw))"}},n.a.createElement(m.a,{play:null,animationData:x})))},n.a.createElement(k,null))}o.a.render(n.a.createElement((function(){var a=c();return n.a.createElement(l.a.Provider,{value:a},n.a.createElement(p,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))},4:function(a){a.exports=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":20,"w":200,"h":200,"nm":"Comp 5","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[100,100,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[12.5,26.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[-9.125,-54.625],"to":[-4.667,1.896],"ti":[4.667,-1.896]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":10,"s":[-37.125,-43.25],"to":[0,0],"ti":[0,0]},{"t":18,"s":[-37.125,-43.25]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.58,0.58],"y":[0.634,0.078]},"o":{"x":[0.181,0.181],"y":[0.144,0.361]},"t":0,"s":[567.15,28.3]},{"i":{"x":[0.702,0.702],"y":[1,1]},"o":{"x":[0.346,0.346],"y":[0.606,0.226]},"t":10,"s":[240.184,50.737]},{"t":18,"s":[110,111.048]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":1,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[12.5,26.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[30.063,-54.813],"to":[5.594,1.927],"ti":[-5.594,-1.927]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":10,"s":[63.625,-43.25],"to":[0,0],"ti":[0,0]},{"t":18,"s":[63.625,-43.25]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.58,0.58],"y":[0.634,0.075]},"o":{"x":[0.181,0.181],"y":[0.144,0.363]},"t":0,"s":[521.614,28.3]},{"i":{"x":[0.702,0.702],"y":[1,1]},"o":{"x":[0.346,0.346],"y":[0.611,0.226]},"t":10,"s":[226.52,50.697]},{"t":18,"s":[110,111.048]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":1,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-44.5,-54.5],[12.5,-54.764]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[12,-54.5],[63,-54.736]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":1,"s":[0]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[-22.919,0.106],[-6.782,0.031]],"o":[[7.863,-0.036],[23.76,-0.11],[0,0]],"v":[[-61.5,54],[-7.752,53.751],[46.5,53.5]],"c":false}]},{"t":20,"s":[{"i":[[0,0],[-31.498,-1.251],[-14,7.25]],"o":[[13.5,6.5],[31.752,-1.251],[0,0]],"v":[[-61.5,54],[-8.252,65.501],[46.5,53.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[-1,10],"to":[3.333,0.333],"ti":[-3.333,-0.333]},{"t":14,"s":[19,12]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0]},"t":0,"s":[100.996,83.908]},{"t":10,"s":[92.536,83.908]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[34,109.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[2.5,-0.25],"to":[0.333,-1.542],"ti":[-0.333,1.542]},{"t":17,"s":[4.5,-9.5]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0.167]},"t":0,"s":[100,100]},{"t":17,"s":[100,83.09]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":10,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}')}},[[14,1,3]]]);
//# sourceMappingURL=main.9917a342.chunk.js.map