import request from '../utils/request'
import qs from 'qs'

export function loginByUsername(userid, password) {

  const data = {
    userid,
    password
  }
  return request.service({
    url: '/user/login?app=' + request.params.urla,
    method: 'post',
    data: qs.stringify(data)
  })
}

export function logout() {
  return request.service({
    url: '/user/logout?app=' + request.params.urla,
    method: 'post',
    loading:"hourglass"
  })
}

export function getUserInfo(openid) {
  return request.service({
    url: '/api/userinfo_sel?' + request.params.urla + '&openid=' + openid + request.params.urlb,
    method: 'get',
    loading:"gears",
  })
}

// export const getUserInfo = () => {
//   return request.getRequest('/api', '/userinfo_sel', {})
// }