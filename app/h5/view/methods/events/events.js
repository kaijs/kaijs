/*
 页面名称：重审申请
 作者：chenxiangyun01@company.com
 */
 define([
   "dojo/on",
   'cutil/c.util.validate',
 ], function (
   on,
   validate
 ) {
   "use strict";

    /*绑定函数*/
    var eventBinder = {
        /*订阅事件*/
        subscribeTopics: function () {
          var self = this;
        },

        /*绑定事件*/
        bindEvents: function () {
          var self = this;
          //输入框校验
          self.bind({
            'blur .js_input_name': viewUtils.checkNameInput/*姓名检查*/
          });

          self.els.loginButton.on('click',function(){
            /*
            self.showToast({
              text:'cxx'
            });
            */
            //self.model.trigger('login');
          });
        }
      };

      return {
        eventBinder: eventBinder,
      };
    });
