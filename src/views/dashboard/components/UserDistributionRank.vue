<template>
  <div class="user-distribution-rank">
    <div class="header">
      <h2>访客分布排行</h2>
      <el-select v-model="addressTy" style="width: 100px" @change="getAddressRank">
        <el-option v-for="item in addressTyList" :key="item.val" :label="item.name" :value="item.val" />
      </el-select>
    </div>
    <div v-loading="loading" class="container">
      <EchartInit id="UserDistributionRankChart" width="100%" height="100%" :option="option" @emit-echarts="handleEcharts" />
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
    grid: {
      top: '20px',
      left: '10',
      right: '50px',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      left: 'center',
      top: 'bottom',
      textStyle: {
        color: '#97a8be'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      max: 'dataMax',
      show: false
    },
    yAxis: {
      type: 'category',
      data: [{}],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 9
    },
    series: [
      {
        realtimeSort: true,
        name: '人数',
        type: 'bar',
        data: [{}],
        label: {
          color: '#97a8be',
          show: true,
          position: 'right',
          valueAnimation: true
        }
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

onMounted(() => {
  getAddressRank()
})

let addressChart: echarts.ECharts
const handleEcharts = (chart: echarts.ECharts) => {
  addressChart = chart
}

const getAddressRank = async () => {
  state.loading = true
  const { addressTy } = state
  let addrssData
  if (addressTy === 'china') {
    addrssData = UserRankChina
  } else {
    addrssData = UserRankWorld
  }
  let nameArr: string[] = []
  let numArr: number[] = []
  addrssData.forEach((item) => {
    nameArr.push(item.name)
    numArr.push(item.value)
  })
  addressChart.setOption({
    yAxis: {
      data: nameArr
    },
    series: [
      {
        data: numArr
      }
    ]
  })
  state.loading = false
}

const { option, loading, addressTy, addressTyList } = toRefs(state)
</script>
<style lang="scss" scoped>
.user-distribution-rank {
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
    padding-bottom: 10px;

    h2 {
      font-size: 18px;
    }
  }

  .container {
    flex: 1;
  }
}
</style>
