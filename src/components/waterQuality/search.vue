<template>
    <el-input
        placeholder="请输入河流名称搜索"
        class="toLft"
        size="mini"
        prefix-icon="el-icon-search"
        style="width: 200px;font-size: 12px"
        v-model="input">
    </el-input>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style>

</style>