import HelloWorld from '@/components/HelloWorld'

export default [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/view/index/index.vue'], resolve)
  }
]
