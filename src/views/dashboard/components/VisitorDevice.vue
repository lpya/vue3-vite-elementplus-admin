<template>
  <div class="visitor-device">
    <h2>访问设备</h2>
    <div class="container">
      <EchartInit id="visitorDeviceChart" width="100%" height="100%" :option="state.option" @emit-echarts="handleEcharts" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'
import EchartInit from '@/components/EchartInit/Index.vue'
import { reactive } from 'vue'
const state = reactive({
  option: {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      textStyle: {
        color: '#97a8be'
      }
    },
    series: [
      {
        name: '设备',
        type: 'pie',
        radius: '50%',
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          color: '#97a8be',
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ]
  } as IEchartsOption
})

let deviceChart: echarts.ECharts
const handleEcharts = (chart: echarts.ECharts) => {
  deviceChart = chart
  deviceChart.setOption({
    series: [
      {
        data: [
          { value: 1050, name: '移动端' },
          { value: 1490, name: '桌面端' }
        ]
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.visitor-device {
  display: flex;
  flex-flow: column;
  height: 500px;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #666;
  h2 {
    font-size: 18px;
    padding-bottom: 20px;
  }
  .container {
    flex: 1;
  }
}
</style>
