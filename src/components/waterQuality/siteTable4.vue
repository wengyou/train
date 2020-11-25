<template>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="num"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="title1"
      label="所属湖(库)">
    </el-table-column>
    <el-table-column
      prop="title2"
      label="关联测站编码">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
        <el-button icon="el-icon-edit" type="text" size="mini">编辑</el-button>
        <el-button icon="el-icon-delete" type="text" size="mini">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            tableData: [{
                num: 1,
                title1:'洪湖',
                title2:'洪湖水文站',
            },{
                num: 2,
                title1:'长湖',
                title2:'长湖水文站',
            },]
        }
    }
}
</script>

<style>

</style>