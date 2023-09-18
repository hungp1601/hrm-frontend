<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Forgot password
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <el-form ref="ruleForm" class="space-y-6" :rules="rules" :model="form">
        <div>
          <el-form-item label="Email" prop="email" class="mt-2">
            <el-input v-model="form.email" placeholder="Nhập email" />
          </el-form-item>
        </div>

        <el-form-item>
          <el-button
            type="primary"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="submitForm('ruleForm')"
          >
            Forgot password
          </el-button>
        </el-form-item>
      </el-form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Return to
        <span
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          @click="LoginClick"
          >Login</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
      },
      rules: {
        email: [
          { required: true, message: "Vui lòng điền email" },
          {
            validator: (rule, value, callback) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(value)) {
                callback(new Error("Vui lòng nhập đúng định dạng email"));
              }
              callback();
            },
          },
        ],
      },
    };
  },

  computed: {
    // createFromRules
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },

    LoginClick() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>
