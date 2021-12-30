<!--
 * @Description: 头部搜索
 * @Author: hutu
 * @Date: 2021-12-22 15:59:15
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-30 08:48:03
-->
<template>
  <el-tooltip class="item" effect="dark" :content="props.title" placement="bottom">
    <div class="header-icon">
      <el-icon class="iconfont" :class="props.icon"></el-icon>
    </div>
  </el-tooltip>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string
  icon: string
}>()
</script>
<style lang="scss">
.header-icon {
  @extend .app-icon-hover;
}
</style>
