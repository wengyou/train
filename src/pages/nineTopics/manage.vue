<template>
    <div class="manage_container">
      <Header />
      <div class="btn_wrapper">
          <block1 :msg="msg1" :flag="false"></block1>
          <block1 :msg="msg2" :flag="true"></block1>
          <block1 :msg="msg3" :flag="true"></block1>
      </div>
      
      <div class="wrapper" >
         <map-charts></map-charts>
         <div class="con">
           <text1 :text="msg1"></text1>
           <block2 :block="block1"></block2>
           <text1 :text="msg2"></text1>
           <block2 :block="block2"></block2>
           <text1 :text="msg3"></text1>
           <block2 :block="block3"></block2>
         </div>
         <div class="con">
           <!-- <pie-chart></pie-chart> -->
             <el-progress type="circle" :percentage="40" width="100" color="#19dbb6"></el-progress>
             <el-progress type="circle" :percentage="30" width="100" color="#f27f59"></el-progress>
             <year-select></year-select>
             <el-progress type="circle" :percentage="40" width="100" color="#e7f19a"></el-progress>
         </div>
         <div class="con">
           <year-select></year-select>
           <p>河湖综合保护规划完成进度</p>
           <year-select></year-select>
           <p>涉河湖专项规划进度</p>
           <quarter-select></quarter-select>
           <p>重点水利工程建设进度</p>
         </div>
      </div>
     
    </div>
</template>
<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
// import pieChart from '../../components/nineTopics/pieChart.vue'
import Block1 from '../../components/nineTopics/block1.vue'
import Block2 from '../../components/nineTopics/block2.vue'
import Text1 from '../../components/nineTopics/text1.vue'
import YearSelect from '../../components/nineTopics/yearSelect.vue'
import QuarterSelect from '../../components/nineTopics/quarterSelect.vue'
export default {
  name: "manage",
    components: {
        Header,
        mapCharts,
        // pieChart,
        Block1,
        Block2,
        Text1,
        YearSelect,
        QuarterSelect
    },
  data() {
    return {
        msg1: '河湖综合保护规划',
        msg2: '涉河湖专项规划',
        msg3: '重点水利工程建设',
        block1: {
          num:19,
          text:'河湖综合保护规划数量（个）'
        },
        block2: {
          num:85.9,
          text:'涉河湖专项规划数量（个）'
        },
        block3: {
          num:19,
          text:'重点水利工程建设数量（个）'
        },
    };
  },
}
</script>
<style lang="scss" scoped>
    .manage_container{
      width: 100vw;
      height: 100vh;
      background: url('../../images/nineBg.jpg') no-repeat;
      background-size: 100% 100%;
      .btn_wrapper{
        display: flex;
        width: 400px;
        justify-content: space-between;
        margin: 10px 0 0 10px;
      }
      .wrapper{
        display: flex;
        .con{
          width: 200px;
          height: 400px;
          display: flex;
          // background: red;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          p{
            color: #ffffff;
            font-size: 12px;
          }
        }
      }
    }
</style>