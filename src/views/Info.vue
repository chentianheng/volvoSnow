<template>
    <div class="bgContainer" @click="toInfo">
        <img class="title animated fadeInUp" src="../assets/img/title02.png" alt="" >
        <img src="../assets/icon/logo.png" alt="" style="width: 45px;height: 45px;position: absolute;top: 10px;right: 10px">
        <img class="animated fadeIn delay-1s" src="../assets/img/info.png" alt="" style="width: 80%;margin-top: 2rem">
        <img class="animated bounceIn delay-2s" src="../assets/img/buttonInfo.png" alt="" style="width: 60%;margin-top: 2rem">
        <img class="redCar animated fadeInRight" src="../assets/img/red.png" alt="">

    </div>
</template>

<script>
    export default {
        name: "Info",
        data(){
            return{
                isClick: false
            }
        },
        methods:{
            toInfo(){
                this.$router.replace('/information')
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
        margin-top: 2rem;
        width: 60%;
    }

    .redCar {
        position: absolute;
        right: 20px;
        bottom: 1rem;
        width: 60%;
    }

    @media only screen and (max-width: 320px){
        .title{
            margin-top: 1rem;
            width: 60%;
        }
    }
</style>
