<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ManinContainer",
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* 滚动条样式 */
    width: 6px; /* 高宽分别对应横竖滚动条的尺寸 */
    height: 0;
  }
  &::-webkit-scrollbar-track {
    /* 滚动槽 */
    /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
    border-radius: 5px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条滑块 */
    border-radius: 6px;
    /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
    background: rgba(195, 195, 196, 0.5);
  }
}
</style>
