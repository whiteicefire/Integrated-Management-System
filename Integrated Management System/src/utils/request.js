import axios from 'axios'
import '../../mock/mock.js'
import { getToken, removeToken } from '@/libs/auth'
import loading from '@/libs/loading.js'
import permission from './permission.js'
import { Notify } from 'quasar'

let base = 'http://124.93.18.203:30037/ds/'

let UrlParams = {
  app:'b0877fec1b464b01adcdd721d65adec8',
  mod:'',
  org:'afb9a9a1c80647e6a0d7e807f68e055a',
  openid: '',
  s:'d',
  ems:'ems',
  zgapp:'eac79df08ca94c19bf925374cd595f0d'
}

let params = {
    urla:'&app=' + UrlParams.app + '&mod=qxgl' + UrlParams.mod + '&org=' + UrlParams.org,
    urlb:'&s=' + UrlParams.s + '&ems=' + UrlParams.ems + '&zgapp=' + UrlParams.zgapp
}
    

// create an axios instance
const service = axios.create({
  baseURL: base,  //process.env.API, // api的base_url
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (!permission.check(config)) {
    Notify.create({
      message: this.$t("No request permission")
    })
    throw "403"
  }
  loading.show(config)
  let token = getToken()
  console.log('token',token)
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token// 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  //console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    console.log('service.response',response)
    loading.hide(response.config)
    const res = response.status;
    if (res !== 200) {
      Notify.create({
        message: res.msg
      })
      return Promise.reject('error');
    } else {

      return response;
    }
  },
  error => {
    loading.hide(error.config)
    if (error.response && error.response.status === 401) {
      removeToken();
      if (error.config.url.indexOf("logout") === -1) {
        Notify.create({
          message: this.$t('loginexpired')
        })
      }
      setTimeout(() => {
        Router.push({
          name: "login"
        });
      }, 1000)

    } else if (error.response && error.response.status === 500) {
      Notify.create({
        message: this.$t('System error') + '!',
        position: 'bottom-right'
      })
    } else if (error.message.indexOf("timeout")>-1) {
      Notify.create({
        message: this.$t('Network timeout') + '!',
        position: 'bottom-right'
      })
    }
    else if (error == "403") {

    } else {
      Notify.create({
        message:  '网络错误',//this.$t('Network error') + '!',
        position: 'bottom-right'
      })
    }
    return Promise.reject(error)

  })
  // export const getRequest = (type,url, params) =>{
  //   UrlParams.openid = store.state.user.openid
  //   return service({
  //       method: 'get',
  //       url: reqrul(type,url) + '?app=' + UrlParams.app + '&mod=' + UrlParams.mod + '&org=' + UrlParams.org + '&openid=' + UrlParams.openid +'&s=' + UrlParams.s +'&ems=' +UrlParams.ems+'&zgapp='+UrlParams.zgapp,
  //       params: params,
  //       // headers: {
  //       //     'accessToken': accessToken
  //       // }
  //   });
  // }

export default {service, params, UrlParams}
