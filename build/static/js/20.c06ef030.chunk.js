(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{1218:function(e,t,n){"use strict";n.r(t);var r=n(63),a=n(46),c=n(19),s=n(1),i=n(90),o=n(43),u=n(37),l=n(232),p=n(227),d=n(210),h=n(397),j=(n(258),n(398)),b=n(2),f={title:"",description:"",price:"",categories:[],category:"",subs:[],shipping:"",quantity:"",images:[],gst:"",colors:["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],color:"",brands:"",material:"",property:"",design:"",style:"",application:"",instruction:"",width:"",length:"",weight:"",repeatlength:"",rollLength:""};t.default=function(){var e=Object(u.c)((function(e){return Object(c.a)({},e)})).user,t=Object(s.useState)(f),n=Object(a.a)(t,2),m=n[0],O=n[1],g=Object(s.useState)(!1),x=Object(a.a)(g,2),v=x[0],N=x[1],E=Object(s.useState)([]),S=Object(a.a)(E,2),y=S[0],C=S[1],w=Object(s.useState)(!1),M=Object(a.a)(w,2),L=M[0],k=M[1];Object(s.useEffect)((function(){_()}),[]);var _=function(){Object(p.b)().then((function(e){return O(Object(c.a)(Object(c.a)({},m),{},{categories:e.data}))}))};return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-2",children:Object(b.jsx)(i.a,{})}),Object(b.jsxs)("div",{className:"col-md-10",children:[v?Object(b.jsx)(d.a,{}):Object(b.jsx)("h4",{children:"Product Create"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"p-3",children:Object(b.jsx)(j.a,{values:m,setValues:O,setLoading:N})}),Object(b.jsx)(h.a,{handleSubmit:function(t){t.preventDefault(),N(!0),Object(l.a)(m,e.token).then((function(e){console.log(e),N(!1),window.alert('"'.concat(e.data.title,'" is created')),window.location.reload()})).catch((function(e){console.log(e.response),N(!1),o.b.error(e.response.data.err)}))},handleChange:function(e){O(Object(c.a)(Object(c.a)({},m),{},Object(r.a)({},e.target.name,e.target.value)))},values:m,handleSubsChange:function(e){e.preventDefault(),O(Object(c.a)(Object(c.a)({},m),{},{subs:[],category:e.target.value})),Object(p.d)(e.target.value).then((function(e){console.log(e.data),C(e.data)})),k(!0)},subOptions:y,showSub:L,setValues:O})]})]})})}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=r.createContext(void 0),c=function(e){var t=e.children,n=e.size;return r.createElement(a.Consumer,null,(function(e){return r.createElement(a.Provider,{value:n||e},t)}))};t.b=a},227:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h}));var r=n(13),a=n.n(r),c=n(31),s=n(25),i=n.n(s),o=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/category/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("http://52.24.2.108:8000/api","/category/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("http://52.24.2.108:8000/api","/category/").concat(t),n,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://52.24.2.108:8000/api","/category"),t,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/product/subs/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},228:function(e,t,n){"use strict";var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t.a=r},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return j})),n.d(t,"i",(function(){return b})),n.d(t,"h",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(13),a=n.n(r),c=n(31),s=n(25),i=n.n(s),o=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://52.24.2.108:8000/api","/product"),t,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/products/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("http://52.24.2.108:8000/api","/product/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/product/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("http://52.24.2.108:8000/api","/product/").concat(t),n,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://52.24.2.108:8000/api","/products"),{sort:t,order:n,page:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/products/total"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("http://52.24.2.108:8000/api","/product/star/").concat(t),{star:n},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://52.24.2.108:8000/api","/product/related/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://52.24.2.108:8000/api","/search/filters"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},238:function(e,t,n){"use strict";var r=n(1),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},c=n(86),s=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};s.displayName="CloseOutlined";t.a=r.forwardRef(s)},258:function(e,t,n){"use strict";n(1);var r=n(2);t.a=function(e){var t=e.keyword,n=e.setKeyword;return Object(r.jsx)("div",{className:"container pt-4 pb-4",children:Object(r.jsx)("input",{type:"search",className:"form-control mB-4",value:t,onChange:function(e){e.preventDefault(),n(e.target.value.toLowerCase())},placeholder:"Filter"})})}},397:function(e,t,n){"use strict";var r=n(19),a=(n(1),n(625)),c=n(2),s=a.a.Option;t.a=function(e){var t=e.handleChange,n=e.handleSubmit,i=e.values,o=e.handleSubsChange,u=e.subOptions,l=e.showSub,p=e.setValues,d=i.title,h=i.description,j=i.price,b=i.categories,f=(i.category,i.subs),m=(i.shipping,i.quantity),O=(i.images,i.colors),g=(i.brands,i.color,i.brand),x=(i.section,i.sections,i.gst),v=(i.productid,i.material),N=(i.materials,i.design),E=i.application,S=i.instruction,y=i.width,C=i.length,w=i.weight,M=i.repeatLength,L=i.rollLength,k=i.property,_=(i.properties,i.style);i.photo,i.delivery;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{type:"text",name:"title",className:"form-control",value:d,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("input",{type:"text",name:"description",className:"form-control",value:h,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"brand"}),Object(c.jsx)("input",{type:"text",name:"brand",className:"form-control",value:g,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Material"}),Object(c.jsx)("input",{type:"text",name:"material",className:"form-control",value:v,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Property"}),Object(c.jsx)("input",{type:"text",name:"property",className:"form-control",value:k,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Design"}),Object(c.jsx)("input",{type:"text",name:"design",className:"form-control",value:N,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"style"}),Object(c.jsx)("input",{type:"text",name:"style",className:"form-control",value:_,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"application"}),Object(c.jsx)("input",{type:"text",name:"application",className:"form-control",value:E,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Instruction"}),Object(c.jsx)("input",{type:"text",name:"instruction",className:"form-control",value:S,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Width (in cm)"}),Object(c.jsx)("input",{type:"text",name:"width",className:"form-control",value:y,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Length (in cm)"}),Object(c.jsx)("input",{type:"text",name:"length",className:"form-control",value:C,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Weight (in gm)"}),Object(c.jsx)("input",{type:"text",name:"weight",className:"form-control",value:w,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Repeat Length (in inch)"}),Object(c.jsx)("input",{type:"text",name:"repeatLength",className:"form-control",value:M,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Roll Length (in cm)"}),Object(c.jsx)("input",{type:"text",name:"rollLength",className:"form-control",value:L,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Price"}),Object(c.jsx)("input",{type:"number",name:"price",className:"form-control",value:j,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"GST (%)"}),Object(c.jsx)("input",{type:"number",name:"gst",className:"form-control",value:x,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Shipping"}),Object(c.jsxs)("select",{name:"shipping",className:"form-control",onChange:t,children:[Object(c.jsx)("option",{children:"---Please select---"}),Object(c.jsx)("option",{value:"No",children:"No"}),Object(c.jsx)("option",{value:"Yes",children:"Yes"})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Quantity"}),Object(c.jsx)("input",{type:"number",name:"quantity",className:"form-control",value:m,onChange:t})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Color"}),Object(c.jsxs)("select",{name:"color",className:"form-control",onChange:t,children:[Object(c.jsx)("option",{children:"---Please select---"}),O.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Category"}),b.length>0&&Object(c.jsxs)("select",{name:"category",className:"form-control",onChange:o,children:[Object(c.jsx)("option",{children:"---Please Select---"}),b.map((function(e){return Object(c.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(c.jsx)("br",{}),l&&Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Sub Categories"}),Object(c.jsx)(a.a,{mode:"multiple",style:{width:"100%"},placeholder:"---Please Select---",value:f,onChange:function(e){return p(Object(r.a)(Object(r.a)({},i),{},{subs:e}))},children:u.length>0&&u.map((function(e){return Object(c.jsx)(s,{value:e._id,children:e.name},e._id)}))})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-outline-info",children:"Save"})]})}},398:function(e,t,n){"use strict";var r=n(19),a=(n(1),n(108)),c=n.n(a),s=n(25),i=n.n(s),o=n(37),u=n(212),l=n(211),p=n(2);t.a=function(e){var t=e.values,n=e.setValues,a=e.setLoading,s=Object(o.c)((function(e){return Object(r.a)({},e)})).user,d=t.images;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row",children:d&&d.map((function(e){return Object(p.jsx)(u.a,{count:"X",className:"mr-5 mb-3",onClick:function(){return c=e.public_id,a(!0),void i.a.post("".concat("http://52.24.2.108:8000/api","/removeimages"),{public_id:c},{headers:{authtoken:s?s.token:""}}).then((function(e){a(!1);var s=d.filter((function(e){return e.public_id!==c}));n(Object(r.a)(Object(r.a)({},t),{},{images:s}))})).catch((function(e){a(!1),console.log(e)}));var c},style:{cursor:"pointer"},children:Object(p.jsx)(l.a,{src:e.url,shape:"square",size:150})},e.public_id)}))}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("label",{className:"btn btn-primary btn-raised",children:["Choose File",Object(p.jsx)("input",{type:"file",multiple:!0,accept:"images",hidden:!0,onChange:function(e){a(!0);for(var o=e.target.files,u=d,l=0;l<o.length;l++)c.a.imageFileResizer(o[l],720,720,"JPEG",100,0,(function(e){i.a.post("".concat("http://52.24.2.108:8000/api","/uploadimages"),{image:e},{headers:{authtoken:s?s.token:""}}).then((function(e){a(!1),u.push(e.data),n(Object(r.a)(Object(r.a)({},t),{},{images:u}))})).catch((function(e){a(!1),console.log("CLOUDINARY ERROR: ",e)}))}),"base64")}})]})})]})}}}]);
//# sourceMappingURL=20.c06ef030.chunk.js.map