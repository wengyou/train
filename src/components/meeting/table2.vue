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
        label="序号">
        <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
        prop="name"
        label="会议名称">
        </el-table-column>
        <el-table-column
        prop="objective"
        label="会议目的">
        </el-table-column>
        <el-table-column
        prop="company"
        label="筹办单位">
        </el-table-column>
        <el-table-column
        prop="person"
        label="参会人员">
        </el-table-column>
        <el-table-column
        prop="date"
        label="会议日期"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <el-button
                icon="el-icon-edit"
                type="text"
                size="small">
                 编辑
            </el-button>
            <el-button
                icon="el-icon-delete"
                type="text"
                size="small">
                 删除
            </el-button>
        </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            num: 1,
            name: '湖北省河湖长制联席会议',
            objective: '议定重大河湖问题',
            company: '湖北省河湖长制',
            person: '湖北省河湖长制联席单位',
            date: '2020-06-12'
        },
        {
            num: 2,
            name: '湖北省河湖长制联席会议',
            objective: '议定重大河湖问题',
            company: '湖北省河湖长制',
            person: '湖北省河湖长制联席单位',
            date: '2020-06-12'
        }, {
            num: 3,
            name: '湖北省河湖长制联席会议',
            objective: '议定重大河湖问题',
            company: '湖北省河湖长制',
            person: '湖北省河湖长制联席单位',
            date: '2020-06-12'
        },{
            num: 4,
            name: '湖北省河湖长制联席会议',
            objective: '议定重大河湖问题',
            company: '湖北省河湖长制',
            person: '湖北省河湖长制联席单位',
            date: '2020-06-12'
        },{
            num: 5,
            name: '湖北省河湖长制联席会议',
            objective: '议定重大河湖问题',
            company: '湖北省河湖长制',
            person: '湖北省河湖长制联席单位',
            date: '2020-06-12'
        },{
            num: 6,
            name: '湖北省河湖长制联席会议',
            objective: '议定重大河湖问题',
            company: '湖北省河湖长制',
            person: '湖北省河湖长制联席单位',
            date: '2020-06-12'
        }, ],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style>

</style>