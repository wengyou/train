<template>
    <div class="taskDetail_container">
        <header>任务发起详情</header>
        <el-button icon="el-icon-back" type="primary" size="mini" @click="toBack()" style="margin: 20px 0 0 20px">返回</el-button>
        <div class="wrapper">
            <div>
                <span>上报单位：</span>
                <el-select v-model="value1" size="mini" placeholder="请选择">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span style="margin-left: 20px">状态：</span>
                <el-select size="mini" v-model="value2" placeholder="请选择">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button type="primary" icon="el-icon-download" size="mini">批量下载</el-button>
        </div>
        <!-- 表格 -->
        <el-table
            :data="tableData"
            size="mini"
            border
            style="width: 98%;margin: 0 auto;">
            <el-table-column
                prop="num"
                width="80"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题">
            </el-table-column>
            <el-table-column
                prop="company"
                label="上报单位">
            </el-table-column>
            <el-table-column
                prop="date"
                label="截至日期">
            </el-table-column>
            <el-table-column
                prop="submittedDate"
                label="提交日期">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态">
            </el-table-column>
            <el-table-column
                prop="opera"
                label="操作">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.status === '未提交'" style="color: #dddddd" icon="el-icon-download" type="text" size="small">下载</el-button>
                    <el-button v-if="scope.row.status === '已提交'" icon="el-icon-download" type="text" size="small">下载</el-button>
                    <el-button v-if="scope.row.status === '未提交'" style="color: #dddddd" icon="el-icon-back" type="text" size="small" @click="dialogVisible = true">退回</el-button>
                    <el-button v-if="scope.row.status === '已提交'" icon="el-icon-back" type="text" size="small" @click="dialogVisible = true">退回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
          title="请写退回原因"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">否</el-button>
            <el-button type="primary" @click="dialogVisible = false">是</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
      return {
        options1: [{
          value: '选项1',
          label: '武汉市河长办'
        }, {
          value: '选项2',
          label: '宜昌市河长办'
        }, {
          value: '选项3',
          label: '襄阳市河长办'
        },{
          value: '选项4',
          label: '天门市河长办'
        }],
        value1: '',
        options2: [{
          value: '选项1',
          label: '已提交'
        }, {
          value: '选项2',
          label: '未提交'
        }],
        value2: '',
        tableData: [{
          num: '1',
          title: '河长巡河月报',
          company: '武汉市河长办',
          date: '2020-12-28',
          submittedDate: '2019-12-19',
          status: '已提交',
        },{
          num: '2',
          title: '河长巡河月报',
          company: '宜昌市河长办',
          date: '2020-12-28',
          submittedDate: '2019-12-19',
          status: '未提交',
        },{
          num: '3',
          title: '河长巡河月报',
          company: '襄阳市河长办',
          date: '2020-12-28',
          submittedDate: '2019-12-19',
          status: '已提交',
        },{
          num: '4',
          title: '河长巡河月报',
          company: '天门市河长办',
          date: '2020-12-28',
          submittedDate: '2019-12-19',
          status: '已提交',
        }],
        dialogVisible: false,
        textarea: ''
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            console.log(_)
          })
          .catch(_ => {console.log(_)});
      },
      toBack() {
        this.$router.go(-1)
      }
    }
}
</script>

<style lang="scss" scope>
    .taskDetail_container{
        header{
            width: 100%;
            height: 70px;
            background-image: linear-gradient(to right, #0890f2 , #1b49d6);
            text-align: center;
            line-height: 70px;
            color: #ffffff;
            font-weight: bold;
            font-size: 20px;
        }
        .wrapper{
            width: 98%;
            display: flex;
            justify-content: space-between;
            margin: 20px auto;
        }
    }
</style>