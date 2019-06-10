
<template>
  <div class="travel-view-root">
    <div ref="content" class="content">
      <h1 class="md-heading">Travel > Result</h1>
      <div class="scroll">
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
          <md-card-actions>
            <md-button class="md-primary" @click="requery">New Query</md-button>
          </md-card-actions>
        </md-card>
  
        <h1 class="md-title">Take with you</h1>
        <md-list>
          <md-list-item v-for="type in result" :key="type.type">
            <cloth-card :type="type"></cloth-card>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone';
import ClothCard from '@/views/travel/ClothCard.vue';

export default {
  name: 'travel-result',
  components: { 'cloth-card': ClothCard },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swiperight', () => {
      this.$router.push('/');
    });
  },
  methods: {
    requery() {
      this.$store.commit('setQueryMode', true);
      this.$router.push('/travel');
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
  .md-list {
    .md-card {
      width: 100%;
      margin: 0px;
    }
  }
  .content {
    display: flex;
    flex-flow: column;
    height: 100%;

    .scroll {
      flex: 2;
      overflow: scroll;
    }
  }
}
.travel-display {
  white-space: normal;

  span {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
