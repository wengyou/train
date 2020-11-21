<template>
  <div class="map_container">
    <div ref="map" class="map"></div>
  </div>  
</template>
<script>
import echarts from "echarts";
import 'echarts/map/js/province/hubei.js'; //引入广东地图
import option from "../../pages/nineTopics/map-option.js";
export default {
  data() {
    return {

    };
  },
  //钩子函数  不了解的话 建议看看 vue的生命周期
  mounted() {
      this.mapEchartsInit();
  },
  methods:{
      mapEchartsInit(){
        var myChart=echarts.init(this.$refs.map);
        myChart.setOption(option, true);
      }
  }
}
</script>
<style lang="scss" scoped>
.map_container{
  .map{
    // background: red;
      width: 50vw !important;
      height: 70vh !important;
      margin-left: 100px
    }
}
    
</style>