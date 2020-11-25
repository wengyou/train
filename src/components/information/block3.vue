<template>
    <div class="block3_container">
        <div class="img_wrapper">
            <img :src="data.src" alt="">
        </div>
        <div class="text_wrapper">
            <p>{{data.name}}</p>
            <span>{{data.num}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
    .block3_container{
        width: 3rem;
        height: 1rem;
        display: flex;
        // background: red;
        // justify-content: space-between;
        .img_wrapper{
            width: 1rem;
            height: 1rem;
            border: 1px dashed #3798ff;
            background: #daf8ff;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .text_wrapper{
            // font-size: 14px;
            height: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-indent: 0.6em;
            span{
                font-weight: bold;
            }
        }
    }
</style>