import request from './request'

export const listContainers = () => {
    return request({
        url: '/docker/list_containers'
    })
}

// ContainerId
export const startContainer = (data) => {
    return request({
        url: '/docker/start_container',
        method: 'POST',
        data
    })
}

// ContainerId
export const stopContainer = (data) => {
    return request({
        url: '/docker/stop_container',
        method: 'POST',
        data
    })
}

// ImageName
export const createContainer = (data) => {
    return request({
        url: '/docker/create_container',
        method: 'POST',
        data
    })
}

// ContainerId
export const deleteContainer = (data) => {
    return request({
        url: '/docker/delete_container',
        method: 'POST',
        data
    })
}

// ContainerId
export const askContainer = (params) => {
    return request({
        url: '/docker/get_container_detail',
        params
    })
}
