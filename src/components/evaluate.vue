<template>
    <div class="evaluate_container">
        <div class="item1">
            <p>用户名：XXX</p>
            <p>评论：好</p>
        </div>
        <div class="item2">
            <span>评分：</span>
        </div>
        <div class="item3">
            <span>2020-11-02</span>
        </div>
    </div>
</template>

<script>
export default {

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