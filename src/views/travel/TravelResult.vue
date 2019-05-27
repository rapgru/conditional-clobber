<template>
  <div class="travel-view-root">
    <div ref="content">
      <h1 class="md-title">Travel</h1>
      <md-steppers md-vertical md-linear :md-active-step.sync="active">
        <md-step id="destination" :md-error="destination.error" :md-done="destination.done" md-label="Pick travel destination">
        </md-step>

        <md-step id="duration" :md-error="duration.error" :md-done="duration.done" md-label="Length of stay">
        </md-step>
      </md-steppers>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travel',
  components: {},
  data() {
    return {
      active: 'destination',
      destination: {
        done: false,
        error: null,
      },
      duration: {
        done: false,
        error: null,
      },
    };
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swiperight', () => {
      this.$router.push('/');
    });
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.travel-view-root {
  height: 100%;
  width: 100%;

  .md-layout {
    height: 100%;
  }
}
</style>
