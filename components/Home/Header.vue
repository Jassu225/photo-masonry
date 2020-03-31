<template>
  <div class="header">
    <span>
      Photo Masonry
    </span>
    <button
      type="button"
      class="logout-btn"
      @click="initiateLogOut"
    >
      Logout
    </button>
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
  line-height: 40px;
  padding: 10px;
  padding-left: 20px;
  width: 100%;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.4);
  span {
    font-size: 20px;
    font-weight: 600;
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