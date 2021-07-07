<template>
  <div id="visualizer">
    <h1>Philosophers visualizer</h1>
    <textarea v-model="textData" placeholder="timestamp_in_ms X status" />
    <br />
    <button @click="generateData">generate</button>
    <div class="warn" v-if="warningMessage">
      {{ warningMessage }}
    </div>
    <div id="graph" v-if="chartData.length > 1">
      <GChart
        :settings="{ packages: ['timeline'] }"
        type="Timeline"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'Vizualizer',
  components: {
    GChart
  },
  data() {
    return {
      chartData: [],
      chartOptions: {
        title: 'Philosopher visualizer',
        height: 0,
        width: 0,
        colors: ['#fbb4ae', '#b3cde3', '#ccebc5'],
        avoidOverlappingGridLines: false
      },
      textData: '',
      warningMessage: ''
    };
  },
  methods: {
    generateData() {
      this.warningMessage = '';
      let newChartData = [
        [
          { type: 'string', id: 'Index' },
          { type: 'string', id: 'Action' },
          { type: 'string', role: 'style' },
          { type: 'number', id: 'Start' },
          { type: 'number', id: 'End' }
        ]
      ]
      const regex = /^(\d+) (\d+) (is (eat|sleep|think)ing|died)$/;
      let prevAction = {}
      let range = {min: Infinity, max: 0}
      let philoNum = 0
      this.textData.split("\n").forEach((line) => {
        const found = line.match(regex)
        if (!found)
          return ;
        const ms = parseInt(found[1], 10)
        const action = found[4]
        const index = found[2]
        range.min = Math.min(range.min, ms)
        range.max = Math.max(range.max, ms)
        philoNum = Math.max(philoNum, index)
        if (!prevAction[index]) {
          prevAction[index] = {
            action: action,
            ms: ms
          }
          return ;
        }
        if (prevAction[index].action)
        {
          newChartData.push(
            [index, prevAction[index].action, 'stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55', prevAction[index].ms, ms]
          )
        } else {
          this.warningMessage += `Philosopher ${index} is already dead (time: ${prevAction[index].ms})\r\n`
        }
        prevAction[index] = {
          action: action,
          ms: ms
        }
      })
      Object.keys(prevAction).forEach((key) => {
        if (prevAction[key].ms < range.max && prevAction[key].action)
        {
          newChartData.push(
            [key, prevAction[key].action, 'stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55', prevAction[key].ms, range.max]
          )
        }
      })
      this.chartOptions.height = philoNum * 40 + 60
      this.chartOptions.width = (range.max - range.min) * 0.6
      this.chartData = newChartData.sort((a, b) => a[0] - b[0])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#visualizer {
  text-align: center;
}
textarea {
  height: 120px;
  width: 300px;
}
button {
  padding: 8px 10px;
  margin: 1em;
  width: 300px;
}
#graph {
  overflow-x: scroll;
  width: 100%;
}

.warn {
  color: red;
  white-space: pre-wrap;
}
</style>
