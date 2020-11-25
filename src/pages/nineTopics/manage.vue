<template>
    <div class="manage_container">
      <Header />
      <div class="btn_wrapper">
          <!-- <block1 :key="flag1" :msg="msg1" :flag="flag1" @click="swichFlag1()"></block1>
          <block1 :key="flag2" :msg="msg2" :flag="flag2" @click="swichFlag2()"></block1>
          <block1 :key="flag3" :msg="msg3" :flag="flag3" @click="swichFlag3()"></block1> -->
          <el-button type="primary" :style=" flag1 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag1()">河湖综合保护规划</el-button>
          <el-button type="primary" :style=" flag2 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag2()">涉河湖专项规划</el-button>
          <el-button type="primary" :style=" flag3 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag3()">重点水利工程建设</el-button>
      </div>
      
      <div class="wrapper" >
         <map-charts></map-charts>
         <div class="flex2">
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
                <img src="../../images/nine1.png" alt="">
                <img src="../../images/nine2.png" alt="">
                <year-select></year-select>
                <img src="../../images/nine3.png" alt="">
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
    </div>
</template>
<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
// import pieChart from '../../components/nineTopics/pieChart.vue'
// import Block1 from '../../components/nineTopics/block1.vue'
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
        // Block1,
        Block2,
        Text1,
        YearSelect,
        QuarterSelect
    },
  data() {
    return {
        flag1: false,
        flag2: true,
        flag3: true,
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
  methods: {
    swichFlag1() {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = true;
    },
    swichFlag2() {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = true;
    },
    swichFlag3() {
      this.flag1 = true;
      this.flag2 = true;
      this.flag3 = false;
    }
  }
}
</script>
<style lang="scss" scoped>
    .manage_container{
      min-width: 100vw;
      height: 100vh;
      background: url('../../images/nineBg.jpg') no-repeat;
      background-size: 100% 100%;
      .btn_wrapper{
        display: flex;
        width: 8rem;
        justify-content: space-between;
        margin: 0.625rem 0 0 0.625rem;
      }
      .wrapper{
        // background: red;
        display: flex;
        justify-content: space-around;
        .con{
          width: 4rem;
          height: 10rem;
          display: flex;
          margin: auto 0;
          // background: red;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          p{
            color: #ffffff;
          }
        }
      }
    }
</style>