<template>
  <div class="sidebar">
    <div v-if="styles.isLogo" class="logo">
      <img src="@/assets/image/logo.png" alt="logo" />
      <div class="logo-text" :class="!props.collapse ? '' : 'logo-collapse'">后台管理系统</div>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="styles.menuBg"
        :text-color="styles.menuTextColor"
        :active-text-color="styles.menuTextActiveColor"
        :default-active="props.route"
        mode="vertical"
        :collapse="props.collapse"
        :router="true"
      >
        <SidebarItem :list="props.list" :isFirst="true" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
const store = useStore()
const styles = computed(() => store.state.theme.styles)
const menuTextColor = computed(() => store.state.theme.styles.menuTextColor)

const props = defineProps<{
  list: Array<RouteRecordRaw> //路由列表
  route: string //当前路由
  collapse: boolean //侧边栏是否折叠
}>()
</script>
<style lang="scss" scoped>
.sidebar {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    img {
      height: 25px;
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
    }
    &-text {
      color: v-bind(menuTextColor);
      padding-left: 10px;
      font-size: 15px;
      min-width: 100px;
      overflow: hidden;
    }
    &-collapse {
      display: none;
    }
  }
}
</style>

<style>
.scrollbar-wrapper {
  height: calc(100vh - 70px);
  overflow: auto;
}
</style>
