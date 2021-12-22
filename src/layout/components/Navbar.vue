<!--
 * @Descripttion: 头部
 * @Author: hutu
 * @Date: 2021-12-09 22:36:40
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-22 16:17:34
-->
<template>
  <div class="navbar">
    <div class="left">
      <Hamburger @emitMenuCollapse="handleMenuCollapse" :collapse="menuCollapse" />
      <Breadcrumb />
    </div>
    <div class="right">
      <HeaderSetting />
      <Screenfull />
      <HeaderAvatar />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb/Index.vue'
import Hamburger from '@/components/Hamburger/Index.vue'
import HeaderSetting from '@/components/HeaderSetting/Index.vue'
import Screenfull from '@/components/Screenfull/Index.vue'
import HeaderAvatar from '@/components/HeaderAvatar/Index.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
import { SET_MENU_COLLAPSE } from '@/store/type'

const store = useStore()
const menuCollapse = computed(() => store.state.permission.menuCollapse)
/**
 * @desc:  侧边栏展开||折叠
 * @param {boolean} flag
 * @return {void}
 */
const handleMenuCollapse = (flag: boolean): void => {
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
    div:last-child {
      margin-right: 15px;
    }
  }
}
</style>
