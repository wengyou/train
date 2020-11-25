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
                            <el-menu-item index="1-1" @click="toItem1">水质水量月报管理</el-menu-item>
                            <el-menu-item index="1-2" @click="toItem2">水质水量月报查看</el-menu-item>
                            <el-menu-item index="1-3" @click="toItem3">多年平均水量数据管理</el-menu-item>
                            <el-menu-item index="1-4" @click="toItem4">多年平均降水量数据管理</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                
                <el-container v-if="item4">
                    <el-header>
                        <div style="margin-top: 20px">
                            <Header1 />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh">
                        <Table2 />
                    </el-main>
                </el-container>

                <el-container v-if="item3">
                    <el-tabs style="width: 96%; margin: 0 auto"  v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="河流多年平均水量" name="first">
                            <div>
                                <Header1 />
                                <Table11 class="toTop" />
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="湖泊多年平均水量" name="second">
                            <div>
                                <Header1 />
                                <Table11 class="toTop" />
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-container>

                <el-container v-if="item2">
                    <el-header>
                        <div style="margin-top: 20px">
                            <Header2 />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh">
                        <Table9 />
                    </el-main>
                </el-container>
                
                <el-container v-if="item1">
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
import Table9 from '../../components/waterQuality/table9.vue'
import Table11 from '../../components/waterQuality/table11.vue'
export default {
    name: 'water4',
    components: {
        Header,
        CurrentLocation,
        Header1,
        Table2,
        Header2,
        Table6,
        Table9,
        Table11,
    },
    data() {
        return {
            // item1: false,
            // item2: false,
            item1: true,
            item2: false,
            item3: false,
            item4: false,
            activeName: 'first'
        }
       
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        toItem4() {
            this.item4 = true;
            this.item1 = false;
            this.item3 = false;
            this.item2 = false;
        },
        toItem3() {
            this.item1 = false;
            this.item4 = false;
            this.item3 = true;
            this.item2 = false;
        },
        toItem1() {
            this.item3 = false;
            this.item4 = false;
            this.item1 = true;
            this.item2 = false;
        },
        toItem2() {
            this.item3 = false;
            this.item4 = false;
            this.item1 = false;
            this.item2 = true;
        },
    }
}
</script>

<style lang="scss" scope>
    .water4_container{
        
    }
</style>