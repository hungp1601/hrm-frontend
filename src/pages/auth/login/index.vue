<template>
 <div class="w-screen h-screen flex items-center justify-center">
   <LoginComponent />
 </div>
</template>

<script>
import LoginComponent from '~/components/Login/LoginForm.vue'

export default {
name: 'IndexPage',
components: { LoginComponent }
}
</script>
