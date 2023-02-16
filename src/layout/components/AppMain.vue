<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" :key="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 51px);
  width: 100%;
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
