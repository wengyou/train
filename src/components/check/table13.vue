<template>
    <el-table
      :data="tableData6"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="num"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="title1"
        label="年度目标名称">
      </el-table-column>
      <el-table-column
        prop="title2"
        sortable
        width="150"
        label="考核指标类别">
      </el-table-column>
      <el-table-column
        prop="title3"
        sortable
        width="110"
        label="考核类型">
      </el-table-column>
      <el-table-column
        prop="title4"
        sortable
        label="分项评分细则">
      </el-table-column>
      <el-table-column
        prop="title5"
        width="120"
        label="评分类别">
      </el-table-column>
      <el-table-column
        prop="title6"
        sortable
        width="80"
        label="标准分">
      </el-table-column>
      <el-table-column
        prop="title7"
        sortable
        width="80"
        label="系统评分">
      </el-table-column>
      <el-table-column
        prop="title8"
        sortable
        width="150"
        label="自评分数">
      </el-table-column>
      <el-table-column
        prop="title9"
        sortable
        width="150"
        label="佐证材料">
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData6: [{
            num:1,
            title1: '水质提升攻坚行动年度任务完成暨市级河湖重要断面水质达标',
            title2: '水质达标情况',
            title3: '数据类',
            title4: '市级河湖长领责的河湖，国控、省控断面水质达标率4分，得分为：4×达标断面个数÷监测断面总个数；',
            title5: '系统评分',
            title6: '8',
            title7: '6',
            title8: '',
        }, {
            num:2,
            title1: '水质提升攻坚行动年度任务完成暨市级河湖重要断面水质达标',
            title2: '黑臭水体治理',
            title3: '数据类',
            title4: '地级以上城市建成区黑臭水体消除比例达到 90%以上,达到的得 满分，未达到的不得分',
            title5: '人工评分',
            title6: '2',
            title7: '',
            title8: '',
        }, {
            num:3,
            title1: '采砂船舶按指定地点集中停放监管',
            title2: '采砂船舶集中停放监管',
            title3: '数据类',
            title4: '采砂船舶未按指定地点停放 1 艘次扣 0.1 分，该项 5 分扣完为止',
            title5: '人工评分',
            title6: '5',
            title7: '',
            title8: '',
        }, ]
      };
    },
    methods: {
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
        if (columnIndex === 1) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
        console.log(row, column)
      }
    }
  };
</script>

<style>

</style>