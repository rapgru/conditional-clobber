<template>
  <div class="impressum-view-root">
    <div ref="content" class="md-layout md-alignment-center-center">
      <div class="md-layout-item" style="text-align: center;">
        <p style="margin-bottom: 10px;">Made with</p>
        <img src="@/assets/heart.svg" style="height: 70px;"/>
        <p style="font-size: 12px; margin-bottom: 10px; margin-top: 10px;">by the</p>
        <p style="font-size: 23px;">Conditional Clobber Team</p>
      </div>
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
  .impressum-view-root {
    height: 100%;
    width: 100%;

    .md-layout {
      height: 100%;
    }
  }
</style>
