<template>
    <div class="myClass_container">
        <Header />
        <current-location></current-location>
        <div class="flex wrapper">
            <el-input
                placeholder="请输入关键字"
                prefix-icon="el-icon-search"
                size="mini"
                style="width: 300px"
                v-model="input2">
            </el-input>
            <div class="flex2">
                <div class="flex2 progress">
                    <p class="item1">已学习235分钟</p>
                    <p class="item2">450分钟</p>
                </div>
                <span style="padding-left: 10px">(已学习235分钟，共450分钟)</span>
            </div>
            
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 96%; margin: 10px auto">
            <el-tab-pane label="全部(12)" name="first" class="classes_list">
                <Course0 style="margin: 10px 0 0 10px" />
                <div v-for="item in all" :key="item" style="margin: 10px 0 0 10px">
                    <Course :msg='false' />
                </div>
            </el-tab-pane>
            <el-tab-pane label="未学习(1)" name="second" class="classes_list">
                 <Course0 />
            </el-tab-pane>
            <el-tab-pane label="已学习(10)" name="third" class="classes_list">
                <div v-for="item in started" :key="item" style="margin: 10px 0 0 10px">
                    <Course :msg="false" />
                </div>
            </el-tab-pane>
        </el-tabs>
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
import Course0 from '../../components/course0.vue'
export default {
    name: 'myClasses',
    components: {
        Header,
        CurrentLocation,
        Course,
        Course0,
    },
    data() {
        return {
            activeName: 'first',
            all:[1,2,3,4,5,6,7,8,9,10,11],
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
        .wrapper {
            width: 96%;
            height: 60px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .progress{
                width: 30vw;
                height: 45px;
                background: #ffffff;
                line-height: 50px;
                text-align: center;
                .item1{
                    width: 48%;
                    height: 100%;
                    background: #0882fe;
                }
                .item2{
                    text-align: right;
                }
            }
        }
        
        .classes_list{
                width: 90%;
                min-height: 70vh;
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