<!--
 * @Description: 用户访问量统计
 * @Author: hutu
 * @Date: 2022-01-06 14:51:10
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-10 16:51:04
-->
<template>
  <div class="line-chart">
    <EchartInit id="visitsNum" width="100%" height="400px" :option="state.option" />
  </div>
</template>
<script lang="ts" setup>
import EchartInit from '@/components/EchartInit/Index.vue'
import { IEchartsOption } from '@/interface'

import { reactive } from 'vue'
const state = reactive({
  option: {
    title: {
      text: '用户访问量统计'
    },
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
      data: ['注册用户', '访客量', 'IP数', '阅读量']
    },
    series: [
      {
        name: '注册用户',
        smooth: true,
        type: 'line',
        data: [1, 2, 1, 3, 5, 1, 6]
      },
      {
        name: '访客量',
        smooth: true,
        type: 'line',
        data: [112, 54, 15, 77, 102, 22, 30]
      },
      {
        name: 'IP数',
        smooth: true,
        type: 'line',
        data: [99, 34, 5, 34, 44, 2, 16]
      },
      {
        name: '阅读量',
        smooth: true,
        type: 'line',
        data: [52, 154, 85, 177, 142, 132, 150]
      }
    ]
  } as IEchartsOption
})
</script>

<style lang="scss" scoped>
.line-chart {
  background: $white;
  padding: 30px 20px;
  border-radius: 4px;
}
</style>
