<template>
    <el-table
    :data="tableData"
    height="70%"
    size="mini"
    border
    style="width: 100%">
    <el-table-column
      prop="sort"
      label="排名"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="70">
    </el-table-column>
    <el-table-column
      prop="count"
      width="80"
      label="巡查次数">
    </el-table-column>
    <el-table-column
      prop="persent"
      width="100"
      label="问题办结率">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          sort: '1',
          name: '何建国',
          count: '3次',
          persent: '98.7%'
        }, {
          sort: '2',
          name: '周正英',
          count: '3次',
          persent: '97.4%'
        }, {
          sort: '3',
          name: '王国斌',
          count: '3次',
          persent: '96.9%'
        }, {
          sort: '4',
          name: '何建国',
          count: '2次',
          persent: '98.7%'
        }, {
          sort: '5',
          name: '李发兵',
          count: '2次',
          persent: '96.9%'
        }, {
          sort: '6',
          name: '袁卫东',
          count: '3次',
          persent: '95.3%'
        }, {
          sort: '7',
          name: '汪伟',
          count: '3次',
          persent: '95.3%'
        }, {
          sort: '8',
          name: '陈伟坤',
          count: '2次',
          persent: '95.3%'
        }, {
          sort: '9',
          name: '汪远程',
          count: '2次',
          persent: '98.7%'
        }, ]
      }
    }
}
</script>

<style>

</style>