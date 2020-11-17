<template>
    <div class="missionInit_container">
        <Header />
        <current-location></current-location>
        <div class="flex">
          <el-input
            placeholder="关键字搜索"
            size="mini"
            style="width: 200px; margin: auto 0"
            v-model="input4">
            <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
          </el-input>
          <date-select></date-select>
          <el-button type="primary" size='mini' class="btn"  @click="centerDialogVisible = true">+新建任务  </el-button>
        </div>
        <!-- 表格 -->
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
                <el-button type="text" size="small" @click="toLaunchDetail">河北巡河月报</el-button>
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="submitted"
                label="已提交">
            </el-table-column>
            <el-table-column
                prop="notSub"
                label="未提交">
            </el-table-column>
            <el-table-column
                prop="complete"
                label="任务完成率">
            </el-table-column>
            <el-table-column
                prop="opera"
                label="操作">
                <el-button icon="el-icon-search" type="text" size="small" @click="toLaunchDetail">查看详情</el-button>
            </el-table-column>
        </el-table>
        <!-- 弹框 -->
        <el-dialog
            title="任务发起"
            :visible.sync="centerDialogVisible"
            width="50%"
            center>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="任务名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="上报单位" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="武汉市河长办" name="type"></el-checkbox>
                    <el-checkbox label="宜昌市河长办" name="type"></el-checkbox>
                    <el-checkbox label="天门市河长办" name="type"></el-checkbox>
                    <el-checkbox label="襄阳市河长办" name="type"></el-checkbox>
                    <el-checkbox label="天门市河长办" name="type"></el-checkbox>
                    <el-checkbox label="襄阳市河长办" name="type"></el-checkbox>
                    <el-checkbox label="武汉市河长办" name="type"></el-checkbox>
                    <el-checkbox label="宜昌市河长办" name="type"></el-checkbox>
                    <el-checkbox label="天门市河长办" name="type"></el-checkbox>
                    <el-checkbox label="襄阳市河长办" name="type"></el-checkbox>
                    <el-checkbox label="天门市河长办" name="type"></el-checkbox>
                    <el-checkbox label="襄阳市河长办" name="type"></el-checkbox>
                    <el-checkbox label="武汉市河长办" name="type"></el-checkbox>
                    <el-checkbox label="宜昌市河长办" name="type"></el-checkbox>
                    <el-checkbox label="天门市河长办" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="上报要求" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="附件" prop="upload">
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
                        <el-button icon="el-icon-upload2" size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="截至日期" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
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
        tableData: [{
          num: '1',
          title: '河长巡河月报',
          date: '2019-12-28',
          submitted: '40',
          notSub: '10',
          complete: '80%',
        },{
          num: '2',
          title: '河长巡河月报',
          date: '2019-12-28',
          submitted: '40',
          notSub: '10',
          complete: '80%',
        }],
        centerDialogVisible: false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: ['武汉市河长办','宜昌市河长办','天门市河长办','襄阳市河长办'],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个上报单位', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写上报要求', trigger: 'blur' }
          ],
          upload: [
            { required: true, message: '请上传附件', trigger: 'change' }
          ]
        },
        fileList: [],
        input4: ''
      }
    },
    methods: {
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
      toLaunchDetail() {
          this.$router.push({path: '/launchDetail'})
      },
    }
}
</script>

<style lang="scss" scope>
    .missionInit_container{
        .btn{
            margin: 20px 0 20px 20px;
        }
    }
</style>