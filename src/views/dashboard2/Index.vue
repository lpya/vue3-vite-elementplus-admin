<template>
  <div class="dashboard">
    <div class="content">{{ number }}——dashboardzdcxfgadscgsdfg</div>
  </div>
</template>

<script lang="ts" setup >
import { SET_ROUTES, GENERATE_ROUTES } from "@/store/type";
import { test } from "@/api/test";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const number = ref(0);
</script>

<style lang="scss" scoped>
.dashboard {
  margin: 20px;
  .content {
    background: #fff;
    padding: 20px;
    min-height: 800px;
  }
}
</style>