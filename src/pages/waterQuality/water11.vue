<template>
    <div class="water11_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <div class="con">
                <el-button size="mini" icon="el-icon-download" type="primary">下载</el-button>
                <img src="../../images/water1.png" alt="">
            </div>
        </div> 
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
export default {
    name: 'Water2',
    components: {
        Header,
    },
    data() {
        return{
            headCon: '2020年7月水质水量综述初稿查看',
            activeName: 'first'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss" scoped>
    .water11_container{
        width: 100vw;
        min-height: 100h;
        background-color: #ffffff;
        .wrapper{
            width: 60vw;
            margin: 10px auto;
            .con{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>