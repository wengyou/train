<template>
    <div class="myTest_container">
        <Header />
        <current-location></current-location>
        <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 94%; margin: 20px auto">
            <el-tab-pane label="待办考试" name="first">
                <el-table
                    border
                    size="mini"
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="num"
                        width="80"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="考试名称">
                        <template slot-scope="scope">
                            <el-button type="text" @click="dialogVisible = true">{{ scope.row.title }}</el-button>
                            <!-- <el-tag size="medium" @click="toTestDetail">{{ scope.row.title }}</el-tag> -->
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="考试时长">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="考试截至日期">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="考试状态">
                    </el-table-column>
                    <el-table-column
                        prop="score"
                        width="100"
                        label="考试分数">
                    </el-table-column>
                    <el-table-column
                        prop="qualified"
                        width="100"
                        label="是否合格">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <!-- 弹框 -->
            <el-dialog
                :visible.sync="dialogVisible"
                show-close=false
                :before-close="handleClose">
                <img style="width: 100%; height: 50vh" src="../../images/test.png" alt="">
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleClose">开始考试</el-button>
                </span>
            </el-dialog>
            <el-tab-pane label="全部考试" name="second">
                <el-table
                    border
                    size="mini"
                    :data="tableData1"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="num"
                        width="80"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="考试名称">
                        <template slot-scope="scope">
                            <el-tag size="medium" @click="toTestDetail">{{ scope.row.title }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="考试时长">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="考试截至日期">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="考试状态">
                    </el-table-column>
                    <el-table-column
                        prop="score"
                        width="100"
                        label="考试分数">
                    </el-table-column>
                    <el-table-column
                        prop="qualified"
                        width="100"
                        label="是否合格">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
export default {
    name: 'myTest',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
      return {
        dialogVisible: false,
        activeName: 'first',
        tableData: [{
            num: 1,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-12-20',
            status: '未开始',
            score: '75',
            qualified: '是'
        },{
            num: 2,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        },{
            num: 3,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        },{
            num: 4,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        }],
        tableData1: [{
            num: 1,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-12-20',
            status: '未开始',
            score: '75',
            qualified: '是'
        },{
            num: 2,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        },{
            num: 3,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        },{
            num: 4,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        },{
            num: 5,
            title: '河湖长制2020年基础知识考试' ,
            time: '20分钟',
            date: '2020-11-20',
            status: '进行中',
            score: '75',
            qualified: '否'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       handleClose(done) {
        this.$confirm('本考试共有两次机会，是否确认开始第一次考试？')
          .then(_ => {
              this.dialogVisible = false;
              this.$router.push({path:'/testDetail'})
            done();
            console.log(_)
          })
          .catch(_ => {console.log(_)});
      }
    }
}
</script>

<style>

</style>