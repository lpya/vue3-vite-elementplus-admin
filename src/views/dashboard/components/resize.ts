/*
 * @Description:
 * @Author: hutu
 * @Date: 2022-01-06 15:01:59
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-06 15:18:20
 */
import { nextTick, ref } from 'vue'
import { debounce } from 'throttle-debounce'
import elementResizeDetectorMaker from 'element-resize-detector'
export default function () {
  const chart = ref()
  let sidebarElm
  //   let sidebarElm: HTMLCollectionOf<Element>
  // const elementResizeDetectorMaker = require('element-resize-detector')
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
    sidebarElm = document.getElementsByClassName('sider-content')[0]
    if (sidebarElm) {
      erd.listenTo(sidebarElm, sidebarResizeHandler)
    }
  }

  const destroySidebarResizeEvent = () => {
    if (sidebarElm) {
      erd.removeListener(sidebarElm)
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

  return {
    chart,
    mounted,
    beforeDestroy
  }
}
