import request from './request'

export const listImages = (data) => {
    return request({
        url: '/docker/list_images',
        data
    })
}

export const pullImage = (data) => {
    return request({
        url: '/docker/pull_image',
        method: 'POST',
        data
    })
}
