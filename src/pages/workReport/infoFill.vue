<template>
    <div class="infoFill_container">
        <Header />
        <current-location></current-location>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的待办" name="first">
                <el-table
                    :data="tableData"
                    border
                    style="width: 98%;margin: 0 auto;">
                    <el-table-column
                        prop="num"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="标题">
                        <template slot-scope="scope">
                            <el-tag size="medium">{{ scope.row.title }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="日期">
                    </el-table-column>
                    <el-table-column
                        prop="progress"
                        label="全省上报进度">
                    </el-table-column>
                    <el-table-column
                        prop="submittedDate"
                        label="提交日期">
                    </el-table-column>
                    <el-table-column
                        prop="subStatus"
                        label="提交">
                    </el-table-column>
                    <el-table-column
                        prop="opera"
                        label="操作">
                        <el-button icon="el-icon-search" type="text" size="small" @click="toReportDetail">查看详情</el-button>
                        <el-button icon="el-icon-upload2" type="text" size="small">上报</el-button>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="全部任务" name="second">全部任务</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
export default {
    name: 'missionInit',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
      return {
        activeName: 'first',
        tableData: [{
          num: '1',
          title: '河长巡河月报',
          date: '2019-12-28',
          progress: '15/17',
          submittedDate: '',
          subStatus: '未提交',
        }, {
          num: '2',
          title: '河长巡河月报',
          date: '2019-12-28',
          progress: '15/17',
          submittedDate: '',
          subStatus: '未提交',
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toReportDetail() {
          this.$router.push({path: '/reportDetail'})
        },
    }
}
</script>

<style lang="scss" scope>
    .infoFill_container{
        .el-tabs__item{
            text-indent: 2em;
        }
        .el-tabs__active-bar{
            width: 110px !important;
        }
    }
</style>