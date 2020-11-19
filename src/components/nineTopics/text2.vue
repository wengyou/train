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
        min-width: 160px;
        min-height: 60px;
        border-radius: 5px;
        h3{
            color: #02ccff;
            font-size: 20px;
            text-align: center;
            // line-height: 40px;
            font-weight: bold;
        }
        p{
            color: #ffffff;
            font-size: 8px;
            text-align: center;
            margin-top: 6px;
        }
    }
</style>>