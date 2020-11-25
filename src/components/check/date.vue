<template>
    <div class="date_container">
        <p class="demonstration">时间范围:</p>
        <el-date-picker
            size="mini"
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="2019-01-01"
            end-placeholder="2019-01-10">
        </el-date-picker>
    </div>    

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .date_container{
        display: flex;
        align-items: center;
        p{
            min-width: 1rem;
            // font-size: 12px;
            margin-right: 1vw;
            margin-left: 1vw;
        }
    }
</style>