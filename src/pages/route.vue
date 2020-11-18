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
        
        
        <!-- <el-button type="primary" @click="toExamRoom">我的考场</el-button> -->
    </div>
</template>

<script>
export default {
    methods: {
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