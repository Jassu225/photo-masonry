<template>
  <div class="header" :style="`background-color: ${theme.backgrounds.header}`">
    <div class="header-title">
      Photo Masonry
    </div>
    <custom-switch
      v-model="isDarkMode"
      class="theme-handler"
      :label="`${theme.name} mode`"
      @change="changeTheme"
    />
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
import theme from '~/mixins/theme';
import CustomSwitch from '~/components/Generic/CustomSwitch.vue';
// true - dark mode, false - light mode

export default {
  name: 'Header',
  components: { CustomSwitch },
  mixins: [theme],
  data () {
    return {
      isDarkMode: false,
    };
  },
  created () {
    this.isDarkMode = this.theme.name === 'dark';
  },
  methods: {
    ...mapActions({
      // initiateLogOut: 'Auth/logout',
      setTheme: 'App/setTheme',
    }),
    changeTheme () {
      this.setTheme(this.isDarkMode);
    },
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
  flex-wrap: wrap;
  .header-title {
    font-size: 20px;
    font-weight: 600;
    flex: 1 0 auto;
  }
  .theme-handler {
    margin-right: 2rem;
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