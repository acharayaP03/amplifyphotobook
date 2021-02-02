/* eslint-disable */
/* eslint-disable no-return-await */
import { API, graphqlOperation } from 'aws-amplify';

import { createAlbum as createAlbumMutations } from '@/graphql/mutations';

import { getAlbum as gegAlbumQuery, listAlbums as listAlbumsQuery } from '@/graphql/queries';

export const albumInfo = {
  namespaced: true,
  state: {
    albums: null,
  },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload;
    },
  },
  actions: {
    async createAlbum({ dispatch }, newAlbum) {
      try {
        await API.graphql(graphqlOperation(createAlbumMutations, { input: newAlbum }));
        dispatch('getAlbumsData');
      } catch (error) {
        console.error('CreateAlbum', error);
      }
    },
    async getAlbum(_, albumId) {
      return await API.graphql(graphqlOperation(gegAlbumQuery, { id: albumId }));
    },
    async getAlbumsData({ commit }) {
      const albumsData = await API.graphql(graphqlOperation(listAlbumsQuery));
      commit('setAlbums', albumsData.data.listAlbums.items);
    },
  },
  getters: {
    albums: (state) => state.albums,
  },
};
