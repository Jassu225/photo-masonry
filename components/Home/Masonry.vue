<template>
  <div class="masonry-custom">
    <div
      v-if="showInfoText"
      class="info-text"
    >
      {{ infoText }}
    </div>
    <Grid v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Grid from '~/components/Home/Grid.vue';

export default {
  name: 'Masonry',
  components: {
    Grid,
  },
  computed: {
    ...mapGetters({
      isVerifyingUser: 'Auth/isVerifyingUser',
      isFetchingPhotos: 'Home/isFetchingPhotos',
      isFetchingPhotosFailed: 'Home/isFetchingPhotosFailed',
    }),
    infoText () {
      if (this.isVerifyingUser || this.isFetchingPhotos) {
        return 'Fetching...';
      } else if (this.isFetchingPhotosFailed) {
        return 'Unable to fetch.';
      }
      return '';
    },
    showInfoText () {
      return !!this.infoText;
    },
  },
};
</script>

<style lang="scss" scoped>
.masonry-custom {
  width: 100%;
  height: calc(100% - 60px);
  overflow: auto;
}
</style>
