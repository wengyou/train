<template>
    <div class="top">
        <div></div>
        <span>{{con}}</span>
        <p class="toRight">X</p>
    </div>
</template>

<script>
export default {
    props: ['con']
}
</script>

<style lang="scss" scoped>
    .top{
        width: 100vw;
        height: 40px;
        background-color: #87d9ff;
        display: flex;
        justify-content: space-between;
        color: #fff;
        line-height: 40px;
    }
</style>