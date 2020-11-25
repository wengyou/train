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
      prop="name1"
      label="河湖名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name2"
      label="河湖名"
      width="150">
    </el-table-column>
    <el-table-column label="河流多年月平均流量（m3/s）、湖泊多年月平均水位（m）">
      <el-table-column
        prop="num1"
        label="1">
      </el-table-column>
      <el-table-column
        prop="num2"
        label="2">
      </el-table-column>
      <el-table-column
        prop="num3"
        label="3">
      </el-table-column>
      <el-table-column
        prop="num4"
        label="4">
      </el-table-column>
      <el-table-column
        prop="num5"
        label="5">
      </el-table-column>
      <el-table-column
        prop="num6"
        label="6">
      </el-table-column>
      <el-table-column
        prop="num7"
        label="7">
      </el-table-column>
      <el-table-column
        prop="num8"
        label="8">
      </el-table-column>
      <el-table-column
        prop="num9"
        label="9">
      </el-table-column>
      <el-table-column
        prop="num10"
        label="10">
      </el-table-column>
      <el-table-column
        prop="num11"
        label="11">
      </el-table-column>
      <el-table-column
        prop="num12"
        label="12">
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                num: 1,
                name1: '河流',
                name2: '长江',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 1,
                name1: '河流',
                name2: '长江',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 2,
                name1: '河流',
                name2: '汉江',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 4,
                name1: '河流',
                name2: '汉北河',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 5,
                name1: '河流',
                name2: '清江',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 6,
                name1: '河流',
                name2: '富水',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 7,
                name1: '河流',
                name2: '南河',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 8,
                name1: '河流',
                name2: '通顺河',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },{
                num: 9,
                name1: '河流',
                name2: '洪湖',
                num1: '5740',
                num2: '5600',
                num3: '5970',
                num4: '7710',
                num5: '12300',
                num6: '17500',
                num7: '29000',
                num8: '26200',
                num9: '22100',
                num10: '12800',
                num11: '9110',
                num12: '6220',
            },]
        }
    }
}
</script>

<style>

</style>