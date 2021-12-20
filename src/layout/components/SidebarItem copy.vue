<!--
 * @Descripttion: 侧边栏列表
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-20 09:33:44
-->
<template>
  <template v-for="item in props.list" :key="item.path">
    <el-menu-item v-if="verifyRouteChildren(item.children)" :index="item.children ? item.children[0].path : '/'">
      <el-icon v-if="props.isFirst" class="iconfont" :class="item.meta?.icon" />
      <template #title>
        <span>{{ item.meta?.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon v-if="props.isFirst" class="iconfont" :class="item.meta?.icon" />
        <span>{{ item.meta?.title }}</span>
      </template>
      <SidebarItem :list="item.children" :isFirst="false" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'
const props = defineProps<{
  list?: Array<RouteRecordRaw> //路由列表
  isFirst: boolean //是否是第一级
}>()
/**
 * @desc: 判断是否存在子路由
 * @param {RouteRecordRaw} children
 * @return {boolean}
 */
const verifyRouteChildren = (children?: RouteRecordRaw[]): boolean => {
  return children?.length === 1 && children[0].path.split('/').length === 2
}
</script>
