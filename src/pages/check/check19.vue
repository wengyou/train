<template>
    <div class="check19_container">
        <Header :con="headCon" />
        <div class="wrapper">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="考核总分" prop="name">
                    <el-input-number size="mini" v-model="num1" :min="1" label="100"></el-input-number>
                </el-form-item>
                <el-form-item label="考核达标分" prop="name">
                    <el-input-number size="mini" v-model="num2" :min="1" label="60"></el-input-number>
                </el-form-item>
                <el-form-item label="考核等级" prop="name">
                    <div class="item_wrapper" v-for="item in arr" :key="item">
                        <el-input size="mini" style="width: 3rem" v-model="input" placeholder="优秀"></el-input>
                        <el-select style="width: 3rem" class="toLeft" size="mini" v-model="value" placeholder="大于">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input-number class="toLeft" size="mini" v-model="num3" :min="1" label="90"></el-input-number>
                        <el-button class="toLeft" v-if="item > 0" icon="el-icon-delete" size="mini" @click="deleteItem(item)">删除</el-button>
                    </div>
                    <el-button type="primary" size="mini" @click="addItem">+新增</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import Header from '../../components/waterQuality/header.vue'
export default {
    name: 'check19',
    components: {
        Header,
    },
    data() {
        return{
            headCon:'考核等级设置',
            num1: 100,
            num2: 60,
            num3: 90,
            options: [{
                value: '选项1',
                label: '大于'
                }, {
                value: '选项2',
                label: '大于等于'
                },],
            value: '',
            arr: [0]
        }
    },
    methods: {
        addItem() {
            this.arr.push(this.arr[this.arr.length-1] + 1);
        },
        deleteItem(item) {
            this.arr.splice(item,1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .check19_container{
        width: 60vw;
        height: 92vh;
        margin: 0 auto;
        background: #ffffff;
        .wrapper{
            width: 60%;
            margin: 0 auto;
            .item_wrapper{
                display: flex;
                align-items: center;
            }
        }
    }
</style>