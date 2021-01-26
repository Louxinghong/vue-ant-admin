# 表单表格组合

### 组成部分：

- form-container 表单搜索组件容器
- operation-container 操作组件容器
- table-container 表格组件容器

### 所需传入参数：

- formData 搜索表单数据
- extraParams 除搜索表单外所需的搜索条件
- columnData 表格列数据
- tableRowKey 表格唯一 key 值
- requestApi 所需请求 api

### 测试例子：

```js
// 搜索表单测试例子
const formData = [
  // 文本输入框
  {
    field: "testInput",
    label: "测试文本",
    type: "input",
  },
  // 数字输入框
  {
    field: "testInputNumber",
    label: "测试数字",
    type: "input-number",
  },
  // 下拉框
  {
    field: "testSelect",
    label: "测试选择",
    type: "select",
    options: [], // 用公共函数modifyFormData(this.formData, "testSelect", "options", this.testOptions);
  },
  // 远程搜索框
  {
    field: "testSearchSelect",
    label: "测试远程搜索选择",
    type: "search-select",
    onHandleSearch: (value) => this.onHandleTextSearch(value),
    options: [],
  },
  // 日期选择框（周）
  {
    field: "testWeek",
    label: "测试周数",
    type: "week",
  },
  // 日期选择框（月）
  {
    field: "testMonth",
    label: "测试月份",
    type: "month",
  },
  // 日期选择框（年）
  {
    field: "testYear",
    label: "测试年份",
    type: "year",
  },
  // 日期选择框（完整）
  {
    field: "testDate",
    label: "测试日期",
    type: "date",
  },
  // 日期范围选择框
  {
    field: "testRangeDate",
    label: "测试日期范围",
    type: "range-date",
    trigger: ["testStartDate", "testEndDate"],
  },
];

// 表格列表测试数据
const columnData = [
  // 常规列
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "联系电话",
    dataIndex: "mobile",
  },
  // 缩略(文字提示)列
  {
    title: "地区",
    dataIndex: "area",
    isNeedTooltip: true,
    toolLength: 10,
  },
  // 图片列
  {
    title: "头像",
    dataIndex: "avatar",
    image: true,
  },
  // 数据转换列
  {
    title: "身份",
    dataIndex: "identity",
    formatter: (row) => {
      return row.identity === 1 ? "管理员" : "子账号";
    },
  },
  {
    title: "注册时间",
    dataIndex: "registerDate",
    formatter: (row) => {
      return row.registerDate.substr(0, 10); // YYYY-MM-DD
    },
  },
  // 标签列
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
  // 操作列
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
];
```
