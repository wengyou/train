export default {
    // title : {
    //     text: '订阅我博客的人群分布',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    tooltip : {
        trigger: 'item'
    },
    // legend: {
    //     orient: 'vertical',
    //     x:'left',
    //     data:['iphoneX']
    // },
    // dataRange: {
    //     min: 0,
    //     max: 2500,
    //     x: 'left',
    //     y: 'bottom',
    //     text:['max','min'],           
    //     calculable : true
    // },
    // toolbox: {
    //     show: true,
    //     orient : 'vertical',
    //     x: 'right',
    //     y: 'center',
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
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
            zoom: 1,  
            itemStyle:{
                normal:{
                    label:{show:true},
                    borderColor: "#145ff6",
                    areaColor:'#0dc0ff'
                },
                emphasis:{label:{show:true}}
            },
            // 提示框，鼠标移入
            tooltip:{
                show:true, //鼠标移入是否触发数据
                trigger: 'item', //出发方式
                formatter:`{b}-河湖综合保护规划数量：9<br />河湖综合保护规划完成进度：85.3%`
            },
            // data:[
            // {name: '珠海市',value:130},
            // {name: '广州市',value: 50},
            // {name: '中山市',value:31},
            // {name: '佛山市',value: 55},
            // {name: '清远市',value:90},
            // {name: '梅州市',value: 10},
            // {name: '汕头市',value:70},
            // {name: '东莞市',value: 50},
            // {name: '惠州市',value:30},
            // {name: '深圳市',value: 50}
            // ]
            label: {
                normal: {
                    show: true,
                    color: '#ffffff',//每个区域文字颜色
                    fontSize:'14px',
                },

            },
        }
    ]
  };