<template>
  <div>
    医疗服务首页
  </div>
</template>

<style>
.chart_display{
  display: flex;
  width: 100%;
  flex-flow: row wrap;
}
.chart_display .chart{
  width: 50%;
}
 @media (max-width: 1350px){
  .chart_display .chart{
   flex: 1;
   width: auto;
  }
  .chart_display .chart .echarts{
    margin: auto;
  }
}
</style>

<script>
import { date, colors } from 'quasar'
import { async } from 'q';
// import { zhgl_mzhltj_sel } from '@/api/zhgl_mzhltj_sel'

export default {
  name: 'zhgl_ylfw',
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
