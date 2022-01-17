<!--
 * @Description: 换肤
 * @Author: hutu
 * @Date: 2022-01-17 15:36:50
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 15:40:17
-->
<template>
  <div class="skin-theme">
    <div class="theme-color">
      <div class="theme-color-label">头部背景颜色</div>
      <div><el-color-picker v-model="styles.headerBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">主体内容背景颜色</div>
      <div><el-color-picker v-model="styles.mainBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">侧边栏背景颜色</div>
      <div><el-color-picker v-model="styles.sidebarBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">菜单栏背景颜色</div>
      <div><el-color-picker v-model="styles.menuBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">菜单栏字体颜色</div>
      <div><el-color-picker v-model="styles.menuTextColor" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">菜单栏选中字体颜色</div>
      <div><el-color-picker v-model="styles.menuTextActiveColor" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">子菜单栏背景颜色</div>
      <div><el-color-picker v-model="styles.subMenuBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">子菜单栏悬浮颜色</div>
      <div><el-color-picker v-model="styles.subMenuHover" /></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const styles = computed(() => store.state.theme.styles)
</script>
<style lang="scss" scoped>
.skin-theme {
  .theme-color {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    &-label {
      min-width: 150px;
    }
  }
}
</style>
