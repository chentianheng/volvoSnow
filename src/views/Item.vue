<template>
    <div class="bgContainer" @click="toEquipment">
        <img class="title animated fadeInUp" src="../assets/img/title02.png" alt="" >
        <img src="../assets/icon/logo.png" alt="" style="width: 45px;height: 45px;position: absolute;top: 10px;right: 10px">
        <img class="animated fadeIn delay-1s" src="../assets/img/subtitle.png" alt="" style="margin-top: 1rem;width: 40%;">
        <img class="animated fadeInRight delay-1s" src="../assets/img/item01.png" alt="" style="margin-top: 0.5rem;width: 65%;margin-left: 5rem">
        <img class="animated fadeInLeft delay-1s" src="../assets/img/item02.png" alt="" style="margin-top: 0.5rem;width: 65%;margin-right: 5rem">
        <img class="animated fadeInRight delay-1s" src="../assets/img/item03.png" alt="" style="margin-top: 0.5rem;width: 65%;margin-left: 5rem">
        <img class="animated fadeInUp delay-1s" src="../assets/img/footer.png" alt="" style="position: absolute;bottom: 0;width: 100%">
    </div>
</template>

<script>
    import {noShare} from "../wx";

    export default {
        name: "item",
        created(){
            noShare()
        },
        methods:{
            toEquipment(){
                this.$router.push('/equipment01')
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
