<template>
  <div id="visualizer">
    <h1>Philosophers visualizer</h1>
    <textarea v-model="textData" placeholder="timestamp_in_ms X status" />
    <br />
    <button @click="generateData">generate</button>
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
        colors: ['#c73327', '#3b95d3', '#e8c400']
      },
      textData: ''
    };
  },
  methods: {
    generateData() {
      let newChartData = [
        [
          { type: 'string', id: 'Index' },
          { type: 'string', id: 'Action' },
          { type: 'number', id: 'Start' },
          { type: 'number', id: 'End' }
        ]
      ]
      const regex = /^(\d+) (\d+) (is (.*)ing|died)$/;
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
        newChartData.push(
          [index, prevAction[index].action, prevAction[index].ms, ms]
        )
        prevAction[index] = {
          action: action,
          ms: ms
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
  height: 200px;
  width: 300px;
}
button {
  padding: 6px 10px;
  margin: 1em;
}
#graph {
  overflow-x: scroll;
  width: 100%;
}
</style>
