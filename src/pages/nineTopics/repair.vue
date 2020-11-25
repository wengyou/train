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
                  <Block2 :block="block1" />
                  <Block2 :block="block2" />
              </div>
              <div class="item1">
                  <Text1 :text="text2" />
                  <year-select></year-select>
              </div>
              <div class="item1">
                  <Block2 :block="block3" />
                  <Block2 :block="block4" />
              </div>
              <div class="item1">
                  <Text1 :text="text3" />
                  <year-select></year-select>
              </div>
              <div class="item2">
                  <Block2 :block="block5" />
              </div>
              <div class="item1">
                  <Text1 :text="text4" />
                  <year-select></year-select>
              </div>
              <div class="item2">
                  <Block2 :block="block6" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue'
import mapCharts from '../../components/nineTopics/map.vue'
import Text1 from '../../components/nineTopics/text1.vue'
import Block2 from '../../components/nineTopics/block2.vue'
import YearSelect from '../../components/nineTopics/yearSelect.vue'
export default {
    name: 'protect',
    components: {
        Header,
        mapCharts,
        Text1,
        Block2,
        YearSelect,
    },
    data() {
        return {
            text1: "退琓（田、渔）还湖",
            text2: "水土流失综合防治",
            text3: "河湖湿地水生生物多样性",
            text4: "农村水环境综合整治",
            block1: {
                num:25.9,
                text:"退琓（田、渔）还湖面积（km3）"
            },
            block2: {
                num:85.3,
                text:"退琓（田、渔）还湖进度（%）"
            },
            block3: {
                num:25.9,
                text:"全省新增治理水土流失面积（km3）"
            },
            block4: {
                num:13,
                text:"全省新增治理水土流失治理项目数量（%）"
            },
            block5: {
                num:19,
                text:"全省新增国家和省级湿地公园个数（个）"
            },
            block6: {
                num:85.9,
                text:"湿地、水流等重点领域补偿覆盖率（%）"
            },
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
            height: 90%;
            justify-content: space-between;
            .wrapper{
                width: 36vw;
                display: flex;
                flex-direction: column;
                margin: auto 2rem;
                justify-content: space-around;
                // background: red;
                .item1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: .6rem;
                }
                .item2{
                    margin: 0 auto;
                    margin-top: 10px;
                }
            }
        }
    }
</style>