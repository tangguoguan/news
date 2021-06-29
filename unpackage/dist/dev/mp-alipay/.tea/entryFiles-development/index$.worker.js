/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../uni_modules/uni-icons/components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/navbar/navbar?hash=dae325d4c951895b814354c64fe84b4607f17cd3');
require('../../components/tab/tab?hash=dae325d4c951895b814354c64fe84b4607f17cd3');
require('../../components/list-scroll/list-scroll?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/likes/likes?hash=dae325d4c951895b814354c64fe84b4607f17cd3');
require('../../components/list-card/list-card?hash=e0f2a6dc341f22d810f5b93bc1eb28d2ba77e03a');
require('../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/list/list-item?hash=69b8da140cc84734b9be13c5386173ea44a2bc19');
require('../../components/list/list?hash=97a3f0b49d18befee70a599d5f62115682226a62');
require('../../components/list-author/list-author?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/comments-box/comments-box?hash=80fdd31908135e0c8080c03c9bb073f96011233e');
require('../../uni_modules/uni-transition/components/uni-transition/uni-transition?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../uni_modules/uni-popup/components/uni-popup/uni-popup?hash=489c6f1237693efc95eb079e631461f2cea54e4d');
require('../../components/release/release?hash=2ab0614a386f4c55183148085b272a6d11a0731b');
require('../../components/gaoyia-parse/components/wxParseImg?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/gaoyia-parse/components/wxParseVideo?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/gaoyia-parse/components/wxParseAudio?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/gaoyia-parse/components/wxParseTable?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/gaoyia-parse/components/wxParseTemplate11?hash=a361c7ac70b2787bb4f6403e4c358d47459fda55');
require('../../components/gaoyia-parse/components/wxParseTemplate10?hash=6c4e9abbffbecad61906e6dc41748b4d59f45350');
require('../../components/gaoyia-parse/components/wxParseTemplate9?hash=c9057e49060debe052702330528fc94e4b9b60ec');
require('../../components/gaoyia-parse/components/wxParseTemplate8?hash=2ce376d0bfc8ab3b633b1b0572cbd15e139d65e0');
require('../../components/gaoyia-parse/components/wxParseTemplate7?hash=317daab1ac18eb06d5a0a23df6bce19633f5c70a');
require('../../components/gaoyia-parse/components/wxParseTemplate6?hash=ba6ed979d4307e5d23e8ca1eba1d3b2961802024');
require('../../components/gaoyia-parse/components/wxParseTemplate5?hash=d2cf2f62b014565845ccb6840f14ce4451c5d8d1');
require('../../components/gaoyia-parse/components/wxParseTemplate4?hash=0b50ca34a01d9058789fe579fd3f94be1995b2e2');
require('../../components/gaoyia-parse/components/wxParseTemplate3?hash=bd2ada6053b65761b2f5af702556f9965413b241');
require('../../components/gaoyia-parse/components/wxParseTemplate2?hash=95c942216591538e03a0e8c7f6a230cd28ee9fdb');
require('../../components/gaoyia-parse/components/wxParseTemplate1?hash=f3b709744e77e1929ebad2bdd986ffe1c677bb07');
require('../../components/gaoyia-parse/components/wxParseTemplate0?hash=c0769a429d7e44d1639efe4cc1dbe15185cbf634');
require('../../components/gaoyia-parse/parse?hash=dedbcb6e82c26b76fab92362d643f5fc6465c464');
require('../../pages/tabbar/index/index?hash=14ad0d62d4cd3ccdb029b0b4093e31fcee16776c');
require('../../pages/tabbar/follow/follow?hash=2a18ad6e1f052cb4d0bf07a2b5d8a97f744d77ec');
require('../../pages/tabbar/my/my?hash=fb80868c656e13db4f1c7d7159dd9f3ce5d5205e');
require('../../pages/home-search/home-search?hash=486a4c34e1cafcaef4f99b84c15bf07ca8255da1');
require('../../pages/home-label/home-label?hash=5ea44838ce38f9b8206f40a34a2a717762338f2d');
require('../../pages/home-detail/home-detail?hash=bd420ad0c409c8549c89e8ceada8d98ca92f8671');
require('../../pages/detail-comments/detail-comments?hash=c46cf4f17b104692814566aa94c796dd57530eea');
require('../../pages/my-article/my-article?hash=20096aedb09df57648008e137b58cdca37924b06');
require('../../pages/feedback/feedback?hash=fb80868c656e13db4f1c7d7159dd9f3ce5d5205e');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}