<template>
  <div class="index">
    <div class="content">scss测试</div>
    <el-button>测试</el-button>
    {{ testnum }}
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const testnum = computed(() => {
  return store.state.testnum
})
</script>
<style lang="scss">
.index {
  .content {
    background: $menuActiveText;
  }
}
</style>
