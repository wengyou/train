<template>
    <div class="water1_container">
        <Header :con="headCon" />
        <div class="flex2 wrapper">
            <Search />
            <Time />
            <Select :initCon="con" />
        </div>
        <div class="table_wrapper">
            <Table1 />
        </div>
        
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Search from '../../components/waterQuality/search.vue'
import Time from '../../components/waterQuality/time.vue'
import Select from '../../components/waterQuality/select.vue'
import Table1 from '../../components/waterQuality/table1.vue'
export default {
    name: 'Water1',
    components: {
        Header,
        Search,
        Time,
        Select,
        Table1,
    },
    data() {
        return{
            headCon: 'X年X月水质水量月报编辑',
            con: '请输入河流名称'
        }
    }
}
</script>

<style lang="scss" scoped>
    .water1_container{
        .wrapper{
            width: 96vw;
            height: 30px;
            margin: 10px auto;
            align-items: center;
        }
    }
</style>