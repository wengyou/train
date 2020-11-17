<template>
    <div class="testManage_container">
        <Header />
        <current-location></current-location>
        <div class="header">
            <el-button @click="dialogVisible = true" type="primary" size="mini" style="width: 110px; margin-left: 30px">新增考试</el-button>
            <el-dialog
                title="考试设置"
                :visible.sync="dialogVisible"
                width="60%">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="考试名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="满分分值" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="合格分数线" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="考卷时长" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="考试截止时间" prop="name">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="题型设置" prop="delivery">
                        <el-input-number size="mini" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                        <span style="margin-left:10px">单选</span>
                        <el-input-number style="margin-left: 20px" size="mini" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                        <span style="margin-left:10px">多选</span>
                        <el-input-number style="margin-left: 20px" size="mini" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                        <span style="margin-left:10px">判断</span>   
                    </el-form-item>
                    <el-form-item label="" prop="name">
                        <el-button type="primary" size="small" @click="selectVisible = true">试题选择</el-button>
                        <el-button type="primary" size="small" @click="toPreview">预览试卷</el-button>
                    </el-form-item>
                    <el-form-item label="发布范围" prop="name">
                        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">全选</el-checkbox>
                        <el-checkbox-group v-model="checkedRanges" @change="handleCheckedRangesChange">
                            <el-checkbox v-for="range in ranges" :label="range" :key="range">{{range}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="发布对象" prop="name">
                        <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
                        <el-checkbox-group v-model="checkedObjects" @change="handleCheckedObjectsChange">
                            <el-checkbox v-for="obj in objects" :label="obj" :key="obj">{{obj}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false" size="mini">保存</el-button>
                    <el-button type="primary" @click="dialogVisible = false" size="mini">发放试卷</el-button>
                </span>
            </el-dialog>
            <el-dialog
                :visible.sync="selectVisible"
                width="80%">
                <div>
                    <el-select v-model="value1" placeholder="全部" size="mini" style="margin-left: 30px">
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="请选择" size="mini" style="margin-left: 20px">
                        <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        style="margin-left: 20px; width: 200px"
                        size="mini"
                        v-model="input2">
                    </el-input>
                </div>
                <el-table
                    :data="dialogTableData"
                    size="mini"
                    style="margin-top: 20px"
                    border>
                    <el-table-column
                    prop="num"
                    label="序号">
                    </el-table-column>
                    <el-table-column
                    prop="content"
                    label="试题内容">
                    </el-table-column>
                    <el-table-column
                    prop="questiontype"
                    label="题型">
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="题目分类">
                    </el-table-column>
                </el-table>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="selectVisible = false" size="mini">取 消</el-button>
                    <el-button type="primary" @click="selectVisible = false" size="mini">保 存</el-button>
                </span>
            </el-dialog>
        </div>
        <div style="width: 96%; margin: 0 auto">
            <el-table
                border
                size="mini"
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="num"
                    label="序号">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="考试名称"
                    width="200px">
                    <template slot-scope="scope">
                        <el-tag size="medium" @click="toTestDetail">{{ scope.row.title }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="考试时长">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="考试截至日期">
                </el-table-column>
                <el-table-column
                    prop="range"
                    width="200"
                    label="发布范围">
                </el-table-column>
                <el-table-column
                    prop="objects"
                    width="300"
                    label="发布对象">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="考试状态">
                </el-table-column>
                <el-table-column
                    prop="num1"
                    label="应考人数">
                </el-table-column>
                <el-table-column
                    prop="num2"
                    label="参考人数">
                </el-table-column>
                <el-table-column
                    prop="num3"
                    label="合格人数">
                </el-table-column>
                <el-table-column
                    prop="qualified"
                    label="合格率">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <el-button type="text" icon="el-icon-edit" size="mini" @click="dialogVisible = true" >编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" size="mini">删除</el-button>
                </el-table-column>
            </el-table>
        </div>
        <div class="footer">
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
const rangeOptions = ['省级', '市级', '县级', '乡级', '村级'];
const objOptions = ['总河湖长','河湖长','河湖长办','联系单位','巡查员']
export default {
    name: 'questionBank',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
        return {
            dialogTableData:[{
                num: 1,
                content: '',
                questionType: '',
                type: ''
            },{
                num: 2,
                content: '',
                questionType: '',
                type: ''
            },{
                num: 3,
                content: '',
                questionType: '',
                type: ''
            },{
                num: 4,
                content: '',
                questionType: '',
                type: ''
            },{
                num: 5,
                content: '',
                questionType: '',
                type: ''
            },{
                num: 6,
                content: '',
                questionType: '',
                type: ''
            },{
                num: 7,
                content: '',
                questionType: '',
                type: ''
            }],
            tableData: [{
                num: '1',
                title: '河湖长制2020年基础知识考试',
                time: '20分钟',
                date: '2020-12-30',
                range: '省级，市级，县级，乡级，村级',
                objects: '总河湖长，河湖长，河湖长办，联系单位，巡查员',
                status: '未开始',
                num1: '11531',
                num2: '11052',
                num3: '9987',
                qualified: '87.5' 
            },{
                num: '2',
                title: '河湖长制2020年基础知识考试',
                time: '20分钟',
                date: '2020-12-30',
                range: '省级，市级，县级，乡级，村级',
                objects: '总河湖长，河湖长，河湖长办，联系单位，巡查员',
                status: '未开始',
                num1: '11531',
                num2: '11052',
                num3: '9987',
                qualified: '87.5' 
            },{
                num: '3',
                title: '河湖长制2020年基础知识考试',
                time: '20分钟',
                date: '2020-12-30',
                range: '省级，市级，县级，乡级，村级',
                objects: '总河湖长，河湖长，河湖长办，联系单位，巡查员',
                status: '未开始',
                num1: '11531',
                num2: '11052',
                num3: '9987',
                qualified: '87.5' 
            }],
            options1: [{
                value: '选项1',
                label: '单选'
                }, {
                value: '选项2',
                label: '多选'
                }, {
                value: '选项3',
                label: '判断'
                }, {
                value: '选项4',
                label: '全部'
                }],
            value1: '',
            options2: [],
            value2: '',
            input2: '',
            dialogVisible: false,
            ruleForm: {
                name: ''
            },
            checkAll1: false,
            checkedRanges: [],
            ranges: rangeOptions,
            isIndeterminate1: true,
            checkAll2: false,
            checkedObjects: [],
            objects: objOptions,
            isIndeterminate2: true,
            selectVisible: false
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
      handleCheckAllChange1(val) {
        this.checkedRanges = val ? rangeOptions : [];
        this.isIndeterminate1 = false;
      },
      handleCheckAllChange2(val) {
        this.checkedObjects = val ? objOptions : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedObjectsChange(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.ranges.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.ranges.length;
      },
      handleCheckedRangesChange(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.objects.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.objects.length;
      },
      toPreview() {
          this.$router.push({path: '/preview'})
      },
      toTestDetail() {
          this.$router.push({path: '/testDetail'})
      }
    }
}
</script>

<style lang="scss" scope>
    .testManage_container{
        .header{
            display: flex;
            width: 100%;
            height: 50px;
            align-items: center;
            border-bottom: 1px solid #dddddd;
        }
        .footer{
            width: 100%;
            height: 50px;
            background: f2f2f2;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            bottom: 0;
        }
    }
</style>