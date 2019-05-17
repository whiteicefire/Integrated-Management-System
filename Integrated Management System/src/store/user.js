import * as authService from '../libs/auth'
import * as loginService from '../api/login'
import { Notify } from 'quasar'

const user = {
    state: {
        token: authService.getToken(),
        userInfo: {
            name: '',
            jgmc: ''
        },
        openid:''
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo
        },
        SET_OPENID(state, openid) {
            state.openid = openid
        }
    },
    actions: {
        //用户名登录
        LoginByUserName({ commit }, userinfo) {
           
            const userid = userinfo.userid.trim()
          
            return new Promise((resolve, reject) => {
                loginService.loginByUsername(userid, userinfo.password).then(response => {
                    console.log('Login',response)
                    const data = response.data
                    commit('SET_TOKEN', data.ut)
                    commit('SET_OPENID', data.openid)
                    authService.setToken(data.ut)
                    resolve()
                }).catch(error => {
                    console.log('error',error)
                    reject(error)
                })
            })
        },
        // 退出～
        LogOut({ commit }, state) {
            return new Promise((resolve, reject) => {
                loginService.logout().then((response) => {
                    commit('SET_TOKEN', '')
                    commit('SET_USERINFO', {
                        name: '',
                        jgmc: ''
                    })
                    authService.removeToken()
                    resolve()
                    this.$router.go(0)
                }).catch(error => {
                    commit('SET_TOKEN', '')
                    commit('SET_USERINFO', {
                        name: '',
                        jgmc: ''
                    })
                    authService.removeToken()
                    reject(error)
                })
            })
        },
        GetUserInfo({ commit }, openid) {
            console.log('usercommit',openid)           
            return new Promise((resolve, reject) => {
                loginService.getUserInfo().then((response) => {
                    console.log('userinfo',response.data)
                    const data = response.data.data
                    const userInfo = {
                        name: data.xingming,
                        jgmc: data.jgmc
                    }
                    commit('SET_USERINFO', userInfo)
                    let userRole = data.roles
                    // let userPermission = data.userPermission
                    let permission = [...userRole]
                    // let isAdmin = data.isAdmin
                    localStorage.setItem("permission", JSON.stringify(permission))
                    Notify.create({
                        message:  '欢迎' + data.xingming + '登录本系统',
                        position: 'bottom-right',
                        icon: 'sentiment_satisfied_alt',
                        color: 'positive',
                    })
                    // localStorage.setItem("isAdmin", isAdmin)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
};

export default user;
