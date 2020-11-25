<template>
    <div class="water12_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <div class="con">
                <el-button class="btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                <img src="../../images/water1.png" alt="">
            </div>
            <h2>附件1 汉江、东荆河7月国控断面水质状况表</h2>
            <Table7 style="width: 90%; margin: 0 auto" />
        </div> 
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Table7 from '../../components/waterQuality/table7.vue'
export default {
    name: 'Water2',
    components: {
        Header,
        Table7
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
    .water12_container{
        width: 100vw;
        min-height: 100h;
        background-color: #ffffff;
        .wrapper{
            width: 100%;
            margin: 10px auto;
            .con{
                display: flex;
                flex-direction: column;
                align-items: center;
                .btn{
                    margin-left: 50vw;
                }
                img{
                    width: 60%;
                }
            }
            h2{
                text-align: center;
                line-height: 10vh;
            }
        }
    }
</style>