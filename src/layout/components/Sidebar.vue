<!--
 * @Descripttion: 侧边栏
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-16 16:01:36
-->
<template>
  <div class="sidebar">
    <el-menu :background-color="'#304156'" :text-color="'#bfcbd9'" :active-text-color="'#409EFF'" :default-active="props.route" mode="vertical" :collapse="props.collapse" :router="true">
      <SidebarItem :list="props.list" :isFirst="true" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import SidebarItem from './SidebarItem.vue'
import { RouteRecordRaw } from 'vue-router'
const props = defineProps<{
  list: Array<RouteRecordRaw> //路由列表
  route: string //当前路由
  collapse: boolean //侧边栏是否折叠
}>()
</script>
<style lang="scss">
.sidebar {
  .el-menu {
    .el-sub-menu {
      .el-menu {
        background: $subMenuBg;
        li:hover {
          background: $subMenuHover;
        }
        .el-sub-menu__title {
          background: $subMenuBg !important;
          &:hover {
            background: $subMenuHover !important;
          }
        }
      }
    }
  }
}
</style>
