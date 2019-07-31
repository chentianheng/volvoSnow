<template>
    <div class="bgContainer">
        <!--点击提示-->
        <img class="tips animated bounceIn delay-5s infinite " src="../assets/icon/click.png"  alt="" @click="toItem">
        <img src="../assets/icon/logo.png" alt="" style="width: 45px;height: 45px;position: absolute;top: 10px;right: 10px">
        <img class="title animated fadeInUp" src="../assets/img/title.png" alt="">
        <img class="btn animated bounceIn delay-2s" src="../assets/img/button01.png" alt="" @click="toItem">
        <img class="whiteCar animated fadeInLeft delay-1s" src="../assets/img/white.png" alt="">
        <img class="redCar animated fadeInRight" src="../assets/img/red.png" alt="">
    </div>
</template>

<script>
    import {share} from "../wx";

    export default {
        name: "Home",
        data(){
            return{
                time:3
            }
        },
        created(){
            this.timer()
        },
        methods:{
            toItem(){
                this.$router.replace('/item')
            },
            timer(){
                if (this.time > 0 ){
                    this.time--;
                    // var m = '';
                    // var s = '';
                    // m = Math.floor(this.time/60%60);
                    // m < 10&&(m='0'+m);
                    // s = Math.floor(this.time%60);
                    // s < 10&&(s='0'+s);
                    setTimeout(this.timer, 1000);
                }else {
                    this.time = 0;
                    share()
                }
            }
        }
    }
</script>

<style scoped>
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
        margin-top: 5rem;
        width: 60%;
    }

    .btn {
        margin-top: 15%;
        width: 80%;
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

    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 30%;
        top: 55%;
        z-index: 100
    }
</style>
