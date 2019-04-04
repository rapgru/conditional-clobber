<template>
  <div ref="content">
    <h1>Main</h1>
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
};
</script>

<style lang="scss" scoped>
  div {
    height: 100vh;
    width: 100%;
  }
</style>
