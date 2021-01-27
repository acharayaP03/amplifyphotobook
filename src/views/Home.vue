<template>
  <div class="block m-auto home">
    <Login  />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>
