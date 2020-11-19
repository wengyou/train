<template>
    <div class="book_container">
        <Header />
        <current-location></current-location>
        <Top :con="con" />
        <div class="wrapper">
            <el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="标题:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="标题图片:">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture">
                        <el-button icon="el-icon-upload2" size="small" type="primary">浏览图片</el-button>
                        <span slot="tip" class="el-upload__tip toLeft">只能上传图片文件</span>
                    </el-upload>
                </el-form-item>
                <el-form-item label="内容:" prop="desc">
                    <el-input type="textarea" :rows="6" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="状态:" prop="status">
                    <el-radio-group v-model="ruleForm.status">
                    <el-radio label="暂存"></el-radio>
                    <el-radio label="发布"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否置顶:" prop="top">
                    <el-radio-group v-model="ruleForm.top">
                    <el-radio label="否"></el-radio>
                    <el-radio label="是"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="发布范围:" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="PC端" name="type"></el-checkbox>
                    <el-checkbox label="App" name="type"></el-checkbox>
                    <el-checkbox label="微信公众号" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item> -->
            </el-form>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Top from '../../components/meeting/top.vue'
export default {
    name: 'draft',
    components: {
        Header,
        CurrentLocation,
        Top,
    },
    data() {
      return {
            con:"舆论宣传",
            options: [{
            value: '选项1',
            label: '全部'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
            value: '',
            ruleForm: {
                name: '',
                desc: '',
                status: '暂存',
                top: '否',
                type: ['PC端']
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          fileList: [],
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>

<style lang="scss" scoped>
    .book_container{
        background: #ffffff;
        min-height: 100vh;
        .wrapper{
            width: 50vw;
            margin: 20px auto;
        }
    }
</style>