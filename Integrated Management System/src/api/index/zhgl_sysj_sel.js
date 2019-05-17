import request from '../../utils/request'

export function zhgl_sysj_sel(openid) {
    return request.service({
      url: '/api/zhgl_sysj_sel',
      method: 'get',
      params:{
        app: request.UrlParams.zgapp,
        mod: 'lszb',
        org: request.UrlParams.org,
        openid: openid
      } 
    })
  }