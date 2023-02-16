<template>
  <div class="flow-trend">
    <div class="flow-trend-header">
      <h2>流量趋势</h2>
      <el-date-picker v-model="time" type="month" placeholder="请选择时间" value-format="x" @change="getFlow"> </el-date-picker>
    </div>
    <div class="container">
      <EchartInit id="FlowTrendChart" width="100%" height="100%" :option="state.option" @emit-echarts="handleEcharts" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import EchartInit from '@/components/EchartInit/Index.vue'
import * as echarts from 'echarts/core'
import { reactive, ref, onMounted } from 'vue'
import { getDaysInMonth, formatTime } from '@/utils/format'

const state = reactive({
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['访客量', '访问量', '浏览量', '阅读量', 'IP数', '浏览时长（分）']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: true,
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '访客量',
        type: 'line',
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        data: [],
        areaStyle: {}
      },
      {
        name: '访问量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: []
      },
      {
        name: '浏览量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: []
      },
      {
        name: '阅读量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: []
      },
      {
        name: 'IP数',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: []
      },

      {
        name: '浏览时长（分）',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: []
      }
    ]
  } as IEchartsOption
})
const time = ref<number>(0)

onMounted(() => {
  time.value = Date.now()
  getFlow()
})

let flowChart: echarts.ECharts
const handleEcharts = (chart: echarts.ECharts) => {
  flowChart = chart
}
const getFlow = async () => {
  getChartData()
}
interface IDataMap {
  [k: string]: number
}
const getChartData = () => {
  let visitorMap: IDataMap = {}
  let ipMap: IDataMap = {}
  let pvMap: IDataMap = {}
  let visitsTimeMap: IDataMap = {}
  let visitsNumMap: IDataMap = {}
  let readNumMap: IDataMap = {}
  const monthDayNum = getDaysInMonth(time.value)
  const monthArr = []
  const month = formatTime(time.value, 'MM')
  for (let i = 1; i <= monthDayNum; i++) {
    let dateText = `${month}月${i < 10 ? `0${i}` : i}日`
    monthArr.push(dateText)
    visitorMap[dateText] = Math.floor(Math.random() * 100)
    ipMap[dateText] = Math.floor(Math.random() * 100)
    pvMap[dateText] = Math.floor(Math.random() * 100)
    visitsTimeMap[dateText] = Math.floor(Math.random() * 30)
    visitsNumMap[dateText] = Math.floor(Math.random() * 20)
    readNumMap[dateText] = Math.floor(Math.random() * 50)
  }
  flowChart.setOption({
    xAxis: [
      {
        data: monthArr
      }
    ],
    series: [
      {
        data: Object.values(visitorMap)
      },
      {
        data: Object.values(visitsNumMap)
      },
      {
        data: Object.values(pvMap)
      },
      {
        data: Object.values(readNumMap)
      },
      {
        data: Object.values(ipMap)
      },
      {
        data: Object.values(visitsTimeMap)
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.flow-trend {
  display: flex;
  flex-flow: column;
  height: 500px;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #666;

  .flow-trend-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 35px;

    h2 {
      font-size: 18px;
    }
  }

  .container {
    flex: 1;
  }
}
</style>
