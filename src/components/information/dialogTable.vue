<template>
    <el-table
    :data="tableData"
    border
    size="mini"
    style="width: 100%">
    <el-table-column
      fixed
      prop="num"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="事项">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <el-button icon="el-icon-s-unfold" type="text" size="mini">详情</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                num: 1,
                name: '此处显示某某事项'
            },{
                num: 2,
                name: '此处显示某某事项'
            },{
                num: 3,
                name: '此处显示某某事项'
            }]
        }
    }
}
</script>

<style>

</style>