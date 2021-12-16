<!--
 * @Descripttion: 侧边栏列表
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-16 16:29:08
-->
<template>
  <template v-for="item in props.list" :key="item.path">
    {{ item.redirect }}
    <el-menu-item :index="item.path" v-if="verifyRouteChildren(item.children)">
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
  return !children || children.length === 0
}
</script>
