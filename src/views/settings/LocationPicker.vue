<template>
  <md-dialog :md-active.sync="show">
      <md-dialog-title>Choose Location</md-dialog-title>

      <div>
        <md-field>
          <label>Search Term</label>
          <md-input v-model.lazy="search"></md-input>
        </md-field>
      </div>

      <md-list class="picker-list md-scrollbar">
        <md-list-item v-for="result in results" :key="result.place_id">
          <md-radio v-model="common" :value="result.display_name" @change="selection = result"/>
          <span class="md-list-item-text picker-text">{{ result.display_name }}</span>
        </md-list-item>
      </md-list>

      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('cancel')">Cancel</md-button>
        <md-button class="md-primary" @click="$emit('save', selection)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>

<script>
/* eslint-disable no-new */
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'location-picker',
  data() {
    return {
      search: '',
      common: '',
      selection: {},
    };
  },
  props: ['show'],
  asyncComputed: {
    async results() {
      const result = await axios.get(`https://nominatim.openstreetmap.org/search/${this.search}?format=json`);
      return result.data;
    },
  },
};
</script>

<style>
.md-dialog {
  /* max-width: 768px; */
  padding: 20px;
  height: 100vh;
}

.picker-list {
  overflow-y: scroll;
  overflow-x: auto;
  width: 100%;
  height: 100%;
}
.picker-text {
  white-space: normal !important;
}
</style>
