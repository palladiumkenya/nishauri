// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import JQuery from 'jquery'
import VueSlideBar from 'vue-slide-bar'
import VueSweetalert2 from 'vue-sweetalert2'
import VueGoodWizard from 'vue-good-wizard'
import store from './store'
import axios from 'axios'

require('./store/modules/subscriber')
// eslint-disable-next-line
let $ = JQuery

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'https://nishauri-api.mhealthkenya.co.ke/'
axios.defaults.baseURL = 'http://127.0.0.1:8081/'
Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2, options)
Vue.use(VueGoodWizard)

Vue.component('vue-slide-bar', VueSlideBar)
Vue.config.productionTip = false
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() =>
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    components: {
      App
    },
    template: '<App/>'
  })
)
