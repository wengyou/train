<template>
    <el-table
        size="mini"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="mun"
        label="点序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title1"
        label="库水位(m)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title2"
        label="蓄水量(10^6㎡)">
      </el-table-column>
      <el-table-column
        prop="title3"
        label="水面面积(k㎡)">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            num1: 1,
            title1: '13.123',
            title2: '',
            title3: '',
          },{
            num1: 2,
            title1: '13.123',
            title2: '',
            title3: '',
          },{
            num1: 3,
            title1: '13.123',
            title2: '',
            title3: '',
          }, ]
        }
      }
}
</script>

<style>

</style>