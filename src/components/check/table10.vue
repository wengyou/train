<template>
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
        <el-table-column
        prop="title1"
        label="考核项目名称">
        </el-table-column>
        <el-table-column
        prop="title2"
        label="评分类别">
            <!-- <template slot-scope="scope">
                
            </template> -->
        </el-table-column>
        <el-table-column
        prop="title3"
        label="考核指标类别">
        </el-table-column>
        <el-table-column
        prop="title4"
        label="考核类型">
        </el-table-column>
        <el-table-column
        prop="title5"
        label="分项评分细则">
        </el-table-column>
        <el-table-column
        prop="title6"
        label="标准分">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            title1: '市级河湖重要断面水质达标',
            title2: '系统评分',
            title3: '水质达标情况',
            title4: '数据类',
            title5: '市级河湖长领责的河湖，国控、省控断面水质达标率4分，得分为：4×达标断面个数÷监测断面总个数；',
            title6: '4',
        },{
            title1: '采砂船舶按指定地点集中停放监管',
            title2: '系统评分',
            title3: '水质达标情况',
            title4: '数据类',
            title5: '市级河湖长领责的河湖，国控、省控断面水质达标率4分，得分为：4×达标断面个数÷监测断面总个数；',
            title6: '4',
        },{
            title1: '将小微水体全面纳入河湖长制体系',
            title2: '人工评分',
            title3: '水质达标情况',
            title4: '数据类',
            title5: '市级河湖长领责的河湖，国控、省控断面水质达标率4分，得分为：4×达标断面个数÷监测断面总个数；',
            title6: '4',
        },]
      }
    }
}
</script>

<style>

</style>