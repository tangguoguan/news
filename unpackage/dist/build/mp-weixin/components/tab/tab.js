(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{1148:function(n,t,e){"use strict";e.r(t);var u=e("f7d0"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);t["default"]=a.a},"4b4b":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return u}));var u={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"33c0"))}},a=function(){var n=this,t=n.$createElement;n._self._c},c=[]},"83f6":function(n,t,e){"use strict";e.r(t);var u=e("4b4b"),a=e("1148");for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("8c5e");var i,o=e("f0c5"),r=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=r.exports},"8c5e":function(n,t,e){"use strict";var u=e("c737"),a=e.n(u);a.a},c737:function(n,t,e){},f7d0:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"tab",props:{list:{type:Array,default:function(){return[]}},tabIndex:{type:Number,default:0}},watch:{tabIndex:function(n){this.activeIndex=n}},data:function(){return{activeIndex:0}},methods:{open:function(){n.navigateTo({url:"/pages/home-label/home-label"})},clickTab:function(n,t){console.log(n,"tab点击了"),this.activeIndex=t,this.$emit("tab",{data:n,index:t})}}};t.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("83f6"))
        })
    },
    [['components/tab/tab-create-component']]
]);
