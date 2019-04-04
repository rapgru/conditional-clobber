<template>
  <div ref="content">
    <h1>Settings</h1>
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
