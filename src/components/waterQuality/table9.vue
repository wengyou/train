<template>
    <el-table
        size="mini"
        border=""
      :data="tableData">
      <el-table-column
        prop="num"
        width="100"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="name"
        width="500"
        label="月报名称">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <el-button icon="el-icon-search" type="text" size="mini" @click="toWater13">查看</el-button>
        <el-button icon="el-icon-edit" type="text" size="mini">下载</el-button>
    </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            num: '1',
            name: '2020年7月份水质水量月报综述',
          },{
            num: '2',
            name: '2020年7月份长江水质水量月报',
          },{
            num: '3',
            name: '2020年7月份汉江、东荆河水质水量月报',
          },{
            num: '4',
            name: '2020年7月份府澴河水质水量月报',
          },{
            num: '5',
            name: '2020年7月份汉北河（含天门河）水质水量月报',
          },{
            num: '6',
            name: '2020年7月份沮漳河水质水量月报',
          },{
            num: '7',
            name: '2020年7月份清江水质水量月报',
          },{
            num: '8',
            name: '2020年7月份富水水质水量月报',
          },{
            num: '9',
            name: '2020年7月份南河水质水量月报',
          },{
            num: '10',
            name: '2020年7月份陆水水质水量月报',
          },{
            num: '11',
            name: '2020年7月份通顺河水质水量月报',
          },{
            num: '12',
            name: '2020年7月份举水水质水量月报',
          },{
            num: '13',
            name: '2020年7月份洪湖水质水量月报',
          },{
            num: '14',
            name: '2020年7月份长湖水质水量月报',
          },{
            num: '15',
            name: '2020年7月份梁子湖水质水量月报',
          },]
        }
      },
    methods: {
      toWater13() {
        this.$router.push({path: '/waterQuality/water13'})
      }
    }
}
</script>

<style>

</style>