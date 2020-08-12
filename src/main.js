import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import titleF from './components/title.vue'

Vue.config.productionTip = false
Vue.component('titleF', titleF)
new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.prototype.$ = $;
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
