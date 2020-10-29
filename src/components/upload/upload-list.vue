<template>
  <div>
    <a-upload
      :custom-request="customRequest"
      :show-uploadList="true"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :remove="handleRemove"
      v-decorator="[
        'file',
        {
          rules: [{ required: true, message: '请上传附件！' }],
        },
      ]"
      :disabled="disabled"
    >
      <a-button
        type="primary"
        v-if="isShow"
        :disabled="disabled"
        :loading="loading"
      >
        <a-icon v-if="!loading" type="upload" /> {{ btnTitle }}
      </a-button>
      <span v-if="warnWord" style="color: red;">{{ warnWord }}</span>
    </a-upload>
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
  name: "UploadList",
  components: {
    deleteModel,
  },
  model: {
    prop: "params",
    event: "listenToChangebtn",
  },
  props: {
    params: {
      type: [String, Array],
      default: "" | [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    infoitemid: {
      type: Number,
      default: null,
    },
    btnTitle: {
      type: String,
      default: "Click to upload",
    },
    warnWord: {
      type: String,
      default: "",
    },
    onlyOne: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      fileList: [],
      isUpload: false,
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
                name: item.name || item.attachmentname,
                status: "done",
                url: item.url || item.attachmenturl,
              })
            );
          } else {
            val.split(",").forEach((item, index) =>
              this.fileList.push({
                uid: index,
                name: item,
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
    beforeUpload(file) {
      if (this.onlyOne) {
        if ([...this.fileList, file].length > 1) {
          this.$message.warning("只能上传一份文件！");
          return false;
        }
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
        let sendData = "";
        this.fileList.forEach((item) => {
          if (!sendData) {
            sendData = item.url;
          } else {
            sendData += "," + item.url;
          }
        });
        this.$emit("listenToChangebtn", sendData);
      } else {
        this.loading = false;
        this.$message.error(res.data.msg, 5);
      }
    },
    handleRemove(file) {
      let that = this;
      if (that.disabled) {
        this.$message.warning("仅供查看，无法删除！", 5);
      } else {
        that.$refs.deleteModel.handleshowModal({
          title: "删除文件",
          data: file,
        });
      }
    },
    onConfirmDelete(file) {
      let index = this.fileList.indexOf(file);
      let id = null;
      let newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
      let sendData = null;
      if (typeof this.params === "object") {
        sendData = [];
        id = this.params[index].id;
        this.fileList.forEach((item) => {
          sendData.push({
            name: item.name,
            url: item.url,
          });
        });
      } else {
        sendData = "";
        this.fileList.forEach((item) => {
          if (!sendData) {
            sendData = item.url;
          } else {
            sendData += "," + item.url;
          }
        });
      }

      this.$emit("listenToChangebtn", sendData);
      if (this.infoitemid) {
        this.$emit("listenToDelete", {
          infoitemid: this.infoitemid,
          id: id,
        });
      }
    },
  },
};
</script>
