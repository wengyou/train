<template>
    <el-input
        :placeholder="initCon"
        class="toLft"
        size="mini"
        prefix-icon="el-icon-search"
        style="width: 200px;font-size: 12px"
        v-model="input">
    </el-input>
</template>

<script>
export default {
    props: ['initCon'],
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style>

</style>