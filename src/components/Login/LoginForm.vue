<template>
  <div class="flex flex-col justify-center items-center login-form">
    <div class="login-form__logo">HRM</div>
    <el-form
      ref="login"
      class="login-form__wrapper w-full"
      :rules="rules"
      :model="form"
    >
      <el-form-item prop="username" label="Tài khoản" label-position="top">
        <el-input placeholder="Nhập email" v-model="form.email" />
      </el-form-item>

      <el-form-item prop="password" label="Password" label-position="top">
        <el-input
          v-model="form.password"
          placeholder="Nhập mật khẩu"
          type="password"
          show-password
        />
      </el-form-item>

      <el-button class="login-form__submit" type="primary" @click="handleLogin">
        Đăng nhập
      </el-button>

      <icon name="bi-arrow-bar-up"/>
    </el-form>
  </div>
</template>

<script>
export default {
  // props: {
  //   email: {
  //     type: String,
  //   },
  //   password: {
  //     type: String,
  //   }
  // },

  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "Please input email address" },
          { type: "email", message: "Please input correct email address" },
        ],
        password: [
          {
            required: true,
            message: "Password can not be null",
          },
          {
            validator: (rule, value, callback) => {
              if (value && value.length < 8) {
                callback(
                  new Error("Password length must be greater or equal to 8")
                );
              }
              callback();
            },
          },
        ],
      },
    };
  },
  methods: {
    async handleLogin() {
      const valid = await this.validateForm(this.$refs.login);
      if (valid) console.log("hehe");
    },
  },
};
</script>

<style lang="scss">
.login-form {
  max-width: 480px;
  width: 100%;
  height: 480px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  background: #fff;
  padding: 0 56px;

  &__logo {
    color: #2362ea;
    font-family: Khula, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .el-form-item {
    margin-bottom: 0;

    &__label {
      color: #6f6f6f;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0px;
    }

    &__submit {
      color: #fff;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .el-input__inner {
      height: 50px;
      border-radius: 8px;
      border: 1px solid #d5d5d5;
    }
  }
}
</style>
