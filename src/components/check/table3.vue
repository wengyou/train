<template>
  <el-table
    :data="tableData"
    border
    stripe
    size="mini"
    style="width: 100%">
    <el-table-column
      prop="num"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="title1"
      label="考核对象">
    </el-table-column>
    <el-table-column
      prop="title2"
      label="责任河湖">
    </el-table-column>
        <el-table-column
      prop="title3"
      label="职务">
    </el-table-column>
    <!-- <el-table-column
      prop="title4"
      label="行政区划">
    </el-table-column> -->
        <el-table-column
      prop="title5"
      label="系统评分"
      >
    </el-table-column>
    <el-table-column
      prop="title6"
      label="备注">
    </el-table-column>
        <el-table-column
      prop="title7"
      label="排名">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num:1,
          title1: '李鹏',
          title2: '长江宜昌段',
          title3: '市长',
          title4: '宜昌市',
          title5: '30',
          title6: '系统评分总分40分',
          title7: '1',
        }, {
          num:1,
          title1: '赵伟',
          title2: '清江宜昌段',
          title3: '副市长',
          title4: '荆州市',
          title5: '25',
          title6: '系统评分总分40分',
          title7: '2',
        }]
      }
    }
  }
</script>