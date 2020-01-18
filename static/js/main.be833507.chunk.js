(this["webpackJsonpbus-scheduler"] = this["webpackJsonpbus-scheduler"] || []).push([[0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"schedule":"schedule_schedule__1j-Iw","xAxis":"schedule_xAxis__1YbO1","hour":"schedule_hour__3hrj9","canAdd":"schedule_canAdd__1PCFT","cannotAdd":"schedule_cannotAdd__3GpAn","tripDisplay":"schedule_tripDisplay__2m3nV","asphalt":"schedule_asphalt__2H-Qk","roadLine":"schedule_roadLine__2a36l"};

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"smallPadding":"helper_smallPadding__2OURO"};

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app_app__cewju","content":"app_content__ckDFI"};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"trip":"trip_trip__3_Wfw","shrink":"trip_shrink__2ve1o","exhaust":"trip_exhaust__2VBi2"};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(9);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(3);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./src/helper/helper.ts
var MINUTES_PER_HOUR=60;function canAddTrip(trip,trips){return trips.every(function(curTrip){return trip.endTime<=curTrip.startTime||trip.startTime>=curTrip.endTime;});}function formatTime(minutes){var hourPart=Math.floor(minutes/MINUTES_PER_HOUR);var minutePart=minutes%MINUTES_PER_HOUR;var paddedHour=hourPart.toString().padStart(2,"0");var paddedMinute=minutePart.toString().padStart(2,"0");return"".concat(paddedHour,":").concat(paddedMinute);}function formatHour(hours){return formatTime(hours*MINUTES_PER_HOUR);}function generateBusId(){return lodash_default.a.uniqueId();}function reassignDriver(trip,newDriver){return Object(objectSpread2["a" /* default */])({},trip,{driver:newDriver});}function removeTrip(removedTrip,bus){return Object(objectSpread2["a" /* default */])({},bus,{trips:bus.trips.filter(function(trip){return trip.id!==removedTrip.id;})});}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(10);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/TripComponent/trip.module.css
var trip_module = __webpack_require__(11);
var trip_module_default = /*#__PURE__*/__webpack_require__.n(trip_module);

// CONCATENATED MODULE: ./src/TripComponent/TripComponent.tsx
var TripComponent_TripComponent=function TripComponent(_ref){var trip=_ref.trip,selected=_ref.selected,onSelect=_ref.onSelect;var onClick=Object(react["useCallback"])(function(event){// Don't trigger the onClick event for the parent
event.stopPropagation();onSelect(trip);},[trip,onSelect]);return react_default.a.createElement("div",{className:trip_module_default.a.trip,key:trip.id,style:{borderColor:selected?"blue":"black",// One pixel per minute
left:trip.startTime,width:trip.endTime-trip.startTime},onClick:onClick},trip.id);};
// EXTERNAL MODULE: ./src/ScheduleComponent.tsx/schedule.module.css
var schedule_module = __webpack_require__(1);
var schedule_module_default = /*#__PURE__*/__webpack_require__.n(schedule_module);

// EXTERNAL MODULE: ./src/helper/helper.module.css
var helper_module = __webpack_require__(4);
var helper_module_default = /*#__PURE__*/__webpack_require__.n(helper_module);

// CONCATENATED MODULE: ./src/ScheduleComponent.tsx/ScheduleComponent.tsx
var NEW_BUS_ID="New Bus";var maximumHours=12;var ScheduleComponent_ScheduleComponent=function ScheduleComponent(_ref){var buses=_ref.buses,selectedTrip=_ref.selectedTrip,onSelectTrip=_ref.onSelectTrip,onSelectExistingBus=_ref.onSelectExistingBus,onSelectNewBus=_ref.onSelectNewBus;var header=react_default.a.createElement("thead",null,react_default.a.createElement("td",{colSpan:2}),react_default.a.createElement("td",{className:schedule_module_default.a.xAxis},lodash_default.a.range(maximumHours).map(function(hour){return react_default.a.createElement("div",{className:schedule_module_default.a.hour},formatHour(hour));})));// A dummy row to add a new bus. Superficially resembles the main rows
var newBus=react_default.a.createElement("tr",{className:schedule_module_default.a.canAdd},react_default.a.createElement("td",{colSpan:2,className:helper_module_default.a.smallPadding},"New Bus"),react_default.a.createElement("td",{className:schedule_module_default.a.tripDisplay,onClick:onSelectNewBus}));return react_default.a.createElement("table",{className:schedule_module_default.a.schedule},header,react_default.a.createElement("tbody",null,buses.map(function(_ref2,index){var id=_ref2.id,trips=_ref2.trips;// Style whether you can move a trip to a row
var addTripClassname="";// Don't mess with the styling of the source bus
if(selectedTrip&&selectedTrip.driver!==id){addTripClassname=canAddTrip(selectedTrip,trips)?schedule_module_default.a.canAdd:schedule_module_default.a.cannotAdd;}// Style every even row as a "road"
var isEven=index%2===0;var dottedLineComponent=isEven?react_default.a.createElement("div",{className:schedule_module_default.a.roadLine}):null;var rowClassName=classnames_default()(addTripClassname,Object(defineProperty["a" /* default */])({},schedule_module_default.a.asphalt,isEven));var startTime=lodash_default.a.min(trips.map(function(trip){return trip.startTime;}))||0;var endTime=lodash_default.a.max(trips.map(function(trip){return trip.endTime;}))||0;var formattedStartTime=startTime?formatTime(startTime):"undefined";var formattedEndTime=endTime?formatTime(endTime):"undefined";return react_default.a.createElement("tr",{key:id,className:rowClassName},react_default.a.createElement("td",{className:helper_module_default.a.smallPadding},"Bus #".concat(id)),react_default.a.createElement("td",{className:helper_module_default.a.smallPadding},"".concat(formattedStartTime," - ").concat(formattedEndTime)),react_default.a.createElement("td",{className:schedule_module_default.a.tripDisplay,onClick:function onClick(){return onSelectExistingBus({id:id,trips:trips});}},trips.map(function(trip){return react_default.a.createElement(TripComponent_TripComponent,{key:trip.id,trip:trip,selected:trip.id===(selectedTrip===null||selectedTrip===void 0?void 0:selectedTrip.id),onSelect:onSelectTrip});}),dottedLineComponent));}),selectedTrip&&newBus));};
// EXTERNAL MODULE: ./src/app.module.css
var app_module = __webpack_require__(6);
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);

