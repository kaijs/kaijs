/**
@description 设置页面头部 title
*/
define([],function() {
    "use strict";
    var pageIdConfig = {
        index: ["281001", "282001"]
    };
    /**
    @description 设置麻袋理财跟踪id
    */
    var trackConfig = {
      'h5/view/question':{
        entity : null, //land的时候这个必须设置为null，我也不知道为什么不设置不行。
        key : "pages",
        topic : "question"
      },
    };

    /*配置页面名称*/
    var pageNameConfig = {
    };

    var pageConfig = {
        pageIdConfig:pageIdConfig,
        pageNameConfig:pageNameConfig,
        trackConfig:trackConfig,
    };
    return pageConfig;
});
