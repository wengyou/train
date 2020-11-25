<template>
    <el-table
        size="mini"
        border
        :data="tableData">
      <el-table-column
        prop="num"
        width="100"
        label="序号">
      </el-table-column>
      <el-table-column
        width="500"
        label="名称">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="toWater5">{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="time"
        width="200"
        label="登入时间">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="200">
        <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater6">编辑</el-button>
        <el-button icon="el-icon-delete" type="text" size="mini">删除</el-button>
    </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            num: 1,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 2,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 3,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 4,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 5,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 6,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 7,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 8,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 9,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },{
            num: 10,
            name: '省级18条责任河湖流域多年平均降水量',
            time: '2020-07-11'
          },]
        }
      },
      methods: {
        toWater5() {
          this.$router.push({path: '/waterQuality/water5'})
        },
        toWater6() {
          this.$router.push({path: '/waterQuality/water6'})
        }
      }
}
</script>

<style>

</style>