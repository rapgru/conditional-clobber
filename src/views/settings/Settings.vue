<template>
  <div ref="content" class="md-layout md-alignment-center-center">
    <div class="md-layout-item">
      <h1 class="md-title">Settings</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'settings',
  components: {
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swipeleft', () => {
      this.$router.push('/');
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
