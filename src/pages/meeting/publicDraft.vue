<template>
    <div class="publicDraft_container">
        <Header />
        <current-location></current-location>
        <Top :flag=false :con="con" />
        <div class="table_wrapper">
            <Table4 />
        </div>
        <div class="footer">
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Top from '../../components/meeting/top.vue'
import Table4 from '../../components/meeting/table4.vue'
export default {
    name: 'draft',
    components: {
        Header,
        CurrentLocation,
        Top,
        Table4
    },
    data() {
      return {
            con:"草稿箱",
            options: [{
            value: '选项1',
            label: '全部'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .publicDraft_container{
        .table_wrapper{
            width: 98vw;
            margin: 10px auto;
        }
        .footer{
            width: 100%;
            height: 50px;
            background: f2f2f2;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>