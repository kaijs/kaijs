/**
@description base view for h5
*/
define([
  'kaiView/viewUtils/index',
  'appViewUtils/index',
  "page/c.page.view",
  "data/store/c.common.store",
  "cutil/c.util.common"
],
function(
  kaiViewIndexViewUtils,
  indexViewUtils,
  PageView,
  CommonStore,
  utilCommon
){

  "use strict";
  var  extension = {
  };
  //alert('生成page extension ');
  //extension for base view --begin
  extension = {
    'super': PageView.prototype,
    /**
    *  重写 initialize，初始化view
    *  @name BaseView#initialize
    */
    'initialize': function() {
      var superclass = this['super'].initialize.apply(this, arguments);
      this.debugData = {
        isDebug:true,
        isLogin:true
      };
      //处理自己的事情
      return superclass;
    },
    /**
    *  重写capgeview show
    *  @name BaseView#show
    */
    show: function() {
      //console.log(this.referrer);
      var superclass = this['super'].show.apply(this, arguments);
      //初始化路由
      //zxRoute.initHandle(this, this.viewname);
      return superclass;
    },
  };//extension end

  _.extend(extension,kaiViewIndexViewUtils,indexViewUtils,
    {
    }
  );
  return extension;
});
