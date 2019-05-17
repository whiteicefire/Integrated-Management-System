const layout = () => import('layouts/MyLayout.vue');

const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('pages/login')
}

const Error404 = {
  path: '/Error404',
  name: 'Error404',
  component: () => import('pages/Error404')
};

const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: layout,
  children: [
    { path: '/Index',
      name: 'Index',
      component: () => import('pages/Index.vue'),
    },
  ]
};

export const appRoutes = [
  {
    path: '/cms',
    name: 'CMS',
    component: layout,
    children: [
      // { path: '/Table', 
      //   name: 'Table',
      //   component: () => import('pages/dome/Table.vue') 
      // },
      // { path: '/Card', 
      //   name: 'Card',
      //   component: () => import('pages/dome/Card.vue'),
      // },
      // { path: '/Form', 
      //   name: 'Form',
      //   component: () => import('pages/dome/Form.vue'),
      //   meta: {
      //     keepAlive:true
      //   }
      // },
      // { path: '/Forms', 
      //   name: 'Forms',
      //   component: () => import('pages/dome/Forms.vue'),
      //   meta: {
      //     keepAlive:false
      //   }
      // },
      // { path: '/Tree', 
      //   name: 'Tree',
      //   component: () => import('pages/dome/Tree.vue'),
      //   meta: {
      //     keepAlive:true
      //   }
      // },
      // { path: '/moudleTree', 
      //   name: 'moudleTree',
      //   component: () => import('pages/dome/moudleTree.vue'),
      //   meta: {
      //     keepAlive:true
      //   }
      // },  
    
    ]
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

// 所有上面定义的路由都要写在下面的routes里
export const routes = [
  loginRouter,
  otherRouter,
  // ...appRoutes,
  Error404
]
