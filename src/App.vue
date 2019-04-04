<template>
  <div id="app">
    <transition :name="'switch-' + direction" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: 'up',
    };
  },
  watch: {
    $route: function r(to, from) {
      if (to.path === '/') {
        if (from.path === '/travel') this.direction = 'left';
        if (from.path === '/settings') this.direction = 'right';
        if (from.path === '/impressum') this.direction = 'up';
      } else if (to.path === '/settings') {
        if (from.path === '/') this.direction = 'left';
      } else if (to.path === '/travel') {
        if (from.path === '/') this.direction = 'right';
      } else if (to.path === '/impressum') {
        if (from.path === '/') this.direction = 'down';
      }
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

* {margin: 0px; padding: 0px;}

$switch-percent: 30%;
$switch-time: .2s;

%switch-enter-active {
    transition: all $switch-time ease;
}
%switch-leave-active {
    transition: all $switch-time ease;
}
%switch-enter {
    transform: translateX(-$switch-percent);
    opacity: 0;
}
%switch-leave-to {
    transform: translateX($switch-percent);
    opacity: 0;
}

.switch-up-enter-active,
.switch-down-enter-active,
.switch-left-enter-active,
.switch-right-enter-active {
    @extend %switch-enter-active;
}

.switch-up-leave-active,
.switch-down-leave-active,
.switch-left-leave-active,
.switch-right-leave-active {
    @extend %switch-leave-active;
}

.switch-up-enter {
    @extend %switch-enter;
    transform: translateY(-$switch-percent);
}
.switch-up-leave-to {
    @extend %switch-leave-to;
    transform: translateY($switch-percent);
}

.switch-down-enter {
    @extend %switch-enter;
    transform: translateY($switch-percent);
}
.switch-down-leave-to {
    @extend %switch-leave-to;
    transform: translateY(-$switch-percent);
}

.switch-left-enter {
    @extend %switch-enter;
    transform: translateX(-$switch-percent);
}
.switch-left-leave-to {
    @extend %switch-leave-to;
    transform: translateX($switch-percent);
}

.switch-right-enter {
    @extend %switch-enter;
    transform: translateX($switch-percent);
}
.switch-right-leave-to {
    @extend %switch-leave-to;
    transform: translateX(-$switch-percent);
}

</style>
