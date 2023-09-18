import Vue from 'vue'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({
    computed: {
      currentUser() {
        return 1
      }
    },

    methods: {
      validateForm (form) {
        return new Promise((resolve) =>
          form.validate((valid) => {
            resolve(valid)
          })
        )
      },
    }
  });
}