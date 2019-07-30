import store from './store'
import axios from 'axios'
import VueCookie from 'vue-cookie';

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
