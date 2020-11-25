<template>
  <el-table
    :data="tableData5"
    size="mini"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-table
            :data="props.row.names"
            stripe
            style="width: 100%">
            <el-table-column
            prop="name1"
            label="考核项目名称">
            </el-table-column>
            <el-table-column
            prop="name2"
            label="评分类别">
            </el-table-column>
            <el-table-column
            prop="name3"
            label="考核指标类别">
            </el-table-column>
            <el-table-column
            prop="name4"
            label="考核类型">
            </el-table-column>
            <el-table-column
            prop="name5"
            label="分项评分细则">
            </el-table-column>
            <el-table-column
            prop="name6"
            label="标准分">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作">
            <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                编辑
                </el-button>
            <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                删除
                </el-button>
            </el-table-column>
        </el-table>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="方案名称"
      prop="title1">
    </el-table-column>
    <el-table-column
      label="考核范围"
      prop="title2">
    </el-table-column>
    <el-table-column
      label="考核对象"
      prop="title3">
    </el-table-column>
    <el-table-column
      label="考核周期"
      prop="title4">
    </el-table-column>
    <el-table-column
      label="有效时间"
      prop="title5">
    </el-table-column>
    <el-table-column
      label="总分"
      prop="title6">
    </el-table-column>
    <el-table-column
      label="达标分"
      prop="title7">
    </el-table-column>
    <el-table-column
      label="状态"
      prop="title8">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="props">
            <el-button
                v-if="props.row.title8 === '未启用' "
                type="text"
                size="small">
                编辑
            </el-button>
            <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                删除
                </el-button>
            <el-button
                v-if="props.row.title8 === '未启用' "
                type="text"
                size="small">
                启用
            </el-button>
      </template>
      
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData5: [{
            title1: '2020年度市州河湖长目标考核',
            title2: '武汉市、宜昌市、枝江市',
            title3: '河湖长',
            title4: '年度考核',
            title5: '2020-1-1~2020-12-30',
            title6: '100',
            title7: '60',
            title8: '未启用',
            names: [{
                name1: '市级河湖重要断面水质达标',
                name2: '系统评分',
                name3: '水质达标情况',
                name4: '数据类',
                name5: '市级河湖长领责的河湖，国控、省控断面水质达标率4分，得分为：4×达标断面个数÷监测断面总个数；',
                name6: '4',
            },{
                name1: '采砂船舶按指定地点集中停放监管',
                name2: '人工评分',
                name3: '采砂船舶集中停放监管',
                name4: '数据类',
                name5: '采砂船舶未按指定地点停放 1 艘次扣 0.1 分，该项 5 分扣完为止',
                name6: '5',
            },]
            
        },{
            title1: '2019年度市州河湖长目标考核',
            title2: '武汉市、宜昌市',
            title3: '河湖长',
            title4: '按年份',
            title5: '2020-1-1~2020-12-30',
            title6: '100',
            title7: '60',
            title8: '已启用',
            names: [{
                name1: '市级河湖重要断面水质达标',
                name2: '系统评分',
                name3: '水质达标情况',
                name4: '数据类',
                name5: '市级河湖长领责的河湖，国控、省控断面水质达标率4分，得分为：4×达标断面个数÷监测断面总个数；',
                name6: '4',
            },{
                name1: '市级河湖重要断面水质达标',
                name2: '人工评分',
                name3: '黑臭水体治理',
                name4: '数据类',
                name5: '地级以上城市建成区黑臭水体消除比例达到 90%以上,达到的得 满分，未达到的不得分',
                name6: '2',
            },]
            
        },]
      }
    }
  }
</script>