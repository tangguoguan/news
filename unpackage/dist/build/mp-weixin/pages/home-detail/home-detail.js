(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home-detail/home-detail"],{"066f":function(t,e,n){"use strict";(function(t){n("7f0e");o(n("66fd"));var e=o(n("420c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},1503:function(t,e,n){},"2f1c":function(t,e,n){"use strict";n.r(e);var o=n("c10a"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"420c":function(t,e,n){"use strict";n.r(e);var o=n("c4c2"),i=n("2f1c");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("5ab1");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},"5ab1":function(t,e,n){"use strict";var o=n("1503"),i=n.n(o);i.a},c10a:function(t,e,n){"use strict";(function(t){function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){Promise.all([n.e("common/vendor"),n.e("components/gaoyia-parse/parse")]).then(function(){return resolve(n("4636"))}.bind(null,n)).catch(n.oe)},s={components:{uParse:r},data:function(){return{formData:{},noData:'<p style="text-align:center;color:#666">详情加载中...</p>',commentsList:[],replyFormData:{},showPopup:!1}},onLoad:function(t){this.formData=JSON.parse(t.params),this.getDetail(),this.getComments()},methods:{open:function(){t.navigateTo({url:"../detail-comments/detail-comments?id="+this.formData._id})},thumbsup:function(t){this.setUpdateThumbs(t)},likeTap:function(t){console.log("收藏文章"),this.setUpadteLike(t)},follow:function(t){console.log("关注"),this.setUpdateAuhtor(t)},openComment:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()},submit:function(t){this.setUpdateComment(i({content:t},this.replyFormData))},reply:function(t){this.replyFormData={comment_id:t.comments.comment_id,is_reply:t.is_reply},t.comments.reply_id&&(this.replyFormData.reply_id=t.comments.reply_id),console.log(this.replyFormData),this.openComment()},setUpdateComment:function(e){var n=this,o=i({article_id:this.formData._id},e);t.showLoading(),this.$api.update_comment(o).then((function(e){console.log(e),t.hideLoading(),t.showToast({title:"评论发布成功"}),n.getComments(),n.close(),n.replyFormData={}}))},getDetail:function(){var t=this;this.$api.get_detail({article_id:this.formData._id}).then((function(e){var n=e.data;t.formData=n,console.log(e)}))},getComments:function(){var t=this;this.$api.get_comments({article_id:this.formData._id}).then((function(e){console.log(e);var n=e.data;t.commentsList=n}))},setUpdateAuhtor:function(e){var n=this;t.showLoading(),this.$api.update_author({author_id:e}).then((function(e){t.hideLoading(),n.formData.is_author_like=!n.formData.is_author_like,t.$emit("update_author"),t.showToast({title:n.formData.is_author_like?"关注作者成功":"取消关注作者",icon:"none"})}))},setUpadteLike:function(e){var n=this;t.showLoading(),this.$api.update_like({article_id:e}).then((function(e){t.hideLoading(),n.formData.is_like=!n.formData.is_like,t.$emit("update_article","follow"),t.showToast({title:n.formData.is_like?"收藏成功":"取消收藏",icon:"none"}),console.log("收藏成功")}))},setUpdateThumbs:function(e){var n=this;t.showLoading(),this.$api.update_thumbsup({article_id:e}).then((function(e){t.hideLoading(),n.formData.is_thumbs_up=!0,n.formData.thumbs_up_count++,t.showToast({title:e.msg})}))}}};e.default=s}).call(this,n("543d")["default"])},c4c2:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={commentsBox:function(){return Promise.all([n.e("common/vendor"),n.e("components/comments-box/comments-box")]).then(n.bind(null,"a13b"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"33c0"))},release:function(){return n.e("components/release/release").then(n.bind(null,"46a9"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["066f","common/runtime","common/vendor"]]]);