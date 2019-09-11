(window["webpackJsonpjob-listing-site-frontend"]=window["webpackJsonpjob-listing-site-frontend"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),s=a.n(l),o=(a(29),a(9)),i=a(1),c=a(2),u=a(4),m=a(3),p=a(5),d=a(21),h=a(13),b=a(6),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark sticky-top",style:{position:"fixed",top:0,left:0,width:"100%"}},r.a.createElement(b.b,{className:"navbar-brand",to:"/"},"WorkSpree"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement(b.b,{className:"nav-link",to:"/jobs"},"Jobs"),this.props.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{className:"nav-link",to:"/jobs/new"},"Advertise"),r.a.createElement(b.b,{className:"nav-link",to:"/profile"},"Profile"),r.a.createElement(b.b,{className:"nav-link",to:"/logout"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{className:"nav-link",to:"/signup"},"Signup"),r.a.createElement(b.b,{className:"nav-link",to:"/login"},"Login")))))}}]),t}(n.Component);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{marginTop:32,textAlign:"center"}},"WorkSpree"),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"50% 50%"}},r.a.createElement("img",{src:"http://paradisevalleyseptic.com/wp-content/uploads/2017/09/Are-You-Using-the-Right-Plunger.jpg",alt:"plunger",style:{width:"100%"}}),r.a.createElement("h1",{style:{margin:"auto"}},"If you need someone for the job fast, you've come to the right place.")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(b.b,{className:"btn btn-lg btn-outline-success",to:"/jobs",style:{margin:"2px"}}," view jobs "),r.a.createElement(b.b,{className:"btn btn-lg btn-outline-success",to:"/signup",style:{margin:"2px"}}," Sign Up ")))};function y(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var E={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:y,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=y();return e?JSON.parse(atob(e.split(".")[1])).user:null}};var v={signup:function(e,t){fetch("http://localhost:3001/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInfo:e})}).then(function(e){return e.json()}).then(function(e){e.token&&E.setToken(e.token),t(e.error)}).catch(console.log)},getUser:function(){return E.getUserFromToken()},logout:function(){E.removeToken()},login:function(e,t){return fetch("http://localhost:3001/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInfo:e})}).then(function(e){return e.json()}).then(function(e){if(e.token)E.setToken(e.token);else var a=!0;t(a)}).catch(console.log)}},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChangeField=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value)),document.getElementById("field-username").setCustomValidity("")},a.handleSubmit=function(e){e.preventDefault(),v.login(a.state,function(e){if(e){var t=document.getElementById("field-username");t.setCustomValidity("the username or password is incorrect"),t.reportValidity()}else a.props.handleLogin(),a.props.history.push("/profile")})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{textAlign:"center",margin:"32px 0"}},"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"username:"," "),r.a.createElement("input",{type:"text",name:"username",id:"field-username",required:!0,value:this.state.username,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"password:"," "),r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleChangeField})),r.a.createElement("div",{style:{justifyContent:"center",margin:"16px 0"}},r.a.createElement("input",{className:"btn btn-success",type:"submit",value:"submit"}))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",password2:"",zipcode:"",firstName:"",lastName:"",portraitUrl:""},a.validatePassword=function(){var e=document.getElementById("field-password2");a.state.password!==a.state.password2?e.setCustomValidity("passwords don't match"):e.setCustomValidity("")},a.handleChangeField=function(e){var t=e.target.name;a.setState(Object(o.a)({},t,e.target.value),function(){switch(t){case"password":a.validatePassword();break;case"username":document.getElementById("field-username").setCustomValidity("");break;case"email":document.getElementById("field-email").setCustomValidity("")}})},a.handleSubmit=function(e){e.preventDefault(),a.setState({portraitUrl:a.state.portraitUrl},function(){v.signup(a.state,function(e){if(e)if("ValidationError"===e.name){var t=Object.keys(e.errors)[0],n=document.getElementById("field-".concat(t));n.setCustomValidity("this ".concat(t," has already been taken")),n.reportValidity()}else console.log(e);else a.props.handleLogin(),a.props.history.push("/jobs/new")})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Signup to get it done"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"username:"," "),r.a.createElement("input",{type:"text",name:"username",id:"field-username",required:!0,value:this.state.username,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"email:"," "),r.a.createElement("input",{type:"email",name:"email",id:"field-email",required:!0,value:this.state.email,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"password:"," "),r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"confirm password:"," "),r.a.createElement("input",{type:"password",name:"password2",id:"field-password2",required:!0,value:this.state.password2,onChange:this.handleChangeField,onKeyUp:this.validatePassword})),r.a.createElement("div",null,r.a.createElement("label",null,"zipcode:"," "),r.a.createElement("input",{type:"text",name:"zipcode",pattern:"[0-9]{5}",required:!0,value:this.state.zipcode,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"first name:"," "),r.a.createElement("input",{type:"text",name:"firstName",required:!0,value:this.state.firstName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"last name:"," "),r.a.createElement("input",{type:"text",name:"lastName",required:!0,value:this.state.lastName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"profile image url:"," "),r.a.createElement("input",{type:"url",name:"portraitUrl",value:this.state.portraitUrl,onChange:this.handleChangeField})),r.a.createElement("div",{style:{justifyContent:"center",margin:"16px 0"}},r.a.createElement("input",{className:"btn btn-success",type:"submit",value:"submit"}))))}}]),t}(n.Component);var w=function(e){return e.handleLogout(),r.a.createElement(h.a,{to:"/"})};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,editFields:null},a.handleChangeField=function(e){var t=k({},a.state.editFields);t[e.target.name]=e.target.value,"email"===e.target.name&&document.getElementById("field-email").setCustomValidity(""),a.setState({editFields:t})},a.handleEditOn=function(){a.setState({editMode:!0,editFields:{firstName:"",lastName:"",email:"",zipcode:"",portraitUrl:""}})},a.handleEditOff=function(){a.setState({editMode:!1,editFields:null})},a.handleSubmitEdit=function(e){e.preventDefault();var t=k({},a.state.editFields);Object.keys(t).forEach(function(e){""===t[e]&&delete t[e]}),fetch("http://localhost:3001/api/users/".concat(a.props.user.id),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({userInfo:t})}).then(function(e){return e.json()}).then(function(e){var t=e.error;if(t)if("ValidationError"===t.name){var n=Object.keys(t.errors)[0],r=document.getElementById("field-".concat(n));r.setCustomValidity("this ".concat(n," has already been taken")),r.reportValidity()}else console.log(t);else E.setToken(e.token),a.props.handleLogin(),a.setState({user:e.user}),a.handleEditOff()}).catch(console.log)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/api/users/".concat(this.props.user.id),{headers:{Authorization:"Bearer ".concat(E.getToken())}}).then(function(e){return e.json()}).then(function(t){return e.setState({user:t.user})}).catch(console.log)}},{key:"render",value:function(){var e=this;return this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Hello ",this.state.user.firstName+" "+this.state.user.lastName),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"25% 75%"}},r.a.createElement("div",{className:"card",style:{margin:"0 8px",textAlign:"center"}},r.a.createElement("img",{className:"card-img-top",src:this.state.user.portraitUrl,width:"256px",alt:"Profile",style:{margin:"auto"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,r.a.createElement("label",null,"username:\xa0"),r.a.createElement("strong",null,this.state.user.username)),r.a.createElement("div",null,r.a.createElement("label",null,"email:\xa0"),r.a.createElement("strong",null,this.state.user.email)),r.a.createElement("div",null,r.a.createElement("label",null,"zipcode:\xa0"),r.a.createElement("strong",null,this.state.user.zipcode)),r.a.createElement("div",null,r.a.createElement("label",null,"number of posts:\xa0"),r.a.createElement("strong",null,this.state.user.posts.length)),!this.state.editMode&&r.a.createElement("button",{className:"btn btn-outline-info btn-sm",onClick:this.handleEditOn},"edit info"))),r.a.createElement("div",{style:{margin:"0 8px"}},r.a.createElement("h4",null,"My Posts"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Job Title"),r.a.createElement("th",{scope:"col"},"Zipcode"),r.a.createElement("th",{scope:"col"},"Date Posted"))),r.a.createElement("tbody",null,Object.keys(this.state.user.posts).map(function(t,a){var n=e.state.user.posts[t],l=new Date(n.createdAt),s="".concat(l.getMonth(),"/").concat(l.getDate(),"/").concat(l.getFullYear());return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,r.a.createElement(b.b,{to:"/jobs/".concat(t)},n.title)),r.a.createElement("td",null,r.a.createElement("section",{to:"/jobs/".concat(t)},n.zipcode)),r.a.createElement("td",null,r.a.createElement("section",{to:"/jobs/".concat(t)},s)))}))))),this.state.editMode&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmitEdit},r.a.createElement("div",null,r.a.createElement("label",null,"email:"," "),r.a.createElement("input",{type:"email",name:"email",id:"field-email",value:this.state.editFields.email,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"zipcode:"," "),r.a.createElement("input",{type:"text",name:"zipcode",pattern:"[0-9]{5}",value:this.state.editFields.zipcode,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"first name:"," "),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.editFields.firstName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"last name:"," "),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.editFields.lastName,onChange:this.handleChangeField})),r.a.createElement("div",null,r.a.createElement("label",null,"profile image url:"," "),r.a.createElement("input",{type:"url",name:"portraitUrl",value:this.state.editFields.portraitUrl,onChange:this.handleChangeField})),r.a.createElement("div",{style:{margin:"16px 40%"}},r.a.createElement("input",{className:"btn btn-success",type:"submit",value:"submit"}),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.handleEditOff,type:"button"},"cancel")))),r.a.createElement("h5",{style:{marginTop:12}},"Replies")):r.a.createElement("h2",null,"Loading")}}]),t}(n.Component);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={postInfo:{title:"",kind:"offering",body:"",zipcode:""}},a.handleChangeField=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state.postInfo);t[e.target.name]=e.target.value,a.setState({postInfo:t})},a.handleSubmit=function(e){e.preventDefault(),fetch("http://localhost:3001/api/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({post:a.state.postInfo})}).then(function(e){return e.json()}).then(function(e){var t=e.post._id;a.props.addPost(e.post),a.props.history.push("/jobs/".concat(t))})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Create a job-listing"),r.a.createElement("form",{className:"post-form",style:{margin:"0"},onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-title"},"Title:\xa0"),r.a.createElement("input",{className:"form-control",id:"input-title",required:!0,type:"text",name:"title",onChange:this.handleChangeField,value:this.state.postInfo.title,style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement("p",null,"Are you offering work or seeking it?:\xa0\xa0",r.a.createElement("select",{name:"kind",onChange:this.handleChangeField,value:this.state.postInfo.kind},r.a.createElement("option",null,"offering"),r.a.createElement("option",null,"seeking")))),r.a.createElement("div",null,r.a.createElement("section",{htmlFor:"post-body"},"Message Body:\xa0"),r.a.createElement("textarea",{className:"form-control",id:"post-body",required:!0,type:"text",name:"body",onChange:this.handleChangeField,value:this.state.postInfo.body,style:{width:"100%"},rows:"10"})),r.a.createElement("div",{style:{marginTop:"1em"}},r.a.createElement("label",{htmlFor:"post-zipcode"},"zipcode:\xa0"),r.a.createElement("input",{id:"post-zipcode",required:!0,pattern:"[0-9]{5}",type:"text",name:"zipcode",onChange:this.handleChangeField,value:this.state.postInfo.zipcode,size:"5",maxLength:"5"})),r.a.createElement("div",{style:{justifyContent:"flex-start",margin:"16px 0"}},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"post ad"}))))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Jobs"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Job Title"),r.a.createElement("th",{scope:"col"},"Zipcode"),r.a.createElement("th",{scope:"col"},"Written by"),r.a.createElement("th",{scope:"col"},"Date Posted"))),r.a.createElement("tbody",null,Object.keys(this.props.posts).map(function(t,a){var n=e.props.posts[t],l=new Date(n.createdAt),s="".concat(l.getMonth(),"/").concat(l.getDate(),"/").concat(l.getFullYear());return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,r.a.createElement(b.b,{to:"/jobs/".concat(t)},n.title)),r.a.createElement("td",null,r.a.createElement("section",{to:"/jobs/".concat(t)},n.zipcode)),r.a.createElement("td",null,r.a.createElement("section",{to:"/jobs/".concat(t)},n.authorUsername)),r.a.createElement("td",null,r.a.createElement("section",{to:"/jobs/".concat(t)},s)))}))))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!a.props.isAuthor,reply:a.props.reply,newMessage:""},a.toggleExpand=function(){a.props.isAuthor&&a.setState({expanded:!a.state.expanded})},a.handleSubmit=function(e){e.preventDefault(),fetch("http://localhost:3001/api/replies",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({postId:a.props.postId,replyId:a.state.reply._id||null,reply:a.state.newMessage})}).then(function(e){return e.json()}).then(function(e){a.props.addReply({_id:e.reply._id,message:e.reply.messages[e.reply.messages.length-1]}),a.setState({newMessage:""})}).catch(console.log)},a.handleChange=function(e){return a.setState({newMessage:e.target.value})},a.handleDelete=function(e){e.preventDefault();var t=e.target.getAttribute("data-idx");fetch("http://localhost:3001/api/replies/".concat(a.props.reply._id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({messageIdx:t,postId:a.props.postId})}).then(function(e){return e.json()}).then(function(e){a.setState(function(e){var a=e.reply;return a.messages.splice(t,1),{reply:a}})}).catch(console.log)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"2px 0",border:"1px solid darkgray",borderRadius:4,padding:"4px"}},r.a.createElement("div",null,this.props.isAuthor&&(this.state.expanded?r.a.createElement("button",{style:{padding:0,width:"1em",height:"1em",lineHeight:0,display:"inline"},className:"btn btn-sm btn-outline-secondary",onClick:this.toggleExpand},r.a.createElement("i",{className:"fa fa-minus-square-o","aria-hidden":"true"})):r.a.createElement("button",{style:{padding:0,width:"1em",height:"1em",lineHeight:0,display:"inline"},className:"btn btn-sm btn-outline-success",onClick:this.toggleExpand},r.a.createElement("i",{className:"fa fa-plus-square-o","aria-hidden":"true"}))),this.state.expanded?this.props.isAuthor&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"\xa0message history with:\xa0"),r.a.createElement("strong",null,this.props.reply.consumerUsername)):r.a.createElement("label",null,"\xa0",this.props.reply.consumerUsername)),this.state.expanded&&r.a.createElement("div",{style:{padding:"2%"}},this.props.reply.messages.map(function(t,a){return r.a.createElement("div",{key:t._id},!!a&&r.a.createElement("hr",null),r.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,r.a.createElement("strong",null,t.authorUsername,":\xa0"),r.a.createElement("span",null,t.body)),e.props.userUsername===t.authorUsername&&r.a.createElement("form",{"data-idx":a,onSubmit:e.handleDelete,style:{display:"inline"}},r.a.createElement("button",{className:"btn btn-sm btn-danger"},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))))}),r.a.createElement("br",null),r.a.createElement("form",{className:"pure-form",onSubmit:this.handleSubmit,style:{display:"grid",gridTemplateColumns:"90% 10%"}},r.a.createElement("input",{required:!0,type:"text",placeholder:"reply",style:{width:"100%"},onChange:this.handleChange,value:this.state.newMessage}),r.a.createElement("input",{className:"btn btn-success",type:"submit",value:"send"}))))}}]),t}(n.Component);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,body:""},a.addReply=function(e){var t=a.state.post.replies.findIndex(function(t){return t._id===e._id});-1===t&&(t=0),a.setState(function(a){var n=a.post;return n.replies[t]._id=e._id,n.replies[t].messages.push(e.message),{post:n}})},a.handleEditOn=function(){return a.setState(function(e){return{editMode:!0,body:e.post.body}})},a.handleEditOff=function(){return a.setState({editMode:!1,body:""})},a.handleChange=function(e){return a.setState({body:e.target.value})},a.submitDelete=function(e){e.preventDefault(),fetch("http://localhost:3001/api/posts/".concat(a.props.postId),{method:"DELETE",headers:{Authorization:"Bearer ".concat(E.getToken())}}).then(function(e){return e.json()}).then(function(){a.props.removePost(a.props.postId),a.props.history.push("/profile")}).catch(console.log)},a.submitEdit=function(e){e.preventDefault(),fetch("http://localhost:3001/api/posts/".concat(a.props.postId),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify({postInfo:{body:a.state.body}})}).then(function(e){return e.json()}).then(function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state.post);t.body=e.post.body,a.setState({post:t,editMode:!1,body:""})}).catch(console.log)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.getToken(),a=t?{headers:{Authorization:"Bearer ".concat(t)}}:{};fetch("http://localhost:3001/api/posts/".concat(this.props.postId),a).then(function(e){return e.json()}).then(function(t){var a=!!e.props.user&&e.props.user.username===t.post.authorUsername;e.props.user&&!a&&0===t.post.replies.length&&t.post.replies.push({consumerUsername:e.props.user.username,messages:[]}),e.setState({post:t.post,isAuthor:a})}).catch(console.log)}},{key:"render",value:function(){var e=this,t=this.state.post;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h2",null,t.title),this.state.isAuthor&&r.a.createElement("span",{style:{margin:"auto 0",width:250}},r.a.createElement("button",{className:"btn btn-sm btn-info",onClick:this.handleEditOn,style:{borderTopRightRadius:0,borderBottomRightRadius:0}},"edit"),r.a.createElement("form",{onSubmit:this.submitDelete,style:{display:"inline"}},r.a.createElement("input",{className:"btn btn-sm btn-danger",type:"submit",value:"delete",style:{borderTopLeftRadius:0,borderBottomLeftRadius:0}})))),r.a.createElement("label",null,"Posted by:\xa0"),r.a.createElement("strong",null,t.authorUsername),this.state.editMode?r.a.createElement("div",{style:{margin:"1em 0"}},r.a.createElement("form",{onSubmit:this.submitEdit},r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.body,style:{width:"100%"},rows:"15"}),r.a.createElement("button",{className:"btn btn-info",style:{marginRight:4},type:"button",onClick:this.handleEditOff},"cancel"),r.a.createElement("input",{className:"btn btn-info",style:{marginLeft:4},type:"submit",value:"save changes"}))):r.a.createElement("p",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.body),r.a.createElement("p",null,"zipcode:\xa0",r.a.createElement("strong",null,t.zipcode)),t.replies.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"replies"),t.replies.map(function(a,n){return r.a.createElement(F,{key:"reply_".concat(n),userUsername:e.props.user.username,isAuthor:e.state.isAuthor,reply:a,postId:t._id,addReply:e.addReply})})):e.props.user?e.state.isAuthor?r.a.createElement("i",null,"you have no replies to this post yet."):void 0:r.a.createElement("button",{onClick:function(){e.props.history.push("/signup")}},"Sign Up to reply to this post!")):r.a.createElement("h2",null,"Loading...")}}]),t}(n.Component);a(35);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){var t=e.cb,a=Object(d.a)(e,["cb"]);return r.a.createElement(h.b,Object.assign({},a,{render:function(e){var a=t(e);return a.props.user?a:r.a.createElement(h.a,{to:"/signup"})}}))}var U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:v.getUser()||null,posts:{}},a.addPost=function(e){var t=e._id;delete e._id;var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state.posts);n[t]=e,a.setState({posts:n})},a.removePost=function(e){a.setState(function(t){var n=a.state.posts;return delete n[e],{posts:n}})},a.handleLogin=function(){var e=v.getUser()||null;a.setState({user:e})},a.handleLogout=function(){v.logout(),a.setState({user:null})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/api/posts").then(function(e){return e.json()}).then(function(t){var a={};t.posts.forEach(function(e){var t=e._id;delete e._id,a[t]=e}),e.setState({posts:a})}).catch(console.log)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null,r.a.createElement(f,{user:this.state.user}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(O,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(j,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(h.b,{exact:!0,path:"/logout",render:function(t){return r.a.createElement(w,{handleLogout:e.handleLogout})}}),r.a.createElement(h.b,{exact:!0,path:"/jobs",render:function(t){return r.a.createElement(P,{history:t.history,posts:e.state.posts})}}),r.a.createElement(A,{exact:!0,path:"/jobs/new",cb:function(t){return r.a.createElement(x,{history:t.history,user:e.state.user,addPost:e.addPost})}}),r.a.createElement(h.b,{exact:!0,path:"/jobs/:id",render:function(t){return r.a.createElement(D,{history:t.history,user:e.state.user,postId:t.match.params.id,removePost:e.removePost})}}),r.a.createElement(A,{exact:!0,path:"/profile",user:this.state.user,cb:function(t){return r.a.createElement(S,{user:e.state.user,handleLogin:e.handleLogin})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.b62b3588.chunk.js.map