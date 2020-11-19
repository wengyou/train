<template>
      <div class="roadnum-all" ref="roadnumall">
        <div id="roadnum" ref="dom"></div>
    </div>
</template>

import echarts from 'echarts'    

export default {
  name: "ltzzt",
  data() {
    return {
      data: [],
      dom: null
    }
  },
  mounted() {
    this.$nextTick(() => {   
      document.getElementById('roadnum').style.width = this.$refs.roadnumall.offsetWidth + 'px';
      document.getElementById('roadnum').style.height = this.$refs.roadnumall.offsetHeight + 'px';
      this.draw();
    })
  },
  methods: {
    // 画图
    draw() {
      // 网络请求 假装从后端拿回来的数据
      this.data = [
        { name: '京哈高速', value: 10 },
      ];
      // 拼轴显示和数据的数组
      let xAxisText = [];
      let dataList = [];
      this.data.forEach(item => {
        xAxisText.push(item.name);
        dataList.push(item.value)
      })
      var MyCubeRect = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 180,   
          zWidth: 8,   
          zHeight: 4      
        },
        buildPath: function (ctx, shape) {
          console.log(ctx, shape);
          const api = shape.api;
          const xAxisPoint = api.coord([shape.xValue, 0]);
          const p0 = [shape.x, shape.y];
          const p1 = [shape.x - shape.width / xAxisText.length, shape.y];
          const p4 = [shape.x + shape.width / xAxisText.length, shape.y];
          const p2 = [xAxisPoint[0] - shape.width / xAxisText.length, xAxisPoint[1]];
          const p3 = [xAxisPoint[0] + shape.width / xAxisText.length, xAxisPoint[1]];

          ctx.moveTo(p0[0], p0[1]); //0
          ctx.lineTo(p1[0], p1[1]); //1
          ctx.lineTo(p2[0], p2[1]); //2
          ctx.lineTo(p3[0], p3[1]); //3
          ctx.lineTo(p4[0], p4[1]); //4
          ctx.lineTo(p0[0], p0[1]); //0
          ctx.closePath();
        }
      })

      var MyCubeShadow = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 180,
          zWidth: 8,
          zHeight: 4
        },
        buildPath: function (ctx, shape) {
          const api = shape.api;
          const xAxisPoint = api.coord([shape.xValue, 0]);
          const p0 = [shape.x, shape.y];
          const p1 = [shape.x - shape.width / xAxisText.length, shape.y];
          const p4 = [shape.x + shape.width / xAxisText.length, shape.y];
          const p6 = [shape.x + shape.width / xAxisText.length + shape.zWidth, shape.y - shape.zHeight];
          const p7 = [shape.x - shape.width / xAxisText.length + shape.zWidth, shape.y - shape.zHeight];
          const p3 = [xAxisPoint[0] + shape.width / xAxisText.length, xAxisPoint[1]];
          const p5 = [xAxisPoint[0] + shape.width / xAxisText.length + shape.zWidth, xAxisPoint[1] - shape.zHeight];

          ctx.moveTo(p4[0], p4[1]); //4
          ctx.lineTo(p3[0], p3[1]); //3
          ctx.lineTo(p5[0], p5[1]); //5
          ctx.lineTo(p6[0], p6[1]); //6
          ctx.lineTo(p4[0], p4[1]); //4

          ctx.moveTo(p4[0], p4[1]); //4
          ctx.lineTo(p6[0], p6[1]); //6
          ctx.lineTo(p7[0], p7[1]); //7
          ctx.lineTo(p1[0], p1[1]); //1
          ctx.lineTo(p4[0], p4[1]); //4
          ctx.closePath();
        }
      });
      echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
      echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
      const option = {
        color: ['#33b56a', '#fdcf5c', '#4c90ff', '#fe7b7a', '#69ccf6', '#a38bf8', '#ff9561', '#8cb0ea', '#fe81b4', '#ffb258'],
        title: {
          text: '验算路线排行榜',
          left: 20,
          top: 20
        },
        legend: {
          show: true,
          top: 25
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '15%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xAxisText,
          boundaryGap: true,
          interval: 0,
          axisLabel: {
            color: '#333',
    
            interval: 0,
            formatter: function (value) {
              return value.split('').join('\n')
            }
          }
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
        },
        series: [{
          name: '次数',
          type: 'custom',
          renderItem: (params, api) => {
            let location = api.coord([api.value(0), api.value(1)]);
            return {
              type: 'group',
              children: [{
                type: 'MyCubeRect',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1]
                },
                style: api.style(),     
              }, {
                type: 'MyCubeShadow',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1]
                },
                style: {
                  fill: api.style(),
                  text: ''            
                }
              }]
            }
          },
          stack: '总量',
          label: {
            show: true,
            position: 'top',
            color: '#333',
            formatter: `{c}次`,
            fontSize: 16,
            distance: 15
          },
          itemStyle: {
            normal: {
              color: '#ffffff'
              }
            }
          },
          data: dataList
        }]
      };
      this.dom = echarts.init(this.$refs.dom);
      this.dom.setOption(option, true)
      window.addEventListener("resize", () => {
        if (document.getElementById('roadnum') && this.$refs.roadnumall) {
          document.getElementById('roadnum').removeAttribute('_echarts_instance_');
          document.getElementById('roadnum').style.width = this.$refs.roadnumall.offsetWidth + 'px';
          document.getElementById('roadnum').style.height = this.$refs.roadnumall.offsetHeight + 'px';
          this.dom.resize();
        }
      });
    }
  }
}

<style>
    .roadnum-all {
        width: 100%;
        height: 100%;      /*填满父级容器*/
    }
</style>