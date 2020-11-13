<template>
    <div class="myClass_container">
        <Header />
        <current-location></current-location>
        <div class="header_data">
            <div class="item item1">
                <span>全部</span>
                <h4>12</h4>
            </div>
            <div class="item item2">
                <span>为学习——必修</span>
                <h4>1</h4>
            </div>
            <div class="item item3">
                <span>已学习</span>
                <h4>10</h4>
            </div>
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                size="mini"
                style="width: 200px;margin-left: 20px"
                v-model="input2">
            </el-input>
        </div>
        <div class="classes_list">
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
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
    name: 'myClasses',
    components: {
        Header,
        CurrentLocation,
        Course
    }
}
</script>

<style lang="scss" scope>
    .myClass_container{
        .header_data{
            display: flex;
            width: 100%;
            height: 50px;
            align-items: center;
            border-bottom: 1px solid #dddddd;
            .item{
                background: #ffffff;
                border-radius: 5px;
                width: 150px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                display: flex;
                justify-content: space-around;
                margin-left: 20px;
                font-size: 12px;
                h4{
                    font-weight: bold;
                }
            }
            .item1{
                margin-left: 60px;
            }
            .item2{
                h4{
                    color: #f95b41;
                }
            }
            .item3{
                h4{
                    color: #209b2f;
                }
            }
        }
        .classes_list{
            width: 90%;
            height: 400px;
            margin: 10px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
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