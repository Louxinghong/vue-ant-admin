<template>
  <div class="table-container">
    <a-table
      :row-key="(record) => record[tableRowKey]"
      :data-source="tableData"
      :pagination="{
        ...pagination,
        showTotal: (total) => `共${pagination.total}条数据`,
      }"
      :loading="loading"
      @change="onHandleTableChange"
    >
      <template v-for="(item, i) in columnData">
        <!-- 缩略(文字提示)列 -->
        <a-table-column
          v-if="item.isNeedTooltip"
          :title="item.title"
          :data-index="item.dataIndex"
          :width="item.width"
          :fixed="item.fixed"
          :key="i"
        >
          <template slot-scope="text">
            <a-tooltip>
              <template slot="title">
                {{ text }}
              </template>
              {{
                text && text.length > item.toolLength
                  ? text.substr(0, item.toolLength) + "..."
                  : text
              }}
            </a-tooltip>
          </template>
        </a-table-column>

        <!-- 数据转换列 -->
        <a-table-column
          v-else-if="item.formatter"
          :title="item.title"
          :data-index="item.dataIndex"
          :width="item.width"
          :fixed="item.fixed"
          :key="i"
        >
          <template slot-scope="text, record">
            {{ item.formatter(record) }}
          </template>
        </a-table-column>

        <!-- 图片列 -->
        <a-table-column
          v-else-if="item.image"
          :title="item.title"
          :data-index="item.dataIndex"
          :width="item.width"
          :fixed="item.fixed"
          :key="i"
        >
          <template slot-scope="text">
            <span v-if="!text">
              暂无图片
            </span>
            <span v-else-if="typeof text === 'string'">
              <img
                class="image"
                v-for="(img, j) in text.split(',')"
                :src="img"
                :key="j"
                alt=""
              />
            </span>
            <span v-else-if="typeof text === 'object'">
              <img
                class="image"
                v-for="(img, j) in text"
                :src="img"
                :key="j"
                alt=""
              />
            </span>
          </template>
        </a-table-column>

        <!-- 标签列 -->
        <a-table-column
          v-else-if="item.tags"
          :title="item.title"
          :data-index="item.dataIndex"
          :width="item.width"
          :fixed="item.fixed"
          :key="i"
        >
          <template slot-scope="text, record">
            <a-tag
              v-for="(tag, j) in item.tags"
              v-show="tag.onShow(record)"
              :color="tag.color"
              :key="j"
              >{{ tag.label }}
            </a-tag>
          </template>
        </a-table-column>

        <!-- 操作列 -->
        <a-table-column
          v-else-if="item.operations"
          :title="item.title"
          :data-index="item.dataIndex"
          :width="item.width"
          :fixed="item.fixed"
          :key="i"
        >
          <template slot-scope="text, record">
            <a
              class="operation-a"
              v-for="(operation, j) in item.operations"
              :key="j"
              @click="operation.onClick(record)"
              >{{ operation.label }}
            </a>
          </template>
        </a-table-column>

        <!-- 常规列 -->
        <a-table-column
          v-else
          :title="item.title"
          :data-index="item.dataIndex"
          :width="item.width"
          :fixed="item.fixed"
          :key="i"
        >
          <template slot-scope="text">
            {{ text }}
          </template>
        </a-table-column>
      </template>
    </a-table>
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
  mounted() {
    console.log(this.tableData);
  },
  methods: {
    onHandleTableChange(pagination) {
      this.$emit("onListenToTable", {
        pageSize: pagination.pageSize,
        current: pagination.current,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.operation-a {
  color: #1890ff;

  &:not(:last-child) {
    margin-right: 5px;
  }
}

.image {
  width: 25px;
  height: 25px;

  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
