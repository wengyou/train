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
      label="市州">
    </el-table-column>
    <el-table-column
      prop="num3"
      label="新增入河湖排污口数量（个）">
    </el-table-column>
    <el-table-column
      prop="num2"
      label="如何排污口达标率（%）">
    </el-table-column>
    <el-table-column
      prop="num3"
      label="入河湖排污口在线检测率">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            num1: 1,
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: 2,
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: 3,
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: 4,
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: 5,
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: 6,
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        },]
      }
    }
}
</script>

<style>

</style>