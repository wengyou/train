export default {
    // title : {
    //     text: '模考分数对比',
    //     subtext: '纯属虚构'
    // },
    tooltip : {
        trigger: 'axis'
    },
    // legend: {
    //     data:['巡河次数','巡河完成率']
    // },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            axisLine: {  //这是x轴文字颜色
                lineStyle: {
                    color: "#fff",
                }
            },
            axisLabel: {  
                interval:0,  
                rotate:40  
             },
             splitLine:{
                show:false
            },
            data : ['武汉','黄石','十堰','宜昌','襄阳','荆州','荆门','黄冈','咸宁','随州','恩施','仙桃市','潜江市','天门市','神农架']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: '(个)',
            axisLine: {//这是y轴文字颜色
                lineStyle: {
                    color: "#fff",
                }
            },
            splitLine:{
                show:false
            }
        },
        {  
            type: 'value',  
            name: '(%)',
            axisLabel: {  
                show: true,  
                interval: 'auto',  
                formatter: '{value} %'  
                },  
            // show: true,
            axisLine: {//这是y轴文字颜色
                lineStyle: {
                    color: "#fff",
                }
            },
            splitLine:{
                show:false
            }  
        } 
    ],
    series : [
        {
            name:'巡河次数',
            type:'bar',
            data:[234,321,231,345,237,432,354,565,432,351,247,128,172,165,132],
            color:'#06fafd'
        },
        {
            name:'巡河完成率',
            type:'bar',
            yAxisIndex:'1',	
            data:[94,88,56,80,58,89,84,94,96,81,67,32,80,84,80 ],
            color:'#f7e4a5'
        },
    ]
}