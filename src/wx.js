import store from './store'
import axios from 'axios'
import VueCookie from 'vue-cookie';

export async function base(code){
  await axios({
    url:'/bmw/api/mp/oauth2/base?code=' + code,
    method:'get'
  }).then(res =>{
    let result = res.data;
    if (result.status === 1){
      let openID = result.data;
      VueCookie.set("openID",openID)
    }else {
      console.log(result.msg)
    }
  })
}

export function audioPlay() {
  store.dispatch('latestWxConfig')
  wx.config(store.state.wxConfig)
  wx.ready(function () {
    var audio = document.getElementById("music_mp3_0");
    audio.play();
  })
}

export async function noShare() {
  await store.dispatch('latestWxConfig')
  wx.config(store.state.wxConfig)
  wx.hideMenuItems({
    menuList: ["menuItem:share:appMessage","menuItem:share:timeline"]
  });
}

export async function share() {
  await store.dispatch('latestWxConfig')
  wx.config(store.state.wxConfig)
  let option = {
    title: '这个夏天有惊喜！', // 分享标题, 请自行替换
    desc: '跟随沃尔沃纵情探索冰雪世界，点击领取广州融创雪世界门票', // 分享描述, 请自行替换
    link: "http://binarytre.com/snow", // 分享链接，根据自身项目决定是否需要split
    imgUrl: "https://mo.bintre.com/volvo.png" // 分享图标, 请自行替换，需要绝对路径
  }
  wx.showMenuItems({
    menuList: ["menuItem:share:appMessage","menuItem:share:timeline"]
  })

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
