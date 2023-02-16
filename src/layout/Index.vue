<template>
  <div class="layout" :class="menuCollapse ? 'hideSidebar' : 'openSidebar'">
    <Sidebar class="sidebar-container app-sidebar-bg" :list="accessRoutes" :route="route.path" :collapse="menuCollapse" />
    <div class="main-container">
      <div class="main-container-header app-header-bg">
        <Navbar />
      </div>
      <div class="main-container-content app-main-bg">
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
