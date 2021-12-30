<!--
 * @Description: echarts图表
 * @Author: hutu
 * @Date: 2021-12-30 10:32:19
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-30 14:44:25
-->
<template>
  <div class="init-echarts">
    <div class="title">{{ prop.data.title }}</div>
    <div :id="prop.data.id" :style="{ width: prop.data.width, height: prop.data.height }"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { IEchartsOption } from '@/interface'
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([BarChart, LineChart, PieChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, LabelLayout, UniversalTransition, CanvasRenderer])
interface IData {
  id: string
  title: string
  width: string
  height: string
}
const prop = defineProps<{
  option: IEchartsOption
  data: IData
}>()
const init = () => {
  const myChart = echarts.init(document.getElementById(prop.data.id) as HTMLElement)
  myChart.setOption(prop.option)
  window.onresize = function () {
    myChart.resize()
  }
}
onMounted(() => {
  init()
})
</script>
<style lang="scss">
.init-echarts {
  background: #fff;
  padding: 20px;
  .title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
