import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import {removeParam} from "./wx";

Vue.config.productionTip = false

import {base} from "./wx";
router.beforeEach( async (to, from, next) => {
  let openID = VueCookie.get('openID')
  let code = to.query.code;

  if (!store.state.url) {
    let url = location.href.split('#')[0];
    if (url.indexOf("from") > -1 || url.indexOf("isappinstalled") > -1) {
      window.location.href = removeParam("isappinstalled", removeParam("from", location.href.split('#')[0]))
    } else {
      store.commit("setUrl", location.href.split('#')[0]);
    }
  }

  if (to.name === "information"){
    if (openID) {
      next();
    }else if (code) {
      await base(code);
      next();
    }else {
      window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b5f9dbc5c61f4e9&redirect_uri="+ encodeURIComponent("http://binarytre.com/snow/information" )  + "&response_type=code&scope=snsapi_base&state=&connect_redirect=1#wechat_redirect")
    }
  }else {
    next();
  }
  next();
})


new Vue({
  router,
  store,
  animated,
  render: h => h(App)
}).$mount('#app')
