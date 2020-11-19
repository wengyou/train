<template>
    <div class="water1_container">
        <Header :con="headCon" />
        <div class="top">
            <p></p>
            <p>省级18条责任河湖流域多年平均降水量</p>
            <div class="flex2">
                <el-button icon="el-icon-bottom-right" type="primary" size="mini">导入</el-button>
                <el-button icon="el-icon-top-left" type="primary" size="mini">导出</el-button>
            </div>
        </div>
        <div class="table_wrapper">
            <Table3 />
        </div>
        <div class="bottom">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Table3 from '../../components/waterQuality/table3.vue'
export default {
    name: 'Water1',
    components: {
        Header,
        Table3
    },
    data() {
        return{
            headCon: '流域多年平均水量详情'
        }
    }
}
</script>

<style lang="scss" scoped>
    .water1_container{
        width: 100vw;
        min-height: 100vh;
        background: #ffffff;
        .top{
            display: flex;
            justify-content: space-between;
            width: 96vw;
            height: 40px;
            line-height: 40px;
            margin: 0 auto;
            font-size: 14px;
        }
        .bottom{
            position: fixed;
            bottom: 0;
            left:30vw
        }
    }
</style> 