<template>
  <router-view></router-view>
  <!-- <el-button @click="test">测试</el-button> -->
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const menuBg = computed(() => store.state.theme.styles.menuBg)
// const test = () => {
//   store.commit('SET_TEST')
//   console.log(menuBg.value)
// }
</script>
<style lang="scss">
#app {
  .app-menu-bg {
    background: v-bind(menuBg);
  }
}
</style>
