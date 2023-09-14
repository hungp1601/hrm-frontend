<template>
   <div>
    this is index page
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',

  async mounted() {
    // const test = await this.$getService(
    //       '/test'
    //     ).test(this.$axios)
    const test = await this.$axios.get('/test');
    console.log(test)

 
  },
}
</script>
