<template>
  <div class="map_container">
    <div ref="map" class="map"></div>
  </div>  
</template>
<script>
import echarts from "echarts";
import 'echarts/map/js/province/hubei.js'; 
import option from "./map-options.js";
export default {
  data() {
    return {

    };
  },
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
      width: 630px !important;
      height: 460px !important;
    //   margin-left: 100px
    }
}
    
</style>