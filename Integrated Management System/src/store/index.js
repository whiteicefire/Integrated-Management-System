import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import menurouter from './menurouter'
import tabrouter from './tabrouter'
import user from './user';
import menu from './menu/menu';
import theme from './theme/theme';


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menurouter,
    tabrouter,
    user,
    menu,
    theme
  },
  getters
})

// 如果我们需要一些HMR魔术，我们会处理
// 下面的热点更新。 注意我们实现这个
// 用“process.env.DEV”代码 - 所以这不会
// 进入我们的生产版本（也不应该）。
// if (process.env.DEV && module.hot) {
//   module.hot.accept(['./showcase'], () => {
//     const newShowcase = require('./showcase').default
//     store.hotUpdate({ modules: { showcase: newTabroutes } })
//   })
// }

export default store