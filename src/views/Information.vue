<template>
    <div class="bgContainer">
        <img class="title animated fadeInUp" src="../assets/img/title02.png" alt="">
        <img src="../assets/icon/logo.png" alt="" style="width: 45px;height: 45px;position: absolute;top: 10px;right: 10px">
        <img class="subtitle animated fadeIn delay-1s" src="../assets/img/signUp.png" alt="" >
        <img class="whiteCar animated fadeInLeft delay-1s" src="../assets/img/white.png" alt="">
        <img class="redCar animated fadeInRight" src="../assets/img/red.png" alt="">
        <!--信息填写内容-->
        <div class="animated fadeInUp delay-1s" style="width: 60%;display: flex;flex-direction: column;align-items: center">
            <div class="itemContainer">
                <img class="icon" src="../assets/icon/user.png" alt="">
                <input type="text" placeholder="姓名" class="nameInput" v-model="user.name" @blur="fixScroll">
            </div>
            <div style="display:flex;width: 70%;justify-content: space-between;align-items: center;margin-top: 0.8rem">
                <img v-show="isMale" src="../assets/icon/chosen.png" class="icon" alt="" >
                <img v-show="isFemale" src="../assets/icon/notChose.png" class="icon" alt="" @click="changeSex">
                <p style="color: white;font-size: 14px">先生</p>
                <img src="../assets/icon/or.png" class="icon" alt="">
                <img v-show="isFemale" src="../assets/icon/chosen.png" class="icon" alt="" >
                <img v-show="isMale" src="../assets/icon/notChose.png" class="icon" alt="" @click="changeSex">
                <p style="color: white;font-size: 14px ">女士</p>
            </div>
            <div class="itemContainer">
                <img class="icon" src="../assets/icon/phone.png" alt="">
                <input type="number" placeholder="联系方式" class="nameInput" v-model="user.phone">
            </div>
            <div class="itemContainer">
                <img class="icon" src="../assets/icon/city.png" alt="">
                <!--<input type="text" placeholder="城市" class="nameInput" v-model="user.city">-->
                <select class="select" v-model="user.city" >
                    <option disabled>城市</option>
                    <option v-for="(city,index) in cities"
                            :value="city"
                            :key="index"
                    >{{ city }}</option>
                </select>
            </div>
            <div class="itemContainer">
                <img class="icon" src="../assets/icon/agents.png" alt="">
                <select class="select" v-model="user.agent" >
                    <option disabled>请选择经销商</option>
                    <option v-for="(agent,index) in agents"
                            :value="agent"
                            :key="index"
                    >{{ agent }}</option>
                </select>
            </div>
        </div>
        <!--提示文字-->
        <p class="animated fadeIn delay-2s" style="font-size: 10px;color: rgba(255,255,255,0.7);margin-top: 0.8rem">您的信息将只用于沃尔沃相关市场活动，不会透露给第三方。</p>
        <!--提交按钮-->
        <button @click="submit" class="submit animated fadeIn delay-3s">确认</button>
        <!--toast消息-->
        <div class="toast animated fadeIn" v-show="toastShow">
            {{toastText}}
        </div>
        <!--成功弹窗-->
        <div class="animated fadeIn"
             style="position:absolute;top:0;left:0;display: flex;flex-direction: column;justify-content: center;align-items: center;background-color: rgba(0,0,0,0.7);z-index: 3000"
             :style="{height :this.windowHeight ,width: this.windowWidth}"
             v-show="successShow"
             @click="toHome">
            <img src="../assets/img/success.png" alt="" style="width: 50%">
            <p style="font-size: 14px;color: rgba(255,255,255,0.9);margin-top: 0.8rem">*了解更多活动详情详询沃尔沃授权经销商</p>
            <p style="font-size: 12px;color: rgba(255,255,255,0.9);margin-top: 0.8rem">点击任意位置返回首页</p>
        </div>
    </div>
</template>

