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
                    }
                  },
                  {
                    path: '/zhgl_jbltjfx', 
                    name: 'zhgl_jbltjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_jbltjfx.vue'),
                    meta: {
                        name: '疾病量统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_jbltjfx2', 
                    name: 'zhgl_jbltjfx2',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_jbltjfx2.vue'),
                    meta: {
                        name: '疾病量统计分析2',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_hztjfx', 
                    name: 'zhgl_hztjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_hztjfx.vue'),
                    meta: {
                        name: '患者统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_ylfyfx1', 
                    name: 'zhgl_ylfyfx1',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_ylfyfx1.vue'),
                    meta: {
                        name: '医疗费用分析1',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_ylfyfx2', 
                    name: 'zhgl_ylfyfx2',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_ylfyfx2.vue'),
                    meta: {
                        name: '医疗费用分析2',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_jyjctjfx', 
                    name: 'zhgl_jyjctjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_jyjctjfx.vue'),
                    meta: {
                        name: '检验检查统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_yptjfx', 
                    name: 'zhgl_yptjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_yptjfx.vue'),
                    meta: {
                        name: '药品统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_yptjfx2', 
                    name: 'zhgl_yptjfx2',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_yptjfx2.vue'),
                    meta: {
                        name: '药品统计分析2',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cftjfx', 
                    name: 'zhgl_cftjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_cftjfx.vue'),
                    meta: {
                        name: '处方统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cjjzfx', 
                    name: 'zhgl_cjjzfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_cjjzfx.vue'),
                    meta: {
                        name: '村级就诊分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_smjzltj', 
                    name: 'zhgl_smjzltj',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_smjzltj.vue'),
                    meta: {
                        name: '实名就诊率统计',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_myyymztjfx', 
                    name: 'zhgl_myyymztjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_mzywfx/zhgl_myyymztjfx.vue'),
                    meta: {
                        name: '民营医院门诊统计分析',
                        keepAlive:true
                    }
                  }
                ]
            },
            {
                name:'zhgl_zyywfx',
                meta:{
                    name: '住院业务分析'
                },
                children:[
                  {
                    path: '/zhgl_ryrctj', 
                    name: 'zhgl_ryrctj',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_ryrctj.vue'),
                    meta: {
                        name: '入院人次统计',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cyrctj', 
                    name: 'zhgl_cyrctj',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_cyrctj.vue'),
                    meta: {
                        name: '出院人次统计',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_hztjfx', 
                    name: 'zhgl_hztjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_hztjfx.vue'),
                    meta: {
                        name: '患者统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_jbltjfx', 
                    name: 'zhgl_jbltjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_jbltjfx.vue'),
                    meta: {
                        name: '疾病量统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_yztjfx', 
                    name: 'zhgl_yztjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_yztjfx.vue'),
                    meta: {
                        name: '医嘱统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_jyjctjfx', 
                    name: 'zhgl_jyjctjfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_jyjctjfx.vue'),
                    meta: {
                        name: '检验检查统计分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_ylfyfx', 
                    name: 'zhgl_ylfyfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_ylfyfx.vue'),
                    meta: {
                        name: '医疗费用分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_ssfx', 
                    name: 'zhgl_ssfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_ssfx.vue'),
                    meta: {
                        name: '手术分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_ssfx2', 
                    name: 'zhgl_ssfx2',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_ssfx2.vue'),
                    meta: {
                        name: '手术分析2',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_yngrfx', 
                    name: 'zhgl_yngrfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_yngrfx.vue'),
                    meta: {
                        name: '院内感染分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cwtj', 
                    name: 'zhgl_cwtj',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_cwtj.vue'),
                    meta: {
                        name: '床位统计',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_myyyzytjfx', 
                    name: 'zhgl_rzhgl_myyyzytjfxyrctj',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_zyywfx/zhgl_myyyzytjfx.vue'),
                    meta: {
                        name: '民营医院住院统计分析',
                        keepAlive:true
                    }
                  },
                ]
            },
            {
                name:'zhgl_yczyfx',
                meta:{
                    name: '基础资源分析'
                },
                children:[
                  {
                    path: '/zhgl_jczygk', 
                    name: 'zhgl_jczygk',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_jczyfx/zhgl_jczygk.vue'),
                    meta: {
                        name: '基础资源概况',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_rlzyfx', 
                    name: 'zhgl_rlzyfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_jczyfx/zhgl_rlzyfx.vue'),
                    meta: {
                        name: '人力资源分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_sbzyfx', 
                    name: 'zhgl_sbzyfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_jczyfx/zhgl_sbzyfx.vue'),
                    meta: {
                        name: '设备资源分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cwfx', 
                    name: 'zhgl_cwfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_jczyfx/zhgl_cwfx.vue'),
                    meta: {
                        name: '床位分析',
                        keepAlive:true
                    }
                  }
                ]
            },
            {
                name:'zhgl_xyfx',
                meta:{
                    name: '乡医分析'
                },
                children:[
                  {
                    path: '/zhgl_xymzlfx', 
                    name: 'zhgl_xymzlfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_xyfx/zhgl_xymzlfx.vue'),
                    meta: {
                        name: '乡医门诊量分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_xyfyfx', 
                    name: 'zhgl_xyfyfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_xyfx/zhgl_xyfyfx.vue'),
                    meta: {
                        name: '乡医费用分析',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_xyjbyyyfx', 
                    name: 'zhgl_xyjbyyyfx',
                    component: () => import('pages/zhglview/zhgl_ylfw/zhgl_xyfx/zhgl_xyjbyyyfx.vue'),
                    meta: {
                        name: '乡医疾病与用药分析',
                        keepAlive:true
                    }
                  }
                ]
            }
          //   {
          //     name:'zhgl_zyywfx',
          //     meta:{
          //         name: '住院业务分析'
          //     },
          //     children:[]
          // }
        ]
    },
    {
        name: 'zhgl_sssjjk',
        meta: {
            name: '实时数据监控'
        },
        children:[
          {
              path: '/zhgl_gjgjzlsssj', 
              name:'zhgl_gjgjzlsssj',
              component: () => import('pages/zhglview/zhgl_sssjjk/zhgl_gjgjzlsssj.vue'),
              meta: {
                  name: '各机构就诊量实时数据',
                  keepAlive:true
              },
          },
          {
            path: '/zhgl_gjgsrsssj', 
            name:'zhgl_gjgsrsssj',
            component: () => import('pages/zhglview/zhgl_sssjjk/zhgl_gjgsrsssj.vue'),
            meta: {
                name: '各机构收入实时数据',
                keepAlive:true
            },
          },
          {
              path: '/zhgl_jzlsssj', 
              name:'zhgl_jzlsssj',
              component: () => import('pages/zhglview/zhgl_sssjjk/zhgl_jzlsssj.vue'),
              meta: {
                  name: '就诊量实时数据',
                  keepAlive:true
              },
          },
          {
              path: '/zhgl_cyssjzsj', 
              name:'zhgl_cyssjzsj',
              component: () => import('pages/zhglview/zhgl_sssjjk/zhgl_cyssjzsj.vue'),
              meta: {
                  name: '村医实时就诊数据',
                  keepAlive:true
              },
          },
          {
              path: '/zhgl_cyjzsj', 
              name:'zhgl_cyjzsj',
              component: () => import('pages/zhglview/zhgl_sssjjk/zhgl_cyjzsj.vue'),
              meta: {
                  name: '村医就诊数据',
                  keepAlive:true
              },
          },
          {
              path: '/zhgl_cjwsjgtj', 
              name:'zhgl_cjwsjgtj',
              component: () => import('pages/zhglview/zhgl_sssjjk/zhgl_cjwsjgtj.vue'),
              meta: {
                  name: '村级卫生机构统计',
                  keepAlive:true
              },
          }
        ]
    },
    {
      name: 'zhgl_yljgdbfx',
      meta: {
          name: '医疗机构对比分析'
      },
      children:[
        {
            path: '/zhgl_mjzxxldb', 
            name:'zhgl_mjzxxldb',
            component: () => import('pages/zhglview/zhgl_yljgdbfx/zhgl_mjzxxldb.vue'),
            meta: {
                name: '门急诊信息类对比',
                keepAlive:true
            },
        },
        {
          path: '/zhgl_zyxxldb', 
          name:'zhgl_zyxxldb',
          component: () => import('pages/zhglview/zhgl_yljgdbfx/zhgl_zyxxldb.vue'),
          meta: {
              name: '住院信息类对比',
              keepAlive:true
          },
        },
        {
            path: '/zhgl_cwxxldb', 
            name:'zhgl_jzlzhgl_cwxxldbsssj',
            component: () => import('pages/zhglview/zhgl_yljgdbfx/zhgl_cwxxldb.vue'),
            meta: {
                name: '床位信息类对比',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_rlzyldb', 
            name:'zhgl_rlzyldb',
            component: () => import('pages/zhglview/zhgl_yljgdbfx/zhgl_rlzyldb.vue'),
            meta: {
                name: '人力资源类对比',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_fyxxdbfx', 
            name:'zhgl_fyxxdbfx',
            component: () => import('pages/zhglview/zhgl_yljgdbfx/zhgl_fyxxdbfx.vue'),
            meta: {
                name: '费用信息对比分析',
                keepAlive:true
            },
        }
      ]
    },
    {
      name: 'zhgl_zhcx',
      meta: {
          name: '综合查询'
      },
      children:[
        {
            path: '/zhgl_mjzzlghjlcx', 
            name:'zhgl_mjzzlghjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_mjzzlghjlcx.vue'),
            meta: {
                name: '门急诊诊疗挂号记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_mjzzlyzbgcx', 
            name:'zhgl_mjzzlyzbgcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_mjzzlyzbgcx.vue'),
            meta: {
                name: '门急诊诊疗医嘱报告查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_mjzzlbljlcx', 
            name:'zhgl_mjzzlbljlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_mjzzlbljlcx.vue'),
            meta: {
                name: '门急诊诊疗病历记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_mjzzlfyjlcx', 
            name:'zhgl_mjzzlyzbzhgl_mjzzlfyjlcxgcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_mjzzlfyjlcx.vue'),
            meta: {
                name: '门急诊诊疗费用记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_mjzzljcjlcx', 
            name:'zhgl_mjzzljcjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_mjzzljcjlcx.vue'),
            meta: {
                name: '门急诊诊疗检查记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_mjzzljyjlcx', 
            name:'zhgl_mjzzljyjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_mjzzljyjlcx.vue'),
            meta: {
                name: '门急诊诊疗检验记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzlryjlcx', 
            name:'zhgl_zyzlryjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzlryjlcx.vue'),
            meta: {
                name: '住院诊疗入院记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzlcyjlcx', 
            name:'zhgl_zyzlcyjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzlcyjlcx.vue'),
            meta: {
                name: '住院诊疗出院记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzlfyjlcx', 
            name:'zhgl_zyzlfyjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzlfyjlcx.vue'),
            meta: {
                name: '住院诊疗费用记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzlssjlcx', 
            name:'zhgl_zyzlssjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzlssjlcx.vue'),
            meta: {
                name: '住院诊疗手术记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzlyzjlcx', 
            name:'zhgl_zyzlyzjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzlyzjlcx.vue'),
            meta: {
                name: '住院诊疗医嘱记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzljcjlcx', 
            name:'zhgl_zyzljcjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzljcjlcx.vue'),
            meta: {
                name: '住院诊疗检查记录查询',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zyzljyjlcx', 
            name:'zhgl_zyzljyjlcx',
            component: () => import('pages/zhglview/zhgl_zhcx/zhgl_zyzljyjlcx.vue'),
            meta: {
                name: '住院诊疗检验记录查询',
                keepAlive:true
            },
        },
      ]
    },
    {
      name: 'zhgl_ggwsfx',
      meta: {
          name: '公共卫生分析'
      },
      children:[
        {
            path: '/zhgl_shouye', 
            name:'zhgl_shouye',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_shouye.vue'),
            meta: {
                name: '首页',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_grdaglfx', 
            name:'zhgl_grdaglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_grdaglfx.vue'),
            meta: {
                name: '个人档案管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_jtdaglfx', 
            name:'zhgl_jtdaglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_jtdaglfx.vue'),
            meta: {
                name: '家庭档案管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_gxyglfx', 
            name:'zhgl_gxyglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_gxyglfx.vue'),
            meta: {
                name: '高血压管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_gxyglfx2', 
            name:'zhgl_gxyglfx2',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_gxyglfx2.vue'),
            meta: {
                name: '高血压管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_tnbglfx', 
            name:'zhgl_tnbglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_tnbglfx.vue'),
            meta: {
                name: '糖尿病管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_tnbglfx2', 
            name:'zhgl_tnbglfx2',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_tnbglfx2.vue'),
            meta: {
                name: '糖尿病管理分析2',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_lnrglfx', 
            name:'zhgl_lnrglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_lnrglfx.vue'),
            meta: {
                name: '老年人管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_jbkzglfx', 
            name:'zhgl_jbkzglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_jbkzglfx.vue'),
            meta: {
                name: '疾病控制管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_ycfglfx', 
            name:'zhgl_ycfglfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_ycfglfx.vue'),
            meta: {
                name: '孕产妇管理分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_ycfglfx2', 
            name:'zhgl_ycfglfx2',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_ycfglfx2.vue'),
            meta: {
                name: '孕产妇管理分析2',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_fnbpcfx', 
            name:'zhgl_fnbpcfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_fnbpcfx.vue'),
            meta: {
                name: '妇女病普查分析',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_jsbtj', 
            name:'zhgl_jsbtj',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_jsbtj.vue'),
            meta: {
                name: '精神病统计',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_swtj', 
            name:'zhgl_swtj',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_swtj.vue'),
            meta: {
                name: '死亡统计',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_xsegl', 
            name:'zhgl_xsegl',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_xsegl.vue'),
            meta: {
                name: '新生儿管理',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_qxetgl', 
            name:'zhgl_qxetgl',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_qxetgl.vue'),
            meta: {
                name: '缺陷儿童管理',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_etjkgl', 
            name:'zhgl_etjkgl',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_etjkgl.vue'),
            meta: {
                name: '儿童健康管理',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_tretjkgl', 
            name:'zhgl_tretjkgl',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_tretjkgl.vue'),
            meta: {
                name: '体弱儿童健康管理',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_etyfjzfx', 
            name:'zhgl_etyfjzfx',
            component: () => import('pages/zhglview/zhgl_ggwsfx/zhgl_etyfjzfx.vue'),
            meta: {
                name: '儿童预防接种分析',
                keepAlive:true
            },
        },
      ]
    },
    {
      name: 'zhgl_jcxwsfyhs',
      meta: {
          name: '经常性卫生费用核算'
      },
      children:[
        {
            path: '/zhgl_yymzfyxxb', 
            name:'zhgl_yymzfyxxb',
            component: () => import('pages/zhglview/zhgl_jcxwsfyhs/zhgl_yymzfyxxb.vue'),
            meta: {
                name: '医院门诊费用信息表',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_yyzyfyxxb', 
            name:'zhgl_yyzyfyxxb',
            component: () => import('pages/zhglview/zhgl_jcxwsfyhs/zhgl_yyzyfyxxb.vue'),
            meta: {
                name: '医院住院费用信息表',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_zfymqkb', 
            name:'zhgl_zfymqkb',
            component: () => import('pages/zhglview/zhgl_jcxwsfyhs/zhgl_zfymqkb.vue'),
            meta: {
                name: '自费疫苗情况表',
                keepAlive:true
            },
        },
        {
            path: '/zhgl_mfymqkb', 
            name:'zhgl_mfymqkb',
            component: () => import('pages/zhglview/zhgl_jcxwsfyhs/zhgl_mfymqkb.vue'),
            meta: {
                name: '免费疫苗情况表',
                keepAlive:true
            },
        },
      ]
    },
    {   name: 'zhgl_wsjtbbtb',
        meta: {
            name: '卫生局统报表填报'
        },
        children:[
            {
                name:'zhgl_gwk',
                meta: {
                    name: '公卫科'
                },
                children:[
                  {
                    path: '/zhgl_gwjbb', 
                    name: 'zhgl_gwjbb',
                    component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_gwk/zhgl_gwjbb.vue'),
                    meta: {
                        name: '公卫季报表',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_gwlrjktcyb', 
                    name: 'zhgl_gwlrjktcyb',
                    component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_gwk/zhgl_gwlrjktcyb.vue'),
                    meta: {
                        name: '公卫老人健康体查月报',
                        keepAlive:true
                    }
                  },
                ]
            },
            {
                name:'zhgl_jsk',
                meta: {
                    name: '计生科'
                },
                children:[
                    {
                        path: '/zhgl_jscsb', 
                        name: 'zhgl_jscsb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_jsk/zhgl_jscsb.vue'),
                        meta: {
                            name: '计生出生表',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_jsjyb', 
                        name: 'zhgl_jsjyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_jsk/zhgl_jsjyb.vue'),
                        meta: {
                            name: '计生节育表',
                            keepAlive:true
                        }
                    },
                ]
            },
            {
                name:'zhgl_yzk',
                meta: {
                    name: '医政科'
                },
                children:[
                    {
                        path: '/zhgl_jtysqyjzyb', 
                        name: 'zhgl_jtysqyjzyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_yzk/zhgl_jtysqyjzyb.vue'),
                        meta: {
                            name: '家庭医生签约进展月报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_jkfpgzqkbb', 
                        name: 'zhgl_jkfpgzqkbb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_yzk/zhgl_jkfpgzqkbb.vue'),
                        meta: {
                            name: '健康扶贫工作情况报表',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_ylfwcslyb', 
                        name: 'zhgl_ylfwcslyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_yzk/zhgl_ylfwcslyb.vue'),
                        meta: {
                            name: '医疗废物产生量月报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_ylfwcslnb', 
                        name: 'zhgl_ylfwcslnb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_yzk/zhgl_ylfwcslnb.vue'),
                        meta: {
                            name: '医疗废物产生量年报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_zyyskqyb', 
                        name: 'zhgl_zyyskqyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_yzk/zhgl_zyyskqyb.vue'),
                        meta: {
                            name: '支援医生考勤月报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_pzysygzlyb', 
                        name: 'zhgl_pzysygzlyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_yzk/zhgl_pzysygzlyb.vue'),
                        meta: {
                            name: '派驻医师月工作量月报',
                            keepAlive:true
                        }
                    },
                ]
            },
            {
                name:'zhgl_cwk',
                meta: {
                    name: '财务科'
                },
                children:[
                    {
                        path: '/zhgl_yljgylfyqkb', 
                        name: 'zhgl_yljgylfyqkb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbtb/zhgl_cwk/zhgl_yljgylfyqkb.vue'),
                        meta: {
                            name: '医疗机构医疗费用情况表',
                            keepAlive:true
                        }
                    },
                ]
            },
        ]
    },
    {   name: 'zhgl_wsjtbbsp',
        meta: {
            name: '卫生局统报表审批'
        },
        children:[
            {
                name:'zhgl_gwk',
                meta: {
                    name: '公卫科'
                },
                children:[
                  {
                    path: '/zhgl_spgwlrjktcyb', 
                    name: 'zhgl_spgwlrjktcyb',
                    component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_gwk/zhgl_spgwlrjktcyb.vue'),
                    meta: {
                        name: '公卫老人健康体查月报',
                        keepAlive:true
                    }
                  },
                ]
            },
            {
                name:'zhgl_jsk',
                meta: {
                    name: '计生科'
                },
                children:[
                    {
                        path: '/zhgl_spjscsb', 
                        name: 'zhgl_spjscsb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_jsk/zhgl_spjscsb.vue'),
                        meta: {
                            name: '计生出生表',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_spjsjyb', 
                        name: 'zhgl_spjsjyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_jsk/zhgl_spjsjyb.vue'),
                        meta: {
                            name: '计生节育表',
                            keepAlive:true
                        }
                    },
                ]
            },
            {
                name:'zhgl_yzk',
                meta: {
                    name: '医政科'
                },
                children:[
                    {
                        path: '/zhgl_spjtysqyjzyb', 
                        name: 'zhgl_spjtysqyjzyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_yzk/zhgl_spjtysqyjzyb.vue'),
                        meta: {
                            name: '家庭医生签约进展月报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_spjkfpgzqkbb', 
                        name: 'zhgl_spjkfpgzqkbb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_yzk/zhgl_spjkfpgzqkbb.vue'),
                        meta: {
                            name: '健康扶贫工作情况报表',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_spylfwcslyb', 
                        name: 'zhgl_spylfwcslyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_yzk/zhgl_spylfwcslyb.vue'),
                        meta: {
                            name: '医疗废物产生量月报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_spzyyskqyb', 
                        name: 'zhgl_spzyyskqyb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_yzk/zhgl_spzyyskqyb.vue'),
                        meta: {
                            name: '支援医生考勤月报',
                            keepAlive:true
                        }
                    },
                    {
                        path: '/zhgl_sppzysygzlybsp', 
                        name: 'zhgl_sppzysygzlybsp',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_yzk/zhgl_sppzysygzlybsp.vue'),
                        meta: {
                            name: '派驻医师月工作量月报审批',
                            keepAlive:true
                        }
                    },
                ]
            },
            {
                name:'zhgl_cwk',
                meta: {
                    name: '财务科'
                },
                children:[
                    {
                        path: '/zhgl_spyljgylfyqkb', 
                        name: 'zhgl_spyljgylfyqkb',
                        component: () => import('pages/zhglview/zhgl_wsjtbbsp/zhgl_cwk/zhgl_spyljgylfyqkb.vue'),
                        meta: {
                            name: '医疗机构医疗费用情况表',
                            keepAlive:true
                        }
                    },
                ]
            },
        ]
    },
    {   name: 'zhgl_xtwh',
        meta: {
            name: '系统维护'
        },
        children:[
            {
                name:'zhgl_wxgzhwh',
                meta: {
                    name: '微信公众号维护'
                },
                children:[
                  {
                    path: '/zhgl_gjchf', 
                    name: 'zhgl_gjchf',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_gjchf.vue'),
                    meta: {
                        name: '关键词回复',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_zdycd', 
                    name: 'zhgl_zdycd',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_zdycd.vue'),
                    meta: {
                        name: '自定义菜单',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cdpz', 
                    name: 'zhgl_cdpz',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_cdpz.vue'),
                    meta: {
                        name: '菜单配置',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_qfgn', 
                    name: 'zhgl_qfgn',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_qfgn.vue'),
                    meta: {
                        name: '群发功能',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_scgl', 
                    name: 'zhgl_scgl',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_scgl.vue'),
                    meta: {
                        name: '素材管理',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_dsfxtzcgl', 
                    name: 'zhgl_dsfxtzcgl',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_dsfxtzcgl.vue'),
                    meta: {
                        name: '第三方系统注册管理',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_twxxzsgl', 
                    name: 'zhgl_twxxzsgl',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_twxxzsgl.vue'),
                    meta: {
                        name: '图文消息展示管理',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_cjwtzsgl', 
                    name: 'zhgl_cjwtzsgl',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_cjwtzsgl.vue'),
                    meta: {
                        name: '常见问题展示管理',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_gjgewmgl', 
                    name: 'zhgl_gjgewmgl',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_gjgewmgl.vue'),
                    meta: {
                        name: '各机构二维码管理',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_gjgsmtj', 
                    name: 'zhgl_gjgsmtj',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_wxgzhwh/zhgl_gjgsmtj.vue'),
                    meta: {
                        name: '各机构扫描统计',
                        keepAlive:true
                    }
                  },
                ]
            },
            {
                name:'zhgl_yjxxgl',
                meta: {
                    name: '预警信息管理'
                },
                children:[
                  {
                    path: '/zhgl_tzzpz', 
                    name: 'zhgl_tzzpz',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_yjxxgl/zhgl_tzzpz.vue'),
                    meta: {
                        name: '通知组配置',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_yjzbpz', 
                    name: 'zhgl_yjzbpz',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_yjxxgl/zhgl_yjzbpz.vue'),
                    meta: {
                        name: '预警指标配置',
                        keepAlive:true
                    }
                  },
                  {
                    path: '/zhgl_yjxxpz', 
                    name: 'zhgl_yjxxpz',
                    component: () => import('pages/zhglview/zhgl_xtwh/zhgl_yjxxgl/zhgl_yjxxpz.vue'),
                    meta: {
                        name: '预警信息配置',
                        keepAlive:true
                    }
                  },
                ]
            },
        ]
    },
]

export default dynamicRoutes