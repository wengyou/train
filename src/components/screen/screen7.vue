<template>
    <div class="screen7_container">
        <div class="wrapper">
            <div class="flex2">
                <p>{{data.num}}</p>
                <span v-if="data.name !== '处理率' ">个</span>
            </div>
            <div class="num">{{data.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
    .screen7_container{
        // margin-left: 30vw;
        width: 3.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow:inset 0px 0px 25px 1px #0e337a;
        .wrapper{
            width: 90%;
            height: 130%;
            border: 4px solid #0b88ed;
            border-radius: .1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .num{
                color: #ffffff;
                font-weight: bold;
            }
            P{
                font-size: 24px;
                font-weight: bold;
                color: #42e5fa;
            }
            span{
                font-size: 12px;
                font-weight: bold;
                color: #42e5fa;
            }
        }
    }
</style>