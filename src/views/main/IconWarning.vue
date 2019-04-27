<template>
    <md-avatar class="md-avatar-icon md-primary md-elevation-2">
      <!--<md-icon>home</md-icon>-->
      {{ icon.charAt(0) }}
    </md-avatar>
</template>

<script>
export default {
  name: 'IconWarning',
  props: ['icon'],
};
</script>

<style>

</style>
