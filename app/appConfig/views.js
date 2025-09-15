/**
@description 设置页面配置信息 所有页面集中在此配置
*/
define([
],function(
) {
  "use strict";
	var viewCollectionData = [
	/**
	isVirtualView: 没有对应的实在js和模版文件,可以访问，因此不改变js和html的路径
	需要将父级别的路径配置在前面
  id为空的条目将作为默认路由,且使用其routeName属性作为目的路由
	*/
  /*
  h5 start
  */
  {id:'h5/view/mobile_index',parent:'h5/view/index',viewName:'mobile_index',useModule:true,viewTitle:'主页',isDefault:true,indexLevel:true},
  {id:'h5/view/babel',parent:'h5/view/index',viewName:'babel',useModule:true,viewTitle:'通天塔如何建成',isDefault:false,indexLevel:true},
  {id:'h5/view/all_process',parent:'h5/view/index',viewName:'all_process',useModule:true,viewTitle:'何时需要重构',isDefault:false,indexLevel:true},
  {id:'h5/view/preparation',parent:'h5/view/index',viewName:'preparation',useModule:true,viewTitle:'重构的准备',isDefault:false,indexLevel:true},
  {id:'h5/view/methods',parent:'h5/view/index',viewName:'methods',useModule:true,viewTitle:'重构之术',isDefault:false,indexLevel:true},
  {id:'h5/view/epilogue',parent:'h5/view/index',viewName:'epilogue',useModule:true,viewTitle:'多余的话',isDefault:false,indexLevel:true},
  {id:'h5/view/instance',parent:'h5/view/index',viewName:'instance',useModule:true,viewTitle:'重构实例',isDefault:false,indexLevel:true},
  {id:'h5/view/code_standards',parent:'h5/view/index',viewName:'code_standards',useModule:true,viewTitle:'编码规范',isDefault:false,indexLevel:true},
  {id:'h5/view/methods_global',parent:'h5/view/index',viewName:'methods_global',useModule:true,viewTitle:'重构之术－移除全局变量',isDefault:false,indexLevel:true},
  {id:'h5/view/methods_utils',parent:'h5/view/index',viewName:'methods_utils',useModule:true,viewTitle:'重构之术－提取公共函数',isDefault:false,indexLevel:true},
  {id:'h5/view/methods_component',parent:'h5/view/index',viewName:'methods_component',useModule:true,viewTitle:'重构之术－组件化',isDefault:false,indexLevel:true},
  {id:'h5/view/methods_typescript',parent:'h5/view/index',viewName:'methods_typescript',useModule:true,viewTitle:'重构之术－typescript',isDefault:false,indexLevel:true},
  {id:'h5/view/methods_promise',parent:'h5/view/index',viewName:'methods_promise',useModule:true,viewTitle:'重构之术－promise',isDefault:false,indexLevel:true},
  /*
  h5 end
  */
	];
  //default route view 设置首页路由 移动端 和 pc端可能不同主页
  if(dojoConfig.isH5){
    viewCollectionData.unshift({id:'',parent:'',viewName:'index',routeName:'h5/view/mobile_index'});
  }else{
    viewCollectionData.unshift({id:'',parent:'',viewName:'index',routeName:'pc/view/index'});
  }
	return viewCollectionData;
});
