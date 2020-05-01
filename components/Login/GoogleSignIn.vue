<template>
  <div class="g-sign-in-custom">
    Sign-in using Google
  </div>
</template>

<script>
import { CLIENT_ID } from '~/data/constants';

export default {
  name: 'GoogleSignIn',
  mounted () {
    this.auth2 = null;
    this.addSignInScript();
    this.initOAuth2();
  },
  methods: {
    addSignInScript () {
      const googlePlatformScript = document.createElement('script');
      googlePlatformScript.setAttribute('src', 'https://apis.google.com/js/platform.js');
      googlePlatformScript.setAttribute('async', true);
      googlePlatformScript.setAttribute('defer', 'defer');
      document.head.appendChild(googlePlatformScript);
    },
    initOAuth2 () {
      window.gapi.load('auth2', () => {
        this.auth2 = window.gapi.auth2.init({
          client_id: CLIENT_ID,
          fetch_basic_profile: true,
          // scope: 'profile'
        });

        // Sign the user in, and then retrieve their ID.
        this.auth2.signIn().then((googleUser) => {
          console.log(this.auth2.currentUser.get().getBasicProfile());
          console.log(googleUser);
        });
      });
    }
  },
}
</script>