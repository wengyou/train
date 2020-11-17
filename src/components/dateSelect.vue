<template>
    <div class="select">
        <div class="date_wrapper">
            <div class="block">
                <span class="demonstration">从</span>
                <el-date-picker
                    v-model="value1"
                    type="date">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">至</span>
                <el-date-picker
                    v-model="value1"
                    type="date">
                </el-date-picker>
            </div>
            <el-button type="primary" round size="mini" style="color: #ffffff">查询</el-button>
        </div>
        <div class="date_wrapper">
            <!-- <el-button 
                type="primary" 
                round size="mini" 
                style="height: 25px; line-height: 10px; margin-right: 20px"
                @click="toAddClass"
            >
                +新增
            </el-button> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toAddClass() {
          this.$router.push({path: '/addClasses'})
        }
    }
}
</script>

<style lang="scss" scope>
    .select{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dddddd;
        .date_wrapper{
            height: 55px;
            display: flex;
            align-items: center;
            font-size: 12px;
            margin-left: 20px;
            .el-input__inner{
                height: 30px;
                line-height: 30px;
            }
            span{
                margin-right: 10px;
            }
            .block{
                margin-right: 10px;
            }
        }
    }
</style>