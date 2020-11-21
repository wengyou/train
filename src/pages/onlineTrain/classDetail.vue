<template>
    <div class="classCenter_container">
        <Header />
        <CurrentLocation />
        <div class="content">
            <div class="className">
                <img class="img1" src="../../images/classCenter/u35.png" alt="">
                <ul class="className_wrapper">
                    <h4>课程名称：河湖“清四乱”的必学并用之策</h4>
                    <li>讲师：金伟</li>
                    <li>时长：29分钟</li>
                    <li>学习人数：1375</li>
                    <li>发布时间：2020-09-22</li>
                    <li>
                        课程评分：
                        <i class="el-icon-star-on" style="color: #ffb55e; font-size: 20px"></i>
                        <i class="el-icon-star-on" style="color: #ffb55e; font-size: 20px"></i>
                        <i class="el-icon-star-on" style="color: #ffb55e; font-size: 20px"></i>
                        <i class="el-icon-star-on" style="color: #ffb55e; font-size: 20px"></i>
                        <i class="el-icon-star-on" style="color: #ffb55e; font-size: 20px"></i>
                    </li>
                    <el-button @click="toStartStudy" type="primary" size="small" style="margin-top: 10px">开始学习</el-button>
                </ul>
            </div>
            <div class="wrapper">
                <div class="classes">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="课程简介" name="first">
                        <div class="classes_wrapper">
                            <p>
                                今年初，水利部已专项部署推进河湖“清四乱”规范化、常态化工作，
                                明确属地责任，并将每一个“四乱”问题清理责任与河湖长清晰对接，迫切
                                需要各级河湖长及联系部门勇于担责，善于履职。
                            </p>
                            <p>
                                目前，河湖“清四乱”行动虽已取得阶段性成效，但侵占河湖、破坏生
                                态等问题积弊深重，清“四乱”工作任重道远。每一个“四乱”问题的背后，
                                实质都是违法。而违法问题只有用法治利剑才能断得彻底，清理得到位。
                            </p>
                            <p>
                                如何用法治思维和法治方式来处置“四乱”？这是各级河湖长、河湖长
                                联系部门和负有河湖执法管理职责的同志们一直苦苦探索的问题。
                            </p>
                            <p>
                                本次课程紧紧围绕“依法严惩河湖‘四乱’”这一核心，主要讲授了四
                                个方面内容。一是详尽阐明了打击“四乱”的主要执法依据；二是从检察院
                                公益诉讼角度领会“清四乱”的履职标准；三是彻底清除“四乱”恢复河湖
                                生态的强制执行程序和操作步骤；四是避免“清四乱”乱作为的规范文明执
                                法要求。
                            </p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="评价区" name="second">
                        <div class="evaluate_wrapper">
                            <div v-for="(item,index) in evaluateData" :key="index">
                                 <Evaluate :name="item.name" />
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
                </div>
                <div class="teacher">
                    <div class="title">
                        <p>
                            讲师简介
                        </p>
                    </div>
                    <div class="introduction">
                        <img src="../../images/classDetail/u604.png" alt="">
                        <span>
                            {{teacherIntroduction}}
                        </span>
                    </div>
                    <div class="title_intro">评价</div>
                    <div class="title_score">
                        <p>给该课程打分：</p>
                        <el-rate v-model="value1" @change="visible"></el-rate>
                    </div>
                    <div v-if="markVisible" style="margin-top: 10px">
                        <p style="text-indent: 10px; line-henght: 30px">备注：</p>
                        <el-input
                        style="margin-left: 10px; width: 90%; margin-top: 6px"
                        type="textarea"
                        :rows="3"
                        v-model="textarea">
                        </el-input>
                    </div>
                    <div class="btn">
                        <el-button size="mini">取消</el-button>
                        <el-button 
                            type="primary" 
                            size="mini" 
                            @click="submit"
                            style="margin-right: 10px; color: #ffffff">
                            提交
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <FooterReturn /> -->
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import Evaluate from '../../components/evaluate.vue'
// import FooterReturn from '../../components/footerReturn.vue'
export default {
    name: 'classCenter',
    components: {
        Header,
        CurrentLocation,
        Evaluate,
        // FooterReturn
    },
    data() {
      return {
        evaluateData: [{
            name: '李维来',
        },{
            name: '胡冰',
        },{
            name: '秦昊',
        },{
            name: '郑清',
        }],
        activeName: 'first',
        value1: null,
        markVisible: false,
        teacherIntroduction:"1979年12月出生，湖北武汉人，法学学士、公共管理硕士，2002年7月参加工作，现任湖北省水利厅四级调研员，兼任厅法律顾问、公职律师，湖北省人民检察院民事行政诉讼监督案件专家委员会委员，湖北法院环境资源及公益诉讼审判咨询专家。从事多年水行政执法、行政立法、合法性审核工作，对行政处罚、行政强制理论、实务及涉水行政诉讼案例研究颇深，经验丰富。曾牵头制定全省水行政执法文书格式文本、全省水政监察制度、水行政执法三维教学片等重要制度、规范、教学片，参与出台《湖北省河道采砂管理条例》，在《法治政府》、《湖北水利》等刊物发表多篇文章，积极推动了我省水利法治工作。"
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toStartStudy() {
          this.$router.push({path: '/startStudy'})
      },
      visible() {
          this.markVisible = true;
      },
      submit() {
          this.markVisible = false;
          this.value1 = null
      }
    }
}
</script>

<style lang="scss" scope>
    .classCenter_container{
        .content{
            width: 70vw;
            margin: 20px auto;
            .className{
                display: flex;
                height: 250px;
                background-color: #ffffff;
                .img1{
                    width: 300px;
                    height: 200px;
                    margin: auto 0;
                    padding-left: 30px;
                }
                .className_wrapper{
                    display: flex;
                    flex-direction: column;
                    font-size: 12px;
                    margin: auto 0;
                    margin-left: 30px;
                    li{
                        margin-top: 10px;
                    }
                    h4{
                        font-weight: bold;
                    }
                }
            }
            .wrapper{
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-top: 20px;
                .classes{
                    width: 48%;
                    height: 480px;
                    background-color: #ffffff;
                    font-size: 12px;
                    #tab-first{
                        text-indent: 1em;
                    }
                    .classes_wrapper{
                        width: 80%;
                        margin: 0 auto;
                        p{
                            margin-top: 10px;
                            text-indent: 2em;
                        }
                    }
                    
                }
                .teacher{
                    width: 48%;
                    height: 480px;
                    background-color: #ffffff;
                    font-size: 12px;
                    .title{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        border-bottom: 2px solid #dddddd;
                        text-indent: 10px;
                        p{
                            font-weight: bold;
                        }
                    }
                    .introduction{
                        display: flex;
                        margin-top: 10px;
                        border-bottom: 2px solid #dddddd;
                        img{
                            width: 80px;
                            height: 120px;
                            margin-left: 10px;
                        }
                        span{
                            display: inline;
                            padding-left: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                        }
                    }
                    .title_intro{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        text-indent: 10px;
                        font-weight: bold;
                    }
                    .title_score{
                        width: 90%;
                        height: 20px;
                        line-height: 20px;
                        text-indent: 10px;
                        display: flex;
                    }
                    .btn{
                        width: 100%;
                        height: 60px;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                    }
                }
            }
        }
    }
</style>