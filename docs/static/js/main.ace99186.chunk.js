(this["webpackJsonpmarcus-parser"]=this["webpackJsonpmarcus-parser"]||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),l=a.n(o),c=(a(12),a(2)),i="undefined"!==typeof window,u=function(e){var t=e.rowData||{},a=t.currentStartDate,o=t.reservationUrl,l=t.distanceDrove,u=t.protection_level,s=t.id,m=Object(r.useState)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={};try{var r=localStorage.getItem("mark-"+e);if(r){var n=JSON.parse(r);n&&(a=n)}}catch(o){t&&console.warn("[localStorageLoad] not accessible to load")}return a}(s)||0),d=Object(c.a)(m,2),v=d[0],h=d[1],p=Object(r.useCallback)((function(e){var t=(e||{}).target.value,a=void 0===t?0:t;!function(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;try{var n=JSON.stringify(a);localStorage.setItem("mark-".concat(t),n)}catch(e){r&&console.warn("[localStorageSave] not accessible to save")}}(s,a,!1),h(a)}),[h,s]);return n.a.createElement("tr",null,n.a.createElement("td",null,a),n.a.createElement("td",null,n.a.createElement("a",{href:o},o)),n.a.createElement("td",null,l),n.a.createElement("td",null,u),n.a.createElement("td",null,n.a.createElement("input",{value:v,type:"number",onChange:p})))},s=function(e){var t=e.label,a=void 0===t?"":t,r=e.tabularData,o=void 0===r?[]:r;return o?n.a.createElement("table",{border:"1",style:{width:"100%"}},n.a.createElement("caption",null,a," Data Summary"),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Dayte"),n.a.createElement("th",null,"Lynk"),n.a.createElement("th",null,"Distaence"),n.a.createElement("th",null,"Protection Level?"),n.a.createElement("th",null,"Earn'ins"))),n.a.createElement("tbody",null,o.map((function(e){var t=e.id;return n.a.createElement(u,{key:t,rowData:e})})))):n.a.createElement("h2",null,"Please upload your reservations json file")},m=a(6),d={border:"dashed 4px orange",margin:"0 4px 44px 4px",padding:"0 44px",textAlign:"center",cursor:"pointer"},v=function(e){var t=e.setFileData,a=Object(r.useCallback)((function(e){var a=e[0],r=new FileReader;"reservations.json"===a.name?(r.onload=function(e){try{var a=JSON.parse(e.target.result);t(a)}catch(r){alert("Error trying to parse JSON. Maybe download it from remote again?")}},r.readAsText(a)):alert('wrong file, bro, I want "reservations.json"')}),[t]);return n.a.createElement(m.a,{onDrop:a},(function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("section",{style:d},n.a.createElement("div",t(),n.a.createElement("input",a()),n.a.createElement("p",null,"You may drag and or maybe drop some filez right over 'ere. You can also ",n.a.createElement("strong",null,"click")," to select files with your native web browsers file picker functionality that is baked into the browser okay")))}))},h=function(e){return+e.replace(/[^\d.-]/g,"")},p=function(e){for(var t=0,a=0;t<e.length;t++)a=Math.imul(31,a)+e.charCodeAt(t)|0;return a},g=function(){var e=Object(r.useState)({}),t=Object(c.a)(e,2),a=t[0],o=t[1],l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.map((function(e){t||(e=e.current);var a=e||{},r=a.reservation_check_in,n=a.protection_level,o=void 0===n?"Not Found":n,l=a.reservation_state,c=void 0===l?{}:l,i=a.invoices,u=(i=void 0===i?{}:i).current,s=void 0===u?[]:u,m=a.reservation_url,d=new Date(c.trip_start),v={currentStartDate:d.toLocaleString(),bigMoney:s,distanceDrove:-1,driverUrl:e[t?"guest_url":"host_url"],id:p(m),protection_level:o,reservationUrl:m,sketchyData:!0,timestamp:d.valueOf()},g=h(r.owner_check_in_odometer_reading),E=h(r.owner_check_out_odometer_reading);return g&&E&&(g<E&&(v.sketchyData=!1),v.distanceDrove=E-g),v}))}(a.as_host);return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{setFileData:o}),n.a.createElement(s,{label:"Host",tabularData:l}))},E=function(){return n.a.createElement(g,null)},f={color:"magenta",textAlign:"center",transform:"rotate(-10deg)",textDecoration:"overline underline"},y={textDecoration:"line-through",color:"purple"},b=function(){return n.a.createElement("span",{className:"fancyPantsSpin","data-nessesary":"yes",style:y},"!")};var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{style:f,"data-aesthetics":"lovely"},n.a.createElement(b,null),"Oh hi Mark",n.a.createElement(b,null)),n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.ace99186.chunk.js.map