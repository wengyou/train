<template>
    <div class="part_container">
        <p>行政分区：</p>
        <div class="flex2 wrapper">
            <div v-for="item in area" :key="item" class="item">
                <el-button size="mini">{{item}}</el-button>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            area: [
                '全部',
                '武汉市', 
                '黄冈市', 
                '十堰市', 
                '襄阳市', 
                '鄂州市', 
                '荆州市', 
                '荆门市', 
                '黄冈市', 
                '咸宁市', 
                '孝感市', 
                '随州市', 
                '恩施州', 
                '潜江市', 
                '天门市',
                '仙桃市', 
                '襄阳市', 
                '神农架林',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .part_container{
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        align-items: center;
        p{
            width: 60px;
        }
        .wrapper{
            width: 90%;
            font-size: 12px;
            flex-wrap: wrap;
            .item{
                margin-left: 4px;
                margin-top: 4px;
            }
        }
    }
</style>