<template>
  <div class="main-view-root">
    <md-button class="md-icon-button" @click="update" style="position: absolute; top: 10px; right: 10px;">
      <md-icon class="refresh-icon" :class="{'refresh-turn': loading}">refresh</md-icon>
    </md-button>
    <div ref="content" class="md-layout md-alignment-center-space-between">
      <div class="md-layout-item main-picture" v-html="mainPicture"></div>
      <div class="md-layout-item sidebar">
        <IconWarning :key="icon" v-for="icon in warnings" :icon="icon"></IconWarning>
      </div>
    </div>
    <Chart class="chart" :chart-data="temp" :options="options"></Chart>
  </div>
</template>

<script>
import IconWarning from '@/views/main/IconWarning.vue';
import Chart from '@/views/main/Chart.vue';
import moment from 'moment';

export default {
  name: 'home',
  components: {
    IconWarning,
    Chart,
  },
  data() {
    return {
      options: {
        legend: {
          labels: {
            fontColor: '#fff',
          },
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'hour',
              min: moment().second(0).minute(0).hour(0)
                .toDate(),
              max: moment().second(59).minute(59).hour(23)
                .toDate(),
            },
            ticks: {
              fontColor: '#fff',
            },
            gridLines: {
              drawOnChartArea: false,
              color: 'rgba(255,255,255,0.5)',
            },
          }],
          yAxes: [
            {
              type: 'linear',
              position: 'left',
              id: 'temp',
              ticks: {
                fontColor: '#fff',
              },
              gridLines: {
                drawOnChartArea: false,
                color: 'rgba(255,255,255,0.5)',
              },
            },
            {
              type: 'linear',
              position: 'right',
              id: 'hum',
              gridLines: {
                drawOnChartArea: false,
                color: 'rgba(255,255,255,0.5)',
              },
              ticks: {
                fontColor: '#fff',
                beginAtZero: true,
              },
            },
          ],
        },
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    mainPicture() {
      return this.$store.state.prediction.renderedPicture.svg;
    },
    warnings() {
      return this.$store.state.prediction.warnings;
    },
    loading() {
      return this.$store.state.general.loading;
    },
    temp() {
      return {
        datasets: [
          {
            yAxisID: 'temp',
            borderColor: 'rgb(243,156,18)',
            backgroundColor: 'rgb(243,156,18)',
            fill: false,
            label: 'temperature',
            data: this.$store.state.general.weather.timemachine.data.hourly.data.map(h => ({ x: moment.unix(h.time).toDate(), y: h.temperature })),
          },
          {
            yAxisID: 'hum',
            borderColor: 'rgb(52,152,219)',
            backgroundColor: 'rgb(52,152,219)',
            label: 'rainfall',
            fill: false,
            data: this.$store.state.general.weather.timemachine.data.hourly.data.map(h => ({ x: moment.unix(h.time).toDate(), y: h.precipProbability * 100 })),
          },
        ],
      };
    },
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on('swipe', (ev) => {
      if (ev.direction === Hammer.DIRECTION_UP) this.$router.push('/impressum');
    });
    hammertime.on('swiperight', () => {
      this.$router.push('/settings');
    });
    hammertime.on('swipeleft', () => {
      this.$router.push('/travel');
    });
  },
  methods: {
    update() {
      this.$store.dispatch('refreshWeather');
    },
  },
};
</script>

<style lang="scss">
.main-view-root {
  .md-layout {
    height: calc(100% - 200px);
  }
  height: 100%;
  width: 100%;
}

.main-picture {
  svg {
    height: 100%;
    width: 100%;
  }

  text-align: center;
  height: 100%;
}

.sidebar {
  flex: 0 0 40px !important;
  width: 40px;

  .md-avatar {
    margin-bottom: 4px;
    margin-top: 4px;
  }
}

/*.refresh-icon {
  width: $refreshsize !important;
  min-width: $refreshsize !important;
  height: $refreshsize !important;
  font-size: $refreshsize !important;
}*/

.refresh-turn {
  animation: spin 2s linear infinite;
}

@keyframes spin { 100% { transform:rotate(360deg); } }

</style>
