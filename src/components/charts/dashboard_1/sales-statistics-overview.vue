<script lang='js'>
import {
  Line
} from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
      default: () => ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 28', 'Feb 4', 'Feb 11', 'Feb 18']
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null,
      data1: [],
      data2: [],
      label: []
    }
  },
  mounted() {
    const promise1 = new Promise((resolve, reject) => {
      resolve(this.getLabels())
    })
    console.log(this.getLabels(), this.getLLogin(), promise1)
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(102,78,235, 0.2)')
    this.gradient.addColorStop(1, 'rgba(255,255,255, 0.0)')
    this.gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.01)')
    this.gradient2.addColorStop(1, '#14c671')
    this.renderChart({
      labels: this.label,
      datasets: [{
        label: 'Date Joined',
        data: this.getJoined(),
        borderColor: '#8762e0',
        backgroundColor: this.gradient,
        borderWidth: 2
      }, {
        label: 'Last Login',
        data: this.getLLogin(),
        borderColor: '#5ed2a1',
        backgroundColor: this.gradient2,
        borderWidth: 2
      }]
    }, {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      },
      elements: {
        point: {
          radius: 3,
          backgroundColor: '#fff'
        },
        line: {
          tension: 0
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: false,
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            display: false,
            beginAtZero: false
          },
          gridLines: {
            drawBorder: false
          }
        }],
        yAxes: [{
          ticks: {
            max: 200,
            min: 0,
            stepSize: 50,
            fontColor: '#858585',
            beginAtZero: false
          },
          gridLines: {
            color: '#e2e6ec',
            display: true,
            drawBorder: false
          }
        }]
      }
    })
  },
  computed: {
    getLabel() {
      return this.getLabels()
    }
  },
  methods: {
    async getLabels() {
      setTimeout(async function () {
        await axios.get('api/auth/web/dash')
          .then(res => {
            return new Promise((resolve, reject) => {
              this.label = res.data.chart.date
              resolve(this.label)
            })
            // return {
            //   type: Array,
            //   default: () => res.data.chart.date
            // }
          })
      }, 5000)
    },
    async getLLogin() {
      setTimeout(async function () {
        await axios.get('api/auth/web/dash')
          .then(res => {
            this.data1 = res.data.chart.llogin
            return res.data.chart.llogin
          })
      }, 5000)
    },
    async getJoined() {
      setTimeout(async function () {
        await axios.get('api/auth/web/dash')
          .then(res => {
            return res.data.chart.joined
          })
      }, 5000)
    }
  }
}
</script>

<style scoped lang='scss'>
.sales-statistics-overview {

}
</style>
