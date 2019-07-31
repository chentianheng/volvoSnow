<template>
    <div class="bgContainer" @click="toInfo">
        <img class="title animated fadeInUp" src="../assets/img/title02.png" alt="" >
        <img class="animated bounceIn delay-1s" src="../assets/img/roller.png" alt="" style="width: 80%;margin-top: 2rem">
        <div style="position: relative;width: 70%">
            <img class="animated fadeIn delay-2s" src="../assets/img/selectSkis.png" alt="" style="width: 100%;margin-top: 1rem">
            <img class="animated zoomIn" v-show="isClick" src="../assets/icon/3.png" alt="" style="position: absolute;width: 22px;left: 10%;top: 43%">
        </div>


    </div>
</template>

<script>
    export default {
        name: "Equipment03",
        data(){
            return{
                isClick: false
            }
        },
        methods:{
            toInfo(){
                let that = this;
                that.isClick = true;
                setTimeout(function () {
                    that.$router.push('/info')
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
        background: url("../assets/bg/bg05.png") repeat center top;
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
