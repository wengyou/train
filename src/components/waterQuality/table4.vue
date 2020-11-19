<template>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="num"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="type"
      label="水体类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name1"
      label="监测站名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name2"
      label="河湖名"
      width="150">
    </el-table-column>
    <el-table-column :label="name">
      <el-table-column
        prop="num1"
        label="1">
      </el-table-column>
      <el-table-column
        prop="mun2"
        label="2">
      </el-table-column>
      <el-table-column
        prop="mun3"
        label="3">
      </el-table-column>
      <el-table-column
        prop="num4"
        label="4">
      </el-table-column>
      <el-table-column
        prop="mun5"
        label="5">
      </el-table-column>
      <el-table-column
        prop="mun6"
        label="6">
      </el-table-column>
      <el-table-column
        prop="num7"
        label="7">
      </el-table-column>
      <el-table-column
        prop="mun8"
        label="8">
      </el-table-column>
      <el-table-column
        prop="mun9"
        label="9">
      </el-table-column>
      <el-table-column
        prop="num10"
        label="10">
      </el-table-column>
      <el-table-column
        prop="mun11"
        label="11">
      </el-table-column>
      <el-table-column
        prop="mun12"
        label="12">
      </el-table-column>
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
                type: '河流', 
                name1: '',
                name2: '长江(湖北境内)',
                num1: '',
                num2: '',
                num3: '',
                num4: '',
                num5: '',
                num6: '',
                num7: '',
                num8: '',
                num9: '',
                num10: '',
                num11: '',
                num12: '',
            },{
                num: 2,
                type: '河流', 
                name1: '',
                name2: '汉江(湖北境内)',
                num1: '',
                num2: '',
                num3: '',
                num4: '',
                num5: '',
                num6: '',
                num7: '',
                num8: '',
                num9: '',
                num10: '',
                num11: '',
                num12: '',
            },{
                num: 3,
                type: '河流', 
                name1: '',
                name2: '东荆河',
                num1: '',
                num2: '',
                num3: '',
                num4: '',
                num5: '',
                num6: '',
                num7: '',
                num8: '',
                num9: '',
                num10: '',
                num11: '',
                num12: '',
            }]
        }
    }
}
</script>

<style>

</style>