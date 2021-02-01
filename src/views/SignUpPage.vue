/* eslint-disable max-len */
<template>
  <div>
    <form v-if="!confirmPassword" class="flex flex-col items-center" @submit.prevent="signup">
      <div class="flex flex-col user">
        <label for="username" class="label">Username: </label>
        <input type="text" class="input_label" v-model="username" id="username">
      </div>
      <div class="flex flex-col mt-2 password">
        <label for="username" class="label">Password: </label>
        <input type="password" class="input_password" v-model="password" id="password">
      </div>
      <div class="flex flex-col mt-2 email">
        <label for="username" class="label">Email: </label>
        <input type="text" class="input_password" v-model="email" id="email">
      </div>
      <button class="btn-blue"> Sign Up</button>
    </form>
    <div class="text-red-600" v-if="error">
      {{ error.message }}
    </div>
    <div v-if="confirmPassword" class="w-4/12 m-auto">
      <h3>Enter your code. Please check your email</h3>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-bold text-gray-700" for="password">Code</label>
        //
        <input
          class="input_confirm"
          type="text"
          v-model="code"
        />
        <button class="btn-blue" @click="confirmSignUp">Confirm Code</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUpPage',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      error: '',
      confirmPassword: '',
      code: '',
      message: '',
    };
  },
  methods: {
    // eslint-disable-next-line consistent-return
    async signup() {
      if (!this.email || !this.password) {
        return false;
      }
      try {
        await this.$store.dispatch('auth/signUp', {
          username: this.username,
          password: this.password,
          email: this.email,
        });
        this.confirmPassword = true;
      } catch (error) {
        this.error = error;
      }
    },
    // eslint-disable-next-line consistent-return
    async confirmSignUp() {
      if (!this.username || !this.code) {
        return;
      }
      try {
        const { username, password, code } = this;
        await this.$store.dispatch('auth/confirmSignUp', {
          username,
          code,
        });
        await this.$store.dispatch('auth/login', {
          username,
          password,
        });
        this.$router.push('/albums');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
