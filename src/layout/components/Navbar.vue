<!--
 * @Descripttion: 头部
 * @Author: hutu
 * @Date: 2021-12-09 22:36:40
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 15:56:26
-->
<template>
  <div class="navbar">
    <div class="left">
      <Hamburger @emitMenuCollapse="handleMenuCollapse" :collapse="menuCollapse" />
      <Breadcrumb />
    </div>
    <div class="right">
      <HeaderIcon :icon="'icon-home'" :title="'主页'" />
      <Screenfull />
      <HeaderAvatar />
      <HeaderIcon :icon="'icon-setting'" :title="'设置'" @emitClick="drawerFlag = true" />
    </div>
    <el-drawer v-model="drawerFlag" title="自定义主题颜色" size="350px">
      <SkinTheme style="padding-left: 20px" />
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb/Index.vue'
import Hamburger from '@/components/Hamburger/Index.vue'
import Screenfull from '@/components/Screenfull/Index.vue'
import HeaderAvatar from '@/components/HeaderAvatar/Index.vue'
import HeaderIcon from '@/components/HeaderIcon/Index.vue'
import SkinTheme from '@/components/SkinTheme/Index.vue'

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { SET_MENU_COLLAPSE } from '@/store/type'

const drawerFlag = ref<boolean>(false)
const store = useStore()
const menuCollapse = computed(() => store.state.permission.menuCollapse)
/**
 * @desc:  侧边栏展开||折叠
 * @param {boolean} flag
 * @return {*}
 */
const handleMenuCollapse = (flag: boolean) => {
  store.commit(SET_MENU_COLLAPSE, flag)
}
</script>
<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  > .left {
    display: flex;
    align-items: center;
  }
  > .right {
    display: flex;
    align-items: center;
  }
}
</style>
