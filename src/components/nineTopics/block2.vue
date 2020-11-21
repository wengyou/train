<template>
    <div class="block2_container">
        <h3>{{block.num}}</h3>
        <p>{{block.text}}</p>
    </div>
</template>

<script>
export default {
    props: ["block"]
}
</script>

<style lang="scss" scoped>
    .block2_container{
        min-width: 8vw;
        min-height: 8vh;
        box-shadow: inset 0 0 20px #0b7bc4;
        background-color: #04175b;
        border-radius: 5px;
        h3{
            color: #02ccff;
            font-size: 24px;
            text-align: center;
            line-height: 5vh;
            font-weight: bold;
        }
        p{
            color: #ffffff;
            font-size: 12px;
            text-align: center;
        }
    }
</style>>