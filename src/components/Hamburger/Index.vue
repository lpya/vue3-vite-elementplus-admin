<!--
 * @Description: 汉堡按钮
 * @Author: hutu
 * @Date: 2021-12-22 14:53:31
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-30 08:46:09
-->
<template>
  <div class="hamburger" @click="emitMenuCollapse">
    <el-icon class="iconfont" :class="props.collapse ? 'icon-indent' : 'icon-outdent'"></el-icon>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  collapse: boolean
}>()
const emit = defineEmits(['emitMenuCollapse'])
const emitMenuCollapse = (): void => {
  emit('emitMenuCollapse', !props.collapse)
}
</script>

<style lang="scss">
.hamburger {
  @extend .app-icon-hover;
}
</style>
