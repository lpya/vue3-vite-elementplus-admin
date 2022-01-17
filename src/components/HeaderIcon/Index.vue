<!--
 * @Description: 头部搜索
 * @Author: hutu
 * @Date: 2021-12-22 15:59:15
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 15:52:03
-->
<template>
  <el-tooltip class="item" effect="dark" :content="props.title" placement="bottom">
    <div class="header-icon" @click="emitClick">
      <el-icon class="iconfont" :class="props.icon"></el-icon>
    </div>
  </el-tooltip>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string
  icon: string
}>()
const emit = defineEmits(['emitClick'])
const emitClick = () => {
  emit('emitClick')
}
</script>
<style lang="scss">
.header-icon {
  @extend .app-icon-hover;
}
</style>
