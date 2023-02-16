<template>
  <div class="article-chart">
    <EchartInit id="ArticleTotalChart" width="100%" height="100%" :option="state.option" @emit-echarts="handleEcharts" />
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'
import EchartInit from '@/components/EchartInit/Index.vue'
import { reactive, onMounted } from 'vue'
const props = defineProps<{
  data: number[]
}>()

const state = reactive({
  option: {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'category',
      data: ['已发布', '待审核', '回收站'],
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        name: '文章',
        label: {
          show: true,
          position: 'top',
          color: '#97a8be',
          fontSize: 16
        },
        data: [],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0)'
        },
        itemStyle: {
          color: function (params: { dataIndex: number }) {
            const colorList1 = ['#4440b9', '#54bbec', '#f49053']
            const colorList2 = ['#7372cd', '#6ce4f2', '#ebd292']
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorList1[params.dataIndex]
              },
              {
                offset: 0.6,
                color: colorList2[params.dataIndex]
              },
              {
                offset: 1,
                color: colorList2[params.dataIndex]
              }
            ])
          }
        }
      }
    ]
  } as IEchartsOption
})

onMounted(() => {
  setChartVal(props.data)
})

let articleTotalChart: echarts.ECharts

const handleEcharts = (chart: echarts.ECharts) => {
  articleTotalChart = chart
}

const setChartVal = (data: number[]) => {
  articleTotalChart.setOption({
    series: [
      {
        data: data
      }
    ]
  })
}
</script>

<style lang="scss">
.article-chart {
  height: 100%;
}
</style>
