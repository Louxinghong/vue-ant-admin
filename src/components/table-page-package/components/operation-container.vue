<template>
  <div class="operation-container">
    <div class="left-operation">
      <slot name="left-operation"></slot>
    </div>
    <div class="right-operation">
      <slot name="right-operation"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperationContainer",
};
</script>

<style lang="less" scoped>
.operation-container {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 10px;
}
</style>
