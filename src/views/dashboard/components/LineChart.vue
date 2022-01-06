<!--
 * @Description: 线报表
 * @Author: hutu
 * @Date: 2022-01-06 14:51:10
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-06 17:33:33
-->
<template>
  <div style="height: 360px; padding: 20px">
    <div id="object-line" style="height: 264px; width: 100%"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { nextTick, onBeforeUnmount, onMounted, ref, onActivated, onDeactivated } from 'vue'
import elementResizeDetectorMaker from 'element-resize-detector'
import { debounce } from 'throttle-debounce'

const chart = ref()
let sidebarElm: any
const erd = elementResizeDetectorMaker()
const chartResizeHandler = debounce(100, false, () => {
  console.log(1)
  if (chart.value) {
    chart.value.resize()
  }
})
const sidebarResizeHandler = () => {
  nextTick(() => {
    chartResizeHandler()
  })
}
const initResizeEvent = () => {
  window.addEventListener('resize', chartResizeHandler)
}

const destroyResizeEvent = () => {
  window.removeEventListener('resize', chartResizeHandler)
}
const initSidebarResizeEvent = () => {
  sidebarElm = document.getElementsByClassName('sidebar-container')[0]
  if (sidebarElm) {
    erd.listenTo(sidebarElm, sidebarResizeHandler)
  }
}
const handleTest = (e: any) => {
  console.log(e, 'aa')
}
const destroySidebarResizeEvent = () => {
  if (sidebarElm) {
    erd.removeListener(sidebarElm, handleTest)
  }
}
const mounted = () => {
  initResizeEvent()
  initSidebarResizeEvent()
}
const beforeDestroy = () => {
  destroyResizeEvent()
  destroySidebarResizeEvent()
}
// import { mounted, beforeDestroy, chart } from './resize'
// console.log(chart)
// // const chart = ref()
const initLineChart = () => {
  const lchart = echarts.init(document.getElementById('object-line') as HTMLElement)
  lchart.setOption(option)
  chart.value = lchart
}
onActivated(() => {
  mounted()
  nextTick(() => {
    initLineChart()
  })
})

onDeactivated(() => {
  beforeDestroy()
})

const option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false,
    axisTick: {
      show: false
    }
  },
  grid: {
    left: 10,
    right: 10,
    bottom: 20,
    top: 30,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: [5, 10]
  },
  yAxis: {
    axisTick: {
      show: false
    }
  },
  legend: {
    data: ['expected', 'actual']
  },
  series: [
    {
      name: 'expected',
      itemStyle: {
        normal: {
          color: '#FF005A',
          lineStyle: {
            color: '#FF005A',
            width: 2
          }
        }
      },
      smooth: true,
      type: 'line',
      data: [100, 120, 161, 134, 105, 160, 165],
      animationDuration: 2800,
      animationEasing: 'cubicInOut'
    },
    {
      name: 'actual',
      smooth: true,
      type: 'line',
      itemStyle: {
        normal: {
          color: '#3888fa',
          lineStyle: {
            color: '#3888fa',
            width: 2
          },
          areaStyle: {
            color: '#f3f8ff'
          }
        }
      },
      data: [120, 82, 91, 154, 162, 140, 145],
      animationDuration: 2800,
      animationEasing: 'quadraticOut'
    }
  ]
}
</script>

<style scoped></style>
