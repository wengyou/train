<template>
    <div class="header_container">
        <!-- <div class="user" @click="toRoute">超级管理员</div> -->
        <div class="flex2 left toLeft">
            <img src="../images/head.png" alt="">
            <p>湖北省河湖长制信息化工作平台</p>
        </div>
        <ul class="flex2 tab">
            <li 
                @mouseover="hoverIndex = index" 
                v-for="(item,index) in tab" 
                :key="item.key" 
                class="item" 
                :class=" arrActive.includes(index) ? 'active' : '' " 
                @click="swichTab(index);arrActive[0] === 2 ? toBook() : ''; arrActive[0] === 3 ? toPublicBook() : ''"
                >
                    <p>{{item.name}}</p>
            </li>
            <!-- 在线培训 -->
            <div v-if="hoverIndex === 0" class="popover">
                <ul class="itemWarp">
                    <li @click="toClassCenter">课程中心</li>
                    <li @click="toMyClasses">我的课程</li>
                    <li @click="toQuestionBank">题库管理</li>
                    <li @click="toTestManage">考试管理</li>
                    <li @click="toMyTest">我的考试</li>
                </ul>
            </div>

            <!-- 工作上报 -->
            <div v-if="hoverIndex === 1" class="popover popover2">
                <ul class="itemWarp">
                    <li @click="toMissionInit">任务发起</li>
                    <li @click="toInfoFill">信息填报</li>
                </ul>
            </div>

            <!-- 水质水量 -->
            <div v-if="hoverIndex === 4" class="popover4">
                <div class="wrapper">
                    <p>水质水量月报</p>
                    <ul>
                        <li @click="toWater4" >水质水量月报管理</li>
                        <!-- <li @click="toWater1">编辑水质水量月报</li> -->
                        <li @click="toWater4">多年平均降水量</li>
                        <li @click="toWater4">多年平均水量管理</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p>站点信息配置</p>
                    <ul class="itemWarp">
                        <li @click="toCure">水功能区基本信息</li>
                        <li @click="toGoverment">地表水质监测站点信息</li>
                        <li @click="toWaterShore">河道、湖泊水文站基本信息</li>
                        <li @click="toRepair">库（湖）容曲线表</li>
                        <li @click="toMonitor">河湖执法监控</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p></p>
                    <ul class="itemWarp">
                        <li @click="toCure">地下水质监测站点信息</li>
                        <li @click="toGoverment">河道监测断面基础信息</li>
                        <li @click="toWaterShore">水质水量月报发布/查看</li>
                    </ul>
                </div>
            </div>


            <!-- 九大专题 -->
            <div v-if="hoverIndex === 5" class="popover popover5">
                <ul class="itemWarp">
                    <li @click="toManage" >河湖管理和保护规划</li>
                    <li @click="toProtect">河流保护名录</li>
                    <li @click="toResponsibility">河湖管护责任主体护</li>
                    <li @click="toWaterProtect">水资源保护</li>
                    <li @click="toCure">水污染防治</li>
                    <li @click="toGoverment">水环境治理</li>
                    <li @click="toWaterShore">水域岸线管护</li>
                    <li @click="toRepair">水生态修复与保护</li>
                    <li @click="toMonitor">河湖执法监控</li>
                </ul>
            </div>
        </ul>
        <div class="flex2 right">
            <img src="../images/user.png" alt="">
            <p>超级管理员</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hedader',
    methods: {
        toRoute() {
            this.$router.replace('/route')
        },
        toWater4() {
            this.$router.push({path: '/waterQuality/water4'})
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        swichTab(index) {
            let hash = this.arrActive.findIndex(item => {
                return item == index
            })
            if (hash > -1) {
                this.arrActive.splice(hash, 1)
            } else {
                this.arrActive.push(index)
            }
            if(this.arrActive.length > 1) {
                this.arrActive.shift()
            }
        },
        toPublicDraft() {
            this.$router.push({path: '/meeting/publicDraft'})
        },
        toPublicBook() {
            this.$router.push({path: '/meeting/publicBook'})
        },
        toPublic() {
            this.$router.push({path: '/meeting/public'})
        },
        toDetail() {
            this.$router.push({path: '/meeting/detail'})
        },
        toAdd() {
             this.$router.push({path: '/meeting/add'})
        },
        toDraft() {
            this.$router.push({path: '/meeting/draft'})
        },
        toBook() {
            this.$router.push({path: '/meeting/book'})
        },
        toManage() {
            this.$router.push({path: '/nineTopics/manage'})
        },
        toResponsibility() {
            this.$router.push({path: '/nineTopics/responsibility'})
        },
        toMonitor() {
            this.$router.push({path: '/nineTopics/monitor'})
        },
        toProtect() {
            this.$router.push({path: '/nineTopics/protect'})
        },
        toGoverment() {
            this.$router.push({path: '/nineTopics/goverment'})
        },
        toRepair() {
            this.$router.push({path: '/nineTopics/repair'})
        },
        toCure() {
            this.$router.push({path: '/nineTopics/cure'})
        },
        toWaterShore() {
            this.$router.push({path: '/nineTopics/waterShore'})
        },
        toWaterProtect() {
            this.$router.push({path: '/nineTopics/waterProtect'})
        },
        toMissionInit() {
          this.$router.push({path: '/missionInit'})
      },
      toLaunchDetail() {
          this.$router.push({path: '/launchDetail'})
      },
      toInfoFill() {
          this.$router.push({path: '/infoFill'})
      },
      toReportDetail() {
          this.$router.push({path: '/reportDetail'})
      },
      toStartStudy() {
          this.$router.push({path: '/startStudy'})
      },
      toClassDetail() {
          this.$router.push({path: '/classDetail'})
      },
      toClassCenter() {
          this.$router.push({path: '/'})
      },
      toClassManage() {
          this.$router.push({path: '/testManage'})
      },
      toQuestionBank() {
          this.$router.push({path: '/questionBank'})
      },
      toExamRoom() {
          this.$router.push({path: '/examRoom'})
      },
      toMyClasses() {
          this.$router.push({path: '/myClasses'})
      },
      toAddClass() {
          this.$router.push({path: '/addClasses'})
      },
      toLearnSettings() {
          this.$router.push({path:'/learnSettings'})
      },
      toTestManage() {
          this.$router.push({path:'/testManage'})
      },
      toPreview() {
          this.$router.push({path:'/preview'})
      },
      totestDetail() {
          this.$router.push({path:'/testDetail'})
      },
      toMyTest() {
          this.$router.push({path:'/myTest'})
      }
    },
    data() {
        return {
            activeIndex: '1',
            arrActive: [0],
            hoverIndex: -1,
            tab: [{
                index: 1,
                name: '在线培训'
            },{
                index: 2,
                name: '工作上报'
            },{
                index: 3,
                name: '会议台账'
            },{
                index: 4,
                name: '舆论宣传'
            },{
                index: 5,
                name: '水质水量'
            },{
                index: 6,
                name: '九大专题'
            },{
                index: 7,
                name: '信息门户'
            },{
                index: 8,
                name: 'OA办公'
            },{
                index: 9,
                name: '采砂管理'
            },{
                index: 10,
                name: '大屏可视化'
            },]
        }
    }
}
</script>

