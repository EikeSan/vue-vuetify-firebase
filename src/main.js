import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBNwm4a86QH87_-WwnN3D4oYAyc0eEfb5E',
      authDomain: 'devmeetup-cd192.firebaseapp.com',
      databaseURL: 'https://devmeetup-cd192.firebaseio.com',
      projectId: 'devmeetup-cd192',
      storageBucket: 'devmeetup-cd192.appspot.com',
      messagingSenderId: '783381679576'
    })
  }
})
