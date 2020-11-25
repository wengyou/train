<template>
  <el-radio-group v-model="radio2">
    <el-radio :label="1">综合</el-radio>
    <el-radio :label="2">投诉办结率</el-radio>
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