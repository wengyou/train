<template>
    <div class="classCenter_container">
        <Header />
        <current-location></current-location>
        <div class="wrapper">
            <div style="display: flex">
                <el-select v-model="value" placeholder="请选择课程类型" size="mini">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input
                    placeholder="请输入内容"
                    style="margin-left: 10px"
                    prefix-icon="el-icon-search"
                    size="mini"
                    v-model="input2">
                </el-input>
            </div>
            <div>
                <el-button type="primary" size="mini" @click="toAddClass">新增</el-button>
                <el-button type="primary" size="mini" @click="toLearnSettings">学习设置</el-button>
            </div>
        </div>
        <div class="classes_list">
            <div class="item" @click="toClassDetail" v-for="course in courses" :key="course">
                <Course :msg="true" />
            </div>
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
import Course from '../../components/course.vue'
export default {
    name: 'classCenter',
    components: {
        Header,
        CurrentLocation,
        Course,
    },
    data() {
        return {
            courses: [1,2,3,4,5,6,7,8,9,10],
            options: [{
                value: '选项1',
                label: '全部'
                }, {
                value: '选项2',
                label: '选修课'
                }, {
                value: '选项3',
                label: '必修课'
                }],
                value: '',
                input2: '',
            }
    },
    methods: {
        toClassDetail() {
          this.$router.push({path: '/classDetail'})
        },
        toAddClass() {
            this.$router.push({path: '/addClasses'})
        },
        toLearnSettings() {
            this.$router.push({path: '/learnSettings'})
        }
    }
}
</script>

<style lang="scss" scope>
    .classCenter_container{
        .wrapper{
            display: flex;
            width: 90%;
            margin: 10px auto;
            justify-content: space-between;
        }
        .classes_list{
            width: 90%;
            min-height: 70vh;
            margin: 20px auto;
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;
            .item{
                margin-left: 1.25rem;
                margin-top: 1.25rem;
            }
        }
        .footer{
            width: 100%;
            height: 50px;
            background: f2f2f2;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        // .block{
        //     margin: 0 auto;
        // }
    }
</style>