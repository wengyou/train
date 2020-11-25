<template>
    <div class="check1_container">
        <Header />
        <current-location></current-location>
        <el-tabs style="width: 96%;margin: 0 auto" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的发布" name="first">
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
                        <el-button class="toLeft" size="mini">重置</el-button>
                        <el-button type="primary" size="mini">查询</el-button>
                    </div>
                    <!-- <el-button size="mini" type="primary">+新增考核方案</el-button> -->
                </div>
                <div style="width: 98%; margin: .3rem auto">
                    <Table18 />
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的考核" name="second">
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
                        <el-button class="toLeft" size="mini">重置</el-button>
                        <el-button type="primary" size="mini">查询</el-button>
                    </div>
                    <!-- <el-button size="mini" type="primary">+新增考核方案</el-button> -->
                </div>
                <div style="width: 98%; margin: .3rem auto">
                    <Table18_1 />
                </div>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Select from '../../components/waterQuality/select.vue';
// import Index7 from '../../components/check/index7.vue'
import Table18 from '../../components/check/table18.vue'
import Table18_1 from '../../components/check/table18(1).vue'
import Date from '../../components/check/date.vue'
export default {
    name: 'check1',
    components: {
        Select,
        Header,
        CurrentLocation,
        // Index7,
        Table18_1,
        Table18,
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
            activeName: 'first',
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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