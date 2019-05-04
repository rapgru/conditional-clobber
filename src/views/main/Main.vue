<template>
  <div ref="content" class="md-layout md-alignment-center-center">
      <button class="testButton" v-on:click="refresh">Refresh</button>
    <div class="md-layout-item">
      <h1 class="md-title">Main</h1>
      <button class="getNewPic" v-on:click="getNewPic">Pic</button>
      <div v-html="getPicture"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on('swipe', (ev) => {
      if (ev.direction === Hammer.DIRECTION_UP) this.$router.push('/impressum');
    });
    hammertime.on('swiperight', () => {
      this.$router.push('/settings');
    });
    hammertime.on('swipeleft', () => {
      this.$router.push('/travel');
    });
  },
  methods:
  {
    refresh() {
      this.$store.dispatch('refreshWeather');
    },
    getNewPic() {
      this.$store.dispatch('predictToday');
    }
  },
computed:
  {
     getPicture()
     {
       return this.$store.state.prediction.renderedPicture.svg
     }
  },
};
</script>

<style lang="scss" scoped>
  div {
    height: 100vh;
    width: 100%;
  }
</style>
