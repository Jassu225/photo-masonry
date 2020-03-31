<template>
  <div class="grid">
    <photo
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      :grid-info="gridInfo"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Photo from '~/components/Home/Photo.vue';

export default {
  name: 'Grid',
  components: {
    Photo,
  },
  data () {
    return {
      gridInfo: {
        rowHeight: 0,
        rowGap: 0,
      },
    };
  },
  computed: {
    ...mapGetters({
      photos: 'Home/photos',
    }),
  },
  mounted () {
    this.$nextTick(() => {
      const grid = this.$el;
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      this.$set(this.gridInfo, 'rowHeight', rowHeight);
      this.$set(this.gridInfo, 'rowGap', rowGap);
    });
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 5px;
  padding: 20px;
  width: 100%;
}
</style>