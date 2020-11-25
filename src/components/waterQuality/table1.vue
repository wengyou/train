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
        <template slot-scope="scope">
            <div v-if="scope.row.status === '初稿'">
                <el-button icon="el-icon-edit" type="text" size="mini" @click="toWater10">录入月报终稿</el-button>
                <el-button icon="el-icon-search" type="text" size="mini" @click="toWater3">查看月报初稿</el-button>
                <el-button icon="el-icon-download" type="text" size="mini">下载月报初稿</el-button>
            </div>
            <div v-if="scope.row.status === '已发布'">
                <el-button icon="el-icon-search" type="text" size="mini" @click="toWater12">查看月报终稿</el-button>
                <el-button icon="el-icon-search" type="text" size="mini" @click="toWater2">查看月报初稿</el-button>
                <el-button icon="el-icon-download" type="text" size="mini">下载月报初稿</el-button>
                <el-button icon="el-icon-download" type="text" size="mini">下载月报终稿</el-button>
                <el-button icon="el-icon-delete" type="text" size="mini" @click="toWater3">删除月报终稿</el-button>
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
      },
      methods: {
        toWater10() {
          this.$router.push({path: '/waterQuality/water10'})
        },
        toWater3() {
          this.$router.push({path: '/waterQuality/water3'})
        },
         toWater12() {
          this.$router.push({path: '/waterQuality/water12'})
        },
        toWater2() {
          this.$router.push({path: '/waterQuality/water2'})
        }
      }
}
</script>

<style>

</style>