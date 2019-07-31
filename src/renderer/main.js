import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from '../../node_modules/element-ui'
import skyRequest from '../../node_modules/skytech-request'
import commonFn from '@/common/commonFn'
import '../../node_modules/element-ui/lib/theme-chalk/index.css'
import './theme/app.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(skyRequest)
// function _init() {
//   skyRequest.install(function(status, message) {
//     commonFn.tipPop.error(status, message)
//   })

// }
// _init()
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
