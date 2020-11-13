<template>
    <div class="classCenter_container">
        <Header />
        <current-location></current-location>
        <date-select></date-select>
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
import DateSelect from '../../components/dateSelect.vue'
export default {
    name: 'classCenter',
    components: {
        Header,
        CurrentLocation,
        Course,
        DateSelect
    }
}
</script>

<style lang="scss" scope>
    .classCenter_container{
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
        // .block{
        //     margin: 0 auto;
        // }
    }
</style>