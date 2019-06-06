<template>
  <div class="md-layout-item md-size-15" @click="select">
    <img :src="`/svg-norender/${path}`" alt="">
    <img class="selected" style="height: 20px;" v-if="selected" src="@/assets/SVGs/Icons/Selection/Selected.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'svg-selector',
  components: {},
  props: ['path', 'id', 'selected'],
  data() {
    return {};
  },
  methods: {
    select() {
      this.$emit('selectItem', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
  /* div.selected {
    background-color: green;
    border-radius: 5%;
  } */

  .md-layout-item {
    margin: 10px;
    overflow: visible !important;
  }

  .selected {
    position: relative;
    top: 10px;
    left: -20px;
  }
</style>
