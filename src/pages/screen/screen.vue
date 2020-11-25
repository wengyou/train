<template>
    <div class="screen_container">
        <div class="header">湖北省河湖长制管理平台</div>
        <div class="container">
            <div class="left_wrapper">
                <div class="top">
                    <Screen1 :title="title1" style="margin: .5rem .4rem" />
                    <div class="flex2" style="margin-left: .6rem">
                        <Screen2 :data="data1" />
                        <Screen3 :data="data2" />
                    </div>
                    <div class="flex2" style="margin-left: 1.6rem">
                        <Screen2 :data="data3" />
                        <Screen3 :data="data4" />
                    </div>
                    <div class="flex2" style="margin-left: .6rem">
                        <Screen2 :data="data5" />
                        <Screen3 :data="data6" />
                    </div>
                    <div class="flex2" style="margin-left: 1.6rem">
                        <Screen2 :data="data7" />
                        <Screen3 :data="data8" />
                    </div>
                </div>
                <div class="center">
                    <Screen1 :title="title2" style="margin: .5rem .4rem" />
                    <Screen4 :data="con1" style="margin: -1rem auto" />
                    <div class="flex2 flex1" style="width: 90%; margin:0 auto">
                        <Screen4 :data="con2" />
                        <Screen4 :data="con3" />
                    </div>
                    <!-- <Screen4 :data="con4" style="margin: -1.5rem auto" /> -->
                </div>
                <div class="bottom flex2" style="margin: 0 .4rem" >
                    <div>
                        <Screen5 v-for="(item, index) in names" :key="index" :data="item" />
                    </div>
                    <div>
                        <img src="../../images/screen/大图4psd_18.png" alt="">
                    </div>
                </div>
            </div>
            <div class="center_wrapper">
                <div class="map_wrapper" style="margin-top: 110px">
                    <div class="flex2 toTop screen5_wrapper"> 
                        <Screen6 v-for="(item,index) in screen6" :key="index" :data="item" :class="index === 1 ? 'item1': ''" class="toLeft" />
                    </div>
                    <Map />
                </div>
                <div class="icon">
                    <div class="item item1">省级河长</div>
                    <div class="item item2">省级河长</div>
                    <div class="item item3">省级河长</div>
                    <div class="item item4">省级河长</div>
                    <div class="item item5">省级河长</div>
                </div>
                <div class="screen7_wrapper">
                    <Screen7 v-for="(item,index) in screen7" :key="index" :data="item" />
                </div>
                <div class="waterIntro">
                    <div class="flex1">
                        <Screen1 :title="title3" />
                        <div class="flex2">
                            <div class="btn">国控断面水质</div>
                            <div class="btn toLeft">水功能区水质</div>
                        </div>
                    </div>
                    <div class="flex1 wrapper">
                        <div class="flex1" style="width: 45%;height:3rem; flex-direction: column;">
                            <div class="flex1" style="margin-top: .5rem">
                                <div class="item " style="margin-left: 1.2rem">
                                    <p>19条</p>
                                    <s>省级河湖</s>
                                </div>
                                <div class="item " style="margin-right: 1.4rem">
                                    <p>19条</p>
                                    <s>省级河湖</s>
                                </div>
                            </div>
                            <div>
                                <div class="item" style="margin-left: 2rem">
                                    <p>19条</p>
                                    <s>省级河湖</s>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="right_wrapper">
                <div>
                    <Screen1 :title="title4" style="margin: .5rem .4rem" />
                    <Bar1 />
                </div>
                <div>
                    <Screen1 :title="title5" style="margin: .5rem .4rem" />
                    <Pie1 />
                </div>
                <div>
                    <Screen1 :title="title4" style="margin: .5rem .4rem" />
                    <Bar1 />
                    <!-- <div style="width:100%; height:40px"></div> -->
                </div>
            </div>
        </div>
        <!-- <Screen6 /> -->
    </div>
</template>

