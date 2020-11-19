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
        width="300"
        label="月报名称">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="600">
        <el-button icon="el-icon-edit" type="text" size="mini">录入月报终稿</el-button>
        <el-button icon="el-icon-search" type="text" size="mini">查看月报终稿</el-button>
        <el-button icon="el-icon-download" type="text" size="mini">下载月报初稿</el-button>
        <el-button icon="el-icon-download" type="text" size="mini">下载月报终稿</el-button>
        <el-button icon="el-icon-delete" type="text" size="mini">删除月报终稿</el-button>
    </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            num: 1,
            name: '2020年7月份水质水量月报综述',
            status: '初稿'
          },{
            num: 2,
            name: '2020年7月长江水质水量月报',
            status: '已发布'
          },{
            num: 3,
            name: '2020年7月份水质水量月报综述',
            status: '初稿'
          },{
            num: 4,
            name: '2020年7月长江水质水量月报',
            status: '已发布'
          },{
            num: 5,
            name: '2020年7月份水质水量月报综述',
            status: '初稿'
          },{
            num: 6,
            name: '2020年7月长江水质水量月报',
            status: '已发布'
          },{
            num: 7,
            name: '2020年7月份水质水量月报综述',
            status: '初稿'
          },{
            num: 8,
            name: '2020年7月长江水质水量月报',
            status: '已发布'
          },{
            num: 9,
            name: '2020年7月份水质水量月报综述',
            status: '初稿'
          },{
            num: 10,
            name: '2020年7月长江水质水量月报',
            status: '已发布'
          },]
        }
      }
}
</script>

<style>

</style>