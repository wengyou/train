

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
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            // name: 'iphoneX',
            type: 'map',
            mapType: '湖北',
            roam: false,
            zoom: 1.2,  
            itemStyle:{
                normal:{
                    label:{show:true},
                    borderColor: "#c8e3ff",
                    areaColor:'#ddf6fd',
                    borderWidth: 2,
                },
                emphasis:{
                    label:{show:true},
                    areaColor: '#3aabe7'
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
                                </div>`
                    } else if(params.name === '黄石市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：321</p>
                                </div>`
                    }else if(params.name === '十堰市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：231</p>
                                </div>`
                    }else if(params.name === '宜昌市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：345</p>
                                </div>`
                    }else if(params.name === '襄阳市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：237</p>
                                </div>`
                    }else if(params.name === '荆州市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：432</p>
                                </div>`
                    }else if(params.name === '荆门市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：354</p>
                                </div>`
                    }else if(params.name === '黄冈市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：565</p>
                                </div>`
                    }else if(params.name === '咸宁市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：432</p>
                                </div>`
                    }else if(params.name === '随州市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：351</p>
                                </div>`
                    }else if(params.name === '恩施土家族苗族自治州') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：247</p>
                                </div>`
                    }else if(params.name === '仙桃市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：128</p>
                                </div>`
                    }else if(params.name === '潜江市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：172</p>
                                </div>`
                    }else if(params.name === '天门市') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：165</p>
                                </div>`
                    }else if(params.name === '神农架林区') {
                        return `<div>
                                    <p>${params.name}</p>
                                    <p>总巡河次数：132</p>
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
                    color: '#000',//每个区域文字颜色
                    fontSize:'16px',
                },

            },
        }
    ]
  };