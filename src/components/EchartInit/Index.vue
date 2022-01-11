<!--
 * @Description: echarts图表初始化
 * @Author: hutu
 * @Date: 2021-12-30 10:32:19
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-11 08:50:29
-->
<template>
  <div :id="prop.id" :style="{ width: prop.width, height: prop.height }"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent, ToolboxComponent } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { IEchartsOption } from '@/interface'
echarts.use([BarChart, LineChart, PieChart, TitleComponent, TooltipComponent, ToolboxComponent, GridComponent, LegendComponent, LabelLayout, UniversalTransition, CanvasRenderer])

import { ref, onMounted, onBeforeUnmount, onActivated, onDeactivated } from 'vue'
import { debounce } from 'throttle-debounce'

const prop = defineProps<{
  id: string
  width: string
  height: string
  option: IEchartsOption
}>()

const chart = ref()
/**
 * @desc: 初始化图表
 */
const initChart = () => {
  const charts = echarts.init(document.getElementById(prop.id) as HTMLElement)
  charts.setOption(prop.option)
  chart.value = charts
}
/**
 * @desc: 监听窗口变化重置图表
 */
const chartResizeHandler = debounce(100, false, () => {
  if (chart.value) {
    chart.value.resize({
      animation: {
        duration: 200
      }
    })
  }
})
/**
 * @desc: 添加监听窗口变化事件
 */
const initResizeEvent = () => {
  window.addEventListener('resize', chartResizeHandler)
}
/**
 * @desc: 移除监听窗口变化事件
 */
const destroyResizeEvent = () => {
  window.addEventListener('resize', chartResizeHandler)
}

/**
 * @desc: 添加监听侧边栏变化事件
 */
let sidebarElm: HTMLElement
const initSidebarResizeEvent = () => {
  sidebarElm = document.getElementsByClassName('sidebar-container')[0] as HTMLElement
  sidebarElm && sidebarElm.addEventListener('transitionend', chartResizeHandler)
}
/**
 * @desc: 移除监听侧边栏变化事件
 */
const destroySidebarResizeEvent = () => {
  sidebarElm && sidebarElm.removeEventListener('transitionend', chartResizeHandler)
}

const mounted = () => {
  initChart()
  initResizeEvent()
  initSidebarResizeEvent()
}
const beforeDestroy = () => {
  destroyResizeEvent()
  destroySidebarResizeEvent()
}

let firstFlag = false //首次渲染
onMounted(() => {
  firstFlag = true
  mounted()
})
onBeforeUnmount(() => {
  beforeDestroy()
})
onActivated(() => {
  //如果首次渲染不重复执行
  if (firstFlag) {
    firstFlag = false
    return false
  }
  mounted()
})
onDeactivated(() => {
  beforeDestroy()
})
</script>
