<template>
    <div class="siteInfo2_container">
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
                <div class="flex2 wrap" v-for="item in form2" :key='item'>
                    <p>{{item}}:</p>
                    <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                </div>
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
                <div class="flex2 wrap" v-for="item in form4" :key='item'>
                    <p>{{item}}:</p>
                    <el-input size="mini" v-model="input" placeholder="请输入"></el-input>
                </div>
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
                <div class="flex2 wrap" v-for="item in form6" :key="item">
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
        <div class="flex2 textBox">
            <p>备注：</p>
            <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="textarea">
            </el-input>
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
            headCon: '新增地表水水质监测站',
            title1: '基本信息',
            title2: '业务信息',
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            },],
            value: '',
                form1: [
                    '测站代码',
                    '测站名称',
                    '经度',
                '纬度',
                '所属河流',
                '所属水资源分区',
                '管理单位',
                '监测单位',
                '监测频次(次/年)',
                '建站年月',
            ],
            form2: [
                '测站方位',
                '至河口距离(km)',
                '集水面积(km³)',
                '站址'
            ],
            form3:[{
                title: '测站类别',
                con: '水质站'
            },{
                title: '测站等级',
                con: '国家级(重点)'
            },{
                title: '水域类型',
                con: '江河'
            },{
                title: '行政区划',
                con: '请选择'
            },{
                title: '岸别',
                con: '左岸'
            },{
                title: '运行状况',
                con: '在用良好'
            },],
            form4: ['市级河湖长','市级河湖长联系部门','市级河湖长职务','测站序号'],
            form5: [{
                title: '是否关联水功能区',
                con: '是'
            }],

            form6: [{
                title: '是否关联河道断面',
                con: '是'
            },{
                title: '是否属于省级18条河流水质监测站',
                con: '是'
            },{
                title: '关联水功能区',
                con: '请选择'
            },{
                title: '关联河道断面',
                con: '请选择'
            },{
                title: '考核市州(17)个',
                con: '请选择'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
    .siteInfo2_container{
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