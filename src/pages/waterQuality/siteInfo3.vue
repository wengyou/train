<template>
    <div class="siteInfo3_container">
        <Header :con="headCon" />
        <Title :title="title1" />
        <div class="wrapper">
            <div class="left_form item">
                <div class="flex2 wrap" v-for="item in form1" :key='item'>
                    <p>{{item}}:</p>
                    <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                </div>
            </div>
            <div class="rgiht_form item">
                <div class="flex2 wrap" v-for="item in form3" :key="item">
                    <p>{{item.title}}:</p>
                     <el-select size="mini" v-model="value" :placeholder="item.con">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <Title :title="title2" />
        <div class="wrapper">
            <div class="left_form item">
                <div class="flex2 wrap" v-for="item in form5" :key="item">
                    <p>{{item.title}}:</p>
                     <el-select size="mini" v-model="value" :placeholder="item.con">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="right_form item">
                <div class="flex2 wrap">
                    <p>断面设置日期:</p>
                     <el-date-picker
                        v-model="value1"
                        size="mini"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="flex2 wrap">
                    <p>监测内容:</p>
                    <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                </div>
            </div>
        </div>
        <div class="btn_wrapper">
            <el-button size="mini" type="primary">保存</el-button>
            <el-button size="mini">取消</el-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Title from '../../components/waterQuality/title.vue'
export default {
    name: 'siteInfo',
    components: {
        Header,
        Title,
    },
    data() {
        return {
            headCon: '新增河道断面',
            title1: '基本信息',
            title2: '业务信息',
            timeTitle: '断面设置日期',
            timeCon: '2020-09',
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            },],
            value: '',
            form1: [
                '河道断面代码',
                '河道断面名称',
                '堤间距离(m)',
                '左岸堤顶高程(m)',
                '右岸堤顶高程(m)',
                '施测单位'
            ],
            form3:[{
                title: '河道断面形式',
                con: '梯形'
            },{
                title: '是否有水文测站',
                con: '是'
            },{
                title: '所在地',
                con: '请选择'
            }],
            form5: [{
                title: '是否关联水功能区',
                con: '是'
            },{
                title: '是否关联水功能区',
                con: '是'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
    .siteInfo3_container{
        background: #ffffff;
        width: 70vw;
        min-height: 100vh;
        margin: 0 auto;
        .wrapper{
            width: 60%;
            margin: 10px auto;
            display: flex;
            justify-content: space-between;
            .item{
                width: 50%;
                font-size: 12px;
                .wrap{
                    width: 80%;
                    height: 50px;
                    align-items: center;
                    p{
                        width: 170px;
                    }
                }
            }
        }
        .textBox{
            width: 60vw;
            height: 80px;
            margin: 60px auto;
            p{
                font-size: 14px;
                width: 50px;
            }
        }
        .btn_wrapper{
            display: flex;
            width: 100%;
            height: 50px;
            align-items: center;
            justify-content: center;
            background: #e8e8e8;
        }
    }
</style>