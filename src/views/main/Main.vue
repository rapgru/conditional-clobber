<template>
  <div ref="content">
    <p>Main</p>
    <button v-on:click="refresh">Refresh</button>
    <p style="color: black;"> {{ temp }} </p>
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
  computed: {
    temp() {
      return this.$store.state.prediction.temperatur;
    },
  },
  methods:
  {
    refresh() {
      this.$store.dispatch('refreshAll');
    },
  },
};
</script>

<style lang="scss" scoped>
  div {
    height: 100vh;
    width: 100%;
    background-color: blue;
  }
</style>
