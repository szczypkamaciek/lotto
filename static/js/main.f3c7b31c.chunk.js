(this.webpackJsonplotto=this.webpackJsonplotto||[]).push([[0],[,function(t,e,a){t.exports={wrapper:"AppWrapper_wrapper__1nRj6",hint:"AppWrapper_hint__3Tes4",button:"AppWrapper_button__qpez3"}},,,,,,function(t,e,a){t.exports={wrapper:"App_wrapper__RCHjb"}},,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=(a(15),a(4)),s=a(5),l=a(8),p=a(6),u=a(9),m=a(7),h=a.n(m),d=a(1),f=a.n(d),b=o.a.createRef(),w=function(t){var e=t.handleButtonFn;return o.a.createElement("div",{className:f.a.wrapper},o.a.createElement("label",{htmlFor:"liczby"},"Wpisz tutaj swoje liczby: "),o.a.createElement("input",{type:"string",name:"liczby",ref:b}),o.a.createElement("p",{className:f.a.hint},o.a.createElement("span",{className:f.a.hintQuestionMark},"?"),o.a.createElement("span",{className:f.a.hintText},"Liczby powinny by\u0107 zapisane po przecinkach i bez spacji.")),o.a.createElement("input",{className:f.a.button,type:"button",id:"button",value:"Sprawd\u017a!",onClick:e}))},v=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).state={data:{},userData:[1,2,3,4,5,6],hits:[],error:null,loading:!1},a.compare=function(t,e){for(var n=0;n<t.length;n++)e.includes(t[n])&&a.setState({hits:a.concat(t[n])})},a.handleButton=function(){console.log("handleButton dzia\u0142a")},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonp.afeld.me/?callback=&url=http%3A%2F%2Fserwis.mobilotto.pl%2Fmapi_v6%2Findex.php%3Fjson%3DgetGames%26fbclid%3DIwAR2nAx0aMaXt5sNPEUa2xV9pKcWG6X_f4beUEMG6CPRdYoBBmnlxL8K11mQ").then((function(t){return t.ok?t.json():Promise.reject(t)})).then((function(e){return t.setState({data:e,loading:!0})})).catch((function(){return t.setState({error:!0})}))}},{key:"render",value:function(){return this.state.loading&&console.log(this.state),o.a.createElement("div",{className:h.a.wrapper},o.a.createElement("div",{className:"first-section"},o.a.createElement("p",null," Sprawd\u017a swoj\u0105 liczb\u0119 w Lotto! ")),o.a.createElement(w,{data:this.state.data.Lotto,handleButtonFn:this.handleButton,userData:this.state.userData}),o.a.createElement("div",{className:"third-section"},o.a.createElement("p",{id:"komunikat"}," Powodzenia !!!")),o.a.createElement("div",{id:"informacje",className:"third-section"}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f3c7b31c.chunk.js.map