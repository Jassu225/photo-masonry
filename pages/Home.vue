<template>
  <div class="home-page">
    <loader v-if="showLoader" />
    <masonry v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '~/components/Generic/Loader.vue';
import Masonry from '~/components/Home/Masonry.vue';

export default {
  name: 'Home',
  components: {
    Loader,
    Masonry,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'Auth/isLoggedIn',
      isLoginFailed: 'Auth/isLoginFailed',
      isVerifyingUser: 'Auth/isVerifyingUser',
      isFetchingPhotos: 'Home/isFetchingPhotos',
      isFetchingPhotosSuccessful: 'Home/isFetchingPhotosSuccessful',
    }),
    showLoader () {
      return !this.isLoggedIn || this.isVerifyingUser || this.isFetchingPhotos;
    },
  },
  watch: {
    isLoginFailed (isLoginFailed) {
      if (isLoginFailed) {
        this.$router.replace({ name: 'Login' });
      }
    },
    isLoggedIn (isLoggedIn) {
      if (isLoggedIn) {
        this.fetchPhotos();
      }
    },
  },
  beforeMount () {
    this.verifyUserLoginStatus();
  },
  methods: {
    ...mapActions({
      verifyUserLoginStatus: 'Auth/verifyUserLoginStatus',
      fetchPhotos: 'Home/fetchPhotos',
    }),
  },
}
</script>