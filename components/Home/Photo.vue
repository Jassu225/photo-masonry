<template>
  <div
    class="photo"
    :style="{ 'grid-row-end': elRowSpan }"
  >
    <div class="photo-content">
      <img
        v-lazy="lazyImgOptions"
        :alt="photo.title"
      >
      <div class="photo-desc">
        {{ photo.title || 'Not Available' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: {
      type: Object,
      required: true,
    },
    gridInfo: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      contentElHeight: 0,
    };
  },
  computed: {
    elRowSpan () {
      const { rowHeight, rowGap } = this.gridInfo;
      const rowSpan = Math.ceil((this.contentElHeight + rowGap + 24) / (rowHeight + rowGap));
      return `span ${rowSpan}`;
    },
    lazyImgOptions () {
      const photo = this.photo;
      return {
        src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg/`,
      };
    },
  },
  mounted () {
    this.calculateContentHeight('mounted');
    this.$Lazyload.$on('loaded', this.calculateContentHeight);
    this.$Lazyload.$on('error', this.calculateContentHeight);
  },
  beforeDestroy () {
    this.$Lazyload.$off('loaded', this.calculateContentHeight);
    this.$Lazyload.$off('error', this.calculateContentHeight);
  },
  // updated () {
  //   console.log('update');
  //   this.calculateContentHeight();
  // },
  methods: {
    calculateContentHeight (val) {
      this.$nextTick(() => {
        this.$nextTick(() => {
          const contentEl = this.$el.querySelector('.photo-content');
          this.contentElHeight = contentEl.getBoundingClientRect().height;
          // console.log(val);
        });
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.photo {
  background-color: white;
  padding: 12px;
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.4);
  .photo-content {
    img {
      max-width: 100%;
      width: 100%;
      &[lazy=error] {
        height: 350px;
      }
      &[lazy=loading] {
        height: 256px;
        transform: scale(0.1);
      }
    }
    .photo-desc {
      padding: 8px 0;
      text-align: justify;
    }
  }
}
</style>