<template>
    <div class="water1_container">
        <Header4 :con="headCon" />
        <div class="flex2 wrapper">
            <Search :initCon='con1' />
            <Time :title='con5' :con='con2' />
            <Select :title='con3' :con='con4' />
        </div>
        <div class="table_wrapper">
            <Table1 />
        </div>
        
    </div>
</template>

<script>
import Header4 from '../../components/waterQuality/header4.vue'
import Search from '../../components/waterQuality/search.vue'
import Time from '../../components/waterQuality/time.vue'
import Select from '../../components/waterQuality/select.vue'
import Table1 from '../../components/waterQuality/table1.vue'
export default {
    name: 'Water1',
    components: {
        Header4,
        Search,
        Time,
        Select,
        Table1,
    },
    data() {
        return{
            headCon: 'X年X月水质水量月报编辑',
            con1: '请输入河流名称',
            con2: '2020年11月',
            con3: '状态',
            con4: '全部',
            con5: '时间'
        }
    }
}
</script>

<style lang="scss" scoped>
    .water1_container{
        .wrapper{
            width: 98%;
            height: 30px;
            margin: 10px auto;
            align-items: center;
        }
    }
</style>