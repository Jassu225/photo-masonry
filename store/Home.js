import Vue from 'vue';

const apiStatusCodes = {
  notUsed: -1,
  requesting: 0,
  successful: 2,
  failed: 1,
};

export const state = () => ({
  photos: [],
  photosApiStatus: apiStatusCodes.notUsed,
});

export const mutations = {
  SET_PHOTOS_API_STATUS (state, statusCode) {
    Vue.set(state, 'photosApiStatus', statusCode);
  },

  SET_PHOTOS (state, picsInfo) {
    Vue.set(state, 'photos', picsInfo);
  },
};

export const actions = {
  async fetchPhotos ({ commit }) {
    commit('SET_PHOTOS_API_STATUS', apiStatusCodes.requesting);
    try {
      const result = await this.$repo.fetchPhotosInfo();
      commit('SET_PHOTOS', result.data.photos.photo);
      commit('SET_PHOTOS_API_STATUS', apiStatusCodes.successful);
    } catch (ex) {
      commit('SET_PHOTOS_API_STATUS', apiStatusCodes.failed);
    }
  },
};

export const getters = {
  isFetchingPhotos: state => state.photosApiStatus === apiStatusCodes.requesting,
  isFetchingPhotosSuccessful: state => state.photosApiStatus === apiStatusCodes.successful,
  isFetchingPhotosFailed: state => state.photosApiStatus === apiStatusCodes.failed,
  photos: state => state.photos,
};