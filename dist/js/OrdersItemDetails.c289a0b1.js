(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OrdersItemDetails"],{"1a91":function(t,e,r){},3835:function(t,e,r){"use strict";function i(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,s=!1,n=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0)if(r.push(a.value),e&&r.length===e)break}catch(c){s=!0,n=c}finally{try{i||null==o["return"]||o["return"]()}finally{if(s)throw n}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function a(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return i(t)||s(t,e)||a(t,e)||o()}},"7db0":function(t,e,r){"use strict";var i=r("23e7"),s=r("b727").find,n=r("44d2"),a=r("ae40"),o="find",c=!0,d=a(o);o in[]&&Array(1)[o]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!d},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)},a630:function(t,e,r){var i=r("23e7"),s=r("4df4"),n=r("1c7e"),a=!n((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:s})},d28b:function(t,e,r){var i=r("746f");i("iterator")},e01a:function(t,e,r){"use strict";var i=r("23e7"),s=r("83ab"),n=r("da84"),a=r("5135"),o=r("861d"),c=r("9bf2").f,d=r("e893"),u=n.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};d(m,u);var f=m.prototype=u.prototype;f.constructor=m;var p=f.toString,v="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:m})}},ea4b:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Details"},[r("AppNavBack"),t.item?[r("AppHeading",{attrs:{title:t.getName,subtitle:"Check your order"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("span",{staticClass:"total-price bottom-16"},[t._v(t._s(t.currency)+" "+t._s(t.getTotalPrice()))]),t.isNewOrder?r("button",{staticClass:"button-wide bottom-24",attrs:{disabled:t.createOrderLoading},on:{click:function(e){return t.prepareOrder()}}},[t.createOrderLoading?r("AppLoading",{attrs:{type:"ring"}}):[t._v("Place Order")]],2):t._e()])])]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"row offset-16"},[r("div",{staticClass:"col-12"},[r("OrdersProductsList",{attrs:{isNewItem:t.isNewOrder,list:t.item.products,selectItem:t.selectItem}})],1)])])])])]:t._e()],2)},s=[],n=(r("4de4"),r("7db0"),r("4160"),r("159b"),r("3835")),a=(r("96cf"),r("1da1")),o=r("5530"),c=r("2f62"),d=r("977a"),u=r("ae7b"),l=r("29e5"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"OrdersProductsList"},t._l(t.list,(function(e,i){return r("OrdersProductsItem",{key:i,staticClass:"order-item-details",attrs:{item:e,isNewItem:t.isNewItem},nativeOn:{click:function(r){return t.selectItem(e)}}})})),1)},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"OrdersProductsItem"},[r("div",{staticClass:"OrdersProductsItem__img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.getImage(),error:t.client.cover_image},expression:"{\n\t\t\t\t'src': getImage(),\n\t\t\t\t'error': client.cover_image\n\t\t\t}"}],staticClass:"img--bg",attrs:{alt:"dish"}})]),r("div",{staticClass:"OrdersProductsItem__details"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("span",{staticClass:"OrdersProductsItem__category"},[t._v(" "+t._s(t.getTranslation(t.item.product[0].categories[0].name))+" ")])]),t.isNewItem?r("div",{staticClass:"col-4 text-right",on:{click:function(e){return t.removeProduct(e)}}},[r("button",{staticClass:"OrdersProductsItem__action"},[r("CloseIcon")],1)]):t._e()]),r("h5",{staticClass:"OrdersProductsItem__title"},[t._v(t._s(t.getTranslation(t.item.product[0].name)))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"OrdersProductsItem__price"},[r("span",[t._v("x"+t._s(t.item.order_quantity))]),t._v(" "+t._s(t.currency)+" "+t._s(t.item.product[0].price)+" ")])])])])])},v=[],b=(r("d3b7"),{props:["isNewItem","item"],components:{CloseIcon:function(){return r.e("chunk-0b2dfe34").then(r.t.bind(null,"2930",7))}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({removeOrderProduct:"orders/removeOrderProduct"})),{},{getImage:function(){return this.item.product[0].images[0]},removeProduct:function(t){t.stopPropagation(),this.removeOrderProduct(this.item)}})}),h=b,g=(r("f0e5"),r("2877")),O=Object(g["a"])(h,p,v,!1,null,"680b3b12",null),y=O.exports,w={props:["isNewItem","list","selectItem"],components:{OrdersProductsItem:y}},I=w,_=Object(g["a"])(I,m,f,!1,null,"fe16134e",null),C=_.exports,A={props:["selectedItem"],components:{AppNavBack:d["a"],AppHeading:u["a"],AppLoading:l["a"],OrdersProductsList:C},data:function(){return{item:null,isNewOrder:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])({orders:"orders/orders",newOrder:"orders/newOrder",createOrderLoading:"orders/createOrderLoading"})),{},{getName:function(){return this.item.uuid?"Order #".concat(this.item.uuid.substr(this.item.uuid.length-3).toUpperCase()):"New order"}}),mounted:function(){if(this.selectedItem)this.item=this.selectedItem;else if(this.orders.length){var t=this.$router.history.current.params.orderId;this.item=this.orders.find((function(e){return e.uuid===t}))}else this.fetchData();this.checkIsNewOrder()},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({createOrder:"orders/createOrder",getOrders:"orders/getOrders"})),{},{fetchData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getOrders();case 2:r=t.$router.history.current.params.orderId,"new-order"!==r?(i=t.orders.filter((function(t){return t.uuid===r})),i.length&&(s=Object(n["a"])(i,1),t.item=s[0])):t.item=t.newOrder;case 4:case"end":return e.stop()}}),e)})))()},checkIsNewOrder:function(){var t=this.$router.history.current.params.orderId;"new-order"===t&&(this.isNewOrder=!0)},getTotalPrice:function(){var t=0;return this.item.products.forEach((function(e){t+=e.product[0].price*e.order_quantity})),t},prepareOrder:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.item||!t.item.products||t.item.products.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,t.createOrder(t.item);case 5:r=t.$router.history.current.params.orderId,t.$router.push({name:"orders-item-details-success",params:{orderId:r}}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},selectItem:function(t){var e=t.product,r=e[0];this.$router.push({name:"menu-item-details",params:{categoryId:r.categories[0].id,productId:r.id,selectedItem:r,onlyView:!0}})}})},P=A,j=Object(g["a"])(P,i,s,!1,null,"310ebd2f",null);e["default"]=j.exports},f0e5:function(t,e,r){"use strict";var i=r("1a91"),s=r.n(i);s.a},fb6a:function(t,e,r){"use strict";var i=r("23e7"),s=r("861d"),n=r("e8b5"),a=r("23cb"),o=r("50c4"),c=r("fc6a"),d=r("8418"),u=r("b622"),l=r("1dde"),m=r("ae40"),f=l("slice"),p=m("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),b=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var r,i,u,l=c(this),m=o(l.length),f=a(t,m),p=a(void 0===e?m:e,m);if(n(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?s(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,f,p);for(i=new(void 0===r?Array:r)(h(p-f,0)),u=0;f<p;f++,u++)f in l&&d(i,u,l[f]);return i.length=u,i}})}}]);
//# sourceMappingURL=OrdersItemDetails.c289a0b1.js.map