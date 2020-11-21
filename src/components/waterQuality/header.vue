<template>
    <div class="header_container">{{con}}</div>
</template>

<script>
export default {
    name: 'waterHeader',
    props: ['con']
}
</script>

<style lang="scss" scoped>
    .header_container{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 16px;
        background-image: linear-gradient(to right, #0890f2 , #1c46d5);
        color: #ffffff;
        font-weight: bold;
    }
</style>