import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store/index.js'
import router from './router'
// import ElementPlus from 'element-plus'
// import '../node_modules/element-plus/dist/index.css'
// vue2.x用法
// store.dispatch('setUserInfo', {
// userName: '付太平',
// userId: 12333
// })
// console.log(store.getters.userName)
// console.log(store.getters.userId)
const app = createApp(App)
// app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')


