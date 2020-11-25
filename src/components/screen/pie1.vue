<template>
    <div id="pie1" ref="pie1" style="width:100%; height: 230px;"></div>
</template>

<script>
import echarts from "echarts";
import option from "./pie1-option.js";
export default {
    mounted () {
        this.pie1EchartsInit()
    },
    methods: {
        pie1EchartsInit(){
            var myChart=echarts.init(this.$refs.pie1);
            myChart.setOption(option, true);
      }
    }
}
</script>

<style>

</style>