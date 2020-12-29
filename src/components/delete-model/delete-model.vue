<template>
  <div>
    <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="loading"
      @cancel="onCancelDelete"
    >
      <img class="warnImg" src="../../assets/images/warn.png" alt="" />
      <span>{{ content ? content : "确认要删除相关信息吗" }}</span>

      <template slot="footer">
        <a-button :loading="loading" @click="onCancelDelete">
          {{ $t("deleteModel.cancel") }}
        </a-button>
        <a-button type="primary" :loading="loading" @click="onConfirmDelete">
          {{ $t("deleteModel.confirm") }}
        </a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteModel",
  global: true,
  data() {
    return {
      visible: false,
      title: "",
      content: "",
      loading: false,
      data: {},
    };
  },
  methods: {
    handleshowModal(e) {
      this.visible = true;
      this.title = e.title;
      this.content = e.content;
      this.data = e.data;
    },
    onConfirmDelete() {
      this.onCancelDelete();
      this.$emit("onListenToChangeBtn", this.data);
    },
    onCancelDelete() {
      this.visible = false;
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style scoped>
.warnImg {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
