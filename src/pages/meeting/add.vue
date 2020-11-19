<template>
    <div class="add_container">
        <Header />
        <current-location></current-location>
        <Top :con="con" />
        <div class="content_wrapper">
            <div class="title">基础信息</div>
            <div class="input_wrapper">
                <div class="flex1">
                    <div class="flex2">
                        <span>会议名称：</span>
                        <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                    </div>
                    <div class="flex2">
                        <span>筹办单位</span>
                        <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                    </div>
                </div>
                <div class="flex1 toTop">
                    <div class="flex2">
                        <span>会议日期：</span>
                        <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                    </div>
                    <div class="flex2">
                        <span>参会人员</span>
                        <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                    </div>
                </div>
                <div class="flex1 toTop">
                    <div class="flex2">
                        <span>会议目的：</span>
                        <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                    </div>
                </div>
            </div>
            <div class="title">会议纪要</div>
            <div class="input_wrapper">
                <div class="flex2">
                    <span>标题：</span>
                    <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                </div>
                <div class="flex2 toTop">
                    <span>标题：</span>
                    <el-input size="mini" type="textarea" :rows="3" v-model="input" placeholder="请输入"></el-input>
                </div>
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
                    <el-button class="toTop" icon="el-icon-upload2" size="small" type="primary">上传附件</el-button>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Top from '../../components/meeting/top.vue'
export default {
    name: 'addMeetings',
    components: {
        Header,
        CurrentLocation,
        Top,
    },
    data() {
      return {
            con:"新增会议",
            options: [{
            value: '选项1',
            label: '全部'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
            value: '',
            fileList: []
        }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>

<style lang="scss" scoped>
    .add_container{
        .content_wrapper{
            width: 80vw;
            margin: 20px auto;
            .title{
                width: 100%;
                height: 30px;
                background-color: #e2f3ff;
                line-height: 30px;
                text-indent: 1em;
                font-size: 14px;
            }
            .input_wrapper{
                width: 50vw;
                margin: 10px auto;
                font-size: 12px;
                span{
                    min-width: 60px;
                }
            }
        }
    }
</style>