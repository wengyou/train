<template>
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
        <el-table-column
        prop="title1"
        label="考核方案名称">
        </el-table-column>
        <el-table-column
        prop="title2"
        label="考核周期">
            <!-- <template slot-scope="scope">
                
            </template> -->
        </el-table-column>
        <el-table-column
        prop="title3"
        label="考核对象">
        </el-table-column>
        <el-table-column
        prop="title4"
        label="有效时间">
        </el-table-column>
        <el-table-column
        prop="title5"
        label="领导评分状态">
        </el-table-column>
        <el-table-column
        prop=""
        label="操作">
            <template slot-scope="scope">
                <el-button v-if="scope.row.title5 === '已完成' " icon="el-icon-search" type="text" size="mini">查看</el-button>
                <el-button v-if="scope.row.title5 === '未完成' " icon="el-icon-edit" type="text" size="mini">自评</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            title1: '2019年度市州河湖长目标考核',
            title2: '年度考核',
            title3: '河湖长',
            title4: '2019-01-01-2019-12-30',
            title5: '未完成',
        },{
            title1: '2019年度市州河湖长目标考核',
            title2: '年度考核',
            title3: '河湖长',
            title4: '2018-01-01-2018-12-30',
            title5: '已完成',
        },]
      }
    }
}
</script>

<style>

</style>