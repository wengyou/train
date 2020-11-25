<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="num"
      width="70"
      label="序号">
    </el-table-column>
    <el-table-column
      prop="title1"
      width="150"
      label="河湖名">
    </el-table-column>
    <el-table-column label="1-7月份累计均值水质评价">
      <el-table-column
        prop="title2"
        label="不达标国控断面">
      </el-table-column>
      <el-table-column 
        prop="title3"
        width="80"
        label="考核市州">
      </el-table-column>
    </el-table-column>
    <el-table-column label="1-6月份累计均值水质评价">
      <el-table-column
        prop="title4"
        label="不达标国控断面">
      </el-table-column>
      <el-table-column 
        prop="title5"
        width="80"
        label="考核市州">
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
            num: 1,
            title1:'长江（湖北境内）',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 2,
            title1:'汉江（湖北境内）',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 3,
            title1:'东荆河',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 4,
            title1:'府漳河',
            title2:'孝感市界孝昌王店',
            title3:'随州',
            title4:'孝感市界孝昌王店',
            title5:'随州',
        },{
            num: 5,
            title1:'汉北河（含天门河）',
            title2:'天门河荆门-天门市界',
            title3:'荆门',
            title4:'天门河荆门-天门市界',
            title5:'荆门',
        },{
            num: 6,
            title1:'沮漳河',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 7,
            title1:'清江',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 8,
            title1:'富水',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 9,
            title1:'南河',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 10,
            title1:'陆水',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 11,
            title1:'通顺河',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 12,
            title1:'举水',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 13,
            title1:'洪湖',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 14,
            title1:'长湖',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 15,
            title1:'梁子湖',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 16,
            title1:'斧头湖',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 17,
            title1:'尤感湖',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        },{
            num: 18,
            title1:'长江（湖北境内）',
            title2:'无',
            title3:'/',
            title4:'无',
            title5:'/',
        }, ]
      }
    }
  }
</script>