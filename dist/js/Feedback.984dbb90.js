(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Feedback"],{"23cd":function(e,t,a){},"6e7a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Feedback"},[a("AppNavBack",{staticClass:"bottom-8",attrs:{title:"Feedback"},on:{click:function(t){return e.navigateToOrders()}}}),a("AppHeading",{attrs:{title:"Describe your impression"}}),a("div",{staticClass:"feedback-block"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",{staticClass:"feedback-block__title"},[e._v("Feedback")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"feedback-block__input",attrs:{type:"text",placeholder:"Some words"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}}),a("p",{staticClass:"feedback-block__text"},[e._v("no more than 500 symbols")])])])])]),a("div",{staticClass:"buttons-block"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"button-wide",on:{click:function(t){return e.prepareFeedback()}}},[e._v(" Sent ")])])])])])],1)},s=[],c=(a("4de4"),a("96cf"),a("1da1")),n=a("5530"),i=a("2f62"),o=a("977a"),d=a("ae7b"),l={components:{AppNavBack:o["a"],AppHeading:d["a"]},data:function(){return{review:""}},computed:Object(n["a"])({},Object(i["c"])({createFeedbackLoading:"orders/createFeedbackLoading",orders:"orders/orders"})),created:function(){this.orders.length||this.getOrders()},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])({createFeedback:"orders/createFeedback",getOrders:"orders/getOrders"})),{},{prepareFeedback:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.review){t.next=2;break}return t.abrupt("return");case 2:if(a=e.orders.filter((function(e){return!e.review})),!a.length){t.next=13;break}return t.prev=4,t.next=7,e.createFeedback({orders:a,review:e.review});case 7:e.navigateToOrders(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})))()},navigateToOrders:function(){this.$router.push({path:"/"})}})},u=l,b=(a("da89"),a("2877")),v=Object(b["a"])(u,r,s,!1,null,"2e770578",null);t["default"]=v.exports},da89:function(e,t,a){"use strict";var r=a("23cd"),s=a.n(r);s.a}}]);
//# sourceMappingURL=Feedback.984dbb90.js.map