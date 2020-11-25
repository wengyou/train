<template>
    <div class="protect_container">
        <Header />
        <div class="container">
            <map-charts></map-charts>
            <div class="wrapper">
                <div class="item1">
                    <Text1 :text="text1"></Text1>
                    <year-select></year-select>
                </div>
                <div class="item1">
                    <block2 :block="block1"></block2>
                    <block2 :block="block2"></block2>
                    <block2 :block="block3"></block2>
                </div>
                <Table2 style="margin-top:.6rem" />
                <div style="margin-top:.4rem">
                    <Text1 :text="text2"></Text1>
                </div>
                <Table3 style="margin-bottom: 40px;margin-top:.4rem" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
import Text1 from '../../components/nineTopics/text1.vue'
import Block2 from '../../components/nineTopics/block2.vue'
import YearSelect from '../../components/nineTopics/yearSelect.vue'
import Table2 from '../../components/nineTopics/table2.vue'
import Table3 from '../../components/nineTopics/table3.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text1,
        Block2,
        YearSelect,
        Table2,
        Table3
    },
    data() {
        return {
            text1: "重要指标",
            text2: "入河排污口",
            block1: {
                num: 30,
                text: "省级河流（条）"
            },
            block2: {
                num: 55,
                text: "省级湖泊（个）"
            },
            block3: {
                num: 2000,
                text: "省级水库（座）"
            },
        }
    }
}
</script>

<style lang="scss" scoped>
    .protect_container{
        max-width: 100vw;
        min-height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .container{
            display: flex;
            justify-content: space-between;
            .wrapper{
                margin-right: 4vw;
                width: 40vw;
                display: flex;
                flex-direction: column;
                .item1{
                    display: flex;
                    margin-top: .6rem;
                    justify-content: space-between;
                }
                .item2{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    margin-top: .6rem;
                }
            }
        }
    }
</style>