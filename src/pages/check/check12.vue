<template>
    <div class="check1_container">
        <Header />
        <current-location></current-location>
        <div class="header">
            <div class="flex2">
                <Select :title="title1" :con="con1" />
                <Select :title="title2" :con="con2" />
                <!-- <Select :title="title3" :con="con3" /> -->
                <!-- <div class="toLeft">
                    <span>考核指标：</span>
                    <Index7 />
                </div> -->
                <Date />
                <el-button size="mini" class="toLeft">清空</el-button>
                <el-button size="mini" type="primary">查询</el-button>
            </div>
            <!-- <el-button size="mini" type="primary">+新增考核方案</el-button> -->
        </div>
        <div style="width: 98%; margin: .3rem auto">
            <Table12 />
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Select from '../../components/waterQuality/select.vue';
// import Index7 from '../../components/check/index7.vue'
import Table12 from '../../components/check/table12.vue'
import Date from '../../components/check/date.vue'
export default {
    name: 'check1',
    components: {
        Select,
        Header,
        CurrentLocation,
        // Index7,
        Table12,
        Date,
    },
    data() {
        return{
            title1: '周期',
            con1: '请选择周期',
            title2: '状态',
            con2: '请选择状态',
            title3: '行政区划选择',
            con3: '选择我管辖范围内的行政区划',
        }
    }
}
</script>

<style lang="scss" scoped>
    .check1_container{
        .header{
            width: 98%;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
        }
    }
</style>