<template>
  <div class="table-page-package">
    <form-container
      :loading="tableLoading || tempLoading"
      @onListenToSearch="onFormSearch"
    >
      <template v-slot:form-content>
        <slot name="form-content"></slot>
      </template>
    </form-container>

    <operation-container>
      <template v-slot:left-operation>
        <slot name="left-operation"></slot>
      </template>
      <template v-slot:right-operation>
        <slot name="right-operation"></slot>
      </template>
    </operation-container>

    <table-container
      :loading="tableLoading || tempLoading"
      :table-data="tableData"
      :pagination="pagination"
      @onListenToTable="onFetch"
    >
      <template v-slot:table-content>
        <slot name="table-content"></slot>
      </template>
    </table-container>
  </div>
</template>

<script>
import { isEmpty } from "lodash";
import url from "@/assets/js/config";
import FormContainer from "./components/form-container.vue";
import OperationContainer from "./components/operation-container.vue";
import TableContainer from "./components/table-container.vue";

export default {
  name: "TablePagePackage",
  global: true,
  components: {
    FormContainer,
    OperationContainer,
    TableContainer,
  },
  provide() {
    return {
      formData: this.formData,
      columnData: this.columnData,
      tableRowKey: this.tableRowKey,
    };
  },
  props: {
    tempLoading: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Array,
      default: () => [],
    },
    extraParams: {
      type: Object,
      default: () => ({}),
    },
    columnData: {
      type: Array,
      default: () => [],
    },
    tableRowKey: {
      type: String,
      default: "id",
    },
    requestApi: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tableLoading: false,
      fieldsValue: {},
      tableData: [],
      pagination: {},
    };
  },
  mounted() {
    if (this.requestApi) {
      this.onFormSearch();
    }
  },
  methods: {
    onRefresh() {
      this.pagination.pageSize = this.pagination.pageSize
        ? this.pagination.pageSize
        : 10;
      this.pagination.current = this.pagination.current
        ? this.pagination.current
        : 1;
      this.onFetch();
    },
    onFormSearch(value) {
      this.fieldsValue = { ...value, ...this.extraParams };
      this.pagination = {
        pageSize: 10,
        current: 1,
      };
      this.onFetch();
    },
    onFetch(value) {
      this.pagination = isEmpty(value)
        ? this.pagination
        : {
            ...value,
          };
      let params = {
        ...this.fieldsValue,
        pageSize: this.pagination.pageSize,
        pageIndex: this.pagination.current,
      };
      try {
        // 模拟请求
        this.tableLoading = true;
        this.tableLoading = false;
        console.log(url[this.requestApi]);
        console.log(params);
        // 模拟数据
        this.tableData = [
          {
            id: 1,
            name: "张三",
            mobile: "13899990000",
            area: "中国浙江省宁波市奉化区巴拉巴拉巴拉巴拉巴拉",
            avatar: require("@/assets/images/admin.png"),
            identity: 1,
            registerDate: "2020-01-01 10:10:10",
            status: "normal",
          },
          {
            id: 2,
            name: "李四",
            mobile: "13688887777",
            avatar: [
              require("@/assets/images/admin.png"),
              require("@/assets/images/admin.png"),
            ],
            registerDate: "2020-02-02 10:20:30",
            status: "general",
          },
          {
            id: 3,
            name: "王五",
            mobile: "13455556666",
            registerDate: "2020-03-03 10:10:10",
            status: "error",
          },
        ];
        this.$set(this.pagination, "total", 3);
      } catch (err) {
        this.tableLoading = false;
        this.$message.error(err);
      } finally {
        this.tableLoading = false;
      }
    },
  },
};
</script>
