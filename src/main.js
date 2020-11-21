import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.scss'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import echarts from 'echarts'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.prototype.$video = Video
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueQuillEditor)

const router = new VueRouter({
	routes
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
