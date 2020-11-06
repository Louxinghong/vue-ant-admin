<template>
  <div class="form-package">
    <table-page-package
      :form-data="formData"
      :extra-params="extraParams"
      :column-data="columnData"
      :table-row-key="'id'"
      :request-api="'getTestData'"
    >
      <template v-slot:left-operation>
        <a-button type="primary">左边测试按钮</a-button>
      </template>
      <template v-slot:right-operation>
        <a-button type="primary">右边测试按钮</a-button>
      </template>
    </table-page-package>
  </div>
</template>

<script>
import { modifyFormData } from "@/assets/js/utils";

export default {
  name: "ComponetPackageFormPackage",
  data() {
    return {
      formData: [
        {
          field: "testInput",
          label: "测试文本",
          type: "input",
        },
        {
          field: "testInputNumber",
          label: "测试数字",
          type: "input-number",
        },
        {
          field: "testSelect",
          label: "测试选择",
          type: "select",
          options: [],
        },
        {
          field: "testWeek",
          label: "测试周数",
          type: "week",
        },
        {
          field: "testMonth",
          label: "测试月份",
          type: "month",
        },
        {
          field: "testDate",
          label: "测试日期",
          type: "date",
        },
        {
          field: "testRangeDate",
          label: "测试日期范围",
          type: "range-date",
          trigger: ["testStartDate", "testEndDate"],
        },
      ],
      columnData: [
        {
          title: "名称",
          dataIndex: "name",
        },
        {
          title: "联系电话",
          dataIndex: "mobile",
        },
        {
          title: "头像",
          dataIndex: "avatar",
          image: true,
        },
        {
          title: "注册时间",
          dataIndex: "registerDate",
          formatter: (row) => {
            return row.registerDate.substr(0, 10); // YYYY-MM-DD
          },
        },
        {
          title: "状态",
          dataIndex: "status",
          tags: [
            {
              label: "正常",
              color: "green",
              onShow: (row) => row.status === "normal",
            },
            {
              label: "一般",
              color: "orange",
              onShow: (row) => row.status === "general",
            },
            {
              label: "异常",
              color: "red",
              onShow: (row) => row.status === "error",
            },
          ],
        },
        {
          title: "操作",
          width: 180,
          operations: [
            {
              label: "测试按钮1",
              onClick: () => alert("阿巴阿巴"),
            },
            {
              label: "测试按钮2",
              onClick: () => alert("阿勒阿勒"),
            },
          ],
        },
      ],
      extraParams: {},
      testOptions: [
        {
          value: 1,
          label: "测试选择数据1",
        },
        {
          value: 2,
          label: "测试选择数据2",
        },
        {
          value: 3,
          label: "测试选择数据3",
        },
      ],
    };
  },
  created() {
    modifyFormData(this.formData, "testSelect", "options", this.testOptions);
  },
};
</script>
