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
      label="测站编码"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title2"
      label="测站名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title3"
      label="测站类别"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title4"
      label="测站经度"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title5"
      label="测站纬度"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title6"
      label="水域类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title7"
      label="所属河流(湖泊，河流)"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title8"
      label="行政区划"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title9"
      label="隶属行业单位"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title10"
      label="站址"
      width="150">
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
                title1:'',
                title2:'',
                title3:'',
                title4:'',
                title5:'',
                title6: '',
                title7:'',
                title8:'',
                title9:'',
                title10:'',
            },{
                num: 2,
                title1:'',
                title2:'',
                title3:'',
                title4:'',
                title5:'',
                title6: '',
                title7:'',
                title8:'',
                title9:'',
                title10:'',
            },]
        }
    }
}
</script>

<style>

</style>