<template>
    <div class="water2_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="水质水量月报" name="first">
                    <div class="con">
                        <el-button size="mini" icon="el-icon-download" type="primary">下载</el-button>
                        <img src="../../images/water1.png" alt="">
                    </div>
                    
                </el-tab-pane>
                <el-tab-pane label="国控断面水质状况表" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="水功能区水质状况表" name="third">角色管理</el-tab-pane>
            </el-tabs>
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
    .water2_container{
        width: 100vw;
        min-height: 100h;
        background-color: #ffffff;
        .wrapper{
            width: 40vw;
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
        }
    }
</style>