<template>
  <div class="map_container">
    <div ref="map" class="map"></div>
  </div>  
</template>
<script>
import echarts from "echarts";
import 'echarts/map/js/province/hubei.js'; 
import option from "../../pages/nineTopics/map-option.js";
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
      width: 50vw !important;
      height: 70vh !important;
      margin-left: 100px
    }
}
    
</style>