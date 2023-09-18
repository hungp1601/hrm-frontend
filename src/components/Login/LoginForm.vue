<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <el-form
      ref="login"
      label-width="120px"
      class="demo-dynamic"
      :rules="rules"
      :model="form"
    >
      <el-form-item 
        prop="email" 
        label="Email"
        placeholder="Nhập email"
        label-position="top">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item
        prop="password"
        label="Password"
        placeholder="Nhập email"
        label-position="top"
      >
        <el-input v-model="form.password" type="password" />
      </el-form-item>

      <el-button type="primary" @click="login">
        Login
      </el-button>
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

  data () {
    return {
      form:{},
      rules: {
        email: [
          { required: true, message: 'Please input email address' },
          { type: 'email', message: 'Please input correct email address' }
        ],
        password: [{
          required: true,
          message: 'Password can not be null'
        },
        {
            validator: (rule, value, callback) => {
              if (value && value.length < 8) {
                callback(new Error('Password length must be greater or equal to 8'))
              }
              callback()
            },
          },
      ]
      }
    }
  },
  methods: {
    async login(){
      const valid = await this.validateForm(this.$refs.login)
      if (valid)
      console.log('hehe')
    }
  }
}
</script>

<style lang="scss">

</style>
