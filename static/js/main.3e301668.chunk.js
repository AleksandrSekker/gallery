(this.webpackJsonpmedicalreact=this.webpackJsonpmedicalreact||[]).push([[0],{20:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){e.exports=a(62)},48:function(e,t,a){},56:function(e,t,a){var n={"./image1.jpg":57,"./image2.jpg":58,"./image3.jpg":59,"./image4.jpg":60,"./image5.jpg":61};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=56},57:function(e,t,a){e.exports=a.p+"static/media/image1.1b70ce84.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/image2.56601e23.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/image3.54e02dca.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/image4.3a21742b.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/image5.08381e3f.jpg"},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),l=a.n(o),c=(a(48),a(34),a(6)),i=a(11),u=a(8),s=a(7),m=a(9),d=a(24);a(20);function h(e){return r.a.createElement("nav",{className:""},r.a.createElement("div",{className:""},r.a.createElement(d.b,{className:"",to:"/gallery"},"Gallery"),r.a.createElement(d.b,{className:"",to:"/home"},"Home"),r.a.createElement(d.b,{className:"",to:"/contact"},"Contact")))}var f=a(22),b=a(21),p=a(23),g=a(38),v=a(4),E=a(13);function x(e){var t=Object(n.useState)(!0),a=Object(v.a)(t,2),o=a[0],l=a[1],c=Object(E.b)({from:{x:0},x:o?1:0,config:{duration:2e3}}).x;return r.a.createElement("div",{onClick:function(){return l(!o)}},r.a.createElement(E.a.div,{style:{transform:c.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(e){return"scale(".concat(e,")")}))}},r.a.createElement(b.a,{icon:e.icon,className:e.className})))}var y=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},j=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")};function N(e){var t=Object(E.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),a=Object(v.a)(t,2),n=a[0],o=a[1];return r.a.createElement(E.a.img,{src:e.src,className:"card",onMouseMove:function(e){var t=e.clientX,a=e.clientY;return o({xys:y(t,a)})},onMouseLeave:function(){return o({xys:[0,0,1]})},style:{transform:n.xys.interpolate(j)}})}var O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,users:[],error:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchUsers",value:function(){var e=this;fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0").then((function(e){return e.json()})).then((function(t){return e.setState({users:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.users,n=e.error;return r.a.createElement("div",null,n?r.a.createElement("p",null,n.message):null,t?r.a.createElement("h3",null,"Loading..."):a.map((function(e){var t=e.id,a=e.urls;return r.a.createElement("div",{className:"containerFull"},r.a.createElement("div",{className:"containerHome"},r.a.createElement("div",{key:t,className:"imageGallery"},r.a.createElement(N,{src:a.small,alt:"image"})),r.a.createElement("div",{className:"containerTwo"},r.a.createElement("h3",null,"Total ",r.a.createElement(b.a,{icon:g.a})),r.a.createElement("h3",null,r.a.createElement(x,{icon:p.c,className:"like"})),r.a.createElement("h3",null,e.user.total_likes),r.a.createElement("h3",null,r.a.createElement(b.a,{icon:p.d,className:"photoIcon"})),r.a.createElement("h3",null,e.user.total_photos)),r.a.createElement("div",{className:"container3"},r.a.createElement("h2",null,e.user.name),r.a.createElement("div",{className:"new"},r.a.createElement("h3",{className:"thumbUp"},r.a.createElement(x,{icon:p.e})),r.a.createElement("h3",null,e.likes)),r.a.createElement("p",null,e.user.bio))))})))}}]),t}(n.Component),k=a(16),w=a(14),C=a(18);function S(){var e=Object(k.a)(["\n  height: 2rem;\n  margin-bottom: 1rem;\n  width: 90%;\n  font-size: 1.5rem;\n  color: darkblue;\n  outline: none;\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n"]);return S=function(){return e},e}var U=w.a.input(S()),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={userName:"",userPassword:"",nameError:"",passwordError:""},a.handleUserName=a.handleUserName.bind(Object(C.a)(a)),a.handleUserPassword=a.handleUserPassword.bind(Object(C.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"handleUserPassword",value:function(e){this.setState({userPassword:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{type:"text",placeholder:"type something here",onChange:this.handleUserName,value:this.state.userName}),r.a.createElement(U,{type:"text",placeholder:"type something else here",onChange:this.handleUserPassword,value:this.state.userPassword}),r.a.createElement("p",{style:{color:"green"}},this.state.userName),r.a.createElement("p",{style:{color:"red"}},this.state.userPassword))}}]),t}(r.a.Component);function L(){var e=Object(k.a)(["\n      margin-left: auto;\n      margin-right: auto;\n      max-height: 40rem;\n      max-width: 40rem;\n      background-color: lightblue;\n      border-radius: 2rem;\n      display: flex;\n      flex-direction: column;\n      padding: 2rem;\n    "]);return L=function(){return e},e}function T(){var e=Object(k.a)(["\n      min-height: 4rem;\n      background-color: transparent;\n      border: 1px solid white;\n      border-radius: 2rem;\n      font-size: 2rem;\n      color: white;\n      margin: auto;\n    "]);return T=function(){return e},e}function H(){var e=Object(k.a)(["\n      text-align: center;\n      background-color: ",";\n      padding-top: 10rem;\n      height: 100vh;\n    "]);return H=function(){return e},e}var A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).ChangeColorFunction=function(){var e="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";a.setState({ColorHolder:e})},a.state={ColorHolder:"#123456"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=w.a.div(H(),this.state.ColorHolder),t=w.a.button(T()),a=w.a.div(L());return r.a.createElement(e,null,r.a.createElement(a,null,r.a.createElement(M,null),r.a.createElement(t,{onClick:this.ChangeColorFunction},"Change Background Color")))}}]),t}(n.Component);function P(){var e=Object(k.a)(["\n      background-color: ",";\n      height: 100vh;\n    "]);return P=function(){return e},e}function F(){var e=Object(k.a)(["\n  font-size: 2rem;\n  margin-left: 45vw;\n  padding-top: 40vh;\n  color: white;\n"]);return F=function(){return e},e}function q(){var e=Object(k.a)(["\n  background: yellow;\n  font-size: 2rem;\n  margin-left: 45vw;\n  margin-top: 2rem;\n  border: none;\n  border-radius: 1rem;\n  width: 10rem;\n  color: #123456;\n"]);return q=function(){return e},e}var I=w.a.button(q()),W=w.a.p(F()),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).ChangeColorFunction=function(){var e="#"+Math.random().toString(16).slice(2,8).toUpperCase();a.setState({ColorHolder:e})},a.state={ColorHolder:"#123456"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=w.a.div(P(),this.state.ColorHolder);return r.a.createElement(e,null,r.a.createElement(W,null,"Color Hex ",this.state.ColorHolder),r.a.createElement(I,{onClick:this.ChangeColorFunction},"Hex"))}}]),t}(n.Component),B=function(){var e=Object(n.useState)({title:"Be yourself; everyone else is already taken.",author:"Oscar Wilde"}),t=Object(v.a)(e,2),a=t[0],o=t[1],l=[{title:"So many books, so little time.",author:"Frank Zappa"},{title:"A room without books is like a body without a soul.",author:"Marcus Tullius Cicero"},{title:"You only live once, but if you do it right, once is enough.",author:"Mae West"},{title:"Insanity is doing the same thing, over and over again, but expecting different results.",author:"Narcotics Anonymous"},{title:"Without music, life would be a mistake",author:"Friedrich Nietzsche, Twilight of the Idols"},{title:"We accept the love we think we deserve",author:"Stephen Chbosky, The Perks of Being a Wallflower"}],c=Object(E.b)({opacity:1,marginTop:0,from:{opacity:0,marginTop:500},config:{duration:1e3}}),i=Object(E.b)({opacity:1,from:{opacity:0},config:{duration:2e3}});return r.a.createElement(E.a.div,{style:c},r.a.createElement("div",{className:"bg-green-200 pt-32 pb-16"},r.a.createElement("div",{className:"bg-gray-200 w-2/3 mx-auto rounded p-16"},r.a.createElement(E.a.div,{style:i},r.a.createElement("h1",{className:"text-3xl text-red-500"},a.title)),r.a.createElement("p",{className:"text-2xl text-right text-blue-400"},a.author),r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 p-2 rounded-full text-white",onClick:function(){return o(l[Math.floor(3*Math.random())])}},"New Quote"))))},_=a(42);function D(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1],l=Object(_.a)(),c=l.register,i=l.handleSubmit,u=l.errors,s=Object(E.b)({opacity:1,marginLeft:0,marginTop:0,from:{opacity:0,marginLeft:1e3,marginTop:1e3},config:{duration:1e3}});return r.a.createElement(E.a.div,{style:s},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center mt-8 text-3xl mt-64"},"Todolist"),r.a.createElement("div",{className:"container mx-auto w-1/3 mt-12 mb-64"},r.a.createElement("form",{onSubmit:i((function(e){console.log(e.exampleRequired)}))},r.a.createElement("input",{type:"text",name:"exampleRequired",ref:c({required:!0,minLength:1}),id:"input",className:"shadow appearance-none border border-green-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-2/3",placeholder:"Add item"}),r.a.createElement("button",{onClick:function(){o(document.getElementById("input").value),document.getElementById("input").value=""},className:"bg-green-600 p-2 rounded ml-2 text-white hover:bg-green-300"},"Add item"),u.exampleRequired&&r.a.createElement("p",{className:"text-red-500"},"This field is required"),r.a.createElement("div",null,a)))))}function R(){var e=Object(k.a)(["\n    color: ",";\n    text-align: center;\n    font-size: 5rem;\n  "]);return R=function(){return e},e}var G=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("black"),c=Object(v.a)(l,2),i=c[0],u=c[1];Object(n.useEffect)((function(){u(a<0?"red":a>0?"green":"black")}));var s=w.a.div(R(),i);return r.a.createElement("div",{className:"flex bg-purple-400 h-screen"},r.a.createElement("div",{className:"bg-blue-500 w-2/3 py-16 m-auto"},r.a.createElement("h1",{className:"text-5xl uppercase text-center text-white font-serif"},"Counter"),r.a.createElement(s,null,a),r.a.createElement("div",{className:"flex justify-around "},r.a.createElement("button",{onClick:function(){o(a-1)},className:"bg-red-200 w-32 rounded hover:text-white hover:bg-pink-400 hover:rounded-full font-serif"},"Lover Count"),r.a.createElement("button",{onClick:function(){o(a+1)},className:"bg-red-200 w-32 rounded hover:text-white hover:bg-pink-400 hover:rounded-full font-serif"},"Add Count"))))},Y=function(){var e=Object(n.useState)(1),t=Object(v.a)(e,2),o=t[0],l=t[1];return r.a.createElement("div",{className:"flex h-screen bg-blue-400"},r.a.createElement("div",{className:"mx-auto flex w-2/3"},r.a.createElement(b.a,{icon:p.a,className:"mr-2 text-5xl my-auto text-white hover:text-blue-500",onClick:function(){l(1!==o?o-1:5)}}),r.a.createElement("div",{className:"my-auto rounded-circle"},r.a.createElement("img",{src:a(56)("./image".concat(o,".jpg")),alt:"",className:"rounded-lg"})),r.a.createElement(b.a,{icon:p.b,className:"ml-2 text-5xl my-auto text-white hover:text-blue-500",onClick:function(){l(5!==o?o+1:1)}})))},J=function(){return r.a.createElement("div",{className:"bg-grey-500"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-5xl text-center font-serif"},"Our ",r.a.createElement("span",{className:"text-pink-500"},"Shop")),r.a.createElement("div",{className:"flex justify-center items-center"},r.a.createElement("button",{className:"m-4 border border-gray-800 text-2xl font-serif py-2 px-4 rounded-lg hover:bg-black hover:text-pink-500"},"ALL"),r.a.createElement("button",{className:"m-4 border border-gray-800 text-2xl font-serif py-2 px-4 rounded-lg hover:bg-black hover:text-pink-500"},"CAKES"),r.a.createElement("button",{className:"m-4 border border-gray-800 text-2xl font-serif py-2 px-4 rounded-lg hover:bg-black hover:text-pink-500"},"CUPKES"),r.a.createElement("button",{className:"m-4 border border-gray-800 text-2xl font-serif py-2 px-4 rounded-lg hover:bg-black hover:text-pink-500"},"SWEETS"),r.a.createElement("button",{className:"m-4 border border-gray-800 text-2xl font-serif py-2 px-4 rounded-lg hover:bg-black hover:text-pink-500"},"DOUGHNUTS")),r.a.createElement("div",{className:""},r.a.createElement("input",{type:"text"}))))};function K(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(z,null),r.a.createElement(B,null),r.a.createElement(D,null),r.a.createElement(G,null),r.a.createElement(Y,null),r.a.createElement(J,null))}function X(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?")))}var Q=function(){return r.a.createElement("div",{className:"text-center bg-blue-700 text-2xl text-white p-3 font-serif"},"Created by \xa9 Aleksandr Sekker 2020")},Z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/gallery",component:K}),r.a.createElement(f.a,{path:"/home",component:O}),r.a.createElement(f.a,{path:"/contact",component:X})),r.a.createElement(Q,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3e301668.chunk.js.map