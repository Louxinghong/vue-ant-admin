<template>
  <div class="form-container">
    <a-form :form="form" layout="inline">
      <a-form-item
        v-for="item in formData"
        :label="item.label"
        :key="item.field"
      >
        <a-input
          v-if="item.type === 'input'"
          v-decorator="[`${item.field}`]"
          :placeholder="`请输入${item.label}`"
          :style="{ width: item.width ? item.width + 'px' : '160px' }"
        />
        <a-input-number
          v-else-if="item.type === 'input-number'"
          v-decorator="[`${item.field}`]"
          :placeholder="`请输入${item.label}`"
          :min="item.min ? item.min : 0"
          :style="{ width: item.width ? item.width + 'px' : '160px' }"
        />
        <a-select
          v-else-if="item.type === 'select'"
          v-decorator="[`${item.field}`]"
          :placeholder="`请选择${item.label}`"
          :style="{ width: item.width ? item.width + 'px' : '160px' }"
          allowClear
        >
          <a-select-option
            v-for="(itemSelect, index) in item.options"
            :key="index"
            :value="itemSelect.value"
          >
            {{ itemSelect.label }}
          </a-select-option>
        </a-select>
        <a-week-picker
          v-else-if="item.type === 'week'"
          v-decorator="[`${item.field}`]"
          :placeholder="`请选择${item.label}`"
          :style="{ width: item.width ? item.width + 'px' : '160px' }"
        />
        <a-month-picker
          v-else-if="item.type === 'month'"
          v-decorator="[`${item.field}`]"
          :placeholder="`请选择${item.label}`"
          :style="{ width: item.width ? item.width + 'px' : '160px' }"
        />
        <a-date-picker
          v-else-if="item.type === 'date'"
          v-decorator="[`${item.field}`]"
          :value-format="item.format ? item.format : 'YYYY-MM-DD'"
          :placeholder="`请选择${item.label}`"
          :style="{ width: item.width ? item.width + 'px' : '160px' }"
        />
        <a-range-picker
          v-else-if="item.type === 'range-date'"
          v-decorator="[`${item.field}`]"
          :value-format="item.format ? item.format : 'YYYY-MM-DD'"
          :style="{ width: item.width ? item.width + 'px' : '260px' }"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          :loading="loading"
          icon="search"
          @click="onSearch"
          >搜索
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "FormContainer",
  inject: ["loading", "formData"],
  data() {
    return {
      form: this.$form.createForm(this, { name: "search" }),
    };
  },
  methods: {
    onSearch() {
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        this.formData.forEach((item, index) => {
          if (item.type === "range-date") {
            let findField = fieldsValue[item.field];
            this.$set(
              fieldsValue,
              this.formData[index].trigger[0],
              findField && findField.length > 0 ? findField[0] : undefined
            );
            this.$set(
              fieldsValue,
              this.formData[index].trigger[1],
              findField && findField.length > 0 ? findField[1] : undefined
            );
            delete fieldsValue[item.field];
          }
        });

        this.$emit("onListenToSearch", fieldsValue);
      });
    },
  },
};
</script>
