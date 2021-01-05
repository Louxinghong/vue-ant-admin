<template>
  <div class="message-code">
    <a-input ref="inputOne" v-model="codeOne"></a-input>
    <a-input ref="inputTwo" v-model="codeTwo"></a-input>
    <a-input ref="inputThree" v-model="codeThree"></a-input>
    <a-input ref="inputFour" v-model="codeFour"></a-input>
    <a-input ref="inputFive" v-model="codeFive"></a-input>
    <a-input ref="inputSix" v-model="codeSix"></a-input>
  </div>
</template>

<script>
export default {
  name: "MessageCode",
  global: true,
  data() {
    return {
      codeOne: null,
      codeTwo: null,
      codeThree: null,
      codeFour: null,
      codeFive: null,
      codeSix: null,
    };
  },
  watch: {
    codeOne: {
      handler: function(val) {
        if (val) {
          this.$refs.inputTwo.focus();
          this.codeTwo = null;
        }
      },
    },
    codeTwo: {
      handler: function(val) {
        if (val) {
          this.$refs.inputThree.focus();
          this.codeThree = null;
        }
      },
    },
    codeThree: {
      handler: function(val) {
        if (val) {
          this.$refs.inputFour.focus();
          this.codeFour = null;
        }
      },
    },
    codeFour: {
      handler: function(val) {
        if (val) {
          this.$refs.inputFive.focus();
          this.codeFive = null;
        }
      },
    },
    codeFive: {
      handler: function(val) {
        if (val) {
          this.$refs.inputSix.focus();
          this.codeSix = null;
        }
      },
    },
    codeSix: {
      handler: function(val) {
        if (val) {
          this.$refs.inputSix.blur();
          this.$message.success("短信验证成功");
        }
      },
    },
  },
  mounted() {
    this.$refs.inputOne.focus();
  },
};
</script>

<style lang="less" scoped>
.message-code {
  width: 100%;
}

.ant-input {
  width: 10%;
  margin-right: 1%;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0;
  text-align: center;
}
</style>
