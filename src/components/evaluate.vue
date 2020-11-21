<template>
    <div class="evaluate_container">
        <div class="item1">
            <p>用户名：{{name}}</p>
            <p>评论：非常好</p>
        </div>
        <div class="item2 flex2">
            <span>评分：</span>
            <el-rate
                v-model="value"
                disabled
                text-color="#ff9900"
                score-template="{value}">
            </el-rate>
        </div>
        <div class="item3">
            <span>2020-10-27 13:24:09</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
      return {
        value: 5
      }
    }
}
</script>

<style lang="scss" scope>
    .evaluate_container{
        display: flex;
        justify-content: space-between;
        background-color: #fbfbfb;
        margin-top: 10px;
        height: 46px;
        align-items: center;
        .item1 {
            margin-left: 30px;
        }
        .item3{
            margin-right: 16px;
        }
    }
</style>