import store from './store'
import axios from 'axios'
import VueCookie from 'vue-cookie';

export async function dynamic(code) {
  await axios.get('/bmw/api/mp/oauth2?code=' + code)
    .then(function (response) {
      let result = response.data
      if (result.status === 1) {
        let user = result.data;
        VueCookie.set("openID", user.openID)
        store.commit("setUser", user)
      } else {
        console.log(result.msg)
      }
    })
}

export async function base(code) {
  await axios.get('/bmw/api/mp/oauth2/base?code=' + code)
    .then(function (response) {
      let result = response.data
      if (result.status === 1) {
        let openID = result.data;
        VueCookie.set("openID", openID)
      } else {
        console.log(result.msg)
      }
    })
}

export async function share() {
  await store.dispatch('latestWxConfig')
  wx.config(store.state.wxConfig)
  let option = {
    title: '全城寻求潮流达人', // 分享标题, 请自行替换
    desc: '全新BMW 3系T恤创意制造局，等你来探！', // 分享描述, 请自行替换
    link: "http://binarytre.com/", // 分享链接，根据自身项目决定是否需要split
    imgUrl: "https://mo.bintre.com/bmw.png" // 分享图标, 请自行替换，需要绝对路径
  }
  wx.onMenuShareTimeline({
    title: option.title, // 分享标题
    link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: option.imgUrl, // 分享图标
    success() {
      alert('分享朋友圈成功')
      // 用户确认分享后执行的回调函数
    },
    cancel() {
      // 用户取消分享后执行的回调函数
    }
  })
  wx.onMenuShareAppMessage({
    title: option.title, // 分享标题
    desc: option.desc, // 分享描述
    link: option.link,
    imgUrl: option.imgUrl, // 分享图标
    success: function () {
      alert('分享给朋友成功')
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  })
}

export function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}

export function audioPlay() {
  wx.config({
    debug: false, // 开启调试模式
    appId: '', // 必填，公众号的唯一标识
    timestamp: 1, // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '', // 必填，签名，
    jsApiList: [] // 必填，需要使用的JS接口列表，
  });
  wx.ready(function () {
    var audio = document.getElementById("music_mp3_0");
    audio.play();
  })
}
