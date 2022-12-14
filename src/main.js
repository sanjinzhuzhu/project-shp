import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui';
//第一个参数:全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
//element ui
Vue.use(Button)
//还有一种使用方式 是挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入MockServer.js---mock数据
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.min.css";


//统一接口api文件夹里面全部请求汗水
//统一引入
import * as API from '@/api'
import cutedark from '@/assets/images/cutedark.gif'
console.log(API);
import { reqGetSearchInfo } from '@/api';
console.log(reqGetSearchInfo({}));

// //测试
import { reqCategoryList } from '@/api';
reqCategoryList();

//引入插件
import VueLazyload from 'vue-lazyload';
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:cutedark
})

//引入自定义插件 1 --去到
import myplugins from './plugins/myPlugins';
Vue.use(myplugins,{
  name:'upper'
})
//引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  // 全局事件总线注册
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由：底下的写法KV一致省略V【router小写的】
  router,
  //注册仓库:组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
