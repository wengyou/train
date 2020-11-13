<template>
    <div class="questionBank_container">
        <Header />
        <current-location></current-location>
        <div class="header">
            <p style="margin-left: 20px; font-size: 14px">题库：</p>
            <el-radio-group v-model="radio">
                <el-radio :label="3">全部</el-radio>
                <el-radio :label="6">一般事件</el-radio>
                <el-radio :label="9">一般事件</el-radio>
            </el-radio-group>
            <p style="margin-left: 30px; font-size: 14px">题目分离：</p>
            <el-select size="mini" v-model="value">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <p style="margin-left: 30px; font-size: 14px">正确率：</p>
            <el-input size="mini" style="width: 60px" v-model="input"></el-input>
            ~
            <el-input size="mini" style="width: 60px" v-model="input" placeholder="100"></el-input>
            <div class="manage">统计考核管理</div>
        </div>
        <div class="header header_spe">
            <div class="item">
                <p style="margin-left: 20px; font-size: 14px">题目名称：</p> 
                <el-input size="mini" style="width: 160px" v-model="input"></el-input>
                <p style="margin-left: 20px; font-size: 14px">入口年份：</p> 
                <el-input size="mini" style="width: 160px" v-model="input"></el-input>
                <el-button style="margin-left: 20px" type="primary" size="mini">查询</el-button>
            </div>
            <div class="item item2">
                <el-button style="margin-left: 20px" type="primary" size="mini">+新增</el-button>
                <el-button style="margin-left: 20px" type="primary" size="mini">导入</el-button>
                <el-button style="margin-left: 20px" type="primary" size="mini">分类管理</el-button>
            </div>
        </div>
        <div style="width: 96%; margin: 0 auto">
            <el-table
                size="mini"
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="num"
                    label="序号"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="试题标题"
                    width="680">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="题目分类"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="答题次数">
                </el-table-column>
                <el-table-column
                    prop="right"
                    label="正确率">
                </el-table-column>
                <el-table-column
                    prop="error"
                    label="错误率">
                </el-table-column>
                <el-table-column
                    prop="typer"
                    label="题型">
                </el-table-column>
                <el-table-column
                    prop="opera"
                    label="操作">
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
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: '',
        radio: 3,
        tableData: [{
            num: '1',
            title: '依据《企业安全生产标准化基本规范》操作岗位人员转岗，离岗，以上重新上岗者应进行车间，班组安全性教育培训。',
            type: '水利安全综合',
            count: '85',
            right: '85',
            error: '0',
            typer: '单选题',
            opera: ''
        }, {
          num: '1',
            title: '依据《企业安全生产标准化基本规范》操作岗位人员转岗，离岗，以上重新上岗者应进行车间，班组安全性教育培训。',
            type: '水利安全综合',
            count: '85',
            right: '85',
            error: '0',
            typer: '单选题',
            opera: ''
        }, {
          num: '1',
            title: '依据《企业安全生产标准化基本规范》操作岗位人员转岗，离岗，以上重新上岗者应进行车间，班组安全性教育培训。',
            type: '水利安全综合',
            count: '85',
            right: '85',
            error: '0',
            typer: '单选题',
            opera: ''
        }]
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
            .manage{
                width: 100px;
                height: 30px;
                border: 1px solid #1a7ff1;
                border-radius: 10px;
                color: #1a7ff1;
                margin-left: 20px;
                font-size: 14px;
                text-align: center;
                line-height: 26px;
            }
            .item{
                display: flex;
            }
        }
        .header_spe{
            justify-content: space-between;
            .item2{
                margin-right: 20px;
            }
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