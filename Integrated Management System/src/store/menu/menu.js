import { getMenuList } from '@/api/menu/menu'
import { recursionMenus, recursionRouter, userforrouter } from '@/utils/recursionRouter'
import dynamicRoutes from '@/libs/dynamicRoutes'
import { appRoutes } from '@/router/routes'
import Router from '@/router/index'

const menu = {
    state: {
        moduleMenu: [],//模块菜单
        menuRouter: []//路由表
    },
    mutations: {
        setModuleMenu(state, list) {
            state.moduleMenu = list
        },
        SET_PERMISSION(state, list) {
            state.menuRouter = list
        }
    },
    actions: {
        async updateAccessMenu({ commit }, menus) {
            try {
                let response = await getMenuList();
                let accesseMenu = response.data.menus;
                var menuroutes = recursionMenus(accesseMenu, menus)//生成菜单            
                let userroutes = recursionRouter(accesseMenu, dynamicRoutes)             
                var userdatarouter = userforrouter(userroutes) 

                let MainContainer = appRoutes.find(v => v.path === '/cms')
                
                let children = MainContainer.children
              
                children.push(...userdatarouter)
                
                /*  初始路由 */
                let initialRoutes = Router.options.userdatarouter
                
                /*  动态添加路由 */
                Router.addRoutes(appRoutes) 
                console.log('MainContainer',appRoutes) 
                /* 完整的路由表 */
                commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
            } catch (e) {

            }
            commit('setModuleMenu', menuroutes);
        },
    }
};

export default menu;
