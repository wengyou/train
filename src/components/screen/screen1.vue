<template>
    <div class="screen1_container">
        <div class="line"></div>
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
    .screen1_container{
        min-width: 1.8rem;
        height: .4rem;
        display: flex;
        // justify-content: space-between;
        // background: red;
        color: #ffffff;
        line-height: .4rem;
        .line{
            width: .1rem;
            height: .4rem;
            background: #8bf1f0;
        }
        p{
            text-indent: 1em;
        }
    }
</style>