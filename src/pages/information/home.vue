<template>
    <div class="home_container">
        <Header />
        <current-location></current-location>
        <div class="top_wrapper">
            <div class="left_wrapper">
                <div class="top">
                    <Date style="margin: .3rem 0" />
                    <div class="flex2">
                        <div v-for="(item, index) in data1" :key="index" class="felx2" style="margin-left: 1vw">
                            <Block1 :data="item" />
                        </div>
                        <div v-for="(item, index) in data2" :key="index" class="flex2" style="margin-left: 1vw">
                            <Block2 :data="item" />
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <h4>省级河湖长履职排行榜</h4>
                        <Table />
                    </div>
                    <div class="right">
                        <Map />
                    </div>
                </div>
            </div>
            <div class="right_wrapper">
                <div class="top">
                    <div class="item item1">
                        <img src="../../images/info1.png" alt="">
                    </div>
                    <div class="item item2">
                        <div>
                            <p>4</p>
                            <el-button type="text" @click="centerDialogVisible = true">我的待办>></el-button>
                        </div>
                        <el-dialog
                            title="我的待办"
                            :visible.sync="centerDialogVisible"
                            width="40%"
                            center>
                            <DialogTable />
                            <span slot="footer" class="dialog-footer">
                                <el-button size="mini" @click="centerDialogVisible = false">返 回</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </div>
                <div class="center">
                    <h5>区域概况——湖北省</h5>
                    <div class="block3_wrapper">
                        <div v-for="(item,index) in data3" :key="index" class="item" >
                            <Block3 :data="item" />
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <img src="../../images/info.png" alt="">
                    </div> 
                    <ul class="right">
                        <li>省级河湖长：18个</li>
                        <li>省级河湖长：18个</li>
                        <li>省级河湖长：835个</li>
                        <li>省级河湖长：1496个</li>
                        <li>省级河湖长：3587个</li>
                        <li>省级河湖长：1693个</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom_wrapper">
            <div class="left_wrapper">
                <div class="tab">
                    <div class="tab_wrapper">
                        <div class="btn" :class="btn1 ? 'activeBtn' : ''" @click="btn1 = true; btn2 = false; btn3 = false">巡查率</div>
                        <div class="btn" :class="btn2 ? 'activeBtn' : ''" @click="btn1 = false; btn2 = true; btn3 = false">事件办结率</div>
                        <div class="btn" :class="btn3 ? 'activeBtn' : ''" @click="btn1 = false; btn2 = false; btn3 = true">水质达标情况</div>
                    </div>
                    <div>
                        <img src="../../images/info4.png" alt="">
                    </div>
                </div>
                <div v-if="btn1">
                    <img src="../../images/info2.png" alt="">
                </div>
                <div v-if="btn2">
                    <img src="../../images/info3.png" alt="">
                </div>
                <div v-if="btn3">
                    <img src="../../images/info3.png" alt="">
                </div>
            </div>
            <div class="right_wrapper">
                <div class="tab">
                    <div class="tab_wrapper">
                        <div class="btn" :class="btn4 ? 'activeBtn' : ''" @click="btn4 = true; btn5 = false; btn6 = false">通知公告</div>
                        <div class="btn" :class="btn5 ? 'activeBtn' : ''" @click="btn4 = false; btn5 = true; btn6 = false">制度文件</div>
                        <div class="btn" :class="btn6 ? 'activeBtn' : ''" @click="btn4 = false; btn5 = false; btn6 = true">工作动态</div>
                    </div>
                    <div style="margin-right: 6px">
                        <el-button type="text">更多></el-button>
                    </div>
                </div>
                <div class="con_wrapper">
                    <div class="flex2">
                        <p>湖北省第三号河湖长令关于开展碧水保卫战“示范建设行动”的命令</p>
                        <span>2020-01-28</span>
                    </div>
                    <div class="flex2">
                        <p>湖北省河道采砂管理责任人名单</p>
                        <span>2020-01-28</span>
                    </div>
                    <div class="flex2">
                        <p>关于印发《湖北省河湖长制宣传“六进”活动方案》的通知</p>
                        <span>2020-01-28</span>
                    </div>
                </div>
                <!-- <div v-if="btn5">

                </div>
                <div v-if="btn6">

                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Date from '../../components/information/date.vue'
