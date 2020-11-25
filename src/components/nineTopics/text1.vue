<template>
    <div class="text1_container">
        <div class="dot"></div>
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="scss" scoped>
    .text1_container{
        min-width: 160px;
        height: 30px;
        display: flex;
        align-items: center;
        line-height: 30px;
        // background: red;
        .dot{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #398ff8;
        }
        span{
            text-indent: 1em;
            color: #ffffff;
            // font-size: 10px;
        }
    }
</style>