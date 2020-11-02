<template>
  <div class="test-son">
    <p>第二层</p>
    <a-button @click="onShowTestModel">测试公共组件删除弹窗</a-button>

    <delete-model
      ref="deleteModel"
      @listenToChangeBtn="onConfirmDelete"
    ></delete-model>
  </div>
</template>

<script>
export default {
  name: "TestSon",
  methods: {
    onShowTestModel() {
      this.$refs.deleteModel.handleshowModal({
        title: "测试删除弹窗",
        content: "确定要测试删除吗？",
      });
    },
    onConfirmDelete(value) {
      this.$message.success(`删除成功${value}`);
    },
  },
};
</script>
