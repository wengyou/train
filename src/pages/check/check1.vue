<template>
    <div class="check1_container">
        <Header />
        <current-location></current-location>
        <div class="header">
            <div class="flex2">
                <Select :title="title1" :con="con1" />
                <Select :title="title2" :con="con2" />
                <div class="toLeft">
                    <span>考核指标：</span>
                    <Index />
                </div>
            </div>
            <el-button icon="el-icon-upload2" size="mini" type="primary">导出</el-button>
        </div>
        <div style="width: 98%; margin: .3rem auto">
            <Table1 />
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Select from '../../components/waterQuality/select.vue';
import Index from '../../components/check/index.vue'
import Table1 from '../../components/check/table1.vue'
export default {
    name: 'check1',
    components: {
        Select,
        Header,
        CurrentLocation,
        Index,
        Table1,
    },
    data() {
        return{
            title1: '时间选择',
            con1: '选择年份',
            title2: '考核方案选择',
            con2: '加载我被考核的方案名称',
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