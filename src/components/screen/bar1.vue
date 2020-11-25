<template>
    <div id="approve" ref="approve" style="width:100%; height: 280px;"></div>
</template>

<script>
import echarts from "echarts";
import option from "./bar1-option.js";
export default {
    mounted () {
        this.bar1EchartsInit()
    },
    methods: {
        bar1EchartsInit(){
            var myChart=echarts.init(this.$refs.approve);
            myChart.setOption(option, true);
      }
    }
}
</script>

<style>

</style>