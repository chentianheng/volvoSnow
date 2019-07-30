<template>
    <div class="bgContainer">
        <img src="../assets/icon/logo.png" alt="" style="width: 45px;height: 45px;position: absolute;top: 10px;right: 10px">
        <img class="title animated fadeInUp" src="../assets/img/title.png" alt="">
        <img class="btn animated bounceIn delay-2s" src="../assets/img/button01.png" alt="" @click="toItem">
        <img class="whiteCar animated fadeInLeft delay-1s" src="../assets/img/white.png" alt="">
        <img class="redCar animated fadeInRight" src="../assets/img/red.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            toItem(){
                this.$router.push('/item')
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
</style>
