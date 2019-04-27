<template>
  <div class="settings-view-root">
    <div ref="content" class="md-layout md-alignment-center-center">
      <div class="md-layout-item">
        <h1 class="md-title">Settings</h1>
      </div>
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
  .settings-view-root {
    height: 100%;
    width: 100%;

    .md-layout {
      height: 100%;
    }
  }
</style>
