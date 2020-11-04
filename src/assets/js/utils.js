/**
 * 修改formData中的对应select的options
 * @param { array } data 表单数据
 * @param { string } itemName 要修改的项名
 * @param { string } targetKey 键名
 * @param { array } targetValue 键值
 */
export const modifyFormData = (data, itemField, targetKey, targetValue) => {
  let index = data.findIndex((item) => item.field === itemField);

  if (index !== -1) {
    data[index][targetKey] = targetValue;
  }
};
