<template>
    <div class="siteInfo1_container">
        <Header />
        <current-location></current-location>
        <div>
            <el-container style="height: 500px; border: 1px solid #eee">
                <el-aside width="16vw" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1">
                            <el-menu-item index="1-1" @click="toItem1">水功能区基本信息</el-menu-item>
                            <el-menu-item index="1-2" @click="toItem2">地表水质监测站点信息</el-menu-item>
                            <el-menu-item index="1-3" @click="toItem3" >水文站基础信息</el-menu-item>
                            <el-menu-item index="1-4" @click="toItem3">河道监测断面基础信息</el-menu-item>
                            <el-menu-item index="1-5" @click="toItem5">库(湖)容曲线表</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                
                <el-container v-if="item1">
                    <el-header>
                        <div style="margin-top: 20px; width: 80vw">
                            <SiteHeader2 />
                            <PartArea />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh; margin-top:40px">
                        <SiteTable2 />
                    </el-main>
                </el-container>

                <el-container v-if="item2">
                    <el-header>
                        <div style="margin-top: 20px; width: 80vw">
                            <SiteHeader1 />
                            <PartArea />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh; margin-top:40px">
                        <SiteTable1 />
                    </el-main>
                </el-container>

                <el-container v-if="item3">
                    <el-header>
                        <div style="margin-top: 20px; width: 80vw">
                            <SiteHeader3 />
                            <PartArea />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh; margin-top:40px">
                        <SiteTable3 />
                    </el-main>
                </el-container>

                <el-container v-if="item5">
                    <el-header>
                        <div style="margin-top: 20px; width: 80vw">
                            <SiteHeader4 />
                            <PartArea />
                        </div>
                    </el-header>
                    <el-main style="min-height: 100vh; margin-top:40px">
                        <SiteTable4 />
                    </el-main>
                </el-container>

            </el-container>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import SiteHeader1 from '../../components/waterQuality/siteHeader1.vue'
import SiteHeader2 from '../../components/waterQuality/siteHeader2.vue'
import SiteHeader3 from '../../components/waterQuality/siteHeader3.vue'
import SiteHeader4 from '../../components/waterQuality/siteHeader4.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import SiteTable1 from '../../components/waterQuality/siteTable1.vue'
import SiteTable2 from '../../components/waterQuality/siteTable2.vue'
import SiteTable3 from '../../components/waterQuality/siteTable3.vue'
import SiteTable4 from '../../components/waterQuality/siteTable4.vue'
import PartArea from '../../components/waterQuality/partArea.vue'
export default {
    name: 'siteInfo1_container',
    components: {
        Header,
        CurrentLocation,
        SiteHeader1,
        SiteHeader2,
        SiteHeader3,
        SiteHeader4,
        SiteTable1,
        PartArea,
        SiteTable2,
        SiteTable3,
        SiteTable4,
    },
    data() {
        return {
            activeName: 'first',
            item1: true,
            item2: false,
            item3: false,
            item5: false,
        }
       
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        toItem1() {
            this.item1 = true;
            this.item2 = false;
            this.item3 = false;
            this.item5 = false;
        },
        toItem2() {
            this.item1 = false;
            this.item2 = true;
            this.item3 = false;
            this.item5 = false;
        },
        toItem3() {
            this.item1 = false;
            this.item2 = false;
            this.item3 = true;
            this.item5 = false;
        },
        toItem5() {
            this.item1 = false;
            this.item2 = false;
            this.item3 = false;
            this.item5 = true;
        },
    }
}
</script>

<style lang="scss" scope>
    .siteInfo1_container{
    }
</style>