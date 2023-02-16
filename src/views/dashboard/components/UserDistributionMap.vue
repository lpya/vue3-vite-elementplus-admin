<template>
  <div class="user-distribution-map">
    <div class="header">
      <h2>访客地域分布</h2>
      <el-select v-model="addressTy" style="width: 100px" @change="getAddressCount">
        <el-option v-for="item in addressTyList" :key="item.val" :label="item.name" :value="item.val" />
      </el-select>
    </div>
    <div class="container">
      <EchartInit id="UserDistributionMapChart" width="100%" height="100%" :option="option" :map="true" @emit-echarts="handleEcharts" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts/core'
import EchartInit from '@/components/EchartInit/Index.vue'
import { reactive, toRefs, onMounted } from 'vue'
import { UserRankChina, UserRankWorld } from './datas'

const state = reactive({
  option: {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 3000,
      calculable: true,
      inRange: {
        color: ['#50a3ba', '#eac736', '#d94e5d']
      },
      textStyle: {
        color: '#97a8be'
      },
      seriesIndex: 0
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 1,
      selectedMode: false,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      layoutCenter: ['50%', '50%'],
      layoutSize: '120%',
      label: {
        show: false,
        color: '#97a8be'
      },
      itemStyle: {
        areaColor: '#cccccc',
        borderWidth: 1.1,
        borderColor: '#ffffff'
      },
      emphasis: {
        label: {
          color: '#ffffff'
        },
        itemStyle: {
          areaColor: '#006699'
        }
      }
    },
    series: [
      {
        name: '访问人数',
        type: 'map',
        geoIndex: 0,
        selectedMode: false,
        data: []
      },
      {
        name: '人数',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          period: 5,
          scale: 4,
          brushType: 'stroke'
        },
        label: {
          show: false,
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'orange',
          type: 'solid',
          width: 2,
          opacity: 1,
          curveness: 0.2
        },
        symbol: 'circle',
        symbolSize: function (val: number[]) {
          if (val[2] === 0) {
            return 0
          }
          return 5
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params: { name: string; value: Array<string> }) {
            return params.name
          }
        },
        itemStyle: {
          color: '#f19000'
        },
        data: []
      }
    ]
  } as IEchartsOption,
  loading: true,
  addressTy: 'china',
  addressTyList: [
    { name: '中国', val: 'china' },
    { name: '全球', val: 'world' }
  ]
})
let mapChart: echarts.ECharts
const handleEcharts = (chart: echarts.ECharts) => {
  mapChart = chart
}
onMounted(() => {
  getAddressCount()
  setOnlineVisitor()
})

const setOnlineVisitor = () => {
  if (!mapChart) {
    return
  }
  const { addressTy } = state
  mapChart.setOption({
    geo: {
      map: addressTy
    },
    series: [
      {},
      {
        data: [{ name: '在线：127.0.0.1', value: [113.280637, 23.125178] }]
      }
    ]
  })
}
const getAddressCount = async () => {
  const { addressTy } = state
  let addrssData
  if (addressTy === 'china') {
    addrssData = UserRankChina
  } else {
    addrssData = UserRankWorld
  }
  mapChart.setOption({
    geo: {
      map: addressTy
    },
    series: [
      {
        data: addrssData
      }
    ]
  })
}
const { option, addressTy, addressTyList } = toRefs(state)
</script>
<style lang="scss" scoped>
.user-distribution-map {
  display: flex;
  flex-flow: column;
  height: 500px;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #666;

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;

    h2 {
      font-size: 18px;
    }
  }

  .container {
    flex: 1;
  }
}

.test {
  background: #dbf350;
}
</style>
