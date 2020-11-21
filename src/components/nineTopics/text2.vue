<template>
    <div class="block2_container">
        <h3>{{text.num}}</h3>
        <p>{{text.text}}</p>
    </div>
</template>

<script>
export default {
    props: ["text"]
}
</script>

<style lang="scss" scoped>
    .block2_container{
        min-width: 10vw;
        min-height: 10vh;
        // background: green;
        h3{
            color: #02ccff;
            font-size: 18px;
            text-align: center;
            line-height: 5vh;
            font-weight: bold;
        }
        p{
            color: #ffffff;
            font-size: 6px;
            text-align: center;
            margin-top: 6px;
        }
    }
</style>>