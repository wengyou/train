<template>
  <div class="goverment_container">
      <Header />
      <div class="btn_wrapper">
          <!-- <block1 :msg="msg1" :flag="false"></block1>
          <block1 :msg="msg2" :flag="true"></block1> -->
          <el-button type="primary" :style=" flag1 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag1()">污水处理情况</el-button>
          <el-button type="primary" :style=" flag2 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag2()">水产养殖污染防治</el-button>
      </div>
      <div class="container">
          <map-charts></map-charts>
          <div class="wrapper">
              <div class="item1">
                  <Text1 :text="text1" />
                  <year-select></year-select>
              </div>
              <div class="item2">
                  <Text2 :text="text3" />
                  <Text2 style="margin-left: 4vw" :text="text4" />
              </div>
              <div class="item2">
                  <Text2 :text="text5" />
                  <Text2 style="margin-left: 4vw" :text="text6" />
              </div>
              <div class="item2">
                  <img src="../../images/cure1.png" alt="">
                  <img style="margin-left: 4vw" src="../../images/cure2.png" alt="">
              </div>
              <div class="item2">
                  <p>城市、县城、乡镇污水处理率（%）</p>
                  <p style="margin-left: 4vw">船舶污染物接收转运处置设施建设进度</p>
              </div>
              <div class="item1">
                  <Text1 :text="text2" />
                  <year-select></year-select>
              </div>
              <Table4 style="margin-top: 10px; margin-bottom: 40px" />
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
// import Block1 from '../../components/nineTopics/block1.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text1,
        Text2,
        YearSelect,
        Table4,
        // Block1
    },
    data() {
        return {
            text1: "重要指标",
            text2: "入河排污口",
            flag1: false,
            flag2: true,
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
    }
}
</script>

<style lang="scss" scoped>
    .goverment_container{
        width: 100vw;
        height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .btn_wrapper{
            display: flex;
            width: 5rem;
            justify-content: space-between;
            margin: 10px 0 0 10px;
        }
        .container{
            display: flex;
            justify-content: space-between;
            .wrapper{
                width: 35vw;
                // background: red;
                display: flex;
                flex-direction: column;
                // margin-top: .25rem;
                margin-right: 1.25rem;
                justify-content: space-between;
                .item1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.6rem;
                }
                .item2{
                    display: flex;
                    margin-top: 4vh;
                    img{
                        width: 3.5rem;
                        height: 2.5rem;
                    }
                }
                p{
                    color: #ffffff;
                    font-size: 0.3rem;
                    font-weight: bold;
                }
            }
        }
    }
</style>