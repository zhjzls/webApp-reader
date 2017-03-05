webApp阅读器
======
Koa,Vue.js,Zepto等框架结合HTML5开发的一个包含阅读器功能的书城App。整个过程分为几个比较复杂的模块进行开发，如阅读器，书城首页，搜索模块。

所用到的主要知识点：
-------------------
	* Promise对象：用来传递异步操作的消息，充当异步和回调的中介,免除重复繁琐的回调函数嵌套
	* localStorage：用来做本地存储，如存储用户所看的文章的ID或者阅读习惯，
	* ajax：发送请求获得数据后结合Vue对数据做渲染
	* tansition动画: 页面滑动
	
完成功能
-----------------
  书城首页
  书籍详情页
  各类频道页
  阅读器
  搜索功能

  个人中心
  频道切换
  性能优化

目录
-----------------
	mock: 模拟数据,充当数据库的作用
	service: 读取数据,充当前后端的纽带
	static: 静态资源
	view: ejs模板
	app.js: 项目入口
	package.json: 项目所需依赖

项目所得
----------------
	
项目展示
--------------
	[http://reader666.applinzi.com](http://reader666.applinzi.com)
运行项目
---------------
	$ git clone https://github.com/JasonStu/ReactNative_Shopping.git
	$ cd ReactNative_Shopping
	$ npm install
	$ react-native run-ios