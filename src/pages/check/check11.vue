<template>
    <div class="check10_container">
        <Header :con="headCon" />
        <div class="form_wrapper">
            <Form11 />
        </div>
        <div style="width: 96%; margin:0 auto">
             <el-button type="primary" size="mini" icon="el-icon-d-arrow-right">导入模板</el-button>
              <el-button type="primary" size="mini" icon="el-icon-download">下载模板</el-button>
        </div>
        <div style="width: 96%; margin:0 auto">
            <Table10 />
        </div>
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Form11 from '../../components/check/form11.vue'
import Table10 from '../../components/check/table10.vue'
export default {
    name: 'check10',
    components: {
        Header,
        Form11,
        Table10,
    },
    data() {
        return{
            headCon:'考核方案'
        }
    }
}
</script>

<style lang="scss" scoped>
    .check10_container{
        width: 60vw;
        min-height: 100vh;
        background: #ffffff;
        margin: 0 auto;
        .form_wrapper{
            width: 80%;
            margin: .5rem auto;
        }
    }
</style>