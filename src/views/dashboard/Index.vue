<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="14">
        <UserTotal />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="10" style="margin-bottom: 20px">
        <ArticleTotal />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="7" style="margin-bottom: 20px">
        <UserDistributionRank />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="10" style="margin-bottom: 20px">
        <UserDistributionMap />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="7" style="margin-bottom: 20px">
        <VisitorDevice />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="24" style="margin-bottom: 20px">
        <FlowTrend />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import UserTotal from './components/UserTotal.vue'
import ArticleTotal from './components/ArticleTotal.vue'
import UserDistributionRank from './components/UserDistributionRank.vue'
import VisitorDevice from './components/VisitorDevice.vue'
import UserDistributionMap from './components/UserDistributionMap.vue'
import FlowTrend from './components/FlowTrend.vue'
</script>
<style lang="scss">
.dashboard {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 0 20px;
  .chart-wrapper {
    margin: 20px 0 0;
  }
}
</style>
