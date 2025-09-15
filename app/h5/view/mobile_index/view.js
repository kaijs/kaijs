/*登录*/
define([
  'kaiView/h5/view/mobile_index/view',
  'page/viewFactory',
  'appViewUtils/index',
  //'appViewUtils/mobile_index',
  './events/events',
  'cutil/c.util.validate',
],
function (
  kaiViewMobileIndex,
  CommonPageFactory,
  indexViewUtils,
  //viewUtils,
  Events,
  validate
) {

  "use strict";
  //var baseview = CommonPageFactory.create('appBaseView');
  var View = kaiViewMobileIndex.extend({
    //是否显示title
    showHeader:false,

    /*可以冒泡的事件可以绑定在这里 delegate*/
    events: {
      //'click .js_button_sendVerifyCode': _.debounce(viewUtils.sendVerifyCode,250,true,function(){}),
      //'click .mobile_back': _.debounce(viewUtils.goBack,250,true,function(){})
    },

    onCreate: function () {//初次加载时候使用
      var self = this;
    },

    els:{
      'loginButton':{
        selector:'.js_button_login',
        type:'jquery'
      }
    },

    onShow: function () {//在再显示时候调用 在 create之后调用
      var self = this;
    },

    onHide: function () {//view is hidden
      var self = this;
    },

    init: function () {
      var self = this;
    },

    prepareViewData: function () {
      var self = this;
      self.turnOn();
    },

    /*prepare events*/
    prepareEvents: function () {
        var self = this;
        self.event = Events;
    },

    prepareViewUtils:function(){
      var self = this;
      self.viewUtils = _.extend({},indexViewUtils);
    },

    prepareDataHelper:function(){
      var self = this;
      //self.dataHelper = dataHelper;//TBD
    },

    afterShow:function(){
      var self = this;
      //alert(self.getQueryObj());
      self.hideLoading();
    },

    getVueInitParams:function(){
      var self = this;
      return {
        data: {
          formData: self.memoryStore.getAttr('memory.formData') || {},//表单数据
          customerInfo:self.viewData.customerInfo,
          baseUrl:appPrefx
        },
        methods: {
        }
      };
    },
  });
  return View;
});
