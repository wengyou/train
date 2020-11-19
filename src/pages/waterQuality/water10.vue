<template>
    <div class="water10_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <div class="flex2">
                <span class="title">水质水量月报名称:</span>
                <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
            </div>
            <div class="wrapper2">
                <p class="toTop">月报内容:</p>
                <el-upload
                    class="upload-demo toTop"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button icon="el-icon-upload2" size="mini" type="primary">上传附件</el-button>
                </el-upload>
                <el-table
                    size="mini"
                    border
                    class="toTop"
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="文件名称">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="文件大小">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="操作">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
export default {
    name: 'water10',
    components: {
        Header
    },
    data() {
        return {
            headCon: '2020年7月水质水量月报终稿录入',
            input: '',
            fileList: [],
            tableData: []
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
    .water10_container{
        width: 100vw;
        height: 100vh;
        background: #ffffff;
        .wrapper{
            width: 60vw;
            margin: 10px auto;
            font-size: 14px;
            .title{
                width: 200px;
            }
            .wrapper2{
                width: 50vw;
                margin: 20px auto;
            }
        }
    }
</style>