<template>
  <div id="app">
    <!-- 自定义插件实例 -->
    <h1 v-upper.zhuzhu="cutedark"></h1>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- <Footer v-show="$route.path =='/home'|| $route.path=='/search'"></Footer> 可以用路由元信息-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      cutedark: "abc",
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    //派发action |获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
