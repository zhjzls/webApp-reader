
webApp阅读器
==============
Koa,Vue.js,Zepto等框架结合HTML5开发的一个包含阅读器功能的书城App。
整个过程分为几个比较复杂的模块进行开发，如阅读器，书城首页，搜索模块。

所用到的主要知识点？
------------

* Promise对象：用来传递异步操作的消息，充当异步和回调的中介,免除重复繁琐的回调函数嵌套能
* localStorage：用来做本地存储，如存储用户所看的文章的ID或者阅读习惯）
* ajax：发送请求获得数据后结合Vue对数据做渲染
* tansition动画: 页面滑动

完成功能
-------
  - [x] 书城首页
  - [x] 书籍详情页
  - [x] 各类频道页
  - [x] 阅读器
  - [x] 搜索功能
  - [ ] 个人中心
  - [ ] 频道切换
  - [ ] 性能优化

目录
-------
  * mock: 模拟数据,充当数据库的作用
  * service: 读取数据,充当前后端的纽带
  * static: 静态资源页
  * view: ejs模板
  * app.js: 项目入口
  * package.json: 项目所需依赖


项目展示
-------
  - Thank you to see [me](http://reader666.applinzi.com)!
 
运行项目
-------
```
  $ git https://github.com/sinner77/webApp-.git
  $ cd reader
  $ npm install
  $ node app.js
```

有问题反馈
----
在使用中有任何问题，欢迎反馈给我

* 邮件: 525136628@qq.com
* QQ: 525136628

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item