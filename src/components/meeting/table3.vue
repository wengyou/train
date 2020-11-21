<template>
  <el-table
    ref="multipleTable"
    size="mini"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection">
    </el-table-column>
    <el-table-column
        prop="num"
        width="100"
        label="序号">
    </el-table-column>
    <el-table-column
      prop="title"
      width="600"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="date"
      label="发布日期"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <el-button
                icon="el-icon-search"
                type="text"
                size="small"
                @click="toDetail"
            >
                 查看
            </el-button>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num: '1',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        }, {
          num: '2',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '3',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '4',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '5',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '6',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '7',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '8',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '9',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },{
          num: '10',
          title: '长江委确定生态流量管理全覆盖跨省河湖名录',
          date: '2020-06-12'
        },],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
       toDetail() {
        this.$router.push({path: '/meeting/detail'})
      }
    },
  }
</script>