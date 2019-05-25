<template>
  <!-- <md-autocomplete ref="in" :value="value_" @input="updateLocation()" :md-options="locations" @md-opened="debouncedAutocomplete" @md-changed="debouncedAutocomplete">
    <label>Location</label>
  </md-autocomplete> -->
  <md-field>
    <label>Initial Value</label>
    <md-input :id="identification"></md-input>
  </md-field>
</template>

<script>
/* eslint-disable no-new */
import axios from 'axios';
import _ from 'lodash';
import AutoComplete from '@tarekraafat/autocomplete.js';

export default {
  name: 'location-picker',
  data() {
    return {
    };
  },
  props: ['identification'],
  mounted() {
    /* autocomplete(`#${this.identification}`, { hint: false }, [
      {
        source: (query, callback) => {
          axios
            .get(`https://nominatim.openstreetmap.org/search/${query}?format=json`)
            .then((value) => {
              console.log(value);
              callback(value.data);
            })
            .catch((err) => { console.log(err); });
        },
        displayKey: 'display_name',
        templates: {
          suggestion: (suggestion) => {
            return suggestion.display_name;
          },
        },
      },
    ]).on('autocomplete:selected', (event, suggestion, dataset, context) => {
     console.log(event, suggestion, dataset, context);
    }); */
    new AutoComplete({
      data: {
        src: async () => {
          const search = document.querySelector(`#${this.identification}`).getAttribute('value');
          console.log(search);
          // Fetch External Data Source
          const source = await axios.get(`https://nominatim.openstreetmap.org/search/${search}?format=json`);
          // Format data into JSON
          const data = await source.data;
          // Return Fetched data
          return data;
        },
        key: ["display_name"],
      },
      resultItem: {
        content: (data, source) => {
          return `${data.display_name}`;
        },
      },
    });
  },
  methods: {
  },
};
</script>

<style>
.algolia-autocomplete {
  width: 100%;
  height: 100%;
}
</style>
