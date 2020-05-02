import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      theme: 'App/theme',
    }),
  },
};
