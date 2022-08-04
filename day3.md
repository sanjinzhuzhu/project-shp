一、完成一级分类动态添加颜色 
第一种解决方案:采用样式完成(可以)
第二张解决方案:通过js完成

二、通过js控制二三级商品分类的现实与隐藏

最开始的时候，是通过css样式display:block|none显示与隐藏二三级商品分类

三、演示卡顿现象
正常: 事件除非非常频繁，而且每一次的出发，回调函数都要去执行(如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿)

节流: 在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁出发变为少量触发
防抖: 前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发 只会执行一次

四、完成三级联动的防抖和节流

五、三级联动组件的路由跳转与传递参数

三级分类是可以点击的:当用户点击一级、二级、三级分类，当你点击的时候Home模块跳转到
Search模块，一级会把用户选中的产品(产品的名字、产品的ID)，在路由跳转的时候，进行传递

路由跳转:
声明式导航:router-link
编程式导航:push|replace

三级联动:如果使用生命是导航router-link,可以实现路由的跳转与传递参数
但是需要住，出现卡顿现象
router-link:可以一个组件，当服务器的数据赶回之后，循环出很多的router-link组件
【创建组件实例的】1000+，创建组件实例的时候，一瞬间创建1000+很好内存，因此出现了卡顿现象