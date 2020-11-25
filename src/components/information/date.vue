<template>
    <div class="date_container">
        <p class="demonstration">河湖长履职统计:</p>
        <el-date-picker
            size="mini"
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="2019-12-01"
            end-placeholder="2019-12-26">
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
            min-width: 6vw;
            font-size: 12px;
            margin-right: 1vw;
            margin-left: 1vw;
        }
    }
</style>