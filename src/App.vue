<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const sidebarBg = computed(() => store.state.theme.styles.sidebarBg)
const headerBg = computed(() => store.state.theme.styles.headerBg)
const mainBg = computed(() => store.state.theme.styles.mainBg)
const subMenuBg = computed(() => store.state.theme.styles.subMenuBg)
const subMenuHover = computed(() => store.state.theme.styles.subMenuHover)
const subMenuActive = computed(() => store.state.theme.styles.subMenuActive)
</script>
<style lang="scss">
#app {
  .app-sidebar-bg {
    background: v-bind(sidebarBg);
  }
  .app-header-bg {
    background: v-bind(headerBg);
  }
  .app-main-bg {
    background: v-bind(mainBg);
  }
  .el-menu {
    .el-sub-menu {
      .el-menu {
        background: v-bind(subMenuBg);
        .el-menu-item.is-active {
          background: v-bind(subMenuActive);
        }
        .el-menu-item:hover {
          background: v-bind(subMenuHover);
        }
        .el-sub-menu__title {
          background: v-bind(subMenuBg) !important;
          &:hover {
            background: v-bind(subMenuHover) !important;
          }
        }
      }
    }
  }
}
</style>
