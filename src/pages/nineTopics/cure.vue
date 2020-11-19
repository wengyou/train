<template>
  <div class="goverment_container">
      <Header />
      <div class="btn_wrapper">
          <block1 :msg="msg1" :flag="false"></block1>
          <block1 :msg="msg2" :flag="true"></block1>
      </div>
      <div class="container">
          <map-charts></map-charts>
          <div class="wrapper">
              <div class="item1">
                  <Text1 :text="text1" />
                  <year-select></year-select>
              </div>
              <div class="item1">
                  <Text2 :text="text3" />
                  <Text2 :text="text4" />
              </div>
              <div class="item1">
                  <Text2 :text="text5" />
                  <Text2 :text="text6" />
              </div>
              <div class="item1">
                  <el-progress type="circle" :percentage="40" width="100" color="#19dbb6"></el-progress>
                  <el-progress type="circle" :percentage="30" width="100" color="#f27f59"></el-progress>
              </div>
              <div class="item1">
                  <p>城市、县城、乡镇污水处理率（%）</p>
                  <p>船舶污染物接收转运处置设施建设进度</p>
              </div>
              <div class="item1">
                  <Text1 :text="text2" />
                  <year-select></year-select>
              </div>
              <Table4 style="margin-top: 10px" />
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
import Table4 from '../../components/nineTopics/table4.vue'
import Block1 from '../../components/nineTopics/block1.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text1,
        Text2,
        YearSelect,
        Table4,
        Block1
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
    .goverment_container{
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
                .item1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                }
                .item2{
                    margin: 0 auto;
                }
                p{
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: bold;
                }
            }
        }
    }
</style>