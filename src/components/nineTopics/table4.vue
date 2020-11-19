<template>
  <el-table
    :data="tableData"
    size="mini"
    style="width: 450px;"
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
            num2: '养区划定完成率（%）',
            num3: ''
        }, {
            num1: 2,
            num2: '限养区划定完成率（%）',
            num3: ''
        }, {
            num1: 3,
            num2: '适养区划定完成率（%）',
            num3: ''
        }, {
            num1: 4,
            num2: '规模化畜禽养殖场数量（个）',
            num3: ''
        }, {
            num1: 5,
            num2: '养殖场污水处理设施建设数量（个）',
            num3: ''
        }, {
            num1: 6,
            num2: '畜禽养殖废弃物资源化综合利用率（%）',
            num3: ''
        }]
      }
    }
}
</script>

<style>

</style>