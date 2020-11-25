<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="方案名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="考核对象" prop="title1">
            <el-radio-group v-model="ruleForm.resource1">
            <el-radio label="河湖长"></el-radio>
            <el-radio label="河湖长办"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="考核周期" prop="title2">
            <el-radio-group v-model="ruleForm.resource2">
            <el-radio label="年度考核"></el-radio>
            <el-radio label="季度考核"></el-radio>
            <el-radio label="月份考核"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="有效时间" prop="time">
            <el-date-picker
                size="mini"
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="2019-01-01"
                end-placeholder="2019-01-10">
            </el-date-picker>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          resource1: '',
          resource2: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title1: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title2: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          time: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      
    }
}
</script>

<style>

</style>