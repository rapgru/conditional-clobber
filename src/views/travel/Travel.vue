<template>
  <div class="travel-view-root">
    <div ref="content">
      <h1 class="md-title">Travel > Query</h1>
      <md-steppers md-vertical md-linear :md-active-step.sync="active">
        <md-step id="destination" :md-error="destination.error" :md-done="destination.done" md-label="Pick travel destination">
          <location-picker @select="changed"/>
          <md-button class="md-primary md-raised" @click="destinationNext">Next</md-button>
        </md-step>

        <md-step id="departure" :md-error="departure.error" :md-done="departure.done" md-label="Pick departure date">
          <md-datepicker md-immediately v-model="departure.value">
            <label>Pick date</label>
          </md-datepicker>
          <md-button class="md-primary md-raised" @click="departureNext">Next</md-button>
        </md-step>

        <md-step id="treturn" :md-error="treturn.error" :md-done="treturn.done" md-label="Pick return date">
          <md-datepicker md-immediately :md-disabled-dates="disabled" v-model="treturn.value">
            <label>Pick date</label>
          </md-datepicker>
          <md-button class="md-primary md-raised" @click="treturnNext">Next</md-button>
        </md-step>

        <md-step id="check" md-label="Resulting query">
          <p v-if='treturn.done' class="travel-display"><span>Destination: </span>{{ destination.value.display_name }}</p>
          <p v-if='treturn.done' class="travel-display"><span>From: </span>{{ departureFormat }}</p>
          <p v-if='treturn.done' class="travel-display"><span>To: </span>{{ treturnFormat }}</p>
          <md-button class="md-primary md-raised" @click="submit">Show Result</md-button>
        </md-step>
      </md-steppers>
    </div>
  </div>
</template>

<script>
import LocationPicker from '@/views/settings/LocationPicker.vue';
import moment from 'moment-timezone';
import axios from 'axios';

export default {
  name: 'travel',
  components: {
    'location-picker': LocationPicker,
  },
  data() {
    return {
      active: 'destination',
      destination: {
        done: false,
        error: null,
        value: null,
      },
      departure: {
        done: false,
        error: null,
        value: null,
      },
      treturn: {
        done: false,
        error: null,
        value: null,
      },
    };
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swiperight', () => {
      this.$router.push('/');
    });
  },
  computed: {
    departureFormat() {
      return moment(this.departure.value).format('dddd, MMMM Do YYYY');
    },
    treturnFormat() {
      return moment(this.treturn.value).format('dddd, MMMM Do YYYY');
    },
  },
  methods: {
    changed(val) {
      this.destination.value = val;
    },
    destinationNext() {
      if (this.destination.value) {
        this.active = 'departure';
        this.destination.error = null;
        this.destination.done = true;
      } else {
        this.destination.error = 'No destination picked!';
      }
    },
    departureNext() {
      if (this.departure.value) {
        this.active = 'treturn';
        this.departure.error = null;
        this.departure.done = true;
        this.treturn.value = moment(this.departure.value).add(1, 'd').toDate();
      } else {
        this.departure.error = 'No departure date picked!';
      }
    },
    treturnNext() {
      if (this.treturn.value) {
        this.active = 'check';
        this.treturn.error = null;
        this.treturn.done = true;
      } else {
        this.treturn.error = 'No return date picked!';
      }
    },
    disabled(val) {
      // Negate because false disables a date
      return !(moment(val).isSameOrAfter(moment(this.departure.value)));
    },
    submit() {
      this.$store.commit('setQueryMode', false);
      this.$store.dispatch('setQuery', {
        departure: this.departure.value,
        destination: this.destination.value,
        treturn: this.treturn.value,
      });
      this.$router.push('/travel/result');
    },
  },
};
</script>

<style lang="scss" scoped>
.travel-view-root {
  height: 100%;
  width: 100%;

  .md-layout {
    height: 100%;
  }
}

.travel-display {
  white-space: normal;

  span {
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
