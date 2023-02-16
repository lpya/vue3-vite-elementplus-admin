<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, key) in state.leveList" :key="key" :to="{ path: key === 1 ? '' : item.path }">{{ item.title }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave, RouteRecordNormalized } from 'vue-router'
import { reactive } from 'vue'
interface ILeveList {
  path: string
  title: unknown
}
const route = useRoute()
const state = reactive({
  leveList: [] as ILeveList[]
})
/**
 * @desc: 获取面包屑列表
 * @param {RouteRecordNormalized} data
 * @return {*}
 */
const getLevelList = (data: RouteRecordNormalized[]) => {
  const leveList: ILeveList[] = []
  data.forEach((item, key) => {
    if (key === 0) {
      if (item.path === '/dashboard') {
        return false
      } else {
        leveList.push({ path: '/dashboard', title: '控制面板' })
        if (!item.meta || !item.meta.title) {
          return false
        } else {
          leveList.push({ path: item.path, title: item.meta.title })
        }
      }
    } else {
      leveList.push({ path: item.path, title: item.meta.title })
    }
  })
  state.leveList = leveList
}
getLevelList(route.matched)

onBeforeRouteUpdate((to) => {
  getLevelList(to.matched)
})

onBeforeRouteLeave((to) => {
  getLevelList(to.matched)
})
</script>
<style lang="scss">
.breadcrumb {
  .el-breadcrumb {
    .el-breadcrumb__item {
      span {
        font-weight: 400 !important;
      }
    }
    .el-breadcrumb__item:last-child {
      span {
        color: $breadcrumbColor !important;
      }
    }
  }
  .breadcrumb-leave-active,
  .breadcrumb-enter-active {
    transition: all 0.5s;
  }
  .breadcrumb-enter-from,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-leave-to {
    transition: all 0.5s;
  }
}
</style>
