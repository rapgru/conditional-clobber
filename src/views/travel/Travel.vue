<template>
  <div ref="content">
    <p>Travel</p>
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
    background-color: violet;
    height: 100vh;
    width: 100%;
  }
</style>
