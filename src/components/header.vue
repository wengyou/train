<template>
    <div class="header_container">
        <!-- <div class="user" @click="toRoute">超级管理员</div> -->
        <div class="flex2 left toLeft">
            <img src="../images/head.png" alt="">
            <p>湖北省河湖长制信息化工作平台</p>
        </div>
        <ul class="flex2 tab">
            <li 
                @mouseover="hoverIndex = index; swichTab(index);" 
                v-for="(item,index) in tab" 
                :key="item.key" 
                class="item" 
                :class=" arrActive.includes(index) ? 'active' : '' " 
                @click="swichTab(index);arrActive[0] === 2 ? toBook() : ''; arrActive[0] === 3 ? toPublicBook() : ''; arrActive[0] === 6 ? toInfoHome() : '';arrActive[0] === 9 ? toScreen() : ''"
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
                    <p @click="toWater4">水质水量月报</p>
                    <ul>
                        <li @click="toWater4" >水质水量月报管理</li>
                        <!-- <li @click="toWater1">编辑水质水量月报</li> -->
                        <li @click="toWater4">多年平均降水量</li>
                        <li @click="toWater4">多年平均水量管理</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p @click="toSiteInfo1">站点信息配置</p>
                    <ul class="itemWarp">
                        <li @click="toSiteInfo1">水功能区基本信息</li>
                        <li @click="toSiteInfo1">地表水质监测站点信息</li>
                        <li @click="toSiteInfo1">河道、湖泊水文站基本信息</li>
                        <li @click="toSiteInfo1">库（湖）容曲线表</li>
                        <li @click="toSiteInfo1">河湖执法监控</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p></p>
                    <ul class="itemWarp">
                        <li >地下水质监测站点信息</li>
                        <li >河道监测断面基础信息</li>
                        <li >水质水量月报发布/查看</li>
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

            <!-- 考核管理 -->
             <div v-if="hoverIndex === 10" class="popover4 popover10">
                 <div class="wrapper">
                    <p>河长评分分析</p>
                    <ul>
                        <li @click="toCheck1" >系统评分(河长)</li>
                        <li @click="toCheck2">系统评分统计分析(联系单位)</li>
                        <li @click="toCheck3">系统评分统计分析(河长办)</li>
                        <li @click="toCheck4">综合评分统计分析(河长)</li>
                        <li @click="toCheck5">综合评分统计分析(河长办)</li>
                        <li @click="toCheck6">综合(联系单位)</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p>河长办评分分析</p>
                    <ul class="itemWarp">
                        <li @click="toCheck7">系统自动评分(考核+被考核)</li>
                        <li @click="toCheck8">综合评分(考核+被考核)</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p @click="toCheck9">考核方案管理</p>
                    <ul class="itemWarp">
                        <li @click="toCheck10">新增考核方案</li>
                        <li @click="toCheck11">编辑考核方案</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p @click="toCheck12">考核自评（河长办自评）</p>
                    <ul class="itemWarp">
                        <li @click="toCheck13">自评页面</li>
                    </ul>
                </div>
                <div class="wrapper">
                    <p @click="toCheck14">考核自评（河长自评）</p>
                    <ul class="itemWarp">
                        <li @click="toCheck15">自评页面</li>
                        <li  @click="toCheck16">上级评分(河长)</li>
                        <li @click="toCheck16">上级评分(河长办)</li>
                        <li @click="toCheck17">考核查询(河湖长)</li>
                        <li @click="toCheck18">考核查询(河湖办)</li>
                        <li @click="toCheck19">考核等级配置</li>
                    </ul>
                </div>
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
        toCheck1() {
            this.$router.push({path:'/check/check1'})
        },
        toCheck2() {
            this.$router.push({path:'/check/check2'})
        },
        toCheck3() {
            this.$router.push({path:'/check/check3'})
        },
        toCheck4() {
            this.$router.push({path:'/check/check4'})
        },
        toCheck5() {
            this.$router.push({path:'/check/check5'})
        },
        toCheck6() {
            this.$router.push({path:'/check/check6'})
        },
        toCheck7() {
            this.$router.push({path:'/check/check7'})
        },
        toCheck8() {
            this.$router.push({path:'/check/check8'})
        },
        toCheck9() {
            this.$router.push({path:'/check/check9'})
        },
        toCheck10() {
            this.$router.push({path:'/check/check10'})
        },
        toCheck11() {
            this.$router.push({path:'/check/check11'})
        },
        toCheck12() {
            this.$router.push({path:'/check/check12'})
        },
        toCheck13() {
            this.$router.push({path:'/check/check13'})
        },
        toCheck14() {
            this.$router.push({path:'/check/check14'})
        },
        toCheck15() {
            this.$router.push({path:'/check/check15'})
        },
        toCheck16() {
            this.$router.push({path:'/check/check16'})
        },
        toCheck17() {
            this.$router.push({path:'/check/check17'})
        },
        toCheck18() {
            this.$router.push({path:'/check/check18'})
        },
        toCheck19() {
            this.$router.push({path:'/check/check19'})
        },
        toScreen() {
            this.$router.push({path:'/screen'})
        },
        toInfoHome() {
            this.$router.push({path:'/information/home'})
        },
        toWater4() {
            this.$router.push({path: '/waterQuality/water4'})
        },
        toSiteInfo1() {
            this.$router.push({path: '/waterQuality/siteInfo1'})
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
            },{
                index: 11,
                name: '考核管理'
            },]
        }
    }
}
</script>

<style lang="scss" scoped>
    .header_container{
        width: 100vw;
        height: 1rem;
        background-image: linear-gradient(to right, #0341b5, #0e2357);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        .left{
            margin-left: 1vw;
        }
        .right{
            justify-content: space-between;
            width: 2rem;
            margin-right: 1vw;
            font-size: 0.875rem;
        }
        .tab{
            width: 66vw;
            justify-content: space-between;
            // font-size: 0.1rem;
            .item{
                width: 7vw;
                // height: 100%;
                // margin: 0.4rem;
                display: inline-block;
                transform: skewX(-45deg);
                cursor:pointer
            }
            .item>p{
                color: white;
                font-size: 0.3rem;
                transform: skewX(45deg);
                line-height: 1rem;
                text-align: center;
            }
            .active{
                box-shadow: inset 0 0 1rem #0b7bc4;
            }
            .popover{
                width: 2.6rem;
                height: 4rem;
                background: #2158e4;
                position: fixed;
                top:1rem;
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
                    p{
                        cursor:pointer
                    }
                }
            }
            .popover2{
                left: 26vw;
                height: 2rem;
            }
            .popover5{
                height: 6rem !important;
                left: 50vw;
                // height: 12rem;
            }
            .popover4{
                width: 40vw;
                display: flex;
                height: 5rem !important;
                left: 46vw;
                position: fixed;
                top: 1rem;
                background: #2158e4;
                z-index: 100;
                justify-content: space-between;
                .wrapper{
                    width: 33%;
                    height: 100%;
                    font-size: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    p{
                        // font-size: 16px;
                        text-align: center;
                        width: 90%;
                        height: 40px;
                        border-bottom: 1px solid #dddddd;
                        margin: 0 auto;
                        line-height: 0.8rem;
                        // line-height: 16px;
                        cursor: pointer;
                    }
                    ul{
                        width: 90%;
                        height: 80%;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        li{
                            margin-top: 2vh;
                            cursor: pointer;
                        }
                    }
                }
            }
            .popover10{
                width: 19rem;
                height: 6rem !important;
                left: 40vw;
                // height: 12rem;
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