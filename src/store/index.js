import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'

// 创建 store 容器实例.
const store = createStore({
modules: {
 app,
 user
},
getters
})

export default store
