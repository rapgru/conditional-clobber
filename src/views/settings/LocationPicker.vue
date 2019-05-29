<template>
  <div class="location-picker-root">
    <div>
      <md-field>
        <label>Search Term</label>
        <md-input v-model.lazy="search"></md-input>
      </md-field>
    </div>

    <md-list class="picker-list md-scrollbar">
      <md-list-item v-for="result in results" :key="result.place_id">
        <md-radio v-model="common" :value="result.display_name" @change="$emit('select', result)"/>
        <span class="md-list-item-text picker-text">{{ result.display_name }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
/* eslint-disable no-new */
import axios from 'axios';

export default {
  name: 'location-picker',
  data() {
    return {
      search: '',
      common: '',
    };
  },
  asyncComputed: {
    async results() {
      const result = await axios.get(`https://nominatim.openstreetmap.org/search/${this.search}?format=json`);
      return result.data;
    },
  },
};
</script>

<style>
.picker-list {
  overflow-y: scroll;
  overflow-x: auto;
  min-height: 0;

      flex: 2;

}

.picker-text {
  white-space: normal !important;
}
.location-picker-root {
  display: flex;
  flex-flow: column;
  min-height: 0;
}
</style>
