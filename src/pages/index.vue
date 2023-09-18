<template>
   <div>
    <Login @login="login"/>
   </div>
</template>

<script>
import Login from '@/components/Login/LoginForm.vue'


export default {
  name: 'IndexPage',

  async mounted() {
    // const test = await this.$getService(
    //       '/test'
    //     ).test(this.$axios)
    // const test = await this.$axios.get('/test');
    // console.log(test)
 
  },
  
  components: { Login },

  methods: {
    login(){

    }    
  },
}
</script>
