

export default {
    // title : {
    //     text: '订阅我博客的人群分布',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    tooltip : {
        trigger: 'item'
    },
    
    roamController: {
        show: true,
        // x: 'right',
        mapTypeControl: {
            'hubei': true
        }
    },
    geo: {
        show: true,
        map: '湖北',
        type: 'map',
        label: {
            show: false
        },
        roam: false,
        zoom: 1.2,
        itemStyle: {
            normal: {//地图背景色
                // areaColor: '#034DE4',
                // opacity: 0.5,
                borderColor: "#4edeff",
                borderWidth: 12,                    
            },
            emphasis: {//鼠标放上去区域背景色
                // areaColor: "#034DE4",
                // opacity: 0.5
            }
        },
    },
    series : [
        {
            // name: 'iphoneX',
            type: 'map',
            mapType: '湖北',
            roam: false,
            // layoutSize: 200,
            zoom: 1.2,  
            // coordinateSystem: 'geo',
            itemStyle:{
                normal:{
                    label:{show:true},
                    borderColor: "#048be9",
                    // areaColor:'#144edd',
                    borderWidth: 3,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)'
                    areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#0d40b5' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2376df' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                emphasis:{
                    label:{show:true},
                    areaColor: '#ebbd08'
                }
            },
            // 提示框，鼠标移入
            tooltip:{
                show:true, //鼠标移入是否触发数据
                trigger: 'item', //出发方式
                formatter: function(params) {
                    // let res = '';
                    if(params.name === '武汉市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：234</p>
                                    <p>发现问题：126</p>
                                    <p>已处理：107</p>
                                    <p>处理率：85%</p>
                                </div>`
                    } else if(params.name === '黄石市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：321</p>
                                    <p>发现问题：125</p>
                                    <p>已处理：109</p>
                                    <p>处理率：87%</p>
                                </div>`
                    }else if(params.name === '十堰市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：231</p>
                                    <p>发现问题：158</p>
                                    <p>已处理：92</p>
                                    <p>处理率：58%</p>
                                </div>`
                    }else if(params.name === '宜昌市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：345</p>
                                    <p>发现问题：128</p>
                                    <p>已处理：97</p>
                                    <p>处理率：76%</p>
                                </div>`
                    }else if(params.name === '襄阳市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：237</p>
                                    <p>发现问题：144</p>
                                    <p>已处理：81</p>
                                    <p>处理率：56%</p>
                                </div>`
                    }else if(params.name === '荆州市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：432</p>
                                    <p>发现问题：237</p>
                                    <p>已处理：85</p>
                                    <p>处理率：36%</p>
                                </div>`
                    }else if(params.name === '荆门市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：354</p>
                                    <p>发现问题：239</p>
                                    <p>已处理：85</p>
                                    <p>处理率：36%</p>
                                </div>`
                    }else if(params.name === '黄冈市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：565</p>
                                    <p>发现问题：278</p>
                                    <p>已处理：86</p>
                                    <p>处理率：31%</p>
                                </div>`
                    }else if(params.name === '咸宁市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：432</p>
                                    <p>发现问题：282</p>
                                    <p>已处理：99</p>
                                    <p>处理率：35%</p>
                                </div>`
                    }else if(params.name === '随州市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：351</p>
                                    <p>发现问题：284</p>
                                    <p>已处理：129</p>
                                    <p>处理率：45%</p>
                                </div>`
                    }else if(params.name === '恩施土家族苗族自治州') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：247</p>
                                    <p>发现问题：115</p>
                                    <p>已处理：108</p>
                                    <p>处理率：94%</p>
                                </div>`
                    }else if(params.name === '仙桃市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：128</p>
                                    <p>发现问题：114</p>
                                    <p>已处理：103</p>
                                    <p>处理率：90%</p>
                                </div>`
                    }else if(params.name === '潜江市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：172</p>
                                    <p>发现问题：100</p>
                                    <p>已处理：84</p>
                                    <p>处理率：84%</p>
                                </div>`
                    }else if(params.name === '天门市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：165</p>
                                    <p>发现问题：113</p>
                                    <p>已处理：110</p>
                                    <p>处理率：97%</p>
                                </div>`
                    }else if(params.name === '神农架林区') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：132</p>
                                    <p>发现问题：133</p>
                                    <p>已处理：80</p>
                                    <p>处理率：60%</p>
                                </div>`
                    }
                },
                backgroundColor: '#17a3ea',
                // borderWidth: 2,
                extraCssText: 'box-shadow: 0 0 33px #17a3ea; border-radio: 10px'
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },

            },
        }
    ]
  };