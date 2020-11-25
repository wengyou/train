<template>
    <div class="check1_container">
        <Header />
        <current-location></current-location>
        <div class="header">
            <div class="flex2">
                <Select :title="title1" :con="con1" />
                <Select :title="title2" :con="con2" />
                <Select :title="title3" :con="con3" />
                <!-- <div class="toLeft">
                    <span>考核指标：</span>
                    <Index />
                </div> -->
            </div>
            <el-button icon="el-icon-upload2" size="mini" type="primary">导出</el-button>
        </div>
        <div style="width: 98%; margin: .3rem auto">
            <Table5 />
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Select from '../../components/waterQuality/select.vue';
// import Index from '../../components/check/index.vue'
import Table5 from '../../components/check/table5.vue'
export default {
    name: 'check1',
    components: {
        Select,
        Header,
        CurrentLocation,
        // Index,
        Table5,
    },
    data() {
        return{
            title1: '时间选择',
            con1: '选择年份',
            title2: '考核方案选择',
            con2: '加载我被考核的方案名称',
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