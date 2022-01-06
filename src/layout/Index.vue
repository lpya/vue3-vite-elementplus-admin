<!--
 * @Descripttion: 基础模板
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-06 17:32:44
-->
<template>
  <div class="layout" :class="menuCollapse ? 'hideSidebar' : 'openSidebar'">
    <Sidebar class="sidebar-container" :list="accessRoutes" :route="route.path" :collapse="menuCollapse" />
    <div class="main-container">
      <div class="layout-header app-header-bg">
        <Navbar />
      </div>
      <div class="layout-content app-main-bg">
        <AppMain />
      </div>
    </div>
    <!-- <div class="layout-menu app-sidebar-bg" :style="{ minWidth: menuCollapse ? '64px' : '210px' }">
      <Sidebar :list="accessRoutes" :route="route.path" :collapse="menuCollapse" />
    </div>
    <div class="layout-main">
      <div class="layout-header app-header-bg">
        <Navbar />
      </div>
      <div class="layout-content app-main-bg">
        <AppMain />
      </div>
    </div>-->
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

<style lang="scss">
#app {
  position: fixed;
  height: 100%;
  width: 100%;
}
.layout {
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    position: fixed;
    height: 100%;
    top: 0px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background-color: $menuBg;
    transition: width 0.28s;
  }
  .main-container {
    transition: margin-left 0.28s;
  }
}
.openSidebar {
  .sidebar-container {
    width: 210px !important;
  }
  .main-container {
    margin-left: 210px;
  }
}
.hideSidebar {
  .sidebar-container {
    width: 64px !important;
  }
  .main-container {
    margin-left: 64px;
  }
}
// .layout {
//   display: flex;
//   .layout-menu {
//     transition: all 0.3s;
//     overflow: hidden;
//   }
//   .layout-main {
//     flex: 1;
//     .layout-header {
//       height: 50px;
//       border-bottom: 1px solid #eee;
//     }
//   }
// }
</style>
