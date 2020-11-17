<template>
    <div class="addClasses_container">
        <Header />
        <current-location></current-location>
        <div class="content">
            <div class="btn">新增课程</div>
            <div style="width: 80%; margin: 10px auto">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="课程名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="讲师">
                        <el-input v-model="form.teacher"></el-input>
                    </el-form-item>
                    <el-form-item label="讲师简介">
                        <el-input type="textarea" :rows="4" v-model="form.teacherIntro"></el-input>
                    </el-form-item>
                    <el-form-item label="课程简介">
                        <el-input type="textarea" :rows="4" v-model="form.classIntro"></el-input>
                    </el-form-item>
                    <el-form-item label="课程视频">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList">
                            <el-button size="small" type="primary">上传视频</el-button>
                            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="课程类型">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="发布范围">
                        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">全选</el-checkbox>
                        <el-checkbox-group v-model="checkedLevels" @change="handleCheckedLevelsChange">
                          <el-checkbox v-for="level in levels" :label="level" :key="level">{{level}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="发布对象">
                        <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
                        <el-checkbox-group v-model="checkedObjects" @change="handleCheckedObjectsChange">
                          <el-checkbox v-for="obj in objects" :label="obj" :key="obj">{{obj}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
        <div class="footer">
            <div>
                <el-button size="mini" type="primary" @click="toClassCenter">提交</el-button>
                <el-button size="mini" @click="toClassCenter">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
const options1 = ['省级', '市级', '县级', '乡级', '村级'];
const options2 = ['总河湖长', '河湖长', '河湖长办', '联系单位', '巡查员']
export default {
    name: 'addClasses',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
      return {
        form: {
          name: '',
          teacher:'',
          teacherIntro: '',
          classIntro: '',
          type: [],
          resource: '',
          desc: ''
        },
        fileList: [],
        options: [{
          value: '必修课',
          label: '必修课'
        }, {
          value: '选修课',
          label: '选修课'
        }],
        value: '',
        props: {
          label: 'name',
          children: 'zones'
        },
        count1: 1,
        checkAll1: false,
        checkedLevels: [],
        levels: options1,
        isIndeterminate1: true,
        count2: 1,
        checkAll2: false,
        checkedObjects: [],
        objects: options2,
        isIndeterminate2: true
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length, fileList} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name, fileList }？`);
      },
      // handleCheckChange(data, checked, indeterminate) {
      //   console.log(data, checked, indeterminate);
      // },
      // handleNodeClick(data) {
      //   console.log(data);
      // },
       handleCheckAllChange1(val) {
        this.checkedLevels = val ? this.levels : [];
        this.isIndeterminate1 = false;
      },
      handleCheckAllChange2(val) {
        this.checkedObjects = val ? this.objects : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedLevelsChange(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.levels.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.levels.length;
      },
      handleCheckedObjectsChange(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.objects.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.objects.length;
      },
      toClassCenter() {
          this.$router.go(-1)
        },
    }
}
</script>

<style lang="scss" scope>
    .addClasses_container{
        .content{
            width: 65vw;
            margin: 0 auto;
            background: #ffffff;
            height: 700px;
            .btn{
                width: 100%;
                height: 30px;
                background-image: linear-gradient(to right, #4f99fe , #0b68e2);
                line-height: 30px;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
            }
        }
        .footer{
            background-color: #f0f0f0;
            width: 65vw;
            margin: 0 auto;
            height: 50px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>