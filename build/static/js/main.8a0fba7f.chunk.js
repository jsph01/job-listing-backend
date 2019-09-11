(window["webpackJsonpjob-listing-site-frontend"]=window["webpackJsonpjob-listing-site-frontend"]||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),o=n.n(l),s=(n(31),n(8)),i=n(1),c=n(2),u=n(4),p=n(3),d=n(5),m=n(22),h=n(13),f=n(9),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav",style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(f.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(f.b,{className:"nav-link",to:"/jobs"},"Jobs"),this.props.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{className:"nav-link",to:"/profile"},"Profile"),r.a.createElement(f.b,{className:"nav-link",to:"/logout"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{className:"nav-link",to:"/signup"},"Signup"),r.a.createElement(f.b,{className:"nav-link",to:"/login"},"Login")))))}}]),t}(a.Component);var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"50% 50%"}},r.a.createElement("img",{src:"http://paradisevalleyseptic.com/wp-content/uploads/2017/09/Are-You-Using-the-Right-Plunger.jpg",alt:"plunger",style:{width:"100%"}}),r.a.createElement("h1",{style:{margin:"auto"}},"If you need someone for the job fast, you've come to the right place.")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{style:{margin:"2px"},className:"btn btn-lg btn-outline-success"},"view jobs"),r.a.createElement("button",{style:{margin:"2px"},className:"btn btn-lg btn-outline-success"},"Sign Up")))};function y(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var E={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:y,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=y();return e?JSON.parse(atob(e.split(".")[1])).user:null}};var v={signup:function(e,t){fetch("http://localhost:3001/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInfo:e})}).then(function(e){return e.json()}).then(function(e){e.token&&E.setToken(e.token),t(e.error)}).catch(console.log)},getUser:function(){return E.getUserFromToken()},logout:function(){E.removeToken()},login:function(e,t){return fetch("http://localhost:3001/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInfo:e})}).then(function(e){return e.json()}).then(function(e){if(e.token)E.setToken(e.token);else var n=!0;t(n)}).catch(console.log)}},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleChangeField=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value)),document.getElementById("field-username").setCustomValidity("")},n.handleSubmit=function(e){e.preventDefault(),v.login(n.state,function(e){if(e){var t=document.getElementById("field-username");t.setCustomValidity("the username or password is incorrect"),t.reportValidity()}else n.props.handleLogin(),n.props.history.push("/profile")})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"username:"," "),r.a.createElement("input",{type:"text",name:"username",id:"field-username",required:!0,value:this.state.username,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"password:"," "),r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleChangeField})),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(a.Component),j=n(25),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",password2:"",zipcode:"",firstName:"",lastName:"",portraitUrl:""},n.validatePassword=function(){var e=document.getElementById("field-password2");n.state.password!==n.state.password2?e.setCustomValidity("passwords don't match"):e.setCustomValidity("")},n.handleChangeField=function(e){var t=e.target.name;n.setState(Object(s.a)({},t,e.target.value),function(){switch(t){case"password":n.validatePassword();break;case"username":document.getElementById("field-username").setCustomValidity("");break;case"email":document.getElementById("field-email").setCustomValidity("")}})},n.handleSubmit=function(e){e.preventDefault(),n.setState({portraitUrl:j.Base64.encodeURI(n.state.portraitUrl)},function(){v.signup(n.state,function(e){if(e)if("ValidationError"===e.name){var t=Object.keys(e.errors)[0],a=document.getElementById("field-".concat(t));a.setCustomValidity("this ".concat(t," has already been taken")),a.reportValidity()}else console.log(e);else n.props.handleLogin(),n.props.history.push("/profile")})})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Signup Page"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"username:"," "),r.a.createElement("input",{type:"text",name:"username",id:"field-username",required:!0,value:this.state.username,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"email:"," "),r.a.createElement("input",{type:"email",name:"email",id:"field-email",required:!0,value:this.state.email,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"password:"," "),r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"confirm password:"," "),r.a.createElement("input",{type:"password",name:"password2",id:"field-password2",required:!0,value:this.state.password2,onChange:this.handleChangeField,onKeyUp:this.validatePassword})),r.a.createElement("div",null,r.a.createElement("label",null,"zipcode:"," "),r.a.createElement("input",{type:"text",name:"zipcode",pattern:"[0-9]{5}",required:!0,value:this.state.zipcode,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"first name:"," "),r.a.createElement("input",{type:"text",name:"firstName",required:!0,value:this.state.firstName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"last name:"," "),r.a.createElement("input",{type:"text",name:"lastName",required:!0,value:this.state.lastName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"profile image url:"," "),r.a.createElement("input",{type:"url",name:"portraitUrl",value:this.state.portraitUrl,onChange:this.handleChangeField})),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(a.Component);var C=function(e){return e.handleLogout(),r.a.createElement(h.a,{to:"/"})};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,editFields:null},n.handleChangeField=function(e){var t=S({},n.state.editFields);t[e.target.name]=e.target.value,"email"===e.target.name&&document.getElementById("field-email").setCustomValidity(""),n.setState({editFields:t})},n.handleEditOn=function(){n.setState({editMode:!0,editFields:{firstName:"",lastName:"",email:"",zipcode:"",portraitUrl:""}})},n.handleEditOff=function(){n.setState({editMode:!1,editFields:null})},n.handleSubmitEdit=function(e){e.preventDefault();var t=S({},n.state.editFields);Object.keys(t).forEach(function(e){""===t[e]&&delete t[e]}),fetch("http://localhost:3001/api/users/".concat(n.props.user.id),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({userInfo:t})}).then(function(e){return e.json()}).then(function(e){var t=e.error;if(t)if("ValidationError"===t.name){var a=Object.keys(t.errors)[0],r=document.getElementById("field-".concat(a));r.setCustomValidity("this ".concat(a," has already been taken")),r.reportValidity()}else console.log(t);else E.setToken(e.token),n.props.handleLogin(),n.setState({user:e.user}),n.handleEditOff()}).catch(console.log)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/api/users/".concat(this.props.user.id),{headers:{Authorization:"Bearer ".concat(E.getToken())}}).then(function(e){return e.json()}).then(function(t){return e.setState({user:t.user})}).catch(console.log)}},{key:"render",value:function(){return this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Hello ",this.state.user.firstName+" "+this.state.user.lastName),r.a.createElement("img",{src:this.state.user.portraitUrl,width:"256px",alt:"Profile"}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"username:"," "),r.a.createElement("span",null,this.state.user.username)),r.a.createElement("div",null,r.a.createElement("label",null,"email:"," "),r.a.createElement("span",null,this.state.user.email)),r.a.createElement("div",null,r.a.createElement("label",null,"zipcode:"," "),r.a.createElement("span",null,this.state.user.zipcode))),this.state.editMode?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleEditOff},"cancel edit"),r.a.createElement("form",{onSubmit:this.handleSubmitEdit},r.a.createElement("div",null,r.a.createElement("label",null,"email:"," "),r.a.createElement("input",{type:"email",name:"email",id:"field-email",value:this.state.editFields.email,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"zipcode:"," "),r.a.createElement("input",{type:"text",name:"zipcode",pattern:"[0-9]{5}",value:this.state.editFields.zipcode,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"first name:"," "),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.editFields.firstName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"last name:"," "),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.editFields.lastName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"profile image url:"," "),r.a.createElement("input",{type:"url",name:"portraitUrl",value:this.state.editFields.portraitUrl,onChange:this.handleChangeField})),r.a.createElement("input",{type:"submit",value:"submit"}))):r.a.createElement("button",{onClick:this.handleEditOn},"edit info")):r.a.createElement("h2",null,"Loading")}}]),t}(a.Component);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={postInfo:{title:"",kind:"offering",body:"",zipcode:""}},n.handleChangeField=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state.postInfo);t[e.target.name]=e.target.value,n.setState({postInfo:t})},n.handleSubmit=function(e){e.preventDefault(),fetch("http://localhost:3001/api/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({post:n.state.postInfo})}).then(function(e){return e.json()}).then(function(e){var t=e.post._id;n.props.addPost(e.post),n.props.history.push("/jobs/".concat(t))})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Create a job-listing"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Title:"," "),r.a.createElement("input",{required:!0,type:"text",name:"title",onChange:this.handleChangeField,value:this.state.postInfo.title,style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement("p",null,"Are you offering work or seeking it?:"," ",r.a.createElement("select",{type:"text",name:"kind",onChange:this.handleChangeField,value:this.state.postInfo.kind},r.a.createElement("option",null,"offering"),r.a.createElement("option",null,"seeking")))),r.a.createElement("div",null,r.a.createElement("section",null,"Message Body:"," "),r.a.createElement("textarea",{required:!0,type:"text",name:"body",onChange:this.handleChangeField,value:this.state.postInfo.body,style:{width:"100%"},rows:"15"})),r.a.createElement("div",null,r.a.createElement("p",null,"zipcode:"," ",r.a.createElement("input",{required:!0,pattern:"[0-9]{5}",type:"text",name:"zipcode",onChange:this.handleChangeField,value:this.state.postInfo.zipcode,size:"5",maxLength:"5"}))),r.a.createElement("input",{type:"submit",value:"post ad"})))}}]),t}(a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Jobs"),r.a.createElement("button",{onClick:function(){return e.props.history.push("/jobs/new")}},"create a new post"),r.a.createElement("ol",null,Object.keys(this.props.posts).map(function(t){var n=e.props.posts[t];return r.a.createElement("li",{key:t},r.a.createElement(f.b,{to:"/jobs/".concat(t)},n.title))})))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!n.props.isAuthor,reply:n.props.reply,newMessage:""},n.toggleExpand=function(){n.props.isAuthor&&n.setState({expanded:!n.state.expanded})},n.handleSubmit=function(e){e.preventDefault(),fetch("http://localhost:3001/api/replies",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({postId:n.props.postId,replyId:n.state.reply._id||null,reply:n.state.newMessage})}).then(function(e){return e.json()}).then(function(e){n.props.addReply({_id:e.reply._id,message:e.reply.messages[e.reply.messages.length-1]}),n.setState({newMessage:""})}).catch(console.log)},n.handleChange=function(e){return n.setState({newMessage:e.target.value})},n.handleDelete=function(e){e.preventDefault();var t=e.target.getAttribute("data-idx");fetch("http://localhost:3001/api/replies/".concat(n.props.reply._id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({messageIdx:t,postId:n.props.postId})}).then(function(e){return e.json()}).then(function(e){n.setState(function(e){var n=e.reply;return n.messages.splice(t,1),{reply:n}})}).catch(console.log)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"2px 0",border:"1px solid black",padding:"4px"}},r.a.createElement("div",null,this.props.isAuthor&&r.a.createElement("button",{onClick:this.toggleExpand},this.state.expanded?"-":"+"),this.state.expanded?this.props.isAuthor&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"  ","message history with:"," "),r.a.createElement("strong",null,this.props.reply.consumerUsername)):r.a.createElement("label",null,"  ",this.props.reply.consumerUsername)),this.state.expanded&&r.a.createElement("div",{style:{padding:"2%"}},this.props.reply.messages.map(function(t,n){return r.a.createElement("div",{key:t._id},!!n&&r.a.createElement("hr",null),r.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,r.a.createElement("strong",null,t.authorUsername,":"," "),r.a.createElement("span",null,t.body)),e.props.userUsername===t.authorUsername&&r.a.createElement("form",{"data-idx":n,onSubmit:e.handleDelete,style:{display:"inline"}},r.a.createElement("input",{type:"submit",value:"x"}))))}),r.a.createElement("br",null),r.a.createElement("form",{className:"pure-form",onSubmit:this.handleSubmit,style:{display:"grid",gridTemplateColumns:"90% 10%"}},r.a.createElement("input",{required:!0,type:"text",placeholder:"reply",style:{width:"100%"},onChange:this.handleChange,value:this.state.newMessage}),r.a.createElement("input",{type:"submit",value:"send"}))))}}]),t}(a.Component);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,body:""},n.addReply=function(e){var t=n.state.post.replies.findIndex(function(t){return t._id===e._id});-1===t&&(t=0),n.setState(function(n){var a=n.post;return a.replies[t]._id=e._id,a.replies[t].messages.push(e.message),{post:a}})},n.handleEditOn=function(){return n.setState(function(e){return{editMode:!0,body:e.post.body}})},n.handleEditOff=function(){return n.setState({editMode:!1,body:""})},n.handleChange=function(e){return n.setState({body:e.target.value})},n.submitDelete=function(e){e.preventDefault(),fetch("http://localhost:3001/api/posts/".concat(n.props.postId),{method:"DELETE",headers:{Authorization:"Bearer ".concat(E.getToken())}}).then(function(e){return e.json()}).then(function(){n.props.removePost(n.props.postId),n.props.history.push("/profile")}).catch(console.log)},n.submitEdit=function(e){e.preventDefault(),fetch("http://localhost:3001/api/posts/".concat(n.props.postId),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({postInfo:{body:n.state.body}})}).then(function(e){return e.json()}).then(function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state.post);t.body=e.post.body,n.setState({post:t,editMode:!1,body:""})}).catch(console.log)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.getToken(),n=t?{headers:{Authorization:"Bearer ".concat(t)}}:{};fetch("http://localhost:3001/api/posts/".concat(this.props.postId),n).then(function(e){return e.json()}).then(function(t){var n=!!e.props.user&&e.props.user.username===t.post.authorUsername;e.props.user&&!n&&0===t.post.replies.length&&t.post.replies.push({consumerUsername:e.props.user.username,messages:[]}),e.setState({post:t.post,isAuthor:n})}).catch(console.log)}},{key:"render",value:function(){var e=this,t=this.state.post;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h2",null,t.title),this.state.isAuthor&&r.a.createElement("span",{style:{margin:"auto 0"}},r.a.createElement("button",{onClick:this.handleEditOn},"edit"),r.a.createElement("form",{onSubmit:this.submitDelete,style:{display:"inline"}},r.a.createElement("input",{type:"submit",value:"delete"})))),r.a.createElement("label",null,"Posted by:"," "),r.a.createElement("strong",null,t.authorUsername),this.state.editMode?r.a.createElement("div",{style:{margin:"1em 0"}},r.a.createElement("form",{onSubmit:this.submitEdit},r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.body,style:{width:"100%"},rows:"15"}),r.a.createElement("button",{type:"button",onClick:this.handleEditOff},"cancel"),r.a.createElement("input",{type:"submit",value:"save changes"}))):r.a.createElement("p",null,t.body),r.a.createElement("p",null,"zipcode:"," ",r.a.createElement("strong",null,t.zipcode)),t.replies.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"replies"),t.replies.map(function(n,a){return r.a.createElement(N,{key:"reply_".concat(a),userUsername:e.props.user.username,isAuthor:e.state.isAuthor,reply:n,postId:t._id,addReply:e.addReply})})):e.props.user?e.state.isAuthor?r.a.createElement("i",null,"you have no repies to this post yet."):void 0:r.a.createElement("button",{onClick:function(){e.props.history.push("/signup")}},"Sign Up to reply to this post!")):r.a.createElement("h2",null,"Loading...")}}]),t}(a.Component);n(36);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function A(e){var t=e.cb,n=Object(m.a)(e,["cb"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){var n=t(e);return n.props.user?n:r.a.createElement(h.a,{to:"/login"})}}))}var z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:v.getUser()||null,posts:{}},n.addPost=function(e){var t=e._id;delete e._id;var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state.posts);a[t]=e,n.setState({posts:a})},n.removePost=function(e){n.setState(function(t){var a=n.state.posts;return delete a[e],{posts:a}})},n.handleLogin=function(){var e=v.getUser()||null;n.setState({user:e})},n.handleLogout=function(){v.logout(),n.setState({user:null})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/api/posts").then(function(e){return e.json()}).then(function(t){var n={};t.posts.forEach(function(e){var t=e._id;delete e._id,n[t]=e}),e.setState({posts:n})}).catch(console.log)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(g,{user:this.state.user}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(b,e)}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(O,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(w,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(h.b,{exact:!0,path:"/logout",render:function(t){return r.a.createElement(C,{handleLogout:e.handleLogout})}}),r.a.createElement(h.b,{exact:!0,path:"/jobs",render:function(t){return r.a.createElement(I,{history:t.history,posts:e.state.posts})}}),r.a.createElement(A,{exact:!0,path:"/jobs/new",cb:function(t){return r.a.createElement(F,{history:t.history,user:e.state.user,addPost:e.addPost})}}),r.a.createElement(h.b,{exact:!0,path:"/jobs/:id",render:function(t){return r.a.createElement(D,{history:t.history,user:e.state.user,postId:t.match.params.id,removePost:e.removePost})}}),r.a.createElement(A,{exact:!0,path:"/profile",user:this.state.user,cb:function(t){return r.a.createElement(P,{user:e.state.user,handleLogin:e.handleLogin})}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.8a0fba7f.chunk.js.map