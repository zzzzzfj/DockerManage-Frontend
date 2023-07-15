// 根据权限获取menu列表, 暂时不用
import request from './request'

export const menuList = () => {
    return request({
        url: '/menus'
    })
}
