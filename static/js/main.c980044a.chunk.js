(this.webpackJsonpmedicalreact=this.webpackJsonpmedicalreact||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),l=(a(8),a(5)),o=a(7);t.default=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),i=t[0],u=t[1],m=Object(r.useState)([{name:"Cake item",price:"$5",image:"./cake1.jpg",id:0},{name:"Cupcake item",price:"$5",image:"./cupcake1.jpg",id:1},{name:"Sweets item",price:"$5",image:"./sweets1.jpg",id:2},{name:"Doughnut item",price:"$5",image:"./doughnut1.jpg",id:3},{name:"Cake item",price:"$10",image:"./cake2.jpg",id:4},{name:"Cupcake item",price:"$10",image:"./cupcake2.jpg",id:5},{name:"Sweets item",price:"$5",image:"./sweets2.jpg",id:6},{name:"Doughnut item",price:"$10",image:"./doughnut2.jpg",id:7},{name:"Cake item",price:"$15",image:"./cake3.jpg",id:8},{name:"Cupcake item",price:"$15",image:"./cupcake3.jpg",id:9},{name:"Sweets item",price:"$15",image:"./sweets3.jpg",id:10},{name:"Doughnut item",price:"$15",image:"./doughnut3.jpg",id:11}]),s=Object(n.a)(m,2),d=s[0];s[1];return c.a.createElement("div",{className:"bg-grey-500"},c.a.createElement("div",{className:"container mx-auto"},c.a.createElement("h1",{className:"text-5xl text-center font-serif"},"Filter ",c.a.createElement("span",{className:"text-pink-500"},"List")),c.a.createElement("div",{className:"flex justify-center"},c.a.createElement(l.a,{icon:o.g,className:"h-12 text-5xl bg-pink-500 px-4 text-white rounded-l-lg"}),c.a.createElement("input",{id:"input",type:"text",name:"input",className:"border border-gray-800 rounded-r-lg h-12 outline-none text-2xl px-4 border-l-0 w-62",placeholder:"search item",onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",{className:"flex flex-wrap justify-center container-lg mt-16"},d.filter((function(e){return e.name.toLowerCase().indexOf(i.toLowerCase())>=0||e.price.toLowerCase().indexOf(i)>=0})).map((function(e){return c.a.createElement("div",{className:"my-auto lg:w-3/12 w-64 m-2",key:e.id},c.a.createElement("img",{src:a(62)("".concat(e.image)),alt:"",className:"rounded-t-lg h-64 w-full"}),c.a.createElement("div",{className:"flex flex-wrap justify-between bg-gray-200 rounded-b-lg p-2 mb-4"},c.a.createElement("h3",null,e.name),c.a.createElement("h3",null,e.price)))})))))}},,,,,,,,,,function(e,t,a){},,function(e,t){},,,,,,,,function(e,t,a){e.exports=a(76)},,,,,function(e,t,a){},,,,,,,function(e,t,a){var n={"./image1.jpg":57,"./image2.jpg":58,"./image3.jpg":59,"./image4.jpg":60,"./image5.jpg":61};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=56},function(e,t,a){e.exports=a.p+"static/media/image1.1b70ce84.jpg"},function(e,t,a){e.exports=a.p+"static/media/image2.56601e23.jpg"},function(e,t,a){e.exports=a.p+"static/media/image3.54e02dca.jpg"},function(e,t,a){e.exports=a.p+"static/media/image4.3a21742b.jpg"},function(e,t,a){e.exports=a.p+"static/media/image5.08381e3f.jpg"},function(e,t,a){var n={"./ComponentItem":36,"./ComponentItem.js":36,"./FilterList":24,"./FilterList.js":24,"./cake1.jpg":63,"./cake2.jpg":64,"./cake3.jpg":65,"./cupcake1.jpg":66,"./cupcake2.jpg":67,"./cupcake3.jpg":68,"./doughnut1.jpg":69,"./doughnut2.jpg":70,"./doughnut3.jpg":71,"./sweets1.jpg":72,"./sweets2.jpg":73,"./sweets3.jpg":74};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=62},function(e,t,a){e.exports=a.p+"static/media/cake1.a9f9f826.jpg"},function(e,t,a){e.exports=a.p+"static/media/cake2.b1a01651.jpg"},function(e,t,a){e.exports=a.p+"static/media/cake3.154437cc.jpg"},function(e,t,a){e.exports=a.p+"static/media/cupcake1.f48807aa.jpg"},function(e,t,a){e.exports=a.p+"static/media/cupcake2.99d56e92.jpg"},function(e,t,a){e.exports=a.p+"static/media/cupcake3.455666c8.jpg"},function(e,t,a){e.exports=a.p+"static/media/doughnut1.6e57f88e.jpg"},function(e,t,a){e.exports=a.p+"static/media/doughnut2.9d32a8f8.jpg"},function(e,t,a){e.exports=a.p+"static/media/doughnut3.4ca56887.jpg"},function(e,t,a){e.exports=a.p+"static/media/sweets1.005effcf.jpg"},function(e,t,a){e.exports=a.p+"static/media/sweets2.b7431d2b.jpg"},function(e,t,a){e.exports=a.p+"static/media/sweets3.ba2bebd4.jpg"},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),o=(a(49),a(34),a(10)),i=a(16),u=a(13),m=a(12),s=a(14),d=a(20);a(8);function p(e){return r.a.createElement("nav",{className:""},r.a.createElement("div",{className:""},r.a.createElement(d.b,{className:"",to:"/gallery"},"Gallery"),r.a.createElement(d.b,{className:"",to:"/home"},"Home"),r.a.createElement(d.b,{className:"",to:"/github"},"Github"),r.a.createElement(d.b,{className:"",to:"/contact"},"Contact")))}var f=a(18),g=a(5),b=a(7),h=a(39),x=a(2),E=a(4);function v(e){var t=Object(n.useState)(!0),a=Object(x.a)(t,2),c=a[0],l=a[1],o=Object(E.b)({from:{x:0},x:c?1:0,config:{duration:2e3}}).x;return r.a.createElement("div",{onClick:function(){return l(!c)}},r.a.createElement(E.a.div,{style:{transform:o.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(e){return"scale(".concat(e,")")}))}},r.a.createElement(g.a,{icon:e.icon,className:e.className})))}var j=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},w=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")};function y(e){var t=Object(E.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),a=Object(x.a)(t,2),n=a[0],c=a[1];return r.a.createElement(E.a.img,{src:e.src,className:"card",onMouseMove:function(e){var t=e.clientX,a=e.clientY;return c({xys:j(t,a)})},onMouseLeave:function(){return c({xys:[0,0,1]})},style:{transform:n.xys.interpolate(w)}})}var N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,users:[],error:null},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"fetchUsers",value:function(){var e=this;fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0").then((function(e){return e.json()})).then((function(t){return e.setState({users:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.users,n=e.error;return r.a.createElement("div",null,n?r.a.createElement("p",null,n.message):null,t?r.a.createElement("h3",null,"Loading..."):a.map((function(e){var t=e.id,a=e.urls;return r.a.createElement("div",{className:"containerFull"},r.a.createElement("div",{className:"containerHome"},r.a.createElement("div",{key:t,className:"imageGallery"},r.a.createElement(y,{src:a.small,alt:"image"})),r.a.createElement("div",{className:"containerTwo"},r.a.createElement("h3",null,"Total ",r.a.createElement(g.a,{icon:h.a})),r.a.createElement("h3",null,r.a.createElement(v,{icon:b.d,className:"like"})),r.a.createElement("h3",null,e.user.total_likes),r.a.createElement("h3",null,r.a.createElement(g.a,{icon:b.e,className:"photoIcon"})),r.a.createElement("h3",null,e.user.total_photos)),r.a.createElement("div",{className:"container3"},r.a.createElement("h2",null,e.user.name),r.a.createElement("div",{className:"new"},r.a.createElement("h3",{className:"thumbUp"},r.a.createElement(v,{icon:b.h})),r.a.createElement("h3",null,e.likes)),r.a.createElement("p",null,e.user.bio))))})))}}]),t}(n.Component),O=function(){var e=Object(n.useState)({title:"Change the world by being yourself",author:" Amy Poehler"}),t=Object(x.a)(e,2),a=t[0],c=t[1],l=[{title:"Every moment is a fresh beginning.",author:"T.S Eliot"},{title:"Never regret anything that made you smile.",author:"Mark Twain"},{title:"Die with memories, not dreams",author:"Unknown"},{title:"Aspire to inspire before we expire.",author:"Unknown"},{title:"Everything you can imagine is real",author:"Leonardo da Vinci"},{title:"Whatever you do, do it well.",author:"Walt Disney"},{title:"What we think, we become",author:"Buddha"},{title:"All limitations are self-imposed.",author:"Oliver Wendell Holmes"},{title:"Tough times never last but tough people do.",author:"Robert H. Schiuller"},{title:"Problems are not stop signs, they are guidelines.",author:"Robert H. Schiuller"},{title:"One day the people that don\u2019t even believe in you will tell everyone how they met you.",author:"Johnny Depp"},{title:"If I\u2019m gonna tell a real story, I\u2019m gonna start with my name.",author:"Kendrick Lamar"},{title:"If you tell the truth you don\u2019t have to remember anything.",author:"Mark Twain"}],o=Object(E.b)({opacity:1,marginTop:0,from:{opacity:0,marginTop:500},config:{duration:1e3}}),i=Object(E.b)({opacity:1,from:{opacity:0},config:{duration:2e3}});return r.a.createElement(E.a.div,{style:o},r.a.createElement("div",{className:"bg-green-200 pt-32 pb-16"},r.a.createElement("div",{className:"bg-gray-200 w-2/3 mx-auto rounded p-16"},r.a.createElement(E.a.div,{style:i},r.a.createElement("h1",{className:"text-3xl text-red-500"},a.title)),r.a.createElement("p",{className:"text-2xl text-right text-blue-400"},a.author),r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 p-2 rounded-full text-white",onClick:function(){return c(l[Math.floor(13*Math.random())])}},"New quotes"))))},k=a(9),C=function(e){var t=e.todo,a=e.index,n=e.completeTodo,c=e.deleteTodo;return r.a.createElement("div",{className:"container flex justify-between",style:{textDecoration:t.isCompleted?"line-through ":" "}},r.a.createElement("div",{className:"text-2xl"},t.text),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"text-2xl text-green-400",onClick:function(){return n(a)}},r.a.createElement(g.a,{icon:b.f})),r.a.createElement("button",{onClick:function(){return c(a)}},r.a.createElement(g.a,{className:"text-red-600 ml-8 text-2xl",icon:b.i})," ")))},S=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(x.a)(a,2),l=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&(t(l),o(""))}},r.a.createElement("input",{type:"text",value:l,className:"shadow appearance-none border border-green-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full",placeholder:"add something",onChange:function(e){return o(e.target.value)}}))};function T(){var e=Object(n.useState)([{text:"Add something",isCompleted:!1}]),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(E.b)({opacity:1,marginLeft:0,marginTop:0,from:{opacity:0,marginLeft:1e3,marginTop:1e3},config:{duration:1e3}}),o=function(e){var t=Object(k.a)(a);t[e].isCompleted=!0,c(t)},i=function(e){var t=Object(k.a)(a);t.splice(e,1),c(t)},u=function(){c([""])};return r.a.createElement(E.a.div,{style:l},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center mt-8 text-3xl mt-64"},"To do list"),r.a.createElement("div",{className:"container mx-auto w-1/3 mt-12 mb-64"},r.a.createElement(S,{addTodo:function(e){var t=[].concat(Object(k.a)(a),[{text:e}]);c(t)}}),r.a.createElement("h1",null,a.map((function(e,t){return r.a.createElement(C,{key:t,index:t,todo:e,completeTodo:o,deleteTodo:i,clearAll:u})}))),r.a.createElement("div",{className:"flex justify-center mt-10"},r.a.createElement("button",{className:"bg-red-500 rounded px-4 text-white",onClick:function(){return u()}},"Clear all")))))}var L=a(25),M=a(26);function D(){var e=Object(L.a)(["\n    color: ",";\n    text-align: center;\n    font-size: 5rem;\n  "]);return D=function(){return e},e}var A=function(){var e=Object(n.useState)(0),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("black"),o=Object(x.a)(l,2),i=o[0],u=o[1];Object(n.useEffect)((function(){u(a<0?"red":a>0?"green":"aqua")}));var m=M.a.div(D(),i);return r.a.createElement("div",{className:"flex bg-purple-400 h-screen"},r.a.createElement("div",{className:"bg-blue-500 w-2/3 py-16 m-auto"},r.a.createElement("h1",{className:"text-5xl uppercase text-center text-white font-serif"},"Counter"),r.a.createElement(m,null,a),r.a.createElement("div",{className:"flex justify-around "},r.a.createElement("button",{onClick:function(){c(a-1)},className:"bg-red-500 w-32 text-white rounded hover:bg-red-400 hover:rounded-full font-serif text-3xl"},"Remove"),r.a.createElement("button",{onClick:function(){c(a+1)},className:"bg-green-500 text-white w-32 rounded hover:bg-green-400 hover:rounded-full font-serif text-3xl"},"Add"))))},B=function(){var e=Object(n.useState)(1),t=Object(x.a)(e,2),c=t[0],l=t[1];return r.a.createElement("div",{className:"flex h-screen bg-blue-400"},r.a.createElement("div",{className:"mx-auto flex w-2/3"},r.a.createElement(g.a,{icon:b.a,className:"mr-2 text-5xl my-auto text-white hover:text-blue-500",onClick:function(){l(1!==c?c-1:5)}}),r.a.createElement("div",{className:"my-auto rounded-circle"},r.a.createElement("img",{src:a(56)("./image".concat(c,".jpg")),alt:"",className:"rounded-lg"})),r.a.createElement(g.a,{icon:b.b,className:"ml-2 text-5xl my-auto text-white hover:text-blue-500",onClick:function(){l(5!==c?c+1:1)}})))},F=a(24);function $(){var e=Object(L.a)(["\n    // background-color: ",";\n    background-color: red;\n    font-size: 1.5rem;\n\n    text-align: center;\n    padding: ",";\n    \n    border-radius: 0.5rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    color: black;\n  "]);return $=function(){return e},e}var I=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(x.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(""),s=Object(x.a)(m,2),d=s[0],p=s[1],f=Object(n.useState)(""),h=Object(x.a)(f,2),v=h[0],j=h[1],w=Object(n.useState)(""),y=Object(x.a)(w,2),N=(y[0],y[1],Object(n.useState)([{text:"",background:"",padding:"0rem"}])),O=Object(x.a)(N,2),k=O[0],C=O[1],S=Object(E.b)({marginTop:0,from:{marginTop:1e3},config:{duration:1e3}}),T=Object(E.b)({opacity:1,from:{opacity:0},delay:1e3,config:{duration:1e3}}),L=M.a.div($(),k.background,k.padding);Object(n.useEffect)((function(){var e=setTimeout((function(){return C({text:"field is required",background:"red",padding:"0.5rem"})}),3e3);return function(){return clearTimeout(e)}}),[]);return r.a.createElement("div",{className:"h-screen bg-blue-200 flex items-center font-serif"},r.a.createElement(E.a.div,{style:S,className:"w-2/5 mx-auto"},r.a.createElement(E.a.h1,{style:T,className:"bg-blue-800 text-white text-center text-2xl p-2 rounded-t-lg "},"TIP CALCULATOR"),r.a.createElement("div",{className:"rounded-b-lg bg-white"},r.a.createElement("form",{className:"mb-4 p-8"},r.a.createElement("label",{class:"block text-gray-700 text-lg font-bold mb-2",for:"howMuchYourBill"},"How Much Was Your Bill ?"),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"bg-blue-800 rounded mx-2 p-3"},r.a.createElement(g.a,{icon:b.c,className:" bg-contain text-4xl text-white mx-2"})),r.a.createElement("input",{className:"shadow appearance-none border w-full rounded  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"howMuchYourBill",name:"howMuchYourBill",type:"number",onChange:function(e){c(e.target.value)},placeholder:"How Much Was Your Bill ?"})),r.a.createElement(L,null,k.text),r.a.createElement("label",{class:"block text-gray-700 text-lg font-bold mb-2 mt-4",for:"howManyPeopleSharingTheBill"},"How Many People Sharing The Bill ?"),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"bg-blue-800 rounded mx-2 p-2"},r.a.createElement(g.a,{icon:b.j,className:" bg-contain text-4xl text-white mx-2"})),r.a.createElement("input",{className:"shadow appearance-none border w-full rounded  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"howManyPeopleSharingTheBill",name:"howManyPeopleSharingTheBill",type:"number",onChange:function(e){j(e.target.value)},placeholder:"How Many People Sharing The Bill ? ?"})),r.a.createElement("label",{class:"block text-gray-700 text-lg font-bold mb-2 mt-4",for:"choose"},"How Was Your Service"),r.a.createElement("select",{id:"choose",name:"choose",className:"w-full h-12",onChange:function(e){p(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0},"Choose..."),r.a.createElement("option",{value:"0.2"},"Great"),r.a.createElement("option",{value:"0.1"},"Good"),r.a.createElement("option",{value:"0.02"},"Bad")),r.a.createElement("button",{onClick:function(e){e.preventDefault(),""===a||null===a?C({text:"field is required",background:"red",padding:"0.5rem"}):(C({text:"",background:"transparent",padding:"0rem"}),u("Tip Amount for each $"+a*d/v))},className:"w-full bg-blue-800 text-white mt-8 text-3xl"},"Calculate")),r.a.createElement("div",{className:"text-center text-2xl"},r.a.createElement("h2",null,i)))))},H=function(e){var t=e.addGrocery,a=Object(n.useState)([]),c=Object(x.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)([{text:"",className:""}]),u=Object(x.a)(i,2),m=u[0],s=u[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l),o(""),l?(s({text:"Item added to the list",className:"bg-green-500 rounded text-white mb-8 p-2"}),setTimeout((function(){s({text:"",className:""})}),2e3)):(s({text:"Please write something",className:"bg-red-500 rounded text-white mb-8 p-2"}),setTimeout((function(){s({text:"",className:""})}),2e3))},className:"text-center mt-8"},r.a.createElement("h1",{className:m.className},m.text),r.a.createElement("input",{className:"w-full h-10 rounded pl-8 outline-none",type:"text",placeholder:"add grocery item",value:l,onChange:function(e){return o(e.target.value)}}))},U=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"bg-gray-500 h-screen"},r.a.createElement("h1",{className:"pt-16 text-center text-3xl text-white"},"Grocery List"),r.a.createElement("div",{className:"container mx-auto px-64"},r.a.createElement(H,{addGrocery:function(e){var t=[].concat(Object(k.a)(a),[{text:e}]);c(t)}}),a.map((function(e,t){return r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("h1",{className:"text-green-100 text-3xl text-center"},e.text),r.a.createElement("button",{onClick:function(){return function(e){var t=Object(k.a)(a);t.splice(e,1),c(t)}(t)}},r.a.createElement(g.a,{className:"text-red-500",icon:b.i})))})),r.a.createElement("button",{className:"bg-red-700 mt-10 text-3xl rounded-md px-2 text-white w-full",onClick:function(){c([])}},"clear Item")))},P=function(e){var t=e.addFormName,a=e.addFormCourse,c=(e.addFormAuthor,Object(n.useState)([])),l=Object(x.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)([]),m=Object(x.a)(u,2),s=m[0],d=m[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),a(s),i([]),d([])},className:"flex flex-col mx-auto"},r.a.createElement("div",{className:""},r.a.createElement("input",{type:"text",value:s,onChange:function(e){return d(e.target.value)}})))},_=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(x.a)(l,2),i=o[0],u=o[1];return r.a.createElement("div",{className:"h-screen bg-gray-100"},r.a.createElement(P,{addFormName:function(e){var t=[].concat(Object(k.a)(a),[{name:e}]);c(t)},addFormCourse:function(e){var t=[].concat(Object(k.a)(i),[{course:e}]);u(t)}}),r.a.createElement("div",{className:""},a.map((function(e){return r.a.createElement("h1",null,e.name)})),i.map((function(e){return r.a.createElement("h1",null,e.course)}))))};function G(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.default,null),r.a.createElement(I,null),r.a.createElement(B,null),r.a.createElement(A,null),r.a.createElement(O,null),r.a.createElement(T,null),r.a.createElement(U,null),r.a.createElement(_,null))}function W(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?")))}var Y=a(31),q=a.n(Y),R=a(43);function J(e){var t=Object(n.useState)([]),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(x.a)(l,2),i=o[0],u=o[1];function m(){return(m=Object(R.a)(q.a.mark((function t(){var a,n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c(n),u(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),[r,i]}function z(){var e=J("https://api.github.com/users"),t=Object(x.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-auto w-2/3"},r.a.createElement("input",{type:"text",className:"shadow appearance-none border border-green-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-2/3 mt-8",placeholder:"Add item"}),r.a.createElement("button",{className:"bg-green-600 p-2 rounded ml-2 text-white hover:bg-green-300"},"Add item"),r.a.createElement("button",{className:"bg-blue-400 ml-1 rounded-full p-2 text-white"},"Random User")),n?"Loading...":r.a.createElement("ul",{className:"flex flex-wrap justify-center"},a.map((function(e){var t=e.id,a=e.login,n=e.avatar_url,c=e.html_url;return r.a.createElement("li",{key:t,className:"m-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{alt:a,src:n,className:"w-48 rounded-full m-auto"}),r.a.createElement("h3",{className:"text-center"},a)))}))))}var X=function(){return r.a.createElement("div",{className:"text-center bg-blue-700 text-2xl text-white p-3 font-serif"},"Created by \xa9 Aleksandr Sekker 2020")},K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/gallery",component:G}),r.a.createElement(f.a,{path:"/home",component:N}),r.a.createElement(f.a,{path:"/contact",component:W}),r.a.createElement(f.a,{path:"/github",component:z})),r.a.createElement(X,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(K,null),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.c980044a.chunk.js.map