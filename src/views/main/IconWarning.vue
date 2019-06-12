<template>
    <md-avatar class="md-avatar-icon md-primary md-elevation-2">
      <img v-if="!loading" :src="data">
    </md-avatar>
</template>

<script>
import axios from 'axios';
import { Base64 } from 'js-base64';

export default {
  name: 'IconWarning',
  props: ['icon'],
  data() {
    return {
      loading: true,
      data: '',
    };
  },
  mounted() {
    axios.get(this.icon, {
      transformResponse: undefined,
      responseType: 'text',
    }).then((res) => {
      const base = Base64.encode(res.data);
      this.data = `data:image/svg+xml;base64,${base}`;
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
  img {
    padding: 10%;
  }
</style>
