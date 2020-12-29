<template>
  <div class="test-son">
    <a-button type="primary" @click="onChangeLanguage"
      >切换{{ nowLanguage === "zh" ? "英文" : "中文" }}</a-button
    >
    <p>{{ $t("testFather.testSon.title") }}</p>
    <a-button @click="onShowTestModel">
      {{ $t("testFather.testSon.deleteBtnTitle") }}
    </a-button>

    <delete-model
      ref="deleteModel"
      @onListenToChangeBtn="onConfirmDelete"
    ></delete-model>
  </div>
</template>

<script>
import storage from "@/assets/js/localstorage";

export default {
  name: "TestSon",
  data() {
    return {
      nowLanguage: "zh",
    };
  },
  methods: {
    onChangeLanguage() {
      this.nowLanguage = this.nowLanguage === "zh" ? "en" : "zh";
      this.$i18n.locale = this.nowLanguage;
      storage.save("localeLanguage", this.nowLanguage);
    },
    onShowTestModel() {
      this.$refs.deleteModel.handleshowModal({
        title: this.$i18n.t("testFather.testSon.deleteModel.title"),
        content: this.$i18n.t("testFather.testSon.deleteModel.content"),
      });
    },
    onConfirmDelete(value) {
      this.$message.success(
        `${this.$i18n.t("testFather.testSon.deleteWord")}${value}`
      );
    },
  },
};
</script>
