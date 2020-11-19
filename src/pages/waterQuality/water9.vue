<template>
    <div class="water9_container">
        <Header :con="headCon" />
        <div class="top1">
            <p class="toLeft">X年X月水质水量月报数据是否已录入完成：</p>
            <el-button size="mini" type="primary">是</el-button>
            <el-button size="mini" type="primary">否</el-button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="国控水质整编数据" name="first">
                <div class="top">
                    <p></p>
                    <p>湖北省重点河湖X月份河流湖泊国控断面水质整编数据</p>
                    <div class="flex2">
                        <el-button icon="el-icon-edit" type="primary" size="mini">编辑</el-button>
                        <el-button icon="el-icon-bottom-right" type="primary" size="mini">导入</el-button>
                        <el-button icon="el-icon-top-left" type="primary" size="mini">导出</el-button>
                    </div>
                </div>
                <div class="table_wrapper">
                        <Table5 :name="tableTitle" />
                    </div>
                    <div class="bottom">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
            </el-tab-pane>
            <el-tab-pane label="水功能区整编数据" name="second">水功能区整编数据</el-tab-pane>
            <el-tab-pane label="降水量评价数据" name="third">降水量评价数据</el-tab-pane>
            <el-tab-pane label="水量评价数据" name="fourth">水量评价数据</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Table5 from '../../components/waterQuality/table5.vue'
export default {
    name: 'Water1',
    components: {
        Header,
        Table5
    },
    data() {
        return{
            headCon: '录入X年X月水质水量月报数据',
            tableTitle: '河流多年月平均流量（m³/s）',
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
    .water9_container{
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
        .top1{
            display: flex;
            font-size: 14px;
            width: 100vw;
            height: 50px;
            align-items: center;
        }
        .bottom{
            position: fixed;
            bottom: 0;
            left:30vw;
            width: 100vw;
            height: 40px;
            background: #ffffff;
        }
    }
</style> 