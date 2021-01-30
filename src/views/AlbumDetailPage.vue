<template>
  <div>Album Deatil  Page {{ getId }}</div>
</template>

<script>
export default {
  data() {
    return {
      albumId: null,
    };
  },
  created() {
    this.albumId = this.getId;
  },
  computed: {
    getId() {
      return this.$router.params.id;
    },
  },
};
</script>
