<template>
  <div ref="content" class="md-layout md-alignment-center-center">
    <div class="md-layout-item">
      <h1 class="md-title">Impressum</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'impressum',
  components: {
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swipe', (ev) => {
      if (ev.direction === Hammer.DIRECTION_DOWN) this.$router.push('/');
    });
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  },
};
</script>

<style lang="scss" scoped>
  div {
    height: 100vh;
    width: 100%;
  }
</style>
