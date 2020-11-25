var option = {
    title : {
        // text: '某站点用户访问来源',
        // subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
         // 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        x: '50px',
        // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        y: '50px',
        textStyle: {
            color: '#17efef'
        },
        // 重写legend显示样式
        formatter: function(name) {
              // 获取legend显示内容
              let data = option.series[0].data;
              let total = 0;
              let tarValue = 0;
              for (let i = 0, l = data.length; i < l; i++) {
                  total += data[i].value;
                  if (data[i].name == name) {
                      tarValue = data[i].value;
                  }
              }
              let p = (tarValue / total * 100).toFixed(2);
              return name + ' ' + ' ' + p + '%';
          },
        data: ['杂物漂浮','污水直排','水体异样','非法采砂','护岸损坏','侵占河道','非法捕鱼','其他']
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '55%',
            center: ['60%', '60%'],
            data:[
                {
                    value:13, 
                    name:'杂物漂浮',
                    itemStyle: {
                        normal:{
                           color: "#6a9aef"
                        }
                    },
                },{
                    value:5, 
                    name:'污水直排',
                    itemStyle: {
                        normal:{
                           color: "#a7c8fe"
                        }
                    },
                },{
                    value:12, 
                    name:'水体异样',
                    itemStyle: {
                        normal:{
                           color: "#339efc"
                        }
                    },
                },
                {
                    value:18,
                    name:'非法采砂',
                    itemStyle: {
                        normal:{
                           color: "#fbe8a4"
                        }
                    },
                },{
                    value:15, 
                    name:'护岸损坏',
                    itemStyle: {
                        normal:{
                           color: "#98f8f6"
                        }
                    },
                }, {
                    value:17, 
                    name:'侵占河道',
                    itemStyle: {
                        normal:{
                           color: "#3777e6"
                        }
                    },
                },{
                    value:13,
                    name:'非法捕鱼',
                    itemStyle: {
                        normal:{
                           color: "#6a9af0"
                        }
                    },
                },{
                    value:8, 
                    name:'其他',
                    itemStyle: {
                        normal:{
                           color: "#a6c9fe"
                        }
                    },
                },   
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
export default option;