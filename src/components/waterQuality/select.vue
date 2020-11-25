<template>
    <div class='flex2 toLeft' style="font-size:12px;">
        <p style="min-width: 3vw">{{title}}：</p>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '水域类型'">
            <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '功能类型'">
            <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '隶属行业单位'">
            <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '信息管理单位'">
            <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '监控级别'">
            <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '测站等级' ">
            <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '年份' ">
            <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '月份' ">
            <el-option
                v-for="item in options6"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '时间选择' ">
            <el-option
                v-for="item in options7"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '考核方案选择' ">
            <el-option
                v-for="item in options8"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '状态' ">
            <el-option
                v-for="item in options9"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value" size="mini" :placeholder="con" v-if="title === '周期' ">
            <el-option
                v-for="item in options10"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>   
</template>

<script>
export default {
  props: ["title", "con", "options"],
    data() {
      return {
        value: '',
        options1: [{
              value: '选项1',
              label: '全部'
          },{
              value: '选项2',
              label: '江河'
          },{
              value: '选项3',
              label: '湖泊'
          },{
              value: '选项4',
              label: '水库'
          },{
              value: '选项5',
              label: '其他'
          }],
          options2: [{
              value: '选项1',
              label: '全部'
          },{
              value: '选项2',
              label: '武汉市'
          },{
              value: '选项3',
              label: '黄石市'
          },{
              value: '选项4',
              label: '十堰市'
          },{
              value: '选项5',
              label: '宜昌市'
          },{
              value: '选项6',
              label: '襄阳市'
          },{
              value: '选项7',
              label: '鄂州市'
          },{
              value: '选项8',
              label: '荆门市'
          },{
              value: '选项9',
              label: '孝感市'
          },{
              value: '选项10',
              label: '荆州市'
          },{
              value: '选项11',
              label: '黄冈市'
          },{
              value: '选项12',
              label: '咸宁市'
          },{
              value: '选项13',
              label: '随州市'
          },{
              value: '选项14',
              label: '恩施土家族苗族自治州'
          },{
              value: '选项15',
              label: '仙桃市'
          },{
              value: '选项16',
              label: '潜江市'
          },{
              value: '选项17',
              label: '天门市'
          },{
              value: '选项18',
              label: '神农架林区'
          },],
          options3: [{
              value: '选项1',
              label: '全部'
          },{
              value: '选项2',
              label: '国控'
          },{
              value: '选项3',
              label: '省控'
          },{
              value: '选项4',
              label: '地市级'
          },{
              value: '选项5',
              label: '县市级'
          },],
          options4: [{
              value: '选项0',
              label: '全部'
          },{
              value: '选项1',
              label: '省级'
          },{
              value: '选项2',
              label: '国家级重点'
          },{
              value: '选项3',
              label: '水功能区站'
          },{
              value: '选项4',
              label: '国家级一般'
          },{
              value: '选项5',
              label: '地市级'
          }],
          options5: [{
              value: '选项1',
              label: '2020年'
          },{
              value: '选项2',
              label: '2019年'
          }],
          options6: [{
              value: '选项1',
              label: '1月'
          },{
              value: '选项2',
              label: '2月'
          },{
              value: '选项3',
              label: '3月'
          },{
              value: '选项4',
              label: '4月'
          },{
              value: '选项5',
              label: '5月'
          },{
              value: '选项1',
              label: '6月'
          },{
              value: '选项2',
              label: '7月'
          },{
              value: '选项3',
              label: '8月'
          },{
              value: '选项4',
              label: '9月'
          },{
              value: '选项5',
              label: '10月'
          },{
              value: '选项4',
              label: '11月'
          },{
              value: '选项5',
              label: '12月'
          },],
          options7: [{
              value: '选项1',
              label: '2020年'
          },{
              value: '选项2',
              label: '2019年'
          },{
              value: '选项3',
              label: '2018年'
          }],
          options8: [{
              value: '选项1',
              label: '加载我被考核的方案名称'
          },{
              value: '选项2',
              label: '2020年考核方案'
          },{
              value: '选项3',
              label: '2020年第三季度考核方案'
          }],
          options9: [{
              value: '选项1',
              label: '已完成'
          },{
              value: '选项2',
              label: '未完成'
          }],
          options10: [{
              value: '选项1',
              label: '年度考核'
          },],
      }
    }
}
</script>

<style>

</style>