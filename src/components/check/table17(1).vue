<template>
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
        <el-table-column
        prop="title1"
        label="方案名称">
        </el-table-column>
        <el-table-column
        prop="title2"
        label="考核范围">
            <!-- <template slot-scope="scope">
                
            </template> -->
        </el-table-column>
        <el-table-column
        prop="title3"
        label="考核周期">
        </el-table-column>
        <el-table-column
        prop="title4"
        label="考核对象">
        </el-table-column>
        <el-table-column
        prop="title5"
        label="有效时间">
        </el-table-column>
        <el-table-column
        prop="title6"
        label="整体已完成">
        </el-table-column>
        <el-table-column
        prop="title7"
        label="整体未完成">
        </el-table-column>
        <el-table-column
        prop=""
        label="操作">
            <el-button icon="el-icon-search" type="text" size="mini">查看</el-button>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            title1: '2019 年度县区河湖长目标考核',
            title2: '夷陵区，兴山县，远安县',
            title3: '年度考核',
            title4: '河湖长',
            title5: '2019-01-01~2019-12-30',
            title6: '30',
            title7: '10',
        },{
            title1: '2018 年度县区河湖长目标考核',
            title2: '伍家岗区，五峰县',
            title3: '年度考核',
            title4: '河湖长',
            title5: '2018-01-01~2018-12-30',
            title6: '40',
            title7: '0',
        },]
      }
    }
}
</script>

<style>

</style>