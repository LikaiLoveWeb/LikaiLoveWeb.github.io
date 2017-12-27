// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
//Vue使用router、vuex插件
Vue.use(VueRouter);
Vue.config.productionTip = false;

//引入routes路由配置文件
import routes from './router';
//创建路由
let router = new VueRouter({
//	mode: 'history',
//	base: __dirname,
  hashbang: false,
  history:true,
  routes:routes,
  scrollBehavior:function(to,from,savedPosition){
    return { "x":0 , "y": 0 }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app')
