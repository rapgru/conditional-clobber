
<template>
  <div class="travel-view-root">
    <div ref="content">
      <h1 class="md-title">Travel > Result</h1>
      <md-list>
        <md-list-item>
          <md-card>
            <md-card-header>
              <md-avatar>
                <md-icon>my_location</md-icon>
              </md-avatar>
              <div class="md-title">Your Query</div>
              <div class="md-subhead">Review your inputs</div>
            </md-card-header>
            <md-card-content>
              <p class="travel-display"><span>Destination: </span>{{ destination.display_name }}</p>
              <p class="travel-display"><span>From: </span>{{ departureFormat }}</p>
              <p class="travel-display"><span>To: </span>{{ treturnFormat }}</p>
            </md-card-content>
          </md-card>
        </md-list-item>

        <md-list-item>
          <md-card>
            <md-card-header>
              <md-avatar>
                <md-icon>card_travel</md-icon>
              </md-avatar>
              <div class="md-title">Take with you</div>
            </md-card-header>
            <md-card-content>
              <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
              <p class="cloth" v-for="type in result" :key="type.type">{{type.count}}x <img :src="imgFactory(type.type)"/></p>
            </md-card-content>
          </md-card>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
import svgs from '@/views/travel/travelsvgs';
import { Base64 } from 'js-base64';


export default {
  name: 'travel-result',
  components: {},
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swiperight', () => {
      this.$router.push('/');
    });
  },
  methods: {
    imgFactory(type) {
      console.log(`searching svg ${type}`);
      const { gender } = this.$store.state.general.settings.avatar;
      const base = Base64.encode(_.find(svgs, { type, gender: _.toLower(gender) }).svg);
      return `data:image/svg+xml;base64,${base}`;
    },
  },
  computed: {
    destination() {
      return this.$store.state.travel.query.destination;
    },
    treturn() {
      return this.$store.state.travel.query.treturn;
    },
    departure() {
      return this.$store.state.travel.query.departure;
    },
    departureFormat() {
      return moment(this.departure).format('dddd, MMMM Do YYYY');
    },
    treturnFormat() {
      return moment(this.treturn).format('dddd, MMMM Do YYYY');
    },
    loading() {
      return this.$store.state.travel.loading;
    },
    result() {
      return this.$store.state.travel.result;
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

  .md-card {
    width: 100%;
    margin: 0px;
  }
}
.travel-display {
  white-space: normal;

  span {
    font-weight: bold;
    font-size: 18px;
  }
}
.cloth {
  font-size: 30px;
  text-align: center;

  img {
    width: 50%;
    padding-left: 40px;
  }
}
</style>
