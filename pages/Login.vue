<template>
  <div class="login-page">
    <loader v-if="isVerifyingUser" />
    <div
      v-if="!isLoggedIn"
      class="login-form"
    >
      <text-field
        v-model="user.email"
        :type="'email'"
        :error-messages="getFirstError('user.email')"
        color="#1dbdc0"
        label="Enter Email"
        required
      />
      <text-field
        v-model="user.password"
        :type="'password'"
        :error-messages="getFirstError('user.password')"
        color="#1dbdc0"
        label="Enter Password"
        required
      />
      <button
        type="button"
        @click="initiateLogin"
      >
        Login
      </button>
      <transition name="slide-down">
        <div
          v-show="isLoginFailed"
          class="login-error"
        >
          Username or / and password is / are incorrect.
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SimpleVueValidator from 'simple-vue-validator';
import { emailValidator, passwordValidator } from '~/utils/field-validators';
import Loader from '~/components/Generic/Loader.vue';
import TextField from '~/components/Generic/TextField.vue';

export default {
  name: 'Login',
  components: {
    TextField,
    Loader,
  },
  mixins: [SimpleVueValidator.mixin],
  data () {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'Auth/isLoggedIn',
      isVerifyingUser: 'Auth/isVerifyingUser',
      isLoginFailed: 'Auth/isLoginFailed',
    }),
  },
  watch: {
    isLoggedIn (isLoggedIn) {
      if (isLoggedIn) {
        this.$router.push({ name: 'Home' });
      }
    },
  },
  mounted () {
    if (this.isLoggedIn) {
      this.$router.replace({ name: 'Home' });
    } else {
      this.verifyUserLoginStatus(true);
    }
  },
  methods: {
    ...mapActions({
      verifyUserLoginStatus: 'Auth/verifyUserLoginStatus',
      verifyCredentials: 'Auth/verifyCredentials',
    }),
    getFirstError (modelName) {
      const firstError = this.validation.firstError(modelName);
      return firstError || [];
    },
    initiateLogin () {
      this.$validate().then((success) => {
        if (success) {
          this.verifyCredentials(this.user);
        }
      });
    }
  },
  validators: {
    'user.email': emailValidator,
    'user.password': passwordValidator,
  },
}
</script>

<style lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .login-form {
    width: 40%;
    // height: 50%;
    min-width: 300px;
    min-height: 250px;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.2);
    .input-group {
      padding-bottom: 10px;
      input {
        border: none;
        &:focus {
          background-color: transparent;
        }
      }
    }
    button {
      margin: 10px 0;
      width: 150px;
      background-color: #dc3226;
      color: white;
      font-size: 13px;
      &:focus {
        outline: none;
      }
    }
    .login-error {
      margin-top: 10px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #dc3226;
      font-size: 12px;
    }
  }
}
</style>
