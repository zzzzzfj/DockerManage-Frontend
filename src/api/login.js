import request from './request'

export const login = (data) => {
    return request({
        url: '/admin_login/login',
        method: 'POST',
        data
    })
}
