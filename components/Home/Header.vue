<template>
  <div class="header">
    <div class="header-title">
      Photo Masonry
    </div>
    <div class="flickr-branding">
      Powered By
      <a href="https://www.flickr.com" target="_blank" tabindex="1" class="flickr-link">
        <img src="/images/flickr-logo.png" alt="flickr logo" class="flickr-logo">
      </a>
    </div>
    <!-- <button
      type="button"
      class="logout-btn"
      @click="initiateLogOut"
    >
      Logout
    </button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  methods: {
    ...mapActions({
      initiateLogOut: 'Auth/logout',
    }),
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 10px;
  padding-left: 20px;
  width: 100%;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  .header-title {
    font-size: 20px;
    font-weight: 600;
    flex: 1 0 auto;
  }
  .flickr-branding {
    display: flex;
    align-items: center;
    .flickr-link {
      .flickr-logo {
        width: 76px;
        padding: 0.5rem;
      }
    }
  }
  .logout-btn {
    float: right;
    width: 150px;
    background-color: #dc3226;
    color: white;
    font-size: 13px;
    &:focus {
      outline: none;
    }
  }
}
</style>