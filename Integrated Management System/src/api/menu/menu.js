import request from '../../utils/request'

export function getMenuList(openid) {
    return request.service({
      url: '/api/menu_sel_by_user?' + request.params.urla + '&openid=' + openid + request.params.urlb ,
      method: 'get',
      params:{
        gncdywlbid:'6'
      }
    })
  }