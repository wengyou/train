<template>
    <div class="screen4_container">
        <div class="wrapper">
            <div>{{data.name1}}</div>
            <p>{{data.name2}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
    .screen4_container{
        width: 3.5rem;
        height: 2.5rem;
        background: url('../../images/screen/大图4psd_11.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrapper{
            width: 50%;
            height: 70%;
            // background: red;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            div{
                color: #edf996;
                line-height: .5rem;
                font-weight: bold;
            }
            p{
                color: #ffffff;
                line-height: .2rem;
                font-weight: bold;
            }
        }
    }
</style>