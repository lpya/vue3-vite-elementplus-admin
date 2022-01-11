<!--
 * @Description: 用户访问量统计
 * @Author: hutu
 * @Date: 2022-01-06 14:51:10
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-11 08:55:00
-->
<template>
  <div class="bar-chart">
    <EchartInit id="barNum" width="100%" height="400px" :option="state.option" />
  </div>
</template>
<script lang="ts" setup>
import EchartInit from '@/components/EchartInit/Index.vue'
import { IEchartsOption } from '@/interface'

import { reactive } from 'vue'
const state = reactive({
  option: {
    title: {
      text: '浏览时长（时）'
    },
    grid: {
      top: '20%',
      left: '5%',
      right: '5%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [3, 5, 3, 0.4, 1, 0.5, 0.9],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  } as IEchartsOption
})
</script>

<style lang="scss" scoped>
.bar-chart {
  background: $white;
  padding: 30px 20px;
  border-radius: 4px;
  overflow: hidden;
}
</style>
