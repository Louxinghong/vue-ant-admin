<template>
  <div class="login-container">
    <div class="content">
      <p class="title">欢迎登录后台管理系统</p>
      <div class="detail">
        <a-form-model
          ref="form"
          class="ant-advanced-search-form"
          :model="form"
          :rules="rules"
        >
          <a-row :gutter="24">
            <a-col :span="24">
              <a-form-model-item prop="username">
                <a-input
                  class="input"
                  v-model.trim="form.username"
                  placeholder="请输入用户名"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0, 0, 0, 0.25);"
                  />
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="24">
              <a-form-model-item prop="password">
                <a-input
                  class="input"
                  type="password"
                  v-model.trim="form.password"
                  placeholder="请输入密码"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25);"
                  />
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="24">
              <a-button
                class="login-btn"
                type="primary"
                :loading="loading"
                @click="onLogin"
                >登录</a-button
              >
            </a-col>
          </a-row>
        </a-form-model>
        <div class="other-link">
          <a-button type="link" class="password-btn">忘记密码</a-button>
          <a-button type="link" class="register-btn">立即注册</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import url from "../../assets/js/config";
import storage from "../../assets/js/localstorage";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名！" }],
        password: [{ required: true, message: "请输入密码！" }],
      },
    };
  },
  created() {
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      // 按回车登录
      if (keycode === 13) {
        that.onLogin();
        return false;
      }
    };
  },
  methods: {
    onRegister() {
      this.$router.push({ name: "register" });
    },
    onLogin() {
      let that = this;
      that.$refs.form.validate((fieldsValue) => {
        if (fieldsValue) {
          that.loading = true;
          try {
            storage.save("username", that.form.username);
            that.$router.push("/");
          } catch (err) {
            that.loading = false;
            that.$message.error(err, 5);
          } finally {
            that.loading = false;
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  padding: 50px 0;
  background-color: #d1d1d1;
  background: url("../../assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.content {
  position: absolute;
  width: 500px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 30px;
  background-color: #fff;
  border-radius: 10px;
}
.content .title {
  margin: 0 0 20px;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}
.content .detail {
  position: relative;
  width: 500px;
  padding: 20px 10px 10px;
  /* border: 1px solid #c7c6c6; */
  background-color: #fff;
  border-radius: 10px;
}
.content .detail .ant-form {
  width: 85%;
  margin-left: 7.5%;
}
.content .detail .ant-form .ant-form-item {
  margin-bottom: 20px;
}
.content .detail >>> .ant-input {
  width: 100%;
  height: 45px;
}
.content .detail .login-btn {
  width: 100%;
  height: 40px;
}
.content .detail .other-link {
  margin: 10px 0;
  height: 30px;
  padding: 0 4%;
}
.content .detail .other-link .register-btn {
  float: right;
}
</style>
