<template>
    <div class="screen6_container">
        <div>{{data.num}}</div>
        <p>{{data.name}}</p>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .screen6_container{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 4px solid #15b8e6;
        box-shadow:inset 0px 0px 10px 1px #15b8e6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            width: 50%;
            height: 30%;
            color: #0fe7f1;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: .1rem;
        }
        p{
            width: 100%;
            height: 30%;
            color: #ffffff;
            text-align: center;
        }
    }
</style>