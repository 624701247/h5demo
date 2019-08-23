declare let echarts:any

namespace jinx {
  console.log('run jinx1 411114444')

  // kone point : 用 let 代替 var , 不然如下，用var重复定义都是可以编译通过的
  export var badVar = 1
  export var badVar = 2

  export let goodLet = 1
  // export let goodLet = 2 //你试试这样，会报重复定义错误，无法编译通过

  // 
  export namespace echMgr {
    export function runEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
  
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
  
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }

    export function openEchartsDemo() {
      var baseurl = (window.location.origin + window.location.pathname).replace('index.html', '')
      window.location.href =  baseurl + 'ts/echarts-demo.html'
    }
  }
}

