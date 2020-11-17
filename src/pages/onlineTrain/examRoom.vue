<template>
    <div class="examRoom_container">
        <Header />
        <current-location></current-location>
        <!-- <date-select></date-select> -->
        <el-table
            :data="tableData"
            border
            size="mini"
            style="width: 98%; margin: 0 auto">
        <el-table-column
            prop="test"
            label="试题"
            width="180">
        </el-table-column>
        <el-table-column
            prop="time"
            label="考试时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="type"
            label="考试类型">
        </el-table-column>
        <el-table-column
            prop="score"
            label="考试得分">
        </el-table-column>
        <el-table-column
            prop="full"
            label="满分">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
// import DateSelect from '../../components/dateSelect.vue'
export default {
    name: 'examRoom',
    components: {
        Header,
        CurrentLocation,
        // DateSelect   
    },
    data() {
        return {
          tableData: [{
            test: 'XXX试题',
            time: '2020-01-05',
            type: '笔试',
            score: '100',
            full: '100'
          }, {
            test: 'XXX试题',
            time: '2020-01-05',
            type: '笔试',
            score: '90',
            full: '100'
          }]
        }
      }
}
</script>

<style lang="scss" scope>

</style>