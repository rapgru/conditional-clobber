<template>
  <div id="app">
    <!--<md-app md-mode="fixed" style="height:100vh;">
      <md-app-content>
        <transition :name="'switch-' + direction" mode="out-in">
          <router-view/>
        </transition>
      </md-app-content>
    </md-app>-->

    <div class="swipeViews" ref="swipe">
      <Settings></Settings>
      <Main></Main>
      <Travel v-if="travelMode"></Travel>
      <TravelResult v-if="!travelMode"></TravelResult>
    </div>

    <md-snackbar :md-duration="4000" md-position="center" :md-active="error.active" md-persistent>
      <span>{{error.msg}}</span>
      <md-button v-if="error.hasAction" class="md-primary" @click="error.action">
        {{error.btn}}
      </md-button>
    </md-snackbar>
  </div>
</template>

<script>
import Travel from '@/views/travel/Travel.vue';
import TravelResult from '@/views/travel/TravelResult.vue';
import Settings from '@/views/settings/Settings.vue';
import Main from '@/views/main/Main.vue';

export default {
  data() {
    return {
      direction: 'up',
    };
  },
  components: {
    Travel,
    TravelResult,
    Main,
    Settings,
  },
  watch: {
  },
  computed: {
    error() {
      return this.$store.state.general.error;
    },
    travelMode() {
      return this.$store.state.travel.queryMode;
    },
  },
  mounted() {
    // disableBodyScroll(this.$refs.app);
    this.$refs.swipe.scrollLeft = window.innerWidth * 1;
    this.$store.dispatch('refreshWeather');
  },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  height: 100vh;
}

html, body, .app {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.swipeViews {
  display: grid;
  grid-template-columns: repeat(3, 100%);
  will-change: transform;
  align-content: center;
  overflow-x: auto;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  >div {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    padding: 20px;
  }
}

/* * {margin: 0px; padding: 0px;} */
</style>
