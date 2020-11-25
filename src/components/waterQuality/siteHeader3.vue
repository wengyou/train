<template>
    <div class="siteHeader1_container flex1">
        <div class="flex2">
            <Search :initCon="serchCon" />
            <Select :title="title1" :con="con" />
            <Select :title="title2" :con="con" />
            <Select :title="title3" :con="con" />
        </div>
        <div>
             <el-button size="mini" type="primary" @click="flag ? toSiteInfo6() : toSiteInfo3()">+新增</el-button>
        </div>
    </div>
</template>

<script>
import Search from '../../components/waterQuality/search.vue'
import Select from '../../components/waterQuality/select.vue'
export default {
    components: {
        Search,
        Select,
    },
    props: ['flag'],
    data() {
        return {
            serchCon: '请输入水功能区编码或名称',
            title1: '水域类型',
            title2: '隶属行业单位',
            title3: '信息管理单位',
            con: '全部'
        }
    },
    methods: {
        toSiteInfo6() {
            this.$router.push({path: '/waterQuality/siteInfo6'})
        },
        toSiteInfo3() {
            this.$router.push({path: '/waterQuality/siteInfo3'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .siteHeader3_container{
    }
</style>