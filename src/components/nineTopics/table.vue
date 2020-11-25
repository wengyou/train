<template>
    <div class="table_container">
        <el-table
            :data="tableData"
            size="small"
            style="width: 35vw;"
            :row-class-name="tableRowClassName"
            border>
            <el-table-column
            prop="num"
            width="80"
            label="序号">
            </el-table-column>

            <el-table-column
            prop="area"
            label="市、州">
            </el-table-column>

            <el-table-column
            prop="num1"
            label="河湖警长数量（个）">
            </el-table-column>
            <el-table-column
            prop="num2"
            label="河湖重要点位监控数量（处）">
            </el-table-column>
            <el-table-column
            prop="num3"
            label="跨行政区水质断面设置数量（个）">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'table1';
        } else if (rowIndex === 3) {
          return 'table3';
        } else if (rowIndex === 2) {
          return 'table2';
        } else if (rowIndex === 4) {
          return 'table4';
        } else if (rowIndex === 5) {
          return 'table5';
        }
        return row;
      }
    },
    data() {
      return {
        tableData: [{
            num: '',
            area: '',
            num1: '',
            num2: '',
            num3: ''
        }, {
            num: '',
            area: '',
            num1: '',
            num2: '',
            num3: ''
        }, {
            num: '',
            area: '',
            num1: '',
            num2: '',
            num3: ''
        }, {
            num: '',
            area: '',
            num1: '',
            num2: '',
            num3: ''
        }, {
            num: '',
            area: '',
            num1: '',
            num2: '',
            num3: ''
        }, {
            num: '',
            area: '',
            num1: '',
            num2: '',
            num3: ''
        }]
      }
    }
}
</script>

<style lang="scss" scoped>
.el-table .table1 {
    background: #003399;
  }

.el-table .table2 {
    background: #003399;
}
</style>