<template>
  <div class="line">
    <div class="container">
      <EchartInit id="line" width="100%" height="100%" :option="state.option" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'

import EchartInit from '@/components/EchartInit/Index.vue'
import { reactive } from 'vue'
const state = reactive({
  option: {
    xAxis: {
      data: ['1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日'],
      boundaryGap: false,
      axisTick: {
        show: false
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    yAxis: {},
    legend: {
      data: ['访问量']
    },
    series: [
      {
        name: '访问量',
        smooth: true,
        type: 'line',
        data: [112, 66, 105, 77, 102, 64, 30],
        areaStyle: {
          normal: {
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
                color: 'rgba(38,197,254,0.00)'
              }
            ])
          }
        }
      }
    ]
  } as IEchartsOption
})
</script>

<style lang="scss" scoped>
.line {
  padding: 20px;
  .container {
    background: #fff;
    border-radius: 5px;
    height: calc(100vh - 131px);
    padding: 20px;
  }
}
</style>
