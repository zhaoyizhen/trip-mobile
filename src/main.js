import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './utils/filters'

// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

createApp(App).use(store).use(router).mount('#app')
