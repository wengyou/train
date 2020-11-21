<template>
  <div class="goverment_container">
      <Header />
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
                  <Text2 :text="text4" />
              </div>
              <div class="item1">
                  <Text1 :text="text1" />
              </div>
              <div class="item1">
                  <Text2 :text="text3" />
              </div>
              <div class="item1">
                  <Text1 :text="text1" />
              </div>
              <div class="item1">
                  <Text2 :text="text4" />
                  <Text2 :text="text4" />
              </div>
              <div class="item1">
                  <Text1 :text="text2" />
                  <year-select></year-select>
              </div>
              <Table5 style="margin-top: 2vh; margin-bottom: 40px" />
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
import Table5 from '../../components/nineTopics/table5.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text1,
        Text2,
        YearSelect,
        Table5
    },
    data() {
        return {
            text1: "河湖水质达标率",
            text2: "农村水环境综合整治",
            text3: {
                num:85.9,
                text:"国控断面水质达标率量（%）"
            },
            text4: {
                num:85.3,
                text:"水功能区水质达标率量（%）"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .goverment_container{
        width: 100vw;
        height: 100vh;
        background: url('../../images/nineBg.jpg') no-repeat;
        background-size: 100% 100%;
        .container{
            display: flex;
            justify-content: space-between;
            .wrapper{
                // background: red;
                width: 38vw;
                // min-height: 80vh;
                display: flex;
                flex-direction: column;
                margin-top: 20px;
                margin-right: 4vw;
                justify-content: space-between;
                .item1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 2vh;
                }
            }
        }
    }
</style>