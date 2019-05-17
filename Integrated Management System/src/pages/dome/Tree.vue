<template>
  <div>
    <q-tree
      class="tree"
      :nodes="allsimple"
      default-expand-all
      node-key="label" 
    ></q-tree>
    <q-btn class="m-lefttop-20" @click="hide()">hide</q-btn>
    <q-btn class="m-lefttop-20" @click="hideone()">隐藏第一个</q-btn>
  </div>
  </template>

<style>
.tree{
  width: 30%;
}
.m-lefttop-20{
  margin: 20px 0 0 20px;
}
</style>

<script>

export default {
  name: 'Tree',
  data () {
    return {
      simple: [
        {
          label: 'Satisfied customers',
          avatar: 'statics/thread.gif',
          show: true,
          children: [
            {
              label: 'Good food',
              icon: 'restaurant_menu',
              show: true,
              children: [
                { label: 'Quality ingredients', 
                  show: true,
                  img: 'statics/battlefield.jpg'
                },
                { label: 'Good recipe',
                  show: true,
                  img: 'statics/battlefield.jpg'
                },
                { label: 'hides0', show: false},
                { label: 'hides1', show: false},
                { label: 'hides2', show: false}
              ]
            },
            {
              label: 'Good service (disabled node)',
              show: true,
              disabled: true,
              children: [
                { label: 'Prompt attention', show: true },
                { label: 'Professional waiter', show: true }
              ]
            },
            {
              label: 'hide1',
              show: false,
              children: [
                { label: 'Happy atmosphere', show: true },
                { label: 'Good table presentation', show: true },
                { label: 'Pleasing decor', show: true }
              ]
            },
            {
              label: 'hide2',
              show: false,
              children: [
                { label: 'Happy atmosphere', show: true },
                { label: 'Good table presentation', show: true },
                { label: 'Pleasing decor', show: true }
              ]
            },
            {
              label: 'hide3',
              show: false,
              children: [
                { label: 'Happy atmosphere', show: true },
                { label: 'Good table presentation', show: true },
                { label: 'Pleasing decor', show: true }
              ]
            },
            {
              label: 'hide4',
              show: false,
              children: [
                { label: 'Happy atmosphere', show: true },
                { label: 'Good table presentation', show: true },
                { label: 'Pleasing decor', show: true }
              ]
            },
            {
              label: 'hide5',
              show: false,
              children: [
                { label: 'Happy atmosphere', show: true },
                { label: 'Good table presentation', show: true },
                { label: 'Pleasing decor', show: true }
              ]
            }
          ]
        },
        {
          label: 'twos',
          show: true,
          avatar: 'statics/head.jpg',
          children: [
            {
              label: 'photo',
              show: true,
              img: 'statics/hbo.jpg',
              children: [
                { label: 'Quality ingredients',icon: 'photo', show: true},
                { label: 'Good recipe',icon: 'photo', show: true},
                { label: 'hide', show: false}
              ]
            },
          ]
        },
        {
          label: 'hides',
          show: false,
          avatar: 'statics/margot.jpg',
          children: [
            {
              label: 'photos',
              show: true,
              img: 'statics/joker.jpg',
              children: [
                { label: 'Quality ingredients',icon: 'photo', show: true},
                { label: 'Good recipe',icon: 'photo', show: true},
                { label: 'hide', show: false}
              ]
            },
          ]
        }
      ],
      allsimple: []
    }
  },
  computed: {
    simplelist () {
        return this.allsimple.filter(function (item) {
            return item.show;
        });
    },
    simplelistchildren () {
        return this.simplelist[0].children.filter(function (item) {
            return item.show;
        });
    }
  },
  mounted () {
    this.datasimple();
    console.log('1',this.simplelist)
    console.log('2',this.simplelistchildren)
  },
  methods: {
    datasimple () {
      this.allsimple = JSON.parse(JSON.stringify(this.simple));//对象数组的深拷贝，字符串用.concat
    },
    hideone () {
      this.allsimple[0].children[0].children[0].show = false;
      this.hide();
    },
    hide () {
      for(const i of this.allsimple){  
        for(let k=i.children.length-1; k>=0; k--){   
          if (i.children[k].show === false) {
            i.children.splice(k,1)
          }
        }
      }
      for(const i of this.allsimple){  
        for(const k of i.children){  
          for(const j of k.children){      
            for(let j=k.children.length-1; j>=0; j--){
              if (k.children[j].show === false) {
                k.children.splice(j,1)
              }
            }
          }
        }
      }
      console.log('jjjj',this.allsimple)
    }
  }
}
</script>
