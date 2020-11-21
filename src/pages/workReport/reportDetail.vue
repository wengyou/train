<template>
    <div class="reportDetail_container">
        <header>上报任务详情</header>
        <div class="info">任务信息</div>
        <div class="wrapper">
            <div>
                <span>任务名称：</span>
                <span>河长巡河月报</span>
            </div>
            <div style="display: flex">
                <span>上报要求：</span>
                <span class="con">上报要求详情上报要求详情上报要求详情上报要求详情上报要求详情上报要求详情上报要求详情上报要求详情上报要求详情</span>
            </div>
            <div style="display: flex">
                <span>附件：</span>
                <div>
                    <el-button icon="el-icon-download" style="width: 600px" size="mini">漳河水库水利风景区.doc</el-button>
                    <div></div>
                    <el-button icon="el-icon-download" style="width: 600px" size="mini">漳河水库水利风景区.doc</el-button>
                </div>
            </div>
            <el-button icon="el-icon-download" size="small" type="primary">全部下载</el-button>
            <div style="margin-top:20px">
                <span>截止日期：</span>
                <span>2020-09-06</span>
            </div>
            <div style="width: 60vw; display: flex;justify-content: center; ">
                <el-button icon="el-icon-back" type="primary" size="mini" @click="toBack()" style="margin: 0 auto">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scope>
    .reportDetail_container{
        header{
            width: 100%;
            height: 70px;
            background-image: linear-gradient(to right, #0890f2 , #1b49d6);
            text-align: center;
            line-height: 70px;
            color: #ffffff;
            font-weight: bold;
            font-size: 20px;
        }
        .info{
            width: 98%;
            height: 40px;
            background: #e2f3ff;
            margin: 10px auto;
            line-height: 40px;
            text-indent: 1em;
        }
        .wrapper{
            width: 60vw;
            margin: 10px auto;
            div{
                margin-bottom: 20px;
            }
            .con{
                display: block;
                width: 600px;
                height: 60px;
            }
        }
    }
</style>