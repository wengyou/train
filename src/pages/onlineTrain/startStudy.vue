<template>
    <div class="startStudy">
        <Header />
        <current-location></current-location>
        <div class="content">
            <div class="btn">开始学习</div>
            <!-- <img src="../../images/startStudy/vedio.png" alt=""> -->
            <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            ></video-player>
        </div>
        <footer-return></footer-return>
    </div>
</template>

<script>
import Header from '../../components/header.vue'
import CurrentLocation from '../../components/currentLocation.vue'
import FooterReturn from '../../components/footerReturn.vue'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    name: 'startStudy',
    components: {
        Header,
        CurrentLocation,
        FooterReturn,
        videoPlayer,
    },
    data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: 'https://www.sicau.edu.cn/__local/A/1E/52/E8093449CF93AF4E8960C131C04_09BD5DD1_1F12F030.mp4?e=.mp4', // 路径
            type: 'video/mp4' // 类型
          }
        ],
        poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3612873308,1721476889&fm=26&gp=0.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
}
</script>
<style lang="scss" scope>
    .startStudy{
        .content{
            width: 65vw;
            margin: 0 auto;
            background: #ffffff;
            height: 700px;
            .btn{
                width: 100%;
                height: 30px;
                background-image: linear-gradient(to right, #4f99fe , #0b68e2);
                line-height: 30px;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
            }
            img{
                display: block;
                width: 94%;
                margin: 14px auto;
            }
        }
    }
</style>