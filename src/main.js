import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

// charts
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
Vue.use(Donut);

// apex charts
import ApexCharts from "apexcharts";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

// echarts

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  ApexCharts,
  render: (h) => h(App),
}).$mount("#app");
