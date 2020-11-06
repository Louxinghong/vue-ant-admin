<template>
  <div class="table-page-package">
    <form-container @onListenToSearch="onFormSearch"></form-container>
    <operation-container>
      <template v-slot:left-operation>
        <slot name="left-operation"></slot>
      </template>
      <template v-slot:right-operation>
        <slot name="right-operation"></slot>
      </template>
    </operation-container>
    <table-container
      :table-data="tableData"
      :pagination="pagination"
      @onListenToTable="onFetch"
    ></table-container>
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
      loading: this.loading,
      formData: this.formData,
      columnData: this.columnData,
      tableRowKey: this.tableRowKey,
    };
  },
  props: {
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
      loading: false,
      fieldsValue: {},
      tableData: [],
      pagination: {},
    };
  },
  created() {
    this.onFormSearch();
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
      this.loading = true;
      this.fieldsValue = { ...value, ...this.extraParams };
      this.pagination = {
        pageIndex: 1,
        pageSize: 10,
        current: 1,
      };
      this.onFetch();
    },
    onFetch(paginationChange = {}) {
      this.pagination = isEmpty(paginationChange)
        ? this.pagination
        : {
            ...paginationChange,
          };
      let params = {
        ...this.fieldsValue,
        ...this.pagination,
      };
      try {
        // 模拟请求
        this.loading = false;
        console.log(url[this.requestApi]);
        console.log(params);
        // 模拟数据
        this.tableData = [
          {
            id: 1,
            name: "张三",
            mobile: "13899990000",
            registerDate: "2020-01-01 10:10:10",
            avatar: require("@/assets/images/admin.png"),
            status: "normal",
          },
          {
            id: 2,
            name: "李四",
            mobile: "13688887777",
            registerDate: "2020-02-02 10:20:30",
            avatar: [
              require("@/assets/images/admin.png"),
              require("@/assets/images/admin.png"),
            ],
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
        this.loading = false;
        this.$message.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
