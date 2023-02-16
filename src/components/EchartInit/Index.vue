<template>
  <div :id="prop.id" :style="{ width: prop.width, height: prop.height }"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart, MapChart, LinesChart, ScatterChart, EffectScatterChart } from 'echarts/charts'
import {
  TitleComponent, //标题
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  GeoComponent,
  VisualMapComponent,
  DataZoomComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import china from '@/assets/json/china.json'
import world from '@/assets/json/world-zh.json'
import { ref, onMounted, onBeforeUnmount, onActivated, onDeactivated } from 'vue'
import { debounce } from 'throttle-debounce'

echarts.use([
  BarChart, //柱
  LineChart, //线
  PieChart, //圆
  MapChart, //地图
  LinesChart,
  ScatterChart,
  EffectScatterChart,
  TitleComponent, //标题
  TooltipComponent, //悬浮提示
  ToolboxComponent, //悬浮提示
  GridComponent, //格
  LegendComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  GeoComponent,
  VisualMapComponent, //地图视觉
  DataZoomComponent
])

interface IProp {
  id: string
  width: string
  height: string
  option: IEchartsOption
  map?: boolean
}

const prop = withDefaults(defineProps<IProp>(), {
  map: false
})

const emit = defineEmits<{
  (e: 'emitEcharts', chart: echarts.ECharts): void
}>()

let chart: echarts.ECharts
/**
 * @desc: 初始化图表
 */
// const emit = defineEmits(['emitEcharts'])
const initChart = async () => {
  if (prop.map) {
    echarts.registerMap('china', {
      geoJSON: china as any,
      specialAreas: {}
    })
    echarts.registerMap('world', {
      geoJSON: world as any,
      specialAreas: {}
    })
  }
  const charts = echarts.init(document.getElementById(prop.id) as HTMLElement)
  charts.setOption(prop.option)
  chart = charts
  emit('emitEcharts', charts)
}
/**
 * @desc: 监听窗口变化重置图表
 */
const chartResizeHandler = debounce(100, false, () => {
  chart.resize({
    animation: {
      duration: 200
    }
  })
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
  window.removeEventListener('resize', chartResizeHandler)
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

const init = () => {
  initChart()
  initResizeEvent()
  initSidebarResizeEvent()
}
const beforeDestroy = () => {
  destroyResizeEvent()
  destroySidebarResizeEvent()
  chart.dispose()
}

let firstFlag = false //首次渲染
onMounted(() => {
  firstFlag = true
  init()
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
  init()
})
onDeactivated(() => {
  beforeDestroy()
})
</script>
