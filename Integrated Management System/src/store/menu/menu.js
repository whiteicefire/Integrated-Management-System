import { getMenuList } from '@/api/menu/menu'
import Util from '@/libs/util';
import { recursionMenus, recursionRouter, userforrouter } from '@/utils/recursionRouter'
import dynamicRoutes from '@/libs/dynamicRoutes'
import { appRoutes } from '@/router/routes'
import Router from '@/router/index'

const menu = {
    state: {
        moduleMenu: [],//模块菜单
        menuRouter: [],//路由表
        pageOpenedList: [
            {
                title: 'Home',
                path: '',
                name: 'Index'
            }
        ],//打开的标签
        cachePage: [],//缓存的页面
        dontCache: ["Index"], // 在这里定义你不想要缓存的页面的name属性值
        currentModule: '',//当前模块
        accessMenu: [],//可访问的菜单,
        openAccessMenu: [],//展开的可访问的菜单(子级包含父级name)
    },
    mutations: {
        setModuleMenu(state, list) {
            state.moduleMenu = list
        },
        SET_PERMISSION(state, list) {
            state.menuRouter = list
        },
        setOpenAccessMenu(state, list) {
            state.openAccessMenu = list;
        },
        pageOpenedList(state, get) {
            let openedPage = state.pageOpenedList[get.index];
            if (get.argu) {
                openedPage.argu = get.argu;
            }
            if (get.query) {
                openedPage.query = get.query;
            }
            //替换新标签
            state.pageOpenedList.splice(get.index, 1, openedPage);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        increateTag(state, tagObj) {
            console.log('tabobj',tabObj)
            if (!Util.oneOf(tagObj.name, state.dontCache)) {
                state.cachePage.push(tagObj.name);
                localStorage.cachePage = JSON.stringify(state.cachePage);
            }
            state.pageOpenedList.push(tagObj);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        closePage(state, name) {
            for (const [i, v] of state.cachePage.entries()) {
                if (v === name) {
                    state.cachePage.splice(i, 1)
                    break
                }
            }
            for (const [i, v] of state.pageOpenedList.entries()) {
                if (v.name === name) {
                    state.pageOpenedList.splice(i, 1)
                    break
                }
            }
        },
        closePages(state, data) {
            let type = data.type;
            let name = data.name;
            if (type === "all") {
                state.pageOpenedList = [{
                    title: 'Home',
                    path: '',
                    name: 'home_index'
                }]
                state.cachePage = []
            } else {
                for (const [i, v] of state.cachePage.entries()) {
                    if (v === name) {
                        state.cachePage = state.cachePage.splice(i, 1)
                        break
                    }
                }
                for (const [i, v] of state.pageOpenedList.entries()) {
                    if (v.name === name) {
                        state.pageOpenedList = state.pageOpenedList.splice(i, 1, )
                        if (name !== "home_index") {
                            state.pageOpenedList.unshift({
                                title: 'Home',
                                path: '',
                                name: 'home_index'
                            })
                        }
                        break
                    }
                }
            }
        }
    },
    actions: {
        async updateAccessMenu({ commit }, menus) {
            try {
                let response = await getMenuList();
                let accesseMenu = response.data.menus;
                var menuroutes = recursionMenus(accesseMenu, menus)//生成菜单 
                console.log('菜单',menuroutes)
                let openAccesseMenu = Util.openAccesseMenu(menuroutes);
                console.log('展开的菜单',openAccesseMenu)
                let userroutes = recursionRouter(accesseMenu, dynamicRoutes)//递归筛选出路由             
                var userdatarouter = userforrouter(userroutes) //循环展开路由

                let MainContainer = appRoutes.find(v => v.path === '/cms')
                
                let children = MainContainer.children
              
                children.push(...userdatarouter)
                
                /*  初始路由 */
                let initialRoutes = Router.options.userdatarouter
                
                /*  动态添加路由 */
                Router.addRoutes(appRoutes) 
                /* 完整的路由表 */
                commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
            } catch (e) {

            }
            commit('setModuleMenu', menuroutes);
            commit('setOpenAccessMenu', openAccesseMenu);

        },
    }
};

export default menu;
