<template>
  <el-radio-group v-model="radio2">
    <el-radio :label="1">综合</el-radio>
    <el-radio :label="2">出征率</el-radio>
    <el-radio :label="3">问题处理率</el-radio>
    <el-radio :label="4">水质达标率</el-radio>
    <el-radio :label="5">黑臭水体治理率</el-radio>
  </el-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio2: 1
      };
    }
  }
</script>