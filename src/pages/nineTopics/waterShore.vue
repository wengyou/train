<template>
  <div class="waterShore_container">
      <Header />
      <div class="btn_wrapper">
          <div class="flex2" >
                <el-button type="primary" :style=" flag1 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag1()">河湖划界确权</el-button>
                <el-button type="primary" :style=" flag2 ? 'background: #0135ad' : ''" size="mini" @click="swichFlag2()">水利工程划界确权</el-button>
          </div>
          <p style="margin-right: 16vw; color: #ffffff; line-height: 1rem">水域岸线管护指标</p>
      </div>
      <div class="container">
          <map-charts></map-charts>
          <div class="wrapper">
              <div style="display: flex">
                  <year-select></year-select>
                  <quarter-select class="toLeft"></quarter-select>
              </div>
              <div class="item1">
                  <Text2 :text="text3" />
                  <Text2 :text="text4" />
                  <Text2 :text="text4" />
              </div>
              <div>
                 <year-select></year-select> 
              </div>
              <div class="item3">
                  <img style="width: 10vw;" src="../../images/shore1.png" alt="">
                  <img style="width: 10vw;" src="../../images/shore1.png" alt="">
              </div>
              <div class="item2">
                  <img style="height: 20vh;" src="../../images/bar1.png" alt="">
                  <img style="height: 20vh;" src="../../images/bar2.png" alt="">
              </div>
              <div class="item2">
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
// import Block1 from '../../components/nineTopics/block1.vue'
import QuarterSelect from '../../components/nineTopics/quarterSelect.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text2,
        YearSelect,
        // Block1,
        QuarterSelect,
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
    .waterShore_container{
        max-width: 100vw;
        min-height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .btn_wrapper{
            display: flex;
            // width: 240px;
            justify-content: space-between;
            margin: 10px 0 0 10px;
        }
        .container{
            display: flex;
            justify-content: space-between;
            .wrapper{
                // background: red;
                width: 36vw;
                display: flex;
                flex-direction: column;
                margin-top: 20px;
                margin-right: 4vw;
                justify-content: space-between;
                .item1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    // margin-top: 2vh;
                }
                .item2{
                    margin: 0 auto;
                    width: 20vw;
                    display: flex;
                    justify-content: space-between;
                }
                .item3{
                    margin: 0 auto;
                    width: 28vw;
                     display: flex;
                    justify-content: space-between;
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
            margin-left: 6vw;
            margin-top: 4vh;
            padding-bottom: 40px
        }
    }
</style>