<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  name: 'Chart',
  props: ['chartdata', 'options'],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    options() {
      this.renderChart(this.chartData, this.options);
    },
  },
};
</script>

<style scoped>
.chart {
  height: 200px;
  position: relative;
}
</style>
