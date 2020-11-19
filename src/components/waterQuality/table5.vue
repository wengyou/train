<template>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="name1"
      label="河流"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name2"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name3"
      label="监测断面名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name4"
      label="监测断面地址"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name5"
      label="考核目标"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name6"
      label="监测结果"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name7"
      label="达标情况"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name8"
      label="达标项目(超标倍数)"
      width="150">
    </el-table-column>
    <el-table-column label="水质变化情况">
      <el-table-column
        prop="name9"
        label="同比">
      </el-table-column>
      <el-table-column
        prop="name10"
        label="环比">
      </el-table-column>
    </el-table-column>
    <el-table-column
      prop="name11"
      label="市级河湖长"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name12"
      label="市级河湖长联系部门"
      width="300">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            tableData: [{
                name1: '长江',
                name2: '1',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },{
                name1: '长江',
                name2: '2',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },{
                name1: '长江',
                name2: '3',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },{
                name1: '长江',
                name2: '4',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },{
                name1: '长江',
                name2: '5',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },{
                name1: '长江',
                name2: '6',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },{
                name1: '长江',
                name2: '7',
                name3: '黄蜡石',
                name4: '长江恩施-宜昌市界',
                name5: 'Ⅲ',
                name6: 'Ⅲ',
                name7: '达标',
                name8: '无',
                name9: '持平(Ⅱ)',
                name10: '持平(Ⅱ)',
                name11: '柯俊(恩施州委书记、州人大常委会主任)',
                name12: '恩施市水利和湖泊局、恩施州交通运输局',
            },]
        }
    }
}
</script>

<style>

</style>