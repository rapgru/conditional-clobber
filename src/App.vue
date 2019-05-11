<template>
  <div id="app">
    <md-app md-mode="fixed" style="height:100vh;">
      <md-app-content>
        <transition :name="'switch-' + direction" mode="out-in">
          <router-view/>
        </transition>
      </md-app-content>
    </md-app>
    <md-snackbar v-for="error in errors" :key="error.id" md-position="center" :md-duration="Infinity" :md-active="true" md-persistent>
      <span>{{error.msg}}</span>
      <md-button v-if="error.hasAction" class="md-primary" @click="error.action">{{error.btn}}</md-button>
    </md-snackbar>
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
  computed: {
    errors() {
      return this.$store.state.general.errors;
    },
  },
  mounted() {
    this.$store.dispatch('refreshWeather');
  },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

//@import "~vue-material/dist/theme/engine";

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  overflow:hidden;
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
