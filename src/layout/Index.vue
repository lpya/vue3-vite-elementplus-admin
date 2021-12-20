<!--
 * @Descripttion: 基础模板
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-20 09:39:14
-->
<template>
  <div class="layout">
    <div class="layout-menu" :style="{ width: menuCollapse ? '64px' : '210px' }">
      <Sidebar :list="accessRoutes" :route="route.path" :collapse="menuCollapse" />
    </div>
    <div class="layout-main">
      <div class="layout-header">
        <Navbar @emitMenuCollapse="handleMenuCollapse" :collapse="menuCollapse" />
      </div>
      <div class="layout-content">
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
import { SET_MENU_COLLAPSE } from '@/store/type'
const store = useStore()
const route = useRoute()

const menuCollapse = computed(() => store.state.permission.menuCollapse)
const accessRoutes = computed(() => store.state.permission.accessRoutes)
console.log(accessRoutes.value)
/**
 * @desc:  侧边栏展开||折叠
 * @param {boolean} flag
 * @return {void}
 */
const handleMenuCollapse = (flag: boolean): void => {
  store.commit(SET_MENU_COLLAPSE, flag)
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  .layout-menu {
    background: $menuBg;
    transition: all 0.3s;
    overflow: hidden;
  }
  .layout-main {
    flex: 1;
    .layout-header {
      height: 50px;
      background: $white;
    }
    .layout-content {
      background: $baseBg;
    }
  }
}
</style>
