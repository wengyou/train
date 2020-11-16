<template>
    <div class="footerReturn_container">
        <el-button 
            size="mini"
            @click="toStartStudy"
        >
            关闭
        </el-button>
    </div>
</template>

<script>
export default {
    methods: {
      toStartStudy() {
          this.$router.go(-1)
      }
    }
}
</script>

<style>
    .footerReturn_container{
        background-color: #f0f0f0;
        width: 65vw;
        margin: 20px auto;
        height: 50px;
        margin-top: 10px;
        margin-bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>