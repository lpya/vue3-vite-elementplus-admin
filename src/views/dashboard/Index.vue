<template>
  <div class="dashboard">
    <div class="statistics">
      <div class="item" v-for="(item, key) in state.statisticsList" :key="key">
        <div class="item-icon">
          <el-icon class="iconfont" :class="item.icon" :style="{ background: item.bg }"> </el-icon>
        </div>
        <div class="item-text">
          <div class="item-text-num">{{ item.num }}</div>
          <div class="item-text-title">
            <div>{{ item.title }}</div>
            <div>
              <span style="padding-right: 8px">较昨天</span>
              <span style="color: red" v-if="item.percent > 0"><el-icon class="iconfont icon-caret-up"></el-icon> {{ item.percent * 100 }}%</span>
              <span style="color: green" v-else-if="item.percent < 0"><el-icon class="iconfont icon-caret-down"></el-icon> {{ item.percent * 100 }}%</span>
              <span v-else><el-icon class="iconfont icon-caret-down"></el-icon> {{ item.percent * 100 }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="visits">
      <InitEcharts :option="state.echartsOption1" :data="state.echartsData1" />
    </div>
    <div class="echarts">
      <div class="item">
        <InitEcharts :option="state.echartsOption2" :data="state.echartsData2" />
      </div>
      <div class="item">
        <InitEcharts :option="state.echartsOption3" :data="state.echartsData3" />
      </div>
      <div class="item">
        <InitEcharts :option="state.echartsOption4" :data="state.echartsData4" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import InitEcharts from '@/components/InitEcharts/Index.vue'

import { reactive } from 'vue'
import { IEchartsOption } from '@/interface'

const state = reactive({
  statisticsList: [
    { icon: 'icon-adduser', num: 14, title: '注册用户', percent: 0.1201, bg: '#27C24C' },
    { icon: 'icon-team', num: 327, title: '访客数', percent: 0.0201, bg: '#F05050' },
    { icon: 'icon-barchart', num: 616, title: '访问量', percent: 0.135, bg: '#7266ba' },
    { icon: 'icon-ip', num: 515, title: '访问IP数', percent: -0.0103, bg: '#23b7e5' },
    { icon: 'icon-guanliyuan', num: 2, title: '管理员', percent: 0.0, bg: '#27C24C' },
    { icon: 'icon-reloadtime', num: 94.93, title: '浏览时长', percent: 0.3301, bg: '#F05050' },
    { icon: 'icon-file-text-fill', num: 14, title: '文章数', percent: 0.0, bg: '#7266ba' },
    { icon: 'icon-eye-fill', num: 2522, title: '阅读量', percent: 0.031, bg: '#23b7e5' }
  ],
  echartsOption1: {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        smooth: true
      }
    ]
  } as IEchartsOption,
  echartsData1: {
    id: 'echartsData1',
    title: '用户访问量',
    height: '400px',
    width: '100%'
  },
  echartsOption2: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  } as IEchartsOption,
  echartsData2: {
    id: 'echartsData2',
    title: '用户访问量',
    height: '400px',
    width: '100%'
  },
  echartsOption3: {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
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
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
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
  } as IEchartsOption,
  echartsData3: {
    id: 'echartsData3',
    title: '',
    height: '400px',
    width: '100%'
  },
  echartsOption4: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    series: [
      {
        data: [10, 18, 150, 80, 70, 55, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  } as IEchartsOption,
  echartsData4: {
    id: 'echartsData4',
    title: '用户访问量',
    height: '400px',
    width: '100%'
  }
})
</script>
<style lang="scss">
.dashboard {
  overflow: auto;
  height: calc(100vh - 51px);
  > .statistics {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    .item {
      display: flex;
      width: 24.5%;
      background: #fff;
      height: 110px;
      border-radius: 4px;
      &:first-child {
        margin-bottom: 15px;
      }
      &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        min-width: 100px;
        i {
          padding: 15px;
          border-radius: 4px;
          color: #fff;
        }
      }
      &-text {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        padding: 22px 20px 22px 0;
        flex: 1;
        &-num {
          font-size: 22px;
          font-weight: bold;
        }
        &-title {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }
      }
    }
  }
  > .visits {
    padding: 0 20px 20px;
  }
  > .echarts {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .item {
      background: #fff;
      flex: 1;
      height: 460px;
      border-radius: 4px;
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
}
</style>
