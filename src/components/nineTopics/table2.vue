<template>
  <el-table
    :data="tableData"
    size="mini"
    style="width: 40vw"
    border>
    <el-table-column
      prop="num1"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      prop="num2"
      label="指标"
      width="300">
    </el-table-column>
    <el-table-column
      prop="num3"
      label="数值">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            num1: 1,
            num2: '全省水权交易试点数量',
            num3: ''
        }, {
            num1: 2,
            num2: '县城达到国家节水型社会标准比例（%）',
            num3: ''
        }, {
            num1: 3,
            num2: '全省新增高效节水灌溉面积（亩）',
            num3: ''
        }, {
            num1: 4,
            num2: '全省新增农田水利投资（万元）',
            num3: ''
        }, {
            num1: 5,
            num2: '大中型灌区工程建设进度（%）',
            num3: ''
        }, {
            num1: 6,
            num2: '城市公共供水管网漏失率（%）',
            num3: ''
        }, {
            num1: 7,
            num2: '节水器具普及率（%）',
            num3: ''
        }]
      }
    }
}
</script>

<style>

</style>