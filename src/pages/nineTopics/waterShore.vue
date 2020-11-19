<template>
  <div class="waterShore_container">
      <Header />
      <div class="btn_wrapper">
          <block1 :msg="msg1" :flag="false"></block1>
          <block1 :msg="msg2" :flag="true"></block1>
      </div>
      <div class="container">
          <map-charts></map-charts>
          <div class="wrapper">
              <span>水域岸线管护指标</span>
              <div style="display: flex">
                  <year-select></year-select>
                  <quarter-select></quarter-select>
              </div>
              <div class="item1">
                  <Text2 :text="text3" />
                  <Text2 :text="text4" />
                  <Text2 :text="text4" />
              </div>
              <div style="margin-top: 10px">
                 <year-select></year-select> 
              </div>
              <div class="item1">
                  <el-progress type="circle" :percentage="40" width="100" color="#19dbb6"></el-progress>
                  <el-progress type="circle" :percentage="30" width="100" color="#f27f59"></el-progress>
              </div>
              <div class="item1">
                  <img src="../../images/bar1.png" alt="">
                  <img src="../../images/bar2.png" alt="">
              </div>
              <div class="item1">
                  <p>等级采砂船舶数量</p>
                  <p>日常巡查数量</p>
              </div>
          </div>
      </div>
      <div class="bottom">
            <year-select></year-select>
            <Text2 :text="text3" />
            <Text2 :text="text4" />
            <Text2 :text="text4" />
            <Text2 :text="text3" />
            <Text2 :text="text4" />
            <Text2 :text="text4" />
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
import Text2 from '../../components/nineTopics/text2.vue'
import YearSelect from '../../components/nineTopics/yearSelect.vue'
import Block1 from '../../components/nineTopics/block1.vue'
import QuarterSelect from '../../components/nineTopics/quarterSelect.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text2,
        YearSelect,
        Block1,
        QuarterSelect,
    },
    data() {
        return {
            text1: "重要指标",
            text2: "入河排污口",
            text3: {
                num:2329,
                text:"沿江一公里范围内化工企业数量（个）"
            },
            text4: {
                num:85.3,
                text:"污水集中处理设施建成数量（个）"
            },
            text5: {
                num:563,
                text:"自动在线监控装置数量（套）"
            },
            text6: {
                num:563,
                text:"农村生活污水集中处理设施建设数量（个）"
            },
            msg1: "污水处理情况",
            msg2: "水产养殖污染防治"
        }
    }
}
</script>

<style lang="scss" scoped>
    .waterShore_container{
        max-width: 100vw;
        min-height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .btn_wrapper{
            display: flex;
            width: 240px;
            justify-content: space-between;
            margin: 10px 0 0 10px;
        }
        .container{
            display: flex;
            justify-content: space-between;
            .wrapper{
                width: 36vw;
                display: flex;
                flex-direction: column;
                margin-top: 20px;
                margin-right: 20px;
                justify-content: space-between;
                span{
                    text-align: center;
                    color: #ffffff;
                    font-size: 12px;
                }
                .item1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                }
                .item2{
                    margin: 0 auto;
                    margin-top: 10px;
                }
                p{
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: bold;
                }
            }
        }
        .bottom{
            width: 90vw;
            display: flex;
            justify-content: space-between;
            margin-left: 10vw;
        }
    }
</style>