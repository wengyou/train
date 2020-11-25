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
        <template slot-scope="scope">
          <div v-if="scope.row.title3 === '数据待录入' ">
            <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater1">编辑月报</el-button>
            <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater9">录入月报数据</el-button>
          </div>
            <div v-if="scope.row.title3 === '数据录入完成' ">
              <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater1">生成月报</el-button>
              <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater9">录入月报数据</el-button>
          </div>
          <div v-if="scope.row.title3 === '月报已生成' ">
              <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater1">编辑月报</el-button>
              <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater9">录入月报数据</el-button>
          </div>
          <div v-if="scope.row.title3 === '月报已发布' ">
              <el-button icon="el-icon-search" type="text" size="mini" @click="toWater13">查看</el-button>
          </div>
        </template>
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
            title3: '数据录入完成'
          },{
            title1: '6月',
            title2: '2020年8月水质水量月报集合',
            title3: '月报已生成'
          },{
            title1: '6月',
            title2: '2020年8月水质水量月报集合',
            title3: '月报已发布'
          }]
        }
      },
    methods: {
      toWater1() {
        this.$router.push({path: '/waterQuality/water1'})
      },
      toWater9() {
        this.$router.push({path: '/waterQuality/water9'})
      },
      toWater13() {
        this.$router.push({path: '/waterQuality/water13'})
      }
    }
}
</script>

<style>

</style>