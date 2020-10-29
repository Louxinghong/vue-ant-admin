/**
 * 电话号码验证
 * @param {any} rule 验证规则
 * @param {string} value 电话号码
 * @param {Function} callback 回调函数
 */
export const phoneValidator = (rule, value, callback) => {
  const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
  if (!value) {
    callback(new Error("请输入手机号！"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的手机号！"));
  } else {
    callback();
  }
};

/**
 * 身份证验证
 * @param {any} rule 验证规则
 * @param {string} value 身份证
 * @param {Function} callback 回调函数
 */
export const idCardValidator = (rule, value, callback) => {
  const reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
  if (!value) {
    callback(new Error("请输入身份证号！"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的身份证号！"));
  } else {
    callback();
  }
};

/**
 * 邮箱验证
 * @param {any} rule 验证规则
 * @param {string} value 邮箱地址
 * @param {Function} callback 回调函数
 */
export const emailValidator = (rule, value, callback) => {
  const reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  if (!value) {
    callback(new Error("请输入邮箱地址！"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的邮箱地址！"));
  } else {
    callback();
  }
};

/**
 * 密码强度校验
 * @param {any} rule 验证规则
 * @param {string} value 密码
 * @param {Function} callback 回调函数
 */
export const passwordValidator = (rule, value, callback) => {
  // const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^\sA-Za-z0-9])\S{8,20}$/; // 包含数字、字母大写和小写、特殊字符、8-20位
  const reg = /((?=.*[a-zA-Z])(?=.*\d)|(?=.*\d)(?=[a-zA-Z])(?=.*[#@!~%^&*]))[a-zA-Z\d#@!~%^&*]{8,20}/;
  if (!value) {
    callback(new Error("请输入密码！"));
  } else if (!reg.test(value)) {
    callback(
      new Error(
        "密码强度不够,必须包含英文，数字，可包含特殊字符，且八位至二十位！"
      )
    );
  } else {
    callback();
  }
};

/**
 * 注册用户名验证
 * @param {any} rule 验证规则
 * @param {string} value 密码
 * @param {Function} callback 回调函数
 */
export const usernameValidator = (rule, value, callback) => {
  const reg = /^([0-9A-za-z_]{4,11})$/;
  if (!value) {
    callback(new Error("请输入用户名！"));
  } else if (!reg.test(value)) {
    callback(new Error("用户名英文或英文数字组合，且四至十一位！"));
  } else {
    callback();
  }
};

/**
 * 项目编号验证
 * @param {any} rule 验证规则
 * @param {string} value 项目编号
 * @param {Function} callback 回调函数
 */
export const projectNOValidator = (rule, value, callback) => {
  // const reg = /^[A-Z][0-9A-za-z_]*$/;
  const reg = /[\u4e00-\u9fa5]/;
  if (!value) {
    callback(new Error("请输入项目编号！"));
  } else if (reg.test(value)) {
    // callback(new Error("项目编号只能由字母或数字组成，且由大写字母开头！"));
    callback(new Error("项目编号不能包含中文"));
  } else {
    callback();
  }
};