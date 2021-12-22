<!--
 * @Description: 头部头像
 * @Author: hutu
 * @Date: 2021-12-22 15:59:15
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-22 16:10:02
-->
<template>
  <div class="header-avatar">
    <img src="@/assets/image/logo.png" alt="logo" />
  </div>
</template>

<style lang="scss">
.header-avatar {
  @extend .app-icon-hover;
  img {
    width: 80%;
    height: 80%;
    border-radius: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}
</style>
