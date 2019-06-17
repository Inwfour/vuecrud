import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2);
Vue.use(Vuetify);
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
