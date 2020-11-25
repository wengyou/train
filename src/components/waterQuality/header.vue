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
        width: 60vw;
        height: 8vh;
        margin: 0 auto;
        text-align: center;
        line-height: 1.5rem;
        font-size: 20px;
        background-image: linear-gradient(to right, #0890f2 , #1c46d5);
        color: #ffffff;
        font-weight: bold;
    }
</style>