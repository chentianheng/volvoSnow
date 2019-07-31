<template>
    <div class="bgContainer" @click="toEquipment03">
        <img class="title animated fadeInUp" src="../assets/img/title02.png" alt="" >
        <img src="../assets/icon/logo.png" alt="" style="width: 45px;height: 45px;position: absolute;top: 10px;right: 10px">
        <img class="animated bounceIn delay-1s" src="../assets/img/ski.png" alt="" style="width: 80%;margin-top: 2rem">
        <div style="position: relative;width: 70%">
            <img class="animated fadeIn delay-2s" src="../assets/img/selectSkis.png" alt="" style="width: 100%;margin-top: 1rem">
            <img class="animated zoomIn" v-show="isClick" src="../assets/icon/2.png" alt="" style="position: absolute;width: 22px;left: 10%;top: 43%">
        </div>
        <img src="../assets/img/skiBg.png" alt="" style="position: absolute;width: 70%;left: 15%;bottom: 2%">

    </div>
</template>

<script>
    export default {
        name: "Equipment02",
        data(){
            return{
                isClick: false
            }
        },
        methods:{
            toEquipment03(){
                let that = this;
                that.isClick = true;
                setTimeout(function () {
                    that.$router.replace('/equipment03')
                },1000)
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


    @media only screen and (max-width: 320px){
        .title{
            margin-top: 1rem;
            width: 60%;
        }
    }
</style>