<script>
    import VueCookie from 'vue-cookie';
    export default {
        name: "Information",
        data(){
            return{
                user:{
                    openID:null,
                    name:null,
                    sex:1,
                    phone:null,
                    city:null,
                    agent:null
                },
                agents:["广州永安富豪汽车","广东南方骏沃汽车","深圳中汽南方华沃汽车","深圳德顺行汽车","佛山顺德区世维汽车","东莞世沃汽车"],
                cities:["广州","佛山","深圳","东莞"],
                isFemale:false,
                isMale:true,
                toastShow: false,
                toastText: '',
                windowHeight:(window.innerHeight) + 'px',
                windowWidth:(window.innerWidth) + 'px',
                successShow:false
            }
        },
        created(){
          this.user.agent = "请选择经销商";
          this.user.city = "城市"

        },
        methods:{
            changeSex(){
                this.isFemale = !this.isFemale;
                this.isMale = !this.isMale;
                if (this.isMale) {
                    this.user.sex = 1
                }else {
                    this.user.sex = 0
                }
                // console.log(this.user.sex)
            },
            submit(){
                if (!this.user.name){
                    this.toast('请输入姓名')
                } else if (!this.user.phone) {
                    this.toast('请输入联系方式')
                } else if (this.user.city === "城市"){
                    this.toast('请输入城市名')
                } else if (this.user.agent === "请选择经销商") {
                    this.toast('请选择经销商')
                } else {
                    const axios = require('axios');
                    this.user.openID = VueCookie.get("openID");
                    // this.user.openID = "oHDTCwX3Ql7BkN5zeJQFFmlbHECY"
                    axios({
                        baseURL: 'http://binarytre.com/',
                        url:'bmw/api/snow',
                        method:'post',
                        data:this.user
                    }).then(res =>{
                        // console.log(res.data)
                        let result = res.data;
                        if (result.status === 1){
                            this.successShow = true;
                        } else {
                            this.toast(result.msg)
                        }

                    })

                }
            },
            toast (str) {
                let that = this
                that.toastText = str
                that.toastShow = true
                setTimeout(function(){
                    that.toastShow = false
                }, 1500)
            },
            toHome(){
                this.$router.replace('/')
            },
            fixScroll(){
                let u = navigator.userAgent;
                let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if (isiOS) {
                    window.scrollTo(0, 0);
                }
            }
        }
    }
</script>

<style scoped>
    @import "../assets/toast.css";

    .bgContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url("../assets/bg/bg02.png") repeat center top;
        background-size: auto 100% ;
        position: relative;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .title{
        margin-top: 2rem;
        width: 60%;
    }

    .subtitle {
        margin-top: 2rem;
        width: 15%
    }

    .whiteCar {
        position: absolute;
        left: 20px;
        bottom: 3.5rem;
        width: 26%;
    }

    .redCar {
        position: absolute;
        right: 20px;
        bottom: 1rem;
        width: 60%;
    }

    .itemContainer {
        margin-top: 0.8rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    .icon {
        width: 1.6rem;
        height: 1.6rem;
    }

    .nameInput {
        width: 75%;
        height: 1.5rem;
        /*line-height: 1.5rem;*/
        border: solid 1px transparent;
        -moz-appearance:none;
        -webkit-appearance:none;
        background: white;
        border-radius: 4px;
        margin-right: 14px;
        padding-left: 5px;
    }

    .select {
        width: 78%;
        height: 1.6rem;
        border: solid 1px transparent;
        -moz-appearance:none;
        -webkit-appearance:none;
        background: white url("../assets/icon/down.png") no-repeat scroll right center ;
        background-size: 1.2rem auto;
        border-radius: 4px;
        padding-left: 5px;
        margin-right: 14px;
    }

    .submit {
        background-color: white;
        font-size: 14px;
        border-radius: 20px;
        margin-top: 2rem;
        width: 8rem;
        border: 0 solid transparent;
        padding: 5px 0;
        color: black;
    }

    @media only screen and (max-width: 320px){
        .title{
            margin-top: 1rem;
            width: 60%;
        }

        .submit {
            background-color: white;
            font-size: 14px;
            border-radius: 20px;
            margin-top: 1rem;
            width: 8rem;
            border: 0 solid transparent;
            padding: 5px 0;
            color: black;
        }

        .subtitle {
            margin-top: 1rem;
            width: 10%
        }
    }
</style>
