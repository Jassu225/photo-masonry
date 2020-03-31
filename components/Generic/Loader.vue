<template>
  <div class="loader">
    <img src="/images/spinner.gif" alt="Loading...">
  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0, 0.3);
  z-index: 1000;
  img {
    width: 100px;
    margin: auto;
  }
}
</style>