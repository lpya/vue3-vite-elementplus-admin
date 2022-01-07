<!--
 * @Descripttion: 基础模板
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-07 08:45:25
-->
<template>
  <div class="layout" :class="menuCollapse ? 'hideSidebar' : 'openSidebar'">
    <Sidebar class="sidebar-container app-sidebar-bg" :list="accessRoutes" :route="route.path" :collapse="menuCollapse" />
    <div class="main-container">
      <div class="layout-header app-header-bg">
        <Navbar />
      </div>
      <div class="layout-content app-main-bg">
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()

const menuCollapse = computed(() => store.state.permission.menuCollapse)
const accessRoutes = computed(() => store.state.permission.accessRoutes)
</script>
