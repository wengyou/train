<template>
    <div class="block1_container">
        <ul>
            <li></li>
            <p>{{data.title}}</p>
        </ul>
        <div class="wrapper">
            <div class="item">
                <h3>{{data.num1}}</h3>
                <p>达标</p>
            </div>
            <div class="item">
                <h3>{{data.num3}}</h3>
                <p>不达标</p>
            </div>
            <div class="item">
                <h3>{{data.num2}}</h3>
                <p>达标率</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
    .block1_container{
        min-width: 10vw;
        min-height: 58%;
        border: 1px solid #dddddd;
        box-shadow:0px 10px 4px -10px #000;
        ul{
            display: flex;
            align-items: center;
            margin-top: 1vh;
            li{
                width: 4px;
                height: 4px;
                background: #000;
                border-radius: 50%;
                margin: 0 6px;
            }
        }
        .wrapper{
            display: flex;
            margin-top: 1vh;
            .item{
                width: 45%;
                text-align: center;
                h3{
                    color: #5886e8;
                    font-weight: bold;
                }
                p{
                    line-height: 4vh;
                }
            }
        }
    }
</style>