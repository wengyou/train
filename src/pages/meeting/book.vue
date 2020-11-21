<template>
    <div class="book_container">
        <Header />
        <current-location></current-location>
        <div class="top_wrapper">
            <div class="left">
                <div class="flex btn_wrapper">
                    <el-button class="btn" :type=" btn1 ? 'primary' : ''" @click="toBtn1" size="mini">本季度</el-button>
                    <el-button class="btn" :type=" btn2 ? 'primary' : ''" @click="toBtn2" size="mini">本年</el-button>
                    <el-button class="btn" :type=" btn3 ? 'primary' : ''" @click="toBtn3" size="mini">所有</el-button>
                    <el-button class="btn" :type=" btn4 ? 'primary' : ''" @click="toBtn4" size="mini">自定义</el-button>
                </div>   
                <el-input
                    placeholder="请输入关键字搜索"
                    style="margin-left: 10px"
                    size="mini"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
                <div class="flex select_wrapper">
                    <p>会议类型：</p>
                    <el-select size="mini" v-model="value" placeholder="全部">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="right">
                <el-button size="mini" type="primary" @click="toAdd">+新增</el-button>
                <el-button size="mini" icon="el-icon-receiving" @click="toDraft">草稿（2）</el-button>
                <el-button size="mini" icon="el-icon-upload2">导出</el-button>
            </div>
        </div>
        <div class="table_wrapper">
            <Table1 />
        </div>
        <div class="footer">
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Table1 from '../../components/meeting/table1.vue'
export default {
    name: 'book',
    components: {
        Header,
        CurrentLocation,
        Table1,
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: '',
        btn1: true,
        btn2: false,
        btn3: false,
        btn4: false
      }
    },
    methods: {
        toAdd() {
            this.$router.push({path: '/meeting/add'})
        },
        toDraft() {
            this.$router.push({path: '/meeting/draft'})
        },
        toBtn1() {
            this.btn1 = true;
            this.btn2 = false;
            this.btn3 = false;
            this.btn4 = false;
        },
        toBtn2() {
            this.btn1 = false;
            this.btn2 = true;
            this.btn3 = false;
            this.btn4 = false;
        },
        toBtn3() {
            this.btn1 = false;
            this.btn2 = false;
            this.btn3 = true;
            this.btn4 = false;
        },
        toBtn4() {
            this.btn1 = false;
            this.btn2 = false;
            this.btn3 = false;
            this.btn4 = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    .book_container{
        .top_wrapper{
            display: flex;
            justify-content: space-between;
            width: 98vw;
            height: 40px;
            align-items: center;
            margin: 0 auto;
            .left{
                display: flex;
                align-items: center;
                width: 65vw;
                .select_wrapper{
                    align-items: center;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .right{
                display: flex;
            }
        }
        .table_wrapper{
            height: 66vh;
        }
        .footer{
            width: 100%;
            height: 50px;
            background: f2f2f2;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>