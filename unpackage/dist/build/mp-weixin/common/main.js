(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"540b":function(e,t,n){},6602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={onLaunch:function(){var e=this;console.log("App Launch"),this.$api.get_user({user_id:"60a1e22e4c73e70001a8b6d2"}).then((function(t){var n=t.data;e.$store.dispatch("set_userinfo",n)}))},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=r},"6c02":function(e,t,n){"use strict";n.r(t);var r=n("6602"),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a},bcd4:function(e,t,n){"use strict";(function(e){n("7f0e");var t=u(n("66fd")),r=u(n("e349")),o=u(n("84c2")),c=u(n("7c2a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$api=o.default,r.default.mpType="app";var l=new t.default(i({store:c.default},r.default));e(l).$mount()}).call(this,n("543d")["createApp"])},d8cd:function(e,t,n){"use strict";var r=n("540b"),o=n.n(r);o.a},e349:function(e,t,n){"use strict";n.r(t);var r=n("6c02");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("d8cd");var c,u,a,i,f=n("f0c5"),l=Object(f["a"])(r["default"],c,u,!1,null,null,null,!1,a,i);t["default"]=l.exports}},[["bcd4","common/runtime","common/vendor"]]]);