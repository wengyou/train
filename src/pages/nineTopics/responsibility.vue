<template>
    <div class="responsibility_container">
        <Header />
        <div class="container">
            <map-charts></map-charts>
            <div>
               <div>
                    <div class="wrapper">
                        <div class="con1">
                            <text1 :text="test1"></text1>
                            <year-select></year-select>
                        </div>
                        <div class="con2">
                            <text2 :text="test4"></text2>
                            <text2 class="toLeft" :text="test5"></text2>
                        </div>
                        <div class="con2">
                            <text2 :text="test6"></text2>
                            <text2 class="toLeft" :text="test7"></text2>
                        </div>
                        <div class="con1">
                            <text1 :text="test2"></text1>
                            <div class="flex2">
                                <year-select></year-select>
                                <quarter-select style="margin-left: 10px"></quarter-select>
                            </div> 
                        </div>
                        <div class="con2">
                            <text2 :text="test8"></text2>
                            <text2 class="toLeft" :text="test9"></text2>
                        </div>
                        <div class="con1">
                            <text1 :text="test3"></text1>
                            <year-select></year-select>
                        </div>
                    </div>
                </div>
                <Table style="margin-top: .8rem;margin-right: 1rem" /> 
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
import Text1 from '../../components/nineTopics/text1.vue'
import Text2 from '../../components/nineTopics/text2.vue'
import YearSelect from '../../components/nineTopics/yearSelect.vue'
import QuarterSelect from '../../components/nineTopics/quarterSelect.vue'
import Table from '../../components/nineTopics/table.vue'
export default {
    name: 'responsibility',
    components: {
        Header,
        mapCharts,
        Text1,
        Text2,
        YearSelect,
        QuarterSelect,
        Table
    },
    data() {
        return {
            test1:'省级履职情况总览',
            test2: '市级履职情况总览',
            test3: '河湖管护落实情况',
            test4: {
                num: 29,
                text: '省级河湖长巡查次数（个）'
            },
            test5: {
                num: 30,
                text: '省级河湖长联系部门巡查次数（个）'
            },
            test6: {
                num: 20,
                text: '市级河湖长巡查次数（个）'
            },
            test7: {
                num: 85.3,
                text: '省级河湖问题交办整改率（%）'
            },
            test8: {
                num: 85.9,
                text: '省级河湖长联系部门巡查合格率（%）'
            },
            test9: {
                num: 85.9,
                text: '市级河湖长巡查合格率（%）'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .responsibility_container{
        width: 100vw;
        height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .container{
            display: flex;
            justify-content: space-between;
            // background: red;
             .wrapper{
                //  background: red;
                 width: 35vw;
                 height: 10rem;
                display: flex;
                flex-direction: column;
                // margin-left: 3rem;
                padding-right: 1rem;
                margin-top: 1rem;
                justify-content: space-around;
                .con1{
                    display: flex;
                    // background: red;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 10px;
                    .select{
                        display: flex;
                    }
                }
                .con2{
                    display: flex;
                    margin-left: .4rem;
                }
                .con3{
                    display: flex;
                }
            }
        }
       
    }
</style>