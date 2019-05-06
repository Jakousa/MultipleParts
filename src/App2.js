import Vue from 'vue'
import App from './App2.vue'

export default (element) => {
  new Vue({
    el: element,
    render: h => h(App)
  })
}
