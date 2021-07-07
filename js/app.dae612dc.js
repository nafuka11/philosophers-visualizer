(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/philosophers-visualizer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5078:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Visualizer")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"visualizer"}},[n("h1",[t._v("Philosophers visualizer")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textData,expression:"textData"}],attrs:{placeholder:"timestamp_in_ms X status"},domProps:{value:t.textData},on:{input:function(e){e.target.composing||(t.textData=e.target.value)}}}),t._v(" "),n("br"),n("button",{on:{click:t.generateData}},[t._v("generate")]),t.chartData.length>1?n("div",{attrs:{id:"graph"}},[n("GChart",{attrs:{settings:{packages:["timeline"]},type:"Timeline",data:t.chartData,options:t.chartOptions}})],1):t._e()])},s=[],c=(n("159b"),n("ac1f"),n("1276"),n("466d"),n("b64b"),n("cb43")),u={name:"Vizualizer",components:{GChart:c["GChart"]},data:function(){return{chartData:[],chartOptions:{title:"Philosopher visualizer",height:0,width:0,colors:["#fbb4ae","#b3cde3","#ccebc5"],avoidOverlappingGridLines:!1},textData:""}},methods:{generateData:function(){var t=[[{type:"string",id:"Index"},{type:"string",id:"Action"},{type:"string",role:"style"},{type:"number",id:"Start"},{type:"number",id:"End"}]],e=/^(\d+) (\d+) (is (eat|sleep|think)ing|died)$/,n={},r={min:1/0,max:0},a=0;this.textData.split("\n").forEach((function(i){var o=i.match(e);if(o){var s=parseInt(o[1],10),c=o[4],u=o[2];r.min=Math.min(r.min,s),r.max=Math.max(r.max,s),a=Math.max(a,u),n[u]?(t.push([u,n[u].action,"stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55",n[u].ms,s]),n[u]={action:c,ms:s}):n[u]={action:c,ms:s}}})),Object.keys(n).forEach((function(e){n[e].ms<r.max&&n[e].action&&t.push([e,n[e].action,"stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55",n[e].ms,r.max])})),this.chartOptions.height=40*a+60,this.chartOptions.width=.6*(r.max-r.min),this.chartData=t.sort((function(t,e){return t[0]-e[0]}))}}},l=u,p=(n("e654"),n("2877")),h=Object(p["a"])(l,o,s,!1,null,"5b0e8576",null),d=h.exports,f={name:"App",components:{Visualizer:d}},m=f,v=Object(p["a"])(m,a,i,!1,null,null,null),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},e654:function(t,e,n){"use strict";n("5078")}});
//# sourceMappingURL=app.dae612dc.js.map