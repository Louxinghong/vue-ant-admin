import storage from "@/assets/js/localstorage";
import axios from "axios";
import router from "@/router/router";
axios.defaults.timeout = 20000;
axios.defaults.retry = 0;
axios.defaults.retryDelay = 1000;

//接口post转换接口参数格式
axios.defaults.transformRequest = [
  (data, config) => {
    if (data) {
      // 文件类型
      if (
        config["Content-Type"] &&
        config["Content-Type"].toLowerCase() ===
          "multipart/form-data;charset=utf-8"
      ) {
        return data;
      }
      // 普通参数
      config["Content-Type"] = "application/json; charset=UTF-8";
      return JSON.stringify(data);
    }
    return data;
  },
];

//请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (storage.fetch("accessToken")) {
      config.headers.common["accessToken"] = storage.fetch("accessToken");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (data) => {
    // 响应成功关闭loading
    let errorCode = data.data.errorCode;
    switch (errorCode) {
      case -99:
        storage.remove("accessToken");
        storage.remove("userType");
        router.replace({
          name: "login",
        });
        return data;
      case -100:
        storage.remove("accessToken");
        storage.remove("userType");
        router.replace({
          name: "login",
        });
        return data;
      default:
        return data;
    }
  },
  (error) => {
    if (
      error.response &&
      (error.response.status == 502 ||
        error.response.status == 504 ||
        error.response.status == 404 ||
        error.response.status == 500)
    ) {
      error = "服务器被吃了⊙﹏⊙∥";
    } else if (error.response && error.response.status == 403) {
      error = "权限不足,请联系管理员!";
    } else if (error.message.includes("timeout")) {
      error = "请求超时";
    } else {
      error = "未知错误!";
    }
    return Promise.reject(error);
  }
);

export default axios;
