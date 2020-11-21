<template>
    <div class="protect_container">
        <Header />
        <div class="container">
            <map-charts></map-charts>
            <div class="wrapper">
                <div class="item1">
                    <Text1 :text="text1"></Text1>
                </div>
                <div class="item1">
                    <block2 :block="block1"></block2>
                    <block2 :block="block2"></block2>
                </div>
                <div class="item1">
                    <block2 :block="block3"></block2>
                    <block2 :block="block4"></block2>
                </div>
                <div class="item1">
                    <Text1 :text="text1"></Text1>
                    <year-select></year-select>
                </div>
                <div class="item1">
                    <block2 :block="block5"></block2>
                    <block2 :block="block6"></block2>
                </div>
                <div class="item1">
                    <block2 :block="block7"></block2>
                    <block2 :block="block8"></block2>
                </div>
                <!-- <div class="item2">
                    <Text1 :text="text1"></Text1>
                    <year-select></year-select>
                </div>
                <div class="item2">
                    <block2 :block="block9"></block2>
                    <block2 :block="block10"></block2>
                    <block2 :block="block11"></block2>
                    <block2 :block="block12"></block2>
                </div> -->
            </div>
        </div>
        <div class="bottom">
            <div class="item2">
                <Text1 :text="text1"></Text1>
                <year-select></year-select>
            </div>
            <div class="item2">
                <block2 :block="block9"></block2>
                <block2 :block="block10"></block2>
                <block2 :block="block11"></block2>
                <block2 :block="block12"></block2>
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
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text1,
        Block2,
        YearSelect
    },
    data() {
        return {
            text1: "省级河湖保护",
            text2: "市级河湖保护",
            text3: "县级河湖保护",
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
            block4: {
                num: 5656,
                text: "省级河湖长（人）"
            },
            block5: {
                num: 100,
                text: "省级河流（条）"
            },
            block6: {
                num: 900,
                text: "市级湖泊（条）"
            },
            block7: {
                num: 90,
                text: "市级水库（座）"
            },
            block8: {
                num: 100,
                text: "市级河湖长（人）"
            },
            block9: {
                num: 30,
                text: "省级河流（条）"
            },
            block10: {
                num: 30,
                text: "县级湖泊（个）"
            },
            block11: {
                num: 30,
                text: "县级水库（座）"
            },
            block12: {
                num: 30,
                text: "县级河湖长（人）"
            },
        }
    }
}
</script>

<style lang="scss" scoped>
    .protect_container{
        min-width: 100vw;
        min-height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .container{
            display: flex;
            justify-content: space-between;
            // background: red;
            .wrapper{
                // background: red;
                margin-right: 5vw;
                width: 30vw;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                .item1{
                    display: flex;
                    width: 100%;
                    margin-top: 10px;
                    justify-content: space-between;
                }
                .item2{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    margin-top: 10px;
                }
            }
        }
        .bottom{
            width: 50vw;
            margin-left: 45vw;
            .item2{
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
            }
        }
    }
</style>