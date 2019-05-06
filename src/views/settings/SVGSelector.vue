<template>
  <div class="md-layout-item md-size-15" :class="{ selected: selected }" @click="select">
    <img :src="`/svg-norender/${path}`" alt="">
  </div>
</template>

<script>
export default {
  name: 'svg-selector',
  components: {},
  props: ['path', 'id', 'selected'],
  data() {
    return {
    };
  },
  methods: {
    select() {
      this.$emit('selectItem', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
  div.selected {
    background-color: green;
    border-radius: 50%;
    box-shadow: 0px -2px 3px 3px green;
  }

  .md-layout-item {
    margin: 10px;
  }
</style>
