<template>
  <div ref="content">
    <p>Impressum</p>
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
    background-color: red;
  }
</style>
