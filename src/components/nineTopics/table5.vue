
<template>
  <el-table
    :data="tableData"
    size="mini"
    style="width: 38vw;"
    border>
    <el-table-column
      prop="num1"
      width="180"
      label="">
    </el-table-column>
    <el-table-column
      prop="num2"
      label="一季度">
    </el-table-column>
    <el-table-column
      prop="num3"
      label="二季度">
    </el-table-column>
    <el-table-column
      prop="num2"
      label="三季度">
    </el-table-column>
    <el-table-column
      prop="num3"
      label="四季度">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            num1: "农村小徽水体治理管护达标率",
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: ''
        }, {
            num1: '',
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