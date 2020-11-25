<template>
    <div class="screen5_container">
        <div class="flex2">
            <li></li>
            <p>{{data.name1}}</p>
        </div>
        <div class="name">{{data.name2}}</div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
    .screen5_container{
        width: 3.6rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background: url('../../images/screen/大图4psd_15.png') no-repeat;
        // background-size: 100% 100%;
        border-top: 2px solid #0c37a9;
        border-bottom: 2px solid #0c37a9;
        li{
            width: .2rem;
            height: .2rem;
            border-radius: 50%;
            background: #1bb2e5;
        }
        p{
            width: 1.4rem;
            color: #ffffff;
            text-indent: .2rem;
            // background: red;
        }
        .name{
            min-width: 2rem;
            height: .5rem;
            border: 2px solid #15b8e6;
            text-align: center;
            line-height: .4rem;
            color: #f0f993;
            border-radius: .5rem;
            box-shadow:inset 0px 0px 5px 1px #15b8e6;
        }
    }
</style>