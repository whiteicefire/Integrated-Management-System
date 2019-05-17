<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
   
        <q-toolbar-title>
          <!-- {{$t('System')}}
          <div slot="subtitle">hello word</div> -->
        </q-toolbar-title>
        <q-btn
          class="langbtn"
          @click="rightDrawerOpen = !rightDrawerOpen"
          size="md"
          icon="palette"
        >
        </q-btn>
        <q-btn class="langbtn" size="md" icon="g_translate">
          <q-popover>
            <q-list class="column" separator link>
                <q-btn v-close-overlay flat  color="white" :text-color="lang == 'zh-hans' ? 'light' : 'black'" label="中文"  :disable="lang == 'zh-hans' ? true : false" @click.native="langcharge('zh-hans')"/>
                <q-btn v-close-overlay flat  color="white" :text-color="lang == 'en-us' ? 'light' : 'black'"  label="English" :disable="lang == 'en-us' ? true : false" @click.native="langcharge('en-us')"/>
            </q-list>
          </q-popover>
        </q-btn>
        
        <div color="primary">
          <img width="40" height="40" class="headimg" :src="headimg"/>
          <q-popover>
            <q-list class="column" separator link>
                <q-btn v-close-overlay flat label="退出登录" @click="logOut()" />
            </q-list>
          </q-popover>
        </div>
      </q-toolbar>
      <q-tabs color="primary">
          <q-route-tab v-for="(item , index) in tabsState" :key="index"
          icon=""
          :label="item.lable"
          :to="item.path"
          exact
          slot="title"
          class="tabbox" 
          ><q-icon name="clear" class="q-icon-clear" @click.native.prevent.stop="deletetab(item)" /></q-route-tab>   
      </q-tabs>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
         <!-- <img src="../assets/sjwszz_login.svg" height="40px" width="60px" alt="心医至成" title="心医至成" style="margin:0 auto"/> -->
        <q-list-header>{{$t('Integrated Management System')}}</q-list-header>
        <!-- <q-item :to="item.path" v-for="(item , index) in menuState" :key="index" @click.native="menurouter(item)">
          <q-item-side :icon="item.icon" />
          <q-item-main :label="item.lable" :sublabel="item.sublabel" />
          <q-item v-for="(t , index) in item" :key="index">
            <q-item-main :label="t.lable" />
          </q-item>
        </q-item> -->
        <q-collapsible separator class="q_menu" :to="item.path" v-for="(item , index) in menuState" :key="index" @click.native="menurouter(item)" :icon="item.icon" :label="item.lable" :collapse-icon="item.collapseicon">
          <!-- <q-item :to="t.path" v-for="(t, index) in item.children" :key="index" @click.native="menurouter(t)">
            <q-item-main :label="t.lable" />
          </q-item> -->
          <q-collapsible :to="t.path" :label="t.lable" v-for="(t, index) in item.children" :key="index" :collapse-icon="t.collapseicon" @click.native="menurouter(t)">
             <q-collapsible :to="tt.path" :label="tt.lable" v-for="(tt, index) in t.children" :key="index"  :collapse-icon="tt.collapseicon" @click.native="menurouter(tt)">
             </q-collapsible>
          </q-collapsible>
        </q-collapsible>
      </q-list>
    </q-layout-drawer>
    <q-layout-drawer side="right" v-model="rightDrawerOpen" overlay>
      <div class="themetitle">主题色</div>
       <q-list link>
        <q-item tag="label" @click.native="chargetheme('primary')">
          <q-item-side>
            <q-radio v-model="list" val="one" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title class="item_background" >科技蓝<div class="background_primary primary_color"></div></q-item-tile>
          </q-item-main>
        </q-item>
        <q-item tag="label" @click.native="chargetheme('secondary')">
          <q-item-side>
            <q-radio color="secondary" v-model="list" val="two" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label class="item_background" >青草绿<div class="background_primary secondary_color"></div></q-item-tile>
          </q-item-main>
        </q-item>
        <q-item multiline tag="label" @click.native="chargetheme('negative')">
          <q-item-side>
            <q-radio color="negative" v-model="list" val="three" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label class="item_background">玫瑰红<div class="background_primary negative_color"></div></q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
       <keep-alive  >
        <router-view v-if="$route.meta.keepAlive" />
       </keep-alive>
       <router-view v-if="!$route.meta.keepAlive" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { Notify } from 'quasar'
import { colors } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen:this.$q.platform.is.desktop,
      lang: '',
      headimg: 'statics/thread.gif',
      list: ''
    }
  },
  computed: {
    menuState:{
      get () {
        return this.$store.state.menu.moduleMenu
      }
    },
    menus () {
      for(const item of this.menuState){
        if(item.path === ''){
          delete item.path
        }
        return this.menuState 
      } 
    },
    tabsState:{
      get () {
        return this.$store.state.tabrouter.tabs
      }
    }
  },
  created (){
    for(const item of this.menuState){
      if(item.path === ''){
        delete item.path
      }
    }
  },
  mounted (){
  },
  methods: {
    menurouter (val) {
      if(val.tree === false){
        this.$store.commit('tabrouter/updateTabsState', val)
      }
    },
    deletetab (val) {
      this.$store.commit('tabrouter/deleteTabsState', val)
    },
    langcharge (val) {
      this.lang = val;
      if(this.$i18n.locale != this.lang){
        this.$i18n.locale = this.lang;
        this.$q.notify({
          message:this.$t('SwitchLanguageSuccess'),
          position: 'top',
          icon: 'check_circle',
          color: 'positive',
      })
      }
    },
    logOut() {
      this.$store
        .dispatch("LogOut")
        .then(() => {
          this.$router.push({
            name: "login"
          });
        })
        .catch(ex => {});
    },
    chargetheme(val) {
      if(val === 'primary'){
        const { setBrand } = colors
        setBrand('primary', '#027be3')
        setBrand('info', '#05a9f3')
        this.$store.commit('SET_PRIMARY', '#027be3')
        this.$store.commit('SET_INFO', '#05a9f3')
      }else if(val === 'secondary'){
        const { setBrand } = colors
        setBrand('primary', '#66bb6a')
        setBrand('info', '#21BA45')
        this.$store.commit('SET_PRIMARY', '#66bb6a')
        this.$store.commit('SET_INFO', '#21BA45')
      }else if(val === 'negative'){
        const { setBrand } = colors
        setBrand('primary', '#DB2828')
        setBrand('info', '#f44336')
        this.$store.commit('SET_PRIMARY', '#DB2828')
        this.$store.commit('SET_INFO', '#f44336')        
      }
    }
  }
}
</script>

<style>
.q-icon-clear{
  position: absolute;
  top:25%;
  transform: translateY(-50%);
  right: 2px;
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 1px;
  /* display: none; */
}
/* .tabbox:hover .q-icon-clear{
  display: block;
} */
.tabbox:first-child .q-icon-clear{
  display: none;
}
.q-icon-clear:hover{
  background-color: #ccc;
}
.q-tabs-head{
  min-height: 30px;
}
.headimg{
  border-radius: 10px;
  margin-left: 15px;
}
.langbtn{
  padding: 4px 12px;
  box-shadow: none;
}
.q_menu .q-collapsible-sub-item{
  padding: 0;
  padding-left: 20px;
  background-color: #e1e1e1;
}
.themetitle{
  padding: 20px 30px;
}
.item_background{
  position: relative;
}
.background_primary{
  width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -10px;
}
.primary_color{
  background-color: #027be3;
}
.secondary_color{
  background-color: #4caf50;
}
.negative_color{
  background-color: #DB2828;
}
</style>
