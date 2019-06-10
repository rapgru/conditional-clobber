<template>
  <div class="all" ref="all">

  </div>
</template>


<script>
export default {
  name: 'navigator',
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.all {
  position: absolute;
  top: 0px;
  left: 0px;

  height: 100vh;
  width: 100vw;
  opacity: 0;
  z-index: 100;
  pointer-events: none;
}
</style>
