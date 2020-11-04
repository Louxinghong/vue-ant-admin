<template>
  <div class="table-container">
    <a-table
      :columns="columnData"
      :row-key="(record) => record[tableRowKey]"
      :data-source="tableData"
      :pagination="
        pagination
          ? {
              ...pagination,
              showTotal: (total) => `共${pagination.total}条数据`,
            }
          : {}
      "
      :loading="loading"
      @change="onHandleTableChange"
    ></a-table>
  </div>
</template>

<script>
export default {
  name: "TableContainer",
  inject: ["loading", "columnData", "tableRowKey"],
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onHandleTableChange(pagination) {
      this.pagination = pagination;
      this.$emit("onListenToTable", {
        pageSize: pagination.pageSize,
        current: pagination.current,
      });
    },
  },
};
</script>
