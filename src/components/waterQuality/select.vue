<template>
    <div class='flex2 toLeft' style="font-size:12px;">
        <span>{{title}}：</span>
        <el-select v-model="value" size="mini" :placeholder="con">
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
  props: ["title", "con"],
    data() {
      return {
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    }
}
</script>

<style>

</style>