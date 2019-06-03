<template>
  <md-dialog :md-active.sync="show">
      <md-dialog-title>Settings > Location</md-dialog-title>

      <location-picker @select="changed"></location-picker>

      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('cancel')">Cancel</md-button>
        <md-button class="md-primary" @click="$emit('save', selection)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>

<script>
import LocationPicker from '@/views/settings/LocationPicker.vue';

export default {
  name: 'location-picker-dialog',
  components: {
    'location-picker': LocationPicker,
  },
  data() {
    return {
      selection: {},
    };
  },
  props: ['show'],
  methods: {
    changed(val) {
      this.selection = val;
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
</style>
