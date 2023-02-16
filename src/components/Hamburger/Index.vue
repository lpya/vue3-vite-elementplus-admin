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
const emitMenuCollapse = () => {
  emit('emitMenuCollapse', !props.collapse)
}
</script>

<style lang="scss">
.hamburger {
  @extend .app-icon-hover;
}
</style>
