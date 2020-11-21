<template>
    <div class="testDetail_container">
        <div class="header">考试详情</div>
        <div class="wrapper">
            <h3>一、基础信息</h3>
            <p>
                <span class="flag">*</span>
                <span>考试名称：河湖长制2020年基础知识考试</span>
            </p>
            <div class="flex">
                <p><span class="flag">*</span>满分分值：100</p>
                <p style="margin-left: 40px"><span class="flag">*</span>合格分数线：85</p>
            </div>
            <div class="flex">
                <p><span class="flag">*</span>考卷时长：20分钟</p>
                <p style="margin-left: 40px"    ><span class="flag">*</span>考试截止日期：2020-12-30</p>
            </div>
            <div class="btn">
                <el-button type="primary" size="small" @click="toPreview">预览试卷</el-button>
                <span>共计10题单选，10题多选，5题判断</span>
            </div>
            <el-table
                :data="dialogTableData"
                size="mini"
                style="margin-top: 20px"
                border>
                <el-table-column
                prop="num"
                width="80"
                label="序号">
                </el-table-column>
                <el-table-column
                prop="content"
                label="试题内容">
                </el-table-column>
                <el-table-column
                prop="questionType"
                width="100"
                label="题型">
                </el-table-column>
                <el-table-column
                prop="type"
                width="120"
                label="题目分类">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <el-button type="text" icon="el-icon-delete" size="mini">删除</el-button>
                </el-table-column>
            </el-table>
            <p><span class="flag">*</span>发布范围：省级，市级，县级，乡级，村级</p>
            <p><span class="flag">*</span>发布对象：总河湖长，河湖长，河湖长办，联系单位，巡查员</p>
            <h3>二、考试结果</h3>
            <el-select v-model="value" placeholder="湖北省" size="mini">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-table
                :data="tableData"
                size="mini"
                style="margin-top: 20px"
                border>
                <el-table-column
                prop="sort"
                label="排名">
                </el-table-column>
                <el-table-column
                prop="area"
                label="市、州">
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
                prop="per"
                label="合格率">
                </el-table-column>
                <el-table-column
                prop="average"
                label="平均分">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'testDetail',
    data() {
        return {
            tableData: [{
                sort: 1,
                area: '武汉市',
                num1: 1327,
                num2:1295,
                num3: 1197,
                per:'95.3%',
                average: 92.5
            },{
                sort: 2,
                area: '鄂州市',
                num1: 1578,
                num2:1376,
                num3: 1288,
                per:'94.8%',
                average: 91.7
            },{
                sort: 3,
                area: '宜昌市',
                num1: 1498,
                num2:1123,
                num3: 933,
                per:'93.2%',
                average: 90.4
            }],
            dialogTableData:[{
                num: 1,
                content: '中共中央办公厅、国务院办公厅印发《关于全面推行河长制的意见》的时间？',
                questionType: '选择题',
                type: '河湖长制相关'
            },{
                num: 2,
                content: '河长制办公室承担河长制组织实施具体工作，落实（）确定的事项',
                questionType: '选择题',
                type: '河湖长制相关'
            }],
            options: [{
                value: '选项1',
                label: '湖北省'
                }],
            value: ''
        }
    },
    methods: {
        toPreview() {
          this.$router.push({path: '/preview'})
      },
    }
}
</script>

<style lang="scss" scope>
    .testDetail_container{
        .header{
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 30px;
            font-weight: bold;
        }
        .wrapper{
            width: 90%;
            margin: 20px auto;
            h3{
                font-size: 20px;
                font-weight: bold;
                margin: 20px 0 20px 0;
            }
            p{
                margin: 10px 0 10px 0;
            }
            .flag{
                color: red;
            }
            .btn{
                display: flex;
                justify-content: space-between;
                span{
                    color: #d3d3d3;
                }
            }
        }
    }
</style>