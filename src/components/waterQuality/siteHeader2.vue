<template>
    <div class="siteHeader1_container flex1">
        <div class="flex2">
            <Search :initCon="serchCon" />
            <Select :title="title1" :con="con" />
            <Select :title="title2" :con="con" />
            <Select :title="title3" :con="con" />
        </div>
        <div>
             <el-button size="mini" type="primary" @click="toSiteInfo5">+新增</el-button>
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
    data() {
        return {
            serchCon: '请输入水功能区编码或名称',
            title1: '水域类型',
            title2: '功能类型',
            title3: '监控级别',
            con: '全部'
        }
    },
    methods: {
        toSiteInfo5() {
            this.$router.push({path: '/waterQuality/siteInfo5'})
        }  
  }
}
</script>

<style lang="scss" scoped>
    .siteHeader1_container{
    }
</style>