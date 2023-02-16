<template>
  <div class="online-chart">
    <EchartInit id="OnlineChart" width="100%" height="100%" :option="state.option" @emit-echarts="handleEcharts" />
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'
import EchartInit from '@/components/EchartInit/Index.vue'
import { reactive, ref, onMounted, onDeactivated } from 'vue'

let xAxisData: Array<string> = []
let seriesData: Array<number> = [0]
let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '')
xAxisData.push(axisData)
const state = reactive({
  option: {
    grid: {
      top: '4%',
      left: '0',
      right: '3%',
      bottom: '0%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      boundaryGap: false,
      axisTick: {
        show: true
      }
    },
    yAxis: {
      show: true,
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: '人数',
        smooth: false,
        type: 'line',
        data: seriesData,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(80,141,255,1)'
            },
            {
              offset: 0.3,
              color: 'rgba(56,155,255,0.5)'
            },
            {
              offset: 1,
              color: 'rgba(38,197,254,0)'
            }
          ])
        }
      }
    ]
  } as IEchartsOption
})

onMounted(() => {
  setOnlineTimer()
})

onDeactivated(() => {
  clearOnlineTimer()
})
let onlineChart: echarts.ECharts
const handleEcharts = (chart: echarts.ECharts) => {
  onlineChart = chart
}

const timer = ref()
const setOnlineTimer = () => {
  timer.value = setInterval(() => {
    setChart()
  }, 1000 * 3)
}
const setChart = () => {
  const online = Math.floor(Math.random() * 10)
  xAxisData.push(new Date().toLocaleTimeString().replace(/^\D*/, ''))
  seriesData.push(online)
  onlineChart.setOption({
    xAxis: {
      data: xAxisData
    },
    series: {
      data: seriesData
    }
  })
  if (xAxisData.length > 8) {
    xAxisData.shift()
  }
  if (seriesData.length > 8) {
    seriesData.shift()
  }
}
const clearOnlineTimer = () => {
  clearInterval(timer.value)
  timer.value = null
}
</script>

<style lang="scss" scoped>
.online-chart {
  height: 100%;
  padding: 20px;
}
</style>
