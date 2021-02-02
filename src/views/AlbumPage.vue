<template>
  <div>
    <h3 class="text-3xl">Create Or Choose An Album</h3>
    <div class="flex flex-col w-64 m-auto">
      <input
        class="input_album focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Album Name..."
        type="text"
        v-model="albumName"
      />
      <button class="mb-4 btn-blue">Create Album</button>
    </div>
    <div class="text-red-500">{{ error }}</div>
    <hr />
    <h5 class="mt-4 text-2xl">List Of Albums</h5>
    <div class="flex flex-wrap justify-center w-full m-auto">
      <div
        v-for="(album, idx) in albums"
        :key="idx"
        class="flex items-center justify-center w-3/12 h-24 mt-4 ml-4 shadow-xl cursor-pointer"
        @click="openAlbumDetail(album)"
      >
        <div class="text-2xl">{{ album }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async mounted() {
  //   this.$store.dispatch("albumInfo/getAlbumsData");
  // },
  data: () => ({ albumName: '', error: '' }),
  methods: {
    openAlbumDetail(album) {
      return album;
    },
    async createAlbum() {
      return true;
    },
  },
  computed: {
  },
};
</script>
