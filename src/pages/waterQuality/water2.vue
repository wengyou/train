<template>
    <div class="water2_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="水质水量月报" name="first">
                    <el-button class="down_btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                    <div class="con">
                        <img src="../../images/water1.png" alt="">
                    </div>
                    
                </el-tab-pane>
                <el-tab-pane label="国控断面水质状况表" name="second">
                    <el-button class="down_btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                    <h2>附件一 湖北省长江7月国控断面水质状况表</h2>
                    <Table7 />
                    <p>注：控制断面水质达标考核采用累计均值水质评价，该评价法是将本年1月至当月各项水质因子监测数据取平均值后再评价是否达标；当月水质评价结果仅用于各地掌握水质动态变化</p>
                </el-tab-pane>
                <el-tab-pane label="水功能区水质状况表" name="third">
                    <el-button class="down_btn" size="mini" icon="el-icon-download" type="primary">下载</el-button>
                    <h2>附件一 水功能区水质状况表</h2>
                    <Table7 />
                    <p>注：水功能区水质达标考核采用累计均值水质评价，该评价法是将本年1月至当月各项水质因子监测数据取平均值后再评价是否达标；当月水质评价结果仅用于各地掌握水质动态变化</p>
                </el-tab-pane>
            </el-tabs>
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
    .water2_container{
        width: 100vw;
        min-height: 100h;
        background-color: #ffffff;
        .wrapper{
            width: 60%;
            margin: 0 auto;
            .down_btn{
                margin-left: 54vw;
            }
            .con{
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 60%;
                    height: 100%;
                }
            }
            h2{
                text-align: center;
                line-height: 70px;
            }
            p{
                line-height: 50px;
            }
        }
    }
</style>