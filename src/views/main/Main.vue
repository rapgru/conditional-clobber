<template>
  <div class="main-view-root" style="text-align: right;">
    <div style="position: absolute; display: flex; justify-content: flex-end; width: 93%;">
      <md-button class="md-icon-button" @click="update">
        <md-icon class="refresh-icon" :class="{'refresh-turn': loading}">refresh</md-icon>
      </md-button>
    </div>
    <div ref="content" class="md-layout md-alignment-center-space-between">
      <div class="md-layout-item main-picture" v-html="mainPicture"></div>
      <div class="md-layout-item sidebar">
        <IconWarning :key="icon" v-for="icon in warnings" :icon="icon"></IconWarning>
      </div>
    </div>
    <Chart class="chart" :chart-data="datasets" :options="options"></Chart>
  </div>
</template>

<script>
import IconWarning from '@/views/main/IconWarning.vue';
import Chart from '@/views/main/Chart.vue';
import moment from 'moment-timezone';

export default {
  name: 'home',
  components: {
    IconWarning,
    Chart,
  },
  computed: {
    mainPicture() {
      return this.$store.state.prediction.renderedPicture.svg;
    },
    warnings() {
      return this.$store.state.general.weather.warnings;
    },
    loading() {
      return this.$store.state.general.loading;
    },
    timezone() {
      return this.$store.state.general.settings.timezone;
    },
    datasets() {
      return {
        datasets: [
          {
            yAxisID: 'temp',
            borderColor: 'rgb(243,156,18)',
            backgroundColor: 'rgb(243,156,18)',
            fill: false,
            label: 'temperature',
            data: this.tempData,
          },
          {
            yAxisID: 'hum',
            borderColor: 'rgb(52,152,219)',
            backgroundColor: 'rgb(52,152,219)',
            label: 'rainfall',
            fill: false,
            data: this.rainData,
          },
        ],
      };
    },
    min() {
      return moment().tz(this.timezone).startOf('day').format();
    },
    max() {
      return moment().tz(this.timezone).endOf('day').subtract(1, 'hour').format();
    },
    options() {
      return {
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
              min: this.min,
              max: this.max,
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
                max: 100,
                beginAtZero: true,
              },
            },
          ],
        },
        maintainAspectRatio: false,
      };
    },
    weather() {
      return this.$store.state.general.weather.timemachine.data.hourly.data;
    },
    tempData() {
      return this.weather.map(h => ({ x: moment.unix(h.time).tz(this.timezone).format(), y: h.temperature }));
    },
    rainData() {
      return this.weather.map(h => ({ x: moment.unix(h.time).tz(this.timezone).format(), y: h.precipProbability * 100 }));
    },
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
  height: 100vh;
  width: 100vw;
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

.refresh-turn {
  animation: spin 2s linear infinite;
}

@keyframes spin { 100% { transform:rotate(360deg); } }

</style>
