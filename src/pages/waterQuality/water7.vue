<template>
    <div class="water1_container">
        <Header :con="headCon" />
        <div class="top">
            <p>录入时间：2020年7月5日</p>
            <p>省级18条责任河湖流域多年平均降水量</p>
            <p></p>
        </div>
        <div class="table_wrapper">
            <Table4 :name="tableTitle" />
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
import Table4 from '../../components/waterQuality/table4.vue'
export default {
    name: 'Water1',
    components: {
        Header,
        Table4
    },
    data() {
        return{
            headCon: '流域多年平均水量详情',
            tableTitle: '河流多年月平均流量（m³/s） 湖泊多年月平均水位(m)'
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