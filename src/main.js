import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Hxvue from "../lib/hxvue.umd.min";
import "../lib/hxvue.css";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Hxvue);

new Vue({
  render: h => h(App)
}).$mount("#app");
