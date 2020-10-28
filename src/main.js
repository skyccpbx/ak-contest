import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueClipboard from 'vue-clipboard2'


Vue.config.productionTip = false
Vue.use(VueClipboard)

import { store } from '@/store'

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
