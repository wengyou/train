<template>
    <div class="course_container">
        <img src="../images/classCenter/u35.png" alt="">
        <h5>河湖“清四乱”的必学并用之策</h5>
        <div class="wrapper">
            <span>29分钟</span>
            <p>必修课</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
    .course_container{
        width: 200px;
        height: 180px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 180px;
            height: 110px;
            margin: 6px auto;
        }
        h5{
            font-size: 10px;
            width: 180px;
            margin: 0 auto;
        }
        .wrapper{
            display: flex;
            width: 180px;
            margin: 0 auto;
            justify-content: space-between;
            font-size: 6px;
            margin-bottom: 6px;
            span{
                display: block;
                width: 50px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: #ffffff;
                background: #ff9c14;
                font-size: 6px;
            }
            p{
                color: #dddddd;
            }
        }
    }
</style>