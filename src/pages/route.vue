<template>
    <div class="route_container">
        <div class="flex">
            <el-button type="primary" @click="toClassCenter">课程中心</el-button>
            <el-button type="primary" @click="toAddClass">新增课程</el-button>
            <el-button type="primary" @click="toLearnSettings">学习设置</el-button>
        </div>
        <div class="flex">
            <el-button type="primary" @click="toMyClasses">我的课程</el-button>
            <el-button type="primary" @click="toClassDetail">课程详情</el-button>
            <el-button type="primary" @click="toStartStudy">开始学习</el-button>
        </div>

        <div class="flex">
            <el-button type="primary" @click="toQuestionBank">题库管理</el-button>
            <el-button type="primary" @click="toTestManage">考试管理</el-button>
            <el-button type="primary" @click="toPreview">预览考卷</el-button>
            <el-button type="primary" @click="totestDetail">考试详情</el-button>
            <el-button type="primary" @click="toMyTest">我的考试</el-button>
        </div>

        <div class="flex">
            <el-button type="primary" @click="toMissionInit">任务发起</el-button>
            <el-button type="primary" @click="toLaunchDetail">查看详情</el-button>
            <el-button type="primary" @click="toInfoFill">信息填报</el-button>
            <el-button type="primary" @click="toReportDetail">查看详情</el-button>
        </div>
        
        <div class="flex">
            <el-button type="primary" @click="toWaterProtect">水资源保护</el-button>
            <el-button type="primary" @click="toWaterShore">水域岸线管护</el-button>
            <el-button type="primary" @click="toCure">水污染防治</el-button>
            <el-button type="primary" @click="toRepair">水生态修复与保护</el-button>
            <el-button type="primary" @click="toGoverment">水环境治理</el-button>
            <el-button type="primary" @click="toProtect">河流保护名录</el-button>
            <el-button type="primary" @click="toMonitor">河湖执法监控</el-button>
            <el-button type="primary" @click="toResponsibility">河湖责任主体护</el-button>
            <el-button type="primary" @click="toManage">河湖管理和保护规划</el-button>
        </div>

        <div class="flex">
            <el-button type="primary" @click="toBook">会议台账</el-button>
            <el-button type="primary" @click="toDraft">草稿箱</el-button>
            <el-button type="primary" @click="toAdd">新增会议</el-button>
            <el-button type="primary" @click="toDetail">舆论详情</el-button>
            <el-button type="primary" @click="toPublic">舆论宣传</el-button>
        </div>
        <!-- <el-button type="primary" @click="toExamRoom">我的考场</el-button> -->
    </div>
</template>

<script>
export default {
    methods: {
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
    }
}
</script>

<style lang="scss" scoped>

</style>