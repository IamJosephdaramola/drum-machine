(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(7),a=n.n(i),s=n(1),c=n(2),l=n(4),d=n(3),u=n(5),h=(n(13),function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleKeydown=function(e){e.keyCode===n.props.letter.charCodeAt()&&(n.audio.play(),n.audio.currentTime=0,n.props.handleDisplay(n.props.id))},n.handleClick=function(){n.audio.play(),n.audio.currentTime=0,n.props.handleDisplay(n.props.id)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.audio),document.addEventListener("keydown",this.handleKeydown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick},r.a.createElement("h1",null,this.props.letter),r.a.createElement("audio",{id:this.props.letter,className:"clip",src:this.props.src,ref:function(t){return e.audio=t}}))}}]),t}(r.a.Component)),p=[{id:"snare",letter:"Q",src:"https://www.myinstants.com/media/sounds/snare.mp3"},{id:"bass 1",letter:"W",src:"https://www.myinstants.com/media/sounds/bass-drum.mp3"},{id:"bongo",letter:"E",src:"http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"},{id:"tom tom",letter:"A",src:"http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"},{id:"bass 3",letter:"S",src:"http://billor.chsh.chc.edu.tw/sound/bass4.wav"},{id:"shotgun",letter:"D",src:"http://david.guerrero.free.fr/Effects/ShotgunReload.wav"},{id:"high hat",letter:"Z",src:"http://www.denhaku.com/r_box/tr707/closed.wav"},{id:"drum hit",letter:"X",src:"http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"},{id:"laser",letter:"C",src:"http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav"}],w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleDisplay=function(e){return n.setState({display:e})},n.state={display:"Click or Press a Key"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"drum-machine",className:"container"},r.a.createElement("div",{id:"display"},this.state.display),r.a.createElement("div",{id:"drum-pads"},p.map((function(t){return r.a.createElement(h,{key:t.id,id:t.id,letter:t.letter,src:t.src,handleDisplay:e.handleDisplay})}))))}}]),t}(r.a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2a66ff73.chunk.js.map