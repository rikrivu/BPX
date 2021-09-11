(this["webpackJsonpbpx-frontend"]=this["webpackJsonpbpx-frontend"]||[]).push([[0],{125:function(e,t){},144:function(e,t){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},214:function(e,t){},215:function(e,t){},254:function(e,t,n){},255:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(30),i=n.n(r),o=(n(188),n(85)),c=n(24),s=(n(189),n(190),n(292)),l=n(3);var u=function(){return Object(l.jsx)("div",{className:"loader-wrapper",children:Object(l.jsx)(s.a,{})})},d=n(12),b=n(25),f={isLoading:!1,tableLoading:!0,showNotifier:{show:"initial",type:null}},j=Object(a.createContext)(f),p=j.Provider,A=function(e){var t=e.children,n=Object(a.useReducer)((function(e,t){var n=Object(d.a)({},e);return t.forEach((function(e){n[e.type]=e.data})),n}),f),r=Object(b.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(p,{value:{state:i,dispatch:o},children:t})};n(195),n(196);var h=function(e){return e.options.length?Object(l.jsx)("div",{onChange:e.handleRadioButtonToggle,className:"radio-btn-wrapper",children:e.options.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{id:t.id,type:"radio",className:"radio-input",name:"permit",value:t.name,defaultChecked:e.selected===t.name}),Object(l.jsx)("label",{htmlFor:t.id,children:t.name})]},t.id)}))}):Object(l.jsx)("div",{children:"No Option to show for Radio Group"})},m=[{name:"Air Permit",id:"Air_Permit"},{name:"Storm Water Permit",id:"Storm_Water_Permit"},{name:"Injection Well Permit",id:"Injection_Well_Permit"},{name:"Water Reservoirs Permit",id:"Water_Reservoir_Permit"},{name:"EPA Class V Cathodic Protection",id:"EPA_Class_V_Cathodic_Protection"},{name:"North & South Evap. Ponds",id:"North_&_South_Evap._Ponds"}],O=n(46),g=n(91);n(202),n(203);var v=function(e){return Object(l.jsx)("div",{children:e.value?e.value:"---"})},x=n(35),C=n.n(x),w=n(59),y=new AbortController,I=new AbortController,B=function(){var e=Object(w.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.abort(),y=new AbortController,e.next=4,fetch("/api/facility?page="+n.page+"&size=1500&sortBy="+n.criteria+"&order="+n.state+"&filter="+t,{signal:y.signal});case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(w.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/permit?sortBy="+n.criteria+"&order="+n.state+"&facilityId="+t);case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(w.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/download/permit?facilityId="+t+"&permitId="+n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/download/application?fileName="+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.abort(),I=new AbortController,e.next=4,fetch("/api/list/file?facilityId="+t,{signal:I.signal});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){var n=Object(d.a)(Object(d.a)({},t),{},{sortFilterState:Object(d.a)(Object(d.a)({},t.sortFilterState),{},{criteria:e})});if(t.sortFilterState.criteria===e)switch(t.sortFilterState.state){case"ASC":n.sortFilterState.state="DESC";break;case"DESC":n.sortFilterState.state="ASC"}else n.sortFilterState.state="DESC";return n},F=function(e,t){e([{type:"isLoading",data:!1},{type:"showNotifier",data:{show:"start",type:t}}]),setTimeout((function(){e([{type:"showNotifier",data:{show:"end",type:t}}])}),3e3)},P=n(75),E=n(302),L=Object(P.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}}))(E.a);var T=function(e){var t=Object(a.useContext)(j).dispatch,n="";return e.data.facilityId&&e.value?Object(l.jsx)(L,{title:"Open Permit",children:Object(l.jsx)("button",{type:"button",className:"link-btn",onClick:function(){return a=e.data.facilityId,r=e.value,t([{type:"isLoading",data:!0}]),void N(a,r).then((function(e){return console.log("res from URLRenderer",e),n=e.headers.get("Content-Disposition").replace("attachment; filename=: ",""),e.blob()})).then((function(e){if("application/pdf"===e.type){var a=new Blob([e],{type:"application/pdf"}),r=URL.createObjectURL(a);window.open(r)}else{var i,o=URL.createObjectURL(new Blob([e])),c=document.createElement("a");c.href=o,c.setAttribute("download",n),document.body.appendChild(c),c.click(),null===(i=c.parentNode)||void 0===i||i.removeChild(c)}t([{type:"isLoading",data:!1}])})).catch((function(e){console.log("Unable to retrieve file",e),F(t,"fail")}));var a,r},children:e.value})}):e.value?e.value:"---"};var Q,U=function(e){return e.value?Object(l.jsx)("div",{children:Object(l.jsx)(L,{title:"View Permits for this Facility",children:Object(l.jsx)("a",{href:"permits/".concat(e.value),children:e.value})})}):"---"},M=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("I'm the Modal Content"),o=Object(b.a)(i,2),c=o[0],s=o[1];return{isModalActive:n,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];r(!n),e&&s(e)},modalContent:c}},W=(n(205),n(70)),H=n.n(W),Y=function(e){var t=Object(a.useContext)(Q),n=t.modalContent,r=t.toggleModal,o=t.isModalActive,c=Object(l.jsx)("div",{className:"modal-container",children:Object(l.jsxs)("div",{children:[e.showClearModal?Object(l.jsx)("div",{className:"modal-clear-container",children:Object(l.jsx)("button",{type:"button",className:"modal-clear-button",onClick:function(){return r()},children:Object(l.jsx)(H.a,{})})}):null,n]})});return o?i.a.createPortal(c,document.querySelector("#modal-root")):null},V=(Q=Object(a.createContext)(null)).Provider,z=function(e){var t=e.children,n=e.showClearModal,a=void 0===n||n,r=M(),i=r.isModalActive,o=r.toggleModal,c=r.modalContent;return Object(l.jsxs)(V,{value:{isModalActive:i,toggleModal:o,modalContent:c},children:[Object(l.jsx)(Y,{showClearModal:a}),t]})},J=(n(207),n.p+"static/media/excel-icon.d1323a8d.png"),Z=n.p+"static/media/json-icon.a60aa82b.png";var G=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(a.useContext)(Q).toggleModal,c=Object(a.useContext)(j),s=c.dispatch,u="";return Object(a.useEffect)((function(){s([{type:"isLoading",data:!0}]),i([]),R(e.facilityId).then((function(e){i(Object(O.a)(e)),s([{type:"isLoading",data:!1}])})).catch((function(e){console.log("Some error Occured",e),s([{type:"isLoading",data:!1}])}))}),[s,e.facilityId]),Object(l.jsx)("div",{className:"file-view-container",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsxs)("div",{children:["Files for ",e.applicationNumber]}),Object(l.jsx)(L,{title:"Close",children:Object(l.jsx)("button",{type:"button",className:"modal-clear-button",onClick:function(){return o()},children:Object(l.jsx)(H.a,{})})})]}),Object(l.jsx)("div",{className:"modal-body",children:c.state.isLoading?null:r.length?r.map((function(e,t){return Object(l.jsxs)("div",{className:"pdf-link",children:[e.includes(".pdf")?Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH1SURBVHgBpZVBbtNQEIZn3nNoVCmVo4S92SFKkFmguqu6JyjcoD1BwwlKTtDkBMAJYk6Q7EjZYGhZ4x0S0NobwKH4DfMeRIrT1qmdT7Lm+Vn6PfP+8Ri/Pnng1oT1kpBcuC2IIa6J3eY4THL7sdcZnW9vdm+r893r7F9sdeKL7UfvY9+1558JAnDWUQ2hBIgQEKk3NFWjeUEBFWlNzl4sClYS09VcJ2hBSWQqA6pnRzGfGRAZA4jIpTQblhZrhsbBe9+8h/5sDxUOhIDj0mIz7k7OxrN17LkOQQaFYp99x96YNo70WqzJ3pW+WqDQgEbaeCoUOPpS08t9WEJhZgjgK6QP5obQhiUUZsYtMEbAHcEXKQxhFbH25PQVBz5c8OW6HMMqYiY7UgMdL3/8dlYWEyj2kCCwLDma763rKDTgi3fflJgh7VqEiQQcceeHfJg2u5MogNettx/7SzPTPVbHO4d6LQmH/MnYRPj8X1QJxwRJ7RVmpkXsdOOQflGXB6bNbz9onxgjZvTPtza7XPoOKqt3o5ieulYqhwQq4qQjBAr/O5qjdfJJl9Zf3M+VWZPy2PQWihA4Ky6wByXIiWUKBsjjRIFCrMvHzUkYQQlyZbbfnQYcAqhI5bF9k1j0k2rPYBVMi1CExkEp9d/JgaoghfjHOvgLjITb6sxwDOYAAAAASUVORK5CYII=",alt:"pdf-icon.png"}):e.includes(".docx")?Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAe1BMVEUAAAAhHh4gHBzy8fErV5gpVZgpVZgpVZgoVJkpVZgoVZolO1+PjIwnRXX///8pVZiXl5elo6RoZmfK1eZdf7GTqcx4lL5DaaRQdKvy9Pmgs9Nribfl6/Ouvtm6yt88YJjX3+w1X55YcphFZpiPkpd8h5d0gpdgdpeFnsRG668zAAAADnRSTlMAZkDpL++/r39vP5bYslFH3mcAAASFSURBVHja7NdLTsNAEEXRAOGb0I7DbwJC4rv/HZJBLIWO7W5LgarUu3cF9c6oe0ZERERERERERJWd2HQ681LlwXEFag8OK7A5Jf13bbv0I2AD0J65ETACSG4ErADcCFgBuBEwA/AiYAfgRMAQwIeAJYALAVMADwK2AA4EjAHsBcwBJgoEBJgmEBFgkkBIgCkCMQEmCAQFqBeICmAgMAaw+tvW63VyI+AGoFIgMECdQGSAKoHQADUCsQEqBIIDlAWiAxQFwgOUBYK+BLtKAgIA4wIKAKMCEgBjAhoAIwIiAMMCKgCDAjIAQwI6AAMCQgD9AkoAvQJSAL0C4T9DBQExgH0BNYA9ATmAXEAPIBMQBPgtEAVgrDZvuTmyu1cSoAVgFyDAS3ByAAAAQHcvAAAAAAAAAAAAwFF/hgoBAAAAALgH+Pj8+n57f22aValgAN3wbToA2XAdgGy4CkBKz3cvD4/3T02xVNfRvASz4ToA2XAdgPlicbszXAdgfnN9dXlx3s3QAciG6wBkw/UAmm0AAAAAAAAcruP5DDXbAAAAAAAAAAAAAA4UL0EAUk8AAAAAAAAA8MOuueRGCANB9AYGyR/ANgjvuP8JIw39Y+JdVilcGzK9q0fzcEYzAAwAA8AbAMzzy/8ZmucBYAAYAIAAtEB5BYB1c58cOkqOoqNIk4AHYHF3Th1lR1ll5GkCuAHTJt20LSXJqBIlRAD+1+12nPw92qdO/vtJkB/vIlZwHM+jQIMLEUBxdyIPLsfZvrUYEAGQBXW9dydZvrZkQgRAFtR9P52k0Oi4P56YANiCnTrxyWTHBMD7vbDwNMez4YUJgC0Y2IGa+nwvrJgA2IJRnndNeyCaMAGwBbMc+jTBPiQeFcBtQerX7g+0B5d9MWZUAHSDN+tA2vrdEkqoAPic15SGJzGctuAK+X2AkXxQB2YWg7Uk5hci9jWvRky89kGfCo8LgMpGvdsriyGpIzIugKy3mOQnf2R9CRRcAGTBqg6UVfC6IAsuALaglI16PJK/NtBvha0FA5ct9r432gVkAHLSWam1qq/wSyAiA8jcMem2F55d4kDUk6BY8CAS3hx/PNNZkAHQ5p/qQHFfpdk2IQPgCnQtVgytfi4HNgC24H1ZrBjYgdgAqOxj25OduYANIDkT/xBDvS8NG8DqTGKnV52wATw6FBGD5kAHYMsuIgZNRAdgym49MQR0AKas74mhoQMwZWOn2In7I6nfZUNHDDs+AC3bOmK48AFI2doTQ8AHIGWPnhiAfygpZas4UCMOfAGAPpXwSUlvBfCG3woPAH8OxklwABgABoAB4Ie9OzgBGISCKNhBsIP032UOYsDgRUhAs7MVyJz8pwcAAAAAAAAAmJ1jCEApAAAAAAAAQCzAMVjUT/AYDAAAAAAAAFgLID61FR9bk9sTXPwkubnPMTQXXT1zAeru3nAuQF1seLk8Fpze7hccX+8XnN8fDMAPAVYbAAAA2nsBAAAAAAAAAAAAAAAAAAAAAC8AbLL2XgAArvbggAQAAABA0P/X0Q8VAAAAABaPMFYsMqbIsgAAAABJRU5ErkJggg==",alt:"docx-icon.png"}):e.includes(".json")?Object(l.jsx)("img",{src:Z,alt:"json-icon.png"}):e.includes(".xl")?Object(l.jsx)("img",{src:J,alt:"excel-icon.png"}):Object(l.jsx)("img",{src:"",alt:"."}),Object(l.jsx)(L,{title:e.includes("pdf")?"Open PDF in new Tab":"Download File",children:Object(l.jsx)("button",{type:"button",className:"link-btn",onClick:function(){return function(e){s([{type:"isLoading",data:!0}]),k(e).then((function(e){return u=e.headers.get("Content-Disposition").replace("attachment; filename=: ",""),e.blob()})).then((function(e){if("application/pdf"===e.type){var t=new Blob([e],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n)}else{var a,r=URL.createObjectURL(new Blob([e])),i=document.createElement("a");i.href=r,i.setAttribute("download",u),document.body.appendChild(i),i.click(),null===(a=i.parentNode)||void 0===a||a.removeChild(i)}s([{type:"isLoading",data:!1}])})).catch((function(e){console.log("Unable to retrieve file",e),F(s,"fail")}))}(e)},children:e})})]},t)})):Object(l.jsx)("div",{children:"Unable tor retreive any file for this Application number."})})]})})};function X(e){var t=Object(a.useContext)(Q).toggleModal;return e.value?Object(l.jsx)(L,{title:"View All Files",children:Object(l.jsx)("button",{type:"button",className:"modal-open-link",onClick:function(){t(Object(l.jsx)(G,{applicationNumber:e.value,facilityId:e.data.facilityId}))},children:e.value})}):Object(l.jsx)("div",{children:"---"})}var q=function(e){return Object(l.jsx)(z,{showClearModal:!1,children:Object(l.jsx)(X,Object(d.a)({},e))})},K=function(e){if(!e)return"defaultCellRenderer";switch(e.columnType){case"url":return"urlRenderer";case"navigate":return"navigationRenderer";case"modal":return"modalRenderer";case"string":case"number":default:return"defaultCellRenderer"}},_=(n(208),n(163)),$=n.n(_),ee=n(123),te=n.n(ee);var ne=["facilityName","companyName","reason","description","finalPermitWaiverDocument"],ae={agColumnHeader:function(e){return Object(l.jsxs)("button",{type:"button",className:"header-btn",onClick:function(){e.sort(e.column.colId)},children:[Object(l.jsx)("div",{children:e.displayName}),e.sortable?Object(l.jsx)(L,{title:e.sortState.criteria===e.column.colId&&"DESC"===e.sortState.state?"Sort Ascending":"Sort Descending",children:Object(l.jsxs)("div",{className:"sort-icons",children:[e.sortState.criteria!==e.column.colId?Object(l.jsx)(te.a,{className:"sortIcon"}):null,e.sortState.criteria===e.column.colId&&"DESC"===e.sortState.state?Object(l.jsx)($.a,{className:"sortIcon"}):null,e.sortState.criteria===e.column.colId&&"ASC"===e.sortState.state?Object(l.jsx)(te.a,{className:"sortIcon"}):null]})}):null]})},defaultCellRenderer:v,urlRenderer:T,navigationRenderer:U,modalRenderer:q};var re=function(e){!function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(!1),r=Object(a.useRef)({position:"",top:"",zIndex:""});Object(a.useEffect)((function(){e.current=document.querySelector('[ref="headerRoot"]'),t.current=document.querySelector('[ref="eBodyViewport"]');var n=e.current;r.current.position=n.style.position,r.current.top=n.style.top,r.current.zIndex=n.style.zIndex}),[]);var i=Object(a.useCallback)((function(){var a=e.current,i=t.current;if(a&&i){var o=!1,c=!1;if(n.current?(c=i.getBoundingClientRect().top-a.getBoundingClientRect().height+30>0)&&(n.current=!1):(o=a.getBoundingClientRect().top<=0)&&(n.current=!0),o&&(a.style.position="fixed",a.style.top="0",a.style.zIndex="2",a.style.width="initial"),c){var s=r.current;a.style.position=s.position,a.style.top=s.top,a.style.zIndex=s.zIndex}}}),[]);Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}))}();var t=Object(a.useState)(),n=Object(b.a)(t,2),r=n[0],i=n[1];return Object(l.jsx)("div",{className:"ag-theme-alpine",style:{width:e.tableWidth},children:Object(l.jsx)(g.AgGridReact,{onGridReady:function(e){i(e.api)},onFirstDataRendered:function(e){null===r||void 0===r||r.sizeColumnsToFit()},rowData:e.rowData,domLayout:"autoHeight",animateRows:!0,frameworkComponents:ae,rowHeight:e.rowHeight,headerHeight:80,groupHeaderHeight:50,rowClassRules:{"alt-background":function(e){return e.node.rowIndex%2!==0}},children:Object.keys(e.colDefConfig).map((function(t){var n={headerName:e.colDefConfig[t].columnName,cellClass:"default-cell"};return e.colDefConfig[t].children?Object(l.jsx)(g.AgGridColumn,Object(d.a)(Object(d.a)({},n),{},{headerClass:"group-header",children:Object.keys(e.colDefConfig[t].children).map((function(a){var r,i,o;return n=Object(d.a)(Object(d.a)({},n),{},{headerName:null===(r=e.colDefConfig[t].children)||void 0===r?void 0:r[a].columnName,headerComponentParams:{sortable:null===(i=e.colDefConfig[t].children)||void 0===i?void 0:i[a].sortable,sortState:e.sortFilterState,sort:e.sort},headerClass:"default-header",field:a,cellRenderer:K(null===(o=e.colDefConfig[t].children)||void 0===o?void 0:o[a])}),ne.includes(t)&&(n.suppressSizeToFit=!0),Object(l.jsx)(g.AgGridColumn,Object(d.a)({},n),a)}))}),t):(n=Object(d.a)(Object(d.a)({},n),{},{headerComponentParams:{sortable:e.colDefConfig[t].sortable,sortState:e.sortFilterState,sort:e.sort},headerClass:"default-header",field:t,cellRenderer:K(e.colDefConfig[t])}),ne.includes(t)&&(n.width=250,n.suppressSizeToFit=!0),Object(l.jsx)(g.AgGridColumn,Object(d.a)({},n),t))}))})})};var ie=function(e){var t=Object(a.useState)({permitType:"facility",tableWidth:"96.6vw",colDefConfig:{},rowData:[],pageSize:0,sortFilterState:{criteria:"facilityName",page:0,state:"ASC",search:""},rowHeight:void 0}),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(a.useContext)(j),c=o.dispatch;return Object(a.useEffect)((function(){c([{type:"isLoading",data:!0}]),B(e.permitType,r.sortFilterState).then((function(e){i((function(t){return Object(d.a)(Object(d.a)({},t),{},{colDefConfig:e.columns,rowData:Object(O.a)(e.facilities.content),pageSize:e.facilities.totalPages})})),c([{type:"isLoading",data:!1}])})).catch((function(e){console.log("Facility Err",e),i((function(e){return Object(d.a)({},e)})),c([{type:"isLoading",data:!1}])}))}),[c,e.permitType,r.sortFilterState]),Object(l.jsxs)("div",{className:"table-container",children:[Object(l.jsx)("div",{className:"table-title",children:"Facilities"}),r.rowData.length?Object(l.jsx)("div",{children:Object(l.jsx)(re,Object(d.a)(Object(d.a)({},r),{},{sort:function(e){i(D(e,r))}}))}):o.state.isLoading?null:Object(l.jsx)("div",{children:"No Facility Table Data"})]})},oe=n(164),ce=(n(209),{"Air Permit":"Air_Permit","Storm Water Permit":"Storm_Water_Permit","Injection Well Permit":"Injection_Well_Permit","Water Reservoirs Permit":"Water_Reservoirs_Permit","EPA Class V Cathodic Protection":"EPA_Class_V_Cathodic_Protection","North & South Evap. Ponds":"North_&_South_Evap._Ponds"}),se=["File Name","Facility Number"],le=n(124),ue=n(71),de=n(72),be=n(179),fe=n(115),je=n(165),pe=n(294),Ae=n(110),he=n(303),me=function(){function e(t,n){var a=this;Object(ue.a)(this,e),this.blobStorage=t,this.blobState=n,this.downloadQueueInner$=new be.a,this.downloadedItems$=this.downloadQueue$.pipe(Object(je.a)((function(e){return a.downloadFile(e)}))),this.downloadFile=function(e){return a.blobState.getStorageOptionsWithContainer().pipe(Object(pe.a)((function(t){return a.blobStorage.downloadBlobItem(Object(d.a)(Object(d.a)({},t),{},{filename:e})).pipe(a.getDownloadUrlFromResponse(),a.mapDownloadResponse(e,t))})))},this.mapDownloadResponse=function(e,t){return function(n){return n.pipe(Object(Ae.a)((function(n){return{filename:e,containerName:t.containerName,url:n}})),Object(he.a)({filename:e,containerName:t.containerName,url:""}))}},this.getDownloadUrlFromResponse=function(){return function(e){return e.pipe(Object(pe.a)((function(e){return Object(fe.a)(e.blobBody?e.blobBody:Promise.resolve({})).pipe(Object(Ae.a)((function(e){return window.URL.createObjectURL(e)})))})))}}}return Object(de.a)(e,[{key:"downloadQueue$",get:function(){return this.downloadQueueInner$.asObservable()}},{key:"downloadItem",value:function(e){this.downloadQueueInner$.next(e)}}]),e}(),Oe=n(101),ge=n(295),ve=n(296),xe=n(297),Ce=n(298),we=function(){function e(t){var n=this;Object(ue.a)(this,e),this.blobStorage=t,this.selectedContainerInner$=new ge.a(""),this.containers$=this.blobStorage.getContainers(this.getStorageOptions()),this.itemsInContainer$=this.selectedContainer$.pipe(Object(ve.a)((function(e){return!!e})),Object(pe.a)((function(e){return n.blobStorage.listBlobsInContainer(Object(d.a)(Object(d.a)({},n.getStorageOptions()),{},{containerName:e}))}))),this.finaliseBlobChange=function(e){return function(t){return t.pipe(Object(xe.a)((function(){return n.selectedContainerInner$.value===e&&n.selectedContainerInner$.next(e)})))}},this.scanEntries=function(){return function(e){return e.pipe(Object(Ae.a)((function(e){return Object(Oe.a)({},"".concat(e.containerName,"-").concat(e.filename),e)})),Object(Ce.a)((function(e,t){return Object(d.a)(Object(d.a)({},e),t)}),{}),Object(Ae.a)((function(e){return Object.values(e)})))}}}return Object(de.a)(e,[{key:"selectedContainer$",get:function(){return this.selectedContainerInner$.asObservable()}},{key:"getContainerItems",value:function(e){this.selectedContainerInner$.next(e)}},{key:"getStorageOptionsWithContainer",value:function(){var e=this;return this.selectedContainer$.pipe(Object(Ae.a)((function(t){return Object(d.a)(Object(d.a)({},e.getStorageOptions()),{},{containerName:t})})))}},{key:"getStorageOptions",value:function(){return{storageUri:"https://bridgei2i.blob.core.windows.net/?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D",storageAccessToken:"?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D"}}}]),e}(),ye=n(166),Ie=n(301),Be=n(26),Se=n(300),Ne=new(function(){function e(){Object(ue.a)(this,e),this.buildConnectionString=function(e){return"BlobEndpoint=".concat(e.storageUri,";")+"SharedAccessSignature=".concat(e.storageAccessToken)}}return Object(de.a)(e,[{key:"getContainers",value:function(e){var t=this.buildClient(e);return this.asyncToObservable(t.listContainers())}},{key:"listBlobsInContainer",value:function(e){var t=this.getContainerClient(e);return this.asyncToObservable(t.listBlobsFlat())}},{key:"downloadBlobItem",value:function(e){var t=this.getBlockBlobClient(e);return Object(fe.a)(t.download())}},{key:"deleteBlobItem",value:function(e){var t=this.getBlockBlobClient(e);return Object(fe.a)(t.delete())}},{key:"uploadToBlobStorage",value:function(e,t){var n=this.getBlockBlobClient(t);return this.uploadFile(n,e)}},{key:"getBlockBlobClient",value:function(e){return this.getContainerClient(e).getBlockBlobClient(e.filename)}},{key:"getContainerClient",value:function(e){return this.buildClient(e).getContainerClient(e.containerName)}},{key:"buildClient",value:function(e){return Ie.a.fromConnectionString(this.buildConnectionString(e))}},{key:"uploadFile",value:function(e,t){var n=this;return new Be.a((function(a){e.uploadBrowserData(t,{onProgress:n.onProgress(a),blobHTTPHeaders:{blobContentType:t.type}}).then(n.onUploadComplete(a,t),n.onUploadError(a))})).pipe(Object(Se.a)())}},{key:"onUploadError",value:function(e){return function(t){return e.error(t)}}},{key:"onUploadComplete",value:function(e,t){return function(){e.next(t.size),e.complete()}}},{key:"onProgress",value:function(e){return function(t){return e.next(t.loadedBytes)}}},{key:"asyncToObservable",value:function(e){return new Be.a((function(t){Object(w.a)(C.a.mark((function n(){var a,r,i,o,c,s,l;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,a=!0,r=!1,n.prev=3,o=Object(ye.a)(e);case 5:return n.next=7,o.next();case 7:return c=n.sent,a=c.done,n.next=11,c.value;case 11:if(s=n.sent,a){n.next=20;break}if(l=s,!t.closed){n.next=16;break}return n.abrupt("return");case 16:t.next(l);case 17:a=!0,n.next=5;break;case 20:n.next=26;break;case 22:n.prev=22,n.t0=n.catch(3),r=!0,i=n.t0;case 26:if(n.prev=26,n.prev=27,a||null==o.return){n.next=31;break}return n.next=31,o.return();case 31:if(n.prev=31,!r){n.next=34;break}throw i;case 34:return n.finish(31);case 35:return n.finish(26);case 36:t.complete(),n.next=42;break;case 39:n.prev=39,n.t1=n.catch(0),t.error(n.t1);case 42:case"end":return n.stop()}}),n,null,[[0,39],[3,22,26,36],[27,,31,35]])})))()})).pipe(Object(Ce.a)((function(e,t){return[].concat(Object(O.a)(e),[t])}),[]),Object(he.a)([]))}}]),e}()),ke=new we(Ne),Re=new me(Ne,ke),De=Object(a.createContext)(ke),Fe=Object(a.createContext)(Re),Pe=(n(254),n(174)),Ee=n.n(Pe);var Le=function(e){return Object(l.jsx)("div",{className:"notifier-container".concat("start"===e.show?" notifier-start slideIn":"end"===e.show?" notifier-end slideOut":"").concat("success"===e.type?" notify-success":"fail"===e.type?" notify-fail":""),children:"success"===e.type?Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(Ee.a,{}),"File downloaded Successfully."]}):"fail"===e.type?Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(H.a,{}),"File currently not available."]}):null})},Te=(n(255),function(e,t){return Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:t.map((function(t,n){return Object(l.jsx)("th",{children:t},"".concat(e,"-header-").concat(n))}))})})});var Qe=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(a.useRef)(null),c=Object(a.useCallback)((function(e){var t=e.top,n=e.bottom;t<=0&&n>250?!r&&i(!0):r&&i(!1)}),[r]);return Object(a.useEffect)((function(){var e=function(){c(o.current.getBoundingClientRect())};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[c]),{tableRef:o,isSticky:r}}(),n=t.tableRef,r=t.isSticky;return Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("table",{className:"sticky-header",children:Te(e.data.tableName,e.data.columns)}),Object(l.jsxs)("table",{ref:n,children:[Te(e.data.tableName,e.data.columns),Object(l.jsx)("tbody",{children:e.data.rows.map((function(t,n){return Object(l.jsx)("tr",{children:Object(O.a)(Array(e.data.columns.length)).map((function(n,a){return Object(l.jsx)("td",{children:t[a]?e.data.actionableColumnIndexes.includes(a)?Object(l.jsx)("button",{type:"button",className:"download-btn",onClick:function(){return e.setFileToDownload(t[a])},children:t[a]}):t[a]:null},"".concat(e.data.tableName,"-cell-").concat(a))}))},"".concat(e.data.tableName,"-row-").concat(n))}))})]})]})},Ue=function(e){return e.reduce((function(e,t,n){for(var a=!1,r=0;r<se.length;r++)if(t.includes(se[r])){a=!0;break}return a&&e.push(n),e}),[])};var Me=function(e){var t=Object(a.useContext)(j),n=t.dispatch,r=Object(a.useContext)(Fe),i=Object(a.useState)({tableName:"",columns:[],rows:[],actionableColumnIndexes:[]}),o=Object(b.a)(i,2),c=o[0],s=o[1];return Object(a.useEffect)((function(){fetch("./".concat(ce[e.permitType],".xlsx")).then((function(e){return e.blob()})).then((function(e){var t=e,n=new FileReader;n.onload=function(e){var t,n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.result,a=le.read(n,{type:"binary"}),r=a.SheetNames[0],i=a.Sheets[r],o=le.utils.sheet_to_json(i,{header:1});if(o.length>=2){var c=o,l=Object(oe.a)(c),u=l[0],d=l.slice(1),b=u.map((function(e){return function(e){if(null==e||""===e)return e;e=e.trim();for(var t="",n=0;n<e.length;n++)/[A-Z]/.test(e[n])&&0!==n&&/[a-z]/.test(e[n-1])&&(t+=" "),0===n&&/[a-z]/.test(e[n])?t+=e[n].toUpperCase():t+=e[n];return t}(e.replace(/\s\s+/g," "))}));s({tableName:r,columns:b,rows:d,actionableColumnIndexes:Ue(b)})}},n.readAsBinaryString(t)}))}),[e.permitType]),Object(a.useEffect)((function(){var e=r.downloadedItems$.subscribe((function(e){e.filename&&e.url&&(console.log("FiletoDownload",e),e.filename.includes(".pdf")?window.open(e.url):function(e,t){var n,a=document.createElement("a");a.href=t,a.setAttribute("download",e),document.body.appendChild(a),a.click(),null===(n=a.parentNode)||void 0===n||n.removeChild(a)}(e.filename.split("/").pop(),e.url),F(n,"success"))}),(function(e){console.log("Err",e),F(n,"fail")}));return function(){return e.unsubscribe()}}),[n,r.downloadedItems$]),c.columns.length&&c.rows.length?Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"excel-viewer-container",children:Object(l.jsx)(Qe,{data:c,setFileToDownload:function(e){!function(e){n([{type:"isLoading",data:!0}]);var t=JSON.parse(sessionStorage.getItem("BlobData")).blobList.find((function(t){return t.includes(e)}));console.log("Found FIleName",t),t?r.downloadItem(t):F(n,"fail")}(e)}})}),Object(l.jsx)(Le,Object(d.a)({},t.state.showNotifier))]}):Object(l.jsx)("div",{children:"No Table Data Available"})};var We=function(){var e=Object(a.useContext)(De),t=Object(a.useContext)(De),n=Object(a.useState)(m[0].name),r=Object(b.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){e.getContainerItems("bpx-permits")}),[e]),Object(a.useEffect)((function(){var e=t.itemsInContainer$.subscribe((function(e){console.log("Container Items",e);var t={date:(new Date).toDateString(),blobList:e.map((function(e){return e.name}))};sessionStorage.setItem("BlobData",JSON.stringify(t))}));return function(){return e.unsubscribe()}}),[t.itemsInContainer$]),Object(l.jsxs)("div",{className:"home-wrapper",children:[Object(l.jsx)(h,{options:m,handleRadioButtonToggle:function(e){o(e.target.value)},selected:i}),Object(l.jsx)("div",{className:"table-wrapper",children:"Air Permit"===i?Object(l.jsx)(ie,{permitType:i}):Object(l.jsx)(Me,{permitType:i})})]})};var He=function(){var e=Object(c.f)(),t=e.facilityId,n=e.permitId,r=e.fileName,i=Object(a.useState)(),o=Object(b.a)(i,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){t&&n&&N(t,n).then((function(e){var t=new Blob([e],{type:"application/pdf"}),n=URL.createObjectURL(t);u(n)})),r&&k(r).then((function(e){var t=new Blob([e],{type:"application/pdf"}),n=URL.createObjectURL(t);u(n)}))}),[t,r,n]),s?Object(l.jsx)("div",{children:Object(l.jsx)("iframe",{style:{width:"99.6vw",height:"98.7vh"},src:s,"data-type":"application/pdf",title:"title"})}):Object(l.jsx)("div",{children:"Loading..."})},Ye=(n(257),n(175)),Ve=n.n(Ye);var ze=function(){var e=Object(c.f)().facilityId,t=Object(a.useState)({tableWidth:"96.6vw",permitType:"permit",colDefConfig:{},rowData:[],sortFilterState:{criteria:"permitNumber",page:0,state:"ASC",search:""},rowHeight:100}),n=Object(b.a)(t,2),r=n[0],i=n[1],s=Object(a.useContext)(j),u=s.dispatch;return Object(a.useEffect)((function(){u([{type:"isLoading",data:!0}]),S(e,r.sortFilterState).then((function(e){i((function(t){return Object(d.a)(Object(d.a)({},t),{},{colDefConfig:e.columns,rowData:Object(O.a)(e.permits)})})),u([{type:"isLoading",data:!1}])})).catch((function(e){console.log("Permit Err",e),u([{type:"isLoading",data:!1}])}))}),[u,e,r.sortFilterState]),Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"permit-table-wrapper",children:Object(l.jsxs)("div",{className:"table-container",children:[Object(l.jsx)(L,{title:"Back",children:Object(l.jsx)(o.b,{to:"/",className:"back-btn",children:Object(l.jsx)(Ve.a,{})})}),Object(l.jsx)("div",{className:"table-title",children:"Permits"}),r.rowData.length?Object(l.jsx)("div",{children:Object(l.jsx)(re,Object(d.a)(Object(d.a)({},r),{},{sort:function(e){i(D(e,r))}}))}):s.state.isLoading?null:Object(l.jsx)("div",{children:"No Permit Table Data"})]})}),Object(l.jsx)(Le,Object(d.a)({},s.state.showNotifier))]})};var Je=function(){var e=Object(a.useContext)(j);return Object(l.jsxs)(a.Fragment,{children:[e.state.isLoading&&Object(l.jsx)(u,{}),Object(l.jsx)(o.a,{children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",component:We}),Object(l.jsx)(c.a,{exact:!0,path:"/permits/:facilityId",component:ze}),Object(l.jsx)(c.a,{exact:!0,path:"/pdf/:facilityId/:permitId",component:He}),Object(l.jsx)(c.a,{exact:!0,path:"/pdfByFileName/:fileName",component:He})]})})]})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,305)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};i.a.render(Object(l.jsx)(A,{children:Object(l.jsx)(Je,{})}),document.getElementById("root")),Ze()}},[[258,1,2]]]);
//# sourceMappingURL=main.da6ad6e8.chunk.js.map