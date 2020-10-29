<template>
  <div>
    <a-upload
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :custom-request="customRequest"
      :show-uploadList="true"
      :file-list="fileList"
      :before-upload="beforeUpload"
      @preview="handlePreview"
      :remove="handleRemove"
      :disabled="disabled"
    >
      <div v-if="fileList.length === 0 || fileList.length < picLength">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>

    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img
        alt="图片路径出错"
        style="width: 100%;margin-top: 20px;"
        :src="previewImage"
      />
    </a-modal>
    <delete-model
      ref="deleteModel"
      @listenToChangebtn="onConfirmDelete"
    ></delete-model>
  </div>
</template>

<script>
import url from "../../assets/js/config";
import deleteModel from "../delete-model/deleteModel.vue";

export default {
  name: "UploadPicture",
  // model: {
  //   prop: "params",
  //   event: "listenToChangebtn",
  // },
  components: {
    deleteModel,
  },
  props: {
    params: {
      type: [String, Array],
      default: "" | [],
    },
    picLength: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fileList: [],
      isUpload: false,
      previewVisible: false,
      previewImage: "",
    };
  },
  watch: {
    params: {
      handler: function(val) {
        if (val && !this.isUpload) {
          this.fileList = [];
          if (typeof val === "object") {
            val.forEach((item, index) =>
              this.fileList.push({
                uid: index,
                name: item || item.name || item.attachmentname,
                status: "done",
                url: item || item.url || item.attachmenturl,
              })
            );
          } else {
            val.split(",").forEach((item, index) =>
              this.fileList.push({
                uid: index,
                name: item.substr(75),
                status: "done",
                url: item,
              })
            );
          }
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handlePreview(file) {
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.warning("只能上传JPG/PNG类型图片！");
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.warning("图片必须小于2M！");
        return false;
      }
      return true;
      // this.fileList = [...this.fileList, file];
    },
    async customRequest(info) {
      let formData = new FormData();
      this.isUpload = true;
      formData.append("file", info.file);
      this.loading = true;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data;charset=utf-8",
        },
      };
      let res = await this.axios.post(url.uploadOneFile, formData, config);
      if (res.data.code === 0) {
        this.fileList.push({
          uid: info.file.uid,
          name: res.data.data[0].name,
          status: "done",
          url: res.data.data[0].url,
        });
        this.loading = false;
        // this.fileList.forEach((element) => {
        //   if (element.name == res.data.data[0].name) {
        //     element.url = res.data.data[0].url;
        //   }
        // });
        let sendUrl = "";
        let sendName = "";
        this.fileList.forEach((item) => {
          if (!sendUrl) {
            sendUrl = item.url;
            sendName = item.name;
          } else {
            sendUrl += "," + item.url;
            sendName += "," + item.name;
          }
        });
        this.$emit("listenToChangebtn", {
          url: sendUrl,
          name: sendName,
        });
      } else {
        this.loading = false;
        this.$message.error(res.data.msg, 5);
        this.$emit("listenToChangebtn", {
          url: "",
          name: "",
        });
      }
    },
    handleRemove(file) {
      let that = this;
      if (that.disabled) {
        this.$message.warning("仅供查看，无法删除！", 5);
      } else {
        that.$refs.deleteModel.handleshowModal({
          title: "删除图片",
          content: "确认要删除相关图片吗",
          data: file,
        });
      }
    },
    onConfirmDelete(value) {
      let index = this.fileList.indexOf(value);
      let newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
      let sendUrl = "";
      let sendName = "";
      console.log(this.fileList);
      this.fileList.forEach((item) => {
        if (!sendUrl) {
          sendUrl = item.url;
          sendName = item.name;
        } else {
          sendUrl += "," + item.url;
          sendName += "," + item.name;
        }
      });
      this.$emit("listenToChangebtn", {
        url: sendUrl,
        name: sendName,
      });
    },
  },
};
</script>

<style scoped>
.avatar-uploader >>> .ant-upload-list-picture-card-container {
  width: 128px;
  height: 128px;
}
.avatar-uploader >>> .ant-upload-list-item {
  width: 128px;
  height: 128px;
}
</style>
