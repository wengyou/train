<template>
    <el-table
        size="mini"
        border=""
      :data="tableData">
      <el-table-column
        prop="title1"
        width="100"
        label="月份">
      </el-table-column>
      <el-table-column
        prop="title2"
        width="500"
        label="水质水量月报">
      </el-table-column>
      <el-table-column
        prop="title3"
        width="200"
        label="状态">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="200">
        <el-button icon="el-icon-edit" type="text" size="mini">编辑</el-button>
        <el-button icon="el-icon-delete" type="text" size="mini">删除</el-button>
    </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            title1: '8月',
            title2: '2020年8月水质水量月报集合',
            title3: '数据待录入'
          },{
            title1: '7月',
            title2: '2020年8月水质水量月报集合',
            title3: '数据已录入完成'
          },{
            title1: '6月',
            title2: '2020年8月水质水量月报集合',
            title3: '数据待录入'
          },]
        }
      }
}
</script>

<style>

</style>