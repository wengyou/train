<template>
    <el-table
      :data="tableData"
      size="mini"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="年份">
      </el-table-column>
      <el-table-column
        prop="target"
        label="水质目标">
            <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            date: '2010',
            target: '',
          },{
            date: '2019',
            target: '',
          },],
          options: [{
            value: '选项1',
            label: 'Ⅰ'
            }, {
            value: '选项2',
            label: 'Ⅱ'
            }, {
            value: '选项3',
            label: 'Ⅲ'
            }, {
            value: '选项4',
            label: 'Ⅳ'
            }, {
            value: '选项5',
            label: 'Ⅴ'
            }, {
            value: '选项5',
            label: '劣Ⅴ'
            }],
            value: ''
        }
      }
}
</script>

<style>

</style>