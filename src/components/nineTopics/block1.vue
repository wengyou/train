<template>
    <div class="block1_container">
        <el-button v-if="flag" type="primary" style="background: #0135ad" size="mini">{{msg}}</el-button>
        <el-button v-else type="primary" style="background: #158acd" size="mini">{{msg}}</el-button>
    </div>
</template>

<script>
export default {
    props: ['msg', 'flag']
}
</script>

<style>
    .block1_container{
    }
</style>