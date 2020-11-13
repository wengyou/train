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
                        <el-tree
                            :props="props"
                            :load="loadNode"
                            lazy
                            show-checkbox
                            @check-change="handleCheckChange">
                        </el-tree>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
        <div class="footer">
            <div>
                <el-button size="mini" type="primary">提交</el-button>
                <el-button size="mini">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
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
        count: 1
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
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: '省级' }, { name: '市级' }, { name: '县级' }, { name: '乡级' }, { name: '村级' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === '省级') {
          hasChild = true;
        } else if (node.data.name === '市级') {
          hasChild = true;
        } else if (node.data.name === '县级') {
          hasChild = true;
        } else if (node.data.name === '乡级') {
          hasChild = true;
        } else if (node.data.name === '村级') {
          hasChild = true;
        }else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: '联系单位'
            }, {
              name: '责任单位'
            },{
              name: '河湖长办'
            }, {
              name: '河湖长办'
            }, {
              name: '巡查员'
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
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