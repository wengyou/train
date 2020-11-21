<template>
    <div class="water4_container">
        <Header />
        <current-location></current-location>
        <div>
            <el-container style="height: 500px; border: 1px solid #eee">
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1">
                            <!-- <el-menu-item index="1-1">水质水量初始数据录入</el-menu-item>
                            <el-menu-item index="1-2">水质水量整编数据管理</el-menu-item> -->
                            <el-menu-item index="1-3" @click="toItem3">水质水量月报管理</el-menu-item>
                            <el-menu-item index="1-4" @click="toItem4">多年平均水量数据管理</el-menu-item>
                            <el-menu-item index="1-5" @click="toItem5">多年平均降水量数据管理</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                
                <el-container v-if="item5">
                    <el-header>
                        <div style="margin-top: 20px">
                            <Header1 />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh">
                        <Table2 />
                    </el-main>
                </el-container>

                <el-container v-if="item4">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="河流多年平均水量" name="first">
                            <div class="toLeft">
                                <Header1 />
                                <Table2 class="toTop" />
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="湖泊多年平均水量" name="second">配置管理</el-tab-pane>
                    </el-tabs>
                </el-container>
                
                <el-container v-if="item3">
                    <el-header>
                        <div style="margin-top: 20px">
                            <Header2 />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh">
                        <Table6 />
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import Header1 from '../../components/waterQuality/header1.vue'
import Header2 from '../../components/waterQuality/header2.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Table2 from '../../components/waterQuality/table2.vue'
import Table6 from '../../components/waterQuality/table6.vue'
export default {
    name: 'water4',
    components: {
        Header,
        CurrentLocation,
        Header1,
        Table2,
        Header2,
        Table6
    },
    data() {
        return {
            // item1: false,
            // item2: false,
            item3: true,
            item4: false,
            item5: false,
            activeName: 'first'
        }
       
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        toItem5() {
            this.item5 = true;
            this.item3 = false;
            this.item4 = false;
        },
        toItem4() {
            this.item3 = false;
            this.item5 = false;
            this.item4 = true;
        },
        toItem3() {
            this.item4 = false;
            this.item5 = false;
            this.item3 = true;
        },
    }
}
</script>

<style lang="scss" scope>
    .water4_container{
        
    }
</style>