<style lang="scss" scoped>
    .header_container{
        width: 100%;
        height: 50px;
        background-image: linear-gradient(to right, #0341b5, #0e2357);
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        .left{
            margin-left: 1vw;
        }
        .right{
            justify-content: space-between;
            width: 6.8rem;
            margin-right: 1vw;
            font-size: 0.875rem;
        }
        .tab{
            width: 66vw;
            justify-content: space-between;
            .item{
                width: 7vw;
                height: 100%;
                margin: 10px;
                display: inline-block;
                transform: skewX(-45deg);
                cursor:pointer
            }
            .item>p{
                color: white;
                font-size: 0.7rem;
                transform: skewX(45deg);
                line-height: 50px;
                text-align: center;
            }
            .active{
                box-shadow: inset 0 0 20px #0b7bc4;
            }
            .popover{
                width: 150px;
                height: 200px;
                background: #2158e4;
                position: fixed;
                top:50px;
                z-index: 100;
                .itemWarp{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    color: #ffffff;
                    text-align: center;
                    font-size: 0.75rem;
                    li{
                        cursor:pointer
                    }
                }
            }
            .popover2{
                left: 26vw;
                height: 6.25rem;
            }
            .popover5{
                height: 280px !important;
                left: 52vw;
                height: 12rem;
            }
            .popover4{
                width: 40vw;
                display: flex;
                height: 280px !important;
                left: 46vw;
                height: 12rem;
                position: fixed;
                top: 50px;
                background: #2158e4;
                z-index: 100;
                justify-content: space-between;
                .wrapper{
                    width: 33%;
                    height: 100%;
                    font-size: 12px;
                    display: flex;
                    flex-direction: column;
                    p{
                        font-size: 16px;
                        text-align: center;
                        width: 90%;
                        height: 40px;
                        border-bottom: 1px solid #dddddd;
                        margin: 0 auto;
                        line-height: 40px;
                        // line-height: 16px;
                    }
                    ul{
                        width: 90%;
                        height: 80%;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        li{
                            margin-top: 4vh;
                        }
                    }
                }
            }
        }
        // .wrapper{
        //     width: 50%; 
        //     height: 100%;
        //     display: flex;
        //     font-size: 14px;
        //     justify-content: space-around;
        //     margin-left: 460px;
        //     line-height: 50px;
        //     color: #ffffff;
        //     font-weight: bold;
        // }
        // .user{
        //     line-height: 50px;
        //     color: #ffffff;
        //     font-weight: bold;
        //     margin-right: 20px;
        //     font-size: 12px;
        // }
    }
</style>