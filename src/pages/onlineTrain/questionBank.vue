<template>
    <div class="questionBank_container">
        <Header />
        <current-location></current-location>
        <div class="header">
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
            <el-button 
                type="primary" 
                size="mini"
                @click="dialogVisible = true" 
                style="width: 70px; margin-left: 20px">
                新增
            </el-button>
        </div>
        <!-- 弹框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="试题内容">
                    <el-input v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item label="所属部门">
                    <el-select v-model="form.department" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="试题类型">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="题型">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选项">
                    <div>
                        <el-button size="small">+</el-button>
                        <el-button size="small">-</el-button>
                    </div>
                    <div>
                        <el-radio-group v-model="radio">
                            <el-radio :label="3" style="margin-top: 10px">A  <el-input size="mini" v-model="input" placeholder="请输入内容"></el-input></el-radio><br> 
                            <el-radio :label="6" style="margin-top: 10px">B  <el-input size="mini" v-model="input" placeholder="请输入内容"></el-input> </el-radio>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="试题解析">
                    <el-input v-model="form.content"></el-input>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item> -->
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
            </span>
        </el-dialog>
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
                    label="试题标题"
                    width="200px">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="试卷类型">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="答题次数">
                </el-table-column>
                <el-table-column
                    prop="rightNum"
                    label="正确数">
                </el-table-column>
                <el-table-column
                    prop="rightPer"
                    label="正确率">
                </el-table-column>
                <el-table-column
                    prop="testType"
                    label="题型">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <el-button type="text" icon="el-icon-edit" size="mini">编辑</el-button>
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
export default {
    name: 'questionBank',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
        return {
            tableData: [{
                num: '1',
                title: '中共中央办公厅、国务院办公厅印发《关于全面推行河长制的意见》的时间？',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
            },{
                num: '2',
                title: '要在全国（）全面推行河长制',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
            },{
                num: '3',
                title: '河长制办公室承担河长制组织实施具体工作，落实（）确定的事项',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
            },{
                num: '4',
                title: '习近平总书记做出重要指示，强调（）是“五位一体”总体布局和“四个全面”战略布局的重要内容',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
            },{
                num: '5',
                title: '全面推行河长制要通过主要媒体向社会公告（）名单',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
            },{
                num: '6',
                title: '习近平总书记做出重要指示，强调（）是“五位一体”总体布局和“四个全面”战略布局的重要内容',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
            },{
                num: '7',
                title: '全面推行河长制要通过主要媒体向社会公告（）名单',
                type: '水利安全综合',
                count: '85',
                rightNum: '16',
                rightPer: '18.8%',
                testType: '单选题', 
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
            form: {
                content: ''
            },
            radio: 2,
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
      }
    }
}
</script>

<style lang="scss" scope>
    .questionBank_container{
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