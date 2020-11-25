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
        label="综合评分">
        </el-table-column>
        <el-table-column
        prop="title7"
        label="考核等级">
        </el-table-column>
        <el-table-column
        prop="title8"
        label="排名">
            <template slot-scope="scope">
                <el-button type="text" size="mini">{{scope.row.title8}}</el-button>
            </template>
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
            title1: '2019 年度市州河湖长办目标考核',
            title2: '武汉市河湖长办，宜昌市河湖长办，天门市河湖长办',
            title3: '年度考核',
            title4: '河湖长办',
            title5: '2019-01-01~2019-12-30',
            title6: '91',
            title7: '优秀',
            title8: '1',
        },{
            title1: '2018 年度市州河湖长办目标考核',
            title2: '仙桃市河湖长办，宜昌市河湖长办，荆门市河湖长办',
            title3: '年度考核',
            title4: '河湖长办',
            title5: '2018-01-01~2018-12-30',
            title6: '89',
            title7: '良好',
            title8: '4',
        },]
      }
    }
}
</script>

<style>

</style>