<!--
 * @Description: 全屏
 * @Author: hutu
 * @Date: 2021-12-22 15:24:13
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-27 09:53:16
-->
<template>
  <div class="screenfull" @click="handleScreenfull">
    <el-tooltip class="item" effect="dark" :content="state.isScreenfull ? '退出全屏' : '全屏'" placement="bottom">
      <el-icon class="iconfont icon-fullscreen" :class="state.isScreenfull ? 'icon-fullscreen-exit' : 'icon-fullscreen'"></el-icon>
    </el-tooltip>
  </div>
</template>
<script lang="ts" setup>
import screenfull from 'screenfull'
import { reactive } from 'vue'

const state = reactive({
  isScreenfull: false as boolean
})
/**
 * @desc:设置||退出全屏
 * @param {*}
 * @return {*}
 */
const handleScreenfull = () => {
  screenfull.toggle()
  if (!state.isScreenfull) {
    return false
  }
  screenfull.toggle()
}
/**
 * @desc: 监听浏览器全屏变化
 * @param {*}
 * @return {*}
 */
const handleScreenfullChange = () => {
  state.isScreenfull = !state.isScreenfull
}
screenfull.on('change', handleScreenfullChange)
</script>

<style lang="scss">
.screenfull {
  @extend .app-icon-hover;
}
</style>
