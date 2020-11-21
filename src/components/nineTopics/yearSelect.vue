<template>
    <div class="yearSelect_container">
        <div class="block">
            <el-date-picker
                v-model="value1"
                style="width:100px"
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
    
}

</style>>