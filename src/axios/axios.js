import axios from "axios";
import storage from "@/assets/js/localstorage";
import router from "@/router/router";

axios.defaults.baseURL = "https://api.bilibili.com";
axios.defaults.timeout = 3000;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

//接口post转换接口参数格式
axios.defaults.transformRequest = [
  (data, config) => {
    if (data) {
      // 文件类型
      if (config.post["Content-Type"] === "multipart/form-data;charset=utf-8") {
        return data;
      }
      // FormData格式
      else if (
        config.post["Content-Type"] === "application/x-www-form-urlencoded"
      ) {
        let tempData = [];
        Object.keys(data).forEach((item) => {
          tempData.push(`${item}=${data[item]}`);
        });
        return tempData.join("&");
      }
      // JSON格式
      else {
        return JSON.stringify(data);
      }
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
