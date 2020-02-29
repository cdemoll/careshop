// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<<<<<<< HEAD
import Vue from 'vue'
import App from './App'
import router from './router'
import Register from './components/Register'
=======
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App";
import router from "./router/index.js";
import Axios from "axios";
>>>>>>> 69fb609d98f2104b36ff9b33bcc5d26a587d2910

Vue.prototype.$http = Axios;
Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  vuetify: new Vuetify(),
  components: { App },
  template: "<App/>"
});
