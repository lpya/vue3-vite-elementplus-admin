<!--
 * @Descripttion: 侧边栏
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-28 17:32:33
-->
<template>
  <div class="sidebar">
    <el-menu :background-color="styles.menuBg" :text-color="styles.menuTextColor" :active-text-color="styles.menuTextActiveColor" :default-active="props.route" mode="vertical" :collapse="props.collapse" :router="true">
      <SidebarItem :list="props.list" :isFirst="true" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
const store = useStore()
const styles = computed(() => store.state.theme.styles)
const props = defineProps<{
  list: Array<RouteRecordRaw> //路由列表
  route: string //当前路由
  collapse: boolean //侧边栏是否折叠
}>()
</script>
