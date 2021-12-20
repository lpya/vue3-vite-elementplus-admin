<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
const color = 'red'
// const handleComponent = (Component: any) => {
//   console.log(Component)
//   return Component
// }
</script>
<style lang="scss" scoped>
.text {
  color: v-bind(color);
}
.app-main {
  height: calc(100vh - 50px);
  width: 100%;
  background: #f0f2f5;
  overflow: hidden;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
