<template>
    <div class="quarter_container">
        <el-select v-model="value" placeholder="第一季度" size="mini" style="width: 100px">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '第一季度'
                }, {
                value: '选项2',
                label: '第二季度'
                }, {
                value: '选项3',
                label: '第三季度'
                }, {
                value: '选项4',
                label: '第四季度'
                }],
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .quarter_container{
        
    }
</style>>