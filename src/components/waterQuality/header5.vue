<template>
    <div class="header5_container">
        <el-input
            placeholder="请输入河湖名、监测断面名称"
            size="mini"
            prefix-icon="el-icon-search"
            style="width: 16vw"
            v-model="input2">
        </el-input>
        <div class="wrapper flex2">
            <p>达标情况：</p>
            <el-select size="mini" v-model="value1" placeholder="全部">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="wrapper flex2">
            <p>考核目标：</p>
            <el-select size="mini" v-model="value2" placeholder="全部">
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="wrapper flex2">
            <p>水质监测结果：</p>
            <el-select size="mini" v-model="value3" placeholder="全部">
                <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="wrapper flex2">
            <p>水质同比情况：</p>
            <el-select size="mini" v-model="value4" placeholder="全部">
                <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="wrapper flex2">
            <p>水质环比情况：</p>
            <el-select size="mini" v-model="value5" placeholder="全部">
                <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        value1: '',
        value3: '',
        value2: '',
        value4: '',
        value5: '',
        options1: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '达标'
        }, {
          value: '选项3',
          label: '不达标'
        }],
        options2: [{
          value: '选项1',
          label: 'Ⅰ'
        }, {
          value: '选项2',
          label: 'Ⅱ'
        }, {
          value: '选项3',
          label: 'Ⅲ'
        }, {
          value: '选项4',
          label: 'Ⅳ'
        }],
        options3: [{
          value: '选项1',
          label: 'Ⅰ'
        }, {
          value: '选项2',
          label: 'Ⅱ'
        }, {
          value: '选项3',
          label: 'Ⅲ'
        }, {
          value: '选项4',
          label: 'Ⅳ'
        }],
        options4: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '持平'
        }, {
          value: '选项3',
          label: '改善'
        }, {
          value: '选项4',
          label: '下降'
        }],
        options5: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '持平'
        }, {
          value: '选项3',
          label: '改善'
        }, {
          value: '选项4',
          label: '下降'
        }],
      }
    }
}
</script>

<style lang="scss" scoped>
    .header5_container{
        display: flex;
        width: 100%;
        .wrapper{
            font-size: 12px;
            margin-left: 1vw;
            p{
                width: 7vw;
            }
        }
    }
</style>>