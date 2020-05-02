import Vue from 'vue';
import { lightTheme, darkTheme } from '~/data/themes';

const themeMap = {
  [lightTheme.name]: lightTheme,
  [darkTheme.name]: darkTheme,
};

// check if selection is in local storage
// else set based on time - 0600 to 1800 light else dark
const defaultTheme = (() => {
  const themeName = window.localStorage.getItem('theme');
  let theme = null;
  if (themeName) {
    theme = themeMap[themeName];
  }
  // do not use 'else if'
  // bcoz themeName cannot be trusted as it may have been tampered
  if (!theme) {
    // set based on time
    const hour = new Date().getHours();
    if (hour > 6 && hour < 18) {
      theme = lightTheme;
    } else {
      theme = darkTheme
    }
  }
  return theme;
})();

export const state = () => ({
  theme: defaultTheme,
});

export const mutations = {
  SET_THEME (state, theme) {
    Vue.set(state, 'theme', theme);
  },
};

export const actions = {
  setTheme ({ commit }, isDarkMode) {
    const theme = isDarkMode ? darkTheme : lightTheme;
    commit('SET_THEME', theme);
    window.localStorage.setItem('theme', theme.name);
  },
};

export const getters = {
  theme: state => state.theme,
};