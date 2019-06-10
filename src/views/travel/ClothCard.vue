<template>
  <md-card class="cloth-card">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{type.count}}x</div>
        <div class="md-subhead">{{type.display}}</div>
      </md-card-header-text>

      <md-card-media md-medium>
        <img v-if="!loading" :src="pic" :alt="type.display">
        <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
      </md-card-media>
    </md-card-header>
  </md-card>
</template>


<script>
import svgs, { getSVGString } from '@/views/travel/travelsvgs';
import _ from 'lodash';
import { Base64 } from 'js-base64';

export default {
  name: 'cloth-card',
  props: ['type'],
  data() {
    return {
      loading: true,
      pic: undefined,
    };
  },
  mounted() {
    console.log(`searching svg ${this.type}`);
    const { gender } = this.$store.state.general.settings.avatar;
    getSVGString(_.find(svgs, { type: this.type.type, gender: _.toLower(gender) }).name).then((svg) => {
      const base = Base64.encode(svg);
      this.pic = `data:image/svg+xml;base64,${base}`;
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.cloth-card {
  .md-subhead {
    width: 50%;
    white-space: normal !important;
  }

  img {
    height: 100%;
  }
}
</style>
