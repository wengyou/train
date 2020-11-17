<template>
    <div class="header_container">
        <ul class="wrapper">
            <li>信息门户</li>
            <li>河湖动态</li>
            <li>信息填报</li>
            <li>智慧办公</li>
            <li>河湖巡查</li>
            <li>事件处理</li>
            <li>考核管理</li>
            <li>系统管理</li>
        </ul>
        <div class="user" @click="toRoute">超级管理员</div>
    </div>
</template>

<script>
export default {
    name: 'hedader',
    methods: {
        toRoute() {
            this.$router.replace('/route')
        }
    }
}
</script>

<style lang="scss" scoped>
    .header_container{
        width: 100%;
        height: 50px;
        background: url(../images/classCenter/u5.jpg) no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        .wrapper{
            width: 50%; 
            height: 100%;
            display: flex;
            font-size: 14px;
            justify-content: space-around;
            margin-left: 460px;
            line-height: 50px;
            color: #ffffff;
            font-weight: bold;
        }
        .user{
            line-height: 50px;
            color: #ffffff;
            font-weight: bold;
            margin-right: 20px;
            font-size: 12px;
        }
    }
</style>