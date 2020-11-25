<template>
    <el-table
        :data="tableData2"
        style="width: 100%"
        border
        :row-class-name="tableRowClassName">
        <el-table-column
        prop="title1"
        label="方案名称">
        </el-table-column>
        <el-table-column
        prop="title2"
        label="考核部门">
        </el-table-column>
        <el-table-column
        prop="title3"
        label="考核周期">
        </el-table-column>
        <el-table-column
        prop="title4"
        label="有效时间">
        </el-table-column>
        <el-table-column
        prop="title5"
        label="按流域纬度自评状态">
        </el-table-column>
        <el-table-column
        prop="title6"
        label="按行政区划纬度自评状态">
        </el-table-column>
        <el-table-column
        prop=""
        label="操作">
            <template slot-scope="scope">
                <el-button v-if="scope.row.title6 === '已完成' " icon="el-icon-search" type="text" size="mini">查看</el-button>
                <el-button v-if="scope.row.title6 === '未完成' " icon="el-icon-edit" type="text" size="mini">自评</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
     data() {
      return {
        tableData2: [{
            title1: '长江2019 年度市州河湖长目标考核',
            title2: '省河长办+长江省级联系单位',
            title3: '年度考核',
            title4: '2019-01-01~2019-12-30',
            title5: '未完成',
            title6: '未完成',
        }, {
            title1: '黄柏河2018 年度市州河湖长目标考核',
            title2: '省级河长办',
            title3: '年度考核',
            title4: '2018-01-01~2018-12-30',
            title5: '/',
            title6: '已完成',
        }, ]
      }
     }
}
</script>

<style>

</style>