import Block1 from '../../components/information/block1.vue'
import Block2 from '../../components/information/block2.vue'
import Block3 from '../../components/information/block3.vue'
import Table from '../../components/information/table.vue'
import DialogTable from '../../components/information/dialogTable.vue'
import Map from '../../components/information/map.vue'
export default {
    name: 'home',
    components: {
        Header,
        CurrentLocation,
        Date,
        Block1,
        Block2,
        Block3,
        Table,
        DialogTable,
        Map,
    },
    data() {
        return {
            centerDialogVisible: false,
            activeName1: 'first',
            activeName2: 'first',
            btn1: true,
            btn2: false,
            btn3: false,
            btn4: true,
            btn5: false,
            btn6: false,
            data1: [{
                title: '省级河湖长巡查',
                num1: '20',
                num2: '100%'
            },{
                title: '市级河湖长巡查',
                num1: '20',
                num2: '100%'
            },{
                title: '县级河湖长巡查',
                num1: '20',
                num3: '10',
                num2: '100%'
            }],
            data2: [{
                title: '事件办理情况',
                num1: '20',
                num3: '10',
                num2: '100%'
            },{
                title: '水质情况',
                num1: '20',
                num3: '10',
                num2: '100%'
            },{
                title: '省级事件办理情况',
                num1: '20',
                num3: '20',
                num2: '100%'
            }],
            data3: [{
                src: require('../../images/icon1.png'),
                name: '河流',
                num: '1232条'
            },{
                src: require('../../images/icon2.png'),
                name: '湖泊',
                num: '988个'
            },{
                src: require('../../images/icon3.png'),
                name: '水库',
                num: '675个'
            },{
                src: require('../../images/icon4.png'),
                name: '公示牌',
                num: '2573条'
            },{
                src: require('../../images/icon5.png'),
                name: '排污口',
                num: '236个'
            },{
                src: require('../../images/icon6.png'),
                name: '监测断面',
                num: '549条'
            },{
                src: require('../../images/icon7.png'),
                name: '河长',
                num: '3379个'
            },{
                src: require('../../images/icon8.png'),
                name: '湖长',
                num: '1969个'
            },]
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss" scoped>
    .home_container{
        .top_wrapper, .bottom_wrapper{
            width: 98vw;
            margin: 10px auto;
            // background: red;
            display: flex;
            justify-content: space-between;
        }
        .top_wrapper{
            height: 12rem;
            .left_wrapper{
                width: 70%;
                height: 100%;
                // background: yellow;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top{
                    width: 100%;
                    height: 28%;
                    background: #ffffff;
                    display: flex;
                    flex-direction: column;
                    // justify-content: space-around;
                }
                .bottom{
                    width: 100%;
                    height: 70%;
                    background: #ffffff;
                    display: flex;
                    justify-content: space-around;
                    .left{
                        // width: 4rem;
                        height: 100%;
                        h4{
                            text-align: center;
                            line-height: 6vh;
                        }
                    }
                    .right{
                        width: 70%;
                        // background: url('../../images/mapBg.png') no-repeat;
                        // background-size: 100% 100%;
                    }
                }
            }
            .right_wrapper{
                width: 29%;
                height: 100%;
                // background: yellow;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top{
                    width: 100%;
                    height: 16%;
                    display: flex;
                    background: #ffffff;
                    .item{
                        width: 50%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    .item1{
                        background: #fff7f4;
                    }
                    .item2{
                        line-height: 10px;
                        margin: auto 0;
                        p{
                            font-size: 20px;
                            color: #f48155;
                            font-weight: bold;
                            padding-top: 1vh;
                        }
                    }
                }
                .center{
                    background: #ffffff;
                    height: 42%;
                    h5{
                        width: 100%;
                        height: 1rem;
                        text-align: center;
                        line-height: 1rem;
                        font-weight: bold;
                    }
                    .block3_wrapper{
                        width: 94%;
                        margin: 0 auto;
                        height: 70%;
                        // background: red;
                        display: flex;
                        align-content: flex-start;
                        flex-flow: row wrap;
                        .item{
                            flex: 0 0 30%;
                            margin-bottom: .4rem;
                            // margin-left: .2rem;
                        }
                    }
                }
                .bottom{
                    display: flex;
                    background: #ffffff;
                    .left{
                        width: 60%;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .right{
                        width: 40%;
                        height: 90%;
                        margin: auto 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                    }
                }
            }
        }
        .bottom_wrapper{
            height: 5rem;
            .left_wrapper{
                width: 60%;
                height: 100%;
                background: #ffffff;
                .tab{
                    display: flex;
                    justify-content: space-between;
                    .tab_wrapper{
                        width: 50%;
                        display: flex;
                        justify-content: space-around;
                    }
                }
                img{
                    width: 100%;
                }
            }
            .right_wrapper{
                width: 39%;
                min-height: 100%;
                background: #ffffff;
                .tab{
                    display: flex;
                    justify-content: space-between;
                    .tab_wrapper{
                        min-width: 58%;
                        display: flex;
                        justify-content: space-around;
                    }
                }
                img{
                    width: 100%;
                }
                .con_wrapper{
                    width: 96%;
                    margin: 10px auto;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    span{
                        // font-size: 12px;
                        color: #dddddd;
                    }
                    div{
                        justify-content: space-between;
                    }
                }
            }
        }
        .btn{
            min-width: 5vw;
            height: 30px;
            text-align: center;
            line-height: 30px;
            margin: 4px auto;
            cursor: pointer;
        }
        .activeBtn{
            background: #0092ff;
            color: #ffffff;
        }
    }
</style>