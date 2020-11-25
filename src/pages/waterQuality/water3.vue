<template>
    <div class="water3_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="水质水量月报" name="first">
                    <div class="con">
                        <el-button size="mini" icon="el-icon-download" type="primary">下载</el-button>
                        <img src="../../images/water2.png" alt="">
                    </div>
                    
                </el-tab-pane>
                <el-tab-pane label="本月、上月不达标国控断面汇总" name="second">
                    <el-button class="down_btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                    <h2>综述表1 不达标国控断面汇总表</h2>
                    <Table8 />
                </el-tab-pane>
                <el-tab-pane label="本月、上月不达标水功能区汇总" name="third">
                    <el-button class="down_btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                    <h2>综述表2 本月、上月不达标水功能区汇总</h2>
                    <Table8 />
                </el-tab-pane>
                <el-tab-pane label="省级河湖水量汇总表" name="four">
                    <el-button class="down_btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                    <h2>综述表3 省级河湖水量汇总表</h2>
                    <Table8 />
                </el-tab-pane>
            </el-tabs>
        </div> 
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Table8 from '../../components/waterQuality/table8.vue'
export default {
    name: 'Water3',
    components: {
        Header,
        Table8
    },
    data() {
        return{
            headCon: '2020年7月水质水量综述月报初稿查看',
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
    .water3_container{
        width: 100vw;
        min-height: 100h;
        background-color: #ffffff;
        .wrapper{
            width: 60vw;
            margin: 0 auto;
            .con{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            h2{
                text-align: center;
                line-height: 70px;
            }
            .down_btn{
                margin-left: 54vw;
            }
        }
    }
</style>