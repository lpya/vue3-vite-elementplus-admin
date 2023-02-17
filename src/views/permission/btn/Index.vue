<template>
  <div class="btn">
    <div class="container">
      <el-button v-permission="['admin']" type="primary">我是【管理员：admin】按钮</el-button>
      <el-button v-permission="['visitor']" type="success">我是【访客：visitor】按钮</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  padding: 20px;
  .container {
    background: #fff;
    border-radius: 5px;
    height: calc(100vh - 131px);
    padding: 20px;
  }
}
</style>
