<template>
  <div class="dashboard">
    <div class="content">
      {{number}}——dashboardzdcxfgadscgsdfg
    </div>
  </div>
</template>

<script lang="ts" setup >
import { SET_ROUTES, GENERATE_ROUTES } from '@/store/type';
import { test } from '@/api/test';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const number = ref(0);
console.log(111)
// console.log(store);
// store.dispatch(GENERATE_ROUTES, [{ id: 1 }, { id: 2 }]);
// store.commit(SET_ROUTERS, [2, 3]);
// // console.log(store.state.permission.commit('SET_ROUTERS'));
// console.log(store.state.permission.asyncRoutes);

// store.state.permission.asyncRoutes.forEach((item: any, index: number) => {
//   console.log(item.name, index);
// });

// store.state.moduleA.list.forEach((item: any, index: number) => {
//   console.log(item.title, index);
// });

// store.state.moduleA.list.forEach((item: object, index: number) => {
//   console.log(item.title, index);
// });

// store.state.moduleA.list.forEach((item, index) => {
//   console.log(item.title, index);
// });


// console.log(number);
// const articleList = async () => {
//   const aa = await test({ type: 0, pageSize: 15, sortType: 0 });
//   number.value = 111;
//   return aa;
// };
// console.log(articleList());
// getTestList();
// async function getTestList() {
//   const data = await test({ type: 0, pageSize: 15, sortType: 0 });
//   console.log(data);
// }
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