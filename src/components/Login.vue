<template>
  <div>
      <form class="flex flex-col items-center" @submit.prevent="login">
        <div class="flex flex-col user">
          <label for="username" class="block mb-2 text-sm font-bold text-gray-700">
              Username:
          </label>
          <input type="text" class="input_label" v-model="username" id="username" >
            <label for="password" class="block mt-10 mb-2 text-sm font-bold text-gray-700">
                Password:
            </label>
            <input type="password" class="input_password" v-model="username" id="password" >
        </div>
        <button class="btn-blue"> Sign In </button>
      </form>
      <div class="text-red-600"> {{ error.message }}</div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      error: '',
    };
  },
  methods: {
    ...mapActions({
      loginView: 'auth/login',
    }),
    async login() {
      try {
        await this.loginView({
          username: this.username,
          password: this.password,
        });
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>
