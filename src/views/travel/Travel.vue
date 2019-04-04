<template>
  <div ref="content">
    <h1>Travel</h1>
  </div>
</template>

<script>

export default {
  name: 'travel',
  components: {
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swiperight', () => {
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
