// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入store
import store from './store'
import axios from 'axios'
//引入mint-ui 和 样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入字体图标，引入初始化样式
// import '@/assets/js/iconfont.js'
// import '@/assets/js/iconfont1.js'
import '@/assets/css/static.css'

//安装axios
Vue.prototype.$http = axios;
//安装mintui
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注册router，store
  router,
  store,
  components: { App },
  template: '<App/>'
})
