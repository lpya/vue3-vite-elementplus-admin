<template>
  <div class="header-avatar">
    <el-dropdown :hide-on-click="false" trigger="click">
      <img src="@/assets/image/avatar.png" alt="logo" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ store.state.user.token }}</el-dropdown-item>
          <a href="https://www.lpya.cn/" target="_blank"> <el-dropdown-item>个人中心</el-dropdown-item> </a>
          <a href="https://github.com/lpya/vue3-vite-elementplus-admin" target="_blank"> <el-dropdown-item>项目地址</el-dropdown-item></a>
          <el-dropdown-item divided @click="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRoute, useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import { USER_LOGOUT } from '@/store/type'

const router = useRouter()
const route = useRoute()
const store = useStore()

const getFullPath = (fullPath: string) => {
  return fullPath.replace('/', '')
}
let fullPath = getFullPath(route.fullPath)
onBeforeRouteUpdate((to) => {
  fullPath = getFullPath(to.fullPath)
})
onBeforeRouteLeave((to) => {
  fullPath = getFullPath(to.fullPath)
})
const logout = async () => {
  const data = await store.dispatch(USER_LOGOUT, true)
  if (data) {
    router.push(`/?redirect=${fullPath}`)
  }
  location.reload()
}
</script>
<style lang="scss">
.header-avatar {
  .el-dropdown {
    width: 50px;
    div {
      @extend .app-icon-hover;
      img {
        width: 80%;
        height: 80%;
        border-radius: 8px;
        border: 1px solid #eee;
        cursor: pointer;
      }
    }
  }
}
</style>
