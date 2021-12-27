<template>
  <div class="attachment">
    <div class="content">attachment</div>
  </div>
</template>

<style lang="scss">
.attachment {
  height: calc(100% - 40px);
  overflow: auto;
  padding: 20px;
  .content {
    background: #fff;
    padding: 20px;
    min-height: 800px;
    border-radius: 5px;
  }
}
</style>
