<!--
 * @Description: 用户访问量统计
 * @Author: hutu
 * @Date: 2022-01-06 14:51:10
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-11 08:57:17
-->
<template>
  <div class="test-chart">
    <EchartInit id="testNum" width="100%" height="400px" :option="state.option" />
  </div>
</template>
<script lang="ts" setup>
import EchartInit from '@/components/EchartInit/Index.vue'
import { IEchartsOption } from '@/interface'

import { reactive } from 'vue'
const state = reactive({
  option: {
    title: {
      text: '阅读统计（次）'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '20%',
      left: '5%',
      right: '5%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: 'pageA',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [79, 52, 200, 334, 390, 330, 220]
      },
      {
        name: 'pageB',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [80, 52, 200, 334, 390, 330, 220]
      },
      {
        name: 'pageC',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [30, 52, 200, 334, 390, 330, 220]
      }
    ]
  } as IEchartsOption
})
</script>
<style lang="scss" scoped>
.test-chart {
  background: $white;
  padding: 30px 20px;
  border-radius: 4px;
  overflow: hidden;
}
</style>
