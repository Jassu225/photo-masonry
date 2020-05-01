<template>
  <div class="home-page">
    <loader v-if="showLoader" />
    <div
      v-else
      class="layout"
    >
      <Header />
      <masonry />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '~/components/Generic/Loader.vue';
import Header from '~/components/Home/Header.vue';
import Masonry from '~/components/Home/Masonry.vue';

export default {
  name: 'Home',
  components: {
    Loader,
    Masonry,
    Header,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'Auth/isLoggedIn',
      isLoggedOut: 'Auth/isLoggedOut',
      isLoginFailed: 'Auth/isLoginFailed',
      isVerifyingUser: 'Auth/isVerifyingUser',
      isFetchingPhotos: 'Home/isFetchingPhotos',
      isFetchingPhotosSuccessful: 'Home/isFetchingPhotosSuccessful',
    }),
    showLoader () {
      // return !this.isLoggedIn || this.isVerifyingUser || this.isFetchingPhotos;
      return this.isFetchingPhotos;
    },
  },
  watch: {
    isLoginFailed (isLoginFailed) {
      if (isLoginFailed) {
        this.goToLoginPage();
      }
    },
    isLoggedIn (isLoggedIn) {
      if (isLoggedIn) {
        this.fetchPhotos();
      }
    },
    isLoggedOut (isLoggedOut) {
      if (isLoggedOut) {
        this.goToLoginPage();
      }
    }
  },
  mounted () {
    // TODO: enable login later
    // if (!this.isLoggedIn) {
    //   this.verifyUserLoginStatus();
    // } else {
    //   this.fetchPhotos();
    // }
    this.fetchPhotos();
  },
  methods: {
    ...mapActions({
      verifyUserLoginStatus: 'Auth/verifyUserLoginStatus',
      fetchPhotos: 'Home/fetchPhotos',
    }),
    goToLoginPage () {
      this.$router.replace({ name: 'Login' });
    }
  },
}
</script>

<style lang="scss" scoped>
.home-page, .layout {
  width: 100%;
  height: 100%;
}
</style>