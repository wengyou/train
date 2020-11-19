<template>
    <div class="yearSelect_container">
        <div class="block">
            <el-date-picker
                v-model="value1"
                size="mini"
                type="year"
                placeholder="2020年">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.yearSelect_container{
    .el-date-editor.el-input{
        width: 100px;
        input{
            background-color: #102474 !important;
        }
        .el-input__inner {
            width: 60% !important;
            background-color: #102474 !important;
        }
}
}

</style>>