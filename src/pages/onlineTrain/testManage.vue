<template>
    <div class="testManage_container">
        <Header />
        <current-location></current-location>
        <div class="header">
            <el-button style="margin-left: 20px" type="primary" size="mini">新增考试</el-button>
            <el-button style="margin-left: 20px" type="primary" size="mini">马上发放试卷</el-button>
            <el-button style="margin-left: 20px" type="primary" size="mini">考试分类管理</el-button>
        </div>
        <div style="width: 96%; margin: 0 auto">
            <el-table
                border
                size="mini"
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="num"
                    label="序号">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="试题名称"
                    width="200px">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="试卷类型">
                </el-table-column>
                <el-table-column
                    prop="timer"
                    label="考试时长">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="考试频次">
                </el-table-column>
                <el-table-column
                    prop="interval"
                    label="考试时段">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <el-button type="text" icon="el-icon-edit" size="mini">试卷管理（2524）编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" size="mini">人员管理（3101）删除</el-button>
                </el-table-column>
            </el-table>
        </div>
        <div class="footer">
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
export default {
    name: 'questionBank',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
        return {
            tableData: [{
            num: '1',
            title: '安全生产网络知识答题竞赛',
            type: '答题竞赛',
            timer: '12分钟',
            count: '85',
            interval: '每天',
            status: '关闭', 
        }]
        }
    }
}
</script>

<style lang="scss" scope>
    .testManage_container{
        .header{
            display: flex;
            width: 100%;
            height: 50px;
            align-items: center;
            border-bottom: 1px solid #dddddd;
            background: #ffffff;
        }
        .footer{
            width: 100%;
            height: 50px;
            background: f2f2f2;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            bottom: 0;
        }
    }
</style>