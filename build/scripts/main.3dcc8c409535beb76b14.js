(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.incrementCounter=function(){return{type:r}},t.decrementCounter=function(){return{type:l}},t.incrementAsyncCounter=function(){return{type:n}};var r=t.INC_COUNTER="INC_COUNTER",n=t.INC_COUNTER_ASYNC="INC_COUNTER_ASYNC",l=t.DEC_COUNTER="DEC_COUNTER"},143:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userFetchRequested=function(){return{type:r}},t.userFetchSuccess=function(e){return{type:n,payload:e}},t.userFetchError=function(){return{type:l}};var r=t.USER_FETCH_REQUESTED="USER_FETCH",n=t.USER_FETCH_SUCCESS="USER_FETCH_SUCCESS",l=t.USER_FETCH_ERROR="USER_FETCH_ERROR"},195:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showError=function(e){return{type:r,payload:e}},t.hideError=function(){return{type:n}};var r=t.SHOW_ERROR="SHOW_ERROR",n=t.HIDE_ERROR="HIDE_ERROR"},196:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.delay=function(e){return new Promise(function(t){return setTimeout(t,e)})},t.fakeRequest=function(e){return new Promise(function(t,a){setTimeout(function(){Math.ceil(50*Math.random())>30&&a({message:"There was something wrong in the server."}),t({data:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis iusto at est hic excepturi! Tempore sapiente delectus iste, excepturi deserunt, magnam mollitia doloremque corrupti suscipit nesciunt reiciendis, sed nulla aut."})},e)})}},198:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=u(a(0)),l=u(a(460));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.message,a=e.hideError,u=e.children,i=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["message","hideError","children"]);return n.default.createElement(l.default,r({variant:"danger",onClose:a},i),n.default.createElement(l.default.Heading,null,"Oh snap! You got an error!"),n.default.createElement("p",null,t),u)}},223:function(e,t,a){a(224),e.exports=a(426)},426:function(e,t,a){"use strict";var r=s(a(0)),n=a(22),l=a(59),u=a(435),i=s(u),o=s(a(442)),c=s(a(447));function s(e){return e&&e.__esModule?e:{default:e}}a(505);var d=(0,i.default)();u.sagaMiddleware.run(o.default);var f=document.getElementById("root");(0,n.render)(r.default.createElement(l.Provider,{store:d},r.default.createElement(c.default,{browserHistory:u.history})),f)},435:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sagaMiddleware=t.history=void 0;a(436);var r=a(73),n=a(149),l=a(26),u=o(a(507)),i=o(a(438));function o(e){return e&&e.__esModule?e:{default:e}}var c=t.history=(0,l.createBrowserHistory)(),s=t.sagaMiddleware=(0,u.default)();t.default=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.compose,a=[s,(0,n.routerMiddleware)(c)];return(0,r.createStore)((0,i.default)(c),e,t(r.applyMiddleware.apply(void 0,a)))}},438:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(149),n=a(73),l=o(a(439)),u=o(a(440)),i=o(a(441));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return(0,n.combineReducers)({counter:l.default,error:u.default,user:i.default,router:(0,r.connectRouter)(e)})}},439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(142),l={count:0};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];return t.type===n.INC_COUNTER?r({},e,{count:e.count+1}):t.type===n.DEC_COUNTER?r({},e,{count:e.count-1}):e}},440:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(195),l={stackTrace:null,message:null,isShow:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];if(t.type===n.SHOW_ERROR){var a=t.payload;return{isShow:!0,stackTrace:a.error,message:a.message}}return t.type===n.HIDE_ERROR?r({},e,{isShow:!1}):e}},441:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(143),l={data:[],isFetching:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];return t.type===n.USER_FETCH_REQUESTED?r({},e,{isFetching:!0}):t.type===n.USER_FETCH_SUCCESS?r({},e,{data:t.payload.data,isFetching:!1}):t.type===n.USER_FETCH_ERROR?r({},e,{isFetching:!1}):e}},442:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=a(151),n=i(a(443)),l=i(a(444)),u=i(a(445));function i(e){return e&&e.__esModule?e:{default:e}}var o=regeneratorRuntime.mark(c);function c(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.all)([(0,n.default)(),(0,l.default)(),(0,u.default)()]);case 2:case"end":return e.stop()}},o,this)}},443:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=regeneratorRuntime.mark(n);function n(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Hello Sagas!");case 1:case"end":return e.stop()}},r,this)}},444:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.incrementAsync=o,t.default=c;var r=a(151),n=a(142),l=regeneratorRuntime.mark(o),u=regeneratorRuntime.mark(c),i=t.delay=function(e){return new Promise(function(t){return setTimeout(t,e)})};function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.call)(i,1e3);case 2:return e.next=4,(0,r.put)((0,n.incrementCounter)());case 4:case"end":return e.stop()}},l,this)}function c(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.takeEvery)(n.INC_COUNTER_ASYNC,o);case 2:case"end":return e.stop()}},u,this)}},445:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUser=d,t.default=f;var r,n=a(151),l=a(143),u=a(196),i=a(446),o=(r=i)&&r.__esModule?r:{default:r};var c=regeneratorRuntime.mark(d),s=regeneratorRuntime.mark(f);function d(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={data:o.default},t.next=4,(0,n.call)(u.delay,5e3);case 4:return t.next=6,(0,n.put)((0,l.userFetchSuccess)(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,(0,n.put)((0,l.userFetchError)());case 12:case"end":return t.stop()}},c,this,[[0,8]])}function f(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.takeEvery)(l.USER_FETCH_REQUESTED,d);case 2:case"end":return e.stop()}},s,this)}},446:function(e){e.exports=[{id:1,first_name:"Robinia",last_name:"Perigoe",email:"rperigoe0@nature.com"},{id:2,first_name:"Mycah",last_name:"Abramovic",email:"mabramovic1@blogspot.com"},{id:3,first_name:"Boris",last_name:"Chucks",email:"bchucks2@jiathis.com"},{id:4,first_name:"Benjamen",last_name:"Fairbourne",email:"bfairbourne3@ft.com"},{id:5,first_name:"Beverley",last_name:"MacEllen",email:"bmacellen4@harvard.edu"},{id:6,first_name:"Dolli",last_name:"Collisson",email:"dcollisson5@chron.com"},{id:7,first_name:"Kristin",last_name:"Dowdam",email:"kdowdam6@archive.org"},{id:8,first_name:"Christophe",last_name:"Sowthcote",email:"csowthcote7@comsenz.com"},{id:9,first_name:"Birgitta",last_name:"Scintsbury",email:"bscintsbury8@ask.com"},{id:10,first_name:"Marlena",last_name:"Fallon",email:"mfallon9@cnn.com"},{id:11,first_name:"Annaliese",last_name:"Fletcher",email:"afletchera@cpanel.net"},{id:12,first_name:"Husein",last_name:"Whall",email:"hwhallb@slashdot.org"},{id:13,first_name:"Leonie",last_name:"Backshall",email:"lbackshallc@mozilla.org"},{id:14,first_name:"Donnamarie",last_name:"Lescop",email:"dlescopd@gravatar.com"},{id:15,first_name:"Madelena",last_name:"Chantrell",email:"mchantrelle@usatoday.com"},{id:16,first_name:"Shelton",last_name:"Catford",email:"scatfordf@apple.com"},{id:17,first_name:"Fay",last_name:"Elsmor",email:"felsmorg@deviantart.com"},{id:18,first_name:"Guilbert",last_name:"Cordelette",email:"gcordeletteh@storify.com"},{id:19,first_name:"Elsworth",last_name:"Ollin",email:"eollini@cnet.com"},{id:20,first_name:"Sandro",last_name:"Sirey",email:"ssireyj@globo.com"},{id:21,first_name:"Renell",last_name:"Schiefersten",email:"rschieferstenk@amazonaws.com"},{id:22,first_name:"Amity",last_name:"Clark",email:"aclarkl@mapquest.com"},{id:23,first_name:"Karlene",last_name:"Chilley",email:"kchilleym@imageshack.us"},{id:24,first_name:"Chantal",last_name:"Middleton",email:"cmiddletonn@163.com"},{id:25,first_name:"Warde",last_name:"Franzel",email:"wfranzelo@ucsd.edu"},{id:26,first_name:"Elihu",last_name:"Cawse",email:"ecawsep@sfgate.com"},{id:27,first_name:"Tobin",last_name:"Arkill",email:"tarkillq@cyberchimps.com"},{id:28,first_name:"Dode",last_name:"Newlin",email:"dnewlinr@usda.gov"},{id:29,first_name:"Nathalia",last_name:"Herkess",email:"nherkesss@flickr.com"},{id:30,first_name:"Stern",last_name:"Arnaldo",email:"sarnaldot@fema.gov"},{id:31,first_name:"Harcourt",last_name:"Slany",email:"hslanyu@cbsnews.com"},{id:32,first_name:"Vale",last_name:"Locks",email:"vlocksv@biblegateway.com"},{id:33,first_name:"Sayres",last_name:"Ouldcott",email:"souldcottw@wikia.com"},{id:34,first_name:"Joscelin",last_name:"Lamball",email:"jlamballx@sohu.com"},{id:35,first_name:"Sigismund",last_name:"Shaxby",email:"sshaxbyy@twitpic.com"},{id:36,first_name:"Eamon",last_name:"Seedhouse",email:"eseedhousez@123-reg.co.uk"},{id:37,first_name:"Tibold",last_name:"Minget",email:"tminget10@gov.uk"},{id:38,first_name:"Starlin",last_name:"Bennis",email:"sbennis11@mail.ru"},{id:39,first_name:"Clywd",last_name:"Yakubowicz",email:"cyakubowicz12@nationalgeographic.com"},{id:40,first_name:"Juditha",last_name:"Colleck",email:"jcolleck13@google.es"},{id:41,first_name:"Frazer",last_name:"Greest",email:"fgreest14@indiatimes.com"},{id:42,first_name:"Greggory",last_name:"Macer",email:"gmacer15@cloudflare.com"},{id:43,first_name:"Shae",last_name:"Jonson",email:"sjonson16@eepurl.com"},{id:44,first_name:"Erek",last_name:"Foulds",email:"efoulds17@weebly.com"},{id:45,first_name:"Alden",last_name:"Caldecutt",email:"acaldecutt18@xinhuanet.com"},{id:46,first_name:"Barbara",last_name:"d' Elboux",email:"bdelboux19@reuters.com"},{id:47,first_name:"Leonelle",last_name:"Keigher",email:"lkeigher1a@seattletimes.com"},{id:48,first_name:"Bren",last_name:"McFetridge",email:"bmcfetridge1b@diigo.com"},{id:49,first_name:"Nanete",last_name:"Loy",email:"nloy1c@aol.com"},{id:50,first_name:"Ede",last_name:"Tremeer",email:"etremeer1d@booking.com"}]},447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(0),l=m(n),u=m(a(1)),i=a(148),o=a(149),c=a(59),s=m(a(448)),d=m(a(488)),f=m(a(198));function m(e){return e&&e.__esModule?e:{default:e}}a(504);var _=(0,c.connect)(function(e){return{message:e.error.message}},function(e){return{hideError:function(){return e({type:"HIDE_ERROR"})}}})(f.default),p=function(e){var t=e.browserHistory,a=e.isShow,u=s.default.map(function(e,t){return l.default.createElement(i.Route,r({key:t},e))});return l.default.createElement(o.ConnectedRouter,{history:t},l.default.createElement(i.HashRouter,null,l.default.createElement(n.Fragment,null,l.default.createElement("div",{className:"app-content"},l.default.createElement(d.default,null),a&&l.default.createElement(_,{dismissible:!0}),l.default.createElement(i.Switch,null,u)))))};p.propTypes={browserHistory:u.default.object.isRequired,isShow:u.default.bool.isRequired},t.default=(0,c.connect)(function(e){return{isShow:e.error.isShow}})(p)},448:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(449));function n(e){return e&&e.__esModule?e:{default:e}}var l=[{exact:!0,path:"/",component:n(a(485)).default},{path:"/examples",component:r.default}];t.default=l},449:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a(0)),n=a(148),l=s(a(450)),u=s(a(453)),i=s(a(454)),o=s(a(456)),c=s(a(474));function s(e){return e&&e.__esModule?e:{default:e}}a(484);var d=[{title:"Counter",desc:"This counter is sample of dispatching action with changing the state of the app and updating the reducer in your store.",path:"/counter",component:l.default},{title:"Displaying error message",desc:"Notify your user when there was a problem in your network connectivity and display it in your web app.",path:"/error-message",component:u.default},{title:"Fetching data in web service",desc:"Description: Fetching data using redux saga",path:"/fetching-data",component:i.default},{title:"Higher Order Component using compose function",desc:"This sample is randomly throwing an error. Once there was an error you can also retry fetching the data.",path:"/hoc-compose",component:o.default},{title:"Forms",desc:"Using forms in react by submitting it to server side.",path:"/forms",component:c.default}];t.default=function(e){var t=e.match;return r.default.createElement("div",{className:"examples-wrapper"},r.default.createElement("div",{className:"sidebar"},r.default.createElement("p",{className:"title"},"Examples"),r.default.createElement("div",{className:"list-container"},r.default.createElement("ul",{className:"examples-lists"},r.default.createElement("li",null,r.default.createElement(n.Link,{to:t.url+"/counter"},"Counter")),r.default.createElement("li",null,r.default.createElement(n.Link,{to:t.url+"/error-message"},"Displaying error message")),r.default.createElement("li",null,r.default.createElement(n.Link,{to:t.url+"/fetching-data"},"Fetching data")),r.default.createElement("li",null,r.default.createElement(n.Link,{to:t.url+"/hoc-compose"},"Compose helper function")),r.default.createElement("li",null,r.default.createElement(n.Link,{to:t.url+"/forms"},"Forms"))))),r.default.createElement("div",{className:"content"},r.default.createElement(n.Switch,null,d.map(function(e,a){var l,u=e.path,i=e.component,o=(l=i,function(e){var t=e.title,a=e.desc;return r.default.createElement(r.default.Fragment,null,r.default.createElement("h2",null,t),r.default.createElement("p",null,a),r.default.createElement(l,null))});return r.default.createElement(n.Route,{key:a,path:""+t.url+u,render:function(){return r.default.createElement(o,e)}})}),r.default.createElement(n.Route,{exact:!0,path:""+t.url,render:function(){return r.default.createElement("h1",null,"Choose an example.")}}))))}},450:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(0)),n=a(59),l=a(142),u=i(a(78));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.connect)(function(e){return e.counter},function(e){return{increment:function(){return e((0,l.incrementCounter)())},incrementAsync:function(){return e((0,l.incrementAsyncCounter)())},decrement:function(){return e((0,l.decrementCounter)())}}})(function(e){var t=e.count,a=e.increment,n=e.decrement,l=e.incrementAsync;return r.default.createElement("div",null,r.default.createElement("p",null,"Current value is: ",t," "),r.default.createElement(u.default,{variant:"primary",onClick:l},"Increment Async +"),r.default.createElement(u.default,{variant:"primary",onClick:a},"Increment +"),r.default.createElement(u.default,{variant:"danger",onClick:n},"Decrement -"))})},453:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=o(r),l=a(59),u=a(195),i=o(a(78));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,l.connect)(function(e){return e.error},function(e){return{showError:function(t){return e((0,u.showError)(t))},hideError:function(){return e((0,u.hideError)())}}})(function(e){var t=e.isShow,a=e.hideError,l=e.showError;return n.default.createElement(r.Fragment,null,n.default.createElement(i.default,{variant:"primary",onClick:function(){return t?a():l({error:"Test Error",message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias eligendi culpa iure tempore recusandae totam maiores dolores, expedita accusamus voluptate deleniti, doloremque quia voluptatibus laudantium soluta exercitationem, aut consectetur."})}}," ",t?"Hide error":"Display error"))})},454:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(0)),n=a(59),l=o(a(455)),u=o(a(78)),i=a(143);function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.connect)(function(e){return e.user},function(e){return{fetchUser:function(){return e((0,i.userFetchRequested)())}}})(function(e){var t=e.data,a=e.isFetching,n=e.fetchUser,i=t.map(function(e){var t=e.id,a=e.first_name,n=e.last_name,l=e.email;return r.default.createElement("tr",{key:t},r.default.createElement("td",null,t),r.default.createElement("td",null,a),r.default.createElement("td",null,n),r.default.createElement("td",null,l))});return r.default.createElement("div",null,r.default.createElement(u.default,{variant:"primary",onClick:n,disabled:a},"Fetch User"),r.default.createElement(l.default,{striped:!0,bordered:!0,hover:!0,variant:"light"},r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null,"ID"),r.default.createElement("th",null,"First name"),r.default.createElement("th",null,"Last name"),r.default.createElement("th",null,"Email"))),r.default.createElement("tbody",null,a?r.default.createElement("tr",null,r.default.createElement("td",{colSpan:4},"Loading...")):i)))})},456:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(0)),n=a(73),l=o(a(457)),u=o(a(459)),i=o(a(473));function o(e){return e&&e.__esModule?e:{default:e}}var c=(0,n.compose)(i.default,u.default,l.default);t.default=c(function(e){var t=e.data;return r.default.createElement("p",null,"Hello World ",t)})},457:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(0)),n=l(a(458));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){var a=t.isLoading,l=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["isLoading"]);return a?r.default.createElement("div",null,r.default.createElement(n.default,{animation:"border",role:"status"},r.default.createElement("span",{className:"sr-only"},"Loading...")),r.default.createElement("h1",{style:{display:"inline-block",margin:"0 10px 0 10px"}},"Loading...")):r.default.createElement(e,l)}}},459:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(0)),n=u(a(198)),l=u(a(78));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){var a=t.error,u=t.fetchEvent,i=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["error","fetchEvent"]);return a?r.default.createElement(n.default,{message:a.message},r.default.createElement(l.default,{variant:"danger",onClick:u},"Retry")):r.default.createElement(e,i)}}},473:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=a(0),i=(r=u)&&r.__esModule?r:{default:r},o=a(196);t.default=function(e){return function(t){var a=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,[]),r=function(){var e=(0,u.useState)({data:null,isLoading:!1,error:null}),t=l(e,2),a=t[0],r=t[1];function i(){r(n({},a,{isLoading:!0})),(0,o.fakeRequest)(3e3).then(function(e){r(n({},a,{data:e.data,isLoading:!1}))}).catch(function(e){r(n({},a,{error:e,isLoading:!1,fetchEvent:i}))})}return(0,u.useEffect)(function(){i()},[]),a}();return i.default.createElement(e,n({},r,a))}}},474:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(0)),n=u(a(475)),l=u(a(78));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(n.default,null,r.default.createElement(n.default.Group,{controlId:"formBasicEmail"},r.default.createElement(n.default.Label,null,"Email address"),r.default.createElement(n.default.Control,{type:"email",placeholder:"Enter email"}),r.default.createElement(n.default.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.default.createElement(n.default.Group,{controlId:"formBasicPassword"},r.default.createElement(n.default.Label,null,"Password"),r.default.createElement(n.default.Control,{type:"password",placeholder:"Password"})),r.default.createElement(n.default.Group,{controlId:"formBasicChecbox"},r.default.createElement(n.default.Check,{type:"checkbox",label:"Check me out"})),r.default.createElement(l.default,{variant:"primary",type:"submit"},"Submit"))}},484:function(e,t,a){},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(0)),n=u(a(486)),l=u(a(78));function u(e){return e&&e.__esModule?e:{default:e}}a(487);t.default=function(e){return r.default.createElement(n.default,null,r.default.createElement("div",{className:"wrapper"},r.default.createElement("h1",null,"Welcome!"),r.default.createElement("p",null,"This template was built using react and redux with integration of other libraries such as react router for handling routes, redux saga for handling side effects (network request), react bootstrap for styling."),r.default.createElement(l.default,{variant:"secondary"},"Learn more")))}},487:function(e,t,a){},488:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(0),l=(r=n)&&r.__esModule?r:{default:r},u=a(506),i=a(148);t.default=function(){return l.default.createElement(n.Fragment,null,l.default.createElement(u.Navbar,{bg:"dark",variant:"dark",sticky:"top"},l.default.createElement(i.NavLink,{exact:!0,className:"navbar-brand",to:"/"},"React"),l.default.createElement(u.Nav,{className:"mr-auto"},l.default.createElement(i.NavLink,{exact:!0,className:"nav-link",role:"button",to:"/"},"Home"),l.default.createElement(i.NavLink,{className:"nav-link",role:"button",to:"/examples/counter"},"Examples"),l.default.createElement(i.NavLink,{className:"nav-link",role:"button",to:"/about"},"About"))))}},504:function(e,t,a){},505:function(e,t,a){}},[[223,1,2]]]);
//# sourceMappingURL=main.3dcc8c409535beb76b14.js.map