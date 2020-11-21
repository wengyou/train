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
                <div class="flex2 wrap">
                    <p>建站年月:</p>
                     <el-date-picker
                        v-model="value1"
                        size="mini"
                        type="date"
                        placeholder="请选择">
                    </el-date-picker>
                </div>
                <div class="flex2 wrap">
                    <p>始报年月:</p>
                     <el-date-picker
                        v-model="value1"
                        size="mini"
                        type="date"
                        placeholder="请选择">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <Title :title="title2" />
        <div class="wrapper0">
            <div>
                <div class="flex2 wrap">
                    <p>是否属于省级18条河流水质水量月报上报水功能区:</p>
                        <el-select style="width: 200px" size="mini" v-model="value" placeholder="是">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex2 wrap">
                    <p>是否属于省级18条河流水质水量月报上报水功能区:</p>
                    <el-select style="width: 200px" size="mini" v-model="value" placeholder="是">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex2 wrap">
                    <p>是否属于省级18条河流水质水量月报上报水功能区:</p>
                        <el-select style="width: 200px" size="mini" v-model="value" placeholder="是">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
             <div>
                <div class="flex2 wrap">
                    <p>是否属于省级18条河流水质水量月报上报水功能区:</p>
                        <el-select style="width: 200px" size="mini" v-model="value" placeholder="是">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex2 wrap">
                    <p>是否属于省级18条河流水质水量月报上报水功能区:</p>
                    <el-select style="width: 200px" size="mini" v-model="value" placeholder="是">
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
                style="width: 41vw"
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
            headCon: '新增水功能区',
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
                '所属河流',
                '水系名称',
                '流域名称',
                '经度',
                '纬度',
                '站址',
                '基面名称',
                '基面高程',
                '基面修正值',
                '测站类别',
                '隶属行业单位'
            ],
            form2: [
                '信息管理单位',
                '交换管理单位',
                '至河口距离(km)',
                '集水面积(k㎡)'
            ],
            form3:[{
                title: '水域类别',
                con: '江河'
            },{
                title: '行政区划',
                con: '请选择'
            },{
                title: '报讯等级',
                con: '中央报讯站'
            },{
                title: '测站岸别',
                con: '左岸'
            },{
                title: '测站方位',
                con: '左岸'
            },{
                title: '启用标志',
                con: '启用'
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
            }
        }
        .textBox{
            width: 80%;
            height: 80px;
            margin: 60px auto;
            justify-content: flex-end;
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
        .wrapper0{
            display: flex;
            // flex-direction: column;
            width: 70%;
            margin: 20px auto;
            justify-content: space-between;
            font-size: 12px;
        }
        .wrap{
            width: 80%;
            height: 50px;
            align-items: center;
            p{
                width: 170px;
            }
        }
    }
</style>