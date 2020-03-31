<template>
  <div
    :class="['input-group', 'text-field', 'primary--text', {required, error: computedErrorMessages, disabled, focus, dirty: value !== ''}]"
    @click="addFocus"
  >
    <label>
      {{ label }}
    </label>
    <div class="input">
      <input
        ref="input"
        tabindex="0"
        autocomplete="off"
        v-bind="$attrs"
        :required="required"
        :disabled="disabled"
        :aria-label="label"
        @keyup="updateValue"
        @blur="focus = false"
        @focusin="focus = true"
      >
    </div>
    <div class="details">
      <transition name="slide-down">
        <div v-if="Array.isArray(computedErrorMessages) && computedErrorMessages.length" class="msg">
          {{ computedErrorMessages.join(',') }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'updateParentModelValue',
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: [String, Array],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiLine: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      focus: false,
      value: '',
    };
  },
  computed: {
    computedErrorMessages () {
      const msgs = this.errorMessages;
      return this.disabled ? ' ' : (typeof msgs === 'string' ? [msgs] : (Array.isArray(msgs) && msgs.length ? msgs : null));
    },
  },
  methods: {
    addFocus () {
      this.$refs.input.focus();
    },
    updateValue (event) {
      this.$set(this, 'value', event.target.value);
      this.$emit('updateParentModelValue', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  min-width: 24px;
  padding: 18px 0 0;
  position: relative;
  width: 100%;
  outline: none;
  .slide-down-enter-active {
    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .slide-down-enter {
    transform: translateY(-80%);
    opacity: 0;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  .msg {
    font-size: 12px;
  }
  &.error {
    color: #dc3226 !important;
    label {
      animation: shake 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
    input, textarea {
      caret-color: #dc3226 !important;
    }
    .details {
      &:before {
        background-color: currentColor;
      }
      .msg {
        color: inherit;
        // transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
    }
  }
  &.required label:after {
    content: '*';
  }
  &.primary--text {
    color: #1dbdbc;
    input, textarea {
      caret-color: #1dbdbc;
    }
  }
  &.focus {
    &.text-field:not(.disabled) .details:after {
      transform: scaleX(1);
    }
  }
  &.focus label, &.dirty label {
    transform: translate(0, -18px) scale(0.75);
  }
  textarea {
    width: 100%;
  }
  label {
    font-size: 14px !important;
    font-weight: 300;
    color: #787878 !important;
    text-align: left;
    display: inline-block;
    line-height: 30px;
    height: 30px;
    max-width: 90%;
    min-width: 0;
    overflow: hidden;
    pointer-events: none;
    text-overflow: ellipsis;
    transform-origin: top left;
    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    white-space: nowrap;
    width: 100%;
    z-index: 0;
    margin-bottom: 5px;
  }
  .input {
    display: flex;
    flex: 1 0 100%;
    min-width: 0;
    min-height: 30px;
    width: 100%;
    input, textarea {
      color: rgba(0,0,0,0.87);
      font-weight: 300;
    }
  }
  .details {
    position: relative;
    padding-top: 4px;
    width: 100%;
    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:before {
      top: 0;
      height: 1px;
      width: 100%;
      z-index: 0;
    }
    &:after {
      background-color: currentColor;
      color: inherit;
      top: 0;
      height: 2px;
      transform: scaleX(0);
      transform-origin: center center 0;
      width: 100%;
      z-index: 1;
    }
  }
  &:not(.error):not(.disabled) .details:before {
    background-color: rgba(0,0,0,0.42);
  }
  &.text-field {
    input {
      box-shadow: none;
      flex: 1;
      height: 30px;
      margin: 0;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    input, textarea {
      font-size: 16px;
      padding-bottom: 1px;
      width: 100%;
    }
    label {
      position: absolute;
      top: 18px;
      left: 0;
    }
  }
  label {
    color: #787878!important;
    font-size: 14px;
    font-weight: 300;
    text-align: left;
  }
  .details {
    min-height: auto;
  }
}

@keyframes shake {
  0%, 20%, 40%, 60%, 80%, 100% {
    left: 0;
  }
  10%, 50%, 90% {
    left: -0.4rem;
  }
  30%, 70%, 80% {
    left: 0.4rem;
  }
}
</style>
