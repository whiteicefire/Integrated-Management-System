
export function recursionMenus(userMenu = [], allMenu = []) {
    var realMenu = []
    allMenu.forEach((v, i) => {
        userMenu.forEach((item, index) => {
            if (item.menunm === v.lable) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionMenus(item.children, v.children)
                }
                realMenu.push(v)
            }
        })
    })
    return realMenu
}

export function recursionRouter(userRouter = [], allRouter = []) {
    var realRoutes = []
    allRouter.forEach((v, i) => {
        userRouter.forEach((item, index) => {
            if (item.menunm === v.meta.name) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)
                }
                realRoutes.push(v)
            }
        })
    })
    return realRoutes
}

export function userforrouter(userroutes) {
    var userdatarouter = []
    for(let item of userroutes){
        if(item.children && item.children.length > 0){
            for(let t of item.children){
                if(t.children && t.children.length > 0){
                    for(let v of t.children){
                        if(v.path){
                            delete v.children
                            userdatarouter.push(v)
                        }
                    }
                }
                if(t.path){
                    delete t.children
                    userdatarouter.push(t)
                }
            }
        }
        if(item.path){
            delete item.children
            userdatarouter.push(item)
        }
    }
    return userdatarouter
}