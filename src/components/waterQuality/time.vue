<template>
    <div class="block flex2 time toLeft">
        <span>{{title}}：</span>
        <el-date-picker
            v-model="value1"
            size="mini"
            type="date"
            :placeholder="con">
        </el-date-picker>
    </div>
</template>

<script>
export default {
    props: ['title', 'con'],
    data() {
        return {
            value1: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.time{
    font-size: 12px;
}
</style>