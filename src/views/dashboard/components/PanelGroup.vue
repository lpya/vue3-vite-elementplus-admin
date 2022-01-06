<!--
 * @Description: 数据统计
 * @Author: hutu
 * @Date: 2022-01-06 09:26:04
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-06 14:32:37
-->
<template>
  <el-row :gutter="20" class="panel-group">
    <el-col v-for="(item, key) in prop.list" :key="key" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon">
          <el-icon class="iconfont" :class="item.icon" :style="{ background: item.bg }"> </el-icon>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-num">{{ item.num }}</div>
          <div class="card-panel-text">
            <div class="card-panel-title">{{ item.title }}</div>
            <div>
              <span style="padding-right: 8px">较昨天</span>
              <span style="color: red" v-if="item.percent > 0"><el-icon class="iconfont icon-caret-up"></el-icon> {{ item.percent * 100 }}%</span>
              <span style="color: green" v-else-if="item.percent < 0"><el-icon class="iconfont icon-caret-down"></el-icon> {{ item.percent * 100 }}%</span>
              <span v-else><el-icon class="iconfont icon-caret-down"></el-icon> {{ item.percent * 100 }}%</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
type IList = {
  icon: string
  title: string
  num: number
  percent: number
  bg: string
}
const prop = defineProps<{
  list: IList[]
}>()
</script>
<style lang="scss" scoped>
.panel-group {
  padding: 20px 0;
  .card-panel-col {
    margin-bottom: 15px;
    .card-panel {
      display: flex;
      height: 110px;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      .card-panel-icon {
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
      .card-panel-description {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        padding: 22px 20px 22px 0;
        width: 100%;
        .card-panel-num {
          font-size: 22px;
          font-weight: bold;
        }
        .card-panel-text {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
