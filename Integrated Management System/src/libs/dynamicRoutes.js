const dynamicRoutes = [
    {   name: 'zhgl_ylfwcindex',
        meta: {
            name: '医疗服务'
        },
        children:[
            {
                path: '/zhgl_ylfw', 
                name:'zhgl_ylfw',
                component: () => import('pages/zhglview/zhgl_ylfw/zhgl_ylfw.vue'),
                meta: {
                    name: '医疗服务首页',
                    keepAlive:true
                },
            },
            {
                name:'zhgl_mzywfx',
                meta: {
                    name: '门诊业务分析'
                },
                children:[
                  {
                    path: '/zhgl_mjzrctjfx', 
                    name: 'zhgl_mjzrctjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_mjzrctjfx.vue'),
                    meta: {
                        name: '门急诊人次统计分析',
                        keepAlive:true
                    },
                  }
                ]
            }
        ]
    }
]

export default dynamicRoutes