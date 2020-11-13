<template>
    <div class="route_container">
        <el-button type="primary" @click="toStartStudy">开始学习</el-button>
        <el-button type="primary" @click="toClassDetail">课程详情</el-button>
        <el-button type="primary" @click="toClassCenter">课程中心</el-button>
        <el-button type="primary" @click="toClassManage">试题管理</el-button>
        <el-button type="primary" @click="toQuestionBank">题库管理</el-button>
        <el-button type="primary" @click="toExamRoom">我的考场</el-button>
        <el-button type="primary" @click="toMyClasses">我的课程</el-button>
        <el-button type="primary" @click="toAddClass">新增课程</el-button>
    </div>
</template>

<script>
export default {
    methods: {
      toStartStudy() {
          this.$router.push({path: '/startStudy'})
      },
      toClassDetail() {
          this.$router.push({path: '/'})
      },
      toClassCenter() {
          this.$router.push({path: '/classCenter'})
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
      }
    }
}
</script>

<style lang="scss" scoped>

</style>