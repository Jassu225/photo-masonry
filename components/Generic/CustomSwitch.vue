<template>
  <div
    class="custom-switch-container"
    :style="{ 'flex-direction': flexDirection }"
  >
    <div class="cstm-switch-label">
      {{ label }}
    </div>
    <div class="cstm-switch" @click="toggle">
      <div class="cstm-tip-mover" :style="tipMoverStyle">
        <div class="cstm-switch-tip" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSwitch',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    labelPosition: {
      type: String,
      default: 'left',
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    flexDirection () {
      const map = { left: 'row', right: 'row-reverse' };
      return map[this.labelPosition] || map.left;
    },
    tipMoverStyle () {
      return this.value ? { width: '100%' } : {};
    },
  },
  methods: {
    toggle () {
      this.$emit('change', !this.value);
    },
  },
};
</script>

<style lang="scss">
.custom-switch-container {
  display: flex;
  align-items: center;
  padding: 0 0.4rem;
  .cstm-switch-label {
    padding: 0 0.4rem;
  }
  .cstm-switch {
    box-sizing: border-box;
    $switch-height: 20px;
    $switch-padding: 3px;
    width: 42px;
    height: $switch-height;
    border-radius: $switch-height / 2;
    padding: $switch-padding;
    cursor: pointer;
    background-color: gray;
    .cstm-tip-mover {
      $tip-size: $switch-height - ($switch-padding * 2);
      width: $tip-size;
      height: $tip-size;
      transition: width 300ms ease;
      .cstm-switch-tip {
        width: $tip-size;
        height: $tip-size;
        transform: scale(1.1);
        border-radius: 50%;
        background-color: white;
        float: right;
      }
    }
  }
}
</style>