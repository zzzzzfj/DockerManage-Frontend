// 路由守卫: 根据是否登录导去不同页面
import router from './index'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    if (store.getters.token) { // 已登录
        console.log('route permission: token ' + store.getters.token)
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else { // 未登录
        console.log('route permission: without permission')
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})
