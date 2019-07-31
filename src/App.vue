<template>
  <div id="app">
    <!--音乐icon-->
    <img :class="audio.musicIcon" src="./assets/icon/snow.png" @click="startPlayOrPause" alt=""/>
    <!--动态视图-->
    <router-view :style="{ height : myHeight }"/>
    <!--音乐-->
    <audio ref="audio" id="music_mp3_0" class="dn" loop="loop"
           :src="music" :preload="audio.preload"
           @play="onPlay"
           @error="onError"
           @waiting="onWaiting"
           @playing="onPlaying"
           @pause="onPause"
           @timeupdate="onTimeupdate"
           @loadedmetadata="onLoadedmetadata"></audio>
  </div>

</template>
<script>
  import {audioPlay} from "./wx";
  import snow from "./snowEffect"

  export default {
    data(){
      return{
        myHeight: (window.innerHeight) + 'px',
        music: 'https://mo.bintre.com/bensound-ukulele.mp3',
        audio: {
          musicIcon: {
            onPause: false,
            onPlay: true
          },
          currentTime: 0,
          maxTime: 0,
          playing: false,
          muted: true,
          speed: 1,
          waiting: true,
          preload: 'auto'
        },
        time:10,
        controlList: {
          // 不显示下载
          noDownload: false,
          // 不显示静音
          noMuted: false,
          // 不显示音量条
          noVolume: false,
          // 不显示进度条
          noProcess: false,
          // 只能播放一个
          onlyOnePlaying: false,
          // 不要快进按钮
          noSpeed: false
        },

      }
    },
    created() {
      audioPlay();
      snow()
    },
    mounted(){
        //等微信多出来底部的返回条后,再获取高度,解决iOS新版微信底部返回横条问题
        setTimeout(()=> {
          this.myHeight = window.innerHeight  + 'px';
          console.log(this.myHeight)
        },200)
    },
    methods:{
      onError() {
        // console.log('onError')
        this.audio.waiting = true
      }
      ,
      startPlayOrPause() {
        // const that = this
        return this.audio.playing ? this.pausePlay() : this.startPlay()
      }
      ,
      // 开始播放
      startPlay() {
        this.$refs.audio.play()
      }
      ,
      // 暂停
      pausePlay() {
        this.$refs.audio.pause()
      }
      ,
      // 当音频暂停
      onPause() {
        this.audio.playing = false
        // console.log("onPause")
        this.audio.musicIcon.onPlay = false
        this.audio.musicIcon.onPause = true
      }
      ,
      // 当音频开始等待
      onWaiting() {
      }
      ,
      onPlaying() {
      }
      ,
      // 当音频开始播放
      onPlay(res) {
        this.audio.musicIcon.onPlay = true
        this.audio.musicIcon.onPause = false
        this.audio.playing = true
        this.audio.loading = false
        if (!this.controlList.onlyOnePlaying) {
          return
        }
        let target = res.target
        let audios = document.getElementsByTagName('audio');
        [...audios].forEach((item) => {
          if (item !== target) {
            item.pause()
          }
        })
      }
      ,
      // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
      onTimeupdate(res) {
        this.audio.currentTime = res.target.currentTime
        this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
      }
      ,
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
        // console.log('onLoadedmetadata')
        // this.showPositionValue = true
        // const that = this
        this.audio.waiting = false
        this.audio.maxTime = parseInt(res.target.duration)
        if (!this.audio.playing) {
          this.startPlay()
        }
      },



    },

  }
</script>
<style>
  *{
    margin: 0;
  }

  /*音乐样式*/
  .onPause {
    position: absolute;
    height: 45px;
    width: auto;
    left: 10px;
    top: 10px;
    z-index: 10
  }

  .onPlay {
    position: absolute;
    height: 45px;
    width: auto;
    left: 10px;
    top: 10px;
    z-index: 10;
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    to {transform: rotate(0)}
    from {transform: rotate(360deg)}
  }

  .snow {
    background-image: url("./assets/icon/snowflower.png") ;
    background-size: 100% auto;
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0.5;
    /*border-radius: 50%;*/
  }
</style>
