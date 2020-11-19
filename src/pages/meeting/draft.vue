<template>
    <div class="book_container">
        <Header />
        <current-location></current-location>
        <Top :con="con" />
        <div class="table_wrapper">
            <Table2 />
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Top from '../../components/meeting/top.vue'
import Table2 from '../../components/meeting/table2.vue'
export default {
    name: 'draft',
    components: {
        Header,
        CurrentLocation,
        Top,
        Table2
    },
    data() {
      return {
            con:"草稿箱",
            options: [{
            value: '选项1',
            label: '全部'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .book_container{
        .table_wrapper{
            width: 98vw;
            margin: 10px auto;
        }
    }
</style>