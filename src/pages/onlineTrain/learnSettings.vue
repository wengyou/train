<template>
    <div class="learnSetting_container">
        <Header />
        <current-location></current-location>
        <h3>学习设置</h3>
        <el-table
            :data="tableData"
            border
            style="width: 90%; margin: 0 auto">
            <el-table-column
                prop="num"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="level"
                label="级别">
                <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option
                    >
                    </el-option>
                </el-select>
            </el-table-column>
            <el-table-column
                prop="role"
                label="角色">
                <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option
                    >
                    </el-option>
                </el-select>
            </el-table-column>
            <el-table-column
                prop="time"
                label="学习时长">
            </el-table-column>
        </el-table>
        <div class="btn_wrapper">
            <el-button size="small" @click="toClassCenter">取消</el-button>
            <el-button size="small" type="primary" @click="toClassCenter">保存</el-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
export default {
    name: 'learnSettings',
    components: {
        Header,
        CurrentLocation,
    },
    data() {
        return {
            tableData: [{
                num: '',
                level: '',
                role: '',
                time: ''
            }, {
                num: '',
                level: '',
                role: '',
                time: ''
            }]
        } 
    },
    methods: {
        toClassCenter() {
            this.$router.push({path: '/'})
        },
    }
}
</script>

<style lang="scss" scope>
    .learnSetting_container{
        h3{
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            margin: 20px 0 20px 0;
        }
        .btn_wrapper{
            width: 100%;
            display: flex;
            justify-content: center;
            position: fixed;
            bottom: 10px;
        }
    }
</style>