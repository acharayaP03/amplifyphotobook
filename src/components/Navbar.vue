<template>
  <div>
    <ul class="flex justify-end">
      <li class="mr-6" v-if="!user">
        <router-link to="/">
          <a href="" class="cursor-pointer text blue-500 hover:text-blue-800">Login</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="!user">
        <router-link to="/signup">
          <a href="" class="cursor-pointer text blue-500 hover:text-blue-800">Sign up</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div class="font-semibold text-black-500">
          Welcome {{ user.username }}
        </div>
      </li>

      <li class="mr-6" v-if="user">
        <router-link to="/signup">
          <a href="" class="cursor-pointer text blue-500 hover:text-blue-800">Albums</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <router-link to="/signup">
          <a href="" class="cursor-pointer text blue-500 hover:text-blue-800">Logout</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
};
</script>
