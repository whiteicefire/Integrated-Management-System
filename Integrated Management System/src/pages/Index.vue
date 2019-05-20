<template>
  <div>
  <div class="chart_display">
    <div class="chart">
       <chart ref="chart1" :options="optionjzl" :auto-resize="true"></chart>
    </div>
    <div class="chart">
        <chart ref="chart2" :options="optionzy" :auto-resize="true"></chart>
    </div>
    <div class="chart">
        <chart ref="chart3" :options="optioncy" :auto-resize="true"></chart>
    </div>
    <div class="chart">
        <chart ref="chart4" :options="option4" :auto-resize="true"></chart>
    </div>
  </div>
  </div>
</template>

<script>
import { date, colors } from 'quasar'
import { async } from 'q';
import { zhgl_sysj_sel } from '@/api/index/zhgl_sysj_sel'

export default {
  name: 'Index',
  data () {
    return {
      orgOptions: {},
      optionjzl:{},
      optionzy:{},
      optioncy:{},
      option4:{},
      primary:this.$store.getters.info,
      msg:{}
    }
  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.showcase.drawerState
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    },
    chargeprimary() {
      return this.$store.getters.info
    }
  },
  watch: {
    chargeprimary(val) {
      this.primary = val;
      this.echarts()
    }
  },
  mounted () {
    this.loadData()
    this.init()
  },
  methods: {
    init () {
        const self = this
        setTimeout(() => {
            window.onresize = function () {
            self.$refs.chart1.resize()
            self.$refs.chart2.resize()
            self.$refs.chart3.resize()
            self.$refs.chart4.resize()
            }
        }, 20)
    },
    time () {
      let timeStamp = Date.now()
      let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      console.log(formattedString)
    },
    color () {
      const { setBrand } = colors
      setBrand('primary', '#f33')
    },
    async loadData () {
      try {
        this.msg = await zhgl_sysj_sel(this.$store.state.user.openid)
        this.echarts()
      } catch (e) {}
    },
    echarts() {
       var ptmdata = {
            jzldtData:[],
            jzlData:[],
            rydtData:[],
            ryData:[],
            cydtData:[],
            cyData:[],
            ciData:[],
            jbmcdata:[]
          };
        var jzlData = this.msg.data.hjzdata;
        var hryData = this.msg.data.hrydata;
        var hcyData = this.msg.data.hcydata;
        var hciData = this.msg.data.hjbdata;
        for(var a in jzlData){
          ptmdata.jzldtData.push(jzlData[a].dt);
          ptmdata.jzlData.push(jzlData[a].jzl);
        }
        for(var b in hryData){
          ptmdata.rydtData.push(hryData[b].dt);
          ptmdata.ryData.push(hryData[b].ryl);
        }
        for(var c in hcyData){
          ptmdata.cydtData.push(hcyData[c].dt);
          ptmdata.cyData.push(hcyData[c].cyl);
        }
        for(var d in hciData){
          ptmdata.jbmcdata.push(hciData[d].jbzdmc);
          ptmdata.ciData.push(hciData[d].cnt);
        }
        /*门诊门急诊人次数据*/
        this.optionjzl = {
            title:{
                text:'门急诊人次',
                x: 'center',
                y:'3%',
                textStyle: {
                  fontFamily: '等线',
                  fontSize: 14
                },
            },
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "shadow",
                },
                formatter:'{b}<br/>{a0}:{c0}'
            },
                grid: {
                top:'14%',
            },  
            toolbox: {
                show : true,
                orient : 'horizontal',
                x : 'left',
                top:'2%',
                left:'70%',
                feature : {
                    mark : {show: true},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage: {}
                }
              },
              "calculable": true,
              xAxis: [{
                  type: "category",
                  axisLine: {
                      lineStyle: {
                          color: '#42a5c2'
                      }
                  },
                  splitLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  splitArea: {
                      show: false
                  },
                  axisLabel: {
                    interval: 0,
                    rotate:25,
                    textStyle:{
                    fontSize:10,
                    }
                },
                data: ptmdata.jzldtData,
            }],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    /*min: 0,
                    max: 100,*/
                    "splitLine": {
                        "show": false
                    },
                    position: 'top'
                }
            ],
            series: [
                {
                    name:'',  //门急诊人次
                    type:'bar',
                    barWidth : 15,
                    data:ptmdata.jzlData,
                    color: this.primary
                },
                ]
          };
          /*住院人次数据*/
          this.optionzy={
              title:{
                  text:'住院人次',
                  x: 'center',
                  y:'3%',
                  textStyle: {
                    fontFamily: '等线',
                    fontSize: 14
                  },
              },
              "tooltip": {
                  "trigger": "axis",
                  "axisPointer": {
                      "type": "shadow",
                  },
                  formatter:'{b}<br/>{a0}:{c0}'
              },
                 grid: {
                  top:'14%',
              },  
              toolbox: {
                  show : true,
                  orient : 'horizontal',
                  x : 'right',
                  top:'2%',
                  left:'70%',
                  feature : {
                      mark : {show: true},
                      magicType : {show: true, type: ['line', 'bar']},
                      restore : {show: true},
                      saveAsImage: {}
                  }
                },
               "calculable": true,
               xAxis: [{
                    "type": "category",
                    "axisLine": {
                        lineStyle: {
                            color: '#42a5c2'
                        }
                    },
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "splitArea": {
                        "show": false
                    },
                    "axisLabel": {
                      "interval": 0,
                      rotate:25,
                      textStyle:{
                          fontSize:10,
                      }
                  },
                  "data": ptmdata.rydtData,
              }],
              yAxis: [
                  {
                      type: 'value',
                      name: '',
                      "splitLine": {
                          "show": false
                      },
                      position: 'top'
                  }
              ],
              series: [
                  {
                      name:'',  
                      type:'bar',
                      barWidth : 15,
                      data:ptmdata.ryData,
                      color: this.primary
                  },
                  ]
          };
          /*出院人次数据*/
          this.optioncy={
              title:{
                  text:'出院人次',
                  x: 'center',
                  y:'3%',
                  textStyle: {
                    fontFamily: '等线',
                    fontSize: 14
                  },
              },
              "tooltip": {
                  "trigger": "axis",
                  "axisPointer": {
                      "type": "shadow",
                  },
                  formatter:'{b}<br/>{a0}:{c0}'
              },
                 grid: {
                  top:'14%',
               
              },  
              toolbox: {
                  show : true,
                  orient : 'horizontal',
                  x : 'right',
                  top:'2%',
                  left:'70%',                  
                  feature : {
                      mark : {show: true},
                      magicType : {show: true, type: ['line', 'bar']},
                      restore : {show: true},
                      saveAsImage: {}
                  }
                },
               "calculable": true,
               xAxis: [{
                    "type": "category",
                    "axisLine": {
                        lineStyle: {
                            color: '#42a5c2'
                        }
                    },
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "splitArea": {
                        "show": false
                    },
                    "axisLabel": {
                      "interval": 0,
                      rotate:25,
                      textStyle:{
                          fontSize:10,
                      }
                  },
                  "data": ptmdata.cydtData,
              }],
              yAxis: [
                  {
                      type: 'value',
                      name: '',
                      "splitLine": {
                          "show": false
                      },
                      position: 'top'
                  }
              ],
              series: [
                  {
                      name:'',  //门急诊人次
                      type:'bar',
                      barWidth : 15,
                      data:ptmdata.cyData,
                      color: this.primary
                  },
                  ]
          };
          /*词云数据*/
          this.option4={
              title:{
                  text:'疾病前10',
                  x: 'center',
                  y:'3%',
                  textStyle: {
                    fontFamily: '等线',
                    fontSize: 14
                  },
              },
              "tooltip": {
                  "trigger": "axis",
                  "axisPointer": {
                      "type": "shadow",
                  },
                  formatter:'{b}<br/>{a0}:{c0}'
              },
                 grid: {
                  top:'14%',
              },  
              toolbox: {
                  show : true,
                  orient : 'horizontal',
                  x : 'right',
                  top:'2%',
                  left:'70%',                  
                  feature : {
                      mark : {show: true},
                      magicType : {show: true, type: ['line', 'bar']},
                      restore : {show: true},
                      saveAsImage: {}
                  }
                },
               "calculable": true,
               xAxis: [{
                    "type": "category",
                    "axisLine": {
                        lineStyle: {
                            color: '#42a5c2'
                        }
                    },
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "splitArea": {
                        "show": false
                    },
                    "axisLabel": {
                      "interval": 0,
                      rotate:25,
                      textStyle:{
                          fontSize:10,
                      }
                  },
                  "data": ptmdata.jbmcdata,
              }],
              yAxis: [
                  {
                      type: 'value',
                      name: '',
                      "splitLine": {
                          "show": false
                      },
                      position: 'top'
                  }
              ],
              series: [
                  {
                      name:'',  
                      type:'bar',
                      barWidth : 15,
                      data:ptmdata.ciData,
                      color: this.primary
                  },
                  ]
            }
    }
  }
}
</script>

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
   width: 100%;
  }
  .chart_display .chart .echarts{
    margin: auto;
  }
}
.echarts{
    width: 95%;
}
/* .echarts div{
    width: 100%;
    height: auto;
}
.echarts div canvas{
    width: 100%;
    height: auto;
} */
</style>