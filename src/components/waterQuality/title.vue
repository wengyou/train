<template>
    <div class="title_container">{{title}}</div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .title_container{
        width: 96%;
        height: 40px;
        background: #e2f3ff;
        margin: 6px auto;
        line-height: 40px;
        text-indent: 1em;
    }
</style>>