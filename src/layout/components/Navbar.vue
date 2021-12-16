<!--
 * @Descripttion: 头部
 * @Author: hutu
 * @Date: 2021-12-09 22:36:40
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-16 15:05:44
-->
<template>
  <div class="navbar">
    <div class="left">
      <div class="hamburger" @click="emitMenuCollapse">
        <el-icon class="iconfont" :class="props.collapse ? 'icon-indent' : 'icon-outdent'"></el-icon>
      </div>
      <Breadcrumb />
    </div>
    <div class="right">1</div>
  </div>
</template>
<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb/Index.vue'
import { defineEmits } from 'vue'
const props = defineProps<{
  collapse: boolean
}>()
const emit = defineEmits(['emitMenuCollapse'])
const emitMenuCollapse = (): void => {
  emit('emitMenuCollapse', !props.collapse)
}
</script>
<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  > .left {
    display: flex;
    align-items: center;
    .hamburger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
      }
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
