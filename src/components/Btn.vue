<template>
  <div class="btn-wrapper" :style="inline && { display: 'inline-block' }">
    <button :class="`btn btn-${color}`" @click="onClick">
      {{label}}<slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    inline: {
      type: Boolean,
      default: false,
    },
    action: {
      type: [Function, Boolean],
      default: false,
    },
    route: {
      type: [String, Boolean],
      default: false,
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    onClick() {
      const {
        action,
        route,
        $router,
      } = this;
      if (route) {
        $router.push(route);
      } else if (action) action();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../sass/settings';
.btn-wrapper {
  margin: 0 0.5em 1em;
  text-align: center;
}

.btn {
  padding: 0.5em 1.5em;
  cursor: pointer;
  font-size: $button-size;
  font-weight: 800;
  transform: scale(0.9);
  transition: border 0.35s ease,
    background-color 0.35s ease,
    color 0.35s ease,
    transform 0.35s ease;
  box-sizing: border-box;
  font-family: $fonts;
}

.btn:hover {
  // transform: scale(1);
  transition: border 0.35s ease,
    background-color 0.35s ease,
    color 0.35s ease,
    transform 0.35s ease;
}

.btn-default {
  border: 2px $button-border-color solid;
  background: $button-background-color;
  color: $button-color;
}

.btn-default:hover {
  background: $button-hover-background-color;
  color: #fff;
  border-color: $button-hover-border-color;
}

.btn-circle {
  border: 2px $button-circle-border-color solid;
  background: $button-circle-background-color;
  color: $button-circle-color;
}

.btn-circle:hover {
  background: $button-circle-hover-background-color;
  color: $button-circle-hover-color;
  border-color: $button-circle-hover-border-color;
}
</style>
