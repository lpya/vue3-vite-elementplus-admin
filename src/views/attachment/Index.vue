<template>
  <div class="attachment">
    <div class="content">asdfasdfasdfasd</div>
    <div class="content">asdfasdfasdfasd</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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