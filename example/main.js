import Vue from "vue";

import {
  Button,
  Row,
  Col,
  Card,
  Input,
  Icon,
  Dropdown,
  Menu,
  Popconfirm,
} from "ant-design-vue";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Popconfirm);

new Vue({
  render: h => h(App),
}).$mount("#app");
