<template>
    <div class="myClass_container">
        <Header />
        <current-location></current-location>
        <div class="flex">
            <el-input
                placeholder="请输入关键字"
                prefix-icon="el-icon-search"
                size="mini"
                style="width: 300px"
                v-model="input2">
            </el-input>
            <el-progress style="width: 40%; margin-left: 20px" :stroke-width="24" :percentage="48"></el-progress>
            <span style="padding-left: 10px">(已学习235分钟，共450分钟)</span>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 96%; margin: 10px auto">
            <el-tab-pane label="全部(12)" name="first" class="classes_list">
                <div v-for="item in all" :key="item" style="margin: 10px 0 0 10px">
                    <Course :msg='false' />
                </div>
            </el-tab-pane>
            <el-tab-pane label="未学习(1)" name="second" class="classes_list">
                 <Course :msg="false"/>
            </el-tab-pane>
            <el-tab-pane label="已学习(10)" name="third" class="classes_list">
                <div v-for="item in started" :key="item" style="margin: 10px 0 0 10px">
                    <Course :msg="false" />
                </div>
            </el-tab-pane>
        </el-tabs>
        <!-- <div class="header_data">
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                size="mini"
                style="width: 200px;margin-left: 20px"
                v-model="input2">
            </el-input>
        </div> -->
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
    name: 'myClasses',
    components: {
        Header,
        CurrentLocation,
        Course
    },
    data() {
        return {
            activeName: 'first',
            all:[1,2,3,4,5,6,7,8,9,10,11,12],
            started: [1,2,3,4,5,6,7,8,9,10],
        }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss" scope>
    .myClass_container{
        .classes_list{
                width: 90%;
                margin: 10px auto;
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;
        }
        .footer{
            width: 100%;
            height: 50px;
            background: f2f2f2;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>