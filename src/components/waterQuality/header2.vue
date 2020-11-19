<template>
    <div class="header2_container">
        <Select :title="title1" :con="con1" />
        <Select :title="title2" :con="con2" />
        <Time :title="title3" :con="con3" />
    </div>
</template>

<script>
import Select from '../../components/waterQuality/select.vue'
import Time from '../../components/waterQuality/time.vue'
export default {
    name: 'header1',
    components: {
        Select,
        Time,
    },
    data() {
        return {
            title1: '年份',
            con1: '2020年',
            title2: '月份',
            con2: '全部',
            title3: '状态',
            con3: '全部'
        }
    }
}
</script>

<style>
.header2_container{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>