// CONCATENATED MODULE: ./src/App.tsx
var NO_TRIP_SELECTED=null;var App_App=function App(){var _useState=Object(react["useState"])([]),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),buses=_useState2[0],setBuses=_useState2[1];var _useState3=Object(react["useState"])(NO_TRIP_SELECTED),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),selectedTrip=_useState4[0],setSelectedTrip=_useState4[1];var onSelectTrip=Object(react["useCallback"])(function(newTrip){// Unselect a trip if it is clicked twice in a row
if((selectedTrip===null||selectedTrip===void 0?void 0:selectedTrip.id)===newTrip.id){setSelectedTrip(null);}else{setSelectedTrip(newTrip);}},[selectedTrip]);// Code is duplicated between moveTripToExistingBus and moveTripToNewBus
// However, combining the two functions is messy and would be the wrong
// abstraction: https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction
var moveTripToExistingBus=Object(react["useCallback"])(function(destinationBus){if(selectedTrip===NO_TRIP_SELECTED||!canAddTrip(selectedTrip,destinationBus.trips)){return;}var newBuses=buses.map(function(bus){switch(bus.id){// Delete the trip from the source bus
case selectedTrip.driver:return removeTrip(selectedTrip,bus);// Add the trip to the existing bus
case destinationBus.id:var updatedTrip=reassignDriver(selectedTrip,destinationBus.id);return Object(objectSpread2["a" /* default */])({},destinationBus,{trips:[].concat(Object(toConsumableArray["a" /* default */])(destinationBus.trips),[updatedTrip])});default:return bus;}})// Remove buses without trips
.filter(function(bus){return bus.trips.length>0;});setBuses(newBuses);// Unselect after moving trip
setSelectedTrip(NO_TRIP_SELECTED);},[selectedTrip,buses]);var moveTripToNewBus=Object(react["useCallback"])(function(){if(selectedTrip===NO_TRIP_SELECTED){return;}// Delete the trip from the source bus
var newBuses=buses.map(function(bus){switch(bus.id){case selectedTrip.driver:return removeTrip(selectedTrip,bus);default:return bus;}})// Remove buses without trips
.filter(function(bus){return bus.trips.length>0;});var newBusId=generateBusId();var newBus={id:newBusId,trips:[reassignDriver(selectedTrip,newBusId)]};newBuses.push(newBus);setBuses(newBuses);// Unselect after moving trip
setSelectedTrip(NO_TRIP_SELECTED);},[selectedTrip,buses]);// Fetch the JSON to populate the data
Object(react["useEffect"])(function(){fetch("bus-scheduling-input.json").then(function(response){return response.json();}).then(function(data){return data.map(function(tripData){var id=generateBusId();var trip=Object(objectSpread2["a" /* default */])({},tripData,{driver:id});return{id:id,trips:[trip]};});}).then(function(initialBuses){return setBuses(initialBuses);});},[]);return react_default.a.createElement("div",{className:app_module_default.a.app},react_default.a.createElement("div",{className:app_module_default.a.content},react_default.a.createElement("div",{className:app_module_default.a.header},react_default.a.createElement("h1",null,"Bus Scheduling App"),react_default.a.createElement("h4",null,"Solve NP-hard problems by hand")),buses.length>0?react_default.a.createElement(ScheduleComponent_ScheduleComponent,{buses:buses,selectedTrip:selectedTrip,onSelectTrip:onSelectTrip,onSelectExistingBus:moveTripToExistingBus,onSelectNewBus:moveTripToNewBus}):react_default.a.createElement("div",{className:helper_module_default.a.smallPadding},"Loading!")));};/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/serviceWorker.ts
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/bus-scheduler",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("/bus-scheduler","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl,{headers:{'Service-Worker':'script'}}).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}
// CONCATENATED MODULE: ./src/index.tsx
react_dom_default.a.render(react_default.a.createElement(src_App,null),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ })
],[[13,1,2]]]);
//# sourceMappingURL=main.be833507.chunk.js.map