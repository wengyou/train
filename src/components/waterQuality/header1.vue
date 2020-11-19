<template>
    <div class="header1_container">
        <Search />
        <Time :title="title" :con="con" />
    </div>
</template>

<script>
import Search from '../../components/waterQuality/search.vue'
import Time from '../../components/waterQuality/time.vue'
export default {
    name: 'header1',
    components: {
        Search,
        Time,
    },
    data() {
        return{
            title: '时间',
            con: '2020年09月'
        }
    }
}
</script>

<style>
.header1_container{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>