<template>
  <div ref="content">
    <p>Settings</p>
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
    background-color: orange;
    height: 100vh;
    width: 100%;
  }
</style>
