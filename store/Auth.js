import Vue from 'vue';

import authenticationStatuses from '~/data/constants';

const users = {
  'admin@gmail.com': 'admin123',
  'test@gmail.com': 'test123',
};

export const state = () => ({
  user: null,
  authenticationStatus: authenticationStatuses.unAuthenticated,
  isVerifyingUser: false,
});

export const mutations = {
  SET_VERIFYING_USER (state, isVerifyingUser) {
    Vue.set(state, 'isVerifyingUser', isVerifyingUser);
  },
  SET_USER (state, user) {
    Vue.set(state, 'user', user);
  },

  SET_AUTHENTICATION_STATUS (state, authenticationStatus) {
    Vue.set(state, 'authenticationStatus', authenticationStatus);
  },
};

export const actions = {
  verifyCredentials ({ commit }, user) {
    commit('SET_VERIFYING_USER', true);
    // user verification logic
    // eslint-disable-next-line no-prototype-builtins
    if (users.hasOwnProperty(user.email) && users[user.email] === user.password) {
      commit('SET_USER', user);
      commit('SET_AUTHENTICATION_STATUS', authenticationStatuses.loggedIn);
      window.localStorage.setItem('user', JSON.stringify(user));
    } else if (!user.isSilentLogin) {
      commit('SET_AUTHENTICATION_STATUS', authenticationStatuses.authenticationFailed);
    }
    // end user verification logic
    commit('SET_VERIFYING_USER', false);
  },

  verifyUserLoginStatus ({ dispatch, getters }, isSilentLogin) {
    if (getters.isLoggedIn) { return; }
    let user = window.localStorage.getItem('user');
    try {
      user = JSON.parse(user);
    } catch (ex) {
      user = '{}';
    }
    dispatch('verifyCredentials', {
      ...user,
      isSilentLogin: isSilentLogin || false,
    });
  },

  logout ({ commit }) {
    window.localStorage.removeItem('user');
    commit('SET_AUTHENTICATION_STATUS', authenticationStatuses.loggedOut);
  },
};

export const getters = {
  isLoggedIn: state => state.authenticationStatus === authenticationStatuses.loggedIn,
  isVerifyingUser: state => state.isVerifyingUser,
  isLoginFailed: state => state.authenticationStatus === authenticationStatuses.authenticationFailed,
  isLoggedOut: state => state.authenticationStatus === authenticationStatuses.loggedOut,
};