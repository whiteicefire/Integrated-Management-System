export default {
  menus: [
    {  lable: '医疗服务',  icon: 'add_to_queue', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        {path: '/zhgl_ylfw', name:'zhgl_ylfw', lable: '医疗服务首页',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        { lable: '门诊业务分析',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_mjzrctjfx', name:'zhgl_mjzrctjfx', lable: '门急诊人次统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_jbltjfx', name:'zhgl_mjzrctjfx', lable: '疾病量统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_jbltjfx2', name:'zhgl_mjzrctjfx2', lable: '疾病量统计分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_hztjfx', name:'zhgl_hztjfx', lable: '患者统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_ylfyfx1', name:'zhgl_ylfyfx1', lable: '医疗费用分析1',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_ylfyfx2', name:'zhgl_ylfyfx2', lable: '医疗费用分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_jyjctjfx', name:'zhgl_jyjctjfx', lable: '检验检查统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_yptjfx', name:'zhgl_yptjfx', lable: '药品统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_yptjfx2', name:'zhgl_yptjfx2', lable: '药品统计分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_cftjfx', name:'zhgl_cftjfx', lable: '处方统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_cjjzfx', name:'zhgl_cjjzfx', lable: '村级就诊分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_smjzltj', name:'zhgl_smjzltj', lable: '实名就诊率统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_myyymztjfx', name:'zhgl_myyymztjfx', lable: '民营医院门诊统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          ]
      },
      {
        lable: '住院业务分析',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
        children:[
          {path: '/zhgl_ryrctj', name:'zhgl_ryrctj', lable: '入院人次统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_cyrctj', name:'zhgl_cyrctj', lable: '出院人次统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_hztjfx', name:'zhgl_hztjfx', lable: '患者统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_jbltjfx', name:'zhgl_jbltjfx', lable: '疾病量统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_yztjfx', name:'zhgl_yztjfx', lable: '医嘱统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_jyjctjfx', name:'zhgl_jyjctjfx', lable: '检验检查统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_ylfyfx', name:'zhgl_ylfyfx', lable: '医疗费用分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_ssfx', name:'zhgl_ssfx', lable: '手术分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_ssfx2', name:'zhgl_ssfx2', lable: '手术分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_yngrfx', name:'zhgl_yngrfx', lable: '院内感染分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_cwtj', name:'zhgl_cwtj', lable: '床位统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_myyyzytjfx', name:'zhgl_myyyzytjfx', lable: '民营医院住院统计分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        ]
      },
      {
        lable: '基础资源分析',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
        children:[
          {path: '/zhgl_jczygk', name:'zhgl_jczygk', lable: '基础资源概况',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_rlzyfx', name:'zhgl_rlzyfx', lable: '人力资源分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_sbzyfx', name:'zhgl_sbzyfx', lable: '设备资源分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_cwfx', name:'zhgl_cwfx', lable: '床位分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        ]
      },
      {
        lable: '乡医分析',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
        children:[
          {path: '/zhgl_xymzlfx', name:'zhgl_xymzlfx', lable: '乡医门诊量分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_xyfyfx', name:'zhgl_xyfyfx', lable: '乡医费用分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          {path: '/zhgl_xyjbyyyfx', name:'zhgl_xyjbyyyfx', lable: '乡医疾病与用药分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        ]
      }
      ]
    },
    {
      lable: '实时数据监控',  icon: 'assessment', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        {path: '/zhgl_gjgjzlsssj', name:'zhgl_gjgjzlsssj', lable: '各机构就诊量实时数据',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_gjgsrsssj', name:'zhgl_gjgsrsssj', lable: '各机构收入实时数据',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_jzlsssj', name:'zhgl_jzlsssj', lable: '就诊量实时数据',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_cyssjzsj', name:'zhgl_cyssjzsj', lable: '村医实时就诊数据',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_cyjzsj', name:'zhgl_cyjzsj', lable: '村医就诊数据',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_cjwsjgtj', name:'zhgl_cjwsjgtj', lable: '村级卫生机构统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
      ]
    },
    {
      lable: '医疗机构对比分析',  icon: 'queue_play_next', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        {path: '/zhgl_mjzxxldb', name:'zhgl_mjzxxldb', lable: '门急诊信息类对比',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyxxldb', name:'zhgl_zyxxldb', lable: '住院信息类对比',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_cwxxldb', name:'zhgl_cwxxldb', lable: '床位信息类对比',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_rlzyldb', name:'zhgl_rlzyldb', lable: '人力资源类对比',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_fyxxdbfx', name:'zhgl_fyxxdbfx', lable: '费用信息对比分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
      ]
    },
    {
      lable: '综合查询',  icon: 'find_replace', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        {path: '/zhgl_mjzzlghjlcx', name:'zhgl_mjzzlghjlcx', lable: '门急诊诊疗挂号记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_mjzzlyzbgcx', name:'zhgl_mjzzlyzbgcx', lable: '门急诊诊疗医嘱报告查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_mjzzlbljlcx', name:'zhgl_mjzzlbljlcx', lable: '门急诊诊疗病历记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_mjzzlfyjlcx', name:'zhgl_mjzzlfyjlcx', lable: '门急诊诊疗费用记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_mjzzljcjlcx', name:'zhgl_mjzzljcjlcx', lable: '门急诊诊疗检查记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_mjzzljyjlcx', name:'zhgl_mjzzljyjlcx', lable: '门急诊诊疗检验记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzlryjlcx', name:'zhgl_zyzlryjlcx', lable: '住院诊疗入院记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzlcyjlcx', name:'zhgl_zyzlcyjlcx', lable: '住院诊疗出院记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzlfyjlcx', name:'zhgl_zyzlfyjlcx', lable: '住院诊疗费用记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzlssjlcx', name:'zhgl_zyzlssjlcx', lable: '住院诊疗手术记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzlyzjlcx', name:'zhgl_zyzlyzjlcx', lable: '住院诊疗医嘱记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzljcjlcx', name:'zhgl_zyzljcjlcx', lable: '住院诊疗检查记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zyzljyjlcx', name:'zhgl_zyzljyjlcx', lable: '住院诊疗检验记录查询',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
      ]
    },
    {
      lable: '公共卫生分析',  icon: 'videogame_asset', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        {path: '/zhgl_shouye', name:'zhgl_shouye', lable: '首页',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_grdaglfx', name:'zhgl_grdaglfx', lable: '个人档案管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_jtdaglfx', name:'zhgl_jtdaglfx', lable: '家庭档案管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_gxyglfx', name:'zhgl_gxyglfx', lable: '高血压管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_gxyglfx2', name:'zhgl_gxyglfx2', lable: '高血压管理分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_tnbglfx', name:'zhgl_tnbglfx', lable: '糖尿病管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_tnbglfx2', name:'zhgl_tnbglfx2', lable: '糖尿病管理分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_lnrglfx', name:'zhgl_lnrglfx', lable: '老年人管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_jbkzglfx', name:'zhgl_jbkzglfx', lable: '疾病控制管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_ycfglfx', name:'zhgl_ycfglfx', lable: '孕产妇管理分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_ycfglfx2', name:'zhgl_ycfglfx2', lable: '孕产妇管理分析2',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_fnbpcfx', name:'zhgl_fnbpcfx', lable: '妇女病普查分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_jsbtj', name:'zhgl_jsbtj', lable: '精神病统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_swtj', name:'zhgl_swtj', lable: '死亡统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_xsegl', name:'zhgl_xsegl', lable: '新生儿管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_qxetgl', name:'zhgl_qxetgl', lable: '缺陷儿童管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_etjkgl', name:'zhgl_etjkgl', lable: '儿童健康管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_tretjkgl', name:'zhgl_tretjkgl', lable: '体弱儿童健康管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_etyfjzfx', name:'zhgl_etyfjzfx', lable: '儿童预防接种分析',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
      ]
    },
    {
      lable: '经常性卫生费用核算',  icon: 'exposure', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        {path: '/zhgl_yymzfyxxb', name:'zhgl_yymzfyxxb', lable: '医院门诊费用信息表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_yyzyfyxxb', name:'zhgl_yyzyfyxxb', lable: '医院住院费用信息表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_zfymqkb', name:'zhgl_zfymqkb', lable: '自费疫苗情况表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
        {path: '/zhgl_mfymqkb', name:'zhgl_mfymqkb', lable: '免费疫苗情况表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
      ]
    },
    {
      lable: '卫生局统报表填报',  icon: 'web', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        { 
          lable: '公卫科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_gwjbb', name:'zhgl_gwjbb', lable: '公卫季报表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_gwlrjktcyb', name:'zhgl_gwlrjktcyb', lable: '公卫老人健康体查月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
          ] 
        },
        { 
          lable: '计生科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_jscsb', name:'zhgl_jscsb', lable: '计生出生表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_jsjyb', name:'zhgl_jsjyb', lable: '计生节育表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
          ] 
        },
        { 
          lable: '医政科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_jtysqyjzyb', name:'zhgl_jtysqyjzyb', lable: '家庭医生签约进展月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_jkfpgzqkbb', name:'zhgl_jkfpgzqkbb', lable: '健康扶贫工作情况报表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_ylfwcslyb', name:'zhgl_ylfwcslyb', lable: '医疗废物产生量月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_ylfwcslnb', name:'zhgl_ylfwcslnb', lable: '医疗废物产生量年报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_zyyskqyb', name:'zhgl_zyyskqyb', lable: '支援医生考勤月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_pzysygzlyb', name:'zhgl_pzysygzlyb', lable: '派驻医师月工作量月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          ] 
        },
        { 
          lable: '财务科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_yljgylfyqkb', name:'zhgl_yljgylfyqkb', lable: '医疗机构医疗费用情况表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
          ] 
        },
      ]
    },
    {
      lable: '卫生局统报表审批',  icon: 'assignment_turned_in', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        { 
          lable: '公卫科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_spgwjbb', name:'zhgl_spgwjbb', lable: '公卫季报表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_spgwlrjktcyb', name:'zhgl_spgwlrjktcyb', lable: '公卫老人健康体查月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
          ] 
        },
        { 
          lable: '计生科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_spjscsb', name:'zhgl_spjscsb', lable: '计生出生表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_spjsjyb', name:'zhgl_spjsjyb', lable: '计生节育表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
          ] 
        },
        { 
          lable: '医政科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_spjtysqyjzyb', name:'zhgl_spjtysqyjzyb', lable: '家庭医生签约进展月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_spjkfpgzqkbb', name:'zhgl_spjkfpgzqkbb', lable: '健康扶贫工作情况报表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_spylfwcslyb', name:'zhgl_spylfwcslyb', lable: '医疗废物产生量月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_spzyyskqyb', name:'zhgl_spzyyskqyb', lable: '支援医生考勤月报',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_sppzysygzlybsp', name:'zhgl_sppzysygzlybsp', lable: '派驻医师月工作量月报审批',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          ] 
        },
        { 
          lable: '财务科',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_spyljgylfyqkb', name:'zhgl_spyljgylfyqkb', lable: '医疗机构医疗费用情况表',  icon: 'home', sublabel: '', collapseicon: '1', tree: false}
          ] 
        },
      ]
    },
    {
      lable: '系统维护',  icon: 'build', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        { 
          lable: '微信公众号维护',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_gjchf', name:'zhgl_gjchf', lable: '关键词回复',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_zdycd', name:'zhgl_zdycd', lable: '自定义菜单',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_cdpz', name:'zhgl_cdpz', lable: '菜单配置',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_qfgn', name:'zhgl_qfgn', lable: '群发功能',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_scgl', name:'zhgl_scgl', lable: '素材管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_mbxxgl', name:'zhgl_mbxxgl', lable: '模版消息管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_dsfxtzcgl', name:'zhgl_dsfxtzcgl', lable: '第三方系统注册管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_twxxzsgl', name:'zhgl_twxxzsgl', lable: '图文消息展示管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_cjwtzsgl', name:'zhgl_cjwtzsgl', lable: '常见问题展示管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_gjgewmgl', name:'zhgl_gjgewmgl', lable: '各机构二维码管理',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_gjgsmtj', name:'zhgl_gjgsmtj', lable: '各机构扫描统计',  icon: 'home', sublabel: '', collapseicon: '1', tree: false},
          ] 
        },
        { 
          lable: '预警信息管理',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
          children:[
            {path: '/zhgl_tzzpz', name:'zhgl_tzzpz', lable: '通知组配置',  icon: 'hdr_strong', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_yjzbpz', name:'zhgl_yjzbpz', lable: '预警指标配置',  icon: 'hdr_strong', sublabel: '', collapseicon: '1', tree: false},
            {path: '/zhgl_yjxxpz', name:'zhgl_yjxxpz', lable: '预警信息配置',  icon: 'hdr_strong', sublabel: '', collapseicon: '1', tree: false},
          ] 
        }
      ]
    },
    {
      lable: '测试',  icon: 'home', sublabel: '', collapseicon: 'keyboard_arrow_down', tree: true,
      children:[
        { path: '/Table', name:'Table', lable: '表格', icon: 'web', sublabel: '项目的表格页', collapseicon: '1', tree:false,
        },
        { path: '/Card', lable: '卡片', icon: 'contact_mail', sublabel: '卡片页', collapseicon: '1', tree:false,
        },
        { path: '/Form', lable: '表单', icon: 'assignment', sublabel: '表单页', collapseicon: '1', tree:false,
        },
        { path: '/Forms', lable: '又一个表单', icon: 'assignment', sublabel: '表单页', collapseicon: '1', tree:false,
        },
        { path: '/Tree', lable: '树形菜单', icon: 'assignment', sublabel: '一个🌲', collapseicon: '1', tree:false,
        },
        { lable: '🌲菜单', icon: 'assignment', sublabel: '又一个🌲', collapseicon: '', tree:true,
          children:[
            {
              lable: '🌲',
              path: '/moudleTree', icon: 'assignment', sublabel: '又一个🌲', collapseicon: '1', tree:false,
            }
          ]
        }
      ]
    }
    
   
  ]
}
