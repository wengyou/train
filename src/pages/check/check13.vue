<template>
    <div class="check13_container">
        <Header4 :con="headCon" />
        <div style="width: 96%; margin: .5rem auto">
            <Table13 />
        </div>
        <div class="btn_wrapper">
            <el-button size="mini" type="primary">提交</el-button>
            <el-button size="mini">取消</el-button>
        </div>
    </div>
</template>

<script>
import Header4 from '../../components/waterQuality/header4.vue'
import Table13 from '../../components/check/table13.vue'
export default {
    name: 'check13',
    components: {
        Header4,
        Table13,
    },
    data() {
        return{
            headCon: '考核自评'
        }
    }
}
</script>

<style lang="scss" scoped>
    .check13_container{
        width: 100vw;
        height: 100vh;
        background: #ffffff;
        .btn_wrapper{
            width: 100%;
            height: 1rem;
            background: #e8e8e8;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            bottom: 0;
        }
    }
</style>