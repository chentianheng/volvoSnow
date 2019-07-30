import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wxConfig:{}
  },
  mutations: {
    updateWxConfig(state,wxConfig){
      state.wxConfig = wxConfig;
    }
  },
  actions: {
    async latestWxConfig({state,commit}){
      let url = encodeURIComponent(location.href.split('#')[0])
      console.log(url)
      const axios = require('axios')
      await axios({
        // baseURL: 'http://binarytre.com/',
        method:'get',
        url:'/bmw/api/mp/oauth2/JsTicket?url=' + url,
        responseType:'json'
      }).then(res =>{
        let data = res.data;
        if (data.status === 1) {
          let result = data.data
          let wxConfig = {
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: result.appId, // 必填，公众号的唯一标识
            timestamp: result.timestamp, // 必填，生成签名的时间戳
            nonceStr: result.nonceStr, // 必填，生成签名的随机串
            signature: result.signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          };
          commit('updateWxConfig', wxConfig)
        }
      })
    }
  }
})
