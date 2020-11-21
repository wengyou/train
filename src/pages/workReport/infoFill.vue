<template>
    <div class="infoFill_container">
        <Header />
        <current-location></current-location>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的待办" name="first">
                <el-table
                    :data="tableData"
                    border
                    style="width: 98%;margin: 0 auto;">
                    <el-table-column
                        prop="num"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="标题">
                        <template slot-scope="scope">
                            <el-tag size="medium">{{ scope.row.title }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="日期">
                    </el-table-column>
                    <el-table-column
                        prop="progress"
                        label="全省上报进度">
                    </el-table-column>
                    <el-table-column
                        prop="submittedDate"
                        label="提交日期">
                    </el-table-column>
                    <el-table-column
                        prop="subStatus"
                        label="提交">
                    </el-table-column>
                    <el-table-column
                        prop="opera"
                        label="操作">
                        <el-button icon="el-icon-search" type="text" size="small" @click="toReportDetail">查看详情</el-button>
                        <el-button icon="el-icon-upload2" type="text" size="small" @click="dialogVisible = true">上报</el-button>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="全部任务" name="second">
                <div class="flex wrapper">
                    <el-input
                        placeholder="关键字搜索"
                        size="mini"
                        style="width: 200px; margin: auto 0"
                        v-model="input4">
                        <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
                    </el-input>
                    <date-select></date-select>
                    <el-button type="primary" size='mini' class="btn"  @click="centerDialogVisible = true">+新建任务</el-button>
                </div>
                <el-table
                    :data="allTableData"
                    border
                    style="width: 98%;margin: 0 auto;">
                    <el-table-column
                        prop="num"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="标题">
                        <template slot-scope="scope">
                            <el-tag size="medium">{{ scope.row.title }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="任务发布日期">
                    </el-table-column>
                    <el-table-column
                        prop="endDate"
                        label="截止日期">
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
                        <el-button icon="el-icon-search" type="text" size="small" @click="toReportDetail">查看详情</el-button>
                        <el-button icon="el-icon-upload2" type="text" size="small" @click="dialogVisible = true">上报</el-button>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-dialog
          title="文件导入"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">选择文件上传</el-button>
          </el-upload>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">关闭</el-button>
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import DateSelect from '../../components/dateSelect.vue'
export default {
    name: 'missionInit',
    components: {
        Header,
        CurrentLocation,
        DateSelect
    },
    data() {
      return {
        activeName: 'first',
        allTableData: [{
            num: 1,
            title: '河长巡河月报',
            date: '2019-12-28',
            endDate: '2019-12-28',
            submittedDate: '2019-11-23',
            status: '未提交'
        },{
            num: 2,
            title: '河长巡河月报',
            date: '2019-12-28',
            endDate: '2019-12-28',
            submittedDate: '2019-11-23',
            status: '未提交'
        },{
            num: 3,
            title: '河长巡河月报',
            date: '2019-12-28',
            endDate: '2019-12-28',
            submittedDate: '2019-11-23',
            status: '未提交'
        },{
            num: 4,
            title: '河长巡河月报',
            date: '2019-12-28',
            endDate: '2019-12-28',
            submittedDate: '2019-11-23',
            status: '未提交'
        }],
        tableData: [{
          num: '1',
          title: '河长巡河月报',
          date: '2019-12-28',
          progress: '15/17',
          submittedDate: '',
          subStatus: '未提交',
        }, {
          num: '2',
          title: '河长巡河月报',
          date: '2019-12-28',
          progress: '15/17',
          submittedDate: '',
          subStatus: '未提交',
        }],
        fileList: [],
        dialogVisible: false,
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toReportDetail() {
          this.$router.push({path: '/reportDetail'})
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            console.log(_)
          })
          .catch(_ => {console.log(_)});
      }
    }
}
</script>

<style lang="scss" scope>
    .infoFill_container{
        .el-tabs__item{
            text-indent: 2em;
        }
        .el-tabs__active-bar{
            width: 110px !important;
        }
        .wrapper{
          align-items: center;
        }
    }
</style>