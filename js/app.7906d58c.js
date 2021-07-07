(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/philosophers-visualizer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Visualizer")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"visualizer"}},[n("h1",[t._v("Philosophers visualizer")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textData,expression:"textData"}],attrs:{placeholder:"timestamp_in_ms X status"},domProps:{value:t.textData},on:{input:function(e){e.target.composing||(t.textData=e.target.value)}}}),t._v(" "),n("br"),n("button",{on:{click:t.generateData}},[t._v("generate")]),t.warningMessage?n("div",{staticClass:"warn"},[t._v(" "+t._s(t.warningMessage)+" ")]):t._e(),t.chartData.length>1?n("div",{attrs:{id:"graph"}},[n("GChart",{attrs:{settings:{packages:["timeline"]},type:"Timeline",data:t.chartData,options:t.chartOptions}})],1):t._e()])},s=[],c=(n("159b"),n("ac1f"),n("1276"),n("466d"),n("99af"),n("b64b"),n("cb43")),u={name:"Vizualizer",components:{GChart:c["GChart"]},data:function(){return{chartData:[],chartOptions:{title:"Philosopher visualizer",height:0,width:0,colors:["#fbb4ae","#b3cde3","#ccebc5"],avoidOverlappingGridLines:!1},textData:"",warningMessage:""}},methods:{generateData:function(){var t=this;this.warningMessage="";var e=[[{type:"string",id:"Index"},{type:"string",id:"Action"},{type:"string",role:"style"},{type:"number",id:"Start"},{type:"number",id:"End"}]],n=/^(\d+) (\d+) (is (eat|sleep|think)ing|died)$/,a={},r={min:1/0,max:0},i=0;this.textData.split("\n").forEach((function(o){var s=o.match(n);if(s){var c=parseInt(s[1],10),u=s[4],l=s[2];r.min=Math.min(r.min,c),r.max=Math.max(r.max,c),i=Math.max(i,l),a[l]?(a[l].action?e.push([l,a[l].action,"stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55",a[l].ms,c]):t.warningMessage+="Philosopher ".concat(l," is already dead (time: ").concat(a[l].ms,")\r\n"),a[l]={action:u,ms:c}):a[l]={action:u,ms:c}}})),Object.keys(a).forEach((function(t){a[t].ms<r.max&&a[t].action&&e.push([t,a[t].action,"stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55",a[t].ms,r.max])})),this.chartOptions.height=40*i+60,this.chartOptions.width=.6*(r.max-r.min),this.chartData=e.sort((function(t,e){return t[0]-e[0]}))}}},l=u,p=(n("86a1"),n("2877")),h=Object(p["a"])(l,o,s,!1,null,"d04930da",null),d=h.exports,f={name:"App",components:{Visualizer:d}},m=f,v=Object(p["a"])(m,r,i,!1,null,null,null),g=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(g)}}).$mount("#app")},"86a1":function(t,e,n){"use strict";n("93e4")},"93e4":function(t,e,n){}});
//# sourceMappingURL=app.7906d58c.js.map