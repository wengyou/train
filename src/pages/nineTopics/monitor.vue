<template>
    <div class="monitor_container">
        <Header />
        <div class="container">
            <map-charts></map-charts>
            <div class="wrapper">
                <div class="top">
                    <Text1 :text="text" />
                    <year-select></year-select>
                </div>
                <Table style="margin-right: 30px" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
import Text1 from '../../components/nineTopics/text1.vue'
import YearSelect from '../../components/nineTopics/yearSelect.vue'
import Table from '../../components/nineTopics/table.vue'
export default {
    name: 'monitor',
    components: {
        Header,
        mapCharts,
        Text1,
        YearSelect,
        Table
    },
    data() {
        return {
            text: '河湖执法监管情况'
        }
    }
}
</script>

<style lang="scss" scoped>
    .monitor_container{
        width: 100vw;
        height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .container{
            display: flex;
            justify-content: space-between;
            .wrapper{
                width: 500px;
                height: 300px;
                display: flex;
                flex-direction: column;
                margin: auto 0;
                .top{
                    display: flex;
                    justify-content: space-between;
                    margin-right: 30px;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>