<template lang='html'>
  <section class='dashboard'>
    <!-- Page Title Header Starts-->
    <div class='row page-title-header'>
      <div class='col-12'>
        <div class='page-header'>
          <h4 class='page-title'>Dashboard</h4>
        </div>
      </div>
    </div>
    <!-- Page Title Header Ends-->
    <div class='row'>
      <div class='col-md-12 grid-margin'>
        <div class='card'>
          <div class='card-body'>
            <div class='row'>
              <div class='col-lg-3 col-md-6'>
                <div class='d-flex'>
                  <div class='wrapper'>
                    <h3 class='mb-0 font-weight-semibold'>{{ u }}</h3>
                    <h5 class='mb-0 font-weight-medium text-primary'>Clients Registered</h5>
                  </div>
                  <div class='wrapper my-auto ml-auto ml-lg-4'>
                    <stats-line-graph-1 :height="50" :width="100"></stats-line-graph-1>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 mt-md-0 mt-4'>
                <div class='d-flex'>
                  <div class='wrapper'>
                    <h3 class='mb-0 font-weight-semibold'>{{ app }}</h3>
                    <h5 class='mb-0 font-weight-medium text-primary'>Appointments pulled</h5>
                  </div>
                  <div class='wrapper my-auto ml-auto ml-lg-4'>
                    <stats-line-graph-2 :height="50" :width="100"></stats-line-graph-2>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 mt-md-0 mt-4'>
                <div class='d-flex'>
                  <div class='wrapper'>
                    <h3 class='mb-0 font-weight-semibold'>{{ vl }}</h3>
                    <h5 class='mb-0 font-weight-medium text-primary'>VL Results Pulled</h5>
                  </div>
                  <div class='wrapper my-auto ml-auto ml-lg-4'>
                    <stats-line-graph-3 :height="50" :width="100"></stats-line-graph-3>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 mt-md-0 mt-4'>
                <div class='d-flex'>
                  <div class='wrapper'>
                    <h3 class='mb-0 font-weight-semibold'>{{ eid }}</h3>
                    <h5 class='mb-0 font-weight-medium text-primary'>EID Results Pulled</h5>
                  </div>
                  <div class='wrapper my-auto ml-auto ml-lg-4'>
                    <stats-line-graph-4 :height="50" :width="100"></stats-line-graph-4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='row'>
    </div>
    <div class='row'>
      <div class='col-md-8'>
        <div class='row'>
          <div class='col-md-12 grid-margin stretch-card'>
            <div class='card'>
              <div class='card-body'>
                <h4 class='card-title mb-0'>Usage Overview</h4>
                <div class='d-flex flex-column flex-lg-row'>
                  <div class="ml-lg-auto" id="sales-statistics-legend">
                    <div class="chartjs-legend">
                      <ul>
                      </ul>
                    </div>
                  </div>
                </div>
                <section class="charts">
                  <h3>Usage Overview
                    <p>Registrations and logins</p>
                  </h3>
                  <vue-highcharts :options="options" :height="170" :highcharts="Highcharts" ref="lineCharts"></vue-highcharts>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-4'>
        <div class='row'>
          <div class='col-md-12 grid-margin'>
            <div class='card'>
              <div class='card-body'>
                <h4 class='card-title mb-4'>World sellings</h4>
                <usersDoughnutChart :height="200"></usersDoughnutChart>
                <div class='wrapper'>
                  <div class='d-flex w-100 pt-2 mt-4'>
                    <p class='mb-0 font-weight-semibold'>California</p>
                    <div class='wrapper ml-auto d-flex align-items-center'>
                      <p class='font-weight-semibold mb-0'>26,437</p>
                      <p class='ml-1 mb-0'>26%</p>
                    </div>
                  </div>
                  <div class='d-flex w-100 pt-2'>
                    <p class='mb-0 font-weight-semibold'>Washington</p>
                    <div class='wrapper ml-auto d-flex align-items-center'>
                      <p class='font-weight-semibold mb-0'>3252</p>
                      <p class='ml-1 mb-0'>64%</p>
                    </div>
                  </div>
                  <div class='d-flex w-100 pt-2'>
                    <p class='mb-0 font-weight-semibold'>Michigan</p>
                    <div class='wrapper ml-auto d-flex align-items-center'>
                      <p class='font-weight-semibold mb-0'>4,987</p>
                      <p class='ml-1 mb-0'>30%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='js'>
import statsLineGraph1 from '../components/charts/dashboard_1/stats-line-graph-1'
import statsLineGraph3 from '../components/charts/dashboard_1/stats-line-graph-3'
import statsLineGraph4 from '../components/charts/dashboard_1/stats-line-graph-4'
import salesStatisticsOverview from '../components/charts/dashboard_1/sales-statistics-overview'
import netProfit from '../components/charts/dashboard_1/net-Profit'
import totalRevenue from '../components/charts/dashboard_1/total-revenue'
import marketOverviewChart from '../components/charts/dashboard_1/market-overview-chart'
import totalTransaction from '../components/charts/dashboard_1/total-transaction'
import realtimeStatistics from '../components/charts/dashboard_1/realtime-statistics'
import usersDoughnutChart from '../components/charts/dashboard_1/usersDoughnutChart'
import JQuery from 'jquery'
import axios from 'axios'
import VueHighcharts from 'vue2-highcharts'
import Exporting from 'highcharts/modules/exporting'
import Highcharts from 'highcharts'

Exporting(Highcharts)
let $ = JQuery
export default {
  name: 'dashboard',
  data () {
    return {
      app: 0,
      vl: 0,
      u: 0,
      eid: 0,
      fac: 0,
      options: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Usage Overview'
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: 'Number of clients'
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
            }
          }
        },
        series: []
      },
      Highcharts: Highcharts,
      chartd: []
    }
  },
  components: {
    VueHighcharts,
    statsLineGraph1,
    statsLineGraph3,
    statsLineGraph4,
    salesStatisticsOverview,
    netProfit,
    totalRevenue,
    marketOverviewChart,
    totalTransaction,
    realtimeStatistics,
    usersDoughnutChart
  },
  mounted () {
    this.getNumbers()
    this.load()
  },
  methods: {
    load () {
      let lineCharts = this.$refs.lineCharts
      // charts.showLoading('loading');

      // you also can use the delegateMethod()
      lineCharts.delegateMethod('showLoading', 'Loading...')
      setTimeout(() => {
        lineCharts
          .getChart()
          .xAxis[0].setCategories(this.chartd.date)
        lineCharts.addSeries({
          name: 'Joined',
          marker: {
            symbol: 'circle'
          },
          color: '#8862e0',
          data: this.chartd.joined
        })
        lineCharts.addSeries({
          name: 'Last Login',
          marker: {
            symbol: 'circle'
          },
          color: '#19d895',
          data: this.chartd.llogin
        })
        lineCharts.hideLoading()
      }, 2000)
    },
    toggleProBanner: function () {
      $('body').toggleClass('pro-banner-collapse')
    },
    async getNumbers () {
      let a = await axios.get('api/auth/web/dash')
      this.vl = a.data.vl_count
      this.app = a.data.app_count
      this.u = a.data.reg_count
      this.fac = a.data.fac_count
      this.eid = a.data.eid_count
      this.chartd = a.data.chart
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