<script>
import Screen1 from '../../components/screen/screen1.vue'
import Screen2 from '../../components/screen/screen2.vue'
import Screen3 from '../../components/screen/screen3.vue'
import Screen4 from '../../components/screen/screen4.vue'
import Screen5 from '../../components/screen/screen5.vue'
import Screen6 from '../../components/screen/screen6.vue'
import Screen7 from '../../components/screen/screen7.vue'
import Map from '../../components/screen/map.vue'
import Bar1 from '../../components/screen/bar1.vue'
import Pie1 from '../../components/screen/pie1.vue'
export default {
    name: 'screen',
    components: {
        Screen1,
        Screen2,
        Screen3,
        Screen4,
        Screen5,
        Screen6,
        Screen7,
        Map,
        Bar1,
        Pie1
    },
    created(){
        setInterval(this.scroll,1000)
    },
    methods: {
        scroll(){
        this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                this.names.push(this.otherNames[0]);  // 将数组的第一个元素添加到数组的
                this.otherNames.shift();
                this.otherNames.push(this.names[0])
                this.names.shift();               //删除数组的第一个元素
                this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },2000)
        }
    },
    data() {
        return {
            animate:false,
            title1: '河流基本信息',
            title2: '河长基本信息',
            title3: '水质概况（2020年11月）',
            title4: '巡河完成率',
            title5: '巡查问题分布图',
            title6: '巡河处理率',
            data1:{num:1232,name: '河流总数'},
            data2:{num:3294,name: '河段总数'},
            data3:{num:12,name: '省级河流'},
            data4:{num:12,name: '省级河段'},
            data5:{num:432,name: '市级河流'},
            data6:{num:1446,name: '市级河段'},
            data7:{num:788,name: '县级河流'},
            data8:{num:1836,name: '县级河段'},
            con1: {name1: '蒋超良', name2: '省第一总河长'},
            con2: {name1: '王晓东', name2: '总河长'},
            con3: {name1: '马国强', name2: '副总河长'},
            // con4: {name1: 'XXX', name2: '省河长办主任'},
            names: [{
                name1: '长江',
                name2: '王晓东'
            },{
                name1: '府澴河',
                name2: '马国强'
            },{
                name1: '洪湖',
                name2: '尔肯江·吐拉洪'
            },{
                name1: '汉江',
                name2: '黄楚平'
            },{
                name1: '汉北河',
                name2: '梁伟年'
            },],
            otherNames: [{
                name1: '沮漳河',
                name2: '王立山'
            },{
                name1: '清江',
                name2: '周霁'
            },{
                name1: '富水',
                name2: '王祥喜'
            },{
                name1: '南河',
                name2: '李乐成'
            },{
                name1: '通顺河',
                name2: '曹广晶'
            },{
                name1: '陆水',
                name2: '万勇'
            },{
                name1: '举水',
                name2: '陈安丽'
            },],
            screen7: [{
                num: 4346,
                name: '总巡河次数'
            },{
                num: 2784,
                name: '发现问题'
            },{
                num: 1612,
                name: '已处理'
            },{
                num: '58%',
                name: '处理率'
            },],
            screen6: [{
                num: 3,
                name: '省级(人)'
            },{
                num: 31,
                name: '市级(人)'
            },{
                num: 31,
                name: '县级(人)'
            },{
                num: '32',
                name: '村级(人)'
            },{
                num: '32',
                name: '乡级(人)'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
    .screen_container{
        width: 100vw;
        min-height: 100vh;
        background: url('../../images/screen/背景_02.jpg') no-repeat;
        background-size: 100% 100%;
        .header{
            width: 100%;
            height: 5vh;
            background: #0f90f5;
            text-align: center;
            line-height: 5vh;
            font-weight: bold;
            color: #ffffff;
            font-size: 22px;
        }
        .container{
            width: 100%;
            height: 95vh;
            display: flex;
            .left_wrapper{
                width: 28%;
                height: 100%;
                // background: red;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top, .center, .bottom{
                    // width: 100%;
                    // height: 32%;
                    // background: red;
                }
            }
            .center_wrapper{
                width: 36%;
                height: 100%;
                // background: green;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .map_wrapper{
                    width: 100%;
                    // height: 54%;
                    // background: green;
                    .screen5_wrapper{
                        position: fixed;
                        top: 100px;
                        z-index: 100;
                    }
                    .item1{
                        margin-left: 180px;
                    }
                }
                .icon{
                    width: 80%;
                    height: .5rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    color: #ffffff;
                    text-align: right;
                    line-height: .5rem;
                    .item{
                        width: 16%;
                    }
                    .item1{
                        background: url('../../images/screen/icon1 (1).png') no-repeat;
                        background-size: auto 100%;
                    }
                    .item2{
                        background: url('../../images/screen/icon1 (2).png') no-repeat;
                        background-size: auto 100%;
                    }
                    .item3{
                        background: url('../../images/screen/icon1 (3).png') no-repeat;
                        background-size: auto 100%;
                    }
                    .item4{
                        background: url('../../images/screen/icon1 (4).png') no-repeat;
                        background-size: auto 100%;
                    }
                    .item5{
                        background: url('../../images/screen/icon1 (5).png') no-repeat;
                        background-size: auto 100%;
                    }
                }
                .screen7_wrapper{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    // background: red;
                }
                .waterIntro{
                    width: 100%;
                    height: 5rem;
                    .btn{
                        width: 2rem;
                        height: .5rem;
                        background: #02a9ff;
                        border-radius: .9rem;
                        text-align: center;
                        line-height: .5rem;
                        color: #ffffff;
                    }
                    .wrapper{
                        align-items: center;
                        // justify-content: center;
                        .item{
                            min-width: 1rem;
                            height: 1rem;
                            // border: 1px solid #ffffff;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            color: #ffffff;
                            p{
                                color: #47e2fe;
                                font-size: 24px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
            .right_wrapper{
                width: 36%;
                height: 100%;
                // background: yellow;
            }
        }
    }
</style>