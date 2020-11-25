<template>
    <div class="screen2_container">
        <div class="wrapper">
            <div class="flex2 con1">
                <p>{{data.num}}</p>
                <span>条</span>
            </div>
            <span class="con2">{{data.name}}</span>
        </div>   
    </div>
</template>

<script>
export default {
    props: ['data']

}
</script>

<style lang="scss" scoped>
    .screen2_container{
        width: 5rem;
        height: 1.5rem;
        background: url('../../images/screen/大图4psd_03.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .wrapper{
            width: 74%;
            margin-left: .6rem;
            .con1{
                color: #05e5f2;
                p{
                    font-size: 20px;
                    font-weight: bold;
                }
                span{
                    font-size: 10px;
                    font-weight: bold;
                    margin-left: .1rem;
                }
            }
            .con2{
                color: #ffffff;
            }
        }
    }
</style>    