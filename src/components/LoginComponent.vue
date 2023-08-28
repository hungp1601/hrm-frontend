<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <el-form
      ref="login"
      label-width="120px"
      class="demo-dynamic"
      :rules="rules"
      :model="login"
    >
      <el-form-item prop="email" label="Email">
        <el-input v-model="login.email" />
      </el-form-item>
      <el-form-item
        prop="password"
        label="Password"
        :rules="{
          required: true,
          message: 'Password can not be null'
        }"
      >
        <el-input v-model="login.password" type="password" />
      </el-form-item>

      <el-button type="primary" @click="submitForm('login')">
        Submit
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { ServiceName } from '@/services'
export default {
  data () {
    return {
      login:{},
      rules: {
        email: [
          { required: true, message: 'Please input email address' },
          { type: 'email', message: 'Please input correct email address' }
        ],
        password: {
          required: true,
          message: 'Password can not be null'
        }
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = await this.$getService(ServiceName.CmsCategory).get(
            this.$axios
          )
        } else {
          console.log('error login!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss"></style>
