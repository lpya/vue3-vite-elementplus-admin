<!--
 * @Description: 用户访问量统计
 * @Author: hutu
 * @Date: 2022-01-06 14:51:10
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-11 08:51:16
-->
<template>
  <div class="pie-chart">
    <EchartInit id="pieNum" width="100%" height="400px" :option="state.option" />
  </div>
</template>
<script lang="ts" setup>
import EchartInit from '@/components/EchartInit/Index.vue'
import { IEchartsOption } from '@/interface'

import { reactive } from 'vue'
const state = reactive({
  option: {
    title: {
      text: '文章统计（章）',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 14, name: '总文章数' },
          { value: 4, name: '待审核' },
          { value: 10, name: '已发布' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  } as IEchartsOption
})
</script>

<style lang="scss" scoped>
.pie-chart {
  background: $white;
  padding: 30px 20px;
  border-radius: 4px;
  overflow: hidden;
}
</style>
