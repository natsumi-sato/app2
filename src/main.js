// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* window.onload = function () {
  var head = document.head;
  var thumbsTransformNoEl = document.createElement("link");
 
  thumbsTransformNoEl.type = "text/css";
  thumbsTransformNoEl.rel = "stylesheet";
  thumbsTransformNoEl.href = "./static/css/transform-no.css";
 
  head.appendChild(thumbsTransformNoEl);
}; */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
