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
                            v-for="i in item.options"
                            :key="i.value"
                            :label="i.label"
                            :value="i.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <Title :title="title2" />
        <div class="wrapper0">
            <p>库(湖)库容曲线关系表：</p>
            <div>
                <el-button class="toTop" type="primary" size="mini">+新增</el-button>
            </div>
            <SiteTable6 class="toTop" />
            <div class="flex2 wrap">
                <p>水功能区监测频次(年/次):</p>
                <el-input style="width: 200px" size="mini" v-model="input" placeholder="请输入"></el-input>
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
        <div class="flex2 textBox">
            <p>备注：</p>
            <el-input
                style="width: 41vw"
                type="textarea"
                :rows="6"
                placeholder="Ⅲ"
                v-model="textarea">
            </el-input>
        </div>
        <div class="btn_wrapper">
            <el-button size="mini" type="primary" @click="toBack">保存</el-button>
            <el-button size="mini" @click="toBack">取消</el-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
import Title from '../../components/waterQuality/title.vue'
import SiteTable6 from '../../components/waterQuality/siteTable6.vue'
export default {
    name: 'siteInfo',
    components: {
        Header,
        Title,
        SiteTable6,
    },
    data() {
        return {
            headCon: '新增水功能区',
            title1: '基本信息',
            title2: '业务信息',
            options: [{
            value: '选项1',
            label: '是'
            }, {
            value: '选项2',
            label: '否'
            },],
            value: '',
            form1: [
                '水功能区编码',
                '二级水功能区名称',
                '一级水功能区名称',
                '所在河流',
                '水功能区终止断面',
                '水功能区面积(k㎡)',
                '水功能区最低水位(m)',
                '所在水资源分区',
                '水功能区起始断面',
            ],
            form2: [
                '水功能区长度(km)',
                '水功能区功能排序',
                '管理单位名称',
            ],
            form3:[{
                title: '水功能区划级别',
                con: '一级水功能区',
                options: [{
                    value: '选项1',
                    label: '一级水功能区',
                },{
                    value: '选项2',
                    label: '二级水功能区',
                }]
            },{
                title: '水功能区划类型',
                con: '保护区',
                options: [{
                    value: '选项1',
                    label: '保护区',
                },{
                    value: '选项2',
                    label: '保留区',
                },{
                    value: '选项3',
                    label: '缓冲区',
                },{
                    value: '选项4',
                    label: '饮用水源区',
                },{
                    value: '选项5',
                    label: '工业用水区',
                },{
                    value: '选项6',
                    label: '农业用水区',
                },{
                    value: '选项7',
                    label: '渔业用水区',
                },{
                    value: '选项8',
                    label: '景观娱乐用水区',
                },{
                    value: '选项9',
                    label: '过渡区',
                },{
                    value: '选项10',
                    label: '排污控制区',
                }]
            },{
                title: '水域类型',
                con: '江河',
                options: [{
                    value: '选项1',
                    label: '江河',
                },{
                    value: '选项2',
                    label: '湖泊',
                },{
                    value: '选项3',
                    label: '水库',
                },{
                    value: '选项4',
                    label: '其他',
                }]
            },{
                title: '流域',
                con: '长江干流水系',
                options: [{
                    value: '选项1',
                    label: '长江干流水系',
                },{
                    value: '选项2',
                    label: '淮河洪泽湖以上水系',
                },{
                    value: '选项3',
                    label: '汉江水系',
                },{
                    value: '选项4',
                    label: '洞庭湖水系',
                },{
                    value: '选项5',
                    label: '淮河流域',
                },{
                    value: '选项6',
                    label: '乌江水系',
                },{
                    value: '选项7',
                    label: '长江流域',
                },{
                    value: '选项8',
                    label: '潘阳湖水系',
                }]
            },{
                title: '是否考核',
                con: '是',
                options: [{
                    value: '选项1',
                    label: '是',
                },{
                    value: '选项2',
                    label: '否',
                }]
            },{
                title: '所在行政区划',
                con: '请输入',
                options: [{
                value: '选项1',
                label: '全部'
            },{
                value: '选项2',
                label: '武汉市'
            },{
                value: '选项3',
                label: '黄石市'
            },{
                value: '选项4',
                label: '十堰市'
            },{
                value: '选项5',
                label: '宜昌市'
            },{
                value: '选项6',
                label: '襄阳市'
            },{
                value: '选项7',
                label: '鄂州市'
            },{
                value: '选项8',
                label: '荆门市'
            },{
                value: '选项9',
                label: '孝感市'
            },{
                value: '选项10',
                label: '荆州市'
            },{
                value: '选项11',
                label: '黄冈市'
            },{
                value: '选项12',
                label: '咸宁市'
            },{
                value: '选项13',
                label: '随州市'
            },{
                value: '选项14',
                label: '恩施土家族苗族自治州'
            },{
                value: '选项15',
                label: '仙桃市'
            },{
                value: '选项16',
                label: '潜江市'
            },{
                value: '选项17',
                label: '天门市'
            },{
                value: '选项18',
                label: '神农架林区'
            },]
            },{
                title: '监控级别',
                con: '国控级',
                options: [{
                    value: '选项1',
                    label: '国控级',
                },{
                    value: '选项2',
                    label: '省控级',
                },{
                    value: '选项3',
                    label: '地市级',
                },{
                    value: '选项4',
                    label: '区县级',
                },{
                    value: '选项5',
                    label: '其他',
                }]
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
    },
    methods: {
        toBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .siteInfo2_container{
        background: #ffffff;
        width: 60vw;
        min-height: 100vh;
        margin: 0 auto;
        .wrapper{
            width: 70%;
            margin: 10px auto;
            display: flex;
            justify-content: space-between;
            .item{
                width: 50%;
                font-size: 12px;
            }
        }
        .textBox{
            width: 60vw;
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
            flex-direction: column;
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