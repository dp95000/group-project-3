(this.webpackJsonpmap=this.webpackJsonpmap||[]).push([[0],{159:function(e,a,t){},290:function(e,a,t){e.exports=t.p+"static/media/billboard-icon.25a9bf9a.png"},291:function(e,a,t){e.exports=t.p+"static/media/billboard-bg.18e4dc8b.jpg"},295:function(e,a,t){e.exports=t(659)},300:function(e,a,t){},535:function(e,a){},537:function(e,a){},545:function(e,a){},547:function(e,a){},587:function(e,a){},588:function(e,a){},659:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),m=t(107),c=t.n(m);t(300),t(159);function i(){for(var e=document.getElementsByClassName("collapsible"),a=0;a<e.length;a++)e[a].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}))}function s(){return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns small-6 medium-6"},n.a.createElement("div",{id:"logo"},n.a.createElement("p",null,"Billboard Tracking System"))),n.a.createElement("div",{className:"columns small-6 medium-6"},n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"hamburger-container collapsible",onClick:i},n.a.createElement("ul",{className:"hamburger"},n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null))),n.a.createElement("ul",{id:"menu"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"/about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"/contact"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"/login"},"Login"))))))))}function o(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"copyright"},n.a.createElement("p",null,"\xa9 2020 Billboard Inventory Management System")))}var r=t(292),d=t(45),u=t(110),E=t(77),b=t.n(E);t(221).config();var p=new(0,t(660).ApplicationSession)({clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_KEY:"AIzaSyANuuGoJX9EpDbJjwlsaGT0mhi0JYsBkJE"}).clientId,clientSecret:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_KEY:"AIzaSyANuuGoJX9EpDbJjwlsaGT0mhi0JYsBkJE"}).clientSecret}),N=function(){return b.a.get('https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=hDjrQ0XMnsEaMOK3jHMnJEj7Z_-gPJKdPF7eWFoVTcueAE7MOBQWqPS0-mk5D2oq23uZgDsOxV45Zqdc3h-rx_xprkdFgyTcI6zbcZaTVOsF69GYOP6-6aKE3tF2609bfzI82iYwpHWEVcBvcbLt8w..&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[\n  {\n    "geometry":{\n "x": -75.165222,\n  "y": 39.952583\n    }\n  }\n]&studyAreasOptions={\n  "areaType":"RingBuffer",\n  "bufferUnits":"esriMiles",\n  "bufferRadii":[1]\n}&dataCollections=["KeyGlobalFacts", "KeyUSFacts"]',{authentication:p})};function v(){console.log("i was clicked!"),N().then((function(e){console.log(e)}),(function(e){console.log(e)}))}function h(){return n.a.createElement("div",null,n.a.createElement("div",{className:"demographics-table"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Selected City:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,"Philadelphia"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Total Population:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"totPopVal"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Total Male Population:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"totMalesVal"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Total Female Population:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"totFemalesVal"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Total Households:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"totHHVal"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Median Household Income:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"medHincVal"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Per Capita Income:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"pciVal"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("strong",null,n.a.createElement("p",null,"Diversity Index:"))),n.a.createElement("div",{className:"columns medium-6 cell-output"},n.a.createElement("p",null,n.a.createElement("span",{id:"divIndxVal"}))))))}var g=function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Choose up to three cities for your demographics search"),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},"Philadelphia, PA")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},"Wilmington, DE")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},"Trenton, NJ")),n.a.createElement("button",{id:"demoBtn",type:"button",className:"button",onClick:v},"Get Demographics"))};var f=Object(u.withScriptjs)(Object(u.withGoogleMap)((function(){return n.a.createElement(u.GoogleMap,{defaultZoom:10,defaultCenter:{lat:39.952583,lng:-75.165222}})})));function y(){return n.a.createElement("div",null,n.a.createElement("div",{className:"map_contain"},n.a.createElement("div",{style:{height:"60vh"}},n.a.createElement(f,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyANuuGoJX9EpDbJjwlsaGT0mhi0JYsBkJE"),loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"100%"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}})}))),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-6 left-side"},n.a.createElement(g,null),n.a.createElement(h,null)),n.a.createElement("div",{className:"columns medium-6 right-side"},n.a.createElement("h2",null,"Our Custom Billboard Tracking System"),n.a.createElement("p",null,"Use our Custom billboard Inventory Management system to view locations of our available billboard signs.  If you are a business owner, click the button to the left to get detailed demographic information for the Philadelphia area and see which advertising markets are right for you.")))))}var C=t(290),k=t.n(C);function w(){return n.a.createElement("div",null,n.a.createElement("section",{id:"content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-12",id:"about"},n.a.createElement("img",{className:"img-center",alt:"billboard",src:k.a}),n.a.createElement("h3",null,"Our Custom Billboard Tracking System"),n.a.createElement("p",null,"Our billboard tracking system allows business owners in the Tri-State area see which billboards are available to rent, sizes, and locations.  In addition, our special application also provides a breakdown of local demographics, which we believe is an important factor to take into account when considering an outdoor advertising campaign.")))))}t(514);function _(){return n.a.createElement("div",null,n.a.createElement("section",{id:"content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-12",id:"contact"},n.a.createElement("h3",null,"Contact Us"),n.a.createElement("p",null,"If you have any questions about this site or the services we offer, please don't hesitate to reach out to us."),n.a.createElement("br",null),n.a.createElement("form",{id:"contact-form"},n.a.createElement("input",{id:"senderName",type:"text",placeholder:"Name"}),n.a.createElement("input",{id:"senderEmail",type:"email",placeholder:"Email"}),n.a.createElement("textarea",{id:"senderMessage",rows:"4",cols:"50",placeholder:"Comments"}),n.a.createElement("button",{type:"submit",id:"sendform"},"Submit Form"))))))}function S(e){alert("login attempt");var a,t,l=document.querySelector("input#email-input"),n=document.querySelector("input#password-input"),m={email:l.value.trim(),password:n.value.trim()};m.email&&m.password&&(a=m.email,t=m.password,b.a.post("/api/login",{email:a,password:t}).then((function(){window.location.replace("/dashboard")})).catch(c),l.value="",n.value="");function c(e){document.querySelector("#alert .msg")&&document.querySelector("#alert .msg").text(e.responseJSON),document.querySelector("#alert")&&document.querySelector("#alert").fadeIn(500)}}t(647);function D(){return n.a.createElement("div",null,n.a.createElement("section",{id:"content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns medium-12",id:"login"},n.a.createElement("h2",null,"Dashboard Login"),n.a.createElement("br",null),n.a.createElement("form",{className:"login",id:"dashboard-form"},n.a.createElement("input",{type:"email",className:"form-control",id:"email-input",placeholder:"Email"}),n.a.createElement("input",{type:"password",className:"form-control",id:"password-input",placeholder:"Password"}),n.a.createElement("button",{type:"button",onClick:S,id:"sendform"},"Login"))))))}var O=t(63),x=t(108),T=t(109);function B(){document.getElementById("billboard_modal").style.display="none"}function I(){var e=Object(l.useState)({}),a=Object(T.a)(e,2),t=a[0],m=a[1],c=function(e){m(Object(x.a)({},t,Object(O.a)({},e.target.id,e.target.value)))};return console.log("fields updated",t),n.a.createElement("div",null,n.a.createElement("div",{id:"billboard_modal",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("span",{id:"close_btn",onClick:B,className:"close"},"\xd7"),n.a.createElement("h1",null,"Add and Edit Billboard Locations"),n.a.createElement("form",{id:"dashboard-form"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Coordinates - Lat:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"lat",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Coordinates - Lon:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"lon",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Location:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"location",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Size:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"size",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Type:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("select",{id:"type"},n.a.createElement("option",{value:"Static"},"Static"),n.a.createElement("option",{value:"Digital"},"Digital"),"onChange=",c," ")),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Available:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("select",{id:"type"},n.a.createElement("option",{value:"Yes"},"Yes"),n.a.createElement("option",{value:"No"},"No"),"onChange=",c)),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"No. Of Sides:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("select",{id:"type"},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),"onChange=",c)),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Sign ID Number:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"sign_id",type:"text",onChange:c}))),n.a.createElement("p",null,"\xa0"),n.a.createElement("button",{type:"submit",className:"btn btn-default",id:"sendform",onClick:function(e){e.preventDefault(),console.log("Submitted Form:",t)}},"Save")))))}function P(){document.getElementById("client_modal").style.display="none"}function A(){var e=Object(l.useState)([]),a=Object(T.a)(e,2),t=a[0],m=a[1],c=function(e){m(Object(x.a)({},t,Object(O.a)({},e.target.id,e.target.value)))};return console.log("fields updated:",t),n.a.createElement("div",null,n.a.createElement("div",{id:"client_modal",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("span",{id:"close_btn",onClick:P,className:"close"},"\xd7"),n.a.createElement("h1",null,"Add and Edit Customers"),n.a.createElement("form",{id:"dashboard-form"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"columns small-12 medium-6 label"},"First Name:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"fname",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Last Name:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"lname",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Business Name:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"business_name",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Billing Address:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"address",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Phone:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"phone",type:"tel",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Signs Currently Rented",n.a.createElement("br",null)," - Enter Sign IDs:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"business_name",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Contact Term:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"contract_term",type:"text",onChange:c})),n.a.createElement("div",{className:"columns small-12 medium-6 label"},"Total Monthly Rent:"),n.a.createElement("div",{className:"columns small-12 medium-6"},n.a.createElement("input",{id:"renu",type:"number",min:"0",onChange:c}))),n.a.createElement("p",null,"\xa0"),n.a.createElement("button",{type:"submit",className:"btn btn-default",id:"sendform",onClick:function(e){e.preventDefault(),console.log("Submitted Form:",t)}},"Save")))))}var j=t(291),L=t.n(j);function J(){document.getElementById("billboard_modal").style.display="block"}function F(){document.getElementById("client_modal").style.display="block"}function G(){return n.a.createElement("div",null,n.a.createElement("section",{id:"content dashboard"},n.a.createElement("div",{className:"columns medium-12",id:"banner",style:{backgroundImage:"url("+L.a+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}},n.a.createElement("div",{className:"columns medium-12 padfix"},n.a.createElement("h1",null,"Dashboard Login"))),n.a.createElement("div",{className:"row",id:"dual-col"},n.a.createElement("div",{className:"columns small-12 medium-12 large-6",id:"sec1"},n.a.createElement("h2",null,"Billboard Locations"),n.a.createElement(I,null),n.a.createElement("div",{className:"billboard_wrap"},n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"billboard_listing"},n.a.createElement("h3",{className:"list-title"},"Billboard Number"),n.a.createElement("button",{id:"bbmodal",onClick:J,className:"edit"},"Edit"),n.a.createElement("button",{className:"delete"},"Delete"))),n.a.createElement("button",{id:"billboard_add",class:"btn_large"},"Add New")),n.a.createElement("div",{className:"columns small-12 medium-12 large-6",id:"sec2"},n.a.createElement("h2",null,"Clients"),n.a.createElement(A,null),n.a.createElement("div",{className:"client_wrap"},n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete")),n.a.createElement("div",{className:"client_listing"},n.a.createElement("h3",{className:"list-title"},"Client Name"),n.a.createElement("button",{id:"clmodal",className:"edit",onClick:F},"Edit"),n.a.createElement("button",{className:"delete"},"Delete"))),n.a.createElement("button",{id:"client_add",class:"btn_large"},"Add New"))),n.a.createElement("div",{className:"row logout-section"},n.a.createElement("div",{className:"columns medium-12"},n.a.createElement("h1",null,"Finished Working?"),n.a.createElement("button",{id:"logout"},"Log Out")))))}function M(){return n.a.createElement(r.a,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:y}),n.a.createElement(d.a,{exact:!0,path:"/about",component:w}),n.a.createElement(d.a,{exact:!0,path:"/contact",component:_}),n.a.createElement(d.a,{exact:!0,path:"/login",component:D}),n.a.createElement(d.a,{exact:!0,path:"/dashboard",component:G})))}function R(){return n.a.createElement("div",null,n.a.createElement(s,null),n.a.createElement(M,null),n.a.createElement(o,null))}t(221).config();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[295,1,2]]]);
//# sourceMappingURL=main.cbad1ca7.chunk.js.map