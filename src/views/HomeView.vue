<template>
  <div class="home page row">
   <HelloWorld/>
   <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Login
}
}
</script>

<style scope>
.home{
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
}
</